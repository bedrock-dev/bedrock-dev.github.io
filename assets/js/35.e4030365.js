(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{275:function(t,a,s){},307:function(t,a,s){"use strict";s(275)},331:function(t,a,s){"use strict";s.r(a);var e={computed:{data(){return this.$page.frontmatter}}},i=(s(307),s(15)),o=Object(i.a)(e,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"home"},[a("section",{attrs:{id:"hero"}},[t.data.heroImage?a("img",{staticClass:"hero-img",attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),a("br"),t._v(" "),t.data.heroText?a("h1",{staticClass:"heroText"},[a("span",[t._v("\n        "+t._s(t.data.heroText||t.$description||"Welcome to your VuePress site")+"\n      ")])]):a("Content",{staticClass:"heroText",attrs:{"slot-key":"heroText"}}),t._v(" "),t.data.tagline?a("p",{staticClass:"tagline"},[t._v("\n      "+t._s(t.data.tagline)+"\n    ")]):a("Content",{staticClass:"tagline",attrs:{"slot-key":"tagline"}}),t._v(" "),a("p",{staticClass:"actions"},[t.data.actionText&&t.data.actionLink?a("VPLink",{staticClass:"action-link",attrs:{text:t.data.actionText,link:t.data.actionLink}},[a("svg",{staticClass:"icon",attrs:{slot:"after",xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24"},slot:"after"},[a("path",{attrs:{d:"M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"}})])]):t._e(),t._v(" "),t.data.subActionText&&t.data.subActionLink?a("VPLink",{staticClass:"sub-action-link",attrs:{text:t.data.subActionText,link:t.data.subActionLink}}):t._e()],1)],1),t._v(" "),a("section",{directives:[{name:"show",rawName:"v-show",value:t.data.sponsors,expression:"data.sponsors"}],attrs:{id:"special-sponsor"}},[a("span",{staticClass:"special-sponsor-title"},[t._v(t._s(t.data.sponsorsText||"Special Sponsor"))]),t._v(" "),t._l(t.data.sponsors,(function(s){return a("span",{key:s.title,staticClass:"special-sponsor-item"},[a("span",[t._v(t._s(s.title))]),t._v(" "),a("a",{attrs:{href:s.link}},[a("img",{attrs:{src:s.img}})])])}))],2),t._v(" "),t.data.features?a("section",{staticClass:"vt-box-container",attrs:{id:"highlights"}},t._l(t.data.features,(function(s){return a("div",{key:s.title,staticClass:"vt-box"},[a("h3",[t._v(t._s(s.title))]),t._v(" "),a("p",[t._v(t._s(s.details))])])})),0):t._e(),t._v(" "),t.data.footer?a("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):a("Content",{staticClass:"footer",attrs:{"slot-key":"footer"}})],1)}),[],!1,null,"8afdf2de",null);a.default=o.exports}}]);