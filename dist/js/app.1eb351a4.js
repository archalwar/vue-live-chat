(function(e){function t(t){for(var r,u,o=t[0],i=t[1],s=t[2],p=0,b=[];p<o.length;p++)u=o[p],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&b.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(b.length)b.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01aa":function(e,t,n){},"286d":function(e,t,n){"use strict";n("61c2")},"2ab7":function(e,t,n){},"323f":function(e,t,n){"use strict";n("01aa")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t){var n=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])(n)}n("323f");const c={};c.render=a;var u=c,o=n("6c02"),i={class:"welcome container"},s=Object(r["g"])("h1",null,"Welcome",-1),l={key:0},p=Object(r["g"])("h2",null,"Login to Chat Room",-1),b=Object(r["f"])("No account yet? "),d=Object(r["f"])(" insted"),f={key:1},v=Object(r["g"])("h2",null,"Signup to Chat Room",-1),O=Object(r["f"])("Already having account? "),m=Object(r["f"])(" insted");function j(e,t,n,a,c,u){var o=Object(r["x"])("LoginForm"),j=Object(r["x"])("Signupform");return Object(r["q"])(),Object(r["d"])("div",i,[s,a.showLogin?(Object(r["q"])(),Object(r["d"])("div",l,[p,Object(r["g"])(o,{onLogin:a.enterChat},null,8,["onLogin"]),Object(r["g"])("p",null,[b,Object(r["g"])("span",{onClick:t[1]||(t[1]=function(e){return a.showLogin=!1})},"Signup"),d])])):(Object(r["q"])(),Object(r["d"])("div",f,[v,Object(r["g"])(j,{onSignUp:a.enterChat},null,8,["onSignUp"]),Object(r["g"])("p",null,[O,Object(r["g"])("span",{onClick:t[2]||(t[2]=function(e){return a.showLogin=!0})},"Login"),m])]))])}var g={class:"error"},h=Object(r["g"])("button",{type:"submit"},"SignUp",-1);function w(e,t,n,a,c,u){return Object(r["q"])(),Object(r["d"])("form",{onSubmit:t[4]||(t[4]=Object(r["G"])((function(){return a.handleSubmit&&a.handleSubmit.apply(a,arguments)}),["prevent"]))},[Object(r["E"])(Object(r["g"])("input",{type:"text",required:"",placeholder:"display name","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.displayName=e})},null,512),[[r["B"],a.displayName]]),Object(r["E"])(Object(r["g"])("input",{type:"email",required:"",placeholder:"emial","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.email=e})},null,512),[[r["B"],a.email]]),Object(r["E"])(Object(r["g"])("input",{type:"password",required:"",placeholder:"password","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.password=e})},null,512),[[r["B"],a.password]]),Object(r["g"])("div",g,Object(r["z"])(a.error),1),h],32)}n("96cf");var y=n("1da1"),x=n("2591"),S=(n("e71f"),n("ea7b"),{apiKey:"AIzaSyDN81mcDqPQ3ZBcNZtBz_-Fg5ZRw6zbsRI",authDomain:"vue-firebase-sites-67655.firebaseapp.com",projectId:"vue-firebase-sites-67655",storageBucket:"vue-firebase-sites-67655.appspot.com",messagingSenderId:"224329665548",appId:"1:224329665548:web:ed96927c0cc82ef13d7229"});x["a"].initializeApp(S);var k=x["a"].auth(),R=x["a"].firestore(),C=x["a"].firestore.FieldValue.serverTimestamp,q=Object(r["v"])(null),U=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t,n,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return q.value=null,e.prev=1,e.next=4,k.createUserWithEmailAndPassword(t,n);case 4:if(a=e.sent,a){e.next=7;break}throw new Error("Could not complete the signup");case 7:return e.next=9,a.user.updateProfile({displayName:r});case 9:return q.value=null,console.log(a.user),e.abrupt("return",a);case 14:e.prev=14,e.t0=e["catch"](1),console.log(e.t0),q.value=e.t0.message;case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n,r){return e.apply(this,arguments)}}(),z=function(){return{error:q,signup:U}},A=z,N={setup:function(e,t){var n=A(),a=n.error,c=n.signup,u=Object(r["v"])(""),o=Object(r["v"])(""),i=Object(r["v"])(""),s=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c(o.value,i.value,u.value);case 2:a.value||t.emit("signUp");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{displayName:u,email:o,password:i,handleSubmit:s,error:a}}};N.render=w;var E=N,L={class:"error"},P=Object(r["g"])("button",{type:"submit"},"Login",-1);function B(e,t,n,a,c,u){return Object(r["q"])(),Object(r["d"])("form",{onSubmit:t[3]||(t[3]=Object(r["G"])((function(){return a.handleSubmit&&a.handleSubmit.apply(a,arguments)}),["prevent"]))},[Object(r["E"])(Object(r["g"])("input",{type:"email",required:"",placeholder:"emial","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.email=e})},null,512),[[r["B"],a.email]]),Object(r["E"])(Object(r["g"])("input",{type:"password",required:"",placeholder:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.password=e})},null,512),[[r["B"],a.password]]),Object(r["g"])("div",L,Object(r["z"])(a.error),1),P],32)}var D=Object(r["v"])(null),W=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return D.value=null,e.prev=1,e.next=4,k.signInWithEmailAndPassword(t,n);case 4:return r=e.sent,D.value=null,console.log(r),e.abrupt("return",r);case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0.message),D.value="Invalid login credentials";case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}(),_=function(){return{error:D,login:W}},I=_,F={setup:function(e,t){var n=I(),a=n.error,c=n.login,u=Object(r["v"])(""),o=Object(r["v"])(""),i=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c(u.value,o.value);case 2:a.value||t.emit("login");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{email:u,password:o,handleSubmit:i,error:a}}};F.render=B;var V=F,T={components:{Signupform:E,LoginForm:V},setup:function(){var e=Object(r["v"])(!0),t=Object(o["c"])(),n=function(){t.push({name:"ChatRoom"})};return{showLogin:e,enterChat:n}}};n("dd13");T.render=j;var M=T,G={class:"container"};function H(e,t,n,a,c,u){var o=Object(r["x"])("Navbar"),i=Object(r["x"])("ChatWindow"),s=Object(r["x"])("NewChatForm");return Object(r["q"])(),Object(r["d"])("div",G,[Object(r["g"])(o),Object(r["g"])(i),Object(r["g"])(s)])}var Z={key:0},J={class:"email"};function K(e,t,n,a,c,u){return null!=a.user?(Object(r["q"])(),Object(r["d"])("nav",Z,[Object(r["g"])("div",null,[Object(r["g"])("p",null,"Hey there...."+Object(r["z"])(a.user.displayName)+" here",1),Object(r["g"])("p",J,"Currently logged in as... "+Object(r["z"])(a.user.email),1)]),Object(r["g"])("button",{onClick:t[1]||(t[1]=function(){return a.signOut&&a.signOut.apply(a,arguments)})},"Logout")])):Object(r["e"])("",!0)}var Q=Object(r["v"])(null),X=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Q.value=null,e.prev=1,e.next=4,k.signOut();case 4:Q.value=null,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),Q.value=e.t0.message;case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),Y=function(){return{logout:X,error:Q}},$=Y,ee=Object(r["v"])(k.currentUser);k.onAuthStateChanged((function(e){console.log("user sate chaned. Current user is",e),ee.value=e}));var te=function(){return{user:ee}},ne=te,re={setup:function(){var e=$(),t=e.logout,n=e.error,r=Object(o["c"])(),a=ne(),c=a.user,u=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:n.message||r.push({name:"Welcome"});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{signOut:u,user:c}}};n("b85b");re.render=K;var ae=re,ce=Object(r["H"])("data-v-64e8f788");Object(r["t"])("data-v-64e8f788");var ue={class:"error"};Object(r["r"])();var oe=ce((function(e,t,n,a,c,u){return Object(r["q"])(),Object(r["d"])("form",null,[Object(r["E"])(Object(r["g"])("textarea",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.message=e}),placeholder:"Type a message and hit enter to send msg",onKeypress:t[2]||(t[2]=Object(r["F"])(Object(r["G"])((function(){return a.handleSubmit&&a.handleSubmit.apply(a,arguments)}),["prevent"]),["enter"]))},null,544),[[r["B"],a.message]]),Object(r["g"])("div",ue,Object(r["z"])(a.error),1)])})),ie=function(e){var t=Object(r["v"])(null),n=function(){var n=Object(y["a"])(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.value=null,n.prev=1,n.next=4,R.collection(e).add(r);case 4:n.next=10;break;case 6:n.prev=6,n.t0=n["catch"](1),console.log("err.message"),t.value="could not send the message";case 10:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(e){return n.apply(this,arguments)}}();return{addDoc:n,error:t}},se=ie,le={setup:function(){var e=ne(),t=e.user,n=se("message"),a=n.addDoc,c=n.error,u=Object(r["v"])(),o=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={name:t.value.displayName,message:u.value,createdAt:C()},e.next=3,a(n);case 3:c.value||(u.value="");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{message:u,handleSubmit:o,error:c,addDoc:a}}};n("cfcf");le.render=oe,le.__scopeId="data-v-64e8f788";var pe=le,be=(n("b0c0"),{class:"chat-window"}),de={key:0,class:"error"},fe={key:1,class:"messages",ref:"messages"},ve={class:"created-at"},Oe={class:"name"},me={class:"message"};function je(e,t,n,a,c,u){return Object(r["q"])(),Object(r["d"])("div",be,[a.error?(Object(r["q"])(),Object(r["d"])("div",de,Object(r["z"])(a.error),1)):Object(r["e"])("",!0),a.documents?(Object(r["q"])(),Object(r["d"])("div",fe,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(a.formattedDocuments,(function(e){return Object(r["q"])(),Object(r["d"])("div",{key:e.id,class:"single"},[Object(r["g"])("span",ve,Object(r["z"])(e.createdAt),1),Object(r["g"])("span",Oe,Object(r["z"])(e.name),1),Object(r["g"])("span",me,Object(r["z"])(e.message),1)])})),128))],512)):Object(r["e"])("",!0)])}n("d81d");var ge=n("5530"),he=(n("159b"),function(e){var t=Object(r["v"])(null),n=Object(r["v"])(null),a=R.collection(e).orderBy("createdAt"),c=a.onSnapshot((function(e){var r=[];e.docs.forEach((function(e){e.data().createdAt&&r.push(Object(ge["a"])(Object(ge["a"])({},e.data()),{},{id:e.id}))})),t.value=r,n.value=null}),(function(e){console.log(e.message),t.value=null,n.value="could not fetch data"}));return Object(r["D"])((function(e){e((function(){return c()}))})),{documents:t,error:n}}),we=he,ye=n("ef1b"),xe={setup:function(){var e=we("message"),t=e.error,n=e.documents,a=Object(r["b"])((function(){if(n.value)return n.value.map((function(e){var t=Object(ye["a"])(e.createdAt.toDate());return Object(ge["a"])(Object(ge["a"])({},e),{},{createdAt:t})}))})),c=Object(r["v"])(null);return Object(r["p"])((function(){c.value.scrollTop=c.value.scrollHeight})),{error:t,documents:n,formattedDocuments:a,messages:c}}};n("286d");xe.render=je;var Se=xe,ke={components:{Navbar:ae,NewChatForm:pe,ChatWindow:Se},setup:function(){var e=ne(),t=e.user,n=Object(o["c"])();Object(r["C"])(t,(function(){t||n.push({name:"Welcome"})}))}};ke.render=H;var Re,Ce=ke,qe=function(e,t,n){var r=k.currentUser;r?n():n({name:"Welcome"})},Ue=function(e,t,n){var r=k.currentUser;r?n({name:"ChatRoom"}):n()},ze=[{path:"/",name:"Welcome",component:M,beforeEnter:Ue},{path:"/chatroom",name:"ChatRoom",component:Ce,beforeEnter:qe}],Ae=Object(o["a"])({history:Object(o["b"])("/"),routes:ze}),Ne=Ae;n("845f");k.onAuthStateChanged((function(){Re||(Re=Object(r["c"])(u).use(Ne).mount("#app"))}))},"61c2":function(e,t,n){},"65a4":function(e,t,n){},"845f":function(e,t,n){},a07f:function(e,t,n){},b85b:function(e,t,n){"use strict";n("65a4")},cfcf:function(e,t,n){"use strict";n("2ab7")},dd13:function(e,t,n){"use strict";n("a07f")}});
//# sourceMappingURL=app.1eb351a4.js.map