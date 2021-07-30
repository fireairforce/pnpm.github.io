"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3200],{5041:(e,t,n)=>{n.d(t,{W:()=>r});var a=n(7689);function r(){return a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},7594:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7689);const r="iconExternalLink_1ZwB";const o=function(e){var t=e.width,n=void 0===t?13.5:t,o=e.height,l=void 0===o?13.5:o;return a.createElement("svg",{width:n,height:l,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},3200:(e,t,n)=>{n.d(t,{Z:()=>Ee});var a=n(7689),r=n(1626),o=n(5762),l=n(8023),c=n(9738);const i="skipToContent_1psu";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const u=function(){var e=(0,a.useRef)(null),t=(0,o.k6)().action;return(0,c.SL)((function(n){var a=n.location;e.current&&!a.hash&&"PUSH"===t&&s(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:i,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},a.createElement(l.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m="announcementBar_1X-g",d="announcementBarClose_2HuN",f="announcementBarContent_3ReS",v="announcementBarCloseable_2PIO";const h=function(){var e,t=(0,c.nT)(),n=t.isClosed,o=t.close,i=(0,c.LU)().announcementBar;if(!i)return null;var s=i.content,u=i.backgroundColor,h=i.textColor,g=i.isCloseable;return!s||g&&n?null:a.createElement("div",{className:m,style:{backgroundColor:u,color:h},role:"banner"},a.createElement("div",{className:(0,r.Z)(f,(e={},e[v]=g,e)),dangerouslySetInnerHTML:{__html:s}}),g?a.createElement("button",{type:"button",className:(0,r.Z)(d,"clean-btn"),onClick:o,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)};var g=n(2951),b=n(8226),p=n(6731);const E={toggle:"toggle_HJd0"};var k=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.Z)(E.toggle,E.dark),style:n},t)},Z=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.Z)(E.toggle,E.light),style:n},t)},_=(0,a.memo)((function(e){var t=e.className,n=e.icons,o=e.checked,l=e.disabled,c=e.onChange,i=(0,a.useState)(o),s=i[0],u=i[1],m=(0,a.useState)(!1),d=m[0],f=m[1],v=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":l})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:function(){return u(!s)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function w(e){var t=(0,c.LU)().colorMode.switchConfig,n=t.darkIcon,r=t.darkIconStyle,o=t.lightIcon,l=t.lightIconStyle,i=(0,p.Z)().isClient;return a.createElement(_,(0,g.Z)({disabled:!i,icons:{checked:a.createElement(k,{icon:n,style:r}),unchecked:a.createElement(Z,{icon:o,style:l})}},e))}var y=n(8347),C=n(2266);const N=function(e){var t=(0,o.TH)(),n=(0,a.useState)(e),r=n[0],l=n[1],i=(0,a.useRef)(!1),s=(0,a.useState)(0),u=s[0],m=s[1],d=(0,a.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return(0,C.Z)((function(t,n){var a=t.scrollY,r=null==n?void 0:n.scrollY;if(e)if(a<u)l(!0);else{if(i.current)return i.current=!1,void l(!1);r&&0===a&&l(!0);var o=document.documentElement.scrollHeight-u,c=window.innerHeight;r&&a>=r?l(!1):a+c<o&&l(!0)}}),[u,i]),(0,c.SL)((function(t){e&&!t.location.hash&&l(!0)})),(0,a.useEffect)((function(){e&&t.hash&&(i.current=!0)}),[t.hash]),{navbarRef:d,isNavbarVisible:r}};const S=function(e){void 0===e&&(e=!0),(0,a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])};var I=n(1272),L=n(8261),D=n(6153),B=n(9877),T=["width","height","className"];const P=function(e){var t=e.width,n=void 0===t?30:t,r=e.height,o=void 0===r?30:r,l=e.className,c=(0,B.Z)(e,T);return a.createElement("svg",(0,g.Z)({className:l,width:n,height:o,viewBox:"0 0 30 30","aria-hidden":"true"},c),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},x="toggle_3MZ8",M="navbarHideable_24cx",A="navbarHidden_3G0l";var R="right";function O(){return(0,c.LU)().navbar.items}function U(){var e=(0,c.LU)().colorMode.disableSwitch,t=(0,y.Z)(),n=t.isDarkTheme,r=t.setLightTheme,o=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,a.useCallback)((function(e){return e.target.checked?o():r()}),[r,o]),disabled:e}}function H(e){var t=e.sidebarShown,n=e.toggleSidebar;S(t);var o=O(),i=U(),s=function(e){var t,n=e.sidebarShown,r=e.toggleSidebar,o=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:r}),l=(0,c.D9)(o),i=(0,a.useState)((function(){return!1})),s=i[0],u=i[1];(0,a.useEffect)((function(){o&&!l&&u(!0)}),[o,l]);var m=!!o;return(0,a.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,a.useCallback)((function(){u(!1)}),[]),content:o}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(D.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!i.disabled&&t&&a.createElement(w,{checked:i.isDarkTheme,onChange:i.toggle})),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},o.map((function(e,t){return a.createElement(L.Z,(0,g.Z)({mobile:!0},e,{onClick:n,key:t}))})))),a.createElement("div",{className:"navbar-sidebar__item navbar-sidebar__item--secondary menu"},a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},a.createElement(l.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}const V=function(){var e,t,n,o,l,i,s,u=(0,c.LU)().navbar,m=u.hideOnScroll,d=u.style,f=(t=(0,I.Z)(),n="mobile"===t,o=(0,a.useState)(!1),l=o[0],i=o[1],s=(0,a.useCallback)((function(){i((function(e){return!e}))}),[]),(0,a.useEffect)((function(){"desktop"===t&&i(!1)}),[t]),{shouldRender:n,toggle:s,shown:l}),v=U(),h=N(m),p=h.navbarRef,E=h.isNavbarVisible,k=O(),Z=k.some((function(e){return"search"===e.type})),_=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:R)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:R)}))}}(k),y=_.leftItems,C=_.rightItems;return a.createElement("nav",{ref:p,className:(0,r.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===d,"navbar--primary":"primary"===d,"navbar-sidebar--show":f.shown},e[M]=m,e[A]=m&&!E,e))},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},(null==k?void 0:k.length)>0&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:f.toggle,onKeyDown:f.toggle},a.createElement(P,null)),a.createElement(D.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),y.map((function(e,t){return a.createElement(L.Z,(0,g.Z)({},e,{key:t}))}))),a.createElement("div",{className:"navbar__items navbar__items--right"},C.map((function(e,t){return a.createElement(L.Z,(0,g.Z)({},e,{key:t}))})),!v.disabled&&a.createElement(w,{className:x,checked:v.isDarkTheme,onChange:v.toggle}),!Z&&a.createElement(b.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:f.toggle}),f.shouldRender&&a.createElement(H,{sidebarShown:f.shown,toggleSidebar:f.toggle}))};var j=n(956),W=n(6280),z=n(9946);const F="footerLogoLink_1yva";var K=n(7144),q=n(7594),G=["to","href","label","prependBaseUrlToHref"];function X(e){var t=e.to,n=e.href,r=e.label,o=e.prependBaseUrlToHref,l=(0,B.Z)(e,G),c=(0,W.Z)(t),i=(0,W.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(j.Z,(0,g.Z)({className:"footer__link-item"},n?{href:o?i:n}:{to:c},l),n&&!(0,z.Z)(n)?a.createElement("span",null,r,a.createElement(q.Z,null)):r)}var Y=function(e){var t=e.sources,n=e.alt;return a.createElement(K.Z,{className:"footer__logo",alt:n,sources:t})};const Q=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,o=t.links,l=void 0===o?[]:o,i=t.logo,s=void 0===i?{}:i,u={light:(0,W.Z)(s.src),dark:(0,W.Z)(s.srcDark||s.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},l&&l.length>0&&a.createElement("div",{className:"row footer__links"},l.map((function(e,t){return a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(X,e))}))):null)}))),(s||n)&&a.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},s.href?a.createElement(j.Z,{href:s.href,className:F},a.createElement(Y,{alt:s.alt,sources:u})):a.createElement(Y,{alt:s.alt,sources:u})),n?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null};var J=n(7782),$=(0,c.WA)("theme"),ee="light",te="dark",ne=function(e){return e===te?te:ee},ae=function(e){(0,c.WA)("theme").set(ne(e))};const re=function(){var e=(0,c.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,r=e.respectPrefersColorScheme,o=(0,a.useState)(function(e){return J.Z.canUseDOM?ne(document.documentElement.getAttribute("data-theme")):ne(e)}(t)),l=o[0],i=o[1],s=(0,a.useCallback)((function(){i(ee),ae(ee)}),[]),u=(0,a.useCallback)((function(){i(te),ae(te)}),[]);return(0,a.useEffect)((function(){document.documentElement.setAttribute("data-theme",ne(l))}),[l]),(0,a.useEffect)((function(){if(!n)try{var e=$.get();null!==e&&i(ne(e))}catch(t){console.error(t)}}),[i]),(0,a.useEffect)((function(){n&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;i(t?te:ee)}))}),[]),{isDarkTheme:l===te,setLightTheme:s,setDarkTheme:u}};var oe=n(1450);const le=function(e){var t=re(),n=t.isDarkTheme,r=t.setLightTheme,o=t.setDarkTheme;return a.createElement(oe.Z.Provider,{value:{isDarkTheme:n,setLightTheme:r,setDarkTheme:o}},e.children)};var ce="docusaurus.tab.";const ie=function(){var e=(0,a.useState)({}),t=e[0],n=e[1],r=(0,a.useCallback)((function(e,t){(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,a.useEffect)((function(){try{var e={};(0,c._f)().forEach((function(t){if(t.startsWith(ce)){var n=t.substring(ce.length);e[n]=(0,c.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}};const se=(0,a.createContext)(void 0);const ue=function(e){var t=ie(),n=t.tabGroupChoices,r=t.setTabGroupChoices;return a.createElement(se.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:r}},e.children)};function me(e){var t=e.children;return a.createElement(le,null,a.createElement(c.pl,null,a.createElement(ue,null,a.createElement(c.L5,null,a.createElement(c.Cn,null,t)))))}var de=n(5899);function fe(e){var t=e.locale,n=e.version,r=e.tag,o=t;return a.createElement(de.Z,null,o&&a.createElement("meta",{name:"docsearch:language",content:o}),n&&a.createElement("meta",{name:"docsearch:version",content:n}),r&&a.createElement("meta",{name:"docsearch:docusaurus_tag",content:r}))}var ve=n(1378);function he(){var e=(0,p.Z)().i18n,t=e.defaultLocale,n=e.locales,r=(0,c.l5)();return a.createElement(de.Z,null,n.map((function(e){return a.createElement("link",{key:e,rel:"alternate",href:r.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),a.createElement("link",{rel:"alternate",href:r.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function ge(e){var t=e.permalink,n=(0,p.Z)().siteConfig.url,r=function(){var e=(0,p.Z)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,W.Z)(t)}(),l=t?""+n+t:r;return a.createElement(de.Z,null,a.createElement("meta",{property:"og:url",content:l}),a.createElement("link",{rel:"canonical",href:l}))}function be(e){var t=(0,p.Z)(),n=t.siteConfig,r=n.favicon,o=n.themeConfig,l=o.metadatas,i=o.image,s=t.i18n,u=s.currentLocale,m=s.localeConfigs,d=e.title,f=e.description,v=e.image,h=e.keywords,b=e.searchMetadatas,E=(0,W.Z)(r),k=(0,c.pe)(d),Z=u,_=m[u].direction;return a.createElement(a.Fragment,null,a.createElement(de.Z,null,a.createElement("html",{lang:Z,dir:_}),r&&a.createElement("link",{rel:"shortcut icon",href:E}),a.createElement("title",null,k),a.createElement("meta",{property:"og:title",content:k}),v||i&&a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),a.createElement(ve.Z,{description:f,keywords:h,image:v}),a.createElement(ge,null),a.createElement(he,null),a.createElement(fe,(0,g.Z)({tag:c.HX,locale:u},b)),a.createElement(de.Z,null,l.map((function(e,t){return a.createElement("meta",(0,g.Z)({key:"metadata_"+t},e))}))))}const pe=function(){(0,a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const Ee=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,l=e.pageClassName;return pe(),a.createElement(me,null,a.createElement(be,e),a.createElement(u,null),a.createElement(h,null),a.createElement(V,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,o,l)},t),!n&&a.createElement(Q,null))}},6153:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(2951),r=n(9877),o=n(7689),l=n(956),c=n(7144),i=n(6280),s=n(6731),u=["imageClassName","titleClassName"];const m=function(e){var t=(0,s.Z)(),n=t.siteConfig,m=n.title,d=n.themeConfig.navbar,f=d.title,v=d.logo,h=void 0===v?{src:""}:v,g=t.isClient,b=e.imageClassName,p=e.titleClassName,E=(0,r.Z)(e,u),k=(0,i.Z)(h.href||"/"),Z={light:(0,i.Z)(h.src),dark:(0,i.Z)(h.srcDark||h.src)};return o.createElement(l.Z,(0,a.Z)({to:k},E,h.target&&{target:h.target}),h.src&&o.createElement(c.Z,{key:g,className:b,sources:Z,alt:h.alt||f||m}),null!=f&&o.createElement("b",{className:p},f))}},5231:(e,t,n)=>{n.d(t,{O:()=>h,Z:()=>p});var a=n(2951),r=n(9877),o=n(7689),l=n(1626),c=n(956),i=n(6280),s=n(7594),u=n(9946),m=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],d=["className","isDropdownItem"],f=["className","isDropdownItem"],v=["mobile","position"];function h(e){var t=e.activeBasePath,n=e.activeBaseRegex,l=e.to,d=e.href,f=e.label,v=e.activeClassName,h=void 0===v?"navbar__link--active":v,g=e.prependBaseUrlToHref,b=(0,r.Z)(e,m),p=(0,i.Z)(l),E=(0,i.Z)(t),k=(0,i.Z)(d,{forcePrependBaseUrl:!0}),Z=f&&d&&!(0,u.Z)(d),_="dropdown__link--active"===h;return o.createElement(c.Z,(0,a.Z)({},d?{href:g?k:d}:Object.assign({isNavLink:!0,activeClassName:h,to:p},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(E)}}:null),b),Z?o.createElement("span",null,f,o.createElement(s.Z,_&&{width:12,height:12})):f)}function g(e){var t=e.className,n=e.isDropdownItem,c=void 0!==n&&n,i=(0,r.Z)(e,d),s=o.createElement(h,(0,a.Z)({className:(0,l.Z)(c?"dropdown__link":"navbar__item navbar__link",t)},i));return c?o.createElement("li",null,s):s}function b(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,f));return o.createElement("li",{className:"menu__list-item"},o.createElement(h,(0,a.Z)({className:(0,l.Z)("menu__link",t)},n)))}const p=function(e){var t=e.mobile,n=void 0!==t&&t,a=(e.position,(0,r.Z)(e,v)),l=n?b:g;return o.createElement(l,a)}},98:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(2951),r=n(9877),o=n(7689),l=n(5231),c=n(3208),i=n(1626),s=n(9738),u=n(6203),m=["docId","activeSidebarClassName","label","docsPluginId"];function d(e){var t,n=e.docId,d=e.activeSidebarClassName,f=e.label,v=e.docsPluginId,h=(0,r.Z)(e,m),g=(0,c.Iw)(v),b=g.activeVersion,p=g.activeDoc,E=(0,s.J)(v).preferredVersion,k=(0,c.yW)(v),Z=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,u.uniq)([b,E,k].filter(Boolean)),n);return o.createElement(l.Z,(0,a.Z)({exact:!0},h,{className:(0,i.Z)(h.className,(t={},t[d]=p&&p.sidebar===Z.sidebar,t)),label:null!=f?f:Z.id,to:Z.path}))}},2464:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(2951),r=n(9877),o=n(7689),l=n(5231),c=n(4922),i=n(3208),s=n(9738),u=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],m=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,n,d=e.mobile,f=e.docsPluginId,v=e.dropdownActiveClassDisabled,h=e.dropdownItemsBefore,g=e.dropdownItemsAfter,b=(0,r.Z)(e,u),p=(0,i.Iw)(f),E=(0,i.gB)(f),k=(0,i.yW)(f),Z=(0,s.J)(f),_=Z.preferredVersion,w=Z.savePreferredVersionName;var y,C=(y=E.map((function(e){var t=(null==p?void 0:p.alternateDocVersions[e.name])||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==p?void 0:p.activeVersion)},onClick:function(){w(e.name)}}})),[].concat(h,y,g)),N=null!=(t=null!=(n=p.activeVersion)?n:_)?t:k,S=d&&C?"Versions":N.label,I=d&&C?void 0:m(N).path;return C.length<=1?o.createElement(l.Z,(0,a.Z)({},b,{mobile:d,label:S,to:I,isActive:v?function(){return!1}:void 0})):o.createElement(c.Z,(0,a.Z)({},b,{mobile:d,label:S,to:I,items:C,isActive:v?function(){return!1}:void 0}))}},1356:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(2951),r=n(9877),o=n(7689),l=n(5231),c=n(3208),i=n(9738),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,r.Z)(e,s),f=(0,c.zu)(m),v=(0,i.J)(m).preferredVersion,h=(0,c.yW)(m),g=null!=(t=null!=f?f:v)?t:h,b=null!=n?n:g.label,p=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return o.createElement(l.Z,(0,a.Z)({},d,{label:b,to:p}))}},4922:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(2951),r=n(9877),o=n(7689),l=n(1626),c=n(9738),i=n(5231),s=n(8261),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,c.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function v(e){var t,n=e.items,c=e.position,m=e.className,d=(0,r.Z)(e,u),f=(0,o.useRef)(null),v=(0,o.useRef)(null),h=(0,o.useState)(!1),g=h[0],b=h[1];return(0,o.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),o.createElement("div",{ref:f,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===c,"dropdown--show":g})},o.createElement(i.O,(0,a.Z)({className:(0,l.Z)("navbar__item navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!g))}}),null!=(t=d.children)?t:d.label),o.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return o.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var a=f.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function h(e){var t,n=e.items,u=e.className,d=(e.position,(0,r.Z)(e,m)),v=(0,c.be)(),h=f(n,v),g=(0,c.uR)({initialState:function(){return!h}}),b=g.collapsed,p=g.toggleCollapsed,E=g.setCollapsed;return(0,o.useEffect)((function(){h&&E(!h)}),[v,h]),o.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":b})},o.createElement(i.O,(0,a.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),p()}}),null!=(t=d.children)?t:d.label),o.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},n.map((function(e,t){return o.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}const g=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,d),l=n?h:v;return o.createElement(l,a)}},8261:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(9877),r=n(7689),o=n(5231),l=n(4922),c=n(2951),i=["width","height"];const s=function(e){var t=e.width,n=void 0===t?20:t,o=e.height,l=void 0===o?20:o,s=(0,a.Z)(e,i);return r.createElement("svg",(0,c.Z)({viewBox:"0 0 20 20",width:n,height:l,"aria-hidden":"true"},s),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};var u=n(6731),m=n(9738),d=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function f(e){var t=e.mobile,n=e.dropdownItemsBefore,o=e.dropdownItemsAfter,i=(0,a.Z)(e,d),f=(0,u.Z)().i18n,v=f.currentLocale,h=f.locales,g=f.localeConfigs,b=(0,m.l5)();function p(e){return g[e].label}var E=h.map((function(e){var t="pathname://"+b.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:p(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===v?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),k=[].concat(n,E,o),Z=t?"Languages":p(v);return r.createElement(l.Z,(0,c.Z)({},i,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(s,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,Z)),items:k}))}var v=n(8226);function h(e){return e.mobile?null:r.createElement(v.Z,null)}var g=["type"],b={default:function(){return o.Z},localeDropdown:function(){return f},search:function(){return h},dropdown:function(){return l.Z},docsVersion:function(){return n(1356).Z},docsVersionDropdown:function(){return n(2464).Z},doc:function(){return n(98).Z}};function p(e){var t=e.type,n=(0,a.Z)(e,g),o=function(e){var t=b[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items));return r.createElement(o,n)}},1450:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(7689).createContext(void 0)},7144:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(2951),r=n(9877),o=n(7689),l=n(1626),c=n(6731),i=n(8347);const s={themedImage:"themedImage_27aB","themedImage--light":"themedImage--light_n2ey","themedImage--dark":"themedImage--dark_24Sm"};var u=["sources","className","alt"];const m=function(e){var t=(0,c.Z)().isClient,n=(0,i.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,r.Z)(e,u),g=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,g.map((function(e){return o.createElement("img",(0,a.Z)({key:e,src:m[e],alt:v,className:(0,l.Z)(s.themedImage,s["themedImage--"+e],d)},h))})))}},2266:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7689),r=n(7782),o=function(){return r.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};const l=function(e,t){void 0===t&&(t=[]);var n=(0,a.useRef)(o()),r=function(){var t=o();e&&e(t,n.current),n.current=t};(0,a.useEffect)((function(){var e={passive:!0};return r(),window.addEventListener("scroll",r,e),function(){return window.removeEventListener("scroll",r,e)}}),t)}},8347:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7689),r=n(1450);const o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},8226:(e,t,n)=>{n.d(t,{Z:()=>L});var a=n(2951),r=n(9877),o=n(7689),l=n(7326),c=n(6731),i=n(5762),s=n(6280),u=n(956),m=n(5899),d=n(7387);function f(){return o.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},o.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var v=n(5041);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b="Ctrl";var p=o.forwardRef((function(e,t){var n=e.translations,a=void 0===n?{}:n,r=g(e,["translations"]),l=a.buttonText,c=void 0===l?"Search":l,i=a.buttonAriaLabel,s=void 0===i?"Search":i,u=(0,o.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":b:null}),[]);return o.createElement("button",h({type:"button",className:"DocSearch DocSearch-Button","aria-label":s},r,{ref:t}),o.createElement("span",{className:"DocSearch-Button-Container"},o.createElement(v.W,null),o.createElement("span",{className:"DocSearch-Button-Placeholder"},c)),o.createElement("span",{className:"DocSearch-Button-Keys"},null!==u&&o.createElement(o.Fragment,null,o.createElement("span",{className:"DocSearch-Button-Key"},u===b?o.createElement(f,null):u),o.createElement("span",{className:"DocSearch-Button-Key"},"K"))))})),E=n(3208),k=n(9738);function Z(){var e=function(){var e=(0,c.Z)().i18n,t=(0,E._r)(),n=(0,E.WS)(),a=(0,k.Oh)(),r=[k.HX].concat(Object.keys(t).map((function(e){var r,o,l=(null==n||null==(r=n.activePlugin)?void 0:r.pluginId)===e?n.activeVersion:void 0,c=a[e],i=t[e].versions.find((function(e){return e.isLast})),s=null!=(o=null!=l?l:c)?o:i;return(0,k.os)(e,s.name)})));return{locale:e.currentLocale,tags:r}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var _=n(8023);const w="searchBox_1Qjd";var y=["contextualSearch"],C=null;function N(e){var t=e.hit,n=e.children;return o.createElement(u.Z,{to:t.url},n)}function S(e){var t=e.state,n=e.onClose,a=(0,d.Z)().generateSearchPageLink;return o.createElement(u.Z,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function I(e){var t,u,d=e.contextualSearch,f=(0,r.Z)(e,y),v=(0,c.Z)().siteMetadata,h=Z(),g=null!=(t=null==(u=f.searchParameters)?void 0:u.facetFilters)?t:[],b=d?[].concat(h,g):g,E=Object.assign({},f.searchParameters,{facetFilters:b}),k=(0,s.C)().withBaseUrl,I=(0,i.k6)(),L=(0,o.useRef)(null),D=(0,o.useRef)(null),B=(0,o.useState)(!1),T=B[0],P=B[1],x=(0,o.useState)(null),M=x[0],A=x[1],R=(0,o.useCallback)((function(){return C?Promise.resolve():Promise.all([n.e(5540).then(n.bind(n,8184)),Promise.all([n.e(532),n.e(746)]).then(n.bind(n,746)),Promise.all([n.e(532),n.e(4561)]).then(n.bind(n,4561))]).then((function(e){var t=e[0].DocSearchModal;C=t}))}),[]),O=(0,o.useCallback)((function(){R().then((function(){L.current=document.createElement("div"),document.body.insertBefore(L.current,document.body.firstChild),P(!0)}))}),[R,P]),U=(0,o.useCallback)((function(){P(!1),L.current.remove()}),[P]),H=(0,o.useCallback)((function(e){R().then((function(){P(!0),A(e.key)}))}),[R,P,A]),V=(0,o.useRef)({navigate:function(e){var t=e.itemUrl;I.push(t)}}).current,j=(0,o.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:k(""+t.pathname+t.hash)})}))})).current,W=(0,o.useMemo)((function(){return function(e){return o.createElement(S,(0,a.Z)({},e,{onClose:U}))}}),[U]),z=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",v.docusaurusVersion),e}),[v.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,r=e.onInput,l=e.searchButtonRef;o.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),l&&l.current===document.activeElement&&r&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&r(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,r,l])}({isOpen:T,onOpen:O,onClose:U,onInput:H,searchButtonRef:D});var F=(0,_.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return o.createElement(o.Fragment,null,o.createElement(m.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+f.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement("div",{className:w},o.createElement(p,{onTouchStart:R,onFocus:R,onMouseOver:R,onClick:O,ref:D,translations:{buttonText:F,buttonAriaLabel:F}})),T&&(0,l.createPortal)(o.createElement(C,(0,a.Z)({onClose:U,initialScrollY:window.scrollY,initialQuery:M,navigator:V,transformItems:j,hitComponent:N,resultsFooterComponent:W,transformSearchClient:z},f,{searchParameters:E})),L.current))}const L=function(){var e=(0,c.Z)().siteConfig;return o.createElement(I,e.themeConfig.algolia)}},7387:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(5762),r=n(7782),o=n(6731);const l=function(){var e=(0,a.k6)(),t=(0,a.TH)(),n=(0,o.Z)().siteConfig,l=(n=void 0===n?{}:n).baseUrl;return{searchValue:r.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return l+"search?q="+encodeURIComponent(e)}}}}}]);