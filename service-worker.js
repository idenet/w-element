/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "218121bc07cb967c52f5c4f6c099c632"
  },
  {
    "url": "assets/css/0.styles.9942e768.css",
    "revision": "309ee59660be9c02dea73844ce664ef2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.90a16b51.js",
    "revision": "d3973ada80fab9e9ff5bb45128c5a8e7"
  },
  {
    "url": "assets/js/11.c787dd5d.js",
    "revision": "5c700e5be606e866749498383690bafd"
  },
  {
    "url": "assets/js/12.a8ec0aa3.js",
    "revision": "60a67d625903afd805660db6c0e48c80"
  },
  {
    "url": "assets/js/13.057dad61.js",
    "revision": "f9780c02a30c0b3d82e18393da1a0fca"
  },
  {
    "url": "assets/js/14.fa0d2577.js",
    "revision": "b6acabe8ad82c96e729342cd79c26382"
  },
  {
    "url": "assets/js/15.64356094.js",
    "revision": "5f7866d5a77a63c892c4b31bf120e0f7"
  },
  {
    "url": "assets/js/16.ff4aafed.js",
    "revision": "0a6cd8dca07044b5fe275be45af44052"
  },
  {
    "url": "assets/js/17.a2268884.js",
    "revision": "2e6900fcbeedbd3a129e0a00ab8ddc03"
  },
  {
    "url": "assets/js/18.483939ec.js",
    "revision": "06f1c4d1e0a6ef9765ce9d72e3c1111b"
  },
  {
    "url": "assets/js/19.2decbe3e.js",
    "revision": "833997adb04799b1c42dd3302fb73b3a"
  },
  {
    "url": "assets/js/2.9eb7cbcf.js",
    "revision": "25a7ea05ca1963f3018b85779c375c84"
  },
  {
    "url": "assets/js/20.6f157fb8.js",
    "revision": "0fcb726965c18774b3312f795afe032b"
  },
  {
    "url": "assets/js/21.99631de4.js",
    "revision": "0af645237cc408a60c4f4773069ebe68"
  },
  {
    "url": "assets/js/22.7d2ce5c7.js",
    "revision": "390c14a8819d492b488fa669db59e53a"
  },
  {
    "url": "assets/js/23.3e6d4de6.js",
    "revision": "eb35d88d1bbe78f8000dfb5230075462"
  },
  {
    "url": "assets/js/24.1e4c8d35.js",
    "revision": "70538f4686788c38ef985d257acd44b5"
  },
  {
    "url": "assets/js/25.2cd3c677.js",
    "revision": "25a9852565cfc207fd3e34249364ae93"
  },
  {
    "url": "assets/js/26.70dc240e.js",
    "revision": "5eedae2d4b4507463d7ca0e7588f3f21"
  },
  {
    "url": "assets/js/27.8e692981.js",
    "revision": "4a2acc050c3c1ce9d0659d19cf7655a3"
  },
  {
    "url": "assets/js/28.ef351867.js",
    "revision": "d029e4acfe4a8c2abf2c994f87a2c55d"
  },
  {
    "url": "assets/js/29.cd384abe.js",
    "revision": "71eac59d917f4e8c09f6bd6302343150"
  },
  {
    "url": "assets/js/3.555b744e.js",
    "revision": "7da8d9cfb1ac371b81afb35a1e59039b"
  },
  {
    "url": "assets/js/30.4658e209.js",
    "revision": "1582b3d822538bf5616d5fafb7751698"
  },
  {
    "url": "assets/js/31.235c35e3.js",
    "revision": "d21e15c43bfd147b3b332203717b8d4e"
  },
  {
    "url": "assets/js/32.5fc9528b.js",
    "revision": "007855dd8eece567faa51f5e3a05d366"
  },
  {
    "url": "assets/js/33.47fc4827.js",
    "revision": "27da030b54b21e81ff73195b3d0b0e1d"
  },
  {
    "url": "assets/js/34.a8d2e181.js",
    "revision": "7979eed482084073a49c8797acbd719a"
  },
  {
    "url": "assets/js/35.bb9745da.js",
    "revision": "e224557edd86ccf3df428b0551330f2c"
  },
  {
    "url": "assets/js/36.2866ab45.js",
    "revision": "e43350e5f30c993dd29e9bfd6e6670a6"
  },
  {
    "url": "assets/js/37.19e092ee.js",
    "revision": "1927724c24dd8d4d85e55cbd38ec252e"
  },
  {
    "url": "assets/js/38.63f3df37.js",
    "revision": "f0d25954639c2c6ad91d98cbae8fafc0"
  },
  {
    "url": "assets/js/39.38df4987.js",
    "revision": "f453400fbf375e6dd46e7cd7c3cd430c"
  },
  {
    "url": "assets/js/4.f88376c0.js",
    "revision": "ca648373d8945f34d2b18d9e3891d392"
  },
  {
    "url": "assets/js/40.e362a3c3.js",
    "revision": "b3dbda02b70e9aa36a1577a44157942f"
  },
  {
    "url": "assets/js/41.9a048845.js",
    "revision": "6f99b8ecd1e5042cef5f3dcbf6cbfd1b"
  },
  {
    "url": "assets/js/42.ab8f9194.js",
    "revision": "23e6615b78b33592a9124de6b2ca5851"
  },
  {
    "url": "assets/js/43.ccacc0bc.js",
    "revision": "a8fa9cb5575fbbc3970757ad0704736e"
  },
  {
    "url": "assets/js/5.c9254da1.js",
    "revision": "112b5d1bf1cd4bcdbd3f6fe586978862"
  },
  {
    "url": "assets/js/6.d8ec2d3c.js",
    "revision": "8cc7f5d8e2c369b17f6262fee86870e3"
  },
  {
    "url": "assets/js/7.abc94096.js",
    "revision": "71c679c81721ffe8741d71555539e5f1"
  },
  {
    "url": "assets/js/8.b919c504.js",
    "revision": "bb53c8e88e0a6ca2c6333c25d37face4"
  },
  {
    "url": "assets/js/9.49513577.js",
    "revision": "f034d8860fd7639482fabb245882eb1d"
  },
  {
    "url": "assets/js/app.730a15c6.js",
    "revision": "d8ed638e3930df3807fadd4ae00eaa7b"
  },
  {
    "url": "index.html",
    "revision": "aecd2950cea77538a12e1274a44dec9e"
  },
  {
    "url": "pages/common/commonMixins.html",
    "revision": "d30448350fed2bf0f26304b36b52c6f9"
  },
  {
    "url": "pages/common/index.html",
    "revision": "2a24a2443d6a9a99bd8425942dd14c3f"
  },
  {
    "url": "pages/guide/button.html",
    "revision": "f901a7ccc3f14e52b377a3fcdd3004ad"
  },
  {
    "url": "pages/guide/checkbox.html",
    "revision": "1ecffbf6c3814aa919b7c4c7356080fb"
  },
  {
    "url": "pages/guide/date.html",
    "revision": "a0e47a948b8bb599ac69443e5a0db5eb"
  },
  {
    "url": "pages/guide/form.html",
    "revision": "be11f7ae95a7465519395af745436e67"
  },
  {
    "url": "pages/guide/index.html",
    "revision": "84045c51e93ce262ac4f68b250d31f63"
  },
  {
    "url": "pages/guide/input.html",
    "revision": "4eb44eb914f0b858b2fae1426b69e964"
  },
  {
    "url": "pages/guide/radio.html",
    "revision": "a6ef341752dfbff2519d36e187bc0842"
  },
  {
    "url": "pages/guide/select.html",
    "revision": "de086a8f129e2bc829b3387822e53fbc"
  },
  {
    "url": "pages/guide/switch.html",
    "revision": "4fbb2c98d7d23b647f9c54feffa3e6e9"
  },
  {
    "url": "pages/guide/table.html",
    "revision": "8eeec4381ec2de0c88a49071fd3aeeb2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
