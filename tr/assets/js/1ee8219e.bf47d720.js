(self.webpackChunk=self.webpackChunk||[]).push([[8493],{9848:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7689);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7915:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>o,metadata:()=>p,toc:()=>c,default:()=>s});var n=t(1424),i=t(2489),a=(t(7689),t(9848)),l=["components"],o={id:"rebuild",title:"pnpm rebuild",original_id:"rebuild"},p={unversionedId:"cli/rebuild",id:"version-4.x/cli/rebuild",isDocsHomePage:!1,title:"pnpm rebuild",description:"Ayr\u0131ca: rb",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-4.x/cli/rebuild.md",sourceDirName:"cli",slug:"/cli/rebuild",permalink:"/tr/4.x/cli/rebuild",editUrl:"https://crowdin.com/project/pnpm/tr",version:"4.x",frontMatter:{id:"rebuild",title:"pnpm rebuild",original_id:"rebuild"},sidebar:"version-4.x/docs",previous:{title:"pnpm import",permalink:"/tr/4.x/cli/import"},next:{title:"pnpm prune",permalink:"/tr/4.x/cli/prune"}},c=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Parametreler",id:"parametreler",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;paket_se\xe7ici&gt;",id:"--filter-paket_se\xe7ici",children:[]}]}],u={toc:c};function s(e){var r=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ayr\u0131ca: ",(0,a.kt)("inlineCode",{parentName:"p"},"rb")),(0,a.kt)("p",null,"Paketi/k\xfct\xfcphaneyi yeniden derler/olu\u015fturur."),(0,a.kt)("h2",{id:"synopsis"},"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm rebuild [-r [--workspace-concurrency=<number>] [--no-sort]]\n     [<pkg>...]\n")),(0,a.kt)("h2",{id:"parametreler"},"Parametreler"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"This command runs the ",(0,a.kt)("strong",{parentName:"p"},"pnpm build")," command in every package of the monorepo."),(0,a.kt)("h3",{id:"--filter-paket_se\xe7ici"},"--filter ","<","paket_se\xe7ici>"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tr/4.x/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")))}s.isMDXComponent=!0}}]);