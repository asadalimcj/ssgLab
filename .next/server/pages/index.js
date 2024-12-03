"use strict";(()=>{var e={};e.id=332,e.ids=[220,332],e.modules={671:(e,t)=>{Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},674:(e,t,r)=>{r.r(t),r.d(t,{config:()=>y,default:()=>A,getServerSideProps:()=>v,getStaticPaths:()=>_,getStaticProps:()=>M,reportWebVitals:()=>E,routeModule:()=>R,unstable_getServerProps:()=>O,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>G,unstable_getStaticPaths:()=>I,unstable_getStaticProps:()=>w});var a={};r.r(a),r.d(a,{default:()=>x,getStaticProps:()=>j});var i=r(865),n=r(455),s=r(671),o=r(781),l=r.n(o),u=r(645),d=r.n(u),c=r(732);let p=require("fs");var f=r.n(p),P=r(873),g=r.n(P);let m=require("gray-matter");var S=r.n(m);let h=require("next/head");var b=r.n(h);function x(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(b(),{children:[(0,c.jsx)("title",{children:"My Static Site"}),(0,c.jsx)("meta",{name:"description",content:"This is a sample static site."}),(0,c.jsx)("meta",{property:"og:title",content:"My Static Site"}),(0,c.jsx)("meta",{property:"og:description",content:"This is a sample static site using    Next.js."})]}),(0,c.jsx)("h1",{children:"Welcome to My Static Site"}),(0,c.jsx)("img",{src:"https://www.bing.com/images/search?view=detailV2&ccid=FfV2KSeU&id=1656AE84F48A11E8909A7591415EBB02C614FBF0&thid=OIP.FfV2KSeUEkIZjTlQymjt4wHaE8&mediaurl=https%3a%2f%2fcdn.wallpapersafari.com%2f95%2f5%2f37fpTD.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.15f5762927941242198d3950ca68ede3%3frik%3d8PsUxgK7XkGRdQ%26pid%3dImgRaw%26r%3d0&exph=2880&expw=4320&q=sky&simid=607986895541850589&FORM=IRPRST&ck=CB0DB43C59B1A280B9A53CCAE368D243&selectedIndex=1&itb=0",alt:"Example Image",loading:"lazy"})]})}async function j(){return{props:{post:function(){let e=g().join(process.cwd(),"posts","hello-world.md"),t=f().readFileSync(e,"utf8"),{data:r,content:a}=S()(t);return{data:r,content:a}}()}}}let A=(0,s.M)(a,"default"),M=(0,s.M)(a,"getStaticProps"),_=(0,s.M)(a,"getStaticPaths"),v=(0,s.M)(a,"getServerSideProps"),y=(0,s.M)(a,"config"),E=(0,s.M)(a,"reportWebVitals"),w=(0,s.M)(a,"unstable_getStaticProps"),I=(0,s.M)(a,"unstable_getStaticPaths"),G=(0,s.M)(a,"unstable_getStaticParams"),O=(0,s.M)(a,"unstable_getServerProps"),q=(0,s.M)(a,"unstable_getServerSideProps"),R=new i.PagesRouteModule({definition:{kind:n.A.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:d(),Document:l()},userland:a})},645:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let a=r(929),i=r(732),n=a._(r(15)),s=r(811);async function o(e){let{Component:t,ctx:r}=e;return{pageProps:await (0,s.loadGetInitialProps)(t,r)}}class l extends n.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,i.jsx)(e,{...t})}}l.origGetInitialProps=o,l.getInitialProps=o,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},455:(e,t)=>{var r;Object.defineProperty(t,"A",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE"}(r||(r={}))},361:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},15:e=>{e.exports=require("react")},732:e=>{e.exports=require("react/jsx-runtime")},873:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[781],()=>r(674));module.exports=a})();