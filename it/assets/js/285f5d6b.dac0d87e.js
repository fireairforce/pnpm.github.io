"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7268],{9848:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7689);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=m(n),u=i,f=d["".concat(l,".").concat(u)]||d[u]||s[u]||a;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var m=2;m<a;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7850:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>m,toc:()=>c,default:()=>d});var r=n(2951),i=n(9877),a=(n(7689),n(9848)),p=["components"],o={id:"pnpm-cli",title:"pnpm CLI"},l=void 0,m={unversionedId:"pnpm-cli",id:"pnpm-cli",isDocsHomePage:!1,title:"pnpm CLI",description:"Differences vs npm",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/it/next/pnpm-cli",editUrl:"https://crowdin.com/project/pnpm/it",version:"current",frontMatter:{id:"pnpm-cli",title:"pnpm CLI"},sidebar:"docs",previous:{title:"Installazione",permalink:"/it/next/installation"},next:{title:"pnpx CLI",permalink:"/it/next/pnpx-cli"}},c=[{value:"Differences vs npm",id:"differences-vs-npm",children:[]},{value:"Options",id:"options",children:[{value:"-C &lt;path&gt;, --dir &lt;path&gt;",id:"-c-path---dir-path",children:[]},{value:"-w, --workspace-root",id:"-w---workspace-root",children:[]}]},{value:"Commands",id:"commands",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"differences-vs-npm"},"Differences vs npm"),(0,a.kt)("p",null,"Unlike npm, pnpm validates all options. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install --foo")," will fail as ",(0,a.kt)("inlineCode",{parentName:"p"},"--foo")," is not a valid option for ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,a.kt)("p",null,"However, some dependencies may use the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm_config_")," environment variable, which is populated from the CLI options. In this case, you have the following options:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"explicitly set the env variable: ",(0,a.kt)("inlineCode",{parentName:"li"},"npm_config_foo=true pnpm install")),(0,a.kt)("li",{parentName:"ol"},"force the unknown option with ",(0,a.kt)("inlineCode",{parentName:"li"},"--config."),": ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm install --config.foo"))),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"-c-path---dir-path"},"-C ","<","path",">",", --dir ","<","path",">"),(0,a.kt)("p",null,"Run as if pnpm was started in ",(0,a.kt)("inlineCode",{parentName:"p"},"<path>")," instead of the current working directory."),(0,a.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,a.kt)("p",null,"Added in: v5.6.0"),(0,a.kt)("p",null,"Run as if pnpm was started in the root of the workspace instead of the current working directory."),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("p",null,"For more information, see the documentation for individual CLI commands. Here is a list of handy npm equivalents to get you started:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"npm command"),(0,a.kt)("th",{parentName:"tr",align:null},"pnpm equivalent"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"npm install")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/it/next/cli/install"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"npm i <pkg>")),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("inlineCode",{parentName:"td"},"pnpm add <pkg>"),"]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"npm run <cmd>")),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("inlineCode",{parentName:"td"},"pnpm <cmd>"),"]")))),(0,a.kt)("p",null,"When an unknown command is used, pnpm will search for a script with the given name, so ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run lint")," is the same as ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm lint"),". If there is no script with the specified name, then pnpm will execute the command as a shell script, so you can do things like ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm eslint")," (see ",(0,a.kt)("a",{parentName:"p",href:"/it/next/cli/exec"},"pnpm exec"),")."))}d.isMDXComponent=!0}}]);