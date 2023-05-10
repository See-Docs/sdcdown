'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9f29d6ffeba12c2a6e0047dc77d8b623",
".git/config": "192e26882c67480584a96d0647c9976f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7790c5349ae1b13dc74b6ffbe57e58a1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2311e005843acfd8771af4fa5212d4d6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0dacda5aa889fd15b0994be3b778fd0e",
".git/logs/refs/heads/main": "eeacec33b84739fd7d6b5c1ca8878885",
".git/logs/refs/remotes/origin/main": "a1992c6b24c2c072b4ac19650b343b04",
".git/objects/0a/5bb31f6b2d1ef54e8668d3a814a31c2f97bb2e": "0be61f78757e281857ac8440ceae3b78",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/18/f2b3281c3bb3ab50b03d9de658f368bf69c195": "7573217b02a358ad2469154327edf473",
".git/objects/27/a29972ccd0852f070a613ec7f0e4617622d8d4": "9e2c42e21abae213c27893eabc4f1eae",
".git/objects/31/af09572a373ab94caff906844d62c943abe430": "c47bb9d6ccc648a6064bc837d5f4ba8b",
".git/objects/32/6b43043cdbf11558a2bd1bf1bcadd76bec5a9f": "f3b1192c337c52dd724962caf538996b",
".git/objects/33/1213fb06f4bae7ceee3a7341a2433a685c8876": "f4990e31413adbb7f85ba9fdda05487d",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/93f65292b9a025726632a3df9f1611576a2f2f": "c8c1721e51b7af198f9d669e1f6af269",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4e/14d4a107bf1943a02a69f73d3c61009125fcdf": "4b0f37ead5745414744c2c0f635bebac",
".git/objects/50/a96fa40d46f85797e7821acea55e24b18a31b3": "5ffeb5d65f6096eac5431d5902dde8e2",
".git/objects/52/228cbd30e547408b988263c3feeb6c8242525b": "41a471520c3300427f9c3f2afdd56c13",
".git/objects/54/e882ef46fb122cd4a35a00b0f2bd6087e4bc7a": "1bb9b885e3e34668af584d3cb2d6a80c",
".git/objects/54/ebcd6ade064c4f2656c5d2f861a21ef7e6f174": "7d54d3979511c75b60ab9d7eb536830c",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5a/21e3695cc67c7597ecf3bc2821a9590e187a86": "453534535d4228e9e4999e83fbc6c848",
".git/objects/5b/3f2756bbf2d61aeb3089ed717bf0a8c76bf0c0": "02e13113b2ade4517ac0a139d545e9e1",
".git/objects/60/a93f67762bb6876e6fe9c1bfa543636cefb4f7": "0bd7b801e5dde6caf921ab1ce756d991",
".git/objects/61/d24abc77ffbc7bc80a82bcc424d9eb2a67ef35": "bf67530771207783bb286cd2e3467d37",
".git/objects/62/ff93c124aecf8f1108bcbec823e38eb0cab399": "24eafb527353910f7babe69601fd5821",
".git/objects/63/9b7d9f7f9cfd31754da8d27a99388e9b423057": "4d8d986002c54b5abe8f6709f36294c5",
".git/objects/63/add84178072196919754e3df13e0267b2223d4": "b17662b1f8aee4666506a9ab99a69d4f",
".git/objects/65/512f64f8ae9f82813ad819cd579a52eb80764b": "3aeabc2c69702cd964916395fe5ab234",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6e/903a7aff02f78c7e496e3663df23c49180f3b6": "0e5264baf5bb3aaf8e51f14f9a764441",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/76/935fed87676663f906775d3b1fa2154f612862": "8b1c52eeb06ce71e2b971d1dc5b91ea1",
".git/objects/76/bd08bd50c0a238b71a7193d9f3aeeabb639dd5": "60877677dab7ee75232ef782c1291b51",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/2235152e84a206146abd6a0173bff1bb99bd9a": "c37931e2bc00bb1aeecce52683e70851",
".git/objects/86/40460739d2d907e54e157717462c190e41c7fb": "e1732e364307f13c79e31336fe2c3051",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/93/898b8adce37b9ad9417e6917b23201081e8fcf": "6ab8d06f237e7c99a9709fba88e814b4",
".git/objects/94/9aad7eb1a82e8a36eb8c065cf124392a420ac8": "dec7a4c494547e43c8b5ecd4112bd8fa",
".git/objects/97/3008e7a537acf7dd6adedfb505400abfb416af": "89a780636499022555b558d97d128273",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/802acf87cc6e3556f978aab3ae3f589f066415": "c7e247518b67e2ed968317688dba671f",
".git/objects/aa/d07f26c08763ee4aa0bb594b4a8c561abef403": "bf90829405400fa49aee2c7540a5f4b6",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/7be19cdbb79197d9a5530bcf5cdf01756de90c": "85383238cc7ec2e1d0adc35e3028ab2c",
".git/objects/ac/e7a027b606328696ed4ebebc1afb06e5405673": "146c28ebfd5d63356ddc81031a9009cc",
".git/objects/b5/df8788b00333ea3234cc65a003e63f9a960d59": "d53d54082e3937e1f528e3bde1897b98",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/4f7771f1559958e74ead5b914850905b06d6e2": "c64f97665c77aad9f989bfe692dc8ae3",
".git/objects/c3/e56facd4ee0347bde14d7fa04bd15465820474": "1cece47022325b7eeb68acf0959d2d23",
".git/objects/d6/2f13cd6e404919a0ec4abd86c27f64e7b01fbe": "c888336c03f2d90b9ed960955afde6c5",
".git/objects/d6/88967e38ec91a9f06a82f1a961aa5aaeb44fe9": "38ccc622545a3363855f5c59219d2cc1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/9120b5a5fd53d00443a5b9fc3807289ef5b83a": "520510bae863716f51c4ac35c1e23e1e",
".git/objects/d7/a24a197db6bc671ab59ed5d4f948240c042a8a": "95144ef55e20af0b56293cf3342341f1",
".git/objects/db/57d0a12e9465bd1111bcaea838e717a3bc61d8": "97262b96c1ad10cdb6e5e4d6f4456e50",
".git/objects/e2/45fd29efd3b63d313762712782593ce82d680d": "878cada4eb688c5eeea9807ccc6b9ba5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/81030c57210b8da92a4eb704d02fb31e850952": "7593b1451c338e28fdf28821cee586e3",
".git/objects/f6/214313019f122ff1eb3d348ff992a0992b8639": "6eb567a37233a6e6541aaced46635309",
".git/objects/f8/b02b00730e68ca91adaa50b1c3f1c0789baee7": "7c6d97d9f305a840bee84e1fbc5e6ed8",
".git/objects/fa/6f4aa75134dcedf33e1073554a874da61118e2": "bd6d09dbc2ed071cb7d733b1793b4c69",
".git/objects/fd/b595cab60f44c8a6ce3ce2e3bfce1f982a33e1": "a08de0026b6d35848af45a512458a25d",
".git/ORIG_HEAD": "7a13eadba18290d0ee7111ae5cf6910c",
".git/REBASE_HEAD": "7a13eadba18290d0ee7111ae5cf6910c",
".git/refs/heads/main": "33b003e18ae2fae9d9b9427adfce4e49",
".git/refs/remotes/origin/main": "33b003e18ae2fae9d9b9427adfce4e49",
"assets/AssetManifest.json": "34c37de6aa4fd51f33c4006c2cd0f348",
"assets/assets/images/see-docs.png": "331f3779c51e90674a70576a3f6bc0e0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "513ca09fcfe7b15d9303bfd9980e8245",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4f7661d60602a43e7f5db23177202e0a",
"/": "4f7661d60602a43e7f5db23177202e0a",
"main.dart.js": "c9a50c2d409aa08b972662f90d8d75ff",
"manifest.json": "66825c22dad5a1407dfd6ff8a7d1bd60",
"version.json": "5a536221f970052f8f47d1c321b7444b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
