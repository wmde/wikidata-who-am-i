(function(e){function t(t){for(var r,i,o=t[0],u=t[1],c=t[2],p=0,f=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==s[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},s={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/wikidata-who-am-i/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"387e":function(e,t,n){e.exports=n.p+"img/github.91549547.svg"},"461c":function(e,t,n){"use strict";n("8579")},"557a":function(e,t,n){"use strict";n("d1fb")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),e._v(" Your secret identity has been generated. Ask the right questions to find out who you are! "),e._m(1),n("Secrets",{attrs:{listOfPossibleSecrets:e.listOfPossibleSecrets}}),n("Question",{on:{evaluate:e.addPropValueQuestion,evaluateSparql:e.addSparqlQuestion}}),e.questions.length>0?n("Guess",{staticClass:"guess",on:{guess:e.addGuessQuestion}}):e._e(),e._l(e.reversedQuestions,(function(t){return n("div",{key:t.id},["normal"===t.type?n("Answer",{attrs:{secret:e.secret,property:t.property,value:t.value}}):e._e(),"sparql"===t.type?n("SparqlAnswer",{attrs:{secret:e.secret,sparql:t.sparql}}):e._e(),"guess"===t.type?n("GuessAnswer",{attrs:{secret:e.secret,guess:t.guess}}):e._e()],1)}))],2)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[e._v("Wikidata, who am I"),r("img",{attrs:{src:n("9b19"),width:"50px",height:"50px"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{attrs:{href:"https://github.com/wmde/wikidata-who-am-i"}},[r("img",{attrs:{src:n("387e"),target:"_blank",width:"11px"}})])}],i=n("5530"),o=n("2909"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"secrets"},e._l(e.images,(function(e){var t=e.id,r=e.url;return n("img",{key:t,attrs:{src:r,alt:t}})})),0)},c=[],l=n("1da1"),p=(n("96cf"),n("d81d"),n("a15b"),n("d4ec")),f=n("bee2"),d=(n("d3b7"),function(){function e(t){Object(p["a"])(this,e),this.endpoint=t}return Object(f["a"])(e,[{key:"query",value:function(e){var t=this.endpoint+"?query="+encodeURIComponent(e),n={Accept:"application/sparql-results+json"};return fetch(t,{headers:n}).then((function(e){return e.json()}))}}]),e}()),h="https://query.wikidata.org/sparql",m=new d(h),v={name:"Secrets",props:["listOfPossibleSecrets"],data:function(){return{images:[]}},created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.query("SELECT ?thumb ?item WHERE {\n        VALUES ?item { ".concat(e.listOfPossibleSecrets.map((function(e){return"wd:"+e})).join(" "),' }\n        ?item wdt:P18 ?image .\n\n        # hacky way to get a thumbnail from commons per https://stackoverflow.com/a/67332685\n        BIND(REPLACE(wikibase:decodeUri(STR(?image)), "http://commons.wikimedia.org/wiki/Special:FilePath/", "") as ?fileName) .\n        BIND(REPLACE(?fileName, " ", "_") as ?safeFileName)\n        BIND(MD5(?safeFileName) as ?fileNameMD5) .\n        BIND(CONCAT("https://upload.wikimedia.org/wikipedia/commons/thumb/", SUBSTR(?fileNameMD5, 1, 1), "/", SUBSTR(?fileNameMD5, 1, 2), "/", ?safeFileName, "/650px-", ?safeFileName) as ?thumb)\n      }'));case 2:e.images=t.sent.results.bindings.map((function(e){return{id:e.item.value,url:e.thumb.value}}));case 3:case"end":return t.stop()}}),t)})))()}},y=v,g=(n("557a"),n("2877")),b=Object(g["a"])(y,u,c,!1,null,"0b1cff4d",null),w=b.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question"},[e.expertMode?n("div",{staticClass:"form"},[n("TextInput",{attrs:{label:"SPARQL",placeholder:"?secret wdt:P123 wd:Q123"},model:{value:e.sparql,callback:function(t){e.sparql=t},expression:"sparql"}}),n("Button",{staticClass:"button",attrs:{variant:"primary",type:"progressive"},nativeOn:{click:function(t){return e.evaluateSparql.apply(null,arguments)}}},[e._v("ASK!")]),n("div",[n("small",[n("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.expertMode=!1}}},[e._v("😭️️")])])])],1):n("div",{staticClass:"form"},[n("EntitySelector",{staticClass:"form-element",attrs:{label:"Property",error:{message:"Warning message",type:"warning"},placeholder:"e.g. instance of",type:"property",value:e.property},on:{input:function(t){e.property=t}}}),n("EntitySelector",{staticClass:"form-element",attrs:{label:"Value",placeholder:"e.g. fictional character",type:"item",value:e.value},on:{input:function(t){e.value=t}}}),n("Button",{staticClass:"form-element button",attrs:{variant:"primary",type:"progressive",disabled:!e.property||!e.value},nativeOn:{click:function(t){return e.evaluate.apply(null,arguments)}}},[e._v(" ? ? ? ")]),n("div",[n("small",[n("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.expertMode=!0}}},[e._v("👽️")])])])],1)])},S=[],q=(n("ac1f"),n("841c"),n("5b80")),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Lookup",{staticClass:"entity-selector",attrs:{label:e.label,placeholder:e.placeholder,"search-input":e.search,value:e.value,"menu-items":e.entities},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t},input:function(t){return e.$emit("input",t)}},scopedSlots:e._u([{key:"no-results",fn:function(){return[e._v(" No match was found ")]},proxy:!0}])})},k=[],x=(n("99af"),n("b012")),C=n.n(x),M={name:"EntitySelector",props:["label","type","value","placeholder"],data:function(){return{search:"",entities:[]}},watch:{search:C()(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&search=".concat(t,"&language=en&limit=10&origin=*&type=").concat(this.type));case 2:return e.next=4,e.sent.json();case 4:n=e.sent,this.entities=n.search;case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),200),value:function(e){null===e&&(this.search="")}},components:{Lookup:q["Lookup"]}},Q=M,j=(n("b111"),Object(g["a"])(Q,O,k,!1,null,null,null)),P=j.exports,E={name:"Question",components:{EntitySelector:P,TextInput:q["TextInput"],Button:q["Button"]},data:function(){return{property:null,value:null,expertMode:!1,sparql:""}},methods:{evaluate:function(){this.$emit("evaluate",{property:this.property,value:this.value}),this.value=null,this.search=""},evaluateSparql:function(){this.$emit("evaluateSparql",this.sparql),this.sparql=""}}},A=E,N=(n("5d9c"),Object(g["a"])(A,_,S,!1,null,"cac460a2",null)),B=N.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"answer"},[n("Message",{attrs:{type:e.answerMessageType}},[e._v(" "+e._s(e.property.label)+" "+e._s(e.value.label)+" ")])],1)},T=[],$="https://query.wikidata.org/sparql",D=new d($),R={name:"Answer",components:{Message:q["Message"]},props:["property","value","secret"],data:function(){return{isCorrect:null}},created:function(){var e=this,t="ASK {\n\t\tBIND( wd:".concat(this.secret," AS ?secret )\n\t\t?secret wdt:").concat(this.propertyInQuery," wd:").concat(this.value.id," .\n\t\t}");D.query(t).then((function(t){var n=t.boolean;e.isCorrect=n}))},computed:{answerMessageType:function(){return null===this.isCorrect?"notice":this.isCorrect?"success":"error"},propertyInQuery:function(){return"P31"===this.property.id||"P106"===this.property.id?this.property.id+"/wdt:P279*":this.property.id}}},G=R,L=Object(g["a"])(G,I,T,!1,null,"13c9db06",null),F=L.exports,U=(n("d14d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"guess"},[e.ready?n("div",{staticClass:"enter-guess"},[n("EntitySelector",{attrs:{label:"I am ...",type:"item"},on:{input:function(t){e.guess=t}}}),n("Button",{attrs:{variant:"primary",type:"progressive",disabled:!e.guess},nativeOn:{click:function(t){return e.evaluateGuess.apply(null,arguments)}}},[e._v(" Make a guess! ")])],1):n("Button",{nativeOn:{click:function(t){e.ready=!0}}},[e._v("I'm ready to guess!")])],1)}),K=[],V={name:"Guess",data:function(){return{ready:!1,guess:null}},methods:{evaluateGuess:function(){this.$emit("guess",this.guess)}},components:{EntitySelector:P,Button:q["Button"]}},W=V,J=(n("461c"),Object(g["a"])(W,U,K,!1,null,"1c896888",null)),Y=J.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"answer"},[n("Message",{attrs:{type:e.answerMessageType}},[n("code",[e._v(e._s(e.sparql))])])],1)},z=[],X="https://query.wikidata.org/sparql",Z=new d(X),ee={name:"SparqlAnswer",components:{Message:q["Message"]},props:["sparql","secret"],data:function(){return{isCorrect:null}},created:function(){var e=this,t="ASK {\n\t\tBIND( wd:".concat(this.secret," AS ?secret )\n\t\t").concat(this.sparql," .\n\t\t}");Z.query(t).then((function(t){var n=t.boolean;e.isCorrect=n}))},computed:{answerMessageType:function(){return null===this.isCorrect?"notice":this.isCorrect?"success":"error"}}},te=ee,ne=Object(g["a"])(te,H,z,!1,null,"368f8801",null),re=ne.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"answer"},[e.guess.id===e.secret?n("Message",{attrs:{type:"success"}},[e._v(" Correct! You are "+e._s(e.guess.label)+"!! 🎉️🎉️🎉️ ")]):n("Message",{attrs:{type:"error"}},[e._v(" Nope, you're not "+e._s(e.guess.label)+". Keep guessing! ")])],1)},ae=[],ie={name:"GuessAnswer",components:{Message:q["Message"]},props:["secret","guess"],data:function(){return{isCorrect:null}}},oe=ie,ue=Object(g["a"])(oe,se,ae,!1,null,null,null),ce=ue.exports,le={name:"App",data:function(){return{listOfPossibleSecrets:["Q42","Q1744","Q937","Q7810","Q567","Q79015","Q692","Q7259","Q10943","Q5383","Q3735317"],questions:[]}},components:{GuessAnswer:ce,SparqlAnswer:re,Secrets:w,Guess:Y,Answer:F,Question:B},created:function(){this.secret=this.listOfPossibleSecrets[Math.floor(Math.random()*this.listOfPossibleSecrets.length)]},computed:{reversedQuestions:function(){return Object(o["a"])(this.questions).reverse()}},methods:{addPropValueQuestion:function(e){var t=e.property,n=e.value;this.addQuestion({type:"normal",property:t,value:n})},addSparqlQuestion:function(e){this.addQuestion({type:"sparql",sparql:e})},addGuessQuestion:function(e){this.addQuestion({type:"guess",guess:e})},addQuestion:function(e){this.questions.push(Object(i["a"])({id:Math.random()},e))}}},pe=le,fe=(n("034f"),Object(g["a"])(pe,s,a,!1,null,null,null)),de=fe.exports;r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(de)}}).$mount("#app")},"5d9c":function(e,t,n){"use strict";n("fd6f")},6630:function(e,t,n){},8579:function(e,t,n){},"85ec":function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.21220076.svg"},b111:function(e,t,n){"use strict";n("6630")},d1fb:function(e,t,n){},fd6f:function(e,t,n){}});
//# sourceMappingURL=app.817e83dd.js.map