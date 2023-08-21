(function(t){function e(e){for(var s,a,n=e[0],l=e[1],d=e[2],c=0,p=[];c<n.length;c++)a=n[c],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],s=!0,n=1;n<o.length;n++){var l=o[n];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=a(a.s=o[0]))}return t}var s={},i={app:0},r=[];function a(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=s,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(o,s,function(e){return t[e]}.bind(null,s));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/todo-list-vue-eventBus/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var d=0;d<n.length;d++)e(n[d]);var u=l;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e),o.d(e,"eventBus",(function(){return W}));var s=o("2b0e"),i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("section",{staticClass:"todo"},[e("div",{staticClass:"todo__container"},[e("div",{staticClass:"todo__content"},[e("Head"),e("Form"),e("List")],1)])])])},r=[],a=function(){var t=this;t._self._c;return t._m(0)},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"todo__head"},[e("h1",{staticClass:"todo__title"},[t._v("TODO List")])])}],l={name:"Head"},d=l,u=o("2877"),c=Object(u["a"])(d,a,n,!1,null,null,null),p=c.exports,h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"todo__form",on:{submit:function(e){return e.preventDefault(),t.emitCreateTodo()}}},[e("form",{staticClass:"todo-form",attrs:{method:"post",id:"todoForm"}},[e("div",{staticClass:"todo-form__group"},[e("input",{ref:"formInput",staticClass:"todo-form__input",attrs:{type:"text",id:"todoInput",placeholder:"What to do..."}}),e("button",{staticClass:"todo-form__btn",attrs:{type:"submit"}},[t._v("Add Task")])])])])},m=[],_={name:"Form",emits:["create-todo"],computed:{},methods:{emitCreateTodo(){W.$emit("create-todo",this.$refs.formInput.value),this.$refs.formInput.value=""}}},f=_,v=Object(u["a"])(f,h,m,!1,null,null,null),g=v.exports,S=function(){var t=this,e=t._self._c;return e("div",{staticClass:"todo__list-wrap"},[t.todoList.length>0?e("Search"):t._e(),e("div",{staticClass:"todo__list",attrs:{id:"todoList"}},[""!==t.searchFilterValue&&0==t.getTodoList.length?e("div",{staticClass:"todo__list-notfound todo__notfound"},[t._v(" Nothing found ")]):t._e(),t._l(t.getTodoList,(function(o){return e("div",{key:o.id,staticClass:"todo__list-item-wrap",on:{click:function(e){return t.updateEditStatus(o.id)}}},[e("Item",{attrs:{item:o,editMode:t.editStatus==o.id}})],1)}))],2)],1)},b=[],C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"todo__item-wrap"},[e("div",{staticClass:"todo__item",style:{borderColor:t.item.borderColor}},[t.editMode?t._e():e("div",{staticClass:"todo__item-text"},[t._v(" "+t._s(t.item.title)+" ")]),t.editMode?e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.title,expression:"item.title"}],staticClass:"todo__item-edit-input",attrs:{type:"text"},domProps:{value:t.item.title},on:{input:function(e){e.target.composing||t.$set(t.item,"title",e.target.value)}}}):t._e(),e("button",{staticClass:"todo__item-delete",on:{click:function(e){return t.emitDeleteTodo(t.item)}}},[e("span",{staticClass:"todo__item-delete-thumb"})]),t.editMode?e("button",{staticClass:"todo__item-save",on:{click:function(e){return e.stopPropagation(),t.emitSaveTodo(t.item)}}},[t._v(" Save ")]):t._e()])])},w=[],T={name:"Item",props:["item","editMode"],emits:["delete-todo","save-todo"],data(){return{editStatus:!1}},computed:{},methods:{emitDeleteTodo(t){W.$emit("delete-todo",t)},emitSaveTodo(t){""!==t.title&&W.$emit("save-todo")}}},x=T,L=Object(u["a"])(x,C,w,!1,null,null,null),y=L.exports,O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"todo__search",attrs:{id:"todoSearch"}},[e("div",{staticClass:"todo__search-input-wrap"},[e("div",{staticClass:"todo__search-icon"},[e("SearchIcon")],1),e("input",{ref:"searchInput",staticClass:"todo__search-input",attrs:{type:"text",id:"todoSearchInput",placeholder:"Search"},on:{input:t.changeSearchInputValue}})])])},I=[],$=function(){var t=this,e=t._self._c;return e("svg",{attrs:{"enable-background":"new 0 0 32 32",viewBox:"0 0 32 32","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("path",{attrs:{d:"M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z",id:"XMLID_223_"}})])},j=[],F={name:"SearchIcon"},P=F,M=Object(u["a"])(P,$,j,!1,null,null,null),k=M.exports,V={name:"Search",components:{SearchIcon:k},emits:["init-search"],computed:{},methods:{changeSearchInputValue(){W.$emit("init-search",this.$refs.searchInput.value.toLowerCase())}}},D=V,E=Object(u["a"])(D,O,I,!1,null,null,null),A=E.exports,J={props:["tasks"],name:"List",emits:["push-local-list"],data(){return{todoList:[],searchFilterValue:"",editStatus:null}},components:{Search:A,Item:y},computed:{getTodoList(){return""===this.searchFilterValue?this.todoList:this.todoList.filter(t=>t.title.includes(this.searchFilterValue))}},methods:{updateEditStatus(t){this.editStatus=t},deleteTodo(t){const e=this.todoList.findIndex(e=>e.id===t.id);-1!==e&&(this.todoList.splice(e,1),this.pushTodoListForUpdateStorage())},setTodoList(t){this.todoList=t},setSearchFilterValue(t){this.searchFilterValue=t},addTodo(t){""!=t&&(this.todoList.push({title:t,id:Date.now(),borderColor:"#"+Math.floor(16777215*Math.random()).toString(16)}),this.pushTodoListForUpdateStorage())},saveTodo(){this.editStatus=null,this.pushTodoListForUpdateStorage()},pushTodoListForUpdateStorage(){W.$emit("push-local-list",this.todoList)}},mounted(){W.$on("init-stored-list",this.setTodoList),W.$on("init-search",this.setSearchFilterValue),W.$on("create-todo",this.addTodo),W.$on("delete-todo",this.deleteTodo),W.$on("save-todo",this.saveTodo)}},N=J,U=Object(u["a"])(N,S,b,!1,null,null,null),B=U.exports,H={name:"Todo",components:{Head:p,Form:g,List:B},data(){return{APP_KEY:"app_todo",emits:["init-stored-list"]}},methods:{initStorage(){let t=JSON.parse(localStorage.getItem(this.APP_KEY))||[];W.$emit("init-stored-list",t)},updateStorage(t){localStorage.setItem(this.APP_KEY,JSON.stringify(t))}},mounted(){this.initStorage(),W.$on("push-local-list",this.updateStorage)}},K=H,Y=(o("8c39"),Object(u["a"])(K,i,r,!1,null,null,null)),z=Y.exports;s["a"].config.productionTip=!1;const W=new s["a"];new s["a"]({render:t=>t(z)}).$mount("#app")},"8c39":function(t,e,o){"use strict";o("be0f")},be0f:function(t,e,o){}});
//# sourceMappingURL=app.570cfd16.js.map