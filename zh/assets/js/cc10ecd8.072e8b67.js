(self.webpackChunk=self.webpackChunk||[]).push([[3054],{9848:(e,n,r)=>{"use strict";r.d(n,{Zo:()=>l,kt:()=>m});var t=r(7689);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return r?t.createElement(d,a(a({ref:n},l),{},{components:r})):t.createElement(d,a({ref:n},l))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3401:(e,n,r)=>{"use strict";r.r(n),r.d(n,{frontMatter:()=>p,metadata:()=>s,toc:()=>c,default:()=>u});var t=r(1424),o=r(2489),i=(r(7689),r(9848)),a=["components"],p={id:"configuring",title:"\u914d\u7f6e",original_id:"configuring"},s={unversionedId:"configuring",id:"version-4.x/configuring",isDocsHomePage:!1,title:"\u914d\u7f6e",description:"pnpm uses npm's configs. Hence, you should set configs the same way you would for npm. \u4f8b\u5982\uff0c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-4.x/configuring.md",sourceDirName:".",slug:"/configuring",permalink:"/zh/4.x/configuring",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"4.x",frontMatter:{id:"configuring",title:"\u914d\u7f6e",original_id:"configuring"},sidebar:"version-4.x/docs",previous:{title:"pnpx CLI",permalink:"/zh/4.x/pnpx-cli"},next:{title:"\u8fc7\u6ee4",permalink:"/zh/4.x/filtering"}},c=[],l={toc:c};function u(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm uses ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/config"},"npm's configs"),". Hence, you should set configs the same way you would for npm. \u4f8b\u5982\uff0c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm config set store-dir /path/to/.pnpm-store\n")),(0,i.kt)("p",null,"If no store is configured, then pnpm will automatically create a store on the same drive. If configuring pnpm to work across multiple hard drives or filesystems, please read ",(0,i.kt)("a",{parentName:"p",href:"/zh/4.x/faq#does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"the FAQ"),"."),(0,i.kt)("p",null,"Furthermore, pnpm uses the same configs that npm uses for doing installations. If you have a private registry and npm is configured to work with it, pnpm should be able to authorize requests as well, with no additional configuration."),(0,i.kt)("p",null,"In addition to those options, pnpm also allows you to use all parameters that are flags (for example ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency"),") as option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"workspace-concurrency = 1\nfilter = @my-scope/*\n")))}u.isMDXComponent=!0}}]);