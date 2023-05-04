window.BENCHMARK_DATA = {
  "lastUpdate": 1683211992884,
  "repoUrl": "https://github.com/Blonck/rl",
  "entries": {
    "CPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "vincentmoens@gmail.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "714d6459e7b58f3b5601c26d612211527582327a",
          "message": "[BugFix] Set exploration mode to MODE in all losses by default (#1123)",
          "timestamp": "2023-05-04T15:05:15+01:00",
          "tree_id": "8763b878921b28933f44170c1d9e10d7fa9f3c3d",
          "url": "https://github.com/Blonck/rl/commit/714d6459e7b58f3b5601c26d612211527582327a"
        },
        "date": 1683211931076,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.04641737673869065,
            "unit": "iter/sec",
            "range": "stddev: 0.07090626395401407",
            "extra": "mean: 21.543656067199983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.08551196054560785,
            "unit": "iter/sec",
            "range": "stddev: 0.0742327709867398",
            "extra": "mean: 11.694270527999993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.08633715844660182,
            "unit": "iter/sec",
            "range": "stddev: 0.07676268698897802",
            "extra": "mean: 11.582498405000024 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.8567288033922493,
            "unit": "iter/sec",
            "range": "stddev: 0.04451968274780244",
            "extra": "mean: 1.167230512199967 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.47407096792176295,
            "unit": "iter/sec",
            "range": "stddev: 0.0406677660194662",
            "extra": "mean: 2.109388820799995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.31980048712927567,
            "unit": "iter/sec",
            "range": "stddev: 0.038093969217956575",
            "extra": "mean: 3.1269495833999827 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.36696096477830176,
            "unit": "iter/sec",
            "range": "stddev: 0.031308114688350874",
            "extra": "mean: 2.7250854885999845 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 24.31712011591146,
            "unit": "iter/sec",
            "range": "stddev: 0.0009673484959283273",
            "extra": "mean: 41.123290720008754 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2205479190419575,
            "unit": "iter/sec",
            "range": "stddev: 0.016663148826125837",
            "extra": "mean: 819.3041701999937 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3231.5346073461574,
            "unit": "iter/sec",
            "range": "stddev: 0.00003297892661414367",
            "extra": "mean: 309.45049999672847 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 65.91154055641421,
            "unit": "iter/sec",
            "range": "stddev: 0.00038014795695366844",
            "extra": "mean: 15.171849900004872 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.1141737252306612,
            "unit": "iter/sec",
            "range": "stddev: 0.031266436045596445",
            "extra": "mean: 897.5261014999933 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 27.65223639409804,
            "unit": "iter/sec",
            "range": "stddev: 0.0002939203987884643",
            "extra": "mean: 36.16344030001983 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1323563106342238,
            "unit": "iter/sec",
            "range": "stddev: 0.005127311186211825",
            "extra": "mean: 883.1142553000018 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.18099270549558782,
            "unit": "iter/sec",
            "range": "stddev: 0.06230830835664392",
            "extra": "mean: 5.5250845455999755 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.1765050341354513,
            "unit": "iter/sec",
            "range": "stddev: 0.024890616050910884",
            "extra": "mean: 5.665560786399965 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.17813379237136698,
            "unit": "iter/sec",
            "range": "stddev: 0.028245193550018793",
            "extra": "mean: 5.613757988799989 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.18207206733957662,
            "unit": "iter/sec",
            "range": "stddev: 0.051603657435656765",
            "extra": "mean: 5.492330672199887 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.17660761207268677,
            "unit": "iter/sec",
            "range": "stddev: 0.058432242018511084",
            "extra": "mean: 5.662270092800009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.1782398202290305,
            "unit": "iter/sec",
            "range": "stddev: 0.02830488033967433",
            "extra": "mean: 5.610418584999934 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.18193794417022294,
            "unit": "iter/sec",
            "range": "stddev: 0.07938186153888054",
            "extra": "mean: 5.496379573600052 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.1744995392337568,
            "unit": "iter/sec",
            "range": "stddev: 0.09059674643523621",
            "extra": "mean: 5.730674157600015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.17806098725058334,
            "unit": "iter/sec",
            "range": "stddev: 0.029628128953268117",
            "extra": "mean: 5.616053327800046 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 29.075376284822237,
            "unit": "iter/sec",
            "range": "stddev: 0.0022453189425891474",
            "extra": "mean: 34.39336399997046 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 28.7706195722018,
            "unit": "iter/sec",
            "range": "stddev: 0.0004833403188934689",
            "extra": "mean: 34.75768039998002 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 28.62377737114128,
            "unit": "iter/sec",
            "range": "stddev: 0.000504376400078893",
            "extra": "mean: 34.935989999985395 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 29.531812566299276,
            "unit": "iter/sec",
            "range": "stddev: 0.00034321629106544375",
            "extra": "mean: 33.86178879995896 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 28.61851879056589,
            "unit": "iter/sec",
            "range": "stddev: 0.0004629767758140442",
            "extra": "mean: 34.94240939994597 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 28.597534688890352,
            "unit": "iter/sec",
            "range": "stddev: 0.0006492847896175883",
            "extra": "mean: 34.968049200006135 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 30.021827489749505,
            "unit": "iter/sec",
            "range": "stddev: 0.0005180576347303381",
            "extra": "mean: 33.3090982000158 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 28.959126405566796,
            "unit": "iter/sec",
            "range": "stddev: 0.00041399680172297373",
            "extra": "mean: 34.53142839998691 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 29.09307590083154,
            "unit": "iter/sec",
            "range": "stddev: 0.0005949114333732541",
            "extra": "mean: 34.37243980006315 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.04717412922576773,
            "unit": "iter/sec",
            "range": "stddev: 0.14039598010788545",
            "extra": "mean: 21.198059538400003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.047529435119619,
            "unit": "iter/sec",
            "range": "stddev: 0.0480131820362484",
            "extra": "mean: 21.03959362200003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.04720346475173657,
            "unit": "iter/sec",
            "range": "stddev: 0.057930864325100306",
            "extra": "mean: 21.18488558539998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.047464789898859557,
            "unit": "iter/sec",
            "range": "stddev: 0.09733467026295532",
            "extra": "mean: 21.06824874040003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.047153355876518685,
            "unit": "iter/sec",
            "range": "stddev: 0.13409061756871482",
            "extra": "mean: 21.207398315799992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.04762115658999742,
            "unit": "iter/sec",
            "range": "stddev: 0.044117902125328415",
            "extra": "mean: 20.999069985000006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.04768408025307739,
            "unit": "iter/sec",
            "range": "stddev: 0.06500317102672734",
            "extra": "mean: 20.971359721999942 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.0473390679611503,
            "unit": "iter/sec",
            "range": "stddev: 0.04263874484172542",
            "extra": "mean: 21.124201279599948 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.047219238491191216,
            "unit": "iter/sec",
            "range": "stddev: 0.08840058112851434",
            "extra": "mean: 21.17780870580009 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}