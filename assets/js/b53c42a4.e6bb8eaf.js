(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{310:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return c}));var o=t(3),a=t(8),r=(t(0),t(394)),i={id:"motivation",title:"Motivation"},s={unversionedId:"motivation",id:"version-5.x/motivation",isDocsHomePage:!1,title:"Motivation",description:"Saving disk space and boosting installation speed",source:"@site/versioned_docs/version-5.x/motivation.md",slug:"/motivation",permalink:"/motivation",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-5.x/motivation.md",version:"5.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615768014,formattedLastUpdatedAt:"3/15/2021",sidebar:"version-5.x/docs",next:{title:"Installation",permalink:"/installation"}},l=[{value:"Saving disk space and boosting installation speed",id:"saving-disk-space-and-boosting-installation-speed",children:[]},{value:"Creating a non-flat node_modules directory",id:"creating-a-non-flat-node_modules-directory",children:[]}],d={toc:l};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"saving-disk-space-and-boosting-installation-speed"},"Saving disk space and boosting installation speed"),Object(r.b)("p",null,"When using npm or Yarn, if you have 100 projects using a dependency, you will\nhave 100 copies of that dependency saved on disk. With pnpm, the dependency will be\nstored in a content-addressable store, so:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"If you depend on different versions of the dependency, only the files that\ndiffer are added to the store. For instance, if it has 100 files, and a new\nversion has a change in only one of those files, ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm update")," will only add 1\nnew file to the store, instead of cloning the entire dependency just for the\nsingular change."),Object(r.b)("li",{parentName:"ol"},"All the files are saved in a single place on the disk. When packages are\ninstalled, their files are hard-linked from that single place, consuming no\nadditional disk space. This allows you to share dependencies of the same version\nacross projects.")),Object(r.b)("p",null,"As a result, you save a lot of space on your disk proportional to the number of\nprojects and dependencies, and you have a lot faster installations!"),Object(r.b)("h2",{id:"creating-a-non-flat-node_modules-directory"},"Creating a non-flat node_modules directory"),Object(r.b)("p",null,"When installing dependencies with npm, all packages are hoisted to the root of the\nmodules directory. As a result, source code has access to dependencies that are\nnot added as dependencies to the project."),Object(r.b)("p",null,"pnpm uses symlinks to add only the direct dependencies of the project into the root of the modules directory.\nIf you'd like more details about the unique ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," structure that pnpm\ncreates and why it works fine with the Node.js ecosystem, read this small\narticle, and our corresponding documentation about the content-addressable\nstore:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"Flat node_modules is not the only way")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/symlinked-node-modules-structure"},"Symlinked node_modules structure"))))}c.isMDXComponent=!0},394:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),c=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||r;return t?a.a.createElement(m,s(s({ref:n},d),{},{components:t})):a.a.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);