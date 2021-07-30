"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8623],{9848:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7689);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2400:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>c,toc:()=>m,default:()=>u});var r=n(2951),o=n(9877),a=(n(7689),n(9848)),i=["components"],l={id:"completion",title:"Completamento tramite tab per la linea di comando"},p=void 0,c={unversionedId:"completion",id:"completion",isDocsHomePage:!1,title:"Completamento tramite tab per la linea di comando",description:"Aggiunto da: v4.9.0",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/completion.md",sourceDirName:".",slug:"/completion",permalink:"/it/next/completion",editUrl:"https://crowdin.com/project/pnpm/it",version:"current",frontMatter:{id:"completion",title:"Completamento tramite tab per la linea di comando"},sidebar:"docs",previous:{title:"Aliases",permalink:"/it/next/aliases"},next:{title:"Using Changesets with pnpm",permalink:"/it/next/using-changesets"}},m=[],s={toc:m};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Aggiunto da: v4.9.0"),(0,a.kt)("p",null,"Unlike other popular package managers, which usually require plugins, pnpm supports command line tab-completion for Bash, Zsh, Fish, and similar shells."),(0,a.kt)("p",null,"To setup autocompletion, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion\n")),(0,a.kt)("p",null,"The CLI will ask for which shell to generate the autocompletion script. Alternatively, the target shell may be specified in the command line (since v5.15.0):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion zsh\n")),(0,a.kt)("p",null,"Per vedere esempi di completamento, leggi ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-v4-9-comes-with-command-completion-a411715260b4"},"questo articolo"),"."))}u.isMDXComponent=!0}}]);