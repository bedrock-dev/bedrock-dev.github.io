(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{242:function(t,e,n){"use strict";function r(t){return decodeURI(t).replace(e.hashRE,"").replace(e.extRE,"")}function i(t){const n=t.match(e.hashRE);if(n)return n[0]}function s(t){return e.outboundRE.test(t)}function a(t){if(s(t))return t;const n=t.match(e.hashRE),i=n?n[0]:"",a=r(t);return e.endingSlashRE.test(a)?t:a+".html"+i}function o(t,e,n){if(s(e))return{type:"external",path:e};n&&(e=function(t,e,n=!1){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const i=r(e);for(let e=0;e<t.length;e++)if(r(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:a(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function l(t){const e=c(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function c(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function u(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}n(92),Object.defineProperty(e,"__esModule",{value:!0}),e.resolveMatchingConfig=e.resolveNavLinkItem=e.groupHeaders=e.resolveSidebarItems=e.resolvePage=e.isActive=e.ensureExt=e.isTel=e.isMailto=e.isExternal=e.getHash=e.normalize=e.outboundRE=e.endingSlashRE=e.extRE=e.hashRE=void 0,e.hashRE=/#.*$/,e.extRE=/\.(md|html)$/,e.endingSlashRE=/\/$/,e.outboundRE=/^[a-z]+:/i,e.normalize=r,e.getHash=i,e.isExternal=s,e.isMailto=function(t){return/^mailto:/.test(t)},e.isTel=function(t){return/^tel:/.test(t)},e.ensureExt=a,e.isActive=function(t,e){const n=decodeURIComponent(t.hash),s=i(e);return(!s||n===s)&&r(t.path)===r(e)},e.resolvePage=o,e.resolveSidebarItems=function(t,e,n,r){const{pages:i,themeConfig:s}=n,a=r&&s.locales&&s.locales[r]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return l(t);const c=a.sidebar||s.sidebar;if(c){const{base:n,config:r}=u(e,c);return"auto"===r?l(t):r?r.map(t=>function t(e,n,r,i=1){if("string"==typeof e)return o(n,e,r);if(Array.isArray(e))return Object.assign(o(n,e[0],r),{title:e[1]});{const s=e.children||[];return 0===s.length&&e.path?Object.assign(o(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:s.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}}(t,i,n)):[]}return[]},e.groupHeaders=c,e.resolveNavLinkItem=function(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})},e.resolveMatchingConfig=u},248:function(t,e){t.exports=function(t){return null==t}},254:function(t,e,n){},283:function(t,e,n){var r=n(12),i=n(6),s=n(11);t.exports=function(t){return"string"==typeof t||!i(t)&&s(t)&&"[object String]"==r(t)}},284:function(t,e,n){"use strict";n(254)},296:function(t,e,n){"use strict";n.r(e);n(92);var r=n(242),i=n(283),s=n.n(i),a=n(248),o=n.n(a);const l={title:"N/A",path:"N/A",class:"noop"};var c={name:"PageNav",props:["sidebarItems"],computed:{prev(){return p(u.PREV,this)||l},next(){return p(u.NEXT,this)||l}}};const u={NEXT:{resolveLink:function(t,e){return h(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return h(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function p(t,{$themeConfig:e,$page:n,$route:i,$site:a,sidebarItems:l}){const{resolveLink:c,getThemeLinkConfig:u,getPageLinkConfig:p}=t,h=u(e),f=p(n),g=o()(f)?h:f;return!1===g?void 0:s()(g)?Object(r.resolvePage)(a.pages,g,i.path):c(n,l)}function h(t,e,n){const r=[];!function t(e,n){for(let r=0,i=e.length;r<i;r++)"group"===e[r].type?t(e[r].children||[],n):n.push(e[r])}(e,r);for(let e=0;e<r.length;e++){const i=r[e];if("page"===i.type&&i.path===decodeURIComponent(t.path))return r[e+n]}}var f=c,g=(n(284),n(15)),v=Object(g.a)(f,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("div",{staticClass:"inner"},[t.prev?e("VPLink",{class:["prev",t.prev.class],attrs:{text:t.prev.title||t.prev.path,link:t.prev.path}},[e("span",{attrs:{slot:"before"},slot:"before"},[t._v("←")]),t._v(" "),e("span",{attrs:{slot:"after"},slot:"after"},[e("br"),t._v(" "),e("span",{staticClass:"prev-link"},[t._v(t._s(t.prev.path))])])]):t._e(),t._v(" "),t.next?e("VPLink",{class:["next",t.next.class],attrs:{text:t.next.title||t.next.path,link:t.next.path}},[e("span",{attrs:{slot:"after"},slot:"after"},[t._v("\n        →\n        "),e("br"),t._v(" "),e("span",{staticClass:"next-link"},[t._v(t._s(t.next.path))])])]):t._e()],1)]):t._e()}),[],!1,null,null,null);e.default=v.exports}}]);