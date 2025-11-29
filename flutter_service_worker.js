'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5c153cf5d79224fdc44bf6aea67e7b7f",
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
"flutter_bootstrap.js": "3b3b0a7b1b20d49aeb595d0de1c23626",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "56753d367ee30f67cf6d48a62e31e88a",
"/": "56753d367ee30f67cf6d48a62e31e88a",
"main.dart.js": "8353b2670309ff4965159b90a0981086",
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
