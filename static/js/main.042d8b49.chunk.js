(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(22)},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(3),r=a.n(o),c=a(10),i=(a(21),function(e){var t=e.user;return l.a.createElement("div",{className:"CurrentUser"},l.a.createElement("strong",null,"Selected user:"),l.a.createElement("ul",null,l.a.createElement("li",null,"#",t.id),l.a.createElement("li",null,t.name),l.a.createElement("li",null,t.email),l.a.createElement("li",null,t.phone)))}),s=function(e){var t=e.todos,a=e.showUser;return l.a.createElement("div",{className:"TodoList"},l.a.createElement("strong",null,"Todos:"),l.a.createElement("ul",{className:"TodoList__list"},t.map(function(e){return l.a.createElement("li",{key:e.id,className:"TodoList__item"},l.a.createElement("label",{htmlFor:"todo-".concat(e.id)},l.a.createElement("input",{type:"checkbox",id:"todo-".concat(e.id),checked:e.completed,readOnly:!0}),e.title),l.a.createElement("button",{type:"button",onClick:function(){return a(e.userId)}},"User",e.userId))})))},m=[{userId:1,id:1,title:"delectus aut autem",completed:!0},{userId:2,id:2,title:"quis ut nam facilis et officia qui",completed:!1},{userId:1,id:3,title:"fugiat veniam minus",completed:!1},{userId:1,id:4,title:"et porro tempora",completed:!0},{userId:4,id:5,title:"laboriosam mollitia et enim quasi adipisci quia provident illum",completed:!1},{userId:1,id:6,title:"qui ullam ratione quibusdam voluptatem quia omnis",completed:!1}],u={id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},d=function(){return l.a.createElement("main",{className:"App"},l.a.createElement("section",null,l.a.createElement("p",{className:"info"},"Todos are not loaded yet",l.a.createElement("button",{type:"button"},"Load")),l.a.createElement("p",{className:"info"},"User is not selected")),l.a.createElement("section",null,l.a.createElement("p",{className:"info"},"Loading..."),l.a.createElement("p",{className:"info"},"Loading...")),l.a.createElement("section",null,l.a.createElement("p",{className:"info"},"Failed loading todos",l.a.createElement("button",{type:"button"},"Reload")),l.a.createElement("p",{className:"info"},"Failed loading user",l.a.createElement("button",{type:"button"},"Reload"))),l.a.createElement("section",null,l.a.createElement("p",{className:"info"},"6 todos are loaded",l.a.createElement("button",{type:"button"},"Clear")),l.a.createElement("p",{className:"info"},"User #1 is loaded",l.a.createElement("button",{type:"button"},"Clear"))),l.a.createElement("section",null,l.a.createElement("p",{className:"info"},"1 todo is loaded"),l.a.createElement("p",{className:"info"},"User #999 does not exist")),l.a.createElement("section",null,l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"loader"})),l.a.createElement("div",{className:"content"},l.a.createElement(i,{user:u}))),l.a.createElement("section",null,l.a.createElement("div",{className:"content"},l.a.createElement(s,{todos:m})),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"loader"}))))},E=a(4),p=Object(E.b)(function(e,t){return t.type,e},{});r.a.render(l.a.createElement(function(){return l.a.createElement(c.a,{store:p},l.a.createElement(d,null))},null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.042d8b49.chunk.js.map