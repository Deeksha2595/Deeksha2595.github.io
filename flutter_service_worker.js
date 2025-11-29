'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0fb84f7344d7ebd871526384a970d1d4",
".git/config": "afce0e67ac7ebb23748a27b1556ea21b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6fa06da900d1c841efaf6be2a2e1b1f5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9390657993bcb3dc1506134f4523651f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e880589ee75c426411d4232b33766017",
".git/logs/refs/heads/main": "7e12b6870f18991e533a36b2b69cea37",
".git/logs/refs/remotes/jw/main": "b18883f9d90b86541cfaa034a5c59f83",
".git/logs/refs/remotes/jw/master": "5ffffe38eb4c6046d922fd5e8dd1721a",
".git/objects/00/ded0a3553d5a0e769edcb46f8e1532b37fafb1": "ebc95e35478be1324d2befcb9d5381d3",
".git/objects/00/e1764a06c9a142e0dd1deb176079d79ae388e3": "dd3ab5ffe510bb65560428a6c4e39dee",
".git/objects/03/6dbcf3a711b73bfc396ffec6bdda71fa48e116": "e0bb5fbd96edd1b1ecddf0a0c92fc0c6",
".git/objects/05/17ec2891cb83393f4bbc41267fed444924e396": "c4bb17b13e50015e7c1b78b8e423cb27",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/08/67b8bf36e8af862f94fe69f67343fd2193a288": "422d81649f500afd7f67bbeaeef159aa",
".git/objects/0a/adddc93e88c31de78fdc55ffafd711cb92ea51": "f02c4cdd382cc59a75a9d82b4c5189bd",
".git/objects/11/9cefa15e2028ed9bc18f1946b3dd3de369cc03": "c611871e1015a0dfb042061d46c52db2",
".git/objects/1d/a869d90ce3d8fb52b9fb81bb22358eb3845217": "7d0e55dd93911ca46206c5a02989e84d",
".git/objects/1e/04b60b1933f23944b6ab0ee75b27038a5a7c7e": "9528f3d4794d0fdf2b64618e3b7dceca",
".git/objects/1f/552ab693f0f28dbe8ed9ca93a2c5ea01241e7c": "2d1ab7fc58d0d7e6ad0867859c4afb1c",
".git/objects/25/e962861b738d09f8ba25562f74428f2536e9f7": "905d2bb47c07bedc3e7df31d0248d1e3",
".git/objects/29/0ff2cec0f3f39f390b49d9a1ba04ba47c21db2": "ebd17afcd827f0449b1d6bff55383b11",
".git/objects/2d/e605f113f2e088a431d9a825448b2bb2d29c5a": "6cd35d24d915341cc3575e78a58f1c46",
".git/objects/32/32c9b6fd9216fd4fc6e8911a92ad561989a637": "c8ecbb5c6c5d96364ba477d2ccb555e3",
".git/objects/33/e042910406854110db6ca3e7bc0cb48d3e7987": "cf0a935c81b9ec502157bbd8115b3ab6",
".git/objects/36/8f229d92ac48370e4a8a0aaffe002f7a5b3f18": "7504a4455d22d697fd5069f28efa6654",
".git/objects/39/b8814aecf8ec43997e2093cfcb4cb739f8d705": "fb85de87c79af0fd83e29071fc246467",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3d/454d1424ac2cb1bee6433e65e342422a9485de": "75164ca3d76fa074a6e105948d5a34b2",
".git/objects/42/86b542bffa74e918ab0eb0fb09da817a6c91cf": "bb579d5e01104fcbae4208648e96cbfb",
".git/objects/43/0bde019c040618210179c8cccee14123ab611d": "ac6aa15ef4644076b1a0d01e4aaf2e42",
".git/objects/4e/731380edd376d02253d4ecfcfcad4eb96ba84d": "31ea210ff04294e4e254f1e37c91c488",
".git/objects/50/8228d7519d142c6980c86986fb61122e2c82ef": "da145d4a7fe54edba6a3a5902caf7d03",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/39dd30b41324759c5c2ca2bd4958b4b2cc633d": "21a7d9d7298a88acf0073f9ce29019f8",
".git/objects/52/8e2b73e9e0d76a530c2d57fac7eccc38dbd216": "6d92f1149a5812406e4671c277cc1af7",
".git/objects/60/8d7707084cf15cbc77fa249001cca23d488937": "4f2d60e9fca6b20ce68e11d17d131fd6",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/e243c2f5dc85867cb2850e8283949d5a82f84c": "4b66730b242c9ae5d1a79cfc7447cc2c",
".git/objects/71/893a14fa768c8f94ca656b1eb3bedb9050178a": "e47f16c626e2859a6c09711f18104d57",
".git/objects/72/4c2bb8c8da348d504385662ed14081c044c393": "01f0c80d48358bc7b2799ce705215519",
".git/objects/72/5500b447d142573fe1662bb73ad9c13e2bb586": "40e0a8792f7d63207b524973e5240904",
".git/objects/74/0909ba1e3a30be5311559ef61156c089cb308c": "7f4e7e002a53347f2d94c860438b8d51",
".git/objects/77/41d008bbc685ddc3cf1f788d3396106e524a9c": "dda2aceef15527539598bfef453c9f77",
".git/objects/7b/4c597c9e0860e463ac4dbbddb04db068a60ce3": "8315ae12347cd3ebc6b4f0378709f28b",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/81/36c66438eabff2ef029ad8c1b7047224cb559f": "68ae45124bc317bbd87683f3f98f437a",
".git/objects/81/8d63e978211b6e75f319ce56f3d6b3f6a006e3": "67567331304fc59204ded7714940481e",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/b8cf093647e0c2bb34b962cfdefe72061b4c3d": "6e04de529fc1ffb6db27e3ce202b1ab3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/1b4e3320706a709f3e1c3a4c71d63a391dd904": "6650c520b9a65d4c1e67c78710660ddc",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9b/5db645fd4d5355abb4dd63377fe0cb81191c7a": "d9afde201eb5d4a529721d1939fc2edf",
".git/objects/9b/ae1393e4540c607d8034593018429545d01d27": "8a896d746df8a81078e50feb05e21acd",
".git/objects/9d/57e4ed8bc0dc866e721015bf1929b9c3729177": "aef4ed1be3b3c465cd4181cbbba355fa",
".git/objects/9f/fe4b4287234600bcd64d88b6c52195ac669abd": "58634a5a7b004494a0f9961ca5f4fcba",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/d221f5b9caa88b79cde076d689558bf54fd699": "c0ab9e1d34cb273a003b1ac6ff5926a4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/dd314b74258fc1b6c21b67ecaeeac372803c5a": "15e5881c81ec7c73a42da59bc30a4c21",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/512894fbc58b17adf493e22ef200eabae6c6fe": "4ad865b47825e6c5d5913709b83b05e2",
".git/objects/cb/494b3b556a8eec4aeb04609aaa0b39eb58361d": "de688f972ef6ddb5ebd16d79a4d966a6",
".git/objects/d0/42e160aa2f5c51286934cf90abf58b098f3f80": "40a4d52d93756daada0871fd318ff2fa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/b6c5c9462a136224afa073230099b4e022e151": "35307c0b34df66eee2f3a810b11b9dbe",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/da/3cb27f648a38f26afca4fa9c953dd93c828418": "68f6ffb9b338beeb3b1dec021340ac8b",
".git/objects/e4/bdea91d9209e7518be16593d04690a527c8831": "6b6ae5d82a51275ab8b58566494fe08a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/2293322bd74de2555a68ce4802c502944a6504": "d009ae6eb31c2e9f826680bf6e48f613",
".git/objects/ed/3b9aa5de09f905ba405a2f3e8de3132ee67529": "b4da767e74fa6b273d84a1e632baef62",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/f114b2b383654c404ea1b90ccaaaf558a2ad4e": "444456e352a03582680f03a5d44dc8ed",
".git/objects/f6/169254b6d7bc875237fca800631e86f815342b": "6eed2ce087bd7a01bf91180220853d68",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/ORIG_HEAD": "20a42f09b145ad2cb6315fd7389fb353",
".git/refs/heads/main": "20a42f09b145ad2cb6315fd7389fb353",
".git/refs/remotes/jw/main": "20a42f09b145ad2cb6315fd7389fb353",
".git/refs/remotes/jw/master": "a5ff496369ea9127a713e7b4e46c0d80",
"assets/AssetManifest.bin": "5c153cf5d79224fdc44bf6aea67e7b7f",
"assets/AssetManifest.bin.json": "d62b8362e12a664b3693d9bb598f6a57",
"assets/assets/1.png": "1f7a072cc563b0084007908748399991",
"assets/assets/2.png": "21f7a3d9627cbfab9785bf8eadce2a10",
"assets/assets/3.png": "71f1efe9ad31f3bb2872407754dbc1db",
"assets/assets/face.png": "0e786facd2a48b27d7b68b658bd4e3d1",
"assets/assets/flower1.webp": "cc44d11a0d91cd90ce4ea3cdf91a89ad",
"assets/assets/forest/1.jpg": "6e855d4b0168ceec01cd8289fc83e714",
"assets/assets/forest/10.jpg": "b72a84684dfa07be82c13610f3d30fde",
"assets/assets/forest/2.jpg": "197ea72f6efcffe714e4f7aaa703208d",
"assets/assets/forest/3.jpg": "a32f42f3c18d7ad718a18488105be647",
"assets/assets/forest/4.jpg": "bdd0d53b336480095fb3cc3c8f6169d3",
"assets/assets/forest/5.jpg": "332929fbca217909dddbf1d77e8edf0f",
"assets/assets/forest/6.jpg": "20386473a94a61afd3000df19051745c",
"assets/assets/forest/7.jpg": "e4275ab1f592a75d26b8a4afae273e7d",
"assets/assets/forest/8.jpg": "234c9ec15f7d1a1c0c981162765a500f",
"assets/assets/forest/9.jpg": "40bc702d62495334433694d8aa71da20",
"assets/assets/forest-trees.jpg": "bace5d672399233bf763659ef2c639dd",
"assets/assets/java_logo.png": "ee486b5ef2a5123cec87654ab1cfdc00",
"assets/assets/logo.webp": "e8b9b38d8d9b082eb50b3ad23b91b98d",
"assets/assets/Person%2520icon.png": "24d305fc3ba14d79ecadc718ddd67e99",
"assets/assets/person.png": "a661f39194ea868b78a81ed88e930d5c",
"assets/assets/profile.png": "7911231325696142b1726eb27d44de34",
"assets/assets/ques.jpg": "0aa5584bb0c23934bd68ebc0827be0de",
"assets/assets/sp2.png": "fd67956770e340d0cdb902a9a5583f14",
"assets/assets/sp3.jpg": "19b9bad3c3ee66052adbf12486024702",
"assets/assets/sp4.png": "3a7e26da370bc1ef6833528ed467fdae",
"assets/assets/sp5.png": "4740492fe9874ac1922040535feb4c00",
"assets/assets/sp6.avif": "0fcc995a125576f5b60d5d791cefafcb",
"assets/assets/spalsh.png": "6cd6366487a372eaff11380ab1782208",
"assets/assets/splash.jpg": "8cabc4c9d8db097456009287e45121ec",
"assets/assets/splash.png": "958fab339cf957997252fe6e6accc114",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "3a5ec73c0e7af388e944aacd865599be",
"assets/NOTICES": "b8df0fbf494da0c6dceb29e06bf5e9bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "5f3e4c9d706e409b222ecf6efdbc7a22",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "56753d367ee30f67cf6d48a62e31e88a",
"/": "56753d367ee30f67cf6d48a62e31e88a",
"main.dart.js": "98047392d6c13272a721924e257096c7",
"manifest.json": "526cf151bb264c92b00277c39c4df427",
"version.json": "e6a278ddba8cb03df2d42531be742986"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
