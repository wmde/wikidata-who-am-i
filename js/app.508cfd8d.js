(function(e){function t(t){for(var r,o,u=t[0],i=t[1],c=t[2],p=0,f=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/wikidata-who-am-i/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"18a7":function(e,t,n){},"325c":function(e,t,n){"use strict";n("518d")},"518d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Wikidata Who am I?")]),e._v(" A secret item has been generated. Ask the right questions to find out who you are! "),n("Question",{on:{evaluate:e.evaluateQuestion}}),e.answers.length>0?n("Guess",{staticClass:"guess",attrs:{secret:e.secret}}):e._e(),e._l(e.answers,(function(t,r){return n("Answer",{key:r,attrs:{secret:e.secret,property:t.property,value:t.value}})}))],2)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question"},[n("div",{staticClass:"form"},[n("Dropdown",{staticClass:"form-element",attrs:{label:"Property","menu-items":e.properties,placeholder:"select a property"},model:{value:e.property,callback:function(t){e.property=t},expression:"property"}}),n("Lookup",{staticClass:"form-element",attrs:{label:"Value","search-input":e.search,"menu-items":e.items,placeholder:"enter an item"},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t}},scopedSlots:e._u([{key:"no-results",fn:function(){return[e._v(" No match was found ")]},proxy:!0}]),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("Button",{staticClass:"form-element button",attrs:{variant:"primary",type:"progressive",disabled:!e.property||!e.value},nativeOn:{click:function(t){return e.evaluate.apply(null,arguments)}}},[e._v(" ? ? ? ")])],1)])},u=[],i=(n("4de4"),n("caad"),n("2532"),n("ac1f"),n("841c"),n("5b80")),c={name:"Question",components:{Button:i["Button"],Dropdown:i["Dropdown"],Lookup:i["Lookup"]},data:function(){return{property:null,search:"",value:null,properties:[{label:"is",id:"P31"},{label:"occupation",id:"P106"}],selectedItem:null}},computed:{items:function(){var e=this,t=[{id:"Q5",label:"human"},{id:"Q901",label:"scientist"},{id:"Q95074",label:"fictional character"},{id:"Q82955",label:"politician"},{id:"Q2095",label:"food"}];return t.filter((function(t){return t.label.includes(e.search)}))}},methods:{evaluate:function(){this.$emit("evaluate",{property:this.property,value:this.value}),this.value=null,this.search="",this.property=null}}},l=c,p=(n("ef3a"),n("2877")),f=Object(p["a"])(l,o,u,!1,null,"74a2ec4e",null),d=f.exports,h=(n("d14d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"answer"},[n("Message",{attrs:{type:e.answerMessageType}},[e._v(" "+e._s(e.property.label)+" "+e._s(e.value.label)+" ")])],1)}),v=[],m=n("d4ec"),y=n("bee2"),b=(n("d3b7"),n("99af"),function(){function e(t){Object(m["a"])(this,e),this.endpoint=t}return Object(y["a"])(e,[{key:"query",value:function(e){var t=this.endpoint+"?query="+encodeURIComponent(e),n={Accept:"application/sparql-results+json"};return fetch(t,{headers:n}).then((function(e){return e.json()}))}}]),e}()),w="https://query.wikidata.org/sparql",g=new b(w),_={name:"Answer",components:{Message:i["Message"]},props:["property","value","secret"],data:function(){return{isCorrect:null}},created:function(){var e=this,t="ASK {\n\t\tBIND( wd:".concat(this.secret," AS ?secret )\n\t\t?secret wdt:").concat(this.property.id," wd:").concat(this.value.id," .\n\t\t}");g.query(t).then((function(t){var n=t.boolean;e.isCorrect=n}))},computed:{answerMessageType:function(){return null===this.isCorrect?"notice":this.isCorrect?"success":"error"}}},k=_,O=(n("325c"),Object(p["a"])(k,h,v,!1,null,"10d65a46",null)),j=O.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"guess"},[e.ready?n("div",{staticClass:"enter-guess"},[n("EntitySelector",{attrs:{label:"Item"},on:{input:function(t){e.guess=t}}}),n("Button",{attrs:{variant:"primary",type:"progressive",disabled:!e.guess},nativeOn:{click:function(t){return e.evaluateGuess.apply(null,arguments)}}},[e._v(" Make a guess! ")])],1):n("Button",{nativeOn:{click:function(t){e.ready=!0}}},[e._v("I'm ready to guess!")])],1)},C=[],Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Lookup",{staticClass:"entity-selector",attrs:{label:e.label,"search-input":e.search,valuel:e.value,"menu-items":e.entities},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t},input:function(t){return e.$emit("input",t)}},scopedSlots:e._u([{key:"no-results",fn:function(){return[e._v(" No match was found ")]},proxy:!0}])})},M=[],S=n("1da1"),P=(n("96cf"),{name:"EntitySelector",props:["label"],data:function(){return{search:"",value:null,entities:[]}},watch:{search:function(e){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&search=".concat(e,"&language=en&limit=10&origin=*"));case 2:return n.next=4,n.sent.json();case 4:r=n.sent,t.entities=r.search;case 6:case"end":return n.stop()}}),n)})))()}},components:{Lookup:i["Lookup"]}}),A=P,q=(n("b111"),Object(p["a"])(A,Q,M,!1,null,null,null)),B=q.exports,E={name:"Guess",props:["secret"],data:function(){return{ready:!1,guess:null}},methods:{evaluateGuess:function(){this.guess.id===this.secret?alert("Correct! You're ".concat(this.guess.label,"!! 🎉️🎉️🎉️")):(alert("Nope, that's not who you are. Keep guessing!"),this.ready=!1)}},components:{EntitySelector:B,Button:i["Button"]}},I=E,$=(n("843e"),Object(p["a"])(I,x,C,!1,null,"403af015",null)),L=$.exports,G=["Q42","Q937","Q567","Q10943"],T={name:"App",data:function(){return{answers:[]}},components:{Guess:L,Answer:j,Question:d},created:function(){this.secret=G[Math.floor(Math.random()*G.length)]},methods:{evaluateQuestion:function(e){var t=e.property,n=e.value;this.answers.push({property:t,value:n})}}},D=T,N=(n("034f"),Object(p["a"])(D,a,s,!1,null,null,null)),R=N.exports;r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(R)}}).$mount("#app")},6630:function(e,t,n){},"843e":function(e,t,n){"use strict";n("18a7")},"85ec":function(e,t,n){},af3a:function(e,t,n){},b111:function(e,t,n){"use strict";n("6630")},ef3a:function(e,t,n){"use strict";n("af3a")}});
//# sourceMappingURL=app.508cfd8d.js.map