if(!self.define){let i,l={};const n=(n,r)=>(n=new URL(n+".js",r).href,l[n]||new Promise((l=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=l,document.head.appendChild(i)}else i=n,importScripts(n),l()})).then((()=>{let i=l[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(r,e)=>{const s=i||("document"in self?document.currentScript.src:"")||location.href;if(l[s])return;let u={};const o=i=>n(i,s),g={module:{uri:s},exports:u,require:o};l[s]=Promise.all(r.map((i=>g[i]||o(i)))).then((i=>(e(...i),u)))}}define(["./workbox-5b385ed2"],(function(i){"use strict";i.setCacheNameDetails({prefix:"panacea"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"_redirects",revision:"7fc4bdcb39e99f755a2221758e4b4546"},{url:"css/525.9a7a2498.css",revision:null},{url:"css/694.48da75c4.css",revision:null},{url:"css/718.71ffff2b.css",revision:null},{url:"css/842.50036d94.css",revision:null},{url:"css/903.4c09f0f0.css",revision:null},{url:"css/930.24f67cf5.css",revision:null},{url:"css/991.723ad58a.css",revision:null},{url:"css/app.c437858d.css",revision:null},{url:"fonts/Gilroy-Bold.4a9ebf9f.ttf",revision:null},{url:"fonts/Gilroy-Regular.1d2eb293.ttf",revision:null},{url:"fonts/Gilroy-Semibold.04e2f3d6.ttf",revision:null},{url:"img/10.8a1c5c1a.png",revision:null},{url:"img/33.afbf21d0.png",revision:null},{url:"img/44.ccfda22f.png",revision:null},{url:"img/7.9b8d673d.png",revision:null},{url:"img/Filterbg.617d50b4.png",revision:null},{url:"img/MBG.a0f10c8c.png",revision:null},{url:"img/arrow.6ffdd4d8.svg",revision:null},{url:"img/bg_tab.fe7494cf.png",revision:null},{url:"img/c4.0c51fd19.png",revision:null},{url:"img/car.4d24b5b4.png",revision:null},{url:"img/car_img.4d24b5b4.png",revision:null},{url:"img/close_icon.1eb8b69f.svg",revision:null},{url:"img/dropdown_bg.00dcd546.png",revision:null},{url:"img/err.a4a3bcc3.svg",revision:null},{url:"img/exit_bg_btn.a4cba175.png",revision:null},{url:"img/floatie.5ea20906.png",revision:null},{url:"img/gaz.d8317a87.png",revision:null},{url:"img/icon_arrow_items.7b38c7c2.svg",revision:null},{url:"img/icon_arrow_nav.5d822453.svg",revision:null},{url:"img/icon_exit.f567a66d.svg",revision:null},{url:"img/icon_moore.d9614c2b.svg",revision:null},{url:"img/icon_mouse.62b83bcd.svg",revision:null},{url:"img/icon_profile.864e60e1.svg",revision:null},{url:"img/icon_user.e5432ca8.svg",revision:null},{url:"img/icon_users.cbf1945d.svg",revision:null},{url:"img/is_bg.fa44fa18.png",revision:null},{url:"img/item_bg_blue.2467d1ad.png",revision:null},{url:"img/item_bg_purple.a390ee69.png",revision:null},{url:"img/item_bg_red.d7028b51.png",revision:null},{url:"img/item_bg_silver.1846dfd5.png",revision:null},{url:"img/klipartz.0cfdb369.svg",revision:null},{url:"img/krest.55293543.svg",revision:null},{url:"img/kub_bg.1005d294.svg",revision:null},{url:"img/kvadrat_bg.e029ef2f.svg",revision:null},{url:"img/live_block.6d70514b.png",revision:null},{url:"img/logo-2.5156c191.png",revision:null},{url:"img/logo.844dd2fa.png",revision:null},{url:"img/logo3.242dd491.png",revision:null},{url:"img/main_bg.3dbbf500.png",revision:null},{url:"img/modalBg.3a0c47b5.jpg",revision:null},{url:"img/modal_car_img.7b0a06f2.png",revision:null},{url:"img/money_big.06d97ede.png",revision:null},{url:"img/name_bg.70dec7b9.png",revision:null},{url:"img/news_bg.b0568890.png",revision:null},{url:"img/panacea_bg.20579d03.png",revision:null},{url:"img/profile_menu_bg.9a9db322.png",revision:null},{url:"img/r8.4bff4a40.png",revision:null},{url:"img/revolver.331fb63b.png",revision:null},{url:"img/server_bg_1.41f51a2d.png",revision:null},{url:"img/server_bg_2.42ed6cf2.png",revision:null},{url:"img/servers_stat_bg.5e870190.png",revision:null},{url:"img/stat_bgf.2cd7b209.png",revision:null},{url:"img/stim_icon.44ee6713.svg",revision:null},{url:"img/suc.d109172f.svg",revision:null},{url:"img/table_line.6bc35fbb.png",revision:null},{url:"img/welcome_bg_btn.c73fedb4.png",revision:null},{url:"index.html",revision:"a80eed03c2b25e295ed9aba3b5b22499"},{url:"js/525.32bf099a.js",revision:null},{url:"js/694.50d4a80c.js",revision:null},{url:"js/718.1deddcd0.js",revision:null},{url:"js/842.e514e22b.js",revision:null},{url:"js/888.33f792bc.js",revision:null},{url:"js/903.c496f8e1.js",revision:null},{url:"js/930.7a743b91.js",revision:null},{url:"js/991.85998e5b.js",revision:null},{url:"js/app.82c82f01.js",revision:null},{url:"js/chunk-vendors.74634175.js",revision:null},{url:"manifest.json",revision:"c838ea0fdc382368894720d61dfe3bf7"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
