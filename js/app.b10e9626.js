(function(t){function e(e){for(var n,r,c=e[0],l=e[1],o=e[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,o||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},i={app:0},s=[];function c(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-2e00848c":"ef9d1c0a","chunk-2d0b5d64":"a751eab1","chunk-2d0c806a":"837098bd","chunk-2d0e57b0":"4e847c82","chunk-2d0e9d07":"e4d6a21b","chunk-2d0efd5b":"a205937f","chunk-54c92655":"41352d0b","chunk-03bc0a16":"4dc90c83","chunk-0a70b565":"534802de","chunk-2d0ba71b":"0400b6f2","chunk-2d0c51ab":"d8852eb5","chunk-2d0d0579":"1af2fec4","chunk-2d2178b7":"d259068c","chunk-2d229d2a":"d636e92f","chunk-5901ce8a":"4f34e2b7","chunk-74f1538a":"18923a58","chunk-93702ba6":"c7e4a99c","chunk-30a6a434":"0822d1b5","chunk-3e331614":"4419ef2e","chunk-6a18ac94":"dbf6a9e7","chunk-74bff137":"ceff6e04","chunk-32040d08":"b71811df"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-54c92655":1,"chunk-03bc0a16":1,"chunk-5901ce8a":1,"chunk-74f1538a":1,"chunk-93702ba6":1,"chunk-30a6a434":1,"chunk-3e331614":1,"chunk-6a18ac94":1,"chunk-32040d08":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-2e00848c":"31d6cfe0","chunk-2d0b5d64":"31d6cfe0","chunk-2d0c806a":"31d6cfe0","chunk-2d0e57b0":"31d6cfe0","chunk-2d0e9d07":"31d6cfe0","chunk-2d0efd5b":"31d6cfe0","chunk-54c92655":"73d90aa2","chunk-03bc0a16":"b892dadf","chunk-0a70b565":"31d6cfe0","chunk-2d0ba71b":"31d6cfe0","chunk-2d0c51ab":"31d6cfe0","chunk-2d0d0579":"31d6cfe0","chunk-2d2178b7":"31d6cfe0","chunk-2d229d2a":"31d6cfe0","chunk-5901ce8a":"0e6fe10d","chunk-74f1538a":"e266095d","chunk-93702ba6":"afbb8cca","chunk-30a6a434":"30fa0b0d","chunk-3e331614":"23c9229d","chunk-6a18ac94":"ce9e4fb0","chunk-74bff137":"31d6cfe0","chunk-32040d08":"874c2388"}[t]+".css",i=l.p+n,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var o=s[c],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===n||u===i))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){o=d[c],u=o.getAttribute("data-href");if(u===n||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[t],f.parentNode.removeChild(f),a(s)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=s);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(t);var d=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}i[t]=void 0}};var f=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/dkinternational/",l.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var f=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"04a3":function(t,e,a){},"0f12":function(t,e,a){"use strict";e["a"]={name:"Heading",inject:{heading:{default:function(){return{align:"left"}}}},provide:function(){return{heading:{align:this.align}}},props:{align:{type:String,default:function(){return this.heading.align}}},computed:{justify:function(){switch(this.align){case"center":return"center";case"right":return"end";default:return"start"}}}}},"0fc3":function(t,e,a){"use strict";a.r(e);a("99af"),a("a9e3");var n,r,i=a("2909"),s=a("d2eb"),c={name:"BaseSubtitle",extends:s["default"],props:{size:{type:String,default:"body-2"},mobileSize:{type:String,default:"body-1"},space:{type:[String,Number],default:0},tag:{type:String,default:"div"},weight:{type:[Number,String],default:"regular"}},computed:{classes:function(){return[].concat(Object(i["a"])(s["default"].computed.classes.call(this)),["grey--text"])}}},l=c,o=a("0c7c"),u=Object(o["a"])(l,n,r,!1,null,null,null);e["default"]=u.exports},"11f2":function(t,e,a){t.exports=a.p+"img/logo.c4e34493.jpg"},2403:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-theme-provider",{attrs:{dark:t.dark}},[a("v-container",{staticClass:"pa-0"},[a("v-row",{attrs:{justify:t.justify,"no-gutters":""}},[t.icon?a("v-col",{staticClass:"mb-4",class:"text-"+t.align,attrs:{cols:"12"}},[a("base-icon",{attrs:{color:t.color}},[t._v(" "+t._s(t.icon)+" ")])],1):t._e(),t.title||t.subtitle?a("v-col",{attrs:{cols:t.callout?9:12}},[t.subtitle?a("base-subtitle",{attrs:{title:t.subtitle,space:"1"}}):t._e(),a("base-title",{staticClass:"text-uppercase",attrs:{title:t.title,space:"1"}}),a("base-divider",{attrs:{color:t.color}}),t.text||t.$slots.default?a("base-body",{attrs:{text:t.text,space:"6"}},[t._t("default")],2):t._e()],1):t._e(),t.callout?a("v-col",{attrs:{cols:"2"}},[a("div",{staticClass:"display-3 grey--text text--lighten-4 font-weight-bold pr-8",domProps:{textContent:t._s(t.callout)}})]):t._e()],1)],1)],1)},r=[],i=a("0f12"),s={name:"BaseInfoCard",mixins:[i["a"]],props:{dark:Boolean,callout:String,color:{type:String,default:"primary"},icon:String,subtitle:String,text:String,title:String}},c=s,l=a("0c7c"),o=a("6544"),u=a.n(o),d=a("62ad"),f=a("a523"),h=a("0fd9"),p=a("480e"),b=Object(l["a"])(c,n,r,!1,null,null,null);e["default"]=b.exports;u()(b,{VCol:d["a"],VContainer:f["a"],VRow:h["a"],VThemeProvider:p["a"]})},"2e03":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("base-info-card",{attrs:{title:t.title,subtitle:t.subtitle,space:"4",color:"primary"}}),a("base-text-field",{attrs:{label:"Name"}}),a("base-text-field",{attrs:{label:"Email"}}),a("base-text-field",{attrs:{label:"Subject"}}),a("base-textarea",{staticClass:"mb-6",attrs:{label:"Your Need & Description"}}),a("base-btn",{attrs:{color:t.theme.isDark?"white":"accent",href:"mailto:shop@vuetifyjs.com?subject=Zero%20Theme%20Question",outlined:"",target:"_blank"}},[t._v(" Send message ")])],1)},r=[],i={name:"BaseContactForm",inject:["theme"],props:{subtitle:String,title:{type:String,default:"MAIL US YOUR MESSAGE"}}},s=i,c=a("0c7c"),l=Object(c["a"])(s,n,r,!1,null,null,null);e["default"]=l.exports},3648:function(t,e,a){"use strict";a.r(e);var n,r,i=a("d2eb"),s={name:"BaseTitle",extends:i["default"],props:{size:{type:String,default:"headline"},sizeMobile:{type:String,default:"title"},weight:{type:String,default:"bold"}}},c=s,l=a("0c7c"),o=Object(l["a"])(c,n,r,!1,null,null,null);e["default"]=o.exports},"45d7":function(t,e,a){"use strict";a.r(e);var n,r,i=a("d2eb"),s=a("0f12"),c={name:"BaseTitle",extends:i["default"],mixins:[s["a"]],props:{size:{type:String,default:"title"},mobileSize:{type:String,default:"subtitle-1"},tag:{type:String,default:"h3"},weight:{type:String,default:"bold"}}},l=c,o=a("0c7c"),u=Object(o["a"])(l,n,r,!1,null,null,null);e["default"]=u.exports},"4f78":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-icon",t._g(t._b({attrs:{size:t.size}},"v-icon",t.$attrs,!1),t.$listeners),[t._t("default")],2)},r=[],i=(a("a9e3"),{name:"BaseIcon",props:{size:{type:[Number,String],default:56}}}),s=i,c=a("0c7c"),l=a("6544"),o=a.n(l),u=a("132d"),d=Object(c["a"])(s,n,r,!1,null,null,null);e["default"]=d.exports;o()(d,{VIcon:u["a"]})},5382:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",t._g(t._b({staticClass:"font-weight-bold",attrs:{color:t.color,depressed:t.depressed,"min-width":t.minWidth,tile:t.tile,"x-large":""}},"v-btn",t.$attrs,!1),t.$listeners),[t._t("default")],2)},r=[],i=(a("a9e3"),{name:"BaseBtn",props:{color:{type:String,default:"primary"},depressed:{type:Boolean,default:!0},minWidth:{type:[Number,String],default:164},tile:{type:Boolean,default:!0}}}),s=i,c=a("0c7c"),l=a("6544"),o=a.n(l),u=a("8336"),d=Object(c["a"])(s,n,r,!1,null,null,null);e["default"]=d.exports;o()(d,{VBtn:u["a"]})},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-fade-transition",{attrs:{mode:"out-in"}},[a("router-view")],1)},i=[],s={name:"App",metaInfo:{title:"App",titleTemplate:"%s | DK International",htmlAttrs:{lang:"en"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}]}},c=s,l=(a("cf25"),a("0c7c")),o=a("6544"),u=a.n(o),d=a("0789"),f=Object(l["a"])(c,r,i,!1,null,null,null),h=f.exports;u()(f,{VFadeTransition:d["b"]});a("d3b7");var p=a("8c4f");n["a"].use(p["a"]);var b=new p["a"]({mode:"history",base:"/dkinternational/",scrollBehavior:function(t,e,a){return t.hash?{selector:t.hash}:a||{x:0,y:0}},routes:[{path:"/",component:function(){return a.e("chunk-54c92655").then(a.bind(null,"4e4d"))},children:[{path:"",name:"Home",component:function(){return Promise.all([a.e("chunk-2e00848c"),a.e("chunk-2d0e57b0")]).then(a.bind(null,"9553"))}},{path:"about",name:"About",component:function(){return Promise.all([a.e("chunk-2e00848c"),a.e("chunk-2d0e9d07")]).then(a.bind(null,"8eae"))},meta:{src:a("a46c")}},{path:"services",name:"Services",component:function(){return Promise.all([a.e("chunk-2e00848c"),a.e("chunk-2d0c806a")]).then(a.bind(null,"52b9"))},meta:{src:a("ca4a")}},{path:"contact-us",name:"Contact",component:function(){return Promise.all([a.e("chunk-2e00848c"),a.e("chunk-2d0efd5b")]).then(a.bind(null,"9a96"))},meta:{src:a("a53d")}},{path:"*",name:"FourOhFour",component:function(){return Promise.all([a.e("chunk-2e00848c"),a.e("chunk-2d0b5d64")]).then(a.bind(null,"1b30"))}}]}]}),m=b,v=a("f309"),g=a("62ad"),y=a("0fd9");n["a"].use(v["a"],{components:{VCol:g["a"],VRow:y["a"]}});var x,k=new v["a"]({theme:{dark:!1,themes:{light:{primary:"#42a5f6",secondary:"#050b1f",accent:"#204165"},dark:{}}}}),_=(a("ac1f"),a("5319"),a("ddb0"),a("b85c")),S=a("8103"),j=a.n(S),w=a("bba4"),B=a.n(w),C=a("e51e"),$=Object(_["a"])(C.keys());try{for($.s();!(x=$.n()).done;){var O=x.value,z=C(O),E=O.replace(/index.js/,"").replace(/^\.\//,"").replace(/\.\w+$/,""),T=j()(B()(E));n["a"].component("Base".concat(T),z.default||z)}}catch(V){$.e(V)}finally{$.f()}var N=a("58ca");n["a"].use(N["a"],{refreshOnceOnNavigation:!0});var P=a("27d6"),A=a.n(P);A.a.load({google:{families:["PT+Sans:400,700&display=swap","Work+Sans:100,300,400,500,700,900&display=swap"]}}),n["a"].config.productionTip=!1,new n["a"]({router:m,vuetify:k,render:function(t){return t(h)}}).$mount("#app")},"67bd":function(t,e,a){"use strict";var n=a("6a79"),r=a.n(n);r.a},"6a79":function(t,e,a){},"6cc5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"base-avatar d-inline-flex",class:t.classes},[t.outlined?a("v-avatar",{staticClass:"base-avatar__outline",staticStyle:{opacity:".4"},style:t.styles,attrs:{color:t.color||"grey lighten-3",size:t.outlineSize}}):t._e(),a("v-avatar",t._g(t._b({staticClass:"base-avatar__avatar",attrs:{color:t.color||"white",size:t.size}},"v-avatar",t.$attrs,!1),t.$listeners),[t.icon?a("base-icon",{attrs:{dark:t.dark,size:t.size/2}},[t._v(" "+t._s(t.icon)+" ")]):t._e()],1)],1)},r=[],i=(a("99af"),a("a9e3"),{name:"BaseAvatar",props:{color:String,dark:Boolean,icon:String,outlined:Boolean,size:{type:[Number,String],default:56}},data:function(){return{multiply:6}},computed:{classes:function(){return[this.outlined&&"base-avatar--outlined"]},outlineSize:function(){return Number(this.size)+this.size/this.multiply},styles:function(){var t=this.size/(2*this.multiply);return{margin:"-".concat(t,"px 0 0 -").concat(t,"px")}}}}),s=i,c=(a("71aa"),a("0c7c")),l=a("6544"),o=a.n(l),u=a("8212"),d=Object(c["a"])(s,n,r,!1,null,null,null);e["default"]=d.exports;o()(d,{VAvatar:u["a"]})},"71aa":function(t,e,a){"use strict";var n=a("04a3"),r=a.n(n);r.a},"71d0":function(t,e,a){},7570:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-img",t._g(t._b({},"v-img",t.$attrs,!1),t.$listeners),[t._t("default")],2)},r=[],i={name:"BaseImage"},s=i,c=a("0c7c"),l=a("6544"),o=a.n(l),u=a("adda"),d=Object(c["a"])(s,n,r,!1,null,null,null);e["default"]=d.exports;o()(d,{VImg:u["a"]})},a46c:function(t,e,a){t.exports=a.p+"img/about.3946684e.jpg"},a53d:function(t,e,a){t.exports=a.p+"img/contact.68e57a91.jpg"},a59d:function(t,e,a){},abc8:function(t,e,a){"use strict";var n=a("71d0"),r=a.n(n);r.a},adfa:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.tag,t._g(t._b({tag:"component",staticClass:"base-body body-1",class:t.classes,style:t.styles},"component",t.$attrs,!1),t.$listeners),[t.text?a("div",{domProps:{textContent:t._s(t.text)}}):t.html?a("div",{domProps:{innerHTML:t._s(t.html)}}):t._t("default")],2)},r=[],i=(a("a9e3"),a("0f12")),s={name:"BaseBody",mixins:[i["a"]],inject:["theme"],props:{html:String,maxWidth:{type:[Number,String],default:void 0},space:{type:[Number,String],default:10},tag:{type:String,default:"p"},text:String},computed:{classes:function(){return["grey--text",this.theme.isDark?"text--lighten-1":"text--darken-1","text-".concat(this.heading.align),"mb-".concat(this.space)]},styles:function(){return{maxWidth:"".concat(this.maxWidth,"px")}}}},c=s,l=a("0c7c"),o=Object(l["a"])(c,n,r,!1,null,null,null);e["default"]=o.exports},afb9:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-responsive",t._g(t._b({staticClass:"base-divider",class:t.classes,attrs:{"max-width":"28"}},"v-responsive",t.$attrs,!1),t.$listeners),[a("v-divider")],1)},r=[],i=(a("a9e3"),a("0f12")),s={name:"BaseDivider",mixins:[i["a"]],props:{color:String,dense:Boolean,space:{type:[Number,String],default:6}},computed:{classes:function(){return[this.color,this.margin,"mb-".concat(this.space),this.dense&&"base-divider--dense"]},margin:function(){switch(this.align){case"left":return"mr-auto";case"right":return"ml-auto";default:return"mx-auto"}}}},c=s,l=(a("f331"),a("0c7c")),o=a("6544"),u=a.n(o),d=a("ce7e"),f=a("6b53"),h=Object(l["a"])(c,n,r,!1,null,null,null);e["default"]=h.exports;u()(h,{VDivider:d["a"],VResponsive:f["a"]})},b066:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-theme-provider",{attrs:{dark:t.dark}},[a("div",[a("base-info-card",{attrs:{title:t.title,color:"primary"}},[t._t("default")],2),t._l(t.business,(function(e,n){var r=e.icon,i=e.text,s=e.title;return[a("base-avatar-card",{key:n,attrs:{icon:r,outlined:!1,title:t.dense?void 0:s,color:"transparent",horizontal:"",space:"0"}},[a("div",{domProps:{innerHTML:t._s(i)}})]),n+1!==t.business.length?a("v-divider",{key:"divider-"+n,staticClass:"my-2"}):t._e()]}))],2)])},r=[],i={name:"BaseBusinessContact",props:{dark:Boolean,dense:Boolean,title:String},data:function(){return{business:[{icon:"mdi-map-marker-outline",title:"Address",text:" 广州市海珠区华新一街12号财智大厦2711房 Room 2711, caizhi building, no.12, huaxin street, haizhu district, Guangzhou China"},{icon:"mdi-cellphone",title:"Phone",text:"+86 13450260513<br>+86 2084500094"},{icon:"mdi-email",title:"Email",text:"dilbdr4@hotmail.com<br>dkintrtrading@outlook.com"}]}}},s=i,c=a("0c7c"),l=a("6544"),o=a.n(l),u=a("ce7e"),d=a("480e"),f=Object(c["a"])(s,n,r,!1,null,null,null);e["default"]=f.exports;o()(f,{VDivider:u["a"],VThemeProvider:d["a"]})},c034:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",t._g(t._b({staticClass:"mb-4",attrs:{height:t.height,width:t.width,flat:"",tile:""},on:{click:function(e){return t.$emit("click")}}},"v-card",t.$attrs,!1),t.$listeners),[t._t("default")],2),t.title?a("base-title",{staticClass:"text-uppercase",attrs:{title:t.title,size:"subtitle-1",space:"0"}}):t._e(),t.subtitle?a("base-subtitle",{attrs:{title:t.subtitle}}):t._e()],1)},r=[],i=(a("a9e3"),{name:"BaseCard",inheritAttrs:!1,props:{height:[Number,String],width:[Number,String],subtitle:String,title:String}}),s=i,c=a("0c7c"),l=a("6544"),o=a.n(l),u=a("b0af"),d=Object(c["a"])(s,n,r,!1,null,null,null);e["default"]=d.exports;o()(d,{VCard:u["a"]})},c493:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-theme-provider",{attrs:{dark:t.dark}},[a("div",[a("base-info-card",{staticClass:"text-justify",attrs:{title:"KEEP IN TOUCH WITH US",pace:"6"}},[t._v(" DK international is a company to make the trade easy and safe. We have a good connection and collaboration with the best companies all over the china. So feel free to contact and trade with us to promote your business to the next level. ")]),a("base-business-contact",{attrs:{dense:""}})],1)])},r=[],i={name:"BaseBusinessInfo",props:{dark:Boolean},data:function(){return{business:[{icon:"mdi-map-marker-outline",title:"Address",text:"8553 N. Beach St. Ste. 227<br>Fort Worth, Texas 76137"},{icon:"mdi-cellphone",title:"Phone",text:"01 (800) 433 744<br>01 (800) 433 633"},{icon:"mdi-email",title:"Email",text:"john@vuetifyjs.com<br>heather@vuetifyjs.com"}]}}},s=i,c=a("0c7c"),l=a("6544"),o=a.n(l),u=a("480e"),d=Object(c["a"])(s,n,r,!1,null,null,null);e["default"]=d.exports;o()(d,{VThemeProvider:u["a"]})},c7a8:function(t,e,a){},ca4a:function(t,e,a){t.exports=a.p+"img/pro.4393142f.jpg"},cd6f:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-2",class:t.classes},[t.icon?a("base-avatar",{staticClass:"mb-3",attrs:{color:t.color,dark:t.dark,icon:t.icon,outlined:t.outlined,size:t.size}}):t._e(),a("div",{class:t.horizontal&&t.title&&"ml-6"},[a("base-title",{staticClass:"text-uppercase",attrs:{title:t.title,space:"3"}}),t.text||t.$slots.default?a("base-body",{staticClass:"mx-auto",attrs:{space:t.horizontal?0:void 0,text:t.text,"max-width":"700"}},[t._t("default")],2):t._e()],1)],1)},r=[],i=(a("a9e3"),a("0f12")),s={name:"BaseAvatarCard",mixins:[i["a"]],props:{align:{type:String,default:"left"},color:String,dark:Boolean,horizontal:Boolean,icon:String,outlined:{type:Boolean,default:!0},space:{type:[Number,String],default:8},size:{type:[Number,String],default:72},text:String,title:String},computed:{classes:function(){var t=["mb-".concat(this.space)];return this.horizontal&&(t.push("d-flex"),this.$slots.default||this.text||t.push("align-center")),t}}},c=s,l=a("0c7c"),o=Object(l["a"])(c,n,r,!1,null,null,null);e["default"]=o.exports},cf25:function(t,e,a){"use strict";var n=a("c7a8"),r=a.n(n);r.a},d0eb:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-theme-provider",{attrs:{dark:t.dark}},[n("div",[n("base-img",{attrs:{src:a("11f2"),contain:"","max-width":"128","min-height":"78",width:"100%"}}),n("base-title",{attrs:{size:"body-1",space:"4",weight:"regular"}}),n("base-body",{staticClass:"text-justify"},[t._v(" DK international is a company to make the trade easy and safe. We have a good connection and collaboration with the best companies all over the china. So feel free to contact and trade with us to promote your business to the next level. ")])],1)])},r=[],i={name:"BaseInfo",props:{title:String,dark:Boolean},data:function(){return{business:[{icon:"mdi-map-marker-outline",title:"Address",text:"8553 N. Beach St. Ste. 227<br>Fort Worth, Texas 76137"},{icon:"mdi-cellphone",title:"Phone",text:"01 (800) 433 744<br>01 (800) 433 633"},{icon:"mdi-email",title:"Email",text:"john@vuetifyjs.com<br>heather@vuetifyjs.com"}]}}},s=i,c=a("0c7c"),l=a("6544"),o=a.n(l),u=a("480e"),d=Object(c["a"])(s,n,r,!1,null,null,null);e["default"]=d.exports;o()(d,{VThemeProvider:u["a"]})},d2eb:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.tag,t._g(t._b({tag:"component",class:t.classes},"component",t.$attrs,!1),t.$listeners),[t.title?[t._v(" "+t._s(t.title)+" ")]:t._t("default")],2)},r=[],i=(a("a9e3"),{name:"BaseHeading",inject:{theme:{default:function(){return{isDark:!1}}},heading:{default:function(){return{align:"left"}}}},provide:function(){return{heading:{align:this.align}}},props:{align:{type:String,default:function(){return this.heading.align}},dense:{type:Boolean,default:function(){return this.isDense}},size:{type:String,default:"display-2"},space:{type:[Number,String],default:4},mobileSize:{type:String,default:"display-1"},mobileBreakPoint:{type:[Number,String],default:768},tag:{type:String,default:"h1"},title:String,weight:{type:String,default:"black"}},computed:{classes:function(){var t=[this.fontSize,"font-weight-".concat(this.weight),"mb-".concat(this.space),"text-".concat(this.align),this.theme.isDark&&"white--text"];return t},fontSize:function(){return this.$vuetify.breakpoint.width>=this.mobileBreakPoint?this.size:this.mobileSize}}}),s=i,c=a("0c7c"),l=Object(c["a"])(s,n,r,!1,null,null,null);e["default"]=l.exports},db4f:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"base-section-heading",class:t.classes},[t.icon?a("base-avatar",{staticClass:"mb-4",attrs:{icon:t.icon,outlined:t.outlined,color:"primary",dark:""}}):t._e(),t.subtitle?a("base-subtitle",{attrs:{title:t.subtitle,space:"1",tag:"h2"}}):t._e(),t.title?a("base-subheading",{staticClass:"text-uppercase",attrs:{align:t.align,title:t.title,space:"2"}}):t._e(),a("base-divider",{attrs:{color:t.color}}),t.$slots.default||t.text?a("base-body",{staticClass:"mx-auto",attrs:{"max-width":"700"}},[t.$slots.default?t._t("default"):[t._v(" "+t._s(t.text)+" ")]],2):t._e()],1)},r=[],i=(a("a9e3"),a("0f12")),s={name:"BaseSectionHeading",mixins:[i["a"]],props:{align:{type:String,default:"center"},color:{type:String,default:"primary"},icon:String,outlined:Boolean,space:{type:[Number,String],default:12},subtitle:String,text:String,title:String},computed:{classes:function(){return["text-".concat(this.align),"mb-".concat(this.space)]}}},c=s,l=a("0c7c"),o=Object(l["a"])(c,n,r,!1,null,null,null);e["default"]=o.exports},dfe2:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-text-field",t._g(t._b({attrs:{outlined:"",dense:"","single-line":""}},"v-text-field",t.$attrs,!1),t.$listeners),[t._t("append-outer",null,{slot:"append-outer"})],2)},r=[],i={name:"BaseTextField"},s=i,c=(a("abc8"),a("0c7c")),l=a("6544"),o=a.n(l),u=a("8654"),d=Object(c["a"])(s,n,r,!1,null,null,null);e["default"]=d.exports;o()(d,{VTextField:u["a"]})},e2ba:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-textarea",t._g(t._b({attrs:{outlined:"",dense:"","single-line":""}},"v-textarea",Object.assign({},{rows:6},t.$attrs),!1),t.$listeners))},r=[],i={name:"BaseTextarea"},s=i,c=(a("67bd"),a("0c7c")),l=a("6544"),o=a.n(l),u=a("a844"),d=Object(c["a"])(s,n,r,!1,null,null,null);e["default"]=d.exports;o()(d,{VTextarea:u["a"]})},e51e:function(t,e,a){var n={"./Avatar.vue":"6cc5","./AvatarCard.vue":"cd6f","./Body.vue":"adfa","./Btn.vue":"5382","./BusinessContact.vue":"b066","./BusinessInfo.vue":"c493","./Card.vue":"c034","./ContactForm.vue":"2e03","./Divider.vue":"afb9","./Heading.vue":"d2eb","./Icon.vue":"4f78","./Img.vue":"7570","./Info.vue":"d0eb","./InfoCard.vue":"2403","./Section.vue":"e720","./SectionHeading.vue":"db4f","./Subheading.vue":"3648","./Subtitle.vue":"0fc3","./TextField.vue":"dfe2","./Textarea.vue":"e2ba","./Title.vue":"45d7"};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id="e51e"},e720:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",t._g(t._b({style:t.styles},"section",t.$attrs,!1),t.$listeners),[t._t("default")],2)},r=[],i=(a("a9e3"),a("5530")),s=a("24b2"),c={name:"BaseSection",mixins:[s["a"]],props:{space:{type:[Number,String],default:96}},computed:{styles:function(){var t=this.$vuetify.breakpoint.mdAndUp?this.space:this.space/2;return Object(i["a"])({},this.measurableStyles,{padding:"".concat(t,"px 0")})}}},l=c,o=a("0c7c"),u=Object(o["a"])(l,n,r,!1,null,null,null);e["default"]=u.exports},f331:function(t,e,a){"use strict";var n=a("a59d"),r=a.n(n);r.a}});
//# sourceMappingURL=app.b10e9626.js.map