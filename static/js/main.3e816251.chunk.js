(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(7),r=n.n(i),c=n(8),l=n(1),s=n(2),d=n(4),u=n(3),h=n(5),f=(n(15),function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).handleChange=function(e){n.props.onInputChange(e.target.value)},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.inputVal;return a.a.createElement("input",{type:"text",value:e,onChange:this.handleChange})}}]),t}(a.a.Component)),p=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).handleDoneAndRemove=function(e){"LI"===e.target.tagName?n.props.onItemDone(e.target.id):n.props.onItemRemove(e.target.parentElement.id)},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todoItems.map(function(t){if(t.value){var n=t.done?"todoList done":"todoList";return a.a.createElement("li",{className:n,key:t.id,id:t.id,onClick:e.handleDoneAndRemove},t.value," ",a.a.createElement("span",{onClick:e.handleDoneAndRemove},"X"))}return null});return a.a.createElement("ul",null,t)}}]),t}(a.a.Component),v=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).imputChangeHandler=function(e){n.setState({input:e})},n.addTodoItems=function(){var e=n.state.input;n.setState(function(t){return{todolist:t.todolist.concat({id:Math.random(),value:e,done:!1})}})},n.itemRomoveHandler=function(e){console.log(e);var t=n.state.todolist.filter(function(t){return t.id!==+e});console.log(t),n.setState({todolist:t})},n.itmeDoneHandler=function(e){var t=Object(c.a)(n.state.todolist);t.forEach(function(t){t.id===+e&&(t.done=!t.done)}),n.setState({todolist:t})},n.state={input:"",todolist:[{id:Math.random(),value:"Hello",done:!1},{id:Math.random(),value:"World",done:!0}]},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.input,n=e.todolist;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"To Do List"),a.a.createElement("div",{className:"inputAndButton"},a.a.createElement(f,{inputVal:t,onInputChange:this.imputChangeHandler}),a.a.createElement("button",{onClick:this.addTodoItems},"add to do")),a.a.createElement(p,{todoItems:n,onItemRemove:this.itemRomoveHandler,onItemDone:this.itmeDoneHandler}))}}]),t}(a.a.Component),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(a.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todo_react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/todo_react","/service-worker.js");m?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):g(t,e)})}}()},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.3e816251.chunk.js.map