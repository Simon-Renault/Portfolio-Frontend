(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53351e75"],{"0293":function(t,e,n){var r=n("241e"),o=n("53e2");n("ce7e")("getPrototypeOf",function(){return function(t){return o(r(t))}})},"02f4":function(t,e,n){var r=n("4588"),o=n("be13");t.exports=function(t){return function(e,n){var a,i,s=String(o(e)),c=r(n),l=s.length;return c<0||c>=l?t?"":void 0:(a=s.charCodeAt(c),a<55296||a>56319||c+1===l||(i=s.charCodeAt(c+1))<56320||i>57343?t?s.charAt(c):a:t?s.slice(c,c+2):i-56320+(a-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"04a4":function(t,e,n){"use strict";var r=n("9aa3"),o=n.n(r);o.a},"061b":function(t,e,n){t.exports=n("fa99")},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"1df8":function(t,e,n){var r=n("63b6");r(r.S,"Object",{setPrototypeOf:n("ead6").set})},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),o=n("32e9"),a=n("79e5"),i=n("be13"),s=n("2b4c"),c=n("520a"),l=s("species"),u=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),p=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=s(t),h=!a(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),d=h?!a(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[f](""),!e}):void 0;if(!h||!d||"replace"===t&&!u||"split"===t&&!p){var v=/./[f],m=n(i,f,""[t],function(t,e,n,r,o){return e.exec===c?h&&!o?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),g=m[0],b=m[1];r(String.prototype,t,g),o(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"25b0":function(t,e,n){n("1df8"),t.exports=n("584a").Object.setPrototypeOf},"4aa6":function(t,e,n){t.exports=n("dc62")},"4d16":function(t,e,n){t.exports=n("25b0")},"520a":function(t,e,n){"use strict";var r=n("0bfb"),o=RegExp.prototype.exec,a=String.prototype.replace,i=o,s="lastIndex",c=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t[s]||0!==e[s]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(i=function(t){var e,n,i,u,p=this;return l&&(n=new RegExp("^"+p.source+"$(?!\\s)",r.call(p))),c&&(e=p[s]),i=o.call(p,t),c&&i&&(p[s]=p.global?i.index+i[0].length:e),l&&i&&i.length>1&&a.call(i[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)}),i}),t.exports=i},"5d58":function(t,e,n){t.exports=n("d8d6")},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),o=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"67bb":function(t,e,n){t.exports=n("f921")},"69d3":function(t,e,n){n("6718")("asyncIterator")},"765d":function(t,e,n){n("6718")("observable")},7991:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._m(0),n("div",{staticClass:"page__inner"},[n("section",{staticClass:"title"},[n("h1",{staticClass:"title"},[t._v(t._s(t.project.json.title))])]),n("section",{staticClass:"page-header"},[n("div",{staticClass:"page-header__img"},[n("image-loader",{attrs:{src:"https://simon-renault.com/images/cover/large/"+t.project.json.image.src+".jpg"||!1,width:"100%",height:"100%"}})],1),n("div",{staticClass:"page-header__overlay"}),n("div",{staticClass:"page-header__content"},[n("button",{staticClass:"button back",class:{light:"true"==t.project.json.isLight},on:{click:function(e){return t.$router.push("/")}}},[n("svg",{staticClass:" feather-chevron-left",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[n("polyline",{attrs:{points:"15 18 9 12 15 6"}})])])])]),t.is_admin?n("section",{staticClass:"params-editor"},[n("v-input",{staticClass:"params-editor__url",attrs:{id:"fmp1",label:"Image URL"},model:{value:t.project.json.image.src,callback:function(e){t.$set(t.project.json.image,"src",e)},expression:"project.json.image.src"}}),n("v-input",{staticClass:"params-editor__title",attrs:{id:"fmp2",label:"Title"},model:{value:t.project.json.title,callback:function(e){t.$set(t.project.json,"title",e)},expression:"project.json.title"}}),n("v-input",{attrs:{id:"fmp4",label:"Exerpt"},model:{value:t.project.json.exerpt,callback:function(e){t.$set(t.project.json,"exerpt",e)},expression:"project.json.exerpt"}}),n("v-input",{ref:"url",staticClass:"params-editor__url",attrs:{id:"fmp5",label:"url",value:t.project.url}}),n("v-input",{staticClass:"params-editor__color",attrs:{id:"fmp3",label:"color"},model:{value:t.project.json.color,callback:function(e){t.$set(t.project.json,"color",e)},expression:"project.json.color"}}),n("select",{directives:[{name:"model",rawName:"v-model",value:t.project.json.cat,expression:"project.json.cat"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.project.json,"cat",e.target.multiple?n:n[0])}}},t._l(t.get_all_cats,function(e){return n("option",{domProps:{value:e.id}},[t._v(t._s(e.title))])}),0),n("select",{directives:[{name:"model",rawName:"v-model",value:t.project.json.isPublished,expression:"project.json.isPublished"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.project.json,"isPublished",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"false"}},[t._v("draft")]),n("option",{attrs:{value:"soon"}},[t._v("coming soon")]),n("option",{attrs:{value:"true"}},[t._v("published")])]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.project.json.isLight,expression:"project.json.isLight"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.project.json,"isLight",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"true"}},[t._v("light")]),n("option",{attrs:{value:"false"}},[t._v("dark")])]),n("button",{staticClass:"button",on:{click:t.del}},[n("span",[t._v("delete")])]),n("button",{staticClass:"button",on:{click:t.onSave}},[n("span",[t._v("save")])])],1):t._e(),n("section",{staticClass:"editor"},[n("h1",{staticClass:"title"},[t._v(t._s(t.project.json.title))]),t.imageModal.isOpen?n("div",{staticClass:"modal",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.reject(e)}}},[n("div",{staticClass:"modal__inner",on:{click:function(t){t.stopPropagation(),t.preventDefault()}}},[n("div",{staticClass:"modal__content"},[n("div",{staticClass:"top"},[n("image-loader",{staticClass:"image__preview",attrs:{src:t.imageModal.imageData.src}})],1),n("form",{staticClass:"bottom",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.resolve(e)}}},[n("v-input",{staticClass:"src",attrs:{label:"src"},model:{value:t.imageModal.imageData.src,callback:function(e){t.$set(t.imageModal.imageData,"src",e)},expression:"imageModal.imageData.src"}}),n("v-input",{staticClass:"alt",attrs:{label:"alt"},model:{value:t.imageModal.imageData.alt,callback:function(e){t.$set(t.imageModal.imageData,"alt",e)},expression:"imageModal.imageData.alt"}}),n("select",{directives:[{name:"model",rawName:"v-model",value:t.imageModal.imageData.className,expression:"imageModal.imageData.className"}],staticClass:"class",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.imageModal.imageData,"className",e.target.multiple?n:n[0])}}},t._l(t.imageModal.classes,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e))])}),0),n("button",{staticClass:"button",on:{click:t.resolve}},[t._v("insert")])],1)])])]):t._e(),n("editor-floating-menu",{attrs:{editor:t.editor},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.commands,o=(e.isActive,e.menu);return n("div",{staticClass:"editor__floating-menu",class:{"is-active":o.isActive},style:"top: "+o.top+"px"},[n("button",{staticClass:"menubar__button",on:{click:r.code_block}},[n("icon",{attrs:{name:"code",height:"15",width:"15"}})],1),n("button",{staticClass:"menubar__button",on:{click:r.blockquote}},[n("icon",{attrs:{name:"quote",height:"15",width:"15"}})],1),n("button",{staticClass:"menubar__button",on:{click:function(t){return r.heading({level:2})}}},[n("span",[t._v("H2")])]),n("button",{staticClass:"menubar__button",on:{click:function(t){return r.heading({level:3})}}},[n("span",[t._v("H3")])]),n("button",{staticClass:"menubar__button",on:{click:function(t){return r.heading({level:4})}}},[n("span",[t._v("H45")])]),n("button",{staticClass:"menubar__button",on:{click:r.bullet_list}},[n("icon",{attrs:{name:"ul",height:"15",width:"15"}})],1),n("button",{staticClass:"menubar__button",on:{click:r.ordered_list}},[n("icon",{attrs:{name:"ol",height:"15",width:"15"}})],1),n("button",{staticClass:"menubar__button",on:{click:function(e){return t.showImagePrompt(r.image)}}},[n("icon",{attrs:{name:"image",height:"15",width:"15"}})],1),n("button",{staticClass:"menubar__button",on:{click:r.spacer}},[n("span",[t._v("spacer")])])])}}])}),n("editor-menu-bubble",{attrs:{editor:t.editor},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.commands,o=e.isActive,a=e.menu,i=e.getMarkAttrs;return n("div",{staticClass:"menububble",class:{"is-active":a.isActive},style:"left: "+a.left+"px; bottom: "+a.bottom+"px;"},[t.linkMenuIsActive||t.imageMenuIsActive?n("div",[t.linkMenuIsActive?n("form",{staticClass:"menububble__form",on:{submit:function(e){return e.preventDefault(),t.setLinkUrl(r.link,t.linkUrl)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.linkUrl,expression:"linkUrl"}],ref:"linkInput",staticClass:"menububble__input",attrs:{type:"text",placeholder:"https://"},domProps:{value:t.linkUrl},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.hideLinkMenu(e)},input:function(e){e.target.composing||(t.linkUrl=e.target.value)}}}),n("button",{staticClass:"menububble__button",attrs:{type:"button"},on:{click:function(e){return t.setLinkUrl(r.link,null)}}},[n("icon",{staticClass:"feather",attrs:{name:"x",height:"15",width:"15"}})],1)]):t._e()]):[n("button",{staticClass:"menububble__button",class:{"is-active":o.heading()},on:{click:function(t){return r.heading({level:2})}}},[n("span",[t._v("H2")])]),n("button",{staticClass:"menububble__button",class:{"is-active":o.heading()},on:{click:function(t){return r.heading({level:3})}}},[n("span",[t._v("H3")])]),n("button",{staticClass:"menububble__button",class:{"is-active":o.heading()},on:{click:function(t){return r.heading({level:4})}}},[n("span",[t._v("H4")])]),n("button",{staticClass:"menububble__button",class:{"is-active":!o.heading()},on:{click:r.bold}},[n("icon",{attrs:{name:"bold",height:"15",width:"15"}})],1),n("button",{staticClass:"menububble__button",class:{"is-active":!o.heading()},on:{click:r.italic}},[n("icon",{attrs:{name:"italic",height:"15",width:"15"}})],1),n("button",{staticClass:"menububble__button",class:{"is-active":!o.heading()},on:{click:r.strike}},[n("icon",{attrs:{name:"strike",height:"15",width:"15"}})],1),n("button",{staticClass:"menububble__button is-active",on:{click:r.paragraph}},[n("icon",{attrs:{name:"paragraph",height:"15",width:"15"}})],1),n("button",{staticClass:"menububble__button is-active",class:{"is-active":o.link()},on:{click:function(e){t.showLinkMenu(i("link"))}}},[n("span",[t._v("Add Link")]),n("icon",{attrs:{name:"link",height:"15",width:"15"}})],1)]],2)}}])}),n("editor-content",{staticClass:"text-container",attrs:{editor:t.editor}})],1),n("section",{staticClass:"section last"},[t._m(1),n("div",{staticClass:"section__content prevent-width"},[n("ul",{staticClass:"grid mobile-scroll"},t._l(3,function(e){return n("div",{staticClass:"item"},[t.is_admin?n("select",{directives:[{name:"model",rawName:"v-model",value:t.project.json.projects[e],expression:"project.json.projects[i]"}],staticClass:"select",on:{change:function(n){var r=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.project.json.projects,e,n.target.multiple?r:r[0])}}},t._l(t.get_all_projects_ids,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e))])}),0):t._e(),t.get_projects_from_id(t.project.json.projects[e])?n("v-project-card",{key:t.get_projects_from_id(t.project.json.projects[e]).json.title+e,attrs:{project:t.get_projects_from_id(t.project.json.projects[e]),disbaled:""}}):t._e()],1)}),0)])]),n("footer",{staticClass:"back-to-home",on:{click:function(e){return t.$router.push("/")}}},[t._m(2)])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page__grid--layer"},[n("div",{staticClass:"page__grid--layer__grid"},[n("span"),n("span"),n("span")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"section__header"},[n("h3",{staticClass:"section__jumper"},[t._v("You might also like")]),n("h2",{staticClass:"section__title"},[t._v("Other Projects")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"back-to-home__content"},[n("span",[t._v("back home")])])}],a=n("bd86"),i=n("cebc"),s=n("f499"),c=n.n(s),l=(n("a481"),n("795b")),u=n.n(l);n("9f24"),n("96cf");function p(t,e,n,r,o,a,i){try{var s=t[a](i),c=s.value}catch(l){return void n(l)}s.done?e(c):u.a.resolve(c).then(r,o)}function f(t){return function(){var e=this,n=arguments;return new u.a(function(r,o){var a=t.apply(e,n);function i(t){p(a,r,o,i,s,"next",t)}function s(t){p(a,r,o,i,s,"throw",t)}i(void 0)})}}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var d=n("85f2"),v=n.n(d);function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),v()(t,r.key,r)}}function g(t,e,n){return e&&m(t.prototype,e),n&&m(t,n),t}var b=n("5d58"),_=n.n(b),y=n("67bb"),j=n.n(y);function w(t){return w="function"===typeof j.a&&"symbol"===typeof _.a?function(t){return typeof t}:function(t){return t&&"function"===typeof j.a&&t.constructor===j.a&&t!==j.a.prototype?"symbol":typeof t},w(t)}function k(t){return k="function"===typeof j.a&&"symbol"===w(_.a)?function(t){return w(t)}:function(t){return t&&"function"===typeof j.a&&t.constructor===j.a&&t!==j.a.prototype?"symbol":w(t)},k(t)}function x(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(t,e){return!e||"object"!==k(e)&&"function"!==typeof e?x(t):e}var E=n("061b"),M=n.n(E),L=n("4d16"),O=n.n(L);function A(t){return A=O.a?M.a:function(t){return t.__proto__||M()(t)},A(t)}var $=n("4aa6"),N=n.n($);function D(t,e){return D=O.a||function(t,e){return t.__proto__=e,t},D(t,e)}function P(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=N()(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&D(t,e)}var S,I=n("cd42"),R=n("a9de"),T=function(t){function e(){return h(this,e),C(this,A(e).apply(this,arguments))}return P(e,t),g(e,[{key:"getclass",value:function(t){return"text-img "+t.attrs.className}},{key:"pasteRules",value:function(t){var e=t.type;return[Object(R["h"])(/(http(s?):)([\/|.|\w|\s|-])*\.(?:jpg|gif|png)/g,e,function(t){return{src:t,alt:"no alt"}})]}},{key:"commands",value:function(t){var e=t.type;return function(t){return function(n,r){var o=function(){var o=f(regeneratorRuntime.mark(function o(){var a,i,s,c,l;return regeneratorRuntime.wrap(function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,t.promise.promise;case 2:a=t.getter(),console.log(a),t.src=a.src,t.alt=a.alt,t.className=a.className,i=n.selection,s=i.$cursor?i.$cursor.pos:i.$to.pos,c=e.create(t),l=n.tr.insert(s,c),r(l);case 12:case"end":return o.stop()}},o)}));return function(){return o.apply(this,arguments)}}();o()}}}},{key:"name",get:function(){return"image"}},{key:"schema",get:function(){var t=this;return{attrs:{level:{default:1},src:{default:""},alt:{default:""},className:{default:""}},group:"block",draggable:!0,selectable:!0,parseDOM:[{tag:"img[src]",getAttrs:function(t){return{src:t.getAttribute("src"),className:t.getAttribute("className"),alt:t.getAttribute("alt")}}},{tag:"figure",class:"text-img",getAttrs:function(t){return{src:t.getAttribute("src"),className:t.getAttribute("className"),alt:t.getAttribute("alt")}}}],toDOM:function(e){return["figure",Object(i["a"])({},e.attrs,{class:t.getclass(e)})]}}}},{key:"view",get:function(){return{props:["node","updateAttrs","editable"],data:function(){return{}},computed:{alt:{get:function(){return this.node.attrs.alt},set:function(t){this.updateAttrs({alt:t})}},src:{get:function(){return this.node.attrs.src},set:function(t){this.updateAttrs({src:t})}},className:{get:function(){return this.node.attrs.className},set:function(t){this.updateAttrs({className:t})}}},methods:{supr:function(){this.$el.replaceWith("")}},template:'\n        <div class="image">\n          <div class="image__abs" >\n            <image-loader class="image__preview" :src="src"  :alt="alt" :className="className" ></image-loader>\n          </div>\n          <span class="alt">{{alt}}</span>\n        </div>\n      '}}}]),e}(I["h"]),U=(I["h"],function(t){function e(){return h(this,e),C(this,A(e).apply(this,arguments))}return P(e,t),g(e,[{key:"commands",value:function(t){var e=t.type;return function(t){return function(n,r){var o=n.selection,a=o.$cursor?o.$cursor.pos:o.$to.pos,i=e.create(t),s=n.tr.insert(a,i);r(s)}}}},{key:"inputRules",value:function(t){var e=t.type;return[Object(R["v"])(/^---$/,e)]}},{key:"name",get:function(){return"spacer"}},{key:"schema",get:function(){return{group:"block",attrs:{level:{default:1}},draggable:!0,parseDOM:[{tag:"hr"}],toDOM:function(){return["hr",{class:"spacer"}]}}}}]),e}(I["h"])),H=n("f23d"),F=function(t){function e(){return h(this,e),C(this,A(e).apply(this,arguments))}return P(e,t),g(e,[{key:"schema",get:function(){return{attrs:{href:{default:null},target:{default:null}},inclusive:!1,parseDOM:[{tag:"a[href]",getAttrs:function(t){return{href:t.getAttribute("href"),target:t.getAttribute("target")}}}],toDOM:function(t){return["a",Object(i["a"])({},t.attrs,{target:"__blank",rel:'noopener ,noreferrer"'}),0]}}}}]),e}(H["k"]),G=n("4dd1"),K=n.n(G),q=n("ee8c"),B=n.n(q),Y=n("2f62"),J=(S={components:{EditorContent:I["b"],EditorMenuBar:I["d"],EditorMenuBubble:I["e"],EditorFloatingMenu:I["c"]},data:function(){var t=this;return{imageModal:{isOpen:!1,imageData:{src:"",alt:"",className:""},classes:["classic","tall","long","square"],promise:null},projectData:{projectImage:"",porjectDescription:"",projectTitle:"",projectColor:""},url:null,editor:new I["a"]({editable:!0,extensions:[new H["a"],new H["c"],new H["e"],new H["g"],new H["h"]({levels:[1,2,3,4]}),new H["l"],new H["m"],new H["t"],new H["u"],new H["b"],new H["d"],new H["j"],new F,new H["o"],new H["v"],new H["i"],new H["p"],new H["r"],new H["q"],new H["s"],new H["f"]({languages:{javascript:K.a,css:B.a}}),new T,new U],onUpdate:function(e){var n=e.getHTML;t.project.content=n()}}),html:"null",editable:this.is_admin,linkUrl:null,linkMenuIsActive:!1,imageUrl:null,imageMenuIsActive:!1}},beforeDestroy:function(){this.editor.destroy(),document.removeEventListener("keydown",this.onKepPress,!1)},methods:{resolve:function(){this.imageModal.promise.resolve()},reject:function(){this.imageModal.promise.resolve()},showImagePrompt:function(t){function e(){var t={promise:null,resolve:null,reject:null};return t.promise=new u.a(function(e,n){t.resolve=e,t.reject=n}),t}this.imageModal.isOpen=!0,this.imageModal.promise=e(),t({promise:this.imageModal.promise,getter:this.getData})},getData:function(){return this.imageModal.isOpen=!1,{src:this.imageModal.imageData.src,alt:this.imageModal.imageData.alt,className:this.imageModal.imageData.class}},onKepPress:function(t){event.metaKey&&"s"===event.key&&(event.preventDefault(),this.onSave())},showLinkMenu:function(t){var e=this;this.linkUrl=t.href,this.linkMenuIsActive=!0,this.$nextTick(function(){e.$refs.linkInput.focus()})},hideLinkMenu:function(){this.linkUrl=null,this.linkMenuIsActive=!1},setLinkUrl:function(t,e){t({href:e}),this.hideLinkMenu(),this.editor.focus()},onSave:function(){var t={content:this.editor.getHTML(),url:this.$refs.url.getValue().replace(/\s+/g,"_"),json:c()(this.project.json)};axios.put("https://api.simon-renault.com/pages/".concat(this.project.id,"?token=").concat(localStorage.getItem("token")),t)},del:function(){axios.delete("https://api.simon-renault.com/pages/".concat(this.project.id,"?token=").concat(localStorage.getItem("token"))),this.$router.push({path:"/"})}},computed:Object(i["a"])({},Object(Y["c"])(["get_projects_from_id","get_projects_from_ids","get_all_projects_ids","get_all_cats"]),Object(Y["e"])({is_admin:function(t){return t.store_global.is_admin}}),{project:function(){var t=this.get_projects_from_id(this.url);return t||{title:"",json:{title:"",image:{src:""},exerpt:"",projects:"",isPublished:!1,isLight:!1}}}}),created:function(){var t=this;if(this.is_admin){this.url=this.$route.params.id;this.get_projects_from_id(this.url);axios.get("https://api.simon-renault.com/pages/".concat(this.$route.params.id)).then(function(e){var n=e.data;t.project.content=n.content,t.editor.setContent(t.project.content)})}else this.$router.push("/")}},Object(a["a"])(S,"beforeDestroy",function(){this.editor.destroy(),document.removeEventListener("keydown",this.onKepPress,!1)}),Object(a["a"])(S,"updated",function(){this.editor.setContent(this.project.content)}),Object(a["a"])(S,"mounted",function(){this.html=this.editor.getHTML(),document.addEventListener("keydown",this.onKepPress,!1),this.editor.setContent(this.project.content)}),S),V=J,W=(n("04a4"),n("2877")),z=Object(W["a"])(V,r,o,!1,null,null,null);e["default"]=z.exports},9427:function(t,e,n){var r=n("63b6");r(r.S,"Object",{create:n("a159")})},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new L(r||[]);return a._invoke=x(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=c;var u="suspendedStart",p="suspendedYield",f="executing",h="completed",d={};function v(){}function m(){}function g(){}var b={};b[a]=function(){return this};var _=Object.getPrototypeOf,y=_&&_(_(O([])));y&&y!==n&&r.call(y,a)&&(b=y);var j=g.prototype=v.prototype=Object.create(b);function w(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){function e(n,o,a,i){var s=l(t[n],t,o);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(u).then(function(t){c.value=t,a(c)},function(t){return e("throw",t,a,i)})}i(s.arg)}var n;function o(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}this._invoke=o}function x(t,e,n){var r=u;return function(o,a){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw a;return A()}n.method=o,n.arg=a;while(1){var i=n.delegate;if(i){var s=C(i,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?h:p,c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}function C(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,C(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var n=t[a];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){while(++o<t.length)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:A}}function A(){return{value:e,done:!0}}return m.prototype=j.constructor=g,g.constructor=m,g[s]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},w(k.prototype),k.prototype[i]=function(){return this},t.AsyncIterator=k,t.async=function(e,n,r,o){var a=new k(c(e,n,r,o));return t.isGeneratorFunction(n)?a:a.next().then(function(t){return t.done?t.value:a.next()})},w(j),j[s]="Generator",j[a]=function(){return this},j.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(M),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;M(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},"9aa3":function(t,e,n){},a481:function(t,e,n){"use strict";var r=n("cb7c"),o=n("4bf8"),a=n("9def"),i=n("4588"),s=n("0390"),c=n("5f1b"),l=Math.max,u=Math.min,p=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,d=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,function(t,e,n,v){return[function(r,o){var a=t(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,a,o):n.call(String(a),r,o)},function(t,e){var o=v(n,t,this,e);if(o.done)return o.value;var p=r(t),f=String(this),h="function"===typeof e;h||(e=String(e));var g=p.global;if(g){var b=p.unicode;p.lastIndex=0}var _=[];while(1){var y=c(p,f);if(null===y)break;if(_.push(y),!g)break;var j=String(y[0]);""===j&&(p.lastIndex=s(f,a(p.lastIndex),b))}for(var w="",k=0,x=0;x<_.length;x++){y=_[x];for(var C=String(y[0]),E=l(u(i(y.index),f.length),0),M=[],L=1;L<y.length;L++)M.push(d(y[L]));var O=y.groups;if(h){var A=[C].concat(M,E,f);void 0!==O&&A.push(O);var $=String(e.apply(void 0,A))}else $=m(C,f,E,M,O,e);E>=k&&(w+=f.slice(k,E)+$,k=E+C.length)}return w+f.slice(k)}];function m(t,e,r,a,i,s){var c=r+t.length,l=a.length,u=h;return void 0!==i&&(i=o(i),u=f),n.call(s,u,function(n,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(c);case"<":s=i[o.slice(1,-1)];break;default:var u=+o;if(0===u)return n;if(u>l){var f=p(u/10);return 0===f?n:f<=l?void 0===a[f-1]?o.charAt(1):a[f-1]+o.charAt(1):n}s=a[u-1]}return void 0===s?"":s})}})},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},d8d6:function(t,e,n){n("1654"),n("6c1c"),t.exports=n("ccb9").f("iterator")},dc62:function(t,e,n){n("9427");var r=n("584a").Object;t.exports=function(t,e){return r.create(t,e)}},ead6:function(t,e,n){var r=n("f772"),o=n("e4ae"),a=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("d864")(Function.call,n("bf0b").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:a}},f921:function(t,e,n){n("014b"),n("c207"),n("69d3"),n("765d"),t.exports=n("584a").Symbol},fa99:function(t,e,n){n("0293"),t.exports=n("584a").Object.getPrototypeOf}}]);