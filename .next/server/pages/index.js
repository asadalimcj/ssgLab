"use strict";(()=>{var e={};e.id=332,e.ids=[220,332],e.modules={671:(e,t)=>{Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},805:(e,t,r)=>{r.r(t),r.d(t,{config:()=>j,default:()=>M,getServerSideProps:()=>h,getStaticPaths:()=>A,getStaticProps:()=>m,reportWebVitals:()=>x,routeModule:()=>I,unstable_getServerProps:()=>O,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>G,unstable_getStaticPaths:()=>E,unstable_getStaticProps:()=>y});var n={};r.r(n),r.d(n,{default:()=>_,getStaticProps:()=>v});var a=r(865),i=r(455),o=r(671),s=r(781),u=r.n(s),l=r(645),d=r.n(l),p=r(732);let c=require("fs");var P=r.n(c),f=r(873),g=r.n(f);let S=require("gray-matter");var b=r.n(S);function _({post:e}){return(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:e.data.title}),(0,p.jsx)("div",{children:e.content})]})}async function v(){return{props:{post:function(){let e=g().join(process.cwd(),"posts","hello-world.md"),t=P().readFileSync(e,"utf8"),{data:r,content:n}=b()(t);return{data:r,content:n}}()}}}let M=(0,o.M)(n,"default"),m=(0,o.M)(n,"getStaticProps"),A=(0,o.M)(n,"getStaticPaths"),h=(0,o.M)(n,"getServerSideProps"),j=(0,o.M)(n,"config"),x=(0,o.M)(n,"reportWebVitals"),y=(0,o.M)(n,"unstable_getStaticProps"),E=(0,o.M)(n,"unstable_getStaticPaths"),G=(0,o.M)(n,"unstable_getStaticParams"),O=(0,o.M)(n,"unstable_getServerProps"),q=(0,o.M)(n,"unstable_getServerSideProps"),I=new a.PagesRouteModule({definition:{kind:i.A.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:d(),Document:u()},userland:n})},645:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let n=r(929),a=r(732),i=n._(r(15)),o=r(811);async function s(e){let{Component:t,ctx:r}=e;return{pageProps:await (0,o.loadGetInitialProps)(t,r)}}class u extends i.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,a.jsx)(e,{...t})}}u.origGetInitialProps=s,u.getInitialProps=s,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},455:(e,t)=>{var r;Object.defineProperty(t,"A",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE"}(r||(r={}))},361:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},15:e=>{e.exports=require("react")},732:e=>{e.exports=require("react/jsx-runtime")},873:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[781],()=>r(805));module.exports=n})();