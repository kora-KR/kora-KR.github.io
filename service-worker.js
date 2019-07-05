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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "756de965c06a4118631381253531e65f"
  },
  {
    "url": "assets/css/0.styles.9e3e717b.css",
    "revision": "381d14120e281e65b3b8cfb1f2c68f2d"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wx.afc3a93e.jpg",
    "revision": "afc3a93e5f82d8a903281a5ae521a463"
  },
  {
    "url": "assets/js/1.710d9d34.js",
    "revision": "88b29c672a75e4ee920497ec594c3902"
  },
  {
    "url": "assets/js/10.b6f57b3c.js",
    "revision": "174d932ae603cc54f1fe0ee11bd9063f"
  },
  {
    "url": "assets/js/11.a098c85b.js",
    "revision": "361a800e4f569aa3678ea966c6193eb7"
  },
  {
    "url": "assets/js/12.aeb19c06.js",
    "revision": "af2217b9c487b13d9d463dca1e8bac1a"
  },
  {
    "url": "assets/js/13.dbdefd57.js",
    "revision": "986f6d42b9b7a47199fbc8d430b937d6"
  },
  {
    "url": "assets/js/14.9905af61.js",
    "revision": "357a8946f02162b5425889650f930b60"
  },
  {
    "url": "assets/js/15.d0787e18.js",
    "revision": "b632098ca588a69e4545ad47ffd5e988"
  },
  {
    "url": "assets/js/3.041c9498.js",
    "revision": "c7bb7f368534dd669ea9a77057f6dbda"
  },
  {
    "url": "assets/js/4.b80e7908.js",
    "revision": "89423584d0a13ebb065fb35f9b7d0958"
  },
  {
    "url": "assets/js/5.743bd286.js",
    "revision": "e4b1ac6dc0e9c68dce7c00980e7d71cc"
  },
  {
    "url": "assets/js/6.29887229.js",
    "revision": "7a2b6b95124dfbe346b13e5831b38c34"
  },
  {
    "url": "assets/js/7.afacca2f.js",
    "revision": "18987f5c43a87d24b00ad6bcb922370e"
  },
  {
    "url": "assets/js/8.1b5441da.js",
    "revision": "7bb1c29fc6a1c0b1a0d21a69f978f3e0"
  },
  {
    "url": "assets/js/9.7c97b8b9.js",
    "revision": "925e725e65dc740ef8c411c68363201f"
  },
  {
    "url": "assets/js/app.06d44811.js",
    "revision": "23b56396c3ff3a37b6a5f0b9767a8f07"
  },
  {
    "url": "friends/index.html",
    "revision": "2cd0a7e51c01834013233d3086124f43"
  },
  {
    "url": "guide.html",
    "revision": "24c58112ba14b1c14b389b442a28f666"
  },
  {
    "url": "images/bg.jpg",
    "revision": "d6751b10fea88b8ef5618d061fd1f236"
  },
  {
    "url": "images/KR.png",
    "revision": "9d1bdb57519565b97f019b918b2fc429"
  },
  {
    "url": "images/RESUME.png",
    "revision": "294f01d1d504c3fe9a05ea3e7edef2a1"
  },
  {
    "url": "images/wx.jpg",
    "revision": "afc3a93e5f82d8a903281a5ae521a463"
  },
  {
    "url": "index.html",
    "revision": "156f1db35827b2fa8e71e32e8d732e8d"
  },
  {
    "url": "note/es/index.html",
    "revision": "ff5184b26ba89f33a55e5307d97346af"
  },
  {
    "url": "note/vue/index.html",
    "revision": "ac4290692b0ec2407d1aaf616e298e2e"
  },
  {
    "url": "relation/index.html",
    "revision": "906de1523c061feb54e1702d22430a92"
  },
  {
    "url": "resume/index.html",
    "revision": "b0f4515695118bbf9e2b63e2c2696f47"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
