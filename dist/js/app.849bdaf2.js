(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],d=0,u=[];d<s.length;d++)i=s[d],r[i]&&u.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},r={app:0},o=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d229481":"4048b66e","chunk-46e23e93":"94a666a6","chunk-6410e400":"d835fd8b","chunk-242a7e62":"ea33466b","chunk-53351e75":"a8d91d65","chunk-6e18e988":"aa204148"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-46e23e93":1,"chunk-242a7e62":1,"chunk-53351e75":1,"chunk-6e18e988":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise(function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-2d229481":"31d6cfe0","chunk-46e23e93":"e2c86d80","chunk-6410e400":"31d6cfe0","chunk-242a7e62":"a58bc9a7","chunk-53351e75":"5cb1791e","chunk-6e18e988":"15c708a2"}[t]+".css",r=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===r))return e()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===n||d===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete i[t],p.parentNode.removeChild(p),a(o)},p.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(p)}).then(function(){i[t]=0}));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(t),l=function(e){d.onerror=d.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+n+": "+i+")");o.type=n,o.request=i,a[1](o)}r[t]=void 0}};var u=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=d;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0d9b":function(t,e,a){var n=a("038a");n.register({code:{width:16,height:16,viewBox:"0 0 24 24",data:'<path pid="0" d="M9.147 21.552a1.244 1.244 0 0 1-.895-.378L.84 13.561a2.257 2.257 0 0 1 0-3.125l7.412-7.613a1.25 1.25 0 0 1 1.791 1.744l-6.9 7.083a.5.5 0 0 0 0 .7l6.9 7.082a1.25 1.25 0 0 1-.9 2.122zM14.854 21.552a1.25 1.25 0 0 1-.9-2.122l6.9-7.083a.5.5 0 0 0 0-.7l-6.9-7.082a1.25 1.25 0 0 1 1.791-1.744l7.411 7.612a2.257 2.257 0 0 1 0 3.125l-7.412 7.614a1.244 1.244 0 0 1-.89.38zm6.514-9.373z"/>'}})},"0dec":function(t,e,a){"use strict";var n=a("1075"),i=a.n(n);i.a},1075:function(t,e,a){},1170:function(t,e,a){var n=a("038a");n.register({italic:{width:16,height:16,viewBox:"0 0 24 24",data:'<path pid="0" d="M22.5.248h-7.637a1.25 1.25 0 0 0 0 2.5h1.086a.25.25 0 0 1 .211.384L4.78 21.017a.5.5 0 0 1-.422.231H1.5a1.25 1.25 0 0 0 0 2.5h7.637a1.25 1.25 0 0 0 0-2.5H8.051a.25.25 0 0 1-.211-.384L19.22 2.98a.5.5 0 0 1 .422-.232H22.5a1.25 1.25 0 0 0 0-2.5z"/>'}})},"1a80":function(t,e,a){var n=a("038a");n.register({paragraph:{width:16,height:16,viewBox:"0 0 24 24",data:'<path pid="0" d="M22.5.248H7.228a6.977 6.977 0 1 0 0 13.954h2.318a.25.25 0 0 1 .25.25V22.5a1.25 1.25 0 0 0 2.5 0V3a.25.25 0 0 1 .25-.25h3.682a.25.25 0 0 1 .25.25v19.5a1.25 1.25 0 0 0 2.5 0V3a.249.249 0 0 1 .25-.25H22.5a1.25 1.25 0 0 0 0-2.5zM9.8 11.452a.25.25 0 0 1-.25.25H7.228a4.477 4.477 0 1 1 0-8.954h2.318A.25.25 0 0 1 9.8 3z"/>'}})},"2b26":function(t,e,a){var n=a("038a");n.register({instagram:{width:24,height:24,viewBox:"0 0 24 24",data:'<rect pid="0" x="2" y="2" width="20" height="20" rx="5" ry="5"/><path pid="1" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h0"/>'}})},"2fc7":function(t,e,a){var n=a("038a");n.register({checklist:{width:16,height:16,viewBox:"0 0 24 24",data:'<path pid="0" d="M21 0H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm1 21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1z"/><path pid="1" d="M11.249 4.5a1.251 1.251 0 0 0-1.75.25L7.365 7.6l-.482-.481a1.25 1.25 0 0 0-1.767 1.764l1.5 1.5a1.262 1.262 0 0 0 1.884-.134l3-4a1.25 1.25 0 0 0-.251-1.749zM11.249 13.5a1.251 1.251 0 0 0-1.75.25L7.365 16.6l-.482-.481a1.25 1.25 0 1 0-1.767 1.768l1.5 1.5a1.265 1.265 0 0 0 1.884-.138l3-4a1.25 1.25 0 0 0-.251-1.749zM18.5 7.749H14a1.25 1.25 0 0 0 0 2.5h4.5a1.25 1.25 0 0 0 0-2.5zM18.5 15.749H14a1.25 1.25 0 0 0 0 2.5h4.5a1.25 1.25 0 1 0 0-2.5z"/>'}})},"31c6":function(t,e,a){var n=a("038a");n.register({mail:{width:24,height:24,viewBox:"0 0 24 24",data:'<path pid="0" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path pid="1" d="M22 6l-10 7L2 6"/>'}})},"351d":function(t,e,a){},"3e68":function(t,e,a){var n=a("038a");n.register({logo:{width:44,height:44,viewBox:"0 0 44 44",data:'<g data-name="Group 1195" transform="translate(-939 -441)"><circle pid="0" data-name="Ellipse 205" cx="22" cy="22" r="22" transform="translate(939 441)" _fill="#ee0051"/><path pid="1" data-name="Path 2670" d="M964.5 460.879a23.868 23.868 0 0 1 4.107 3.09 5.932 5.932 0 0 1 1.924 4.532 7.423 7.423 0 0 1-2.831 6.16 11.127 11.127 0 0 1-7.12 2.239 12.494 12.494 0 0 1-4.5-.722 23.985 23.985 0 0 0-4.269-1.165q-.037-1.332-.037-3.552t-.111-3.922q0-.111.315-.2a1.955 1.955 0 0 1 .536-.093 1.689 1.689 0 0 1 .5.074q.241.074.278.222a10.314 10.314 0 0 0 2.941 5.436 6.458 6.458 0 0 0 4.347 2.145 4.248 4.248 0 0 0 3.09-.943 3.475 3.475 0 0 0 .944-2.571 4.031 4.031 0 0 0-1.924-3.367q-1.924-1.369-4.144-2.664a23.083 23.083 0 0 1-4.181-3.071 5.71 5.71 0 0 1-1.925-4.366 7.488 7.488 0 0 1 2.609-5.79 10.307 10.307 0 0 1 7.16-2.35 11.028 11.028 0 0 1 3.515.5 24.906 24.906 0 0 0 3.182.832q.037 1.332.129 3.33t.24 3.293q0 .111-.314.2a1.885 1.885 0 0 1-.5.093 1.878 1.878 0 0 1-.518-.074.5.5 0 0 1-.333-.222 11.139 11.139 0 0 0-2.072-4.53 4.219 4.219 0 0 0-3.367-1.647 3.874 3.874 0 0 0-2.738.925 3.041 3.041 0 0 0-1 2.331 3.808 3.808 0 0 0 1.867 3.164q1.871 1.314 4.2 2.683z" _fill="#fff"/></g>'}})},4007:function(t,e,a){var n=a("038a");n.register({"chevron-left":{width:24,height:24,viewBox:"0 0 24 24",data:'<path pid="0" d="M15 18l-6-6 6-6"/>'}})},4014:function(t,e,a){var n=a("038a");n.register({image:{width:16,height:16,viewBox:"0 0 24 24",data:'<circle pid="0" cx="9.75" cy="6.247" r="2.25"/><path pid="1" d="M16.916 8.71A1.027 1.027 0 0 0 16 8.158a1.007 1.007 0 0 0-.892.586l-1.558 3.434a.249.249 0 0 1-.422.053l-.82-1.024a1 1 0 0 0-.813-.376 1.007 1.007 0 0 0-.787.426L7.59 15.71a.5.5 0 0 0 .41.79h12a.5.5 0 0 0 .425-.237.5.5 0 0 0 .022-.486z"/><path pid="2" d="M22 0H5.5a2 2 0 0 0-2 2v16.5a2 2 0 0 0 2 2H22a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-.145 18.354a.5.5 0 0 1-.354.146H6a.5.5 0 0 1-.5-.5V2.5A.5.5 0 0 1 6 2h15.5a.5.5 0 0 1 .5.5V18a.5.5 0 0 1-.145.351z"/><path pid="3" d="M19.5 22h-17a.5.5 0 0 1-.5-.5v-17a1 1 0 0 0-2 0V22a2 2 0 0 0 2 2h17.5a1 1 0 0 0 0-2z"/>'}})},"427d":function(t,e,a){},"4fe8":function(t,e,a){"use strict";var n=a("b55a"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);var n={};a.r(n),a.d(n,"get_a",function(){return B});var i={};a.r(i),a.d(i,"update_a",function(){return L});var r={};a.r(r),a.d(r,"update_a",function(){return O});a("cadf"),a("551c"),a("f751"),a("097d");var o=a("a026"),s=a("d847"),c=a.n(s),l=a("795b"),d=a.n(l),u=a("bc3a"),p=a.n(u),h={},f=p.a.create(h);f.interceptors.request.use(function(t){return t},function(t){return d.a.reject(t)}),f.interceptors.response.use(function(t){return t},function(t){return d.a.reject(t)}),Plugin.install=function(t,e){t.axios=f,window.axios=f,c()(t.prototype,{axios:{get:function(){return f}},$axios:{get:function(){return f}}})},o["a"].use(Plugin);Plugin;var m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("router-link",{staticClass:"sidebar",attrs:{to:"/","aria-label":"back home"}},[a("div",{staticClass:"top"})]),a("div",{key:t.$route.params.id||Math.random(),staticClass:"page--wrapper"},[a("router-view")],1),t._m(0)],1)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"footer__content"}),a("div",{staticClass:"footer__inner"})])}],g=a("cebc"),_=a("2f62"),b={data:function(){return{}},methods:Object(g["a"])({},Object(_["b"])(["fetch_projects"]),Object(_["d"])(["admin"]),Object(_["e"])({is_admin:function(t){return t.store_global.is_admin}})),mounted:function(){this.fetch_projects(),localStorage.getItem("token")?this.admin(!0):this.admin(!1)}},j=b,w=(a("5c0b"),a("2877")),C=Object(w["a"])(j,m,v,!1,null,null,null),y=C.exports,x=a("8c4f"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page--wrapper"},[a("main",{staticClass:"page"},[a("div",{staticClass:"header"}),a("v-page-grid"),a("div",{staticClass:"page__inner"},[a("section",{staticClass:"section intro"},[a("div",{staticClass:"section__content intro__content"},[a("div",{staticClass:"grid"},[t._m(0),a("div",{staticClass:"intro__text",attrs:{itemtype:"https://schema.org/CreativeWork"}},[a("h1",{attrs:{itemprop:"author"}},[t._v("Simon Renault.")]),t._m(1),a("div",{staticClass:"intro__actions"},[a("div",{staticClass:"flex-h a"},[a("button",{staticClass:"button auto"},[a("span",[t._v("Resume")]),a("icon",{staticClass:"white",attrs:{name:"download",height:"20",width:"20"}}),t._m(2)],1)]),a("div",{staticClass:"flex-h b"},[a("a",{staticClass:"button",attrs:{rel:"noopener ,noreferrer",href:"mailto:simon.renault.pro@gmail.com","aria-label":"Email me"}},[a("icon",{attrs:{name:"mail",height:"20",width:"20"}})],1),a("a",{staticClass:"button",attrs:{rel:"noopener ,noreferrer",href:"https://dribbble.com/Simon-Renault","aria-label":"Dribble",target:"_blank"}},[a("icon",{staticClass:"db",attrs:{name:"dribble",height:"20",width:"20"}})],1),a("a",{staticClass:"button",attrs:{rel:"noopener ,noreferrer",href:"https://www.linkedin.com/in/simon-renault-pro/","aria-label":"Linked In",target:"_blank"}},[a("icon",{attrs:{name:"linkedin",height:"20",width:"20"}})],1),a("a",{staticClass:"button",attrs:{rel:"noopener ,noreferrer",href:"https://www.instagram.com/simon.renault/","aria-label":"Instagram",target:"_blank"}},[a("icon",{attrs:{name:"instagram",height:"20",width:"20"}})],1),a("a",{staticClass:"button",attrs:{rel:"noopener ,noreferrer",href:"https://github.com/Simon-Renault","aria-label":"Github",target:"_blank"}},[a("icon",{attrs:{name:"github",height:"20",width:"20"}})],1)])])])])])]),t._l(t.cats,function(e){return e.disabled?t._e():a("section",{staticClass:"section"},[a("header",{staticClass:"section__header"},[a("div",[a("h3",{staticClass:"section__jumper"},[t._v(t._s(e.exerpt))]),a("h2",{staticClass:"section__title"},[t._v(t._s(e.title))])]),a("transition",{attrs:{name:"fade"}},[t.is_admin&&t.projectLoaded?a("router-link",{staticClass:"button hover",attrs:{to:{path:"/create/"+e.id}}},[a("span",[t._v("+")])]):t._e()],1)],1),a("nav",{staticClass:"section__content"},[a("ul",{staticClass:"grid",attrs:{itemscope:"",itemtype:"http://www.schema.org/SiteNavigationElement"}},[t._l(t.projectByCatId(e.id),function(e){return a("transition",{attrs:{name:"fade"}},["false"!==e.json.isPublished?a("v-project-card",{key:e.json.title,attrs:{project:e}}):t._e()],1)}),t.projectLoaded?t._e():a("v-card-placeholder"),t.projectLoaded?t._e():a("v-card-placeholder"),!t.projectLoaded&e.id<=1?a("v-card-placeholder"):t._e()],2)])])}),t.is_admin&&t.projectLoaded?a("section",{staticClass:"section"},[a("header",{staticClass:"section__header"},[t._m(3),a("transition",{attrs:{name:"fade"}},[t.is_admin&&t.projectLoaded?a("router-link",{staticClass:"button hover",attrs:{to:{path:"/create/1"}}},[a("span",[t._v("+")])]):t._e()],1)],1),a("div",{staticClass:"section__content"},[a("ul",{staticClass:"grid"},t._l(t.projects,function(e){return a("transition",{attrs:{name:"fade"}},["false"===e.json.isPublished?a("v-project-card",{key:e.json.title,attrs:{project:e}}):t._e()],1)}),1)])]):t._e()],2),a("div",{staticClass:"mobile-footer"})],1)])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"intro__img"},[a("div",{staticClass:"intro__img__inner"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{attrs:{itemprop:"text"}},[t._v("Hello, I'm a "),a("em",[t._v("product designer")]),t._v(" with a focus on user experience, interaction design and creative coding.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inner-resume"},[a("a",{staticClass:"inner-btn",attrs:{href:"/documents/CV-Simon-Renault–EN.pdf","aria-label":"English cv"}},[t._v("English")]),a("a",{staticClass:"inner-btn",attrs:{href:"/documents/CV-Simon-Renault–FR.pdf","aria-label":"French cv"}},[t._v("French")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"section__jumper"},[t._v("ready to be published")]),a("h2",{staticClass:"section__title"},[t._v("Draft projects")])])}],z=(a("55dd"),a("9f24"),{computed:Object(g["a"])({},Object(_["e"])({projectLoaded:function(t){return t.store_projects.projectLoaded},projects:function(t){return t.store_projects.projects},cats:function(t){return t.store_projects.cats},is_admin:function(t){return t.store_global.is_admin}}),{sections:function(){var t=this;return this.cats.map(function(e){return{cat:e,projects:t.projects.filter(function(t){return t.json.cat==e.id})}})}}),metaInfo:function(){return{title:"Simon Renault - portfolio",meta:[{property:"og:locale",content:"en_GB"},{property:"og:site_name",content:"Simon Renault - Portfolio"},{property:"og:url",content:"https://simon-renault.com/"},{property:"og:description",content:"Simon Renault is a product designer with a focus on user experience, interaction design and creative coding."},{property:"og:image",content:"https://simon-renault.com/images/portfolio/portfolio-main.jpg"},{property:"og:title",content:"Simon Renault  -  portfolio"},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:description",content:"Simon Renault is a product designer with a focus on user experience, interaction design and creative coding."},{name:"twitter:title",content:"Simon Renault - Portfolio"},{name:"twitter:site",content:"https://simon-renault.com/"},{name:"twitter:creator",content:"Simon renault"}]}},methods:Object(g["a"])({},Object(_["d"])(["admin"]),{addFirstProject:function(){this.$router.push("/create/0")},projectByCatId:function(t){return this.projects.filter(function(e){return e.json.cat==t}).sort(function(t,e){return t.json.z-e.json.z})}})}),S=z,H=(a("a318"),Object(w["a"])(S,k,M,!1,null,null,null)),P=H.exports;o["a"].use(x["a"]);var E=new x["a"]({mode:"history",base:"/",scrollBehavior:function(t,e,a){return{x:0,y:0}},routes:[{path:"/",component:P},{path:"*",component:function(){return a.e("chunk-6e18e988").then(a.bind(null,"8cdb"))}},{path:"/projects",component:function(){return a.e("chunk-6e18e988").then(a.bind(null,"8cdb"))}},{path:"/projects/:id",component:function(){return a.e("chunk-46e23e93").then(a.bind(null,"616c"))}},{path:"/projects/:id/edit",component:function(){return Promise.all([a.e("chunk-6410e400"),a.e("chunk-53351e75")]).then(a.bind(null,"7991"))}},{path:"/login",component:function(){return a.e("chunk-2d229481").then(a.bind(null,"dd7b"))}},{path:"/create/:cat",component:function(){return Promise.all([a.e("chunk-6410e400"),a.e("chunk-242a7e62")]).then(a.bind(null,"f4f7"))}}]}),B=function(t){return{a:t.a}},L=function(t,e){t.a=e},O=function(t,e){var a=t.commit;a("update_a",e)},A=(a("7514"),a("b6d0")),V=a.n(A),$=a("75fc"),q={projects:[],projectLoaded:!1,cats:[{id:1,title:"Work & projects",exerpt:"Solving real problems",disabled:!1},{id:3,title:"Digital art",exerpt:"Creative & inspirational",disabled:!1},{id:2,title:"Random experiments",exerpt:"Sometimes explosives",disabled:!1}]},N={get_all_projects:function(t){return t.projects},get_all_projects_ids:function(t){return t.projects.map(function(t){return t.url})},get_cat_project:function(t){return function(e){return t.projects.filter(function(t){return t.json.cat==e})}},get_all_cats:function(t){return t.cats},get_projects_from_ids:function(t){return function(e){var a=Object($["a"])(new V.a(e)).map(function(e){return t.projects.find(function(t){return t.id==e})});return a}},get_projects_from_id:function(t){return function(e){var a=t.projects.find(function(t){return t.url===e});return a}}},R={add_projects:function(t,e){t.projects=e,t.projectLoaded=!0}},I={fetch_projects:function(t){var e=t.commit;p.a.get("https://api.simon-renault.com/pages").then(function(t){var a=t.data.map(function(t){return{id:t.id,url:t.url,content:t.content,json:JSON.parse(t.json)}});e("add_projects",a)})}},T={state:q,getters:N,mutations:R,actions:I},F={is_admin:!1},D={is_admin:function(t){return t.is_admin}},G={admin:function(t,e){t.is_admin=e}},J={},W={state:F,getters:D,mutations:G,actions:J};o["a"].use(_["a"]);var K=new _["a"].Store({state:{a:1},mutations:i,actions:r,getters:n,modules:{store_projects:T,store_global:W}}),U=a("9483");Object(U["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Q=a("038a"),X=a.n(Q),Y=a("0a89"),Z=a.n(Y),tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-text",class:{dark:t.dark,filed:t.filled},on:{paste:function(t){t.stopPropagation()},keydown:function(t){t.stopPropagation()}}},[a("input",{ref:"input",attrs:{type:t.type,autocomplete:"off",id:t.id},domProps:{value:t.value},on:{keyup:t.updated}}),a("label",{attrs:{for:t.id}},[t._v(t._s(t.label))])])},et=[],at=(a("c5f6"),{props:{value:{type:String},dark:{type:Boolean},id:{type:[String,Number]},label:{type:String},type:{type:String,default:"text"}},computed:{filled:function(){if(this.value)return this.value.length>0}},methods:{updated:function(){this.$emit("input",this.$refs.input.value)},getValue:function(){return this.$refs.input.value}}}),nt=at,it=Object(w["a"])(nt,tt,et,!1,null,"206a286a",null),rt=it.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"select"})},st=[],ct={},lt=ct,dt=Object(w["a"])(lt,ot,st,!1,null,"57419a4c",null),ut=dt.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"root"},[a("router-link",{staticClass:"project-card",class:{disabled:"false"===t.project.json.isPublished},attrs:{to:{path:t.path},itemprop:"url"}},[a("div",{staticClass:"project-card__content"},["soon"===t.project.json.isPublished?a("div",{staticClass:"coming-soon"},[a("span",[t._v("coming soon")])]):t._e(),a("image-loader",{staticClass:"project-card__img",attrs:{src:"https://simon-renault.com/images/cover/small/"+t.project.json.image.src+".jpg",alt:t.project.json.title+"cover image"}}),a("div",{staticClass:"project-card__infos"},[a("div",[a("h4",[t._v(t._s(t.project.json.exerpt))]),a("h2",{attrs:{itemprop:"name"}},[t._v(t._s(t.project.json.title))])])])],1)])],1)},ht=[],ft={props:{project:{type:Object},disabled:{default:!1,required:!1,type:Boolean}},computed:Object(g["a"])({},Object(_["e"])({is_admin:function(t){return t.store_global.is_admin}}),{path:function(){return this.is_admin?"/projects/".concat(this.project.url,"/edit"):"false"===this.project.json.isPublished||"soon"===this.project.json.isPublished||!0===this.disabled?"":"/projects/".concat(this.project.url)}})},mt=ft,vt=(a("746a"),Object(w["a"])(mt,pt,ht,!1,null,"89b1a630",null)),gt=vt.exports,_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"box-image":!0,placeholder:!0,loaded:t.loaded},style:t.styles},[t.placeholder?a("transition",{attrs:{name:"fade"}},[a("img",{directives:[{name:"show",rawName:"v-show",value:t.loadedPlaceholder,expression:"loadedPlaceholder"}],staticClass:"blured",class:{loaded:t.loaded},style:t.styles,attrs:{src:t.placeholder,alt:t.alt},on:{load:t.onLoadedPlaceholder}})]):t._e(),a("transition",{attrs:{name:"fade"}},[a("img",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],style:t.styles,attrs:{src:t.src,alt:t.alt},on:{load:t.onLoaded}})])],1)},bt=[],jt={name:"image-loader",props:{src:{type:String,required:!0},alt:{type:String,required:!1},placeholder:{type:String,required:!1},width:{type:String,required:!1},height:{type:String,required:!1},className:{type:String,required:!1}},data:function(){return{loaded:!1,loadedPlaceholder:!1}},computed:{styles:function(){var t={};return this.width&&(t.width=this.width),this.height&&(t.height=this.height),t}},methods:{onLoaded:function(){this.loaded=!0},onLoadedPlaceholder:function(){this.loadedPlaceholder=!0}}},wt=jt,Ct=(a("ee76"),Object(w["a"])(wt,_t,bt,!1,null,"ef3d2896",null)),yt=Ct.exports,xt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},kt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"project-card pl"},[a("div",{staticClass:"project-card__content"},[a("div",{staticClass:"project-card__img placeholder"}),a("div",{staticClass:"project-card__infos"},[a("div",[a("div",{staticClass:"placeholder a inline"}),a("div",{staticClass:"placeholder b inline"})])])])])}],Mt=(a("0dec"),{}),zt=Object(w["a"])(Mt,xt,kt,!1,null,"6dced70c",null),St=zt.exports,Ht=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"project-placeholder"},[a("div",{staticClass:"placeholder title inline"}),a("div",{staticClass:"placeholder subtitle inline"}),a("div",{staticClass:"text"},[a("div",{staticClass:"p100 placeholder inline"}),a("div",{staticClass:"p100 placeholder inline"}),a("div",{staticClass:"p100 placeholder inline"}),a("div",{staticClass:"p100 placeholder inline"}),a("div",{staticClass:"p100 placeholder inline"}),a("div",{staticClass:"p100 placeholder inline"}),a("div",{staticClass:"p80 placeholder inline"})]),a("div",{staticClass:"placeholder subtitle inline"}),a("div",{staticClass:"text"},[a("div",{staticClass:"p100 placeholder inline"}),a("div",{staticClass:"p100 placeholder inline"}),a("div",{staticClass:"p100 placeholder inline"}),a("div",{staticClass:"p100 placeholder inline"}),a("div",{staticClass:"p100 placeholder inline"}),a("div",{staticClass:"p100 placeholder inline"}),a("div",{staticClass:"p80 placeholder inline"})])])}],Et=(a("4fe8"),{}),Bt=Object(w["a"])(Et,Ht,Pt,!1,null,"33ba2495",null),Lt=Bt.exports,Ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},At=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page__grid--layer"},[a("div",{staticClass:"page__grid--layer__grid"},[a("span"),a("span"),a("span")])])}],Vt={},$t=Object(w["a"])(Vt,Ot,At,!1,null,null,null),qt=$t.exports;o["a"].use(Z.a),o["a"].use(X.a,{tagName:"icon"}),o["a"].config.productionTip=!1,o["a"].component("v-input",rt),o["a"].component("v-select",ut),o["a"].component("v-project-card",gt),o["a"].component("image-loader",yt),o["a"].component("v-card-placeholder",St),o["a"].component("v-project-placeholder",Lt),o["a"].component("v-page-grid",qt),new o["a"]({router:E,store:K,render:function(t){return t(y)},mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))}}).$mount("#app")},5750:function(t,e,a){var n=a("038a");n.register({redo:{width:16,height:16,viewBox:"0 0 24 24",data:'<path pid="0" d="M22.608.161a.5.5 0 0 0-.545.108L19.472 2.86a.25.25 0 0 1-.292.045 12.537 12.537 0 0 0-12.966.865A12.259 12.259 0 0 0 6.1 23.632a1.25 1.25 0 0 0 1.476-2.018 9.759 9.759 0 0 1 .091-15.809 10 10 0 0 1 9.466-1.1.25.25 0 0 1 .084.409l-1.85 1.85a.5.5 0 0 0 .354.853h6.7a.5.5 0 0 0 .5-.5V.623a.5.5 0 0 0-.313-.462z"/>'}})},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),i=a.n(n);i.a},"5e27":function(t,e,a){},6557:function(t,e,a){var n=a("038a");n.register({dribble:{width:33,height:33,viewBox:"0 0 33 33",data:'<defs><clipPath id="svgicon_dribble_a"><path pid="0" data-name="Rectangle 864" transform="translate(-10323 9597)" d="M0 0h33v33H0z"/></clipPath></defs><g data-name="Mask Group 6" transform="translate(10323 -9597)" clip-path="url(#svgicon_dribble_a)"><circle pid="1" cx="14.479" cy="14.479" r="14.479" data-name="Ellipse 198" transform="translate(-10321 9599.301)"/><path pid="2" data-name="Path 2667" d="M-10319.924 9612.312s19.071.556 22.828-8.187"/><path pid="3" data-name="Path 2668" d="M-10311.257 9601.27s8.193 8.462 11.187 25.024"/><path pid="4" data-name="Path 2669" d="M-10292.515 9615.207s-15.76-5.153-23.065 9.353"/></g>'}})},"746a":function(t,e,a){"use strict";var n=a("351d"),i=a.n(n);i.a},"933c":function(t,e,a){var n=a("038a");n.register({ul:{width:16,height:16,viewBox:"0 0 24 24",data:'<circle pid="0" cx="2.5" cy="3.998" r="2.5"/><path pid="1" d="M8.5 5H23a1 1 0 0 0 0-2H8.5a1 1 0 0 0 0 2z"/><circle pid="2" cx="2.5" cy="11.998" r="2.5"/><path pid="3" d="M23 11H8.5a1 1 0 0 0 0 2H23a1 1 0 0 0 0-2z"/><circle pid="4" cx="2.5" cy="19.998" r="2.5"/><path pid="5" d="M23 19H8.5a1 1 0 0 0 0 2H23a1 1 0 0 0 0-2z"/>'}})},9733:function(t,e,a){var n=a("038a");n.register({linkedin:{width:24,height:24,viewBox:"0 0 24 24",data:'<path pid="0" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle pid="1" cx="4" cy="4" r="2"/>'}})},"9f24":function(t,e,a){a("f951"),a("2fc7"),a("4007"),a("0d9b"),a("bccd"),a("6557"),a("eeec"),a("4014"),a("2b26"),a("1170"),a("a2c3"),a("9733"),a("3e68"),a("31c6"),a("a580"),a("eef2"),a("1a80"),a("a89e"),a("5750"),a("b8ab"),a("bc136"),a("933c"),a("f538"),a("b54f")},a2c3:function(t,e,a){var n=a("038a");n.register({link:{width:16,height:16,viewBox:"0 0 24 24",data:'<path pid="0" d="M12.406 14.905a1 1 0 0 0-.543 1.307 1 1 0 0 1-.217 1.09l-2.828 2.829a2 2 0 0 1-2.828 0L3.868 18.01a2 2 0 0 1 0-2.829L6.7 12.353a1.013 1.013 0 0 1 1.091-.217 1 1 0 0 0 .763-1.849 3.034 3.034 0 0 0-3.268.652l-2.832 2.828a4.006 4.006 0 0 0 0 5.657l2.122 2.121a4 4 0 0 0 5.656 0l2.829-2.828a3.008 3.008 0 0 0 .651-3.27 1 1 0 0 0-1.306-.542z"/><path pid="1" d="M7.757 16.241a1.011 1.011 0 0 0 1.414 0l7.779-7.778a1 1 0 0 0-1.414-1.414l-7.779 7.778a1 1 0 0 0 0 1.414z"/><path pid="2" d="M21.546 4.574l-2.121-2.121a4.006 4.006 0 0 0-5.657 0l-2.829 2.828a3.006 3.006 0 0 0-.651 3.269 1 1 0 1 0 1.849-.764 1 1 0 0 1 .217-1.086l2.828-2.828a2 2 0 0 1 2.829 0l2.121 2.121a2 2 0 0 1 0 2.829L17.3 11.645a1.015 1.015 0 0 1-1.091.217 1 1 0 0 0-.765 1.849 3.026 3.026 0 0 0 3.27-.651l2.828-2.828a4.007 4.007 0 0 0 .004-5.658z"/>'}})},a318:function(t,e,a){"use strict";var n=a("427d"),i=a.n(n);i.a},a580:function(t,e,a){var n=a("038a");n.register({mention:{width:16,height:16,viewBox:"0 0 24 24",data:'<path pid="0" d="M12 .5A11.634 11.634 0 0 0 .262 12 11.634 11.634 0 0 0 12 23.5a11.836 11.836 0 0 0 6.624-2 1.25 1.25 0 1 0-1.393-2.076A9.34 9.34 0 0 1 12 21a9.132 9.132 0 0 1-9.238-9A9.132 9.132 0 0 1 12 3a9.132 9.132 0 0 1 9.238 9v.891a1.943 1.943 0 0 1-3.884 0V12A5.355 5.355 0 1 0 12 17.261a5.376 5.376 0 0 0 3.861-1.634 4.438 4.438 0 0 0 7.877-2.736V12A11.634 11.634 0 0 0 12 .5zm0 14.261A2.763 2.763 0 1 1 14.854 12 2.812 2.812 0 0 1 12 14.761z"/>'}})},a89e:function(t,e,a){var n=a("038a");n.register({quote:{width:16,height:16,viewBox:"0 0 24 24",data:'<path pid="0" d="M18.559 3.932a4.942 4.942 0 1 0 0 9.883 4.609 4.609 0 0 0 1.115-.141.25.25 0 0 1 .276.368 6.83 6.83 0 0 1-5.878 3.523 1.25 1.25 0 0 0 0 2.5 9.71 9.71 0 0 0 9.428-9.95V8.873a4.947 4.947 0 0 0-4.941-4.941zM6.236 3.932a4.942 4.942 0 0 0 0 9.883 4.6 4.6 0 0 0 1.115-.141.25.25 0 0 1 .277.368 6.83 6.83 0 0 1-5.878 3.523 1.25 1.25 0 0 0 0 2.5 9.711 9.711 0 0 0 9.428-9.95V8.873a4.947 4.947 0 0 0-4.942-4.941z"/>'}})},b54f:function(t,e,a){var n=a("038a");n.register({x:{width:24,height:24,viewBox:"0 0 24 24",data:'<path pid="0" d="M18 6L6 18M6 6l12 12"/>'}})},b55a:function(t,e,a){},b8ab:function(t,e,a){var n=a("038a");n.register({remove:{width:16,height:16,viewBox:"0 0 24 24",data:'<path pid="0" d="M20.485 3.511A12.01 12.01 0 1 0 24 12a12.009 12.009 0 0 0-3.515-8.489zm-1.767 15.21A9.51 9.51 0 1 1 21.5 12a9.508 9.508 0 0 1-2.782 6.721z"/><path pid="1" d="M16.987 7.01a1.275 1.275 0 0 0-1.8 0l-3.177 3.177L8.829 7.01a1.277 1.277 0 0 0-1.805 1.806l3.176 3.177-3.176 3.178a1.277 1.277 0 0 0 1.805 1.806l3.176-3.177 3.177 3.178a1.277 1.277 0 0 0 1.8-1.806l-3.176-3.178 3.176-3.177a1.278 1.278 0 0 0 .005-1.807z"/>'}})},bc136:function(t,e,a){var n=a("038a");n.register({strike:{width:16,height:16,viewBox:"0 0 24 24",data:'<path pid="0" d="M23.75 12.952A1.25 1.25 0 0 0 22.5 11.7h-8.936a.492.492 0 0 1-.282-.09c-.722-.513-1.482-.981-2.218-1.432-2.8-1.715-4.5-2.9-4.5-4.863 0-2.235 2.207-2.569 3.523-2.569a4.54 4.54 0 0 1 3.081.764 2.662 2.662 0 0 1 .447 1.99v.3a1.25 1.25 0 1 0 2.5 0v-.268a4.887 4.887 0 0 0-1.165-3.777C13.949.741 12.359.248 10.091.248c-3.658 0-6.023 1.989-6.023 5.069 0 2.773 1.892 4.512 4 5.927a.25.25 0 0 1-.139.458H1.5a1.25 1.25 0 0 0 0 2.5h10.977a.251.251 0 0 1 .159.058 4.339 4.339 0 0 1 1.932 3.466c0 3.268-3.426 3.522-4.477 3.522-1.814 0-3.139-.405-3.834-1.173a3.394 3.394 0 0 1-.65-2.7 1.25 1.25 0 0 0-2.488-.246A5.76 5.76 0 0 0 4.4 21.753c1.2 1.324 3.114 2 5.688 2 4.174 0 6.977-2.42 6.977-6.022a6.059 6.059 0 0 0-.849-3.147.25.25 0 0 1 .216-.377H22.5a1.25 1.25 0 0 0 1.25-1.255z"/>'}})},bccd:function(t,e,a){var n=a("038a");n.register({download:{width:24,height:24,viewBox:"0 0 24 24",data:'<path pid="0" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>'}})},ee76:function(t,e,a){"use strict";var n=a("f4d8"),i=a.n(n);i.a},eeec:function(t,e,a){var n=a("038a");n.register({github:{width:24,height:24,viewBox:"0 0 24 24",data:'<path pid="0" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>'}})},eef2:function(t,e,a){var n=a("038a");n.register({ol:{width:16,height:16,viewBox:"0 0 24 24",data:'<path pid="0" d="M7.75 4.5h15a1 1 0 0 0 0-2h-15a1 1 0 0 0 0 2zM22.75 11h-15a1 1 0 1 0 0 2h15a1 1 0 0 0 0-2zM22.75 19.5h-15a1 1 0 0 0 0 2h15a1 1 0 0 0 0-2zM2.212 17.248a2 2 0 0 0-1.933 1.484.75.75 0 1 0 1.45.386.5.5 0 1 1 .483.63.75.75 0 1 0 0 1.5.5.5 0 1 1-.482.635.75.75 0 1 0-1.445.4 2 2 0 1 0 3.589-1.648.251.251 0 0 1 0-.278 2 2 0 0 0-1.662-3.111zM4.25 10.748a2 2 0 0 0-4 0 .75.75 0 0 0 1.5 0 .5.5 0 0 1 1 0 1.031 1.031 0 0 1-.227.645L.414 14.029A.75.75 0 0 0 1 15.248h2.5a.75.75 0 0 0 0-1.5h-.419a.249.249 0 0 1-.195-.406L3.7 12.33a2.544 2.544 0 0 0 .55-1.582zM4 5.248h-.25A.25.25 0 0 1 3.5 5V1.623A1.377 1.377 0 0 0 2.125.248H1.5a.75.75 0 0 0 0 1.5h.25A.25.25 0 0 1 2 2v3a.25.25 0 0 1-.25.25H1.5a.75.75 0 0 0 0 1.5H4a.75.75 0 0 0 0-1.5z"/>'}})},f4d8:function(t,e,a){},f538:function(t,e,a){var n=a("038a");n.register({underline:{width:16,height:16,viewBox:"0 0 24 24",data:'<path pid="0" d="M22.5 21.248h-21a1.25 1.25 0 0 0 0 2.5h21a1.25 1.25 0 0 0 0-2.5zM1.978 2.748h1.363a.25.25 0 0 1 .25.25v8.523a8.409 8.409 0 0 0 16.818 0V3a.25.25 0 0 1 .25-.25h1.363a1.25 1.25 0 0 0 0-2.5H16.3a1.25 1.25 0 0 0 0 2.5h1.363a.25.25 0 0 1 .25.25v8.523a5.909 5.909 0 0 1-11.818 0V3a.25.25 0 0 1 .25-.25H7.7a1.25 1.25 0 1 0 0-2.5H1.978a1.25 1.25 0 0 0 0 2.5z"/>'}})},f951:function(t,e,a){var n=a("038a");n.register({bold:{width:16,height:16,viewBox:"0 0 24 24",data:'<path pid="0" d="M17.194 10.962A6.271 6.271 0 0 0 12.844.248H4.3a1.25 1.25 0 0 0 0 2.5h1.013a.25.25 0 0 1 .25.25V21a.25.25 0 0 1-.25.25H4.3a1.25 1.25 0 1 0 0 2.5h9.963a6.742 6.742 0 0 0 2.93-12.786zm-4.35-8.214a3.762 3.762 0 0 1 0 7.523H8.313a.25.25 0 0 1-.25-.25V3a.25.25 0 0 1 .25-.25zm1.42 18.5H8.313a.25.25 0 0 1-.25-.25v-7.977a.25.25 0 0 1 .25-.25H14.264a4.239 4.239 0 0 1 0 8.477z"/>'}})}});