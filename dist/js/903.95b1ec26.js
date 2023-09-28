"use strict";(self["webpackChunkpanacea"]=self["webpackChunkpanacea"]||[]).push([[903],{4619:function(o,A,t){t.d(A,{Z:function(){return m}});var e=t(6252),i=t(237);const n=o=>((0,e.dD)("data-v-27741ac8"),o=o(),(0,e.Cn)(),o),a={class:"container"},s={class:"main__footer"},l=n((()=>(0,e._)("div",{class:"footer__logo"},[(0,e._)("img",{src:i,alt:"FooterLogo"})],-1))),r={class:"footer__menu"},f={class:"menu__item"},d={class:"menu__item"},c=n((()=>(0,e._)("p",{class:"footer__descript"},"Panacea - An international gaming platform offering it's players only the best quality. All rights reserved.",-1)));function K(o,A,t,i,n,K){const u=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("footer",null,[(0,e._)("div",a,[(0,e._)("div",s,[l,(0,e._)("ul",r,[(0,e._)("div",f,[(0,e._)("li",null,[(0,e.Wm)(u,{to:"/"},{default:(0,e.w5)((()=>[(0,e.Uk)("Main")])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(u,{to:"/Contacts"},{default:(0,e.w5)((()=>[(0,e.Uk)("Contact")])),_:1})])]),(0,e._)("div",d,[(0,e._)("li",null,[(0,e.Wm)(u,{to:"/Privacy"},{default:(0,e.w5)((()=>[(0,e.Uk)("Privacy policy")])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(u,{to:"/Terms"},{default:(0,e.w5)((()=>[(0,e.Uk)("Terms of use")])),_:1})])])])]),c])])}var u={name:"TheFooter"},g=t(3744);const v=(0,g.Z)(u,[["render",K],["__scopeId","data-v-27741ac8"]]);var m=v},8934:function(o,A,t){t.d(A,{Z:function(){return D}});var e=t(6252),i=t(3577),n=t(5080),a=t(5585),s=t(9909),l=t(7712),r=t(9981),f=t(6750),d=t(8388);const c=o=>((0,e.dD)("data-v-7a73455d"),o=o(),(0,e.Cn)(),o),K={class:"container"},u=c((()=>(0,e._)("img",{src:n,alt:"Logo",class:"logo"},null,-1))),g={class:"active"},v={class:"right_header"},m={key:0,action:"https://steamcommunity.com/openid/login",method:"post"},p=(0,e.uE)('<input type="hidden" name="openid.identity" value="http://specs.openid.net/auth/2.0/identifier_select" data-v-7a73455d><input type="hidden" name="openid.claimed_id" value="http://specs.openid.net/auth/2.0/identifier_select" data-v-7a73455d><input type="hidden" name="openid.ns" value="http://specs.openid.net/auth/2.0" data-v-7a73455d><input type="hidden" name="openid.mode" value="checkid_setup" data-v-7a73455d><input type="hidden" name="openid.realm" value="http://localhost:8080" data-v-7a73455d><input type="hidden" name="openid.return_to" value="http://localhost:8080" data-v-7a73455d>',6),_=c((()=>(0,e._)("img",{src:a,alt:"IconProfile"},null,-1))),C={class:"user__info"},F={class:"user__name"},w=c((()=>(0,e._)("img",{src:s,alt:"arrow"},null,-1))),U={class:"user__balance"},h=c((()=>(0,e._)("div",{class:"user__img"},[(0,e._)("img",{src:l,alt:"UserImg"})],-1))),Q=c((()=>(0,e._)("span",null,null,-1))),R=[Q],B=c((()=>(0,e._)("div",{class:"item__name"},"Profile",-1))),b=c((()=>(0,e._)("div",{class:"item__icon"},[(0,e._)("img",{src:r,alt:"ItemIcon"})],-1))),k=c((()=>(0,e._)("div",{class:"item__name"},"Balance",-1))),V=c((()=>(0,e._)("div",{class:"item__icon"},[(0,e._)("img",{src:f,alt:"ItemIcon"})],-1))),j=c((()=>(0,e._)("button",{class:"modal__button"},[(0,e.Uk)(" Logout "),(0,e._)("img",{src:d,alt:"LogOut"})],-1)));function E(o,A,t,n,a,s){const l=(0,e.up)("router-link"),r=(0,e.up)("Button");return(0,e.wg)(),(0,e.iD)("header",null,[(0,e._)("div",K,[(0,e.Wm)(l,{to:"/"},{default:(0,e.w5)((()=>[u])),_:1}),(0,e._)("nav",null,[(0,e._)("ul",{class:(0,i.C_)(["menu",{"menu-active":!0===o.IsMenuOpen}])},[(0,e._)("li",g,[(0,e.Wm)(l,{to:"/"},{default:(0,e.w5)((()=>[(0,e.Uk)("About")])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(l,{to:"/store"},{default:(0,e.w5)((()=>[(0,e.Uk)("Store")])),_:1})]),(0,e._)("li",null,[o.USER.IsUserLogIn?((0,e.wg)(),(0,e.j4)(l,{key:1,to:"/Roulette"},{default:(0,e.w5)((()=>[(0,e.Uk)("Roulette")])),_:1})):((0,e.wg)(),(0,e.j4)(l,{key:0,to:"/fakepage"},{default:(0,e.w5)((()=>[(0,e.Uk)("Log in with Steam")])),_:1}))])],2)]),(0,e._)("div",v,[o.USER.IsUserLogIn?((0,e.wg)(),(0,e.iD)("button",{key:1,class:"user",onClick:A[0]||(A[0]=A=>o.IsLoginModalOpen=!o.IsLoginModalOpen)},[(0,e._)("div",C,[(0,e._)("div",F,[(0,e.Uk)((0,i.zw)(o.USER.name)+" ",1),w]),(0,e._)("div",U,"$"+(0,i.zw)(o.USER.balance),1)]),h])):((0,e.wg)(),(0,e.iD)("form",m,[p,(0,e.Wm)(r,{type:"submit",class:"log_button"},{default:(0,e.w5)((()=>[(0,e.Uk)("Account "),_])),_:1})])),(0,e._)("button",{class:"md__button",onClick:A[1]||(A[1]=o=>s.OpenModal())},R),(0,e._)("div",{class:(0,i.C_)(["modal__login",{modal__active:!0===o.IsLoginModalOpen}])},[(0,e.Wm)(l,{to:"/Profile",class:"modal__item"},{default:(0,e.w5)((()=>[B,b])),_:1}),(0,e.Wm)(l,{to:"/Profile",class:"modal__item"},{default:(0,e.w5)((()=>[k,V])),_:1}),j],2)])])])}var W=t(3907),P={name:"TheHeader",computed:{...(0,W.Se)(["USER"])},data:()=>({IsLoginModalOpen:!1,IsMenuOpen:!1}),methods:{OpenModal(){this.IsMenuOpen=!this.IsMenuOpen},...(0,W.nv)(["SET_NEW_USER"])},mounted(){if(""===window.location.search);else{const o=decodeURIComponent(window.location.search.replace("?","").split("&")[3].replace("openid.claimed_id=","")).replace("https://steamcommunity.com/openid/id/","");this.SET_NEW_USER(o)}}},I=t(3744);const y=(0,I.Z)(P,[["render",E],["__scopeId","data-v-7a73455d"]]);var D=y},903:function(o,A,t){t.r(A),t.d(A,{default:function(){return c}});var e=t(6252);const i=o=>((0,e.dD)("data-v-78261133"),o=o(),(0,e.Cn)(),o),n=i((()=>(0,e._)("main",null,[(0,e._)("div",{class:"container"},[(0,e._)("div",{class:"contacts__info"},[(0,e._)("h1",{class:"info__title"},"Contacts"),(0,e._)("p",{class:"info__descript"},[(0,e.Uk)("Use Discord to contact the Administration "),(0,e._)("a",null,"Panacea Dayz Discord")])])])],-1)));function a(o,A,t,i,a,s){const l=(0,e.up)("TheHeader"),r=(0,e.up)("TheFooter");return(0,e.wg)(),(0,e.iD)("div",null,[(0,e.Wm)(l),n,(0,e.Wm)(r)])}var s=t(8934),l=t(4619),r={name:"TheContacts",components:{TheHeader:s.Z,TheFooter:l.Z}},f=t(3744);const d=(0,f.Z)(r,[["render",a],["__scopeId","data-v-78261133"]]);var c=d},9909:function(o,A,t){o.exports=t.p+"img/arrow.6ffdd4d8.svg"},8388:function(o,A,t){o.exports=t.p+"img/icon_exit.f567a66d.svg"},6750:function(o,A,t){o.exports=t.p+"img/icon_moore.d9614c2b.svg"},5585:function(o,A,t){o.exports=t.p+"img/icon_profile.864e60e1.svg"},9981:function(o,A,t){o.exports=t.p+"img/icon_user.e5432ca8.svg"},5080:function(o,A,t){o.exports=t.p+"img/logo.844dd2fa.png"},237:function(o,A,t){o.exports=t.p+"img/logo3.242dd491.png"},7712:function(o){o.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=903.95b1ec26.js.map