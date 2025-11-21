'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5a0645aa8caf53339430d4ef2693124c",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "022d342115e9d15eabe1f31fa6d31bbe",
"/": "022d342115e9d15eabe1f31fa6d31bbe",
"main.dart.js": "d07d08c04a337370b4485c9142d5a39a",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b1975d6c55f83c161140288056088d70",
"assets/AssetManifest.json": "7bd3e9c3124978de228bcfd7b9d5990c",
"assets/NOTICES": "57792721abf4dac6a3de939dca7620e7",
"assets/FontManifest.json": "4255bc36b8a3b2f1633cc23c6cce6d6f",
"assets/AssetManifest.bin.json": "74e6fb39edf4ee92bfe74378edc973ed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "255cf40e9aac60babb47549408267f76",
"assets/fonts/Inter-Medium.ttf": "a473e623af12065b4b9cb8db4068fb9c",
"assets/fonts/Inter-Light.ttf": "ff5fdc6f42c720a3ebd7b60f6d605888",
"assets/fonts/Inter-Thin.ttf": "b97f16379b4c106616f60f702733f5c6",
"assets/fonts/Inter-Bold.ttf": "8f2869a84ad71f156a17bb66611ebe22",
"assets/fonts/Inter-Regular.ttf": "fdb50e0d48cdcf775fa1ac0dc3c33bd4",
"assets/fonts/Inter-ExtraBold.ttf": "5061bd7701b1b3339f0c80e69a2136e4",
"assets/fonts/Inter-ExtraLight.ttf": "b7e44012c53f3bcbf154c7c4784fcc14",
"assets/fonts/Inter-Black.ttf": "4154321279162ceac54088eca13d3e59",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/fonts/Inter-SemiBold.ttf": "4d24f378e7f8656a5bccb128265a6c3d",
"assets/assets/images/image_bbb_fish3.png": "79db784f763be7a53da0ecb2acdc232b",
"assets/assets/images/pj2.png": "a7c6fee3315037f81af08794a978ccc7",
"assets/assets/images/pj3.png": "15aaaf89ae3d2f138d3f0b7e287a3f84",
"assets/assets/images/image_bbb_fish2.png": "ab6af1a45f344286f394052f25a2b64f",
"assets/assets/images/pj1.png": "619bf9f681033066770b0399ae78636f",
"assets/assets/images/image_bbb_fish1.png": "d1be96f1591298d578556442cd254a22",
"assets/assets/images/hundred1.png": "dfbad2ad24ea33faa363957c186843ee",
"assets/assets/images/pj4.png": "273496e4685d00004e992a3daaa0986e",
"assets/assets/images/triv1.png": "8785a8abd5ae06628e6f81a4e06ba64e",
"assets/assets/images/bbb1.png": "19e9c30ef16d020c993ef95dc465a2a4",
"assets/assets/images/image_bbb_fish.png": "03c2db19d885e296e4cb9cf443811f1a",
"assets/assets/images/wb4.png": "35b2a464761c9f3ad77ca6320090d162",
"assets/assets/images/hundred_cloud.png": "f827c80e32ed68be6c2e7d04e4647fae",
"assets/assets/images/bbb_snack.png": "7e96e854e89125c6a282f5b9d057aa88",
"assets/assets/images/triv_main_2.png": "7acd47674fe9e40ca412f2a9d59865b1",
"assets/assets/images/wb1.png": "7b4f563af4315dc5ac7591aaacc97196",
"assets/assets/images/wb3.png": "38bc1347377bd6a840f71b78d2eb5cfa",
"assets/assets/images/triv_main_1.png": "51e8607a6408cb39cc57df1466918b3e",
"assets/assets/images/wb2.png": "021281a171cb6b5627577399cf646fc9",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
