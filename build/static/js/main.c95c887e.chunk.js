/*! For license information please see main.c95c887e.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[1],{115:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(26),i=n.n(o),a=n(134),s=n(135),c=n(43),u=n(3),l=n(53),p=n(121),d=Object(l.a)({palette:{type:"dark"},border:{borderColor:"rgba(0, 0, 0, 0.13)",borderWidth:2}}),h=Object(p.a)(d),f=n(6),g=n(41);var m=Object(g.a)((function(t){var e,n,r,o,i;return{"@global":{"*:focus":{outline:0},".text-white":{color:t.palette.common.white},".listItemLeftPadding":(e={paddingTop:"".concat(t.spacing(1.75),"px !important"),paddingBottom:"".concat(t.spacing(1.75),"px !important"),paddingLeft:"".concat(t.spacing(4),"px !important")},Object(f.a)(e,t.breakpoints.down("sm"),{paddingLeft:"".concat(t.spacing(4),"px !important")}),Object(f.a)(e,"@media (max-width:  420px)",{paddingLeft:"".concat(t.spacing(1),"px !important")}),e),".container":(n={width:"100%",paddingRight:t.spacing(4),paddingLeft:t.spacing(4),marginRight:"auto",marginLeft:"auto"},Object(f.a)(n,t.breakpoints.up("sm"),{maxWidth:540}),Object(f.a)(n,t.breakpoints.up("md"),{maxWidth:720}),Object(f.a)(n,t.breakpoints.up("lg"),{maxWidth:1170}),n),".row":{display:"flex",flexWrap:"wrap",marginRight:-t.spacing(2),marginLeft:-t.spacing(2)},".container-fluid":{width:"100%",paddingRight:t.spacing(2),paddingLeft:t.spacing(2),marginRight:"auto",marginLeft:"auto",maxWidth:1370},".lg-mg-top":(r={marginTop:"".concat(t.spacing(20),"px !important")},Object(f.a)(r,t.breakpoints.down("md"),{marginTop:"".concat(t.spacing(18),"px !important")}),Object(f.a)(r,t.breakpoints.down("sm"),{marginTop:"".concat(t.spacing(16),"px !important")}),Object(f.a)(r,t.breakpoints.down("xs"),{marginTop:"".concat(t.spacing(14),"px !important")}),r),".lg-mg-bottom":(o={marginBottom:"".concat(t.spacing(20),"px !important")},Object(f.a)(o,t.breakpoints.down("md"),{marginBottom:"".concat(t.spacing(18),"px !important")}),Object(f.a)(o,t.breakpoints.down("sm"),{marginBottom:"".concat(t.spacing(16),"px !important")}),Object(f.a)(o,t.breakpoints.down("xs"),{marginBottom:"".concat(t.spacing(14),"px !important")}),o),".lg-p-top":(i={paddingTop:"".concat(t.spacing(20),"px !important")},Object(f.a)(i,t.breakpoints.down("md"),{paddingTop:"".concat(t.spacing(18),"px !important")}),Object(f.a)(i,t.breakpoints.down("sm"),{paddingTop:"".concat(t.spacing(16),"px !important")}),Object(f.a)(i,t.breakpoints.down("xs"),{paddingTop:"".concat(t.spacing(14),"px !important")}),i)}}}),{withTheme:!0})((function(){return null})),y=n(72),b=n(14),w=n(50),v=n(21),j=n(22),O=n(2),k=["component","roles"],x=function(t){var e=t.component,n=t.roles,r=Object(w.a)(t,k),o=Object(j.c)((function(t){return t.auth.user})),i=Object(j.c)((function(t){return t.auth.token})),a=Object(j.c)((function(t){return t.auth.roles})).filter((function(t){return n.includes(t)})).length>0;return Object(v.b)(o,i,n).then((function(t){return a=t.permited})),Object(O.jsx)(u.b,Object(b.a)(Object(b.a)({},r),{},{render:function(t){return a?Object(O.jsx)(e,Object(b.a)({},t)):Object(O.jsx)(u.a,{to:{pathname:"/",state:{from:t.location}}})}}))},T=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(7)]).then(n.bind(null,777))})),E=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(8)]).then(n.bind(null,778))}));var S=function(){return Object(O.jsx)(c.a,{children:Object(O.jsxs)(a.a,{theme:h,children:[Object(O.jsx)(s.a,{}),Object(O.jsx)(m,{}),Object(O.jsx)(y.a,{color:h.palette.primary.dark}),Object(O.jsx)(r.Suspense,{fallback:Object(O.jsx)(r.Fragment,{}),children:Object(O.jsxs)(u.d,{children:[Object(O.jsx)(x,{path:"/c",roles:["user"],component:T}),Object(O.jsx)(u.b,{children:Object(O.jsx)(E,{})})]})})]})})},R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}n(111),n(112);var L,P,_,q=n(18),C=n(48),A=n(74),W=n.n(A),D="ADD_GRID",M="SET_CURRENT_TICKER",U="SET_GRID_ELEMENTS",I={grids:{},currentTicker:""},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case D:return(L=Object(b.a)({},t)).grids[e.payload.ticker]=Object(b.a)(Object(b.a)({},L.grids[e.payload.ticker]),{},{card:e.payload}),L;case M:return(L=t).currentTicker=e.payload,L;case U:return(L=t).grids[e.payload.ticker]?L.grids[e.payload.ticker].elements=e.payload.element:(L.grids[e.payload.ticker]={},L.grids[e.payload.ticker].elements=e.payload.elements),L;default:return t}},H="SET_COUNTER",G="INCREMENT_COUNTER",J="DECREMENT_COUNTER",B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case H:return e.payload;case G:return t+1;case J:return t-1;default:return t}},X=n(29),z="ADD_CARD",K={status:"idle",cards:[],newCounter:0},Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case z:return(P=Object(X.a)(t.cards))[e.payload.ticker]=e.payload,t.cards=P,t;default:return t}},$="CHANGE_HEADER",Q="CHANGE_HEADER_TYPE",V="CHANGE_HEADER_NAME",Z="CHANGE_ROW",tt="ADD_ROW",et={headers:[{field:"h1",headerName:"headStr",flex:1,type:"string",editable:!0},{field:"h2",headerName:"headNum",flex:1,type:"number",editable:!0},{field:"h3",headerName:"headDate",type:"date",width:180,editable:!0}],rows:[],rowNumber:0,status:"idle"},nt="",rt="",ot=[],it=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case $:return t.headers=e.payload,t;case Q:return nt=e.payload.field,(rt=t.headers).find((function(t){return t.field===nt})).type=e.payload.type,t.headers=rt,t;case V:return nt=e.payload.field,(rt=t.headers).find((function(t){return t.field===nt})).headerName=e.payload.type,t.headers=rt,t;case Z:return nt=e.payload.field,(ot=t.rows).find((function(t){return t.id===e.payload.id}))[nt]=e.payload.props.value,t.rows=ot,t;case tt:return(ot=Object(X.a)(t.rows)).push({id:t.rowNumber+1,h1:"",h2:"",h3:""}),t.rows=ot,t.rowNumber+=1,t;default:return t}},at=n(35),st={token:"",user:"",roles:[]},ct=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case at.b:return(_=Object(b.a)({},t)).token=e.payload,_;case at.c:return(_=Object(b.a)({},t)).user=e.payload,_;case at.a:return(_=Object(b.a)({},t)).roles=e.payload,_;default:return t}},ut=n(71),lt=Object(q.b)({grid:F,table:it,card:Y,counter:B,auth:ct}),pt=Object(C.a)({key:"root",storage:W.a},lt),dt=Object(q.d)(pt,Object(q.a)(ut.a)),ht=Object(C.b)(dt),ft=n(75);i.a.render(Object(O.jsx)(j.a,{store:dt,children:Object(O.jsxs)(ft.a,{persistor:ht,children:[Object(O.jsx)(S,{}),","]})}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");R?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):N(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):N(e,t)}))}}()},21:function(t,e,n){"use strict";n.d(e,"i",(function(){return a})),n.d(e,"j",(function(){return s})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"h",(function(){return p})),n.d(e,"f",(function(){return d})),n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return f})),n.d(e,"g",(function(){return g}));var r=n(9),o=n.n(r),i="https://stocks-studies-api.herokuapp.com:5000/api/";function a(t){var e={headers:{"Content-Type":"application/json"}},n={data:JSON.stringify(t)};return new Promise((function(t,r){o.a.post(i+"login",n,e).then((function(e){t(e)})).catch((function(t){r(t)}))}))}function s(t,e,n,r){var a={headers:{"Content-Type":"application/json"}},s={data:JSON.stringify({id:t,user:e,grid:n,layout:r})};return new Promise((function(t,e){o.a.post(i+"post_grid_elements",s,a).then((function(e){t(e)})).catch((function(t){e(t)}))}))}function c(t){var e={headers:{"Content-Type":"application/json"}},n={data:JSON.stringify({user:t})};return new Promise((function(t,r){o.a.post(i+"fetchGridElements",n,e).then((function(e){t(e.data.dashboards)})).catch((function(t){r(t)}))}))}function u(t,e){return new Promise((function(n,r){o.a.get(i+"priceData/?tick="+t+"&period="+e).then((function(t){n(t.data)})).catch((function(t){return r(t)}))}))}function l(t,e){return new Promise((function(n,r){o.a.get(i+"dividendData/?tick="+t+"&period="+e).then((function(t){n(t.data)})).catch((function(t){return r(t)}))}))}function p(t,e,n){return new Promise((function(r,a){o.a.get(i+"getTickers/?page="+t+"&search="+e+"&exchange="+n).then((function(t){r(JSON.parse(t.data))})).catch((function(t){return a(t)}))}))}function d(t){return new Promise((function(e,n){o.a.get(i+"getUserIdentifiers/?user="+t).then((function(t){t=JSON.parse(t.data).map((function(t){return t.identifier})),e(t)})).catch((function(t){return n(t)}))}))}function h(t,e){var n={headers:{"Content-Type":"application/json"}},r={data:JSON.stringify({email:t,password:e})};return new Promise((function(t,e){o.a.post(i+"add_user",r,n).then((function(e){t(e)}))}))}function f(t,e,n){return new Promise((function(t,e){t({permited:!0})}))}function g(t){return new Promise((function(e,n){o.a.get(i+"quote_data/?tick="+t).then((function(t){e(t.data)}))}))}},35:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return s})),n.d(e,"d",(function(){return c}));var r="SET_TOKEN",o="SET_USER",i="SET_ROLES",a=function(t){return{type:r,payload:t}},s=function(t){return{type:o,payload:t}},c=function(t){return{type:i,payload:t}}},72:function(t,e,n){"use strict";(function(t){var r=n(10),o=n.n(r),i=n(41);function a(){return s.call(this),null}function s(){var e,r,o,i,a,s,c,u,l,p,d,h,f,g,m,y,b,w,v,j,O,k,x,T,E,S,R,N,L,P,_,q,C,A,W,D,M,U,I,F,H,G,J,B,X,z,K,Y,$=[].slice,Q={}.hasOwnProperty,V=function(t,e){function n(){this.constructor=t}for(var r in e)Q.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},Z=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};for(O={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},L=function(){var t;return null!=(t="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?t:+new Date},_=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,j=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==_&&(_=function(t){return setTimeout(t,50)},j=function(t){return clearTimeout(t)}),C=function(t){var e,n;return e=L(),(n=function(){var r;return(r=L()-e)>=33?(e=L(),t(r,(function(){return _(n)}))):setTimeout(n,33-r)})()},q=function(){var t,e,n;return n=arguments[0],e=arguments[1],t=3<=arguments.length?$.call(arguments,2):[],"function"==typeof n[e]?n[e].apply(n,t):n[e]},k=function(){var t,e,n,r,o,i,a;for(e=arguments[0],i=0,a=(r=2<=arguments.length?$.call(arguments,1):[]).length;a>i;i++)if(n=r[i])for(t in n)Q.call(n,t)&&(o=n[t],null!=e[t]&&"object"==typeof e[t]&&null!=o&&"object"==typeof o?k(e[t],o):e[t]=o);return e},b=function(t){var e,n,r,o,i;for(n=e=0,o=0,i=t.length;i>o;o++)r=t[o],n+=Math.abs(r),e++;return n/e},T=function(t,e){var n,r,o;if(null==t&&(t="options"),null==e&&(e=!0),o=document.querySelector("[data-pace-"+t+"]")){if(n=o.getAttribute("data-pace-"+t),!e)return n;try{return JSON.parse(n)}catch(s){return r=s,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",r):void 0}}},c=function(){function t(){}return t.prototype.on=function(t,e,n,r){var o;return null==r&&(r=!1),null==this.bindings&&(this.bindings={}),null==(o=this.bindings)[t]&&(o[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:r})},t.prototype.once=function(t,e,n){return this.on(t,e,n,!0)},t.prototype.off=function(t,e){var n,r,o;if(null!=(null!=(r=this.bindings)?r[t]:void 0)){if(null==e)return delete this.bindings[t];for(n=0,o=[];n<this.bindings[t].length;)o.push(this.bindings[t][n].handler===e?this.bindings[t].splice(n,1):n++);return o}},t.prototype.trigger=function(){var t,e,n,r,o,i,a,s,c;if(n=arguments[0],t=2<=arguments.length?$.call(arguments,1):[],null!=(a=this.bindings)?a[n]:void 0){for(o=0,c=[];o<this.bindings[n].length;)r=(s=this.bindings[n][o]).handler,e=s.ctx,i=s.once,r.apply(null!=e?e:this,t),c.push(i?this.bindings[n].splice(o,1):o++);return c}},t}(),p=window.Pace||{},window.Pace=p,k(p,c.prototype),P=p.options=k({},O,window.paceOptions,T()),J=0,X=(K=["ajax","document","eventLag","elements"]).length;X>J;J++)!0===P[M=K[J]]&&(P[M]=O[M]);l=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return V(e,t),e}(Error),r=function(){function t(){this.progress=0}return t.prototype.getElement=function(){var t;if(null==this.el){if(!(t=document.querySelector(P.target)))throw new l;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=t.firstChild?t.insertBefore(this.el,t.firstChild):t.appendChild(this.el)}return this.el},t.prototype.finish=function(){var t;return(t=this.getElement()).className=t.className.replace("pace-active",""),t.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},t.prototype.update=function(t){return this.progress=t,this.render()},t.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(t){l=t}return this.el=void 0},t.prototype.render=function(){var t,e,n,r,o,i,a;if(null==document.querySelector(P.target))return!1;for(t=this.getElement(),r="translate3d("+this.progress+"%, 0, 0)",o=0,i=(a=["webkitTransform","msTransform","transform"]).length;i>o;o++)e=a[o],t.children[0].style[e]=r;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(t.children[0].setAttribute("data-progress-text",(0|this.progress)+"%"),this.progress>=100?n="99":(n=this.progress<10?"0":"",n+=0|this.progress),t.children[0].setAttribute("data-progress",""+n)),this.lastRenderedProgress=this.progress},t.prototype.done=function(){return this.progress>=100},t}(),u=function(){function t(){this.bindings={}}return t.prototype.trigger=function(t,e){var n,r,o,i,a;if(null!=this.bindings[t]){for(a=[],r=0,o=(i=this.bindings[t]).length;o>r;r++)n=i[r],a.push(n.call(this,e));return a}},t.prototype.on=function(t,e){var n;return null==(n=this.bindings)[t]&&(n[t]=[]),this.bindings[t].push(e)},t}(),G=window.XMLHttpRequest,H=window.XDomainRequest,F=window.WebSocket,x=function(t,e){var n,r,o;for(n in o=[],e.prototype)try{r=e.prototype[n],o.push(null==t[n]&&"function"!=typeof r?t[n]=r:void 0)}catch(c){c}return o},R=[],p.ignore=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?$.call(arguments,1):[],R.unshift("ignore"),n=e.apply(null,t),R.shift(),n},p.track=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?$.call(arguments,1):[],R.unshift("track"),n=e.apply(null,t),R.shift(),n},D=function(t){var e;if(null==t&&(t="GET"),"track"===R[0])return"force";if(!R.length&&P.ajax){if("socket"===t&&P.ajax.trackWebSockets)return!0;if(e=t.toUpperCase(),Z.call(P.ajax.trackMethods,e)>=0)return!0}return!1},d=function(t){function e(){var t,n=this;e.__super__.constructor.apply(this,arguments),t=function(t){var e;return e=t.open,t.open=function(r,o){return D(r)&&n.trigger("request",{type:r,url:o,request:t}),e.apply(t,arguments)}},window.XMLHttpRequest=function(e){var n;return n=new G(e),t(n),n};try{x(window.XMLHttpRequest,G)}catch(i){}if(null!=H){window.XDomainRequest=function(){var e;return e=new H,t(e),e};try{x(window.XDomainRequest,H)}catch(i){}}if(null!=F&&P.ajax.trackWebSockets){window.WebSocket=function(t,e){var r;return r=null!=e?new F(t,e):new F(t),D("socket")&&n.trigger("request",{type:"socket",url:t,protocols:e,request:r}),r};try{x(window.WebSocket,F)}catch(i){}}}return V(e,t),e}(u),B=null,W=function(t){var e,n,r,o;for(n=0,r=(o=P.ajax.ignoreURLs).length;r>n;n++)if("string"==typeof(e=o[n])){if(-1!==t.indexOf(e))return!0}else if(e.test(t))return!0;return!1},(E=function(){return null==B&&(B=new d),B})().on("request",(function(t){var n,r,o,i,a;return i=t.type,o=t.request,a=t.url,W(a)||p.running||!1===P.restartOnRequestAfter&&"force"!==D(i)?void 0:(r=arguments,"boolean"==typeof(n=P.restartOnRequestAfter||0)&&(n=0),setTimeout((function(){var t,n,a,s,c;if("socket"===i?o.readyState<2:0<(a=o.readyState)&&4>a){for(p.restart(),c=[],t=0,n=(s=p.sources).length;n>t;t++){if((M=s[t])instanceof e){M.watch.apply(M,r);break}c.push(void 0)}return c}}),n))})),e=function(){function t(){var t=this;this.elements=[],E().on("request",(function(){return t.watch.apply(t,arguments)}))}return t.prototype.watch=function(t){var e,n,r,o;return r=t.type,e=t.request,o=t.url,W(o)?void 0:(n="socket"===r?new g(e):new m(e),this.elements.push(n))},t}(),m=function(t){var e,n,r,o,i,a=this;if(this.progress=0,null!=window.ProgressEvent)for(t.addEventListener("progress",(function(t){return a.progress=t.lengthComputable?100*t.loaded/t.total:a.progress+(100-a.progress)/2}),!1),n=0,r=(i=["load","abort","timeout","error"]).length;r>n;n++)e=i[n],t.addEventListener(e,(function(){return a.progress=100}),!1);else o=t.onreadystatechange,t.onreadystatechange=function(){var e;return 0===(e=t.readyState)||4===e?a.progress=100:3===t.readyState&&(a.progress=50),"function"==typeof o?o.apply(null,arguments):void 0}},g=function(t){var e,n,r,o,i=this;for(this.progress=0,n=0,r=(o=["error","open"]).length;r>n;n++)e=o[n],t.addEventListener(e,(function(){return i.progress=100}),!1)},i=function(t){var e,n,r,o;for(null==t&&(t={}),this.elements=[],null==t.selectors&&(t.selectors=[]),n=0,r=(o=t.selectors).length;r>n;n++)e=o[n],this.elements.push(new a(e))},a=function(){function t(t){this.selector=t,this.progress=0,this.check()}return t.prototype.check=function(){var t=this;return document.querySelector(this.selector)?this.done():setTimeout((function(){return t.check()}),P.elements.checkInterval)},t.prototype.done=function(){return this.progress=100},t}(),o=function(){function t(){var t,e,n=this;this.progress=null!=(e=this.states[document.readyState])?e:100,t=document.onreadystatechange,document.onreadystatechange=function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof t?t.apply(null,arguments):void 0}}return t.prototype.states={loading:0,interactive:50,complete:100},t}(),s=function(){var t,e,n,r,o,i=this;this.progress=0,t=0,o=[],r=0,n=L(),e=setInterval((function(){var a;return a=L()-n-50,n=L(),o.push(a),o.length>P.eventLag.sampleCount&&o.shift(),t=b(o),++r>=P.eventLag.minSamples&&t<P.eventLag.lagThreshold?(i.progress=100,clearInterval(e)):i.progress=3/(t+3)*100}),50)},f=function(){function t(t){this.source=t,this.last=this.sinceLastUpdate=0,this.rate=P.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=q(this.source,"progress"))}return t.prototype.tick=function(t,e){var n;return null==e&&(e=q(this.source,"progress")),e>=100&&(this.done=!0),e===this.last?this.sinceLastUpdate+=t:(this.sinceLastUpdate&&(this.rate=(e-this.last)/this.sinceLastUpdate),this.catchup=(e-this.progress)/P.catchupTime,this.sinceLastUpdate=0,this.last=e),e>this.progress&&(this.progress+=this.catchup*t),n=1-Math.pow(this.progress/100,P.easeFactor),this.progress+=n*this.rate*t,this.progress=Math.min(this.lastProgress+P.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},t}(),U=null,A=null,w=null,I=null,y=null,v=null,p.running=!1,S=function(){return P.restartOnPushState?p.restart():void 0},null!=window.history.pushState&&(z=window.history.pushState,window.history.pushState=function(){return S(),z.apply(window.history,arguments)}),null!=window.history.replaceState&&(Y=window.history.replaceState,window.history.replaceState=function(){return S(),Y.apply(window.history,arguments)}),h={ajax:e,elements:i,document:o,eventLag:s},(N=function(){var t,e,n,o,i,a,s,c;for(p.sources=U=[],e=0,o=(a=["ajax","elements","document","eventLag"]).length;o>e;e++)!1!==P[t=a[e]]&&U.push(new h[t](P[t]));for(n=0,i=(c=null!=(s=P.extraSources)?s:[]).length;i>n;n++)M=c[n],U.push(new M(P));return p.bar=w=new r,A=[],I=new f})(),p.stop=function(){return p.trigger("stop"),p.running=!1,w.destroy(),v=!0,null!=y&&("function"==typeof j&&j(y),y=null),N()},p.restart=function(){return p.trigger("restart"),p.stop(),p.start()},p.go=function(){var t;return p.running=!0,w.render(),t=L(),v=!1,y=C((function(e,n){var r,o,i,a,s,c,u,l,d,h,g,m,y,b,j;for(100-w.progress,o=h=0,i=!0,c=g=0,y=U.length;y>g;c=++g)for(M=U[c],d=null!=A[c]?A[c]:A[c]=[],u=m=0,b=(s=null!=(j=M.elements)?j:[M]).length;b>m;u=++m)a=s[u],i&=(l=null!=d[u]?d[u]:d[u]=new f(a)).done,l.done||(o++,h+=l.tick(e));return r=h/o,w.update(I.tick(e,r)),w.done()||i||v?(w.update(100),p.trigger("done"),setTimeout((function(){return w.finish(),p.running=!1,p.trigger("hide")}),Math.max(P.ghostTime,Math.max(P.minTime-(L()-t),0)))):n()}))},p.start=function(t){k(P,t),p.running=!0;try{w.render()}catch(r){l=r}return document.querySelector(".pace")?(p.trigger("start"),p.go()):setTimeout(p.start,50)},"function"==typeof define&&n(88)?define((function(){return p})):"object"==typeof exports?t.exports=p:P.startOnPageLoad&&p.start()}a.propTypes={color:o.a.string.isRequired},e.a=Object(i.a)({"@global":{".pace":{pointerEvents:"none",userSelect:"none"},".pace-inactive":{display:"none"},".pace .pace-progress":{background:function(t){return t.color||null},position:"fixed",zIndex:2e3,top:0,right:"100%",width:"100%",height:3}}})(a),window.paceOptions={ajax:{trackMethods:["GET","POST"]}}}).call(this,n(79)(t))}},[[115,2,4]]]);
//# sourceMappingURL=main.c95c887e.chunk.js.map