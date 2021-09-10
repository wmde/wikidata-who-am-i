(function(e){function t(t){for(var r,u,i=t[0],o=t[1],c=t[2],p=0,f=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(s,u)&&s[u]&&f.push(s[u][0]),s[u]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var o=n[i];0!==s[o]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},s={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/wikidata-who-am-i/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=o;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"46a6":function(e,t,n){"use strict";n("9dfb")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Wikidata Who am I?")]),e._v(" A secret item has been generated. Ask the right questions to find out who you are! "),n("Secrets",{attrs:{listOfPossibleSecrets:e.listOfPossibleSecrets}}),n("Question",{on:{evaluate:e.addPropValueQuestion,evaluateSparql:e.addSparqlQuestion}}),e.questions.length>0?n("Guess",{staticClass:"guess",on:{guess:e.addGuessQuestion}}):e._e(),e._l(e.reversedQuestions,(function(t){return n("div",{key:t.id},["normal"===t.type?n("Answer",{attrs:{secret:e.secret,property:t.property,value:t.value}}):e._e(),"sparql"===t.type?n("SparqlAnswer",{attrs:{secret:e.secret,sparql:t.sparql}}):e._e(),"guess"===t.type?n("GuessAnswer",{attrs:{secret:e.secret,guess:t.guess}}):e._e()],1)}))],2)},a=[],u=n("5530"),i=n("2909"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"secrets"},e._l(e.images,(function(e,t){return n("img",{key:t,attrs:{src:e,alt:"fdgf"}})})),0)},c=[],l=n("1da1"),p=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("d81d"),n("d4ec")),f=n("bee2"),d=function(){function e(t){Object(p["a"])(this,e),this.endpoint=t}return Object(f["a"])(e,[{key:"query",value:function(e){var t=this.endpoint+"?query="+encodeURIComponent(e),n={Accept:"application/sparql-results+json"};return fetch(t,{headers:n}).then((function(e){return e.json()}))}}]),e}(),h={name:"Secrets",props:["listOfPossibleSecrets"],data:function(){return{images:[]}},created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.listOfPossibleSecrets.map(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y.query("SELECT ?img WHERE { wd:".concat(t," wdt:P18 ?img }"));case 2:return n=e.sent,e.abrupt("return",n.results.bindings[0].img.value);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:e.images=t.sent;case 3:case"end":return t.stop()}}),t)})))()}},v="https://query.wikidata.org/sparql",y=new d(v),m=h,g=(n("46a6"),n("2877")),b=Object(g["a"])(m,o,c,!1,null,"152f2da6",null),w=b.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question"},[e.expertMode?n("div",{staticClass:"form"},[n("TextInput",{attrs:{label:"SPARQL",placeholder:"?secret wdt:P123 wd:Q123"},model:{value:e.sparql,callback:function(t){e.sparql=t},expression:"sparql"}}),n("Button",{staticClass:"button",attrs:{variant:"primary",type:"progressive"},nativeOn:{click:function(t){return e.evaluateSparql.apply(null,arguments)}}},[e._v("ASK!")]),n("div",[n("small",[n("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.expertMode=!1}}},[e._v("😭️️")])])])],1):n("div",{staticClass:"form"},[n("EntitySelector",{staticClass:"form-element",attrs:{label:"Property",type:"property",value:e.property},on:{input:function(t){e.property=t}}}),n("EntitySelector",{staticClass:"form-element",attrs:{label:"Value",type:"item",value:e.value},on:{input:function(t){e.value=t}}}),n("Button",{staticClass:"form-element button",attrs:{variant:"primary",type:"progressive",disabled:!e.property||!e.value},nativeOn:{click:function(t){return e.evaluate.apply(null,arguments)}}},[e._v(" ? ? ? ")]),n("div",[n("small",[n("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.expertMode=!0}}},[e._v("👽️")])])])],1)])},q=[],S=(n("ac1f"),n("841c"),n("5b80")),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Lookup",{staticClass:"entity-selector",attrs:{label:e.label,"search-input":e.search,value:e.value,"menu-items":e.entities},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t},input:function(t){return e.$emit("input",t)}},scopedSlots:e._u([{key:"no-results",fn:function(){return[e._v(" No match was found ")]},proxy:!0}])})},x=[],Q=(n("99af"),n("b012")),j=n.n(Q),k={name:"EntitySelector",props:["label","type","value"],data:function(){return{search:"",entities:[]}},watch:{search:j()(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&search=".concat(t,"&language=en&limit=10&origin=*&type=").concat(this.type));case 2:return e.next=4,e.sent.json();case 4:n=e.sent,this.entities=n.search;case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),200),value:function(e){null===e&&(this.search="")}},components:{Lookup:S["Lookup"]}},C=k,M=(n("b111"),Object(g["a"])(C,O,x,!1,null,null,null)),P=M.exports,A={name:"Question",components:{EntitySelector:P,TextInput:S["TextInput"],Button:S["Button"]},data:function(){return{property:null,value:null,expertMode:!1,sparql:""}},methods:{evaluate:function(){this.$emit("evaluate",{property:this.property,value:this.value}),this.value=null,this.search=""},evaluateSparql:function(){this.$emit("evaluateSparql",this.sparql),this.sparql=""}}},E=A,$=(n("bda9"),Object(g["a"])(E,_,q,!1,null,"63e7941e",null)),I=$.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"answer"},[n("Message",{attrs:{type:e.answerMessageType}},[e._v(" "+e._s(e.property.label)+" "+e._s(e.value.label)+" ")])],1)},B=[],G="https://query.wikidata.org/sparql",R=new d(G),L={name:"Answer",components:{Message:S["Message"]},props:["property","value","secret"],data:function(){return{isCorrect:null}},created:function(){var e=this,t="ASK {\n\t\tBIND( wd:".concat(this.secret," AS ?secret )\n\t\t?secret wdt:").concat(this.propertyInQuery," wd:").concat(this.value.id," .\n\t\t}");R.query(t).then((function(t){var n=t.boolean;e.isCorrect=n}))},computed:{answerMessageType:function(){return null===this.isCorrect?"notice":this.isCorrect?"success":"error"},propertyInQuery:function(){return"P31"===this.property.id||"P106"===this.property.id?this.property.id+"/wdt:P279*":this.property.id}}},D=L,K=Object(g["a"])(D,T,B,!1,null,"13c9db06",null),N=K.exports,V=(n("d14d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"guess"},[e.ready?n("div",{staticClass:"enter-guess"},[n("EntitySelector",{attrs:{label:"Item",type:"item"},on:{input:function(t){e.guess=t}}}),n("Button",{attrs:{variant:"primary",type:"progressive",disabled:!e.guess},nativeOn:{click:function(t){return e.evaluateGuess.apply(null,arguments)}}},[e._v(" Make a guess! ")])],1):n("Button",{nativeOn:{click:function(t){e.ready=!0}}},[e._v("I'm ready to guess!")])],1)}),W=[],J={name:"Guess",data:function(){return{ready:!1,guess:null}},methods:{evaluateGuess:function(){this.$emit("guess",this.guess)}},components:{EntitySelector:P,Button:S["Button"]}},H=J,U=(n("f29e"),Object(g["a"])(H,V,W,!1,null,"5f8a0d74",null)),Y=U.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"answer"},[n("Message",{attrs:{type:e.answerMessageType}},[n("code",[e._v(e._s(e.sparql))])])],1)},F=[],X="https://query.wikidata.org/sparql",Z=new d(X),ee={name:"SparqlAnswer",components:{Message:S["Message"]},props:["sparql","secret"],data:function(){return{isCorrect:null}},created:function(){var e=this,t="ASK {\n\t\tBIND( wd:".concat(this.secret," AS ?secret )\n\t\t").concat(this.sparql," .\n\t\t}");Z.query(t).then((function(t){var n=t.boolean;e.isCorrect=n}))},computed:{answerMessageType:function(){return null===this.isCorrect?"notice":this.isCorrect?"success":"error"}}},te=ee,ne=Object(g["a"])(te,z,F,!1,null,"368f8801",null),re=ne.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"answer"},[e.guess.id===e.secret?n("Message",{attrs:{type:"success"}},[e._v(" Correct! You are "+e._s(e.guess.label)+"!! 🎉️🎉️🎉️ ")]):n("Message",{attrs:{type:"error"}},[e._v(" Nope, you're not "+e._s(e.guess.label)+". Keep guessing! ")])],1)},ae=[],ue={name:"GuessAnswer",components:{Message:S["Message"]},props:["secret","guess"],data:function(){return{isCorrect:null}}},ie=ue,oe=Object(g["a"])(ie,se,ae,!1,null,null,null),ce=oe.exports,le={name:"App",data:function(){return{listOfPossibleSecrets:["Q42","Q1744","Q937","Q7810","Q567","Q79015","Q692","Q7259","Q10943","Q5383"],questions:[]}},components:{GuessAnswer:ce,SparqlAnswer:re,Secrets:w,Guess:Y,Answer:N,Question:I},created:function(){this.secret=this.listOfPossibleSecrets[Math.floor(Math.random()*this.listOfPossibleSecrets.length)]},computed:{reversedQuestions:function(){return Object(i["a"])(this.questions).reverse()}},methods:{addPropValueQuestion:function(e){var t=e.property,n=e.value;this.addQuestion({type:"normal",property:t,value:n})},addSparqlQuestion:function(e){this.addQuestion({type:"sparql",sparql:e})},addGuessQuestion:function(e){this.addQuestion({type:"guess",guess:e})},addQuestion:function(e){this.questions.push(Object(u["a"])({id:Math.random()},e))}}},pe=le,fe=(n("034f"),Object(g["a"])(pe,s,a,!1,null,null,null)),de=fe.exports;r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(de)}}).$mount("#app")},6630:function(e,t,n){},"85ec":function(e,t,n){},"95c7":function(e,t,n){},"9dfb":function(e,t,n){},b111:function(e,t,n){"use strict";n("6630")},bda9:function(e,t,n){"use strict";n("e4a6")},e4a6:function(e,t,n){},f29e:function(e,t,n){"use strict";n("95c7")}});
//# sourceMappingURL=app.aadb6815.js.map