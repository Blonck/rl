# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

from __future__ import annotations

import abc
import itertools
import warnings
from typing import Any, Dict, List, Optional, Sequence, Tuple, Union

import numpy as np
import torch
from tensordict import TensorDict
from tensordict.tensordict import TensorDictBase

from torchrl.data.tensor_specs import TensorSpec, UnboundedContinuousTensorSpec
from torchrl.envs.common import _EnvWrapper


class BaseInfoDictReader(metaclass=abc.ABCMeta):
    """Base class for info-readers."""

    @abc.abstractmethod
    def __call__(
        self, info_dict: Dict[str, Any], tensordict: TensorDictBase
    ) -> TensorDictBase:
        raise NotImplementedError

    @abc.abstractproperty
    def info_spec(self) -> Dict[str, TensorSpec]:
        raise NotImplementedError


class default_info_dict_reader(BaseInfoDictReader):
    """Default info-key reader.

    In cases where keys can be directly written to a tensordict (mostly if they abide to the
    tensordict shape), one simply needs to indicate the keys to be registered during
    instantiation.

    Examples:
        >>> from torchrl.envs.libs.gym import GymWrapper
        >>> from torchrl.envs import default_info_dict_reader
        >>> reader = default_info_dict_reader(["my_info_key"])
        >>> # assuming "some_env-v0" returns a dict with a key "my_info_key"
        >>> env = GymWrapper(gym.make("some_env-v0"))
        >>> env.set_info_dict_reader(info_dict_reader=reader)
        >>> tensordict = env.reset()
        >>> tensordict = env.rand_step(tensordict)
        >>> assert "my_info_key" in tensordict.keys()

    """

    def __init__(
        self,
        keys: List[str] = None,
        spec: Union[Sequence[TensorSpec], Dict[str, TensorSpec]] = None,
    ):
        if keys is None:
            keys = []
        self.keys = keys

        if isinstance(spec, Sequence):
            if len(spec) != len(self.keys):
                raise ValueError(
                    "If specifying specs for info keys with a sequence, the "
                    "length of the sequence must match the number of keys"
                )
            self._info_spec = dict(zip(self.keys, spec))
        else:
            if spec is None:
                spec = {}

            self._info_spec = {
                key: spec.get(key, UnboundedContinuousTensorSpec()) for key in self.keys
            }

    def __call__(
        self, info_dict: Dict[str, Any], tensordict: TensorDictBase
    ) -> TensorDictBase:
        if not isinstance(info_dict, dict) and len(self.keys):
            warnings.warn(
                f"Found an info_dict of type {type(info_dict)} "
                f"but expected type or subtype `dict`."
            )
        for key in self.keys:
            if key in info_dict:
                tensordict[key] = info_dict[key]
        return tensordict

    @property
    def info_spec(self) -> Dict[str, TensorSpec]:
        return self._info_spec


class GymLikeEnv(_EnvWrapper):
    """A gym-like env is an environment.

    Its behaviour is similar to gym environments in what common methods (specifically reset and step) are expected to do.

    A :obj:`GymLikeEnv` has a :obj:`.step()` method with the following signature:

        ``env.step(action: np.ndarray) -> Tuple[Union[np.ndarray, dict], double, bool, *info]``

    where the outputs are the observation, reward and done state respectively.
    In this implementation, the info output is discarded (but specific keys can be read
    by updating info_dict_reader, see :obj:`set_info_dict_reader` class method).

    By default, the first output is written at the "observation" key-value pair in the output tensordict, unless
    the first output is a dictionary. In that case, each observation output will be put at the corresponding
    :obj:`f"{key}"` location for each :obj:`f"{key}"` of the dictionary.

    It is also expected that env.reset() returns an observation similar to the one observed after a step is completed.
    """

    _info_dict_reader: BaseInfoDictReader

    @classmethod
    def __new__(cls, *args, **kwargs):
        cls._info_dict_reader = None
        return super().__new__(cls, *args, _batch_locked=True, **kwargs)

    def read_action(self, action):
        """Reads the action obtained from the input TensorDict and transforms it in the format expected by the contained environment.

        Args:
            action (Tensor or TensorDict): an action to be taken in the environment

        Returns: an action in a format compatible with the contained environment.

        """
        return self.action_spec.to_numpy(action, safe=False)

    def read_done(self, done):
        """Done state reader.

        Reads a done state and returns a tuple containing:
        - a done state to be set in the environment
        - a boolean value indicating whether the frame_skip loop should be broken

        Args:
            done (np.ndarray, boolean or other format): done state obtained from the environment

        """
        return done, done

    def read_reward(self, total_reward, step_reward):
        """Reads a reward and the total reward so far (in the frame skip loop) and returns a sum of the two.

        Args:
            total_reward (torch.Tensor or TensorDict): total reward so far in the step
            step_reward (reward in the format provided by the inner env): reward of this particular step

        """
        return total_reward + self.reward_spec.encode(step_reward, ignore_device=True)

    def read_obs(
        self, observations: Union[Dict[str, Any], torch.Tensor, np.ndarray]
    ) -> Dict[str, Any]:
        """Reads an observation from the environment and returns an observation compatible with the output TensorDict.

        Args:
            observations (observation under a format dictated by the inner env): observation to be read.

        """
        if isinstance(observations, dict):
            if "state" in observations and "observation" not in observations:
                # we rename "state" in "observation" as "observation" is the conventional name
                # for single observation in torchrl.
                # naming it 'state' will result in envs that have a different name for the state vector
                # when queried with and without pixels
                observations["observation"] = observations.pop("state")
        if not isinstance(observations, (TensorDict, dict)):
            (key,) = itertools.islice(self.observation_spec.keys(True, True), 1)
            observations = {key: observations}
        for key, val in observations.items():
            observations[key] = self.observation_spec[key].encode(
                val, ignore_device=True
            )
        # observations = self.observation_spec.encode(observations, ignore_device=True)
        return observations

    def _step(self, tensordict: TensorDictBase) -> TensorDictBase:
        action = tensordict.get("action")
        action_np = self.read_action(action)

        reward = 0
        for _ in range(self.wrapper_frame_skip):
            obs, _reward, done, *info = self._output_transform(
                self._env.step(action_np)
            )
            if isinstance(obs, list) and len(obs) == 1:
                # Until gym 0.25.2 we had rendered frames returned in lists of length 1
                obs = obs[0]
            if len(info) == 2:
                # gym 0.26
                truncation, info = info
                done = done | truncation
            elif len(info) == 1:
                info = info[0]
            elif len(info) == 0:
                info = None
            else:
                raise ValueError(
                    "the environment output is expected to be either"
                    "obs, reward, done, truncation, info (gym >= 0.26) or "
                    f"obs, reward, done, info. Got info with types = ({[type(x) for x in info]})"
                )

            if _reward is None:
                _reward = self.reward_spec.zero()

            reward = self.read_reward(reward, _reward)

            if isinstance(done, bool) or (
                isinstance(done, np.ndarray) and not len(done)
            ):
                done = torch.tensor([done])

            done, do_break = self.read_done(done)
            if do_break:
                break

        obs_dict = self.read_obs(obs)

        if reward is None:
            reward = torch.tensor(np.nan).expand(self.reward_spec.shape)
        # reward = self._to_tensor(reward, dtype=self.reward_spec.dtype)
        # done = self._to_tensor(done, dtype=torch.bool)
        obs_dict["reward"] = reward
        obs_dict["done"] = done
        obs_dict = {("next", key): val for key, val in obs_dict.items()}

        tensordict_out = TensorDict(
            obs_dict, batch_size=tensordict.batch_size, device=self.device
        )

        if self.info_dict_reader is not None and info is not None:
            self.info_dict_reader(info, tensordict_out.get("next"))

        return tensordict_out

    def _reset(
        self, tensordict: Optional[TensorDictBase] = None, **kwargs
    ) -> TensorDictBase:
        reset_data = self._env.reset(**kwargs)
        if not isinstance(reset_data, tuple):
            reset_data = (reset_data,)
        obs, *other = self._output_transform(reset_data)
        info = None
        if len(other) == 1:
            info = other[0]

        tensordict_out = TensorDict(
            source=self.read_obs(obs),
            batch_size=self.batch_size,
            device=self.device,
        )
        if self.info_dict_reader is not None and info is not None:
            self.info_dict_reader(info, tensordict_out)
        elif info is None and self.info_dict_reader is not None:
            # populate the reset with the items we have not seen from info
            for key, item in self.observation_spec.items():
                if key not in tensordict_out.keys():
                    tensordict_out[key] = item.zero()

        tensordict_out.setdefault(
            "done",
            self.done_spec.zero(),
        )
        return tensordict_out

    def _output_transform(self, step_outputs_tuple: Tuple) -> Tuple:
        """To be overwritten when step_outputs differ from Tuple[Observation: Union[np.ndarray, dict], reward: Number, done:Bool]."""
        if not isinstance(step_outputs_tuple, tuple):
            raise TypeError(
                f"Expected step_outputs_tuple type to be Tuple but got {type(step_outputs_tuple)}"
            )
        return step_outputs_tuple

    def set_info_dict_reader(self, info_dict_reader: BaseInfoDictReader) -> GymLikeEnv:
        """Sets an info_dict_reader function.

        This function should take as input an
        info_dict dictionary and the tensordict returned by the step function, and
        write values in an ad-hoc manner from one to the other.

        Args:
            info_dict_reader (callable): a callable taking a input dictionary and
                output tensordict as arguments. This function should modify the
                tensordict in-place.

        Returns: the same environment with the dict_reader registered.

        Examples:
            >>> from torchrl.envs import default_info_dict_reader
            >>> from torchrl.envs.libs.gym import GymWrapper
            >>> reader = default_info_dict_reader(["my_info_key"])
            >>> # assuming "some_env-v0" returns a dict with a key "my_info_key"
            >>> env = GymWrapper(gym.make("some_env-v0")).set_info_dict_reader(info_dict_reader=reader)
            >>> tensordict = env.reset()
            >>> tensordict = env.rand_step(tensordict)
            >>> assert "my_info_key" in tensordict.keys()

        """
        self.info_dict_reader = info_dict_reader
        for info_key, spec in info_dict_reader.info_spec.items():
            self.observation_spec[info_key] = spec.to(self.device)
        return self

    def __repr__(self) -> str:
        return (
            f"{self.__class__.__name__}(env={self._env}, batch_size={self.batch_size})"
        )

    @property
    def info_dict_reader(self):
        return self._info_dict_reader

    @info_dict_reader.setter
    def info_dict_reader(self, value: callable):
        self._info_dict_reader = value
