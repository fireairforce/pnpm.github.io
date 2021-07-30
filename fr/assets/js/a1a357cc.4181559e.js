"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9341],{9848:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7689);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4715:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>u});var r=n(2951),i=n(9877),l=(n(7689),n(9848)),a=["components"],o={id:"list",title:"pnpm list"},p=void 0,c={unversionedId:"cli/list",id:"version-6.x/cli/list",isDocsHomePage:!1,title:"pnpm list",description:"Aliases: ls",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.x/cli/list.md",sourceDirName:"cli",slug:"/cli/list",permalink:"/fr/cli/list",editUrl:"https://crowdin.com/project/pnpm/fr",version:"6.x",frontMatter:{id:"list",title:"pnpm list"},sidebar:"version-6.x/docs",previous:{title:"pnpm audit",permalink:"/fr/cli/audit"},next:{title:"pnpm outdated",permalink:"/fr/cli/outdated"}},d=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--json",id:"--json",children:[]},{value:"--long",id:"--long",children:[]},{value:"--parseable",id:"--parseable",children:[]},{value:"--global",id:"--global",children:[]},{value:"--depth &lt;number&gt;",id:"--depth-number",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],s={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Aliases: ",(0,l.kt)("inlineCode",{parentName:"p"},"ls")),(0,l.kt)("p",null,"This command will output all the versions of packages that are installed, as well as their dependencies, in a tree-structure."),(0,l.kt)("p",null,"Positional arguments are ",(0,l.kt)("inlineCode",{parentName:"p"},"name-pattern@version-range")," identifiers, which will limit the results to only the packages named. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},'pnpm list "babel-*" "eslint-*" semver@5'),"."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Perform command on every package in subdirectories or on every workspace package, when executed inside a workspace."),(0,l.kt)("h3",{id:"--json"},"--json"),(0,l.kt)("p",null,"Added in: 3.7.0"),(0,l.kt)("p",null,"Log output in JSON format."),(0,l.kt)("h3",{id:"--long"},"--long"),(0,l.kt)("p",null,"Show extended information."),(0,l.kt)("h3",{id:"--parseable"},"--parseable"),(0,l.kt)("p",null,"Outputs package directories in a parseable format instead of their tree view."),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"List packages in the global install directory instead of in the current project."),(0,l.kt)("h3",{id:"--depth-number"},"--depth ","<","number",">"),(0,l.kt)("p",null,"Max display depth of the dependency tree."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth 0")," will list direct dependencies only. ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth -1")," will list projects only. Useful inside a workspace when used with the ",(0,l.kt)("inlineCode",{parentName:"p"},"-r")," option."),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"Display only the dependency graph for packages in ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"Display only the dependency graph for packages in ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,l.kt)("p",null,"Don't display packages from ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/fr/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0}}]);