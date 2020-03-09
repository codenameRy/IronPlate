(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{35:function(e,t,n){e.exports=n(64)},40:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),s=n(31),o=n.n(s),u=(n(40),n(15)),l=n(1),i=n.n(l),p=n(7),m=n(8),h=n(10),d=n(9),g=n(11),f=n(14),b=n(12),v=n(32),w=n.n(v);a=window.location.origin;var E=w.a.create({withCredentials:!0,baseURL:a}),y={isLoggedIn:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(E.get("/is-logged-in"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},signUp:function(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(E.post("/signup",e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},logIn:function(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(E.post("/login",e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},logOut:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(E.get("/logout"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))}},O=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}))}},{key:"render",value:function(){return c.a.createElement("div",null)}}]),t}(r.Component);var j=function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Not found"))},x=n(16),C=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={},n.handleChange=function(e){return n.setState(Object(x.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),a.prev=1,a.next=4,i.a.awrap(y.signUp(n.state));case 4:t=a.sent,n.props.setUser(Object(u.a)({},t.data)),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),console.log("*****",a.t0.message);case 11:case"end":return a.stop()}}),null,null,[[1,8]])},n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(r.Fragment,null,c.a.createElement("h2",null,"SignUP"),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("input",{name:"email",type:"email",onChange:this.handleChange}),c.a.createElement("input",{name:"password",type:"password",onChange:this.handleChange}),c.a.createElement("input",{type:"submit",value:"Sign Up"})))}}]),t}(r.Component),k=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={},n.handleChange=function(e){return n.setState(Object(x.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),a.prev=1,a.next=4,i.a.awrap(y.logIn(n.state));case 4:t=a.sent,n.props.setUser(Object(u.a)({},t.data)),n.props.doFlashMessage("Logged In Successfully",!0),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),console.log("=-=-=-=-=-",a.t0.response.data),"Unauthorized"===a.t0.response.data?n.props.doFlashMessage("Email/Password Combination Incorrect, please check credentials and try again",!1):"Bad Request"===a.t0.response.data&&n.props.doFlashMessage("Please make sure to enter an Email AND Password",!1);case 13:case"end":return a.stop()}}),null,null,[[1,9]])},n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(r.Fragment,null,c.a.createElement("h2",null,"LogIn"),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("input",{name:"email",type:"email",onChange:this.handleChange}),c.a.createElement("input",{name:"password",type:"password",onChange:this.handleChange}),c.a.createElement("input",{type:"submit",value:"Log In"})))}}]),t}(r.Component),U=function(e){return e.user.email||e.history.push("/log-in"),c.a.createElement("div",null,"Profile Welcome ",e.user.email," !!!")},S=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={},n.setUser=function(e){return n.setState(e)},n.logOut=function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(y.logOut());case 2:e.sent,n.setUser({email:null,createdAt:null,updatedAt:null,_id:null});case 4:case"end":return e.stop()}}))},n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(y.isLoggedIn());case 2:e=t.sent,this.setState(Object(u.a)({},e.data));case 4:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){var e=this;return c.a.createElement(f.a,null,this.state.email,c.a.createElement("nav",null,c.a.createElement(f.b,{to:"/"},"Home |"),this.state.email?c.a.createElement(r.Fragment,null,c.a.createElement(f.b,{onClick:this.logOut,to:"/"},"Log Out |"),c.a.createElement(f.b,{to:"/profile"},"Profile|")):c.a.createElement(r.Fragment,null,c.a.createElement(f.b,{to:"/sign-up"},"Sign Up |"),c.a.createElement(f.b,{to:"/log-in"},"Log In |"))),c.a.createElement(b.c,null,c.a.createElement(b.a,{exact:!0,path:"/",render:function(e){return c.a.createElement(O,e)}}),c.a.createElement(b.a,{exact:!0,path:"/sign-up",render:function(t){return c.a.createElement(C,Object.assign({},t,{setUser:e.setUser}))}}),c.a.createElement(b.a,{exact:!0,path:"/log-in",render:function(t){return c.a.createElement(k,Object.assign({},t,{setUser:e.setUser}))}}),c.a.createElement(b.a,{exact:!0,path:"/profile",render:function(t){return c.a.createElement(U,Object.assign({},t,{user:e.state}))}}),c.a.createElement(b.a,{component:j})))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.25be430c.chunk.js.map