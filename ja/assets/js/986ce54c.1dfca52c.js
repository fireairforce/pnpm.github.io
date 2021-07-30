"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[965],{9848:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7689);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1099:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>s,metadata:()=>c,toc:()=>l,default:()=>d});var n=r(2951),a=r(9877),o=(r(7689),r(9848)),i=["components"],p={id:"store",title:"pnpm store"},s=void 0,c={unversionedId:"cli/store",id:"version-5.x/cli/store",isDocsHomePage:!1,title:"pnpm store",description:"Managing the package store.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-5.x/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/ja/5.x/cli/store",editUrl:"https://crowdin.com/project/pnpm/ja",version:"5.x",frontMatter:{id:"store",title:"pnpm store"},sidebar:"version-5.x/docs",previous:{title:"pnpm server",permalink:"/ja/5.x/cli/server"},next:{title:"package.json",permalink:"/ja/5.x/package_json"}},l=[{value:"\u30b3\u30de\u30f3\u30c9",id:"\u30b3\u30de\u30f3\u30c9",children:[{value:"status",id:"status",children:[]},{value:"add",id:"add",children:[]},{value:"prune",id:"prune",children:[]}]}],u={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Managing the package store."),(0,o.kt)("h2",{id:"\u30b3\u30de\u30f3\u30c9"},"\u30b3\u30de\u30f3\u30c9"),(0,o.kt)("h3",{id:"status"},"status"),(0,o.kt)("p",null,"Checks for modified packages in the store."),(0,o.kt)("p",null,"Returns exit code 0 if the content of the package is the same as it was at the time of unpacking."),(0,o.kt)("h3",{id:"add"},"add"),(0,o.kt)("p",null,"Added in: v2.12.0"),(0,o.kt)("p",null,"Functionally equivalent to ",(0,o.kt)("a",{parentName:"p",href:"/ja/5.x/cli/add"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm add")),", except this adds new packages to the store directly without modifying any projects or files outside of the store."),(0,o.kt)("h3",{id:"prune"},"prune"),(0,o.kt)("p",null,"Removes orphan packages from the store."),(0,o.kt)("p",null,"Pruning the store will save disk space, however may slow down future installations involving pruned packages. Ultimately, it is a safe operation, however not recommended if you have orphaned packages from a package you intend to reinstall."),(0,o.kt)("p",null,"Please read ",(0,o.kt)("a",{parentName:"p",href:"/ja/5.x/faq#what-does-pnpm-store-prune-do-is-it-harmful"},"the FAQ")," for more information on unreferenced packages and best practices."),(0,o.kt)("p",null,"Please note that this is prohibited when a ",(0,o.kt)("a",{parentName:"p",href:"/ja/5.x/cli/server"},"store server")," is running."))}d.isMDXComponent=!0}}]);