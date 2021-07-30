"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3157],{9848:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7689);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2021:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>c,toc:()=>u,default:()=>m});var r=t(2951),o=t(9877),i=(t(7689),t(9848)),a=["components"],l={id:"only-allow-pnpm",title:"Consenti solo pnpm"},p=void 0,c={unversionedId:"only-allow-pnpm",id:"only-allow-pnpm",isDocsHomePage:!1,title:"Consenti solo pnpm",description:"Quando usi pnpm in un progetto, non vuoi che gli altri eseguano accidentalmente npm install o yarn. Per evitare che gli sviluppatori usino altri gestori di pacchetti, puoi aggiungere il seguente script preinstall nel tuo package.json:",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/only-allow-pnpm.md",sourceDirName:".",slug:"/only-allow-pnpm",permalink:"/it/next/only-allow-pnpm",editUrl:"https://crowdin.com/project/pnpm/it",version:"current",frontMatter:{id:"only-allow-pnpm",title:"Consenti solo pnpm"},sidebar:"docs",previous:{title:"Continuous Integration",permalink:"/it/next/continuous-integration"},next:{title:"Lavorare con Git",permalink:"/it/next/git"}},u=[],s={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Quando usi pnpm in un progetto, non vuoi che gli altri eseguano accidentalmente ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install")," o ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),". Per evitare che gli sviluppatori usino altri gestori di pacchetti, puoi aggiungere il seguente script ",(0,i.kt)("inlineCode",{parentName:"p"},"preinstall")," nel tuo ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "scripts": {\n        "preinstall": "npx only-allow pnpm"\n    }\n}\n')),(0,i.kt)("p",null,"Ora, ogni volta che qualcuno esegue ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install")," o ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),", otterr\xe0 un messaggio di errore e l'installazione non proceder\xe0."),(0,i.kt)("p",null,"Se usi npm v7, usa ",(0,i.kt)("inlineCode",{parentName:"p"},"npx -y"),"."))}m.isMDXComponent=!0}}]);