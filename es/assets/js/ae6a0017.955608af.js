(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{240:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),l=(n(0),n(318)),i={id:"installation",title:"Instalaci\xf3n"},p={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Instalaci\xf3n",description:"Usando el script aut\xf3nomo",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/installation.md",slug:"/installation",permalink:"/es/next/installation",editUrl:"https://crowdin.com/project/pnpm/es",version:"current",sidebar:"docs",previous:{title:"Motivation",permalink:"/es/next/motivation"},next:{title:"pnpm CLI",permalink:"/es/next/pnpm-cli"}},o=[{value:"Usando el script aut\xf3nomo",id:"usando-el-script-aut\xf3nomo",children:[]},{value:"Usando pnpm",id:"usando-pnpm",children:[]},{value:"Via commando npx",id:"via-commando-npx",children:[]},{value:"Actualizando",id:"actualizando",children:[]},{value:"Compatibility",id:"compatibility",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],c={toc:o};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"usando-el-script-aut\xf3nomo"},"Usando el script aut\xf3nomo"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"curl -f https://get.pnpm.io/v6.js | node - add --global pnpm\n")),Object(l.b)("p",null,"En Windows (PowerShell):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-powershell"},"(Invoke-WebRequest 'https://get.pnpm.io/v6.js' -UseBasicParsing).Content | node - add --global pnpm\n")),Object(l.b)("p",null,"The standalone script is signed. ",Object(l.b)("a",{parentName:"p",href:"https://github.com/pnpm/get#verifying-files"},"Here's how to verify it"),"."),Object(l.b)("h2",{id:"usando-pnpm"},"Usando pnpm"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),Object(l.b)("h2",{id:"via-commando-npx"},"Via commando npx"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"npx pnpm add -g pnpm\n")),Object(l.b)("h2",{id:"actualizando"},"Actualizando"),Object(l.b)("p",null,"Once you have installed pnpm, there is no need to use other package managers to update it. You can upgrade pnpm using itself, like so:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add -g pnpm\n")),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Do you wanna use pnpm on CI servers? See: ",Object(l.b)("a",{parentName:"p",href:"/es/next/continuous-integration"},"Continuous Integration"),"."))),Object(l.b)("h2",{id:"compatibility"},"Compatibility"),Object(l.b)("p",null,"Here is a list of past pnpm versions with respective Node.js version support."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Node.js"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 1"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 2"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 3"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 4"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 5"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 6"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 4"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 6"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 8"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 10"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 12"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 14"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 16"),Object(l.b)("td",{parentName:"tr",align:null},"?"),Object(l.b)("td",{parentName:"tr",align:null},"?"),Object(l.b)("td",{parentName:"tr",align:null},"?\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"?\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"?\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),Object(l.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(l.b)("p",null,"If pnpm is broken and you cannot fix it by reinstalling, you might need to remove it manually from the PATH."),Object(l.b)("p",null,"Let's assume you have the following error when running ",Object(l.b)("inlineCode",{parentName:"p"},"pnpm install"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),Object(l.b)("p",null,"First, try to find the location of pnpm by running: ",Object(l.b)("inlineCode",{parentName:"p"},"which pnpm"),". If you're on Windows, run this command in Git Bash. You'll get the location of the pnpm command, for instance:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),Object(l.b)("p",null,"Now that you know where the pnpm CLI is, open that directory and remove any pnpm-related files (",Object(l.b)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",Object(l.b)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",Object(l.b)("inlineCode",{parentName:"p"},"pnpm"),", etc). Once done, install pnpm again and it should work as expected."))}b.isMDXComponent=!0},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=b(n),u=a,s=m["".concat(i,".").concat(u)]||m[u]||d[u]||l;return n?r.a.createElement(s,p(p({ref:t},c),{},{components:n})):r.a.createElement(s,p({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);