(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{242:function(t,e,n){"use strict";function i(t){return decodeURI(t).replace(e.hashRE,"").replace(e.extRE,"")}function r(t){const n=t.match(e.hashRE);if(n)return n[0]}function s(t){return e.outboundRE.test(t)}function o(t){if(s(t))return t;const n=t.match(e.hashRE),r=n?n[0]:"",o=i(t);return e.endingSlashRE.test(o)?t:o+".html"+r}function a(t,e,n){if(s(e))return{type:"external",path:e};n&&(e=function(t,e,n=!1){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const r=e.split("/");n&&r[r.length-1]||r.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?r.pop():"."!==e&&r.push(e)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));const r=i(e);for(let e=0;e<t.length;e++)if(i(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:o(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function l(t){const e=u(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function u(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function c(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(i)))return{base:i,config:e[i]};var n;return{}}n(92),Object.defineProperty(e,"__esModule",{value:!0}),e.resolveMatchingConfig=e.resolveNavLinkItem=e.groupHeaders=e.resolveSidebarItems=e.resolvePage=e.isActive=e.ensureExt=e.isTel=e.isMailto=e.isExternal=e.getHash=e.normalize=e.outboundRE=e.endingSlashRE=e.extRE=e.hashRE=void 0,e.hashRE=/#.*$/,e.extRE=/\.(md|html)$/,e.endingSlashRE=/\/$/,e.outboundRE=/^[a-z]+:/i,e.normalize=i,e.getHash=r,e.isExternal=s,e.isMailto=function(t){return/^mailto:/.test(t)},e.isTel=function(t){return/^tel:/.test(t)},e.ensureExt=o,e.isActive=function(t,e){const n=decodeURIComponent(t.hash),s=r(e);return(!s||n===s)&&i(t.path)===i(e)},e.resolvePage=a,e.resolveSidebarItems=function(t,e,n,i){const{pages:r,themeConfig:s}=n,o=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||o.sidebar||s.sidebar))return l(t);const u=o.sidebar||s.sidebar;if(u){const{base:n,config:i}=c(e,u);return"auto"===i?l(t):i?i.map(t=>function t(e,n,i,r=1){if("string"==typeof e)return a(n,e,i);if(Array.isArray(e))return Object.assign(a(n,e[0],i),{title:e[1]});{const s=e.children||[];return 0===s.length&&e.path?Object.assign(a(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:s.map(e=>t(e,n,i,r+1)),collapsable:!1!==e.collapsable}}}(t,r,n)):[]}return[]},e.groupHeaders=u,e.resolveNavLinkItem=function(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})},e.resolveMatchingConfig=c},249:function(t,e,n){"use strict";n.r(e);var i=n(242),r={name:"NavLink",props:{item:{required:!0}},computed:{ensuredLink(){return Object(i.ensureExt)(this.item.link)}},methods:{focusoutAction(){this.$emit("focusout")}}},s=n(15),o=Object(s.a)(r,(function(){return(0,this._self._c)("VPLink",{staticClass:"nav-link",attrs:{text:this.item.text,link:this.ensuredLink,target:this.item.target,rel:this.item.rel},on:{focusout:this.focusoutAction}})}),[],!1,null,null,null);e.default=o.exports}}]);