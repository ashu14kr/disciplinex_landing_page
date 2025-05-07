'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5b3bdfb5477e455e4ba54df0799f4f6c",
"version.json": "245fefb4a0cc0ef0eee8d25320227a84",
"index.html": "5a1f45e74ad9c9a538853b62fbb81857",
"/": "5a1f45e74ad9c9a538853b62fbb81857",
"CNAME": "114b432ee68c390c8067aaf47e153b83",
"main.dart.js": "a8abc5e0e1285bf3eaef148298e20287",
"404.html": "99af9de3255672f147d4c5b46643ae44",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cc46981f73a1117282b46aabf50fba8d",
".git/config": "156abf976679fdb8a55c1256bfa78d18",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "7a2beaf557655dfe4d49f90a155f8001",
".git/objects/57/a89d212d5bc1b9b18dd4d85239f4f59f596f79": "ed29f83fd2ab80998ff9c02a4c11f987",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "1cc6403c603e76bcc26b0586008b247e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "ecdf16b6e236ddf82afbc5360f5ce6bb",
".git/objects/69/dd45863fb6907bedb40c9e6fcb91b353b96c88": "1c9ce586e33d180a03583d54dd84a3fb",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "ae6313e3307bc7af1c2f844c6e0fc2c5",
".git/objects/67/c2ba5f8bf72ef40419e19302ce326dd0e5a56b": "24a11e7aa71db7c12eb7fff64605f994",
".git/objects/0e/6576bd4a5833d81c30e1ce2565cf684354a1e2": "ca13e6656b1a2731a13f8c6286114aef",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "c507d69554096e8cf8f581a9e3e2421e",
".git/objects/9d/cf864be4ea896d578d356fa66c388124db4ebd": "efb88857246fb322f6b9a027d2c3523d",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "819a1bee2d98b54140582e489dcbb8ba",
".git/objects/ad/21852d98c25bf7543d3c894b0e3a6ea5f2dc9c": "626e759c26baec82208b0e3f8f5ada3b",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "1a4ee0c85a695a5f8ce1f75dac7efc0c",
".git/objects/a2/bbeccc719cef5e19d4c852d7383e58679110e6": "2eb9cace0fe392df758f929ae0e88294",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "5bea32f46d8e9e33e1e2bbb5c1523ffa",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "70bc1d07824e0d0a16b4211b42792fef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/ae/8d72e45d8eded5769efc13e6fe253e32a67263": "f6dc3bdc8a92fa1a05752cd2e800ad1f",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "28153710279c4ac512d78eab4ff360c9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "fb2ee964a7fc17b8cba79171cb799fa3",
".git/objects/ca/44ee0bec1651fb61dfc6e21d87cf09a4c72182": "6637dbdb1458fc90c0dc7b878c41164d",
".git/objects/c1/521983a2d6734d61b5fdfb6aeb533fe372354f": "96de1d8d6d3f5e678c90b5a766bba31b",
".git/objects/4b/cac61a88a950926ee5d6318dc1df65aadc375c": "9cc267fa96305024a432b8d60df70737",
".git/objects/42/bbcb1e862bafa31dc6202e012e5fde9512e33b": "05b89b92e71e232ddcd28c2f285fee75",
".git/objects/1f/194485e80edc93e53de16061a55bc55cfeaccd": "3be9dbddec76c28d8a80f0e9683acab3",
".git/objects/28/7b91747caf728b53b0f913ee3cf6ca995a4385": "5a11dc0f98e15ae0a3b6ac5e822ac786",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "0e7fbd1f8845cbeb2cdbf944a84ebaee",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/19/90f2f91d531951dac82ee4413ec6b36d0fc0ee": "efeedaf39ecc1524f5ebd25f8ac0c767",
".git/objects/19/de69fb2a38a74ec17895841bc33a1b6e72f39f": "b155dc3a6a7d2b1b1d81a705fd4d2fd7",
".git/objects/4c/866a863ed90e8d6d7b490c31b28ac989ac83ff": "d7f9388f913f66613fa8e349017904c3",
".git/objects/21/69cb3af5f7d20854b75d47055a8fb5474ce414": "6aaa3a36a6b2c18deb8b2169316c6832",
".git/objects/86/d607387df9fa7936fc1bd689b36b6c07b6c9fe": "7ea1542f6a4aceff7b8e8edbae804708",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/88/c707c2ec9de013c231431232c2c87d84b4a3d3": "1702654bd0a8925f1a3e5c30c9bb8838",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "9524d053d0586a5f9416552b0602a196",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "bff9d14adbb36657694ef0fc6d5e6f7f",
".git/objects/98/af112267baaf050eb842791fc1d8a32ded691f": "e4fc94a44334cc21da20f8c30ebc0f92",
".git/objects/37/3b16f9a8ab255419c14c407f290841b20abe8e": "190d080a3167359d92f47926d22a0489",
".git/objects/01/5c4eae24d7c9210e5beea93ff812f78a7346e8": "dd14b3c397316e561330f92a0f15a710",
".git/objects/52/6fd1f97e79fb80124b105101643058f29c3ffc": "2358e576fc81895293ca71ba3673d11e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/a0/0bb77c72ed2219d8995074d28827db0180247b": "efba2201e03694cfaf1cb289d62aaf53",
".git/objects/a7/a0b916f9e974060667f33b3505d5723229ade6": "3c7ed3ae0fe1fa2ba70c9df873dedd1e",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "70211b0a8348423a1f37454c4b604839",
".git/objects/af/e8895f3018a468b4c0352f2dd192da3f57808b": "bc93f692ee4ed8876f0550fcbe27ef9d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "936bdc921e2d2af84e1b88a53c8fc956",
".git/objects/de/a73fbc03a7debae3e5b51c90ed7b9473e6c20f": "4c6d662538856323856847b17a6b5b25",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/a1/4c99d23c505667335002d6e57a462a20e99ca8": "3ddaff411ea912ee847532b554b0dcef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "06319d1126433915a2b82321cb327d7f",
".git/objects/f9/a04e2edd2d0da454de136392ac52865d411bbd": "9cac0faf7ca6316ef70d4b69691b087e",
".git/objects/f0/10af4b3acb289ca698c658981eacc110c890bf": "2d474c9bef2ee009c054ee96f2c0c40e",
".git/objects/f7/8ee545e8cfaf03508c5e5a2c688f708c0344b2": "d17c138060eb16351079fab0eda31325",
".git/objects/f6/d26948641123a5278fffbba8afd8d108065983": "70fa96cb8a4d4a4b05a2d3e395519d30",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/f1/a0a3b2c8d5484b9ea0480f8a3dd0c5c30011e3": "39b0d97f0d41d0e0339ca3e40f40e0ab",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/23/3a35fd02e0d60b037e25d0d1f3be0c00376550": "0a4d4cc28875acca8e9880a2d1352389",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "bdc2f4ba1c16b2f697d776261713037a",
".git/objects/12/322830ecaeafddf8ddc5efdc2da3fcfb55b408": "6463c47aab1070749d76950ec09e14ba",
".git/objects/76/317cb2e961105441e47b4f2f2b00a6c6a80706": "ee9a295e6c3f9f823c92cf4651e58a60",
".git/objects/76/b225765c10bd1c13c4c9d3be3fcbd014366f5c": "84378614ca4596af192e5816e558887f",
".git/objects/82/2915436c913e9f398744e58224e0bb4aceb6f5": "6c9a7e78e87bad3e9c1a934362c19e89",
".git/objects/49/b105baa8407d5c3ad2cf096b8ea2c392c3fe80": "0ec7b1e26685d73246f6f42eb6968e08",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "3ac7af462afd2c09154fc9d4fe3ca9ec",
".git/objects/40/533b5dcd66f94d03649df3edba726003c6b10a": "8bcb026e1bf3a475ad3e244d6baf3407",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aeb7ba9f89124cce308c5b8e9efa64d0",
".git/logs/refs/heads/main": "aeb7ba9f89124cce308c5b8e9efa64d0",
".git/logs/refs/remotes/origin/main": "346d65e4629b26955ce8ed54d9df4de2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "198188a162814f1c9c6051da5efa40a5",
".git/refs/remotes/origin/main": "198188a162814f1c9c6051da5efa40a5",
".git/index": "66513f41dfc786e7bc0c553161359cca",
".git/COMMIT_EDITMSG": "bb96694dd714938133c2f632da3a2d12",
"assets/AssetManifest.json": "670798c2653c20f989b9975aa62c927b",
"assets/NOTICES": "081e0826a59ee91484cfbaa5813296df",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "2ebb2c79a12814d7d61b8230fb298275",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "de9ce3181fdda9a1a1745dda35933794",
"assets/fonts/MaterialIcons-Regular.otf": "e8f9052ab054419c8e4422a83e2c26b8",
"assets/assets/images/erasebg-transformed-2-2.png": "0e1bb365c7fbc39b5626603c64bdf984",
"assets/assets/images/erasebg-transformed-4-2.png": "58860e2e8184a6dc85d1c5b8b1d3b7d6",
"assets/assets/images/mail.png": "7fabf5078033d12a010c1c836ed1afb6",
"assets/assets/images/mockup.png": "173d14c8bc53acb198b7ee49be781e2c",
"assets/assets/images/5340267_e_email_letter_mail_icon.svg": "bceba75cc1047f8fa81a0b8c9c846334",
"assets/assets/images/erasebg-transformed-3-2.png": "52cf248a3a9700ae7c93421868adaa64",
"assets/assets/images/115708_news_newspaper_subscribe_icon.svg": "f92a430582bccece5c4527f5dd75b622",
"assets/assets/images/8666770_linkedin_social_icon.svg": "dc45a3138a6e251fbc7961d256301052",
"assets/assets/images/logo.png": "43221c2448b43f23947208311732c38b",
"assets/assets/images/cloud.png": "b9221382cc7f77c4a06aca27ce8aa6c2",
"assets/assets/images/mock.png": "12880551e6dfc5dfb24c364c86aee698",
"assets/assets/images/twitter.png": "9865c6fe80e43a836af1b8ac8d583b93",
"assets/assets/images/insta.png": "a89c9d1bcaf8e8139380ff6ac54663c4",
"assets/assets/images/linkedin.png": "c2d6881048682bc3ccc8ab679e5a688e",
"assets/assets/images/11053970_x_logo_twitter_new_brand_icon.svg": "46372d0298e29b3206725feb823ffcca",
"assets/assets/images/erasebg-transformed-5.png": "bc5347186e3d65edf9bc2a97356d8a8e",
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
