(self.webpackChunk=self.webpackChunk||[]).push([[4961],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7689);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8653:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>d,default:()=>u});var a=t(2791),r=t(9698),o=(t(7689),t(9848)),i=["components"],l={id:"aliases",title:"\u522b\u540d",original_id:"aliases"},p=void 0,s={unversionedId:"aliases",id:"version-4.x/aliases",isDocsHomePage:!1,title:"\u522b\u540d",description:"\u522b\u540d\u8ba9\u60a8\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u540d\u79f0\u5b89\u88c5\u8f6f\u4ef6\u5305\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-4.x/aliases.md",sourceDirName:".",slug:"/aliases",permalink:"/zh/4.x/aliases",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"4.x",frontMatter:{id:"aliases",title:"\u522b\u540d",original_id:"aliases"},sidebar:"version-4.x/docs",previous:{title:"Workspaces",permalink:"/zh/4.x/workspaces"},next:{title:"\u547d\u4ee4\u884c tab \u81ea\u52a8\u8865\u5168\u3002",permalink:"/zh/4.x/completion"}},d=[],c={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u522b\u540d\u8ba9\u60a8\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u540d\u79f0\u5b89\u88c5\u8f6f\u4ef6\u5305\u3002"),(0,o.kt)("p",null,"Lets' assume you use ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash")," all over your project. There is a bug in ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash")," that breaks your project. \u4f60\u6709\u4e00\u4e2a\u4fee\u590d\uff0c\u4f46 ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash")," \u4e0d\u4f1a\u5408\u5e76\u5b83\u3002 Normally you would either install ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash")," from your fork directly (as a git-hosted dependency) or publish it with a different name. If you use the second solution you have to replace all the requires in your project with the new dependency name (",(0,o.kt)("inlineCode",{parentName:"p"},"require('lodash')")," => ",(0,o.kt)("inlineCode",{parentName:"p"},"require('awesome-lodash')"),")`. With aliases, you have a third option."),(0,o.kt)("p",null,"Publish a new package called ",(0,o.kt)("inlineCode",{parentName:"p"},"awesome-lodash")," and install it using ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash")," as its alias:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm add lodash@npm:awesome-lodash\n")),(0,o.kt)("p",null,"\u4e0d\u9700\u8981\u66f4\u6539\u4ee3\u7801\u3002 All the requires of ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash")," will import ",(0,o.kt)("inlineCode",{parentName:"p"},"awesome-lodash"),"."),(0,o.kt)("p",null,"Sometimes you'll want to use two different versions of a package in your project. \u5f88\u7b80\u5355\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add lodash1@npm:lodash@1\npnpm add lodash2@npm:lodash@2\n")),(0,o.kt)("p",null,"Now you can require the first version of lodash via ",(0,o.kt)("inlineCode",{parentName:"p"},"require('lodash1')")," and the second via ",(0,o.kt)("inlineCode",{parentName:"p"},"require('lodash2')"),"."),(0,o.kt)("p",null,"\u5f53\u4e0e\u94a9\u5b50\u7ed3\u5408\u4f7f\u7528\u65f6\uff0c\u8fd9\u4f1a\u53d8\u5f97\u66f4\u52a0\u5f3a\u5927\u3002 Maybe you want to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"awesome-lodash")," in all the packages in ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),". You can easily achieve that with the following ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpmfile.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage\n  }\n}\n\nfunction readPackage (pkg) {\n  if (pkg.dependencies && pkg.dependencies.lodash) {\n    pkg.dependencies.lodash = 'npm:awesome-lodash@^1.0.0'\n  }\n  return pkg\n}\n")))}u.isMDXComponent=!0}}]);