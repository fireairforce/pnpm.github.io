"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5736],{9848:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7689);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(k,a(a({ref:t},u),{},{components:r})):n.createElement(k,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2529:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>u,default:()=>m});var n=r(2951),o=r(9877),i=(r(7689),r(9848)),a=["components"],l={id:"server",title:"pnpm server"},p=void 0,s={unversionedId:"cli/server",id:"version-5.x/cli/server",isDocsHomePage:!1,title:"pnpm server",description:"Aggiunti in: v1.30.0",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/cli/server.md",sourceDirName:"cli",slug:"/cli/server",permalink:"/it/5.x/cli/server",editUrl:"https://crowdin.com/project/pnpm/it",version:"5.x",frontMatter:{id:"server",title:"pnpm server"},sidebar:"version-5.x/docs",previous:{title:"pnpm recursive",permalink:"/it/5.x/cli/recursive"},next:{title:"pnpm store",permalink:"/it/5.x/cli/store"}},u=[{value:"Commands",id:"commands",children:[{value:"pnpm server start",id:"pnpm-server-start",children:[]},{value:"pnpm server stop",id:"pnpm-server-stop",children:[]},{value:"pnpm server status",id:"pnpm-server-status",children:[]}]},{value:"Options",id:"options",children:[{value:"--background",id:"--background",children:[]},{value:"--network-concurrency",id:"--network-concurrency",children:[]},{value:"--protocol",id:"--protocol",children:[]},{value:"--port",id:"--port",children:[]},{value:"--store-dir",id:"--store-dir",children:[]},{value:"--no-lock",id:"--no-lock",children:[]},{value:"--ignore-stop-requests",id:"--ignore-stop-requests",children:[]},{value:"--ignore-upload-requests",id:"--ignore-upload-requests",children:[]}]}],c={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Aggiunti in: v1.30.0"),(0,i.kt)("p",null,"Gestisce un server store."),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("h3",{id:"pnpm-server-start"},"pnpm server start"),(0,i.kt)("p",null,"Avvia un server che esegue interazioni con lo store. Altri comandi invieranno al server qualsiasi attivit\xe0 relativa allo store."),(0,i.kt)("h3",{id:"pnpm-server-stop"},"pnpm server stop"),(0,i.kt)("p",null,"Ferma il server store."),(0,i.kt)("h3",{id:"pnpm-server-status"},"pnpm server status"),(0,i.kt)("p",null,"Mostra informazioni sul server in esecuzione."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--background"},"--background"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Esegue il server in background, simile alla creazione di daemon su sistemi UNIX."),(0,i.kt)("h3",{id:"--network-concurrency"},"--network-concurrency"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"null")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Number"))),(0,i.kt)("p",null,"Il numero massimo di richieste di rete da gestire contemporaneamente."),(0,i.kt)("h3",{id:"--protocol"},"--protocol"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"auto")),(0,i.kt)("li",{parentName:"ul"},"Tipo: ",(0,i.kt)("strong",{parentName:"li"},"auto"),", ",(0,i.kt)("strong",{parentName:"li"},"tcp"),", ",(0,i.kt)("strong",{parentName:"li"},"pic"))),(0,i.kt)("p",null,"Il protocollo di comunicazione usato dal server. Quando impostato su ",(0,i.kt)("inlineCode",{parentName:"p"},"auto"),", IPC \xe8 usato in tutti i sistemi operativi ad eccezione di Windows, che usa TCP."),(0,i.kt)("h3",{id:"--port"},"--port"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"5813")),(0,i.kt)("li",{parentName:"ul"},"Tipo: ",(0,i.kt)("strong",{parentName:"li"},"numero porta"))),(0,i.kt)("p",null,"Il numero di porta da utilizzare quando il protocollo TCP \xe8 utilizzato per la comunicazione. Se viene specificata una porta e il protocollo \xe8 impostato su ",(0,i.kt)("inlineCode",{parentName:"p"},"auto"),", indipendentemente dal tipo di sistema operativo, il protocollo \xe8 automaticamente impostato a TCP."),(0,i.kt)("h3",{id:"--store-dir"},"--store-dir"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"<","home",">","/.pnpm-store")),(0,i.kt)("li",{parentName:"ul"},"Tipo:",(0,i.kt)("strong",{parentName:"li"},"Percorso"))),(0,i.kt)("p",null,"Aggiunto in: v1 come ",(0,i.kt)("inlineCode",{parentName:"p"},"store")),(0,i.kt)("p",null,"La directory da utilizzare per il content addressable store."),(0,i.kt)("h3",{id:"--no-lock"},"--","[no-]","lock"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Imposta se rendere lo store dei pacchetti immutabile a processi esterni quando il server \xe8 in esecuzione."),(0,i.kt)("h3",{id:"--ignore-stop-requests"},"--ignore-stop-requests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Impedisce l'arresto del server con ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm server stop"),"."),(0,i.kt)("h3",{id:"--ignore-upload-requests"},"--ignore-upload-requests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Impedisce la creazione di una nuova cache indesiderata durante l'installazione."))}m.isMDXComponent=!0}}]);