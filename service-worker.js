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
    "revision": "b224d3d9cf697209c13e3bafaf97c74f"
  },
  {
    "url": "assets/css/0.styles.2c8ae7de.css",
    "revision": "3d370f7949724f6e1c844721ac2f81a7"
  },
  {
    "url": "assets/img/diagram.4009e1e0.png",
    "revision": "4009e1e0520d38bc44a55937fe47c5c4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sprintTable1.9e197b41.png",
    "revision": "9e197b418d6288b70e03b0832b15a5f2"
  },
  {
    "url": "assets/img/sprintTable2.09fb9605.png",
    "revision": "09fb960507103e694901d67130e0b53b"
  },
  {
    "url": "assets/img/sprintTable3.7177c198.png",
    "revision": "7177c198bb8b8e54517081363731ca43"
  },
  {
    "url": "assets/js/1.9333925a.js",
    "revision": "d901b500a66b7c26fb00ef5da88bd7a3"
  },
  {
    "url": "assets/js/10.d7381572.js",
    "revision": "e08d34479f9e8a6460c5289a5523b1a8"
  },
  {
    "url": "assets/js/13.b861508f.js",
    "revision": "9d6a1c5de44b6ce789c0c45223a006b3"
  },
  {
    "url": "assets/js/14.18a30b26.js",
    "revision": "9cdc3a31f1691a79b77b6596b65dbb48"
  },
  {
    "url": "assets/js/15.5b339d7e.js",
    "revision": "4bce0f5bda3e5cdcd77baa934a57546a"
  },
  {
    "url": "assets/js/16.14d06dc4.js",
    "revision": "a58a3c340807a1993927e3d12c21cff8"
  },
  {
    "url": "assets/js/17.7325f2ca.js",
    "revision": "9ac1919ea02811d5e7d9641bd09c3253"
  },
  {
    "url": "assets/js/18.0471f176.js",
    "revision": "b813d926d51cd4f8bbc07d32c7fc3141"
  },
  {
    "url": "assets/js/19.aafcdc2c.js",
    "revision": "cdba7f14f3e6d19bc7a7e12fc9c8ba00"
  },
  {
    "url": "assets/js/2.fd921fc9.js",
    "revision": "884e63cf9a542911dd8f2ff454696037"
  },
  {
    "url": "assets/js/20.72403c92.js",
    "revision": "319d7af07795b19b9ac977742b396203"
  },
  {
    "url": "assets/js/21.b7b37969.js",
    "revision": "b7f8488255f222126a831a11499d89d9"
  },
  {
    "url": "assets/js/22.841917c8.js",
    "revision": "da5fe0268b661f4683582aedd1f0510b"
  },
  {
    "url": "assets/js/23.701f7482.js",
    "revision": "641f8d411e769ff2a6dbd759c6235675"
  },
  {
    "url": "assets/js/24.2438c393.js",
    "revision": "37120f69495e152f9a4e04e6deeb8a10"
  },
  {
    "url": "assets/js/25.b48850fb.js",
    "revision": "b9f0f7fdbd160f6264d23c9893ce1523"
  },
  {
    "url": "assets/js/26.75d636b7.js",
    "revision": "25097d4b15d164877a074855c62d5254"
  },
  {
    "url": "assets/js/27.e5086f08.js",
    "revision": "a40d3f3a4f090d8719b94e8f45d92be5"
  },
  {
    "url": "assets/js/28.5bbdbd98.js",
    "revision": "016124fd0c2c8d089ba11dffe729b794"
  },
  {
    "url": "assets/js/29.333f03a6.js",
    "revision": "178976665ef9bfb9f143a398d231d8bc"
  },
  {
    "url": "assets/js/3.a56094d5.js",
    "revision": "a26b60d90cd113d65ca0ab53c92dbe18"
  },
  {
    "url": "assets/js/30.e4c5e7d2.js",
    "revision": "fc2a97eb03b685ae9e7614952f6a8f29"
  },
  {
    "url": "assets/js/31.31cb8e06.js",
    "revision": "95162a0db56589d5879686ee2c64daad"
  },
  {
    "url": "assets/js/32.7ba6a20c.js",
    "revision": "f58ac3e36de4f35d00d4d7f00a5bd0d4"
  },
  {
    "url": "assets/js/33.3792a0b8.js",
    "revision": "eedc530ba66945ff80150b28671feb95"
  },
  {
    "url": "assets/js/34.c5682e8c.js",
    "revision": "8f4c638f1542361c256e26196f073a2e"
  },
  {
    "url": "assets/js/35.cd2531e3.js",
    "revision": "20ac13377e2b6281f447a9b39268efea"
  },
  {
    "url": "assets/js/36.13babad8.js",
    "revision": "69818364323d6a514fb8b923e097adfd"
  },
  {
    "url": "assets/js/37.7c4c63a9.js",
    "revision": "ef99a5c510969b5c1c7d38db0d16d539"
  },
  {
    "url": "assets/js/38.6b6cb480.js",
    "revision": "32b08e7dacf1a32a46f3e37e87382259"
  },
  {
    "url": "assets/js/39.ce40227a.js",
    "revision": "fc26a83fe688465e8de93bac6eb9760e"
  },
  {
    "url": "assets/js/4.48462374.js",
    "revision": "669d2d3255d83a5e1c44b264c87a9126"
  },
  {
    "url": "assets/js/41.eb61e0a7.js",
    "revision": "282d1414cd20386314f28528054f8599"
  },
  {
    "url": "assets/js/5.4fe712bd.js",
    "revision": "84bbf228ce30b64604b207e975d2607e"
  },
  {
    "url": "assets/js/6.1aff5c65.js",
    "revision": "67c77bdac13f15d991270b1b20b1947e"
  },
  {
    "url": "assets/js/7.04d4dd17.js",
    "revision": "89204fb9441f6a51b0295b75178e3595"
  },
  {
    "url": "assets/js/8.4b24f0b5.js",
    "revision": "0299520698d0b82b4cc736be90085770"
  },
  {
    "url": "assets/js/9.5d1b4165.js",
    "revision": "bf0f99d953b1921126acf5410786cabd"
  },
  {
    "url": "assets/js/app.56c39e3a.js",
    "revision": "2f4902f6e6afecc9df1c2836ec1e860c"
  },
  {
    "url": "assets/js/vendors~docsearch.dd9c9527.js",
    "revision": "4c9b60f3e041adde8b39175879bd2003"
  },
  {
    "url": "conclusion/index.html",
    "revision": "5597c33d6450c6e8b192f482b7ed8559"
  },
  {
    "url": "design/index.html",
    "revision": "2922c649227ba497f21de17f2cf909c2"
  },
  {
    "url": "index.html",
    "revision": "5631de75bb126d451128a3d5b2277afe"
  },
  {
    "url": "intro/index.html",
    "revision": "3c3c1c0344b776d5adc0eab323e21145"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "eed647d31e8a234f66b13c746d8f1f59"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "707b312562cd4139534cc8575509b163"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "8bd076f2607d82fadb28e39838e97b05"
  },
  {
    "url": "software/index.html",
    "revision": "2e971a2706bada32123d0f6d13641e15"
  },
  {
    "url": "test/index.html",
    "revision": "a3be441c65e9b6e145633c6858b0d302"
  },
  {
    "url": "use cases/index.html",
    "revision": "b41513a06c0407515f59b00e6a76c414"
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
