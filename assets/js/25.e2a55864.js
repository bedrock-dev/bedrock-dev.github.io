(window.webpackJsonp=window.webpackJsonp||[]).push([[25,46,49],{242:function(t,e,n){"use strict";function i(t){return decodeURI(t).replace(e.hashRE,"").replace(e.extRE,"")}function a(t){const n=t.match(e.hashRE);if(n)return n[0]}function s(t){return e.outboundRE.test(t)}function r(t){if(s(t))return t;const n=t.match(e.hashRE),a=n?n[0]:"",r=i(t);return e.endingSlashRE.test(r)?t:r+".html"+a}function l(t,e,n){if(s(e))return{type:"external",path:e};n&&(e=function(t,e,n=!1){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const a=e.split("/");n&&a[a.length-1]||a.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?a.pop():"."!==e&&a.push(e)}""!==a[0]&&a.unshift("");return a.join("/")}(e,n));const a=i(e);for(let e=0;e<t.length;e++)if(i(t[e].regularPath)===a)return Object.assign({},t[e],{type:"page",path:r(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function o(t){const e=c(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function c(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function d(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(i)))return{base:i,config:e[i]};var n;return{}}n(92),Object.defineProperty(e,"__esModule",{value:!0}),e.resolveMatchingConfig=e.resolveNavLinkItem=e.groupHeaders=e.resolveSidebarItems=e.resolvePage=e.isActive=e.ensureExt=e.isTel=e.isMailto=e.isExternal=e.getHash=e.normalize=e.outboundRE=e.endingSlashRE=e.extRE=e.hashRE=void 0,e.hashRE=/#.*$/,e.extRE=/\.(md|html)$/,e.endingSlashRE=/\/$/,e.outboundRE=/^[a-z]+:/i,e.normalize=i,e.getHash=a,e.isExternal=s,e.isMailto=function(t){return/^mailto:/.test(t)},e.isTel=function(t){return/^tel:/.test(t)},e.ensureExt=r,e.isActive=function(t,e){const n=decodeURIComponent(t.hash),s=a(e);return(!s||n===s)&&i(t.path)===i(e)},e.resolvePage=l,e.resolveSidebarItems=function(t,e,n,i){const{pages:a,themeConfig:s}=n,r=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||r.sidebar||s.sidebar))return o(t);const c=r.sidebar||s.sidebar;if(c){const{base:n,config:i}=d(e,c);return"auto"===i?o(t):i?i.map(t=>function t(e,n,i,a=1){if("string"==typeof e)return l(n,e,i);if(Array.isArray(e))return Object.assign(l(n,e[0],i),{title:e[1]});{const s=e.children||[];return 0===s.length&&e.path?Object.assign(l(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:s.map(e=>t(e,n,i,a+1)),collapsable:!1!==e.collapsable}}}(t,a,n)):[]}return[]},e.groupHeaders=c,e.resolveNavLinkItem=function(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})},e.resolveMatchingConfig=d},248:function(t,e){t.exports=function(t){return null==t}},253:function(t,e,n){},266:function(t,e,n){"use strict";n.r(e);var i={name:"FluentWindowDevEdit20Regular"},a=n(15),s=Object(a.a)(i,(function(){var t=this._self._c;return t("svg",{attrs:{width:"1em",height:"1em",viewBox:"0 0 20 20"}},[t("g",{attrs:{fill:"none"}},[t("path",{attrs:{d:"M4.5 2A2.5 2.5 0 0 0 2 4.5v9A2.5 2.5 0 0 0 4.5 16h4.975c.11-.361.283-.7.51-1H4.5A1.5 1.5 0 0 1 3 13.5V5.999h12v3.944l.102-.102c.266-.267.572-.47.898-.61V4.5A2.5 2.5 0 0 0 13.5 2h-9zM2.999 4.499a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v.5h-12v-.5zm5.353 2.646a.5.5 0 0 1 0 .707L6.206 10l2.146 2.146a.5.5 0 0 1-.707.707l-2.5-2.5a.5.5 0 0 1 0-.707l2.5-2.5a.5.5 0 0 1 .707 0zm1.794 5a.5.5 0 0 0 .708.707l2.5-2.5a.5.5 0 0 0 0-.707l-2.5-2.5a.5.5 0 0 0-.708.707L12.293 10l-2.147 2.146zm5.663-1.597l-4.83 4.83a2.197 2.197 0 0 0-.577 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.078l1.498-.374c.386-.097.739-.296 1.02-.578l4.83-4.83a1.87 1.87 0 0 0-2.645-2.644z",fill:"currentColor"}})])])}),[],!1,null,null,null);e.default=s.exports},270:function(t,e,n){"use strict";n.r(e);var i=n(15),a=Object(i.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{width:"1em",height:"1em",viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1a6.887 6.887 0 0 0 0 9.8c2.73 2.7 7.15 2.7 9.88 0c1.36-1.35 2.04-2.92 2.04-4.9h2c0 1.98-.88 4.55-2.64 6.29c-3.51 3.48-9.21 3.48-12.72 0c-3.5-3.47-3.53-9.11-.02-12.58a8.987 8.987 0 0 1 12.65 0L21 3v7.12M12.5 8v4.25l3.5 2.08l-.72 1.21L11 13V8h1.5z",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=a.exports},282:function(t,e,n){"use strict";n(253)},295:function(t,e,n){"use strict";n.r(e);var i=n(248),a=n.n(i),s=n(242),r=n(266),l=n(270),o={name:"PageEdit",components:{VPIconEdit:r.default,VPIconLastUpdated:l.default},computed:{enableLastUpdated(){return(!this.$frontmatter||!1!==this.$frontmatter.lastUpdated)&&!!this.$page.lastUpdated},lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=a()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:n="",docsBranch:i="master",docsRepo:s=e}=this.$site.themeConfig;return t&&s&&this.$page.relativePath?this.createEditLink(e,s,n,i,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,n,i,a){if(/bitbucket.org/.test(e)){return e.replace(s.endingSlashRE,"")+"/src"+`/${i}/`+(n?n.replace(s.endingSlashRE,"")+"/":"")+a+`?mode=edit&spa=0&at=${i}&fileviewer=file-view-default`}if(/gitlab.com/.test(e)){return e.replace(s.endingSlashRE,"")+"/-/edit"+`/${i}/`+(n?n.replace(s.endingSlashRE,"")+"/":"")+a}return(s.outboundRE.test(e)?e:"https://github.com/"+e).replace(s.endingSlashRE,"")+"/edit"+`/${i}/`+(n?n.replace(s.endingSlashRE,"")+"/":"")+a}}},c=(n(282),n(15)),d=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("VPIconEdit",{staticClass:"edit-icon"}),t._v(" "),e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))])],1):t._e(),t._v(" "),t.enableLastUpdated?e("div",{staticClass:"last-updated"},[e("VPIconLastUpdated",{staticClass:"last-updated-icon"}),t._v(" "),e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])],1):t._e()])}),[],!1,null,null,null);e.default=d.exports}}]);