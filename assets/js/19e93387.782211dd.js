"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9394],{9848:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7689);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,k=s["".concat(d,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9165:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>d,metadata:()=>p,toc:()=>c,default:()=>s});var r=n(2951),o=n(9877),a=(n(7689),n(9848)),i=["components"],l={id:"outdated",title:"pnpm outdated"},d=void 0,p={unversionedId:"cli/outdated",id:"cli/outdated",isDocsHomePage:!1,title:"pnpm outdated",description:"Checks for outdated packages. The check can be limited to a subset of the",source:"@site/docs/cli/outdated.md",sourceDirName:"cli",slug:"/cli/outdated",permalink:"/next/cli/outdated",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/cli/outdated.md",version:"current",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615633789,formattedLastUpdatedAt:"3/13/2021",frontMatter:{id:"outdated",title:"pnpm outdated"},sidebar:"docs",previous:{title:"pnpm list",permalink:"/next/cli/list"},next:{title:"pnpm why",permalink:"/next/cli/why"}},c=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]},{value:"--global",id:"--global",children:[]},{value:"--long",id:"--long",children:[]},{value:"--no-table",id:"--no-table",children:[]},{value:"--compatible",id:"--compatible",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--no-optional",id:"--no-optional",children:[]}]}],u={toc:c};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Checks for outdated packages. The check can be limited to a subset of the\ninstalled packages by providing arguments (patterns are supported)."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm outdated\npnpm outdated "*gulp-*" @babel/core\n')),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"Check for outdated dependencies in every package found in subdirectories, or in\nevery workspace package when executed inside a workspace."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/next/filtering"},"Read more about filtering.")),(0,a.kt)("h3",{id:"--global"},"--global"),(0,a.kt)("p",null,"List outdated global packages."),(0,a.kt)("h3",{id:"--long"},"--long"),(0,a.kt)("p",null,"Added in: v4.0.0"),(0,a.kt)("p",null,"Print details."),(0,a.kt)("h3",{id:"--no-table"},"--no-table"),(0,a.kt)("p",null,"Added in: v4.0.0"),(0,a.kt)("p",null,"Prints the outdated dependencies in a list format instead of the default table.\nGood for small consoles."),(0,a.kt)("h3",{id:"--compatible"},"--compatible"),(0,a.kt)("p",null,"Added in: v4.7.0"),(0,a.kt)("p",null,"Prints only versions that satisfy specifications in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,a.kt)("p",null,"Added in: v4.7.0"),(0,a.kt)("p",null,"Checks only ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,a.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,a.kt)("p",null,"Added in: v4.7.0"),(0,a.kt)("p",null,"Checks only ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,a.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,a.kt)("p",null,"Added in: v4.7.0"),(0,a.kt)("p",null,"Doesn't check ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}s.isMDXComponent=!0}}]);