(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{242:function(t,e,n){"use strict";function r(t){return decodeURI(t).replace(e.hashRE,"").replace(e.extRE,"")}function i(t){const n=t.match(e.hashRE);if(n)return n[0]}function s(t){return e.outboundRE.test(t)}function a(t){if(s(t))return t;const n=t.match(e.hashRE),i=n?n[0]:"",a=r(t);return e.endingSlashRE.test(a)?t:a+".html"+i}function l(t,e,n){if(s(e))return{type:"external",path:e};n&&(e=function(t,e,n=!1){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const i=r(e);for(let e=0;e<t.length;e++)if(r(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:a(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function o(t){const e=u(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function u(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function c(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}n(92),Object.defineProperty(e,"__esModule",{value:!0}),e.resolveMatchingConfig=e.resolveNavLinkItem=e.groupHeaders=e.resolveSidebarItems=e.resolvePage=e.isActive=e.ensureExt=e.isTel=e.isMailto=e.isExternal=e.getHash=e.normalize=e.outboundRE=e.endingSlashRE=e.extRE=e.hashRE=void 0,e.hashRE=/#.*$/,e.extRE=/\.(md|html)$/,e.endingSlashRE=/\/$/,e.outboundRE=/^[a-z]+:/i,e.normalize=r,e.getHash=i,e.isExternal=s,e.isMailto=function(t){return/^mailto:/.test(t)},e.isTel=function(t){return/^tel:/.test(t)},e.ensureExt=a,e.isActive=function(t,e){const n=decodeURIComponent(t.hash),s=i(e);return(!s||n===s)&&r(t.path)===r(e)},e.resolvePage=l,e.resolveSidebarItems=function(t,e,n,r){const{pages:i,themeConfig:s}=n,a=r&&s.locales&&s.locales[r]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return o(t);const u=a.sidebar||s.sidebar;if(u){const{base:n,config:r}=c(e,u);return"auto"===r?o(t):r?r.map(t=>function t(e,n,r,i=1){if("string"==typeof e)return l(n,e,r);if(Array.isArray(e))return Object.assign(l(n,e[0],r),{title:e[1]});{const s=e.children||[];return 0===s.length&&e.path?Object.assign(l(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:s.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}}(t,i,n)):[]}return[]},e.groupHeaders=u,e.resolveNavLinkItem=function(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})},e.resolveMatchingConfig=c},378:function(t,e,n){"use strict";n.r(e);var r=n(242),i={name:"VPLink",props:{text:{type:String,required:!0},link:{type:String,required:!0},target:{type:String},rel:{type:String}},computed:{exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(r.isMailto)(this.link)||Object(r.isTel)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(r.isExternal)(this.link)&&!this.isBlankTarget},normalizedTarget(){return this.isNonHttpURI?null:this.target?this.target:Object(r.isExternal)(this.link)?"_blank":""},normalizedRel(){return this.isNonHttpURI||!1===this.rel?null:this.rel?this.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},s=n(15),a=Object(s.a)(i,(function(){var t=this,e=t._self._c;return t.isInternal?e("RouterLink",{staticClass:"vp-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._t("before"),t._v("\n  "+t._s(t.text)+"\n  "),t._t("after")],2):e("a",{staticClass:"vp-link external",attrs:{href:t.link,target:t.normalizedTarget,rel:t.normalizedRel},on:{focusout:t.focusoutAction}},[t._t("before"),t._v("\n  "+t._s(t.text)+"\n  "),t.isBlankTarget?e("VPIconExternalLink"):t._e(),t._v(" "),t._t("after")],2)}),[],!1,null,null,null);e.default=a.exports}}]);