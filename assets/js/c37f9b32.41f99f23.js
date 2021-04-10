(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{355:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),o=(n(0),n(448)),i={id:"start",title:"pnpm start"},c={unversionedId:"cli/start",id:"version-5.x/cli/start",isDocsHomePage:!1,title:"pnpm start",description:"Aliases: run start",source:"@site/versioned_docs/version-5.x/cli/start.md",slug:"/cli/start",permalink:"/5.x/cli/start",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-5.x/cli/start.md",version:"5.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615336009,formattedLastUpdatedAt:"3/10/2021",sidebar:"version-5.x/docs",previous:{title:"pnpm test",permalink:"/5.x/cli/test"},next:{title:"pnpm publish",permalink:"/5.x/cli/publish"}},p=[],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Aliases: ",Object(o.b)("inlineCode",{parentName:"p"},"run start")),Object(o.b)("p",null,"Runs an arbitrary command specified in the package's ",Object(o.b)("inlineCode",{parentName:"p"},"start")," property of its\n",Object(o.b)("inlineCode",{parentName:"p"},"scripts")," object. If no ",Object(o.b)("inlineCode",{parentName:"p"},"start")," property is specified on the ",Object(o.b)("inlineCode",{parentName:"p"},"scripts")," object,\nit will attempt to run ",Object(o.b)("inlineCode",{parentName:"p"},"node server.js")," as a default, failing if neither are\npresent."),Object(o.b)("p",null,"The intended usage of the property is to specify a command that starts your\nprogram."))}l.isMDXComponent=!0},448:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,b=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);