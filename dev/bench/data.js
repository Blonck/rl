window.BENCHMARK_DATA = {
  "lastUpdate": 1683716324346,
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
      },
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
        "date": 1683212439705,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.03804811182134181,
            "unit": "iter/sec",
            "range": "stddev: 0.13720637189978213",
            "extra": "mean: 26.28251316899998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.07097624701650794,
            "unit": "iter/sec",
            "range": "stddev: 0.1546545219340634",
            "extra": "mean: 14.089220577800006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.07152507292924425,
            "unit": "iter/sec",
            "range": "stddev: 0.13223995144831074",
            "extra": "mean: 13.981111224999996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.700655679778933,
            "unit": "iter/sec",
            "range": "stddev: 0.06610432714445472",
            "extra": "mean: 1.4272345588000008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.3890108333121044,
            "unit": "iter/sec",
            "range": "stddev: 0.04560556891767459",
            "extra": "mean: 2.5706224977999454 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.25593453026658575,
            "unit": "iter/sec",
            "range": "stddev: 0.06150289552631092",
            "extra": "mean: 3.9072492444000546 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.3060335234508932,
            "unit": "iter/sec",
            "range": "stddev: 0.0627962020356609",
            "extra": "mean: 3.2676158766000754 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 18.14382710594812,
            "unit": "iter/sec",
            "range": "stddev: 0.002752953446778749",
            "extra": "mean: 55.11516363998908 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.1923083043617109,
            "unit": "iter/sec",
            "range": "stddev: 0.024478730606340315",
            "extra": "mean: 838.7092468800165 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 1928.5919543272055,
            "unit": "iter/sec",
            "range": "stddev: 0.0006332410414692567",
            "extra": "mean: 518.5129999927085 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 51.523947920878804,
            "unit": "iter/sec",
            "range": "stddev: 0.002591457864991483",
            "extra": "mean: 19.408450639994044 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.077969375246298,
            "unit": "iter/sec",
            "range": "stddev: 0.02746525767753485",
            "extra": "mean: 927.6701388399988 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 20.33747500845924,
            "unit": "iter/sec",
            "range": "stddev: 0.002536362285754984",
            "extra": "mean: 49.17031242000576 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.0737958519692554,
            "unit": "iter/sec",
            "range": "stddev: 0.025230389953086477",
            "extra": "mean: 931.2757151800133 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.1586551067304523,
            "unit": "iter/sec",
            "range": "stddev: 0.045501785936102886",
            "extra": "mean: 6.302980223000032 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.15633657197765188,
            "unit": "iter/sec",
            "range": "stddev: 0.07054489981906094",
            "extra": "mean: 6.396455975399976 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.15531207984327935,
            "unit": "iter/sec",
            "range": "stddev: 0.04856267186008456",
            "extra": "mean: 6.438649208799916 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.16343454735384533,
            "unit": "iter/sec",
            "range": "stddev: 0.20202277289817092",
            "extra": "mean: 6.11865738420006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.1624597373271166,
            "unit": "iter/sec",
            "range": "stddev: 0.05466689254841167",
            "extra": "mean: 6.155371272000002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.1617868343403821,
            "unit": "iter/sec",
            "range": "stddev: 0.04134671635226885",
            "extra": "mean: 6.18097266120003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.16736693963263724,
            "unit": "iter/sec",
            "range": "stddev: 0.03590186146756922",
            "extra": "mean: 5.974895652599935 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.16370546536106118,
            "unit": "iter/sec",
            "range": "stddev: 0.08622316873527842",
            "extra": "mean: 6.108531549600047 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.1649720878211232,
            "unit": "iter/sec",
            "range": "stddev: 0.05272936964943917",
            "extra": "mean: 6.061631474800061 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 28.275096192169535,
            "unit": "iter/sec",
            "range": "stddev: 0.0011241664498660253",
            "extra": "mean: 35.36681159998807 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 26.95223544777273,
            "unit": "iter/sec",
            "range": "stddev: 0.0014260910521551467",
            "extra": "mean: 37.10267380001824 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 27.10801008246013,
            "unit": "iter/sec",
            "range": "stddev: 0.0007323461012087543",
            "extra": "mean: 36.8894654000087 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 27.90413249542411,
            "unit": "iter/sec",
            "range": "stddev: 0.0014262502855132773",
            "extra": "mean: 35.836985800006005 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 27.355121695025943,
            "unit": "iter/sec",
            "range": "stddev: 0.0010370955439504728",
            "extra": "mean: 36.556225600043035 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 27.14053122263499,
            "unit": "iter/sec",
            "range": "stddev: 0.0010161698615761094",
            "extra": "mean: 36.84526259994527 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 28.377103786236013,
            "unit": "iter/sec",
            "range": "stddev: 0.0006960854125999089",
            "extra": "mean: 35.23967800001628 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 27.958563753392173,
            "unit": "iter/sec",
            "range": "stddev: 0.0007262393812918713",
            "extra": "mean: 35.76721639997231 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 26.45388123995223,
            "unit": "iter/sec",
            "range": "stddev: 0.00185556706508811",
            "extra": "mean: 37.80163639994498 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.03457884648862936,
            "unit": "iter/sec",
            "range": "stddev: 0.1574563971850439",
            "extra": "mean: 28.919414658000004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.0346074007394926,
            "unit": "iter/sec",
            "range": "stddev: 0.1642007152718862",
            "extra": "mean: 28.895553512599964 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.03465377051957793,
            "unit": "iter/sec",
            "range": "stddev: 0.15179509900945312",
            "extra": "mean: 28.856888731200023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.03471140078272894,
            "unit": "iter/sec",
            "range": "stddev: 0.125906808924274",
            "extra": "mean: 28.808978533000072 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.03455129980552322,
            "unit": "iter/sec",
            "range": "stddev: 0.16938942837946303",
            "extra": "mean: 28.942471213200044 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.03480746422617908,
            "unit": "iter/sec",
            "range": "stddev: 0.14687043023162794",
            "extra": "mean: 28.729470021199905 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.034652912180553525,
            "unit": "iter/sec",
            "range": "stddev: 0.16677497733754681",
            "extra": "mean: 28.857603505000043 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.034695704144473614,
            "unit": "iter/sec",
            "range": "stddev: 0.11236850415370526",
            "extra": "mean: 28.822011965400087 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.03449891103296225,
            "unit": "iter/sec",
            "range": "stddev: 0.12847059274762776",
            "extra": "mean: 28.986422181399938 sec\nrounds: 5"
          }
        ]
      },
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
          "id": "0452133c7e8bc4310328a638ea23567ffeb5378f",
          "message": "[BugFix] Instruct the value key to PPOLoss (#1124)\n\nCo-authored-by: xmaples <5900204+xmaples@users.noreply.github.com>",
          "timestamp": "2023-05-04T16:05:42+01:00",
          "tree_id": "aebc014637c9eb1768362fffcf9912eae177819b",
          "url": "https://github.com/Blonck/rl/commit/0452133c7e8bc4310328a638ea23567ffeb5378f"
        },
        "date": 1683267167736,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.061974973712112275,
            "unit": "iter/sec",
            "range": "stddev: 0.011331349876421561",
            "extra": "mean: 16.1355453678 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11507900993348466,
            "unit": "iter/sec",
            "range": "stddev: 0.01821065839801325",
            "extra": "mean: 8.68968198959999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11614486422826872,
            "unit": "iter/sec",
            "range": "stddev: 0.040641709566427986",
            "extra": "mean: 8.609937311 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.1596277644044741,
            "unit": "iter/sec",
            "range": "stddev: 0.02930027641014779",
            "extra": "mean: 862.3456859999806 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6510802053587182,
            "unit": "iter/sec",
            "range": "stddev: 0.023180571253930093",
            "extra": "mean: 1.535909081199975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.42086335527567365,
            "unit": "iter/sec",
            "range": "stddev: 0.022612356956701614",
            "extra": "mean: 2.3760681168000017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.480100505100078,
            "unit": "iter/sec",
            "range": "stddev: 0.045868468431791584",
            "extra": "mean: 2.082897204599999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 27.114906468201227,
            "unit": "iter/sec",
            "range": "stddev: 0.0005458779882896094",
            "extra": "mean: 36.88008296000362 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.5670015305855391,
            "unit": "iter/sec",
            "range": "stddev: 0.006787705550917267",
            "extra": "mean: 638.1614698400017 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4176.6893288986,
            "unit": "iter/sec",
            "range": "stddev: 0.000025851566574483503",
            "extra": "mean: 239.42407999584248 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 73.93697039483999,
            "unit": "iter/sec",
            "range": "stddev: 0.0003146821836634059",
            "extra": "mean: 13.525033480000275 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.4342080384313203,
            "unit": "iter/sec",
            "range": "stddev: 0.010460021565125493",
            "extra": "mean: 697.2489159200086 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 30.400286568165875,
            "unit": "iter/sec",
            "range": "stddev: 0.00013784044556543692",
            "extra": "mean: 32.894426760014994 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.4231635670210077,
            "unit": "iter/sec",
            "range": "stddev: 0.010597218615341337",
            "extra": "mean: 702.659921299994 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.22710020480077278,
            "unit": "iter/sec",
            "range": "stddev: 0.041135833525733856",
            "extra": "mean: 4.403342572399993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.22207756999337297,
            "unit": "iter/sec",
            "range": "stddev: 0.03757070004807501",
            "extra": "mean: 4.502931115600018 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.2222430615194917,
            "unit": "iter/sec",
            "range": "stddev: 0.024006694734733727",
            "extra": "mean: 4.499578043800011 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.22746648661734473,
            "unit": "iter/sec",
            "range": "stddev: 0.046369768219634414",
            "extra": "mean: 4.396252014400034 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.22213792800670545,
            "unit": "iter/sec",
            "range": "stddev: 0.01188068928974683",
            "extra": "mean: 4.501707605599949 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.222139928570341,
            "unit": "iter/sec",
            "range": "stddev: 0.02080873487997412",
            "extra": "mean: 4.501667063800051 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.22870654933128237,
            "unit": "iter/sec",
            "range": "stddev: 0.009774873878272897",
            "extra": "mean: 4.372415232200001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.22154690163721688,
            "unit": "iter/sec",
            "range": "stddev: 0.01848865651520575",
            "extra": "mean: 4.513716926799998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.2215043756850595,
            "unit": "iter/sec",
            "range": "stddev: 0.014956677222190627",
            "extra": "mean: 4.5145835016001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 37.33562357015129,
            "unit": "iter/sec",
            "range": "stddev: 0.000347606600716667",
            "extra": "mean: 26.784071200017934 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 36.02043496907105,
            "unit": "iter/sec",
            "range": "stddev: 0.00039983842520364873",
            "extra": "mean: 27.762019000010696 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 35.8060007390976,
            "unit": "iter/sec",
            "range": "stddev: 0.0003538228545166099",
            "extra": "mean: 27.928279600018868 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 37.125931642679014,
            "unit": "iter/sec",
            "range": "stddev: 0.00007448961374753136",
            "extra": "mean: 26.935351000065566 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 36.05735860373966,
            "unit": "iter/sec",
            "range": "stddev: 0.00043074318183569736",
            "extra": "mean: 27.733590000025288 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 36.138251942183594,
            "unit": "iter/sec",
            "range": "stddev: 0.00025149292830953154",
            "extra": "mean: 27.671509999981936 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 37.62557347013956,
            "unit": "iter/sec",
            "range": "stddev: 0.0002793279662138861",
            "extra": "mean: 26.577668000027188 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 35.98285946424443,
            "unit": "iter/sec",
            "range": "stddev: 0.0002735577829713279",
            "extra": "mean: 27.791009799921085 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 35.8880737111947,
            "unit": "iter/sec",
            "range": "stddev: 0.00045101782724715647",
            "extra": "mean: 27.86441000002924 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.05953816729815506,
            "unit": "iter/sec",
            "range": "stddev: 0.14061353982392547",
            "extra": "mean: 16.79594863899997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.060397852058489056,
            "unit": "iter/sec",
            "range": "stddev: 0.03847344608560636",
            "extra": "mean: 16.55688018560004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.06011708517876182,
            "unit": "iter/sec",
            "range": "stddev: 0.0563074317008946",
            "extra": "mean: 16.634206349599935 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05998505663306387,
            "unit": "iter/sec",
            "range": "stddev: 0.08719227982758175",
            "extra": "mean: 16.670818636000057 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.05973630883457135,
            "unit": "iter/sec",
            "range": "stddev: 0.14176045230312848",
            "extra": "mean: 16.740237545800074 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.06026987466440038,
            "unit": "iter/sec",
            "range": "stddev: 0.02075033080732154",
            "extra": "mean: 16.592037158999936 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.0602799046513121,
            "unit": "iter/sec",
            "range": "stddev: 0.04414513517487632",
            "extra": "mean: 16.589276406200042 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.05997518067729513,
            "unit": "iter/sec",
            "range": "stddev: 0.07970632110733036",
            "extra": "mean: 16.673563775999945 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.0598343768072112,
            "unit": "iter/sec",
            "range": "stddev: 0.09355876817302233",
            "extra": "mean: 16.712800456199965 sec\nrounds: 5"
          }
        ]
      },
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
          "id": "6d030c9ec1db72c252a23dff04dcad2a553678d2",
          "message": "[Versioning] v0.1.1 (#1137)",
          "timestamp": "2023-05-06T22:32:41+01:00",
          "tree_id": "e67968d9103684ef3d59b0ff3b48bd4eecb0f1b7",
          "url": "https://github.com/Blonck/rl/commit/6d030c9ec1db72c252a23dff04dcad2a553678d2"
        },
        "date": 1683617810386,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.051109299294446846,
            "unit": "iter/sec",
            "range": "stddev: 0.07279730543087996",
            "extra": "mean: 19.56591097520002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.09293801023700296,
            "unit": "iter/sec",
            "range": "stddev: 0.056367642583788784",
            "extra": "mean: 10.759860227800027 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.09326354642629285,
            "unit": "iter/sec",
            "range": "stddev: 0.06559082784813584",
            "extra": "mean: 10.722302960999992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.8746314562153255,
            "unit": "iter/sec",
            "range": "stddev: 0.0478763896784885",
            "extra": "mean: 1.143338708999977 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.4937708095158776,
            "unit": "iter/sec",
            "range": "stddev: 0.0394543843908479",
            "extra": "mean: 2.0252311006000125 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.35376400097163974,
            "unit": "iter/sec",
            "range": "stddev: 0.049268660469858054",
            "extra": "mean: 2.826743244799991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.3921716164566218,
            "unit": "iter/sec",
            "range": "stddev: 0.07078913718681645",
            "extra": "mean: 2.5499040675999822 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 27.63824509935321,
            "unit": "iter/sec",
            "range": "stddev: 0.0025059373639407714",
            "extra": "mean: 36.18174729999055 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.3955633003151027,
            "unit": "iter/sec",
            "range": "stddev: 0.0051638608101057465",
            "extra": "mean: 716.5565329599963 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 2644.771065491379,
            "unit": "iter/sec",
            "range": "stddev: 0.000049140242411033616",
            "extra": "mean: 378.10455999306214 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 75.21769245052126,
            "unit": "iter/sec",
            "range": "stddev: 0.00013028459936126623",
            "extra": "mean: 13.294744459992671 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.2755915107075468,
            "unit": "iter/sec",
            "range": "stddev: 0.017944988654270758",
            "extra": "mean: 783.9500275800037 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.36472526478608,
            "unit": "iter/sec",
            "range": "stddev: 0.0002823261035987372",
            "extra": "mean: 31.882951039992808 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.2745398142710047,
            "unit": "iter/sec",
            "range": "stddev: 0.01215409905155512",
            "extra": "mean: 784.5969100400112 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.16661013581426326,
            "unit": "iter/sec",
            "range": "stddev: 0.09695751982236961",
            "extra": "mean: 6.002035801199986 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.16221736727862154,
            "unit": "iter/sec",
            "range": "stddev: 0.13170262266735608",
            "extra": "mean: 6.164568053199991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.16423485931838433,
            "unit": "iter/sec",
            "range": "stddev: 0.011233814131125492",
            "extra": "mean: 6.088841334600033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.16879662504554618,
            "unit": "iter/sec",
            "range": "stddev: 0.024872497686678048",
            "extra": "mean: 5.924289065200037 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.16328712615045768,
            "unit": "iter/sec",
            "range": "stddev: 0.13831298439905473",
            "extra": "mean: 6.12418151740003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.16408782417309004,
            "unit": "iter/sec",
            "range": "stddev: 0.13605646638650598",
            "extra": "mean: 6.09429739860002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.1691867661647106,
            "unit": "iter/sec",
            "range": "stddev: 0.0321068051963253",
            "extra": "mean: 5.910627779400056 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.16390136546475562,
            "unit": "iter/sec",
            "range": "stddev: 0.12247498816933217",
            "extra": "mean: 6.101230439199935 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.1632754651672105,
            "unit": "iter/sec",
            "range": "stddev: 0.12800141864656361",
            "extra": "mean: 6.124618900799942 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 29.566100271035527,
            "unit": "iter/sec",
            "range": "stddev: 0.0002988623421550324",
            "extra": "mean: 33.82251940001879 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 29.39545748946341,
            "unit": "iter/sec",
            "range": "stddev: 0.00020186630372238582",
            "extra": "mean: 34.01886159990681 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 29.295775149710806,
            "unit": "iter/sec",
            "range": "stddev: 0.0003910484713856437",
            "extra": "mean: 34.13461479990474 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 29.606584215376134,
            "unit": "iter/sec",
            "range": "stddev: 0.00038900642435948013",
            "extra": "mean: 33.77627059999213 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 29.311404182139366,
            "unit": "iter/sec",
            "range": "stddev: 0.0004098258699668873",
            "extra": "mean: 34.11641400002736 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 29.210357913504396,
            "unit": "iter/sec",
            "range": "stddev: 0.0004025408310141767",
            "extra": "mean: 34.234431599952586 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 29.691112313510907,
            "unit": "iter/sec",
            "range": "stddev: 0.0005462446842819389",
            "extra": "mean: 33.6801123999976 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 12.72792966432268,
            "unit": "iter/sec",
            "range": "stddev: 0.09996462562891714",
            "extra": "mean: 78.56737319998501 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 29.61241810251218,
            "unit": "iter/sec",
            "range": "stddev: 0.000250160804791585",
            "extra": "mean: 33.76961640005902 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.0494454591984786,
            "unit": "iter/sec",
            "range": "stddev: 0.0848099322726955",
            "extra": "mean: 20.224304035400063 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.04951935891885132,
            "unit": "iter/sec",
            "range": "stddev: 0.13929011861574825",
            "extra": "mean: 20.194122497399984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.0495396268918895,
            "unit": "iter/sec",
            "range": "stddev: 0.04911980659474073",
            "extra": "mean: 20.18586054719999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.049641777003887444,
            "unit": "iter/sec",
            "range": "stddev: 0.057151484935969596",
            "extra": "mean: 20.144323196200048 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.04964816177335637,
            "unit": "iter/sec",
            "range": "stddev: 0.02495112058953432",
            "extra": "mean: 20.141732629799982 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.049777204578426784,
            "unit": "iter/sec",
            "range": "stddev: 0.09082266504115265",
            "extra": "mean: 20.089517048400012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.04993480513988131,
            "unit": "iter/sec",
            "range": "stddev: 0.051692608704851845",
            "extra": "mean: 20.02611199140001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.04990091146917335,
            "unit": "iter/sec",
            "range": "stddev: 0.05888900154599367",
            "extra": "mean: 20.0397141166 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.05008315147627242,
            "unit": "iter/sec",
            "range": "stddev: 0.09256346818331376",
            "extra": "mean: 19.966794631000084 sec\nrounds: 5"
          }
        ]
      },
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
          "id": "71c165733d1973a00d85827cc664a04d6b22785b",
          "message": "[Feature] CompositeSpec.lock (#1143)",
          "timestamp": "2023-05-09T17:26:00+01:00",
          "tree_id": "0299ba605777f07582dee4669ffb4e70e88cac52",
          "url": "https://github.com/Blonck/rl/commit/71c165733d1973a00d85827cc664a04d6b22785b"
        },
        "date": 1683657284502,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05099393908221412,
            "unit": "iter/sec",
            "range": "stddev: 0.09240811713397805",
            "extra": "mean: 19.610173640200003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.09356308343782208,
            "unit": "iter/sec",
            "range": "stddev: 0.08988750258277874",
            "extra": "mean: 10.687976103999995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.09380167477630688,
            "unit": "iter/sec",
            "range": "stddev: 0.05566226316624557",
            "extra": "mean: 10.660790464399975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.8645375197430705,
            "unit": "iter/sec",
            "range": "stddev: 0.050923404022814575",
            "extra": "mean: 1.1566877980000072 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.4940799080589591,
            "unit": "iter/sec",
            "range": "stddev: 0.040550406854876785",
            "extra": "mean: 2.023964107199981 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.3528260794314618,
            "unit": "iter/sec",
            "range": "stddev: 0.04789606642922959",
            "extra": "mean: 2.834257608200005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4080661484941988,
            "unit": "iter/sec",
            "range": "stddev: 0.01916159869661759",
            "extra": "mean: 2.4505830823999757 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.20402350849091,
            "unit": "iter/sec",
            "range": "stddev: 0.0010630973094376745",
            "extra": "mean: 35.45593413999768 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2939246636540849,
            "unit": "iter/sec",
            "range": "stddev: 0.004613903961961336",
            "extra": "mean: 772.8425217399968 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3360.923151376774,
            "unit": "iter/sec",
            "range": "stddev: 0.00003652123686458547",
            "extra": "mean: 297.53730000948053 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 75.1988023971511,
            "unit": "iter/sec",
            "range": "stddev: 0.0001715856231432664",
            "extra": "mean: 13.298084119992382 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.1940883443365167,
            "unit": "iter/sec",
            "range": "stddev: 0.005723838388442047",
            "extra": "mean: 837.4589742400008 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.96945684129545,
            "unit": "iter/sec",
            "range": "stddev: 0.00022654027982190668",
            "extra": "mean: 31.279855799998582 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1893641085854676,
            "unit": "iter/sec",
            "range": "stddev: 0.013038737679357823",
            "extra": "mean: 840.7854186800023 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.17155958885927,
            "unit": "iter/sec",
            "range": "stddev: 0.08627020016788038",
            "extra": "mean: 5.828878506000024 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.16767123720007648,
            "unit": "iter/sec",
            "range": "stddev: 0.13027781238965502",
            "extra": "mean: 5.964052133799987 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.16954010263439515,
            "unit": "iter/sec",
            "range": "stddev: 0.029041848539738613",
            "extra": "mean: 5.898309511799994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.17519538038561633,
            "unit": "iter/sec",
            "range": "stddev: 0.026223402218590586",
            "extra": "mean: 5.707913061399995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.1671853589698014,
            "unit": "iter/sec",
            "range": "stddev: 0.13704375259599938",
            "extra": "mean: 5.981385009799988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.16863332513710802,
            "unit": "iter/sec",
            "range": "stddev: 0.14806110371558862",
            "extra": "mean: 5.930025984999975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.17266174655283367,
            "unit": "iter/sec",
            "range": "stddev: 0.04934235473856012",
            "extra": "mean: 5.791670824400034 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.16533159163423336,
            "unit": "iter/sec",
            "range": "stddev: 0.14209200758627108",
            "extra": "mean: 6.048450814000034 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.1657440299221443,
            "unit": "iter/sec",
            "range": "stddev: 0.12880772304385432",
            "extra": "mean: 6.033399818199996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 30.090672041480037,
            "unit": "iter/sec",
            "range": "stddev: 0.00029348873019300513",
            "extra": "mean: 33.232890200042675 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 29.774026335162148,
            "unit": "iter/sec",
            "range": "stddev: 0.0002236284561700256",
            "extra": "mean: 33.586320799986424 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 29.724796184814622,
            "unit": "iter/sec",
            "range": "stddev: 0.0004013752952559387",
            "extra": "mean: 33.64194639998459 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 30.047675685445665,
            "unit": "iter/sec",
            "range": "stddev: 0.00044350789262387157",
            "extra": "mean: 33.28044440004305 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 29.31824502299388,
            "unit": "iter/sec",
            "range": "stddev: 0.0006796313712141295",
            "extra": "mean: 34.10845359999257 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 29.458523527145633,
            "unit": "iter/sec",
            "range": "stddev: 0.0005199144455453993",
            "extra": "mean: 33.94603259998803 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 30.215019079855658,
            "unit": "iter/sec",
            "range": "stddev: 0.0004390426679316895",
            "extra": "mean: 33.096123399991484 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 12.174881744825298,
            "unit": "iter/sec",
            "range": "stddev: 0.10835730924955866",
            "extra": "mean: 82.136321400003 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 29.293973294644044,
            "unit": "iter/sec",
            "range": "stddev: 0.001554763258523065",
            "extra": "mean: 34.13671439998325 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.04913053015994614,
            "unit": "iter/sec",
            "range": "stddev: 0.1458122300375275",
            "extra": "mean: 20.353942787599998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.04949329158184626,
            "unit": "iter/sec",
            "range": "stddev: 0.15992040074933195",
            "extra": "mean: 20.204758423600016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.049736680221434126,
            "unit": "iter/sec",
            "range": "stddev: 0.04829639822428686",
            "extra": "mean: 20.105885546600028 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.049935605678518194,
            "unit": "iter/sec",
            "range": "stddev: 0.027612514379760613",
            "extra": "mean: 20.025790944400022 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.049567754980366266,
            "unit": "iter/sec",
            "range": "stddev: 0.024800860341810338",
            "extra": "mean: 20.174405727999964 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.04953111311686667,
            "unit": "iter/sec",
            "range": "stddev: 0.09702636238517962",
            "extra": "mean: 20.189330242600043 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.049696176291250435,
            "unit": "iter/sec",
            "range": "stddev: 0.03534499430969853",
            "extra": "mean: 20.122272469000016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.04957679069734917,
            "unit": "iter/sec",
            "range": "stddev: 0.04322891983685448",
            "extra": "mean: 20.170728801399992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.04957496411394724,
            "unit": "iter/sec",
            "range": "stddev: 0.0981771914259591",
            "extra": "mean: 20.17147198940006 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "osalpekar@fb.com",
            "name": "Omkar Salpekar",
            "username": "osalpekar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "577625810379e92903cc092d5bf0735a7257fd9b",
          "message": "Windows Unittests on GHA (#1086)\n\nCo-authored-by: vmoens <vincentmoens@gmail.com>",
          "timestamp": "2023-05-10T07:40:01+01:00",
          "tree_id": "370b8f714520940d640f949ad514b6720a71955c",
          "url": "https://github.com/Blonck/rl/commit/577625810379e92903cc092d5bf0735a7257fd9b"
        },
        "date": 1683716274088,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05978899933051446,
            "unit": "iter/sec",
            "range": "stddev: 0.052751366493852946",
            "extra": "mean: 16.725484808200008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.10840117802198206,
            "unit": "iter/sec",
            "range": "stddev: 0.042067088441392626",
            "extra": "mean: 9.224991999600002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.1092260282175448,
            "unit": "iter/sec",
            "range": "stddev: 0.026777649856026906",
            "extra": "mean: 9.155326951999996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.026673108421687,
            "unit": "iter/sec",
            "range": "stddev: 0.03457106609960523",
            "extra": "mean: 974.0198625999938 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.585612233648706,
            "unit": "iter/sec",
            "range": "stddev: 0.026939453527123753",
            "extra": "mean: 1.7076145997999674 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.40190907737752696,
            "unit": "iter/sec",
            "range": "stddev: 0.03863578882623964",
            "extra": "mean: 2.4881249424000087 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4477806064686627,
            "unit": "iter/sec",
            "range": "stddev: 0.015566925395069719",
            "extra": "mean: 2.233236512600024 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.6688950001021,
            "unit": "iter/sec",
            "range": "stddev: 0.0012207674027842127",
            "extra": "mean: 34.88100954000629 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.5166835764286593,
            "unit": "iter/sec",
            "range": "stddev: 0.0059031875759944065",
            "extra": "mean: 659.3333082400113 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4161.723579577345,
            "unit": "iter/sec",
            "range": "stddev: 0.000023507494356522613",
            "extra": "mean: 240.28505999467598 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 76.28519770413604,
            "unit": "iter/sec",
            "range": "stddev: 0.00011026501941391071",
            "extra": "mean: 13.108703000002606 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.388514702767165,
            "unit": "iter/sec",
            "range": "stddev: 0.025570593165791487",
            "extra": "mean: 720.1940303599986 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.993865634405687,
            "unit": "iter/sec",
            "range": "stddev: 0.00013607056676533057",
            "extra": "mean: 31.255991740010813 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.3890430980999922,
            "unit": "iter/sec",
            "range": "stddev: 0.004730226871606365",
            "extra": "mean: 719.9200668199956 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.17823661746384806,
            "unit": "iter/sec",
            "range": "stddev: 0.07057349580686997",
            "extra": "mean: 5.61051939959998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.1749870775805426,
            "unit": "iter/sec",
            "range": "stddev: 0.07382658886291277",
            "extra": "mean: 5.71470770200001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.17621085149772253,
            "unit": "iter/sec",
            "range": "stddev: 0.017768941906427922",
            "extra": "mean: 5.67501939579995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.18042865772397904,
            "unit": "iter/sec",
            "range": "stddev: 0.024945353512932814",
            "extra": "mean: 5.542356810800015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.17476186513361994,
            "unit": "iter/sec",
            "range": "stddev: 0.09135204311499949",
            "extra": "mean: 5.7220721422 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.17529634650760334,
            "unit": "iter/sec",
            "range": "stddev: 0.10524716542364101",
            "extra": "mean: 5.704625452399978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.17911075270102259,
            "unit": "iter/sec",
            "range": "stddev: 0.025645618860354276",
            "extra": "mean: 5.5831377229999815 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.17558964794795326,
            "unit": "iter/sec",
            "range": "stddev: 0.0627665397541346",
            "extra": "mean: 5.695096560000001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.17487797876003858,
            "unit": "iter/sec",
            "range": "stddev: 0.07790125304157464",
            "extra": "mean: 5.718272861399919 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 30.86775913677179,
            "unit": "iter/sec",
            "range": "stddev: 0.00016156888885724574",
            "extra": "mean: 32.39626159997897 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 30.311164349940583,
            "unit": "iter/sec",
            "range": "stddev: 0.0010006429081659176",
            "extra": "mean: 32.99114439996629 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 30.44550956777256,
            "unit": "iter/sec",
            "range": "stddev: 0.00032386564525844173",
            "extra": "mean: 32.845566199966925 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 30.79363884961328,
            "unit": "iter/sec",
            "range": "stddev: 0.0003544493901425891",
            "extra": "mean: 32.47423940001681 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 30.568537130174942,
            "unit": "iter/sec",
            "range": "stddev: 0.0002346318302172805",
            "extra": "mean: 32.71337440000934 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 30.5489640903943,
            "unit": "iter/sec",
            "range": "stddev: 0.00035494525083462934",
            "extra": "mean: 32.734334200040394 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 30.634030632656327,
            "unit": "iter/sec",
            "range": "stddev: 0.0003448687025489599",
            "extra": "mean: 32.6434354000412 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 15.969792256440266,
            "unit": "iter/sec",
            "range": "stddev: 0.06718169344239469",
            "extra": "mean: 62.61822219989881 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 30.838247716499886,
            "unit": "iter/sec",
            "range": "stddev: 0.00012952771382998088",
            "extra": "mean: 32.42726399998901 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.0514198632518319,
            "unit": "iter/sec",
            "range": "stddev: 0.02921962441201692",
            "extra": "mean: 19.447737445400026 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.05138963520505848,
            "unit": "iter/sec",
            "range": "stddev: 0.06686248634078894",
            "extra": "mean: 19.45917685559998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.05161213622657415,
            "unit": "iter/sec",
            "range": "stddev: 0.11565713711264411",
            "extra": "mean: 19.37528792859998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05202731110568635,
            "unit": "iter/sec",
            "range": "stddev: 0.03335004314846344",
            "extra": "mean: 19.2206742718 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.05189635397617877,
            "unit": "iter/sec",
            "range": "stddev: 0.02743861026371253",
            "extra": "mean: 19.269176413800004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.051993455717539126,
            "unit": "iter/sec",
            "range": "stddev: 0.11325228021886156",
            "extra": "mean: 19.233189758200023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.05200058325871809,
            "unit": "iter/sec",
            "range": "stddev: 0.02823708487966057",
            "extra": "mean: 19.230553530999988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.05189203129617071,
            "unit": "iter/sec",
            "range": "stddev: 0.03525351715836342",
            "extra": "mean: 19.270781563599986 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.051889570810827394,
            "unit": "iter/sec",
            "range": "stddev: 0.05141539072702739",
            "extra": "mean: 19.271695340199994 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}