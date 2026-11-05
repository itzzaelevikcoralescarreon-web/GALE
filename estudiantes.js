/* Credenciales almacenadas como hashes; protección local limitada. */
const ESTUDIANTES = [
  {
    "id": "1EA-01",
    "nombre": "CACERES MARQUEZ KIARA KENYA",
    "curso": "1ero A",
    "sal": "477556975d008a77a73d76f8",
    "hash": "b1cf9655b12b8895b2698662c03eb3c2f2a35efc42aa15cf2fadc3e387e47e30"
  },
  {
    "id": "1EA-02",
    "nombre": "CACERES VARGAS ELVIN",
    "curso": "1ero A",
    "sal": "121b89c803461bacb9dc3a39",
    "hash": "af5592f43c92d038ed935bcf3710141d85cb093f4dc52f05f1c735a14f695a1d"
  },
  {
    "id": "1EA-03",
    "nombre": "CAMARGO MURILLO MIJAEL FABRETT",
    "curso": "1ero A",
    "sal": "b5418829f2d71823c203c27c",
    "hash": "108d7d61b74f651e02af03321da156823709f677d0c4f24dc347326f782dcec4"
  },
  {
    "id": "1EA-04",
    "nombre": "CHOQUE ILAFAYA ANELI VIVIAN",
    "curso": "1ero A",
    "sal": "fd18f96b00f82f69fd74a0bc",
    "hash": "ba3b721173a95fa915d8c3cad4afff795c5c8e9d32ac4ef3432467c8e13bef12"
  },
  {
    "id": "1EA-05",
    "nombre": "ESCOBAR HUAILLA JOSE MIGUEL",
    "curso": "1ero A",
    "sal": "e5bdd1f8c9c69c3788ab3184",
    "hash": "f770cdad402e564854836b51e639fe330b9fbc9f9bcaca048981158b52b6e09d"
  },
  {
    "id": "1EA-06",
    "nombre": "HERRERA SALAZAR ALEXIS SAMIR",
    "curso": "1ero A",
    "sal": "2a101eae8fdf6fd81575155b",
    "hash": "be9f589afc5221ce8b9a6ba4777941e093590edc92ddc5104be89349419a510a"
  },
  {
    "id": "1EA-07",
    "nombre": "LEON CHUCA CAROLAY MARIANA",
    "curso": "1ero A",
    "sal": "70603909f0968f784b2d58e3",
    "hash": "449a7f7ce15420cbe2818c8d35fefe4ed4925d8ac941bcdf4b819811387132c5"
  },
  {
    "id": "1EA-08",
    "nombre": "MARAZA GARCIA VALERIA MERCEDES",
    "curso": "1ero A",
    "sal": "eec5c65f9f06df57387aa3d6",
    "hash": "749bee9b1b629565114bd8ef0631394262b7ec9f9cb7a09c0bf2795b3a390483"
  },
  {
    "id": "1EA-09",
    "nombre": "PALACIOS CALERO DILAN JHOEL",
    "curso": "1ero A",
    "sal": "bebc75f87cbed81d9bdccfb8",
    "hash": "c5d1b34c750025519fe0d5a75090758f94ca93ed5cf445fe71e680a779b1f09e"
  },
  {
    "id": "1EA-10",
    "nombre": "PANIAGUA SIFUENTES NOEMI",
    "curso": "1ero A",
    "sal": "7d314ffeb28eeaf66b2de565",
    "hash": "49b09c28ca02b97c8ff59dd9f40c4ab313782d0f19676394e652de4c04e91645"
  },
  {
    "id": "1EA-11",
    "nombre": "SALAZAR NAVARRO JHOSMAR",
    "curso": "1ero A",
    "sal": "fa555f1e73837c5cd83a5bd9",
    "hash": "6ee712f100be755a62b87f574531c97801649d8ff79c99029f40ecb4367cf050"
  },
  {
    "id": "1EA-12",
    "nombre": "SERRANO AVALOS LIZ MAIDED",
    "curso": "1ero A",
    "sal": "784927d90cc4e7749ad31eb9",
    "hash": "f616f048d68734af76b668eacddfdf4e4d7dd2703f60ab786ecf721b3e87210f"
  },
  {
    "id": "1EA-13",
    "nombre": "YEVARA CACERES JHAKELINE STEFAN",
    "curso": "1ero A",
    "sal": "c5c7515d1af69a6eb29c89be",
    "hash": "0de5db08cb13c0bd35f3cc6b849f9fb258f04d4a8147c0ed6c95ac34b1a7d0cc"
  },
  {
    "id": "1EB-01",
    "nombre": "ARANCIBIA AGUAYO AYDA",
    "curso": "1ero B",
    "sal": "8f0d8bcf2ce4230fc8c0ef7c",
    "hash": "8db9d010c8257eb68c8c04a8d9d0de3bb2f2752598a12531fbf64d206e387256"
  },
  {
    "id": "1EB-02",
    "nombre": "CACERES RIVAS LUCERO RUBY",
    "curso": "1ero B",
    "sal": "47a84cf5dad8e4eab4475046",
    "hash": "2f3be7a23a4ab16e6ba1c4d37fb4d4255aa641900486d05bb43d6259ee64f578"
  },
  {
    "id": "1EB-03",
    "nombre": "CARBALLO ALVAREZ HANSSEL MATHIAS",
    "curso": "1ero B",
    "sal": "2064394ca90ab6e8801326e2",
    "hash": "cfa68de660b156433224a2e4b23eef71e377805c344610bbcc33ab3efac82b08"
  },
  {
    "id": "1EB-04",
    "nombre": "GARCIA PALACIOS LEO SEBASTIAN",
    "curso": "1ero B",
    "sal": "e45408d584b7555910bb6136",
    "hash": "e9e232f7b8abbdaa109293316ecfd41a9954640b7ac691eed275bb9a6ac98a9c"
  },
  {
    "id": "1EB-05",
    "nombre": "LEON PAREDES DILAN",
    "curso": "1ero B",
    "sal": "bf76e27f18f0d13760325bb5",
    "hash": "4c52f4adbc02e22abc8eb0e8cf9a90befea384fbdb050e5de5fe3332c9dc00d2"
  },
  {
    "id": "1EB-06",
    "nombre": "LLANES CARRASCO LITZY ARIANI",
    "curso": "1ero B",
    "sal": "d6f5abe7d8b88055006c41a7",
    "hash": "25cd1dff2ba4123dd749fb9e4b29a1d6881741c5ae19e5a7a77bd850d734f39f"
  },
  {
    "id": "1EB-07",
    "nombre": "LLANES MENDIETA EMILI",
    "curso": "1ero B",
    "sal": "1ef6d6123e745f8db8f7a9b8",
    "hash": "001c8a4375c23646f897dc4307c11e7d2c4231ae2af53f99b0617328bbb7fe4d"
  },
  {
    "id": "1EB-08",
    "nombre": "LOAYZA VARGAS GAEL SANDER",
    "curso": "1ero B",
    "sal": "6fbe16e22e988c4c6b6df0ef",
    "hash": "0f7e6821dcbde31de6f4b312d09d8c787e541ba4d37d3fd6bd109a596042441b"
  },
  {
    "id": "1EB-09",
    "nombre": "MARQUEZ PACHECO JESUS ANGEL",
    "curso": "1ero B",
    "sal": "e6c9db423472548d8f27df46",
    "hash": "9e4c8ac15cd7db0f304431353606944baabaa57a266e3ddb9cd0549b1f3bf7c3"
  },
  {
    "id": "1EB-10",
    "nombre": "NAVARRO LOAYZA WILLAN LEVI",
    "curso": "1ero B",
    "sal": "2948a9364f749fff651346df",
    "hash": "265168328725b05c1a5024346170cfcec68a1525b1f1b15f8d7f623bed3522cc"
  },
  {
    "id": "1EB-11",
    "nombre": "PANIAGUA CHOQUE MARIA LICET",
    "curso": "1ero B",
    "sal": "efbbc29fb8166183f98a6520",
    "hash": "b05bdc4b02d19e11b27c4385204157e55f4b3f2e3b259ad92ffa22437dd42969"
  },
  {
    "id": "1EB-12",
    "nombre": "SALAZAR SANDOVAL JOSE ANTONY",
    "curso": "1ero B",
    "sal": "5ba42d836c07d3130aaf0152",
    "hash": "3b1774887116833be0ab8ea509ab331593ccb87ce775dd362e54f41448b5d4f4"
  },
  {
    "id": "1EB-13",
    "nombre": "VARGAS CABA JHOVANA",
    "curso": "1ero B",
    "sal": "34da4677dabfef12dfe074c0",
    "hash": "d956f7c875cde9a460d756541d4e96dbffea3908a791e3229e248b134237b82b"
  },
  {
    "id": "1EB-14",
    "nombre": "VARGAS CACERES INGRID",
    "curso": "1ero B",
    "sal": "994ea454fe9d5b64faa7ff91",
    "hash": "7893c07676f8d4e2949ba1d2ac18c400cf97c3a25b4de1fb13e75affe7f0530c"
  },
  {
    "id": "2DOA-01",
    "nombre": "GARCIA MARIBEL",
    "curso": "2do A",
    "sal": "2f664d11dfe4f569915d402e",
    "hash": "7090eeff4ebd0491bfa46d30369967e3bc472e2196c677dfd059de4a3f842124"
  },
  {
    "id": "2DOA-02",
    "nombre": "AMPUERO AVALOS SANDRA",
    "curso": "2do A",
    "sal": "936954b9f068850bf9f4299e",
    "hash": "34f2af4c94af86b76afd22145f0f9500420042386cb22120eaf1c1fa983cdc6b"
  },
  {
    "id": "2DOA-03",
    "nombre": "AMPUERO OSCOSIRI JAIRO GAEL",
    "curso": "2do A",
    "sal": "2f21af6104ac425671fdceb2",
    "hash": "30712e1fa52a38b48289d53a91c9fbb4449712cea120a3f30ed85968a97c5256"
  },
  {
    "id": "2DOA-04",
    "nombre": "AVALOS ORTIZ ISRAEL",
    "curso": "2do A",
    "sal": "33ca4c8e72d2eda7fab75877",
    "hash": "3f21359046a3b76a458994487f0ebb3354fb24c34caeef8fa326b1cb7667138a"
  },
  {
    "id": "2DOA-05",
    "nombre": "CHUMACERO LOPEZ JUAN PABLO",
    "curso": "2do A",
    "sal": "26f4fa0808376f6ecc33d02c",
    "hash": "ce4decc4d2c590daf2731b932250dc51654ffd93d2e113f63ac4285f92abbdc3"
  },
  {
    "id": "2DOA-06",
    "nombre": "GARCIA ESCOBAR SAYDA",
    "curso": "2do A",
    "sal": "4a1f3e6808dd26adab97b957",
    "hash": "35559924aca82da8e2542b69d912dff0fe63f6621ed72437c1ad0e9e22c42730"
  },
  {
    "id": "2DOA-07",
    "nombre": "LEON CALLEJAS JARLETH CAMILA",
    "curso": "2do A",
    "sal": "63f5425fbb1e951a5aa5a793",
    "hash": "342eaa98778c37ed006b868af2a52a27e74209a5134c18141845d4453daac7e9"
  },
  {
    "id": "2DOA-08",
    "nombre": "LLANES AGUIRRE HEBER MISAEL",
    "curso": "2do A",
    "sal": "20cae65234c573809b35cea1",
    "hash": "c592f8b07f3b559065055d737142fd3ab7fa08a9d2b9345011084c4bd394a8ec"
  },
  {
    "id": "2DOA-09",
    "nombre": "LOPEZ DAZA ALAIN JHOSMARIO",
    "curso": "2do A",
    "sal": "43e0c60fa04023388c546f5e",
    "hash": "386aeb6eac566a34d14e22368974713ce661d81c45ab16fe9f3797a1f75661d0"
  },
  {
    "id": "2DOA-10",
    "nombre": "MANCILLA DURAN DIMAR JHEFERSON",
    "curso": "2do A",
    "sal": "59d78b8c547273740c44bb06",
    "hash": "40d489a3ff2dc1b02d14526e3b272c37f877dfd49832f86cf48899df814ff46c"
  },
  {
    "id": "2DOA-11",
    "nombre": "VELASQUEZ MENDOZA LUIS ANGEL",
    "curso": "2do A",
    "sal": "5d17ad85e891f5d9a3e90ecc",
    "hash": "e50149489303efa40e9772ade2c5e3dc2d6f478188621de6181b2c6186eaef5b"
  },
  {
    "id": "2DOA-12",
    "nombre": "VERA LLANES LEIDY VANESA",
    "curso": "2do A",
    "sal": "50a0a5a45428b45078583aab",
    "hash": "beb894ee63a5328b594c89bd5c2803ff549db5189f75468c325086c5a76343d5"
  },
  {
    "id": "2DOB-01",
    "nombre": "LEON CACERES REBECA",
    "curso": "2do B",
    "sal": "46bae943afe9430379e21435",
    "hash": "3b684ad718ee968a21e80a5b886ae76024778304aa296200e639fd5f0664db4d"
  },
  {
    "id": "2DOB-02",
    "nombre": "PALACIOS ALVAREZ LISBETH",
    "curso": "2do B",
    "sal": "f402291cb135e7926b0545f0",
    "hash": "ee9a8a91a43f0501cc0ea13ea04802b85741bfded3046b7a636ff8aebef1260a"
  },
  {
    "id": "2DOB-03",
    "nombre": "PALACIOS MARQUEZ EMANUEL",
    "curso": "2do B",
    "sal": "72c6a6b42fb677076a096f55",
    "hash": "044f50cb976429999d6b06333dfb18580296cb716aaf1f7bd9aa9162c4edccac"
  },
  {
    "id": "2DOB-04",
    "nombre": "RENTERIA BAPTISTA KENIA",
    "curso": "2do B",
    "sal": "e320d50eb24234926cf70a78",
    "hash": "8f0114e8f3c0aa7df9301cc893bc64830ab5c56d19ebf300a53e5c2c79962465"
  },
  {
    "id": "2DOB-05",
    "nombre": "RENTERIA LOAIZA LEYDI",
    "curso": "2do B",
    "sal": "f2c118967f6c372a4323bc74",
    "hash": "d12a781fd7eef8ec3492516fc1570bf7722754569bd21912d6e65d33f5b954e8"
  },
  {
    "id": "2DOB-06",
    "nombre": "SALAZAR NAVARRO AYDE",
    "curso": "2do B",
    "sal": "dacadca2071b21d91ba7e2aa",
    "hash": "44e2f25ccbbc363f527ac36d251e0754170b1b950386d10fbed3b7cd08292d06"
  },
  {
    "id": "2DOB-07",
    "nombre": "SALAZAR SANDOVAL EDIMIR",
    "curso": "2do B",
    "sal": "ce074b86f1072165d1cc1d82",
    "hash": "55c6824b916d70304ca1a96fc9613a4862363d1ce766c404edfbb3d7203d7e64"
  },
  {
    "id": "2DOB-08",
    "nombre": "SEGOVIA SANTILLAN ERICK",
    "curso": "2do B",
    "sal": "5cc339817e54347ae82b8750",
    "hash": "e17345d81d271b371203bf427d946ea3a1b8ee0379a19f6cf21e2baab63a4ee2"
  },
  {
    "id": "2DOB-09",
    "nombre": "SUSANO VARGAS JACOB",
    "curso": "2do B",
    "sal": "de5f8fe3a1474bd9d6985c46",
    "hash": "cbbbca2e5d32ada88105bd3556f4ee74f3fda22320b1e1311422fe687ceccbd7"
  },
  {
    "id": "2DOB-10",
    "nombre": "VACA SALAZAR MATIAS IVAN",
    "curso": "2do B",
    "sal": "58239d9c52f18868793e893d",
    "hash": "631f1288531b71324ef0131a3cdee68530ec8dab5f83e91c725aebb6065fbd47"
  },
  {
    "id": "2DOB-11",
    "nombre": "VILLEGAS POSADAS ARELY",
    "curso": "2do B",
    "sal": "54648c82cee7edad046a5298",
    "hash": "ec54369d6e78a5e8304d9aa07874057fd1b76a6e752a883ce662e0f1397fd44d"
  },
  {
    "id": "3EA-01",
    "nombre": "ALEGRE SALAZAR DALINZA",
    "curso": "3ero A",
    "sal": "61395e6d9b4754f1fcfc1bb4",
    "hash": "469f71c6d4f12dde1081047c16d68da4b90a661cd853f1daeb2109e282e9c1cc"
  },
  {
    "id": "3EA-02",
    "nombre": "CACERES AVENDAÑO ROSALINA",
    "curso": "3ero A",
    "sal": "a697d602f77e27a8fc7809b1",
    "hash": "64dba7ad2735c7bb7b57c2ccb2739310d9cff74a61eb46abe1e9105a4e51baba"
  },
  {
    "id": "3EA-03",
    "nombre": "DIAZ MONIJAS DAVID",
    "curso": "3ero A",
    "sal": "f6d43d1dd8c8a167edd2811a",
    "hash": "36758e57988639450ad4f18f9261928015e65e26c4d4ffa0b2fe71ab93d12e32"
  },
  {
    "id": "3EA-04",
    "nombre": "DURAN MARQUEZ JOSUE",
    "curso": "3ero A",
    "sal": "cd2a614f75d4ca026c32071d",
    "hash": "ffb747c706ebb39311cb91ed27c91f31b86a968a1d865a1d54592422665c55ab"
  },
  {
    "id": "3EA-05",
    "nombre": "FLORES ORTIZ KESSY ROSALY",
    "curso": "3ero A",
    "sal": "278f409a2aa9c94036e84267",
    "hash": "5294f8436121023ab4bf70170815963b61f795407b6f58fc5b05e9c6fa51becc"
  },
  {
    "id": "3EA-06",
    "nombre": "GUERRERO ZELAYA ALEXANDER",
    "curso": "3ero A",
    "sal": "611cc29051bdef371c05c8a6",
    "hash": "7e2f9d58789b7431b6581e71a140b90d1f8d889683ca2ed115052484292290d9"
  },
  {
    "id": "3EA-07",
    "nombre": "LEON MELENDREZ DANIA",
    "curso": "3ero A",
    "sal": "deba42b815ea3a20bcdcdd7c",
    "hash": "c6078fd15c7ea941b0a8b1fecedfb7b96f9df3cef1b620abbe65ef44f52b446a"
  },
  {
    "id": "3EA-08",
    "nombre": "MARQUEZ MOYE ALEXANDER",
    "curso": "3ero A",
    "sal": "e1b03f8db50ae991842026a8",
    "hash": "1afb2f72fc1189f66e4ea30adee11ecda26911cc76f9d015a0b8f56dfdeced75"
  },
  {
    "id": "3EA-09",
    "nombre": "ORTIZ LEON MELANY JHAMILETH",
    "curso": "3ero A",
    "sal": "43e860d4a7cdf3ee41f3b40f",
    "hash": "7357b4d9301b7d4658b2dd444784e224ed120da9af8d41111f166910929da956"
  },
  {
    "id": "3EA-10",
    "nombre": "PALACIOS LOPEZ ANABEL NEYSA",
    "curso": "3ero A",
    "sal": "7115b1532aeb62714e9a9193",
    "hash": "a7d5bc13a883f2cf2c05bf6b9a7f4797ef43198fd7ec054667d64bcdd4118f05"
  },
  {
    "id": "3EA-11",
    "nombre": "PANIAGUA SIFUENTES ELIAS",
    "curso": "3ero A",
    "sal": "5fc6eae59442a2d19a846ef2",
    "hash": "c5b7c41e3d3e3031b4fc60e409dc31b311747630c8b40ea7cdbdb4767456fe5a"
  },
  {
    "id": "3EA-12",
    "nombre": "RENTERIA CARBALLO AYDE",
    "curso": "3ero A",
    "sal": "4ab3b8f36a491534ed403776",
    "hash": "7a64f5ff17ee346dde54f37eab8218950c94bc62b219321bdd2e7f9565ccd427"
  },
  {
    "id": "3EA-13",
    "nombre": "RENTERIA DIAZ DIANA ESCARLEN",
    "curso": "3ero A",
    "sal": "4ffad37aaa980d128a1253f0",
    "hash": "2ec66b2d9222d048573d9940739bf6a0733c326a473893752d078690eb7a4a92"
  },
  {
    "id": "3EA-14",
    "nombre": "RODAS ZELAYA WILBER",
    "curso": "3ero A",
    "sal": "0592be459078f108997d44f3",
    "hash": "f871f468bcf5d82fba6e0c7693bf3a3c9132167dd65ac72c1e2fe06b7bc013ff"
  },
  {
    "id": "3EA-15",
    "nombre": "SIFUENTES ALVAREZ ANALY JHOSELIN",
    "curso": "3ero A",
    "sal": "74629fed76d3403c1e6a2fb2",
    "hash": "965523cb2b85b5b054b31d549739d3bcafbf0c92608d7fae08f4ded22e47086b"
  },
  {
    "id": "3EA-16",
    "nombre": "SIFUENTES ARANCIBIA LICETH",
    "curso": "3ero A",
    "sal": "0f38c15117a65bab48eb68d9",
    "hash": "d546a5b7b9545545b3456f11e836d3c6ce71766ed910b00cb4b02e9d631af8d3"
  },
  {
    "id": "4TOA-01",
    "nombre": "CACERES VARGAS ANELI",
    "curso": "4to A",
    "sal": "1000f32733296bd3f6632adc",
    "hash": "9683d89c5f02ff9a898c1f2a1d3c1055b19169d0c33c0a6d68d6bf6d823fd1b8"
  },
  {
    "id": "4TOA-02",
    "nombre": "DURAN AGUAYO NEYDA LUCIA",
    "curso": "4to A",
    "sal": "74291860d0219391b373b671",
    "hash": "00f30e996eb8a03d91b190d942505b7543997d9f054392350eea102287186c97"
  },
  {
    "id": "4TOA-03",
    "nombre": "ESCOBAR HUAILLA ANAHI YHANDIRA",
    "curso": "4to A",
    "sal": "57dad98b36d7f6f7ae9b1567",
    "hash": "33806efdd1c13128a88210c3d785d868c8c0ebc8ce6f79b9673e4ed1d2d889ea"
  },
  {
    "id": "4TOA-04",
    "nombre": "FLORES BRITO JOSE MIGUEL",
    "curso": "4to A",
    "sal": "1d7582c508f05c69dcc1d0f8",
    "hash": "28442e25a8f8c6732ccf9e0d51744c863202a3bf68a7b3148392a568a0709287"
  },
  {
    "id": "4TOA-05",
    "nombre": "MAMANI MARQUEZ MARY LAURA",
    "curso": "4to A",
    "sal": "5d78c8ab097631f472c43cdb",
    "hash": "7b78408f0f40c351db919742e80a4618a071fb243c614b32792774225a9388c2"
  },
  {
    "id": "4TOA-06",
    "nombre": "MARQUEZ OLLISCO VICTOR MANUEL",
    "curso": "4to A",
    "sal": "13ed5fd2453523bef27ad6a4",
    "hash": "8f15af557f93b7aebb77da97a0a17c4bf14cdbf4317ba2240fd3e288c49a09d5"
  },
  {
    "id": "4TOA-07",
    "nombre": "PALACIOS ALVAREZ MARIA LIZETH",
    "curso": "4to A",
    "sal": "e43c64090be175fe7aec60cf",
    "hash": "79f8a4633da54e745e6e986ff2daa4250754209f540c045f15df2cf331b5e291"
  },
  {
    "id": "4TOA-08",
    "nombre": "PALACIOS MARQUEZ WILBER",
    "curso": "4to A",
    "sal": "c36c5cffc7e372c5fb52db00",
    "hash": "92001ae1b78c730f65a425009660445139646819f634d9fe43eeca5c353b2cb5"
  },
  {
    "id": "4TOA-09",
    "nombre": "QUIROZ RENTERIA JUAN DAVID",
    "curso": "4to A",
    "sal": "0e10edda46b8aff3cb4b908d",
    "hash": "c5df6feb3a3510030a9e451722bb1faf417ba81d9b9e56202d7cc1490fbb57aa"
  },
  {
    "id": "4TOA-10",
    "nombre": "ROSAS PEÑARANDA JHOSELIN ARIANE",
    "curso": "4to A",
    "sal": "22d6e619ccd3884445a94486",
    "hash": "e1f04939f1466949d869b0241e12799fc1737fe0348011bb1a6656a3a8129eaf"
  },
  {
    "id": "4TOA-11",
    "nombre": "SALAZAR CACERES JHESENIA JAZMIN",
    "curso": "4to A",
    "sal": "8d7278b2f7ac70c336b1d140",
    "hash": "011d8ca4567850527a3367365ec1083c1bc1783c2e6d067753addc792f384e9f"
  },
  {
    "id": "4TOA-12",
    "nombre": "VERA LOAYZA ROLANDO",
    "curso": "4to A",
    "sal": "a6e8222b997ab501c1372cc0",
    "hash": "6d635fdf5660d9792b2fd261f0f18f4e0d1a8ce51e95cd98a6499dfeab958ac9"
  },
  {
    "id": "5TOA-01",
    "nombre": "HERRERA MAYERLIN DAYANA",
    "curso": "5to A",
    "sal": "5afcde0e94aec82a293bb4ed",
    "hash": "ee8874c57ef8f4d5b64d9a849190300cfb9814c8569be7f6216421bb49318a51"
  },
  {
    "id": "5TOA-02",
    "nombre": "MARQUEZ ROSMERY",
    "curso": "5to A",
    "sal": "4e506a74bdb402c34cda0070",
    "hash": "83ddacefb973b7a83ac2ce27614b8da096b96d96f68330ece75ff86ebb83e196"
  },
  {
    "id": "5TOA-03",
    "nombre": "AVALOS ORTIZ DALMIRO",
    "curso": "5to A",
    "sal": "8af18be4049b29cbd6bb106f",
    "hash": "c67d135ae6e3fd1b5266a91fb35c6a436e4a271a47d6c60d66a1e3ca2131aae1"
  },
  {
    "id": "5TOA-04",
    "nombre": "AVENDAÑO LLAMPA MERY",
    "curso": "5to A",
    "sal": "b0ed1fc8f940cadba7b2fb8b",
    "hash": "8e02fdc5f7804e83ea8834b99222b44dfd741512f4fb7ad2269193b814eac7f3"
  },
  {
    "id": "5TOA-05",
    "nombre": "DIAZ MONIJAS CELESTINO ISAEL",
    "curso": "5to A",
    "sal": "62036c280f334f8798929ac2",
    "hash": "3619a325784686c9063a0605698eec55d670f8778e7733cf0028da917218c01b"
  },
  {
    "id": "5TOA-06",
    "nombre": "FLORES ORTIZ JOSE MANUEL",
    "curso": "5to A",
    "sal": "3bfdcce9934fe022b79a0965",
    "hash": "a58e617c360eb4042551db04ce9166404589c34cb56b224bfd7214edfe52dd04"
  },
  {
    "id": "5TOA-07",
    "nombre": "GARCIA AGUILAR LESLY ROSARIO",
    "curso": "5to A",
    "sal": "d9ed768d235d342efb93aecb",
    "hash": "28cb05432c8a6c3b1d991c731ef6aebf643a7c4ceec56bde4075e5e182370cf7"
  },
  {
    "id": "5TOA-08",
    "nombre": "GARCIA VELASQUEZ ALEXANDER",
    "curso": "5to A",
    "sal": "edb8c31c8dddb5b446d754e6",
    "hash": "812a75aab398ae0d09e56b8f472a7c22ab4c01446e965bb2ef765ac4862cecc8"
  },
  {
    "id": "5TOA-09",
    "nombre": "LOPEZ DAZA JHOEL FABRICIO",
    "curso": "5to A",
    "sal": "378dad49b187bef95c1ca6b8",
    "hash": "bc7d530e7e8b817746c7d232f5639126e59c9a8b1d7ab0fc00b208ed84caaa9a"
  },
  {
    "id": "5TOA-10",
    "nombre": "MICHEL SERRANO ROLANDO",
    "curso": "5to A",
    "sal": "5723902b59bd28147915f05d",
    "hash": "c60c8481692d30b50d346ea5c9e557b97d5e9edfc06d70e087a725d2a26f8d3f"
  },
  {
    "id": "5TOA-11",
    "nombre": "MURILLO DIAZ WILBER",
    "curso": "5to A",
    "sal": "6e41c82a587b6644474855da",
    "hash": "ee527c2a9cf88ce4d6dc94247026c2d3f48dbe3b12462654bc519aeb5b4aac6f"
  },
  {
    "id": "5TOA-12",
    "nombre": "PALACIOS ALVAREZ MAYELIN",
    "curso": "5to A",
    "sal": "6d099ec22c1b6152151a29ac",
    "hash": "f6df92119c8fce0882eb98bb22912bc30001253961f3a520c378da0a1ed482b9"
  },
  {
    "id": "5TOA-13",
    "nombre": "PALACIOS SUBELZA RICARDO",
    "curso": "5to A",
    "sal": "7ab40dcd60676b5ed06714d9",
    "hash": "e5190fbfda3a83b113ec9bae8375862bb9eba8d1feb6944757ffea572b90de53"
  },
  {
    "id": "5TOA-14",
    "nombre": "PEDRIEL AGUILAR CRISTHIAN ALEXANDER",
    "curso": "5to A",
    "sal": "ccccdf07838289586c0c5770",
    "hash": "57cfbc843e0e202fcb548d0be66566dfca4713a141e32ef2f15a5ec635dc7cf2"
  },
  {
    "id": "5TOA-15",
    "nombre": "REVOLLO MARTINEZ NOELIA",
    "curso": "5to A",
    "sal": "106e262d1d97750331f47fbe",
    "hash": "bca24ec08ef3a224a7262abee8b78616978a3f8607f8d68a5ff8f45358c8ef7b"
  },
  {
    "id": "5TOA-16",
    "nombre": "RODAS ZELAYA BISMAR ARIEL",
    "curso": "5to A",
    "sal": "c60026fec0c45f7713ed3ad2",
    "hash": "b2caa8f403d37fcc096f176ad96b0ef550ba46c894d59c045b4ed1f786544974"
  },
  {
    "id": "5TOA-17",
    "nombre": "SALINAS RUIZ YUHEM MISAEL",
    "curso": "5to A",
    "sal": "198e9c8fe0726a6a147c3034",
    "hash": "ecaaf2faa1299ecac8508f6abb6a6b32d9b9e6227e95efc489f95cdcde656409"
  },
  {
    "id": "5TOA-18",
    "nombre": "SANCHEZ AVALOS REYNALDO",
    "curso": "5to A",
    "sal": "3b0765dff502933e018ba062",
    "hash": "8da68d455aec69db49860b6bd8b1d0c3276687c1bc1cc9c307ab990822ef2eff"
  },
  {
    "id": "5TOA-19",
    "nombre": "SANTILLAN CERON BRAYAN",
    "curso": "5to A",
    "sal": "66deb815a2c6301a696062b0",
    "hash": "69a6b4c6f2e103a4ec42d6971b4a0cf53b01f9a41a6f267801666eccc4fac2c1"
  },
  {
    "id": "5TOA-20",
    "nombre": "VILLEGAS POSADAS MARICEL",
    "curso": "5to A",
    "sal": "e9f4be4a72e54b4033f2124d",
    "hash": "ccebc2f3d02c170206008f2c4b535c8a29d435e56bb043ef0e81adc1fe6a3b32"
  },
  {
    "id": "5TOA-21",
    "nombre": "ZARATE SALAZAR FACUNDO SEBASTIAN",
    "curso": "5to A",
    "sal": "d20868bc418bf655106e97c4",
    "hash": "d7864101159283ed4860deb7812adf2c3bed60a72b0d8a6c6621f91d7f3d792c"
  },
  {
    "id": "6TOA-01",
    "nombre": "AGUAYO ALVARZ AYELEN",
    "curso": "6to A",
    "sal": "900958be218fbbac42bf8402",
    "hash": "17a058c487e7bd964de824aeb92d3488e6039efca7df6a87e6148646ca6e91b3"
  },
  {
    "id": "6TOA-02",
    "nombre": "AGUAYO MARQUEZ DILAN",
    "curso": "6to A",
    "sal": "4d5daaca1ab49bfba9fa53fb",
    "hash": "ed260c5ac75673ba4d492474fb6c9ed7d8a00d2d5a9394cf0691dd2ea1802d43"
  },
  {
    "id": "6TOA-03",
    "nombre": "AVENDAÑO CACEES JOSE RODOLFO",
    "curso": "6to A",
    "sal": "b5b1a9a30c3c842f8ed64e3b",
    "hash": "87e662d7956a12b201581bc95627c9556da07e591ba36a5c9100c13d6035a524"
  },
  {
    "id": "6TOA-04",
    "nombre": "CACERE MARQUEZ ELVIS",
    "curso": "6to A",
    "sal": "419ea389df73f2f85580c55f",
    "hash": "fa06b2f619bd68a2e447b6e8482836394e0c7c5d853dd3f9c5a0d132cce6e0bb"
  },
  {
    "id": "6TOA-05",
    "nombre": "CHOQUE ILAFAYA MILDER",
    "curso": "6to A",
    "sal": "f6c9c14c3a9771b8ddf62856",
    "hash": "2d4f5abdd0298b46eb2ea8903fa8d70ec04ccb129dfd03ae55e5b6fffbe1199a"
  },
  {
    "id": "6TOA-06",
    "nombre": "CORALES CARREON ITZZAEL EVIK",
    "curso": "6to A",
    "sal": "50093d10d9a726bd7c843cc6",
    "hash": "b9d248c8a6930c1220b36e8b4c4b2e2163a71851719d674e91ec8c22b6c82688"
  },
  {
    "id": "6TOA-07",
    "nombre": "DURAN AGUAYO LEYDI ANGELICA",
    "curso": "6to A",
    "sal": "0dcb573c856eee40a2369b94",
    "hash": "eb892795d2eee2224e8353ad71ba7556bdb8eb607835594e0f2bef00971f66ba"
  },
  {
    "id": "6TOA-08",
    "nombre": "LLANES SARDAN LIMBERT JALIL",
    "curso": "6to A",
    "sal": "322267d9ef51c752338fe4cf",
    "hash": "387940f5fbb0bdddd0f8bac94d400c46c0b200290d18799565245a645c0441e9"
  },
  {
    "id": "6TOA-09",
    "nombre": "LOAYZA HERRERA FREDDY",
    "curso": "6to A",
    "sal": "28a17fcce2d64c85b337313b",
    "hash": "1f738df1e435191ab28d76bdcdfce4dbf026ceb3ea898891967c01d493a5ff9a"
  },
  {
    "id": "6TOA-10",
    "nombre": "LOAYZA SALAZAR DAYNER",
    "curso": "6to A",
    "sal": "9fa6b8b569d337c7aef1d504",
    "hash": "221969b60969ad472ca988d91ccdcd850887da72ffe0b73b986c7bdce91ef611"
  },
  {
    "id": "6TOA-11",
    "nombre": "LOPEZ VARGAS ROGELIO",
    "curso": "6to A",
    "sal": "ecade235c02a6cbd6334f4f0",
    "hash": "b96daef3d17fe759537806b49c468717afa676a612afedb647fbc053bb243b35"
  },
  {
    "id": "6TOA-12",
    "nombre": "MALLEA MURILLO MARIEL FABIOLA",
    "curso": "6to A",
    "sal": "93e767876e16790d7a07abd2",
    "hash": "9f8c87e77674c64229552ee0fce13a7aaeb0bbaaf495168e74cb64b24a358ad8"
  },
  {
    "id": "6TOA-13",
    "nombre": "MARAZA GARCIA HASSEN ANABEL",
    "curso": "6to A",
    "sal": "dec6724464b299b6837379bc",
    "hash": "f44fc74c3763d26d4bb6dea6a05198effe636163e8e15acde9d4a59ff48639c5"
  },
  {
    "id": "6TOA-14",
    "nombre": "MURILLO VEDIA WILLAM",
    "curso": "6to A",
    "sal": "a82808966adbd696a06e3db5",
    "hash": "0b23b5a04f3c292439c2a226a716387727f595b4b14b0a9af266bb64e455bc8f"
  },
  {
    "id": "6TOA-15",
    "nombre": "PALACIOS HERERA JHOSELIN",
    "curso": "6to A",
    "sal": "9317fd9931aefc296bbf5f29",
    "hash": "54c931c316d3687aa02a96d0e5b3686b8c0999b43727dd0042743a10d7836fed"
  },
  {
    "id": "6TOA-16",
    "nombre": "PALACIOS HERRERA JORGE REYNALDO",
    "curso": "6to A",
    "sal": "e139c3b904bc8ca3c3fb35aa",
    "hash": "61153a4f4cac624c6a177c52042e4d0847372c77f7e37910e433a863f20acc2e"
  },
  {
    "id": "6TOA-17",
    "nombre": "PLATA AVENDAÑO FREDDY",
    "curso": "6to A",
    "sal": "41ee387fefb4874f33fe97d9",
    "hash": "6f2e8abc4db15292f6ac6d5ca1530d091f958c578d9e37c8384c893f93a26811"
  },
  {
    "id": "6TOA-18",
    "nombre": "VEDIA AGUAYO LIZETH MARIA",
    "curso": "6to A",
    "sal": "4f023356ae48401416ed0130",
    "hash": "3d48dd40a03590e1ef37f5e85df815d15fa7c8bb7be9273cb733993837a99252"
  },
  {
    "id": "6TOA-19",
    "nombre": "VEDIA SIZA EVER",
    "curso": "6to A",
    "sal": "03b43d938b0a65edebdccbff",
    "hash": "5c8a723332d742578774bbc382215cce54014bfc9fae994788c096ed0e432cd7"
  },
  {
    "id": "6TOA-20",
    "nombre": "ZABALA RENTERIA NELIDA",
    "curso": "6to A",
    "sal": "70780761d443dd7eba3b0937",
    "hash": "d43cc4b79940a64636ed592620a870feb3e66f563ceca3e4e36fa534e01d2fb7"
  },
  {
    "id": "6TOA-21",
    "nombre": "ZABALA RENTERIA ARRIALIN",
    "curso": "6to A",
    "sal": "8f2e56b11afc50c1e8ce0722",
    "hash": "82674ccf3e8cbb2816880d620c5e52db3420f44bf142fbf606cd93a2203cebad"
  }
];
