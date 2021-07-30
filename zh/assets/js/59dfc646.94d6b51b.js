"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3785],{9848:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>s});var a=n(7689);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},k=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),m=d(n),s=r,u=m["".concat(o,".").concat(s)]||m[s]||c[s]||l;return n?a.createElement(u,p(p({ref:t},k),{},{components:n})):a.createElement(u,p({ref:t},k))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var d=2;d<l;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},972:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>d,toc:()=>k,default:()=>m});var a=n(2951),r=n(9877),l=(n(7689),n(9848)),p=["components"],i={id:"add",title:"pnpm add <pkg>"},o=void 0,d={unversionedId:"cli/add",id:"version-5.x/cli/add",isDocsHomePage:!1,title:"pnpm add <pkg>",description:"\u5b89\u88c5\u8f6f\u4ef6\u5305\u53ca\u5176\u4f9d\u8d56\u7684\u4efb\u4f55\u8f6f\u4ef6\u5305\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4efb\u4f55\u65b0\u8f6f\u4ef6\u5305\u90fd\u5b89\u88c5\u4e3a\u751f\u4ea7\u4f9d\u8d56\u9879\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-5.x/cli/add.md",sourceDirName:"cli",slug:"/cli/add",permalink:"/zh/5.x/cli/add",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"5.x",frontMatter:{id:"add",title:"pnpm add <pkg>"},sidebar:"version-5.x/docs",previous:{title:"\u8fc7\u6ee4",permalink:"/zh/5.x/filtering"},next:{title:"pnpm install",permalink:"/zh/5.x/cli/install"}},k=[{value:"TL;DR",id:"tldr",children:[]},{value:"\u652f\u6301\u7684\u5305\u5730\u5740",id:"\u652f\u6301\u7684\u5305\u5730\u5740",children:[{value:"\u4ece npm \u5b89\u88c5",id:"\u4ece-npm-\u5b89\u88c5",children:[]},{value:"\u4ece workspace \u5b89\u88c5",id:"\u4ece-workspace-\u5b89\u88c5",children:[]},{value:"\u4ece\u672c\u5730\u5b89\u88c5",id:"\u4ece\u672c\u5730\u5b89\u88c5",children:[]},{value:"Install from remote tarball",id:"install-from-remote-tarball",children:[]},{value:"\u4ece git \u5b89\u88c5",id:"\u4ece-git-\u5b89\u88c5",children:[]}]},{value:"Options",id:"options",children:[{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-exact, -E",id:"--save-exact--e",children:[]},{value:"--save-peer",id:"--save-peer",children:[]},{value:"--ignore-workspace-root-check, -W",id:"--ignore-workspace-root-check--w",children:[]},{value:"--global",id:"--global",children:[]},{value:"--workspace",id:"--workspace",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],c={toc:k};function m(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5b89\u88c5\u8f6f\u4ef6\u5305\u53ca\u5176\u4f9d\u8d56\u7684\u4efb\u4f55\u8f6f\u4ef6\u5305\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4efb\u4f55\u65b0\u8f6f\u4ef6\u5305\u90fd\u5b89\u88c5\u4e3a\u751f\u4ea7\u4f9d\u8d56\u9879\u3002"),(0,l.kt)("h2",{id:"tldr"},"TL;DR"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fdd\u5b58\u5230 ",(0,l.kt)("inlineCode",{parentName:"td"},"dependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -D sax")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fdd\u5b58\u5230 ",(0,l.kt)("inlineCode",{parentName:"td"},"devDependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -O sax")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fdd\u5b58\u5230 ",(0,l.kt)("inlineCode",{parentName:"td"},"optionalDependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax@next")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"td"},"next")," tag")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b89\u88c5\u6307\u5b9a\u7248\u672c ",(0,l.kt)("inlineCode",{parentName:"td"},"3.0.0"))))),(0,l.kt)("h2",{id:"\u652f\u6301\u7684\u5305\u5730\u5740"},"\u652f\u6301\u7684\u5305\u5730\u5740"),(0,l.kt)("h3",{id:"\u4ece-npm-\u5b89\u88c5"},"\u4ece npm \u5b89\u88c5"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add package-name")," \u9ed8\u8ba4\u4f1a\u4ece ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry"),"\u5b89\u88c5\u6700\u65b0\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"package-name"),". \u8981\u4ece\u5176\u4ed6 registry \u5b89\u88c5\u5305\u7684\u8bdd\u53ef\u4ee5\u4f7f\u7528 tarball link (\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"#install-from-remote-tarball"},"the corresponding guide"),")."),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5b89\u88c5\u5305:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"tag: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),(0,l.kt)("li",{parentName:"ul"},"version: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),(0,l.kt)("li",{parentName:"ul"},"version range: ",(0,l.kt)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0 <0.2.0"'))),(0,l.kt)("h3",{id:"\u4ece-workspace-\u5b89\u88c5"},"\u4ece workspace \u5b89\u88c5"),(0,l.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\u5f53\u6211\u4eec\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/zh/5.x/workspaces"},"workspace"),"\u5b89\u88c5\u4f9d\u8d56\u65f6, \u4f1a\u4ece\u5df2\u914d\u7f6e\u7684\u6e90\u5904\u8fdb\u884c\u5b89\u88c5\uff0c\u5f53\u7136\u53d6\u51b3\u4e8e\u662f\u5426\u8bbe\u7f6e\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"/zh/5.x/workspaces#link-workspace-packages"},(0,l.kt)("inlineCode",{parentName:"a"},"link-workspace-packages")),",\u4ee5\u53ca\u662f\u5426\u4f7f\u7528\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"/zh/5.x/workspaces#workspace-ranges-workspace"},(0,l.kt)("inlineCode",{parentName:"a"},"workspace: range protocol")),"."),(0,l.kt)("h3",{id:"\u4ece\u672c\u5730\u5b89\u88c5"},"\u4ece\u672c\u5730\u5b89\u88c5"),(0,l.kt)("p",null,"\u4ece\u672c\u5730\u5b89\u88c5\u7684\u4e24\u79cd\u65b9\u6cd5:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6e90\u7801\u6587\u4ef6 (",(0,l.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,l.kt)("inlineCode",{parentName:"li"},".tar.gz"),", or ",(0,l.kt)("inlineCode",{parentName:"li"},".tgz"),")"),(0,l.kt)("li",{parentName:"ol"},"\u672c\u5730\u76ee\u5f55")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tar.gz\npnpm add ./some-directory\n")),(0,l.kt)("p",null,"\u5f53\u4ece\u76ee\u5f55\u5b89\u88c5\u65f6\uff0c\u4f1a\u5728\u5f53\u524d\u9879\u76ee\u76ee\u5f55\u4e2d\u751f\u6210\u4e00\u4e2a symlink ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),", \u56e0\u6b64\u8fd9\u91cc\u8ddf\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm link")," \u662f\u4e00\u81f4\u7684."),(0,l.kt)("h3",{id:"install-from-remote-tarball"},"Install from remote tarball"),(0,l.kt)("p",null,'\u53c2\u6570\u5fc5\u987b\u662f\u4e00\u4e2a\u53ef\u8bbf\u95ee\u7684 URL, "http://" \u6216\u8005 "https://"\u5f00\u5934\u7684.'),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,l.kt)("h3",{id:"\u4ece-git-\u5b89\u88c5"},"\u4ece git \u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),(0,l.kt)("p",null,"\u901a\u8fc7 git clone, \u4ece git \u4f5c\u8005\u5904\u5b89\u88c5\u5305. \u53ef\u4ee5\u7528\u534f\u8bae\u51c6\u786e\u7684\u6307\u5b9a git \u4f5c\u8005 For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add github:user/repo")),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u4ece Git \u5b89\u88c5:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"latest commit from master: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),(0,l.kt)("li",{parentName:"ul"},"commit: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,l.kt)("li",{parentName:"ul"},"branch: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),(0,l.kt)("li",{parentName:"ul"},"version range: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,l.kt)("p",null,"\u5c06\u6307\u5b9a\u7684\u8f6f\u4ef6\u5305\u5b89\u88c5\u4e3a\u5e38\u89c4\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),"\u3002"),(0,l.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,l.kt)("p",null,"\u5c06\u6307\u5b9a\u7684 packages \u5b89\u88c5\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\u3002"),(0,l.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,l.kt)("p",null,"\u5c06\u6307\u5b9a\u7684 packages \u5b89\u88c5\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"\u3002"),(0,l.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,l.kt)("p",null,"\u4fdd\u5b58\u7684\u4f9d\u8d56\u4f1a\u88ab\u6307\u5b9a\u4e3a\u4e00\u4e2a\u786e\u5207\u7684\u7248\u672c, \u800c\u4e0d\u662f\u4f7f\u7528 pnpm \u7684\u9ed8\u8ba4 semver range operator \u914d\u7f6e."),(0,l.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,l.kt)("p",null,"Added in: v3.2.0"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--save-peer")," \u4f1a\u6dfb\u52a0\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"peerDependencies")," \u7684 package \u5e76\u5b89\u88c5\u5230 dev dependencies."),(0,l.kt)("h3",{id:"--ignore-workspace-root-check--w"},"--ignore-workspace-root-check, -W"),(0,l.kt)("p",null,"Added in: v3.6.0"),(0,l.kt)("p",null,"\u9664\u975e\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"-W"),"\u6765\u6807\u8bb0. \u5426\u5219\u5728 root workspace \u6dfb\u52a0\u4f9d\u8d56\u9879\u65f6\u4f1a\u5931\u8d25."),(0,l.kt)("p",null,"\u4f8b\u5982, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add debug -W"),"."),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"\u5b89\u88c5\u5168\u5c40\u4f9d\u8d56"),(0,l.kt)("h3",{id:"--workspace"},"--workspace"),(0,l.kt)("p",null,"Added in: v4.4.0"),(0,l.kt)("p",null,"\u4ec5\u6dfb\u52a0\u5728 workspace \u627e\u5230\u7684\u4f9d\u8d56\u9879."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh/5.x/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);