"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7516],{9848:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>m});var a=n(7689);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,i(i({ref:t},o),{},{components:n})):a.createElement(k,i({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4574:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>d,metadata:()=>s,toc:()=>o,default:()=>c});var a=n(2951),r=n(9877),l=(n(7689),n(9848)),i=["components"],p={id:"add",title:"pnpm add <pkg>"},d=void 0,s={unversionedId:"cli/add",id:"version-6.x/cli/add",isDocsHomePage:!1,title:"pnpm add <pkg>",description:'Installe un paquet ainsi que ces d\xe9pendances. Par d\xe9faut, les paquets sont install\xe9s comme d\xe9pendance de production (aka: "dependencies").',source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.x/cli/add.md",sourceDirName:"cli",slug:"/cli/add",permalink:"/fr/cli/add",editUrl:"https://crowdin.com/project/pnpm/fr",version:"6.x",frontMatter:{id:"add",title:"pnpm add <pkg>"},sidebar:"version-6.x/docs",previous:{title:"Filtering",permalink:"/fr/filtering"},next:{title:"pnpm install",permalink:"/fr/cli/install"}},o=[{value:"TL;DR",id:"tldr",children:[]},{value:"D\xe9p\xf4ts de paquets support\xe9s",id:"d\xe9p\xf4ts-de-paquets-support\xe9s",children:[{value:"Installe depuis le d\xe9p\xf4t NPM",id:"installe-depuis-le-d\xe9p\xf4t-npm",children:[]},{value:"Installer depuis un workspace",id:"installer-depuis-un-workspace",children:[]},{value:"Installer \xe0 partir du syst\xe8me de fichiers local",id:"installer-\xe0-partir-du-syst\xe8me-de-fichiers-local",children:[]},{value:"Installer \xe0 partir d&#39;une archive distante",id:"installer-\xe0-partir-dune-archive-distante",children:[]},{value:"Installer \xe0 partir d&#39;un d\xe9p\xf4t Git",id:"installer-\xe0-partir-dun-d\xe9p\xf4t-git",children:[]}]},{value:"Options",id:"options",children:[{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-exact, -E",id:"--save-exact--e",children:[]},{value:"--save-peer",id:"--save-peer",children:[]},{value:"--ignore-workspace-root-check, -W",id:"--ignore-workspace-root-check--w",children:[]},{value:"--global",id:"--global",children:[]},{value:"--workspace",id:"--workspace",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],u={toc:o};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'Installe un paquet ainsi que ces d\xe9pendances. Par d\xe9faut, les paquets sont install\xe9s comme d\xe9pendance de production (aka: "dependencies").'),(0,l.kt)("h2",{id:"tldr"},"TL;DR"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax")),(0,l.kt)("td",{parentName:"tr",align:null},"Sauvegarde en tant que d\xe9pendance de production (",(0,l.kt)("inlineCode",{parentName:"td"},"dependencies"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -D sax")),(0,l.kt)("td",{parentName:"tr",align:null},"Sauvegarde en tant que d\xe9pendance de d\xe9veloppement (",(0,l.kt)("inlineCode",{parentName:"td"},"devDependencies"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -O sax")),(0,l.kt)("td",{parentName:"tr",align:null},"Sauvegarde en tant que d\xe9pendance optionnelle (",(0,l.kt)("inlineCode",{parentName:"td"},"optionalDependencies"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax@next")),(0,l.kt)("td",{parentName:"tr",align:null},"Installe la version ",(0,l.kt)("inlineCode",{parentName:"td"},"next")," de ",(0,l.kt)("inlineCode",{parentName:"td"},"sax"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),(0,l.kt)("td",{parentName:"tr",align:null},"Installe la version ",(0,l.kt)("inlineCode",{parentName:"td"},"3.0.0"))))),(0,l.kt)("h2",{id:"d\xe9p\xf4ts-de-paquets-support\xe9s"},"D\xe9p\xf4ts de paquets support\xe9s"),(0,l.kt)("h3",{id:"installe-depuis-le-d\xe9p\xf4t-npm"},"Installe depuis le d\xe9p\xf4t NPM"),(0,l.kt)("p",null,"Par d\xe9faut, la commande ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add package-name")," va installer la derni\xe8re version de ",(0,l.kt)("inlineCode",{parentName:"p"},"package-name")," depuis le ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"d\xe9p\xf4t NPM"),"."),(0,l.kt)("p",null,"If executed in a workspace, the command will first try to check whether other projects in the workspace use the specified package. If so, the already used version range will be installed."),(0,l.kt)("p",null,"Vous pouvez \xe9galement installer des paquets en sp\xe9cifiant :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"le tag : ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),(0,l.kt)("li",{parentName:"ul"},"la version : ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),(0,l.kt)("li",{parentName:"ul"},"un intervalle de versions : ",(0,l.kt)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0 <0.2.0"'))),(0,l.kt)("h3",{id:"installer-depuis-un-workspace"},"Installer depuis un workspace"),(0,l.kt)("p",null,"\xc0 noter que lorsqu'on travaille avec un ",(0,l.kt)("a",{parentName:"p",href:"/fr/workspaces"},"workspace"),", et que l'on installe des d\xe9pendances, les paquets seront install\xe9s depuis les sources configur\xe9es. Et cela en fonction de si ",(0,l.kt)("a",{parentName:"p",href:"/fr/workspaces#link-workspace-packages"},(0,l.kt)("inlineCode",{parentName:"a"},"link-workspace-packages"))," est configur\xe9 et des ",(0,l.kt)("a",{parentName:"p",href:"/fr/workspaces#workspace-ranges-workspace"},(0,l.kt)("inlineCode",{parentName:"a"}," intervalles de version")),"."),(0,l.kt)("h3",{id:"installer-\xe0-partir-du-syst\xe8me-de-fichiers-local"},"Installer \xe0 partir du syst\xe8me de fichiers local"),(0,l.kt)("p",null,"Il existe deux fa\xe7ons d'installer \xe0 partir du syst\xe8me de fichiers local :"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\xe0 partir d'une archive (",(0,l.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,l.kt)("inlineCode",{parentName:"li"},".tar.gz"),"ou ",(0,l.kt)("inlineCode",{parentName:"li"},".tgz"),")"),(0,l.kt)("li",{parentName:"ol"},"\xe0 partir d'un dossier")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tar.gz\npnpm add ./some-directory\n")),(0,l.kt)("p",null,"Lorsque vous installez \xe0 partir d'un dossier, un lien symbolique sera cr\xe9\xe9 dans le dossier ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," du projet, donc cela revient \xe0 ex\xe9cuter ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm link"),"."),(0,l.kt)("h3",{id:"installer-\xe0-partir-dune-archive-distante"},"Installer \xe0 partir d'une archive distante"),(0,l.kt)("p",null,'L\'argument doit \xeatre une URL correcte commen\xe7ant par "http://" ou "https: //".'),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,l.kt)("h3",{id:"installer-\xe0-partir-dun-d\xe9p\xf4t-git"},"Installer \xe0 partir d'un d\xe9p\xf4t Git"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),(0,l.kt)("p",null,"Installe le paquet depuis le d\xe9p\xf4t Git en le clonant. Vous pouvez utiliser un protocole diff\xe9rent pour certains d\xe9p\xf4ts Git. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add github:user/repo")),(0,l.kt)("p",null,"Vous pouvez installer depuis Git \xe0 partir :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"du dernier commit de master : ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),(0,l.kt)("li",{parentName:"ul"},"d'un commit sp\xe9cifi\xe9 : ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,l.kt)("li",{parentName:"ul"},"d'une branche : ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),(0,l.kt)("li",{parentName:"ul"},"d'une plage de versions : ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,l.kt)("p",null,"Installe les paquets sp\xe9cifi\xe9s en tant que d\xe9pendance de production (",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),")."),(0,l.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,l.kt)("p",null,"Installe les paquets sp\xe9cifi\xe9s en tant que d\xe9pendance de d\xe9veloppement (",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),")."),(0,l.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,l.kt)("p",null,"Installe les paquets sp\xe9cifi\xe9s en tant que d\xe9pendance optionnelle (",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),")."),(0,l.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,l.kt)("p",null,"Les d\xe9pendances seront install\xe9es en utilisant la version exacte au lieu de la version venant de l'op\xe9rateur semver."),(0,l.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,l.kt)("p",null,"Added in: v3.2.0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--save-peer")," ajoutera un ou plusieurs paquets en d\xe9pendances partag\xe9es (",(0,l.kt)("inlineCode",{parentName:"p"},"peerDependencies"),") et les installera en tant que d\xe9pendances de d\xe9veloppement (",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),")."),(0,l.kt)("h3",{id:"--ignore-workspace-root-check--w"},"--ignore-workspace-root-check, -W"),(0,l.kt)("p",null,"Ajout\xe9 dans la version v3.6.0"),(0,l.kt)("p",null,"On ne peut pas ajouter une d\xe9pendance \xe0 la racine du workspace \xe0 moins de rajouter le flag ",(0,l.kt)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," ou son raccourci ",(0,l.kt)("inlineCode",{parentName:"p"},"-W"),"."),(0,l.kt)("p",null,"Par exemple, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add debug -W"),"."),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"Installe un paquet de mani\xe8re globale."),(0,l.kt)("h3",{id:"--workspace"},"--workspace"),(0,l.kt)("p",null,"Added in: v4.4.0"),(0,l.kt)("p",null,"Ajoute uniquement la nouvelle d\xe9pendance si elle se trouve dans le workspace."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/fr/filtering"},"Read more about filtering.")))}c.isMDXComponent=!0}}]);