if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,s,o)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const d={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return i;case"module":return d;default:return e(r)}})).then(e=>{const r=o(...e);return i.default||(i.default=r),i})}))}}define("./service-worker.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"../index.html",revision:"2a5f09d84ce9dcac656de6c62c6a3043"},{url:"../mobile.html",revision:"481ddac4843ab230fd63395bb88d63b3"},{url:"desktop.min.css",revision:"4e9fc9676b4ebc0f45da48d51af8fa2e"},{url:"desktop.min.js",revision:"7640632d4185cf618cd4512759736fd0"},{url:"desktop.min.js.LICENSE.txt",revision:"84d558f2ca39c4db60adebad9f38ac0b"},{url:"mobile.min.css",revision:"1ced728b5072f2410b79530802d79f1a"},{url:"mobile.min.js",revision:"b3f1a730de7fbdd32fa1ec98361ad0f5"},{url:"mobile.min.js.LICENSE.txt",revision:"84d558f2ca39c4db60adebad9f38ac0b"}],{})}));
