if(!self.define){let i,l={};const n=(n,r)=>(n=new URL(n+".js",r).href,l[n]||new Promise((l=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=l,document.head.appendChild(i)}else i=n,importScripts(n),l()})).then((()=>{let i=l[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(r,e)=>{const s=i||("document"in self?document.currentScript.src:"")||location.href;if(l[s])return;let u={};const o=i=>n(i,s),g={module:{uri:s},exports:u,require:o};l[s]=Promise.all(r.map((i=>g[i]||o(i)))).then((i=>(e(...i),u)))}}define(["./workbox-5b385ed2"],(function(i){"use strict";i.setCacheNameDetails({prefix:"panacea"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"_redirects",revision:"7fc4bdcb39e99f755a2221758e4b4546"},{url:"css/153.524e7a87.css",revision:null},{url:"css/525.a1399f2a.css",revision:null},{url:"css/810.cdfedd32.css",revision:null},{url:"css/903.277d861a.css",revision:null},{url:"css/915.ef3c6417.css",revision:null},{url:"css/930.4c3714c3.css",revision:null},{url:"css/949.41761a6e.css",revision:null},{url:"css/app.a44d953d.css",revision:null},{url:"img/10.8a1c5c1a.png",revision:null},{url:"img/33.afbf21d0.png",revision:null},{url:"img/44.ccfda22f.png",revision:null},{url:"img/7.9b8d673d.png",revision:null},{url:"img/MBG.a0f10c8c.png",revision:null},{url:"img/arrow.6ffdd4d8.svg",revision:null},{url:"img/bg_tab.fe7494cf.png",revision:null},{url:"img/c4.0c51fd19.png",revision:null},{url:"img/car_img.4d24b5b4.png",revision:null},{url:"img/close_icon.1eb8b69f.svg",revision:null},{url:"img/dropdown_bg.00dcd546.png",revision:null},{url:"img/exit_bg_btn.a4cba175.png",revision:null},{url:"img/floatie.5ea20906.png",revision:null},{url:"img/gaz.d8317a87.png",revision:null},{url:"img/icon_arrow_items.7b38c7c2.svg",revision:null},{url:"img/icon_arrow_nav.5d822453.svg",revision:null},{url:"img/icon_exit.f567a66d.svg",revision:null},{url:"img/icon_moore.d9614c2b.svg",revision:null},{url:"img/icon_mouse.62b83bcd.svg",revision:null},{url:"img/icon_profile.864e60e1.svg",revision:null},{url:"img/icon_user.e5432ca8.svg",revision:null},{url:"img/icon_users.cbf1945d.svg",revision:null},{url:"img/is_bg.fa44fa18.png",revision:null},{url:"img/item_bg_blue.2467d1ad.png",revision:null},{url:"img/item_bg_purple.a390ee69.png",revision:null},{url:"img/item_bg_red.d7028b51.png",revision:null},{url:"img/item_bg_silver.1846dfd5.png",revision:null},{url:"img/klipartz.0cfdb369.svg",revision:null},{url:"img/krest.55293543.svg",revision:null},{url:"img/kub_bg.1005d294.svg",revision:null},{url:"img/kvadrat_bg.e029ef2f.svg",revision:null},{url:"img/live_block.6d70514b.png",revision:null},{url:"img/logo-2.5156c191.png",revision:null},{url:"img/logo.844dd2fa.png",revision:null},{url:"img/logo3.242dd491.png",revision:null},{url:"img/main_bg.3dbbf500.png",revision:null},{url:"img/modalBg.3a0c47b5.jpg",revision:null},{url:"img/modal_car_img.7b0a06f2.png",revision:null},{url:"img/money_big.06d97ede.png",revision:null},{url:"img/name_bg.70dec7b9.png",revision:null},{url:"img/news_bg.b0568890.png",revision:null},{url:"img/panacea_bg.20579d03.png",revision:null},{url:"img/profile_menu_bg.9a9db322.png",revision:null},{url:"img/r8.4bff4a40.png",revision:null},{url:"img/revolver.331fb63b.png",revision:null},{url:"img/server_bg_1.41f51a2d.png",revision:null},{url:"img/server_bg_2.42ed6cf2.png",revision:null},{url:"img/servers_stat_bg.5e870190.png",revision:null},{url:"img/stat_bgf.2cd7b209.png",revision:null},{url:"img/stim_icon.44ee6713.svg",revision:null},{url:"img/table_line.6bc35fbb.png",revision:null},{url:"img/welcome_bg_btn.c73fedb4.png",revision:null},{url:"index.html",revision:"36fd7eeefba72bde5d989a40e73b32a1"},{url:"js/153.fad85c77.js",revision:null},{url:"js/525.9f481d62.js",revision:null},{url:"js/651.645d0bd6.js",revision:null},{url:"js/810.7aee22a1.js",revision:null},{url:"js/903.56e4a85d.js",revision:null},{url:"js/915.c482e67d.js",revision:null},{url:"js/930.e9cbfbe5.js",revision:null},{url:"js/949.85ddf0fb.js",revision:null},{url:"js/app.0d8f3a9e.js",revision:null},{url:"js/chunk-vendors.5009f369.js",revision:null},{url:"manifest.json",revision:"c838ea0fdc382368894720d61dfe3bf7"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
