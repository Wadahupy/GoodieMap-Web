'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5ed48bd8a098e9020b407610dabceb7d",
".git/config": "31b3970e2f22099e964db7e3ce6be715",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "e409fb4c26cdedd16a505d58cd7a1687",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fc5e81dd9fd05d607347c758aeef6a51",
".git/logs/refs/heads/main": "f96b30fad8876b024d3f2418421b7492",
".git/logs/refs/remotes/origin/main": "e11d4b9bfefa99218eca38e16a9742f2",
".git/objects/02/02a94dda95eb9cc623841bb9e9ac8a4e65d53a": "866158668140766711c533e088ab26e1",
".git/objects/03/44df60fdb947c84169a8e2590a8301e2e9ef97": "bb28faaf8c468cdd83d269e886d41515",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0f/72d10fc8439f355350495340d3d027a93d8de8": "eb36f5d2b67e475ae3f6a4eda23a7732",
".git/objects/18/1b0bae8a3f082911e338c15ac386ed55154d3b": "8a20953010f3079abf63248916b0eaa3",
".git/objects/18/db263dbdc958f63f14c4904cb7e2124c766ecc": "f8de7758db8b931ae09f803f670ed09a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/e7f5e42f1a961bc2720ac448fd8a5d21cd4268": "9dd15cc2a0acfa50ce3113c142670240",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2f/1b89330343a62c71a731a02e33a2db489be0a2": "a76deb540897a47b26591e2a207be225",
".git/objects/2f/2f7f34885bc8907ebbce2710a840cd1143c06a": "9124c68b0dea16a2615b6fff2b332e1f",
".git/objects/31/4447e385219f26e10dc94209033e39d5b7d18d": "8494d5bd62c61fa6843e345aab2412c4",
".git/objects/37/0fb66ccf5c5475373c5e3fc670e72cf593a3dd": "fcfc267f3fbb532291469751da469db5",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3e/499d5b735b3487606f735d7beb1fa7ace2fa56": "ce02ad5de66650fac5f214347131e0bc",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/c9ba11ed23190d1f94d1339b845439fe4292c2": "0bba77a799650d275dfbcff458ea06b3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/c67e60f9db8efb7da6b5a253fca5b88fa91d5f": "af641c3ec1b558a5d22ae7e2ed26f10e",
".git/objects/4d/6d26937a58168fb4139fd9636ca0c8c623e78a": "087142b14b0dbc23711b33f4e879c828",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/9eb624fd542b16f774d66dbeb14f037394516e": "64f0c0a37a07ebcf0dbfa893818154b5",
".git/objects/52/56b4763da7b4f9ad08e173dfae02524c1973d5": "42973d1ed1686c52f6f66ca04d105c53",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/b737197f840204026d8ee781043cd0ba102b91": "aa90ec9f25a3c3c3d650abd733725a56",
".git/objects/5f/7c438b0b18db70d9fac10aa3f9ca610ea7c5ad": "e7106649a42f2fbbd4175178006d4b6e",
".git/objects/5f/ed7b67dd36f14435c2f9ddfb826c702b27513f": "d7b0635653de2137c78a25cf5d2ab5e5",
".git/objects/60/6651763ed912ce09a2837e158e9a80322fd9bf": "d4cd5186cd124011880f89cc361cf74f",
".git/objects/72/fd9086e1f896f31d238dd905ea076c3eb5ae15": "78ee049a5ed08d5dd2132fb06d36ab16",
".git/objects/74/8765d8f6e91e477c1dc38ba011ad477c0f71e3": "2b33d0ad006957e4b4cb01b43cfe261b",
".git/objects/76/2e50515ae812256576154de884cdcff1ff5c0a": "8ce6b0fae03e548b2b3680591f6575e4",
".git/objects/87/d7cf59e058d2449899bb751e406f0b6d44215b": "2af484468aba105197ba7e1c00e09db2",
".git/objects/8a/6ecd0372fee0a4fb698b89ff0531c939294805": "9e386b6cbc1b0902a23b40af337207a4",
".git/objects/91/4c287cb1450a62582f2c6b0fa6f2450ab95041": "b6bef724d2f7486d33d0d6caf0e491fa",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9a/6e69556815d2dadba48004e3fe735d2c9881e0": "c6864b526f38d62f842c9473bb413f53",
".git/objects/9f/d9615202d013feaccf26ab320cbf2b59bc6467": "386f008da663ab0a1b909ce14e09af6f",
".git/objects/a4/67d03368aac9c0492fc5bad1c4524fbad7ca81": "a56628ac7c481ddf2948dc0d59c9ba07",
".git/objects/a4/8f2440b1d28d98bb0d29e88452c2877f93e15a": "0cf29c6d0e2dd35176ed26b12fd130a9",
".git/objects/a6/53be37d5e7ed9d1b55e270965a89ceae253b0c": "66d937a885f0417e71a4beeeb36bad60",
".git/objects/aa/d3a2f9377d7dc002982cc4068f581e5587a719": "7859f8ab7d2f955db68f7165a697930e",
".git/objects/ac/2b6d372b7b86cc606369670ad0b55dcc7dfe2b": "ac6504e7301b2d54763c09f7d24f4a82",
".git/objects/af/e99d00586e34ec3d1543e03812e9ceafe370e4": "295ef5c845fe2326bce162f91491ab24",
".git/objects/b2/8f552e41affd28f273277624ea989f61c12e92": "6e3e54d8b5925e01b459524c107a9d22",
".git/objects/b3/90e86796c18a2e73e3e74bd80bcfba88be19ef": "5707172a340450e7a71d582182b80c2e",
".git/objects/b4/a0eff97b4922f043ecaf7dd355e6873aaaad0f": "21b8a1d5bc6f4d63ae53ad0c93153938",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/7f84a2ff1c3e192fc0a0e85f768e466e28838c": "dc55cc70703da7dcafdf675b681de256",
".git/objects/c5/706966e7263f32748b3a6bf02f1b05a66a5452": "98346dd45ce805d5f62123fd1dc54b45",
".git/objects/cc/747e610c5934c12670983020990c70abaf381a": "9d9eb6ed0a8b608c3d290004d08df0b4",
".git/objects/d1/f147bd91a048fc9e92af70a586e8b8bac172b9": "dc9f9a956f11ce0420f2e431884d139f",
".git/objects/d6/b7f573d90f000e7eab80cdbd4d48543e4a73f9": "95b972a0ceea3496b8d069d6b2b13d8e",
".git/objects/d7/1463574d083e209f948c315b7ed09ad2441f18": "2086f1d878c6a97fd3a2b299ce31058b",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/e4/98417696194353620bab14e1d52a8c573ecae5": "4fa1fa006704358a49d7172af39ac616",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/d91d90e3f21d886125b9e94bcd04b5c0c46cc3": "de701676f9f1b1ac8ccc2639cbbba527",
".git/objects/ef/e8e21973e478992ce9c42dfbc482458aec8ec4": "47edd02b8e21539ffd00cadce2841b3a",
".git/objects/f3/e9e6729e7f66ecb8fa2be9a43be7000a873a92": "ae94a5c1962dd9cb95b5f17acdd02506",
".git/objects/f7/7be80d8896a6caeb4db31ee23d0ef363f63813": "3ab6026b2c303d0cfcbfc15bb8735e9b",
".git/refs/heads/main": "3f5093c2a173f20fbe5ba4ac4fabb6ec",
".git/refs/remotes/origin/main": "3f5093c2a173f20fbe5ba4ac4fabb6ec",
"assets/AssetManifest.bin": "83f81346bb6e1050dc03266021d7fe69",
"assets/AssetManifest.bin.json": "3f06eb75c7ee5abaa24e34502a3d0a3c",
"assets/AssetManifest.json": "e29a74680039f7e178e163211cb9e635",
"assets/assets/error.svg": "e342dbb2dde840537ac88ca7d9f59646",
"assets/assets/favorite.svg": "7ab608dc98bcfcabc273a3034cf90c7f",
"assets/assets/GoodieMap_Logo(1).png": "669c31a962afcb7b83ab1f3d0ff4678a",
"assets/assets/GoodieMap_Logo(2).png": "e2820486c43a3ee4ac71cc1f56e7fe6d",
"assets/assets/GoodieMap_Logo.png": "4346d56503184e06fd1b65c92fb4f30c",
"assets/assets/image1.png": "147da60e4550b1b65381feb5d4017211",
"assets/assets/image2.png": "92f215b143b6384cd9f462b983b5710a",
"assets/assets/image3.png": "193668f3ceee0d32e6bf1ec0a47c4b4b",
"assets/assets/image4.png": "04815e15661616f459eeb29b02f0a940",
"assets/assets/intro.mp4": "d60543336dac54caa868d30e7142062e",
"assets/assets/profile3.png": "2392f19f498348cd734509dacafeb61a",
"assets/assets/saved.svg": "a56f49c87a1c4765f53b57f438f9dce7",
"assets/assets/shopping-cart.svg": "2488a02687e8b01c58f23d349af4b798",
"assets/assets/smartphone.svg": "b6a2f0054ca9fe50a7b9382e67e86ca8",
"assets/assets/warning.svg": "dbcab3150fb5b37646ce3dffb4ef8a47",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a0b948ec4ffefdec26eb1f12cb2f8d71",
"assets/NOTICES": "ebb2ed112925bf335c8028ae0a6d591f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/simple_barcode_scanner/assets/barcode.html": "7a1c45aca573208e15c71b378fdbe027",
"assets/packages/simple_barcode_scanner/assets/html5-qrcode.min.js": "d88d3200cb547c9e86ee972975561dcd",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "80eb81b6b0b4cdfc406ff3679228fa2b",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "e3df8452c28b4b7dab54ff62bd0e3f8e",
"icons/Icon-512.png": "2716e7fb80e0ef2e7e905500bfd16716",
"icons/Icon-maskable-192.png": "e3df8452c28b4b7dab54ff62bd0e3f8e",
"icons/Icon-maskable-512.png": "2716e7fb80e0ef2e7e905500bfd16716",
"index.html": "ea7c7e7407792c0201d66c069b50811a",
"/": "ea7c7e7407792c0201d66c069b50811a",
"main.dart.js": "b8b52e468c8c2d990c2bc68d98767823",
"manifest.json": "3ff6b19a8cd92df92a59750da76c4182",
"version.json": "1d70f1a915cbbf73f2922ecd27b0ba3a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
