(this["webpackJsonpvoting-app-frontend"]=this["webpackJsonpvoting-app-frontend"]||[]).push([[0],{100:function(e,t){},103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(22),o=a.n(r),c=a(8),s=a(2),i=a(24),m=a(3),u=a(18),d=a(9),p=a(10),v=a.n(p),E=a(19),f="[poll] Add new poll",b="[poll] Polls loaded",h="[poll] Poll Loaded by ID",N="[vote] Vote Add",g="http://localhost:4000/api",y=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",l="".concat(g,"/").concat(e);return"GET"===a?fetch(l):fetch(l,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},O=a(15),j=a.n(O),x=function(e){return{type:f,payload:e}},w=function(e){return{type:b,payload:e}},k=function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a){var l,n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y("polls/".concat(e));case 3:return l=t.sent,t.next=6,l.json();case 6:n=t.sent,a(S(n.poll)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),j.a.fire("Error","Faild to load Poll ".concat(t.t0," "),"error");case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return{type:h,payload:e}},C=function(e){return{type:N,payload:e}},P={question:"",option1:"",option2:"",option3:"",option4:""},_=function(e){var t=e.history,a=Object(d.c)(),r=Object(l.useState)(P),o=Object(u.a)(r,2),s=o[0],p=o[1],f=Object(l.useState)(null),b=Object(u.a)(f,2),h=b[0],N=b[1],g=s.question,O=s.option1,w=s.option2,k=s.option3,S=s.option4,C=function(e){var t=e.target;p(Object(m.a)(Object(m.a)({},s),{},Object(i.a)({},t.name,t.value)))};return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.b,{to:"/",className:"btn btn-primary float-right"},"Back to Home"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"row my-2"},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"card bg-light pad-fbs"},n.a.createElement("form",{onSubmit:function(e){switch(e.preventDefault(),!0){case g.trim().length<10:N("Question is required and must have 10 caracters. Actual:".concat(g.length));break;case O.trim().length<=0:N("Option 1 is required ");break;case w.trim().length<=0:N("Option 2 is required ");break;default:a((l=s,function(){var e=Object(E.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("polls/new",l,"POST");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,console.log(n),n.ok?t(x(n.poll)):j.a.fire("Error",n.err.message,"error");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),p(P),t.push("/")}var l}},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm d-flex"},n.a.createElement("div",{className:"card card-body bg-light flex-fill"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Your Question ",n.a.createElement("span",{className:"text-danger"},"*")),n.a.createElement("textarea",{name:"question",rows:"10",className:"form-control mb-3",value:g,onChange:C}),n.a.createElement("button",{type:"submit",className:"btn btn-success btn-block"},"Submit Poll")),n.a.createElement("p",null,n.a.createElement("span",{className:"text-danger"},"* Indicates a requered field")),h&&n.a.createElement("div",{className:"alert alert-danger"},h))),n.a.createElement("div",{className:"col-sm d-flex"},n.a.createElement("div",{className:"card card-body bg-light flex-fill"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Option 1",n.a.createElement("span",{className:"text-danger"},"*")),n.a.createElement("input",{name:"option1",className:"form-control mb-3",value:O,onChange:C})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Option 2",n.a.createElement("span",{className:"text-danger"},"*")),n.a.createElement("input",{name:"option2",className:"form-control mb-3",value:w,onChange:C})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Option 3"),n.a.createElement("input",{name:"option3",className:"form-control mb-3",value:k,onChange:C})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Option 4"),n.a.createElement("input",{name:"option4",className:"form-control mb-3",value:S,onChange:C})))))))))))},D=a(26),F=function(e){var t=e.poll,a=t.option1&&t.option1+" "+t.option1votes+" votes",l=t.option2&&" - "+t.option2+" "+t.option2votes+" votes",r=t.option3&&" - "+t.option3+" "+t.option3votes+" votes",o=t.option4&&" - "+t.option4+" "+t.option4votes+" votes",s=[];a&&s.push({title:t.option1,value:t.option1votes,color:"#076BCD"}),l&&s.push({title:t.option2,value:t.option2votes,color:"#00931B"}),r&&s.push({title:t.option3,value:t.option3votes,color:"#FF9800"}),o&&s.push({title:t.option4,value:t.option4votes,color:"#9C1D99"});return n.a.createElement("div",{key:t._id,className:"card mt-3",style:{width:"100%"}},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement(D.PieChart,{className:"ml-2",style:{fontFamily:'"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',fontSize:"12px"},data:s,lineWidth:60,animate:!0,label:function(e){var t=e.dataEntry;return Math.round(t.percentage)+"%"},labelPosition:70,labelStyle:{fill:"#fff",opacity:.75,pointerEvents:"none"}})),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},n.a.createElement(c.b,{to:"/polls/".concat(t._id)},t.question)),n.a.createElement("p",{className:"card-text"},a,"  ",l,"  ",r,"  ",o),n.a.createElement("p",{className:"card-text"},n.a.createElement("small",null,"(",t.date,")"))))))},q=function(e){var t=e.title,a=e.polls;return n.a.createElement("div",{className:"col-sm d-flex"},n.a.createElement("div",{className:"card card-body bg-light flex-fill"},n.a.createElement("h3",null,t),a.map((function(e){return n.a.createElement(F,{key:e._id,poll:e})}))))},V=a(38),I=a.n(V),T=function(){var e=Object(d.c)(),t=Object(d.d)((function(e){return e.polls}),d.b),a=JSON.parse(JSON.stringify(t));a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.sort((function(e,t){return e.total-t.total})).reverse().slice(0,3).map((function(e){return Object(m.a)(Object(m.a)({},e),{},{date:I()(e.date).fromNow()})}))}(a);var r=JSON.parse(JSON.stringify(t));return r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{date:I()(e.date).fromNow()})}))}(t),Object(l.useEffect)((function(){e(function(){var e=Object(E.a)(v.a.mark((function e(t){var a,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y("polls");case 3:return a=e.sent,e.next=6,a.json();case 6:l=e.sent,t(w(l.polls)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),j.a.fire("Error","Faild to load Polls","error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),n.a.createElement(n.a.Fragment,null,n.a.createElement(c.b,{to:"/polls/new",className:"btn btn-primary float-right"},"Create your own Poll"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"row my-2"},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"card bg-light pad-fbs"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement(q,{key:"1",title:"Top 3 Polls",polls:a}),n.a.createElement(q,{key:"2",title:"Recent Polls",polls:r})))))))},B=function(e){var t=e.pollID,a=e.name,l=e.value,r=e.color,o=void 0===r?"success":r,c=e.handleVote;return n.a.createElement("div",{key:t+a,className:"card mt-3",style:{width:"100%"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title mb-4"},l),n.a.createElement("br",null),n.a.createElement("button",{onClick:function(){return c(a)},className:"btn btn-".concat(o," btn-block mt-4")},l)))},J=function(e){var t=e.poll,a=t.question,l=t.option1,r=t.option2,o=t.option3,s=t.option4,i=t.option1votes,m=t.option2votes,u=t.option3votes,d=t.option4votes,p=[];l&&p.push({title:l,value:i,color:"#076BCD"}),r&&p.push({title:r,value:m,color:"#00931B"}),o&&p.push({title:o,value:u,color:"#FF9800"}),s&&p.push({title:s,value:d,color:"#9C1D99"});return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.b,{to:"/",className:"btn btn-primary float-right"},"Back to Home"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"row my-2 "},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"card bg-light pad-fbs"},n.a.createElement("h1",{className:"text-center"},a),n.a.createElement("div",{className:"alert alert-success alert-dismissible fade show",role:"alert"},n.a.createElement("strong",null,n.a.createElement("i",{className:"fas fa-info-circle"}),"  Thanks for voting!"),"  Here are the results.",n.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("div",{className:"card card-body bg-light flex-fill"},n.a.createElement(D.PieChart,{className:"ml-2",style:{fontFamily:'"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',fontSize:"12px"},data:p,lineWidth:60,animate:!0,label:function(e){var t=e.dataEntry;return Math.round(t.percentage)+"%"},labelPosition:70,labelStyle:{fill:"#fff",opacity:.75,pointerEvents:"none"}}))),n.a.createElement("div",{className:"col-sm-8"},n.a.createElement("div",{className:"card card-body bg-light flex-fill"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("h3",null,l)),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("h3",null,i," votes"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("h3",null,r)),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("h3",null,m," votes"))),o&&n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("h3",null,o)),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("h3",null,u," votes"))),s&&n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("h3",null,s)),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("h3",null,d," votes")))))))))))},A=a(57),H=a.n(A)()("http://localhost:4000/voting"),z=function(e){var t=e.history;t.length<=2&&t.push("/");var a=Object(s.g)().id,r=Object(d.d)((function(e){return e.polls})).find((function(e){return e._id===a})),o=Object(l.useState)(!1),c=Object(u.a)(o,2),i=c[0],m=c[1],p=Object(d.c)();Object(l.useEffect)((function(){p(k(a)),H.on("updateVoging",(function(e){console.log("Se ejecuto el update!"),e.id===a&&(console.log("Y actualiz\xf3!!!!"),p(k(a)))}))}),[p,a]);try{var f=function(e){p(function(e,t){return function(){var a=Object(E.a)(v.a.mark((function a(l){var n,r;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y("answer/".concat(e),{option:t},"PUT");case 3:return n=a.sent,a.next=6,n.json();case 6:(r=a.sent).ok?l(C(r.poll)):j.a.fire("Error",r.err.message,"error"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),j.a.fire("Error","Faild to Vote Poll","error");case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()}(a,e)),H.emit("vote",{id:a},(function(e){console.log("Y actualiz\xf3!!!!",e)})),m(!0)},b=r.question,h=r.option1,N=r.option2,g=r.option3,O=r.option4;return i?n.a.createElement(J,{poll:r}):n.a.createElement(n.a.Fragment,null,n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"row my-2 text-center"},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"card bg-light pad-fbs"},n.a.createElement("h1",null,b),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm d-flex"},n.a.createElement("div",{className:"card card-body bg-light flex-fill"},n.a.createElement(B,{name:"option1",color:"warning",value:h,pollID:a,handleVote:f}),g&&n.a.createElement(B,{name:"option3",color:"success",value:g,pollID:a,handleVote:f}))),n.a.createElement("div",{className:"col-sm d-flex"},n.a.createElement("div",{className:"card card-body bg-light flex-fill"},n.a.createElement(B,{name:"option2",color:"danger",value:N,pollID:a,handleVote:f}),O&&n.a.createElement(B,{name:"option4",color:"success",value:O,pollID:a,handleVote:f})))))))))}catch(x){return n.a.createElement(s.a,{to:"/"})}},M=function(){return n.a.createElement(c.a,null,n.a.createElement(s.d,null,n.a.createElement(s.b,{exact:!0,path:"/polls/new",component:_}),n.a.createElement(s.b,{exact:!0,path:"/polls/:id",component:z}),n.a.createElement(s.b,{exact:!0,path:"/",component:T}),n.a.createElement(s.a,{to:"/"})))},Y=a(14),G=a(58),L=a(39),Q={polls:[]},R="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.c,U=Object(Y.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(m.a)(Object(m.a)({},e),{},{polls:[].concat(Object(L.a)(e.polls),[t.payload])});case b:return Object(m.a)(Object(m.a)({},e),{},{polls:Object(L.a)(t.payload)});case h:return e.polls.length>0?Object(m.a)(Object(m.a)({},e),{},{polls:e.polls.map((function(e){return e._id===t.payload._id?t.payload:e}))}):Object(m.a)(Object(m.a)({},e),{},{polls:[t.payload]});case N:return Object(m.a)(Object(m.a)({},e),{},{polls:e.polls.map((function(e){return e._id===t.payload._id?t.payload:e}))});default:return e}}),R(Object(Y.a)(G.a))),W=function(){return n.a.createElement("div",{className:"container-fluid mt-3"},n.a.createElement("div",{className:"card mb-3"},n.a.createElement("div",{className:"card-body text-center bg-light"},n.a.createElement("h1",null,"Voting App"))),n.a.createElement(d.a,{store:U},n.a.createElement(M,null)))};a(103);o.a.render(n.a.createElement(W,null),document.getElementById("root"))},59:function(e,t,a){e.exports=a(104)}},[[59,1,2]]]);
//# sourceMappingURL=main.a116314d.chunk.js.map