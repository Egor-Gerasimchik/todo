(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(t,e,s){"use strict";s.r(e);var n=s(1),c=s.n(n),a=s(4),o=s.n(a),i=s(5),r=s(6),l=s(2),d=s(8),j=s(7),m=s(0);var u=function(t){var e=t.itemList.map((function(e,s){return Object(m.jsxs)("div",{className:"row justify-content-around",children:[Object(m.jsxs)("span",{className:"col-1",children:[s+1,"."]}),Object(m.jsx)("div",{className:"col-9",children:e.text}),Object(m.jsx)("i",{className:"bi bi-trash-fill col-1",onClock:t.deleteTodo})]})}));return Object(m.jsx)("div",{children:e})},b=function(t){Object(d.a)(s,t);var e=Object(j.a)(s);function s(t){var n;return Object(i.a)(this,s),(n=e.call(this,t)).state={items:null!=localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[{text:"\u0414\u043e\u0431\u0430\u0432\u044c \u0434\u0435\u043b\u043e!"}]},n.addTodo=n.addTodo.bind(Object(l.a)(n)),n.deleteTodo=n.deleteTodo.bind(Object(l.a)(n)),n}return Object(r.a)(s,[{key:"addTodo",value:function(t){t.preventDefault();var e=t.target,s=e.todoInput.value;this.setState((function(t){var e=t;return""!=s&&e.items.push({text:s}),localStorage.setItem("items",JSON.stringify(e.items)),{newState:e}})),e.todoInput.value=""}},{key:"deleteTodo",value:function(t){var e=t.target.parentNode.childNodes[0].innerHTML-1;this.setState((function(t){var s=t,n=s.items;return n.splice(e,1),s.items=n,localStorage.setItem("items",JSON.stringify(s.items)),{newState:s}}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{id:"todo-list",className:"container-md",children:[Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsx)("div",{className:"col-4",children:Object(m.jsxs)("form",{className:"row",onSubmit:this.addTodo,children:[Object(m.jsx)("input",{name:"todoInput",type:"text",className:"col form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0435\u043b\u043e"}),Object(m.jsx)("button",{type:"submit",className:"col-3 btn-danger",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})}),Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsx)("div",{className:"col-4",children:Object(m.jsx)(u,{itemList:this.state.items})})})]})}}]),s}(c.a.Component);o.a.render(Object(m.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2566f322.chunk.js.map