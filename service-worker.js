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
    "revision": "841096b7ea8f326f9810e1366983693d"
  },
  {
    "url": "assets/css/0.styles.f6ec81e7.css",
    "revision": "e6d58316f3d6676c8a765f0a10df07e9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5821dc30.js",
    "revision": "faf666ef1a9fae88778bf555f5a66981"
  },
  {
    "url": "assets/js/11.c258b631.js",
    "revision": "b844e299772127876867a50401763a43"
  },
  {
    "url": "assets/js/12.4de9dafa.js",
    "revision": "46aadbe8ae021383859a9a7033ecfce1"
  },
  {
    "url": "assets/js/13.3b1121f7.js",
    "revision": "1007819d520ca565b0bb9cda38bafddb"
  },
  {
    "url": "assets/js/14.75db5dac.js",
    "revision": "8b8d2dd548452fdc52f54e58b3641754"
  },
  {
    "url": "assets/js/15.ff17094b.js",
    "revision": "e3c9ccc7e1ffacb968c5018045cc32c6"
  },
  {
    "url": "assets/js/16.4004996c.js",
    "revision": "2c52b6d856dee2310b380e69f18a101d"
  },
  {
    "url": "assets/js/17.f57170f8.js",
    "revision": "3c2eac55799575285a066cb93704f8c3"
  },
  {
    "url": "assets/js/18.00f879e5.js",
    "revision": "078cef762d0db9857b828379fc06977e"
  },
  {
    "url": "assets/js/19.5fa470df.js",
    "revision": "be73da78ea14582ebf78f8a5a504ea17"
  },
  {
    "url": "assets/js/2.e68923ca.js",
    "revision": "43d6138199ed624c6b9a2d5cee64ed14"
  },
  {
    "url": "assets/js/20.fe084f44.js",
    "revision": "27ee29b3f33f59ae860bd08e09440c16"
  },
  {
    "url": "assets/js/21.120fe815.js",
    "revision": "1842108f16b452b6bf1ec8d967131240"
  },
  {
    "url": "assets/js/22.51bd555d.js",
    "revision": "4bc0ae568303f52f8c6c52d1974d46c7"
  },
  {
    "url": "assets/js/23.8c941c1b.js",
    "revision": "75cd4d22be6cdfe5281d61d21731acd1"
  },
  {
    "url": "assets/js/24.2e331133.js",
    "revision": "1984d48f1389a7d80409ee0e0f391d46"
  },
  {
    "url": "assets/js/25.56567273.js",
    "revision": "7d03b1777972c053846db4a2ccac0253"
  },
  {
    "url": "assets/js/26.aaeaa800.js",
    "revision": "5b4aeda740b45528f9a8f364cacc839c"
  },
  {
    "url": "assets/js/27.7e504a7d.js",
    "revision": "1652b0a6fab741eafb369901a9d3ae8f"
  },
  {
    "url": "assets/js/28.eea8e2ed.js",
    "revision": "99a6699b9d9b661246120d5a57c9f09b"
  },
  {
    "url": "assets/js/29.36b04f45.js",
    "revision": "c6f0fdddeff7598516c96a2f186dc74a"
  },
  {
    "url": "assets/js/3.2cb97aaa.js",
    "revision": "dbb5197d8015c4a473b6122a1bfc6034"
  },
  {
    "url": "assets/js/30.3ddeaf40.js",
    "revision": "c4ca916dd2c1bb01f7d699b1f0586925"
  },
  {
    "url": "assets/js/4.fc6a9875.js",
    "revision": "c0d3e986be41692b06f3113781c67786"
  },
  {
    "url": "assets/js/5.9c3e0aec.js",
    "revision": "092a1d033442971bf51ba5ad8c8aca71"
  },
  {
    "url": "assets/js/6.3f9ca1c9.js",
    "revision": "e8692f15996a7bc55e6b7028a1e49317"
  },
  {
    "url": "assets/js/7.b049e73f.js",
    "revision": "63177861291a68112604138b73b68758"
  },
  {
    "url": "assets/js/8.1bde1dd0.js",
    "revision": "dde725dc9018cdbd995386cf9af33fd3"
  },
  {
    "url": "assets/js/9.8dda2e49.js",
    "revision": "175a004ec47712ce76501b5d95db07b2"
  },
  {
    "url": "assets/js/app.d91efbf0.js",
    "revision": "726ff66924bbc4abc6a01da9968f3b76"
  },
  {
    "url": "guide/battery.html",
    "revision": "e99fcc67a77ac33d26c117f9c86984eb"
  },
  {
    "url": "guide/clipboard.html",
    "revision": "cfcf24d3e59e738f88b3d5a87bcb8842"
  },
  {
    "url": "guide/device-light.html",
    "revision": "bd46ddb4d8548333ad7320e1b9decbe6"
  },
  {
    "url": "guide/device-motion.html",
    "revision": "c7a18a2876004b96c4951ce3823dfead"
  },
  {
    "url": "guide/device-orientation.html",
    "revision": "c3a71cebf1f6e649b04149d5e4da0545"
  },
  {
    "url": "guide/document-visibility.html",
    "revision": "d60743b39816bc5c7174dd9fb2bbb830"
  },
  {
    "url": "guide/event-listener.html",
    "revision": "f56ab87cd096b6b3d32c5a158f91ac0a"
  },
  {
    "url": "guide/fetch.html",
    "revision": "372a481e8117d82c1a0a274f4aac7ded"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "baf096fdefdf8be05a67208f92a4f1d9"
  },
  {
    "url": "guide/geolocation.html",
    "revision": "d74addab2b1b1e61bd7c922ac1173997"
  },
  {
    "url": "guide/index.html",
    "revision": "5d54a16cdca2acf2596f3d6877b6be20"
  },
  {
    "url": "guide/intersection-observer.html",
    "revision": "c6c9e9f1aacc95e24e894151cc3ffe95"
  },
  {
    "url": "guide/local-storage.html",
    "revision": "640396f9fd7a80ead09e621e406605d4"
  },
  {
    "url": "guide/media-query.html",
    "revision": "cef2859a5db0a30d1ab90b6b36417ae4"
  },
  {
    "url": "guide/mouse-position.html",
    "revision": "4e8cc957fcd32ca2c1741140dfb93af8"
  },
  {
    "url": "guide/network.html",
    "revision": "c7b820223eb1cfd0c2f8a470bce1fc6d"
  },
  {
    "url": "guide/preferred-color-scheme.html",
    "revision": "61894004e13dbb3b88d6dcd4feb32be2"
  },
  {
    "url": "guide/preferred-languages.html",
    "revision": "08542e82b735c8c65f283ce7ae4b2639"
  },
  {
    "url": "guide/script.html",
    "revision": "441f1c0735deb7fd0b3da46290bbc3ec"
  },
  {
    "url": "guide/scroll-position.html",
    "revision": "875fe1bd7981573b96b40db69cb6376f"
  },
  {
    "url": "guide/websocket.html",
    "revision": "ffdf70837fe526798b793fc9cd94baa4"
  },
  {
    "url": "guide/window-size.html",
    "revision": "70d5e8fe1ac100c13d6df2827f91fb0a"
  },
  {
    "url": "guide/worker.html",
    "revision": "9a389263d240d5a0fec41ce684c7c462"
  },
  {
    "url": "index.html",
    "revision": "e689a6e3c17aab436172a3716803a8cd"
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
