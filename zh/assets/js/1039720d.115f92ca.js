"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2306],{9848:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7689);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(n),d=o,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5005:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>l,toc:()=>u,default:()=>s});var r=n(2951),o=n(9877),a=(n(7689),n(9848)),c=["components"],i={title:"pnpm\u7684node_modules\u914d\u7f6e\u9009\u9879",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://pbs.twimg.com/profile_images/1143606083262586880/EW2GCFKK_400x400.jpg"},p=void 0,l={permalink:"/zh/blog/2020/10/17/node-modules-configuration-options-with-pnpm",editUrl:"https://crowdin.com/project/pnpm/zh-CN",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md",title:"pnpm\u7684node_modules\u914d\u7f6e\u9009\u9879",description:"\u6709\u591a\u79cd\u65b9\u5f0f\u521b\u5efanodemodules\u76ee\u5f55\u3002 \u4f46\u4f60\u4e00\u5b9a\u60f3\u8981\u4ee5\u6700\u4e25\u683c\u7684\u65b9\u5f0f\u521b\u5efa\uff0c\u5f53\u7136\u5982\u679c\u4f60\u7684\u5f53\u524d\u9879\u76ee\u65e0\u6cd5\u4f7f\u7528\u4e25\u683c\u7684nodemodules\u7ed3\u6784\uff0c\u4f60\u53ef\u4ee5\u914d\u7f6e\u4e3a\u4e0d\u4e25\u683c\u7684\u3002",date:"2020-10-17T00:00:00.000Z",formattedDate:"2020\u5e7410\u670817\u65e5",tags:[],readingTime:.39,truncated:!0,nextItem:{title:"\u6241\u5e73\u7684 node_modules \u4e0d\u662f\u552f\u4e00\u7684\u65b9\u6cd5",permalink:"/zh/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},u=[],m={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6709\u591a\u79cd\u65b9\u5f0f\u521b\u5efanode_modules\u76ee\u5f55\u3002 \u4f46\u4f60\u4e00\u5b9a\u60f3\u8981\u4ee5\u6700\u4e25\u683c\u7684\u65b9\u5f0f\u521b\u5efa\uff0c\u5f53\u7136\u5982\u679c\u4f60\u7684\u5f53\u524d\u9879\u76ee\u65e0\u6cd5\u4f7f\u7528\u4e25\u683c\u7684node_modules\u7ed3\u6784\uff0c\u4f60\u53ef\u4ee5\u914d\u7f6e\u4e3a\u4e0d\u4e25\u683c\u7684\u3002"))}s.isMDXComponent=!0}}]);