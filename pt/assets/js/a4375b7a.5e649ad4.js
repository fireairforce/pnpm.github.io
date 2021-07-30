"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9951],{9848:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(7689);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),m=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=m(n),c=r,k=u["".concat(i,".").concat(c)]||u[c]||s[c]||l;return n?a.createElement(k,o(o({ref:e},d),{},{components:n})):a.createElement(k,o({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},170:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>p,contentTitle:()=>i,metadata:()=>m,toc:()=>d,default:()=>u});var a=n(2951),r=n(9877),l=(n(7689),n(9848)),o=["components"],p={id:"installation",title:"Instala\xe7\xe3o"},i=void 0,m={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Instala\xe7\xe3o",description:"Usando um script",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/pt/next/installation",editUrl:"https://crowdin.com/project/pnpm/pt",version:"current",frontMatter:{id:"installation",title:"Instala\xe7\xe3o"},sidebar:"docs",previous:{title:"Motivation",permalink:"/pt/next/motivation"},next:{title:"pnpm CLI",permalink:"/pt/next/pnpm-cli"}},d=[{value:"Usando um script",id:"usando-um-script",children:[]},{value:"Usando npm",id:"usando-npm",children:[]},{value:"Usando npx",id:"usando-npx",children:[]},{value:"Atualizando",id:"atualizando",children:[]},{value:"Compatibilidade",id:"compatibilidade",children:[]},{value:"Solu\xe7\xe3o de Problemas",id:"solu\xe7\xe3o-de-problemas",children:[]},{value:"Desinstalando o pnpm",id:"desinstalando-o-pnpm",children:[]}],s={toc:d};function u(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usando-um-script"},"Usando um script"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl -f https://get.pnpm.io/v6.7.js | node - add --global pnpm\n")),(0,l.kt)("p",null,"No Windows (PowerShell):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"(Invoke-WebRequest 'https://get.pnpm.io/v6.7.js' -UseBasicParsing).Content | node - add --global pnpm\n")),(0,l.kt)("p",null,"O script \xe9 assinado. ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pnpm/get#verifying-files"},"Veja como verificar"),"."),(0,l.kt)("h2",{id:"usando-npm"},"Usando npm"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,l.kt)("h2",{id:"usando-npx"},"Usando npx"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npx pnpm add -g pnpm\n")),(0,l.kt)("h2",{id:"atualizando"},"Atualizando"),(0,l.kt)("p",null,"Uma vez que voc\xea instalou pnpm, n\xe3o h\xe1 necessidade de usar outros gerenciadores de pacote para atualiz\xe1-lo. Voc\xea pode atualizar pnpm utilizando o pr\xf3prio pnpm, desta forma:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -g pnpm\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Voc\xea quer utilizar pnpm em servidores de Integra\xe7\xe3o Cont\xednua (CI)? Veja: ",(0,l.kt)("a",{parentName:"p",href:"/pt/next/continuous-integration"},"Integra\xe7\xe3o Cont\xednua"),"."))),(0,l.kt)("h2",{id:"compatibilidade"},"Compatibilidade"),(0,l.kt)("p",null,"Aqui est\xe1 uma lista das vers\xf5es do pnpm com suas respectivas vers\xf5es suportadas do Node.js."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 1"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 2"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 3"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 6"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,l.kt)("td",{parentName:"tr",align:null},"?"),(0,l.kt)("td",{parentName:"tr",align:null},"?"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,l.kt)("h2",{id:"solu\xe7\xe3o-de-problemas"},"Solu\xe7\xe3o de Problemas"),(0,l.kt)("p",null,"Se o pnpm falhar, e n\xe3o for resolvido por meio de uma reinstala\xe7\xe3o, voc\xea pode precisar remov\xea-lo manualmente do PATH."),(0,l.kt)("p",null,"Assumindo que voc\xea t\xeam o seguinte erro ao rodar ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,l.kt)("p",null,"Primeiro, tente encontrar a localiza\xe7\xe3o do pnpm rodando: ",(0,l.kt)("inlineCode",{parentName:"p"},"which pnpm"),". Se voc\xea usar Windows, execute este comando no Git Bash. Voc\xea ir\xe1 ver a localiza\xe7\xe3o do comando pnpm, como:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,l.kt)("p",null,"Agora que voc\xea sabe onde est\xe1 localizado o pnpm, abra este diret\xf3rio e remova qualquer arquivo relacionado ao pnpm (",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm"),", etc). Ent\xe3o, instale o pnpm novamente, e ele deve funcionar como esperado."),(0,l.kt)("h2",{id:"desinstalando-o-pnpm"},"Desinstalando o pnpm"),(0,l.kt)("p",null,"Se voc\xea precisar remover o pnpm de seu sistema, assim como quaisquer arquivos relacionados, veja ",(0,l.kt)("a",{parentName:"p",href:"/pt/next/uninstall"},"Desinstalando pnpm"),"."))}u.isMDXComponent=!0}}]);