(function(){"use strict";var t={6704:function(t,e,o){var n=o(6369),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("TodoHeader"),e("TodoTitle"),e("TodoInput"),e("TodoMiddle"),e("TodoList"),e("TodoFooter")],1)},a=[],l=function(){var t=this,e=t._self._c;return e("header",[e("h3",[t._v("나의 일정관리")]),e("p",[t._v(t._s(this.todayTamp))])])},r=[],i=()=>{const t=new Date,e=t.getFullYear(),o=t.getMonth()+1,n=t.getDate(),s=["일","월","화","수","목","금","토"],a=s[t.getDay()],l=t.getTime();return{year:e,month:o,date:n,day:a,time:l}},d={data(){return{todayTamp:""}},created(){this.todayTamp=`${i().year}/${i().month}/${i().date} ${i().day}`}},c=d,u=o(1001),m=(0,u.Z)(c,l,r,!1,null,"01faba69",null),f=m.exports,p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("h1",[t._v(" 오늘 "),e("br"),e("span",{staticClass:"totalNum"},[t._v(t._s(t.itemCount.successCount))]),t._v(" / "),e("span",[t._v(" "+t._s(t.itemCount.totalCount)+" ")]),e("br"),t._v(" 완료하였습니다. ")])])},v=[],h=o(4910),g={computed:{...(0,h.Se)(["itemCount"])}},I=g,_=(0,u.Z)(I,p,v,!1,null,null,null),C=_.exports,w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"inputBox shadow"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newtodoItems,expression:"newtodoItems"}],attrs:{type:"text",placeholder:"할일을 입력해주세요."},domProps:{value:t.newtodoItems},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.addTodo.apply(null,arguments))},input:function(e){e.target.composing||(t.newtodoItems=e.target.value)}}}),e("span",{staticClass:"addContainer",on:{click:t.addTodo}},[e("font-awesome-icon",{staticClass:"addBtn",attrs:{icon:"fa-solid fa-plus"}})],1),t.showModal?e("alertModal",{on:{close:function(e){t.showModal=!1}}},[e("h3",{attrs:{slot:"header"},slot:"header"},[t._v(" 경고! "),e("font-awesome-icon",{staticClass:"closeModalBtn",attrs:{icon:"fa-solid fa-times"},on:{click:function(e){t.showModal=!1}}})],1),e("div",{attrs:{slot:"body"},slot:"body"},[t._v("할일을 입력해주세요.")])]):t._e()],1)},y=[],T=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"modal"}},[e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container"},[e("div",{staticClass:"modal-header"},[t._t("header",(function(){return[t._v(" default header ")]}))],2),e("div",{staticClass:"modal-body"},[t._t("body",(function(){return[t._v(" default body ")]}))],2)])])])])},k=[],O={},x=O,b=(0,u.Z)(x,T,k,!1,null,null,null),S=b.exports,Z={data(){return{newtodoItems:"",showModal:!1}},methods:{addTodo(){""!==this.newtodoItems?(this.$store.commit("addOneItem",this.newtodoItems),this.clearInput()):this.showModal||(this.showModal=!0)},clearInput(){this.newtodoItems=""}},components:{alertModal:S}},M=Z,B=(0,u.Z)(M,w,y,!1,null,"9851f154",null),P=B.exports,$=function(){var t=this,e=t._self._c;return e("div",{staticClass:"middle"})},N=[],j={},A=j,D=(0,u.Z)(A,$,N,!1,null,null,null),E=D.exports,F=function(){var t=this,e=t._self._c;return e("div",{staticClass:"list"},[e("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(this.storageTodoItems,(function(o,n){return e("li",{key:o.item,staticClass:"shadow"},[e("span",{staticClass:"checkBtn",class:{checkBtnCompleted:o.completed},on:{click:function(e){return t.toggleComplete({todoItem:o,index:n})}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-check"}})],1),e("span",{class:[{textCompleted:o.completed},"item-text"]},[t._v(" "+t._s(o.item)+" ")]),e("div",{staticClass:"list-right",on:{click:function(e){return t.removeTodo({todoItem:o,index:n})}}},[e("div",{staticClass:"removeDiv"},[e("font-awesome-icon",{staticClass:"removeBtn",attrs:{icon:"fa-solid fa-x"}})],1),e("div",{staticClass:"list-right-font"},[t._v(" "+t._s(o.date)+" ")])])])})),0)],1)},J=[],L={methods:{...(0,h.OI)({removeTodo:"removeOneItem",toggleComplete:"toggleOnItem"})},computed:{...(0,h.Se)(["storageTodoItems"])}},H=L,G=(0,u.Z)(H,F,J,!1,null,"c1891468",null),W=G.exports,Y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"clearAllContainer"},[e("span",{staticClass:"claerAllBtn",on:{click:t.clearTodo}},[t._v("전체삭제")])])},q=[],z={methods:{...(0,h.OI)({clearTodo:"clearAllItems"})}},K=z,Q=(0,u.Z)(K,Y,q,!1,null,"4f7e1522",null),R=Q.exports,U={components:{TodoHeader:f,TodoTitle:C,TodoInput:P,TodoMiddle:E,TodoList:W,TodoFooter:R}},V=U,X=(0,u.Z)(V,s,a,!1,null,null,null),tt=X.exports;const et={fetch(){let t=[],e=[];if(localStorage.length>0){for(let e=0;e<localStorage.length;e++)"loglevel:webpack-dev-server"!=localStorage.key(e)&&""!=localStorage.key(e)&&t.push(JSON.parse(localStorage.getItem(localStorage.key(e))));e=t.sort(((t,e)=>t.time-e.time))}return e}},ot={todoItems:et.fetch()},nt={storageTodoItems(t){return t.todoItems},itemCount(t){let e=t.todoItems.filter((t=>!0===t.completed)).length,o=t.todoItems.length;return{totalCount:o,successCount:e}}},st={addOneItem(t,e){const o={completed:!1,item:e,time:i().time,date:`${i().month}.${i().date} ${i().day}`};localStorage.setItem(e,JSON.stringify(o)),t.todoItems.push(o)},removeOneItem(t,e){localStorage.removeItem(e.todoItem.item),t.todoItems.splice(e.index,1)},toggleOnItem(t,e){const{todoItem:o,index:n}=e;t.todoItems[n].completed=!t.todoItems[n].completed,localStorage.removeItem(o.item),localStorage.setItem(o.item,JSON.stringify(o))},clearAllItems(t){localStorage.clear(),t.todoItems=[]}};var at={state:ot,getters:nt,mutations:st};n.ZP.use(h.ZP);const lt=new h.ZP.Store({modules:{todoApp:at}});var rt=o(1872),it=o(3333),dt=o(6221);rt.vI.add(it.BC0,it.r8p,it.$aW,it.LEp,it.NBC,it.EOp),n.ZP.component("font-awesome-icon",dt.GN),n.ZP.config.productionTip=!1,new n.ZP({el:"#app",store:lt,render:t=>t(tt)})}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,n,s,a){if(!n){var l=1/0;for(c=0;c<t.length;c++){n=t[c][0],s=t[c][1],a=t[c][2];for(var r=!0,i=0;i<n.length;i++)(!1&a||l>=a)&&Object.keys(o.O).every((function(t){return o.O[t](n[i])}))?n.splice(i--,1):(r=!1,a<l&&(l=a));if(r){t.splice(c--,1);var d=s();void 0!==d&&(e=d)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[n,s,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,a,l=n[0],r=n[1],i=n[2],d=0;if(l.some((function(e){return 0!==t[e]}))){for(s in r)o.o(r,s)&&(o.m[s]=r[s]);if(i)var c=i(o)}for(e&&e(n);d<l.length;d++)a=l[d],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(c)},n=self["webpackChunkvue_todo"]=self["webpackChunkvue_todo"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(6704)}));n=o.O(n)})();
//# sourceMappingURL=app.effa2f02.js.map