(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{302:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),i=(n(0),n(395)),a={id:"git",title:"Working with Git"},c={unversionedId:"git",id:"version-4.x/git",isDocsHomePage:!1,title:"Working with Git",description:"Lockfiles",source:"@site/versioned_docs/version-4.x/git.md",slug:"/git",permalink:"/4.x/git",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-4.x/git.md",version:"4.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615077826,formattedLastUpdatedAt:"3/7/2021"},l=[{value:"Lockfiles",id:"lockfiles",children:[{value:"Merge conflicts",id:"merge-conflicts",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"lockfiles"},"Lockfiles"),Object(i.b)("p",null,"You should always commit the lockfile (",Object(i.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),"). This is for a\nmultitude of reasons, the primary of which being:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"it enables faster installation for CI and production environments, due to\nbeing able to skip package resolution"),Object(i.b)("li",{parentName:"ul"},"it enforces consistent installations and resolution between development,\ntesting, and production environments, meaning the packages used in testing\nand production will be exactly the same as when you developed your project")),Object(i.b)("h3",{id:"merge-conflicts"},"Merge conflicts"),Object(i.b)("p",null,"pnpm can automatically resolve merge conflicts in ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),".\nIf you have conflicts, just run ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm install")," and commit the changes."),Object(i.b)("p",null,"Be warned, however. It is advised that you review the changes prior to\nstaging a commit, because we cannot guarantee that pnpm will choose the correct\nhead - it instead builds with the most updated of lockfiles, which is ideal in\nmost cases."))}p.isMDXComponent=!0},395:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(a,".").concat(f)]||u[f]||d[f]||i;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);