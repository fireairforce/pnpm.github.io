(self.webpackChunk=self.webpackChunk||[]).push([[8532],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7689);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),y=a,d=m["".concat(l,".").concat(y)]||m[y]||u[y]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8156:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,metadata:()=>l,toc:()=>s,default:()=>u});var r=n(1424),a=n(2489),o=(n(7689),n(9848)),i=["components"],p={id:"releasing-apps",title:"Releasing apps",original_id:"releasing-apps"},l={unversionedId:"releasing-apps",id:"version-4.x/releasing-apps",isDocsHomePage:!1,title:"Releasing apps",description:"There are two ways to release an app with pnpm. One way is to commit pnpm-lock.yaml into your repo.",source:"@site/versioned_docs/version-4.x/releasing-apps.md",sourceDirName:".",slug:"/releasing-apps",permalink:"/4.x/releasing-apps",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-4.x/releasing-apps.md",version:"4.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615077826,formattedLastUpdatedAt:"3/7/2021",frontMatter:{id:"releasing-apps",title:"Releasing apps",original_id:"releasing-apps"}},s=[],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are two ways to release an app with pnpm. One way is to commit ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," into your repo.\nWhich we recommend doing anyway. And then in prod you'll have just to run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install"),".\nYou'll be sure in that case that the same dependencies will be used, with which you tested your app in other environments."),(0,o.kt)("p",null,"If you'd like to copy packages to prod, you'll have to commit ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," anyway. And you'll have to\ncopy paste the global store to production. The global store location is configurable\nvia the ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," config key.\nThen you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install --offline")," in your app and pnpm will be using packages that are already in the\nglobal store without making any requests to the npm registry."))}u.isMDXComponent=!0}}]);