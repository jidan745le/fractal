(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"6FWG":function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return s})),n.d(e,"g",(function(){return g})),n.d(e,"h",(function(){return m})),n.d(e,"e",(function(){return p})),n.d(e,"f",(function(){return v})),n.d(e,"c",(function(){return y}));n("d+bn"),n("WrL9"),n("/yGW"),n("zb4k"),n("C1Oo"),n("bVd+"),n("5EsK"),n("CAcD"),n("4Q7Z"),n("TKVh");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={fractalLocation:{x0:-1.5,x1:1.5,y0:-1,y1:1},canvasSize:{width:900,height:600}};var c=document.getElementById("root"),u=null,f=document.createElement("canvas"),d=f.getContext("2d");c.appendChild(f);e.d=f;var l,h,s=(h=(l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"zoom":var n=e.payload,r=n.zoom,a=n.x,c=n.y,u=t.canvasSize,f=u.width,d=u.height,l=t.fractalLocation,h=l.x0,s=l.x1,g=l.y0,m=l.y1,p={};return p.x0=((r-1)*(h+(s-h)/f*a)+h)/r,p.x1=((r-1)*(h+(s-h)/f*a)+s)/r,p.y0=((r-1)*(g+(m-g)/d*c)+g)/r,p.y1=((r-1)*(g+(m-g)/d*c)+m)/r,o(o({},t),{},{fractalLocation:p});case"drag":var v=e.payload,y=v.movementX,b=v.movementY,w=t.canvasSize,x=w.width,O=w.height,j=t.fractalLocation,S=j.x0,k=j.x1,C=j.y0,L=j.y1,E={};return E.x0=S-(k-S)/x*y,E.x1=k-(k-S)/x*y,E.y0=C-(L-C)/O*b,E.y1=L-(L-C)/O*b,o(o({},t),{},{fractalLocation:E});case"reset":var P=o({},e.payload);return o(o({},t),{},{fractalLocation:P});case"setSize":var z=o({},e.payload);return o(o({},t),{},{canvasSize:z});default:return t}})(void 0,{}),{dispatch:function(t){h=l(h,t)},getState:function(){return h}});function g(){(u=document.createElement("canvas")).width=f.width,u.height=f.height,u.getContext("2d").drawImage(f,0,0)}function m(t,e){f.width=t,f.height=e,s.dispatch({type:"setSize",payload:{width:t,height:e}})}function p(t,e,n,r){d.putImageData(r,t.x,t.y)}function v(){return u}function y(){d.clearRect(0,0,f.width,f.height)}},BTkg:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return i}));n("BqKg"),n("7CXs"),n("jLdQ"),n("X1SY");function r(t,e){for(var n=e.x-t.x,r=e.rgb.map((function(e,r){return(e-t.rgb[r])/n})),o=1,a={},i=t.x+1;i<=e.x;i++)a[i]=t.rgb.map((function(t,e){return Math.round(t+o*r[e])})),o++;return a[t.x]=t.rgb,a}var o={x0:-1.5,y0:-1,x1:1.5,y1:1},a={chunkSize:{width:100,height:100},threadNum:4,juliaParameter:{real:-.835,imaginary:-.2321,platte:Array.from({length:201}).map((function(t,e){return[0,0,0,e]}))}};function i(t){a.juliaParameter.platte=function(t){for(var e,n,o={},a=[],i=0;i<t.length;i++){var c=t[i].map((function(t){return t.y})).map((function(t){return Math.round(1.7*t)}));a.push({x:t[i][0].x,rgb:c}),0==i&&(e=t[i][0].x),i==t.length-1&&(n=t[i][0].x)}console.log(a);for(var u=0;u<a.length-1;u++)Object.assign(o,r(a[u],a[u+1]));return o.length=201,o=Array.from(o),console.log("platte",o,e,n),o.map((function(t,r,o){return r<e?o[e].slice():r>n?o[n].slice():t}))}(t).map((function(t){return t.push(255),t})),console.log("platte",a.juliaParameter.platte)}},QfWi:function(t,e,n){"use strict";n.r(e);var r=n("nNMk"),o=n("BTkg"),a=n("6FWG");function i(t,e,n){var r=document.createElement("canvas");r.width=a.d.width,r.height=a.d.height,r.getContext("2d").drawImage(a.d,0,0),Object(a.c)(),a.b.dispatch({type:"zoom",payload:{zoom:t,x:e,y:n}}),a.a.drawImage(r,(1-t)*e,(1-t)*n,a.d.width*t,a.d.height*t)}function c(t){var e=t.movementX,n=t.movementY;console.log("movement"),function(t,e){Object(a.g)(),Object(a.c)(),a.b.dispatch({type:"drag",payload:{movementX:t,movementY:e}}),a.d.getContext("2d").drawImage(Object(a.f)(),t,e)}(e,n),Object(r.a)(a.b.getState().fractalLocation,o.b)}n("bVd+"),n("X7wY"),n("MJ/F"),n("C1Oo"),n("BqKg"),n("7CXs"),n("zFde"),n("K0Wb"),n("ed2Y"),n("CAcD");function u(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,a=!0,i=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){i=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(i)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var d=function(t,e){t.addEventListener("mousedown",(function(t){document.addEventListener("mousemove",e)})),t.addEventListener("mouseup",(function(){document.removeEventListener("mousemove",e)})),"CANVAS"===t.tagName&&t.addEventListener("mouseleave",(function(){document.removeEventListener("mousemove",e)}))};function l(t){return document.querySelector(t)}function h(t){return{left:parseInt(window.getComputedStyle(t).left),top:parseInt(window.getComputedStyle(t).top)}}var s,g;n("pyAK");Object(r.c)(o.a,o.b),s=a.d,g=function(t){Object(r.b)(),function(t){t.stopPropagation();var e=t.clientX-a.d.getBoundingClientRect().left,n=t.clientY-a.d.getBoundingClientRect().top;t.deltaY<0?i(1.2,e,n):i(1/1.2,e,n),Object(r.a)(a.b.getState().fractalLocation,o.b)}(t)},s.addEventListener("wheel",g),d(a.d,(function(t){Object(r.b)(),c(t)})),d(l(".header"),(function(t){t.preventDefault(),function(t,e){t.style.left=h(t).left+e.movementX+"px",t.style.top=h(t).top+e.movementY+"px"}(l(".window"),event)})),function(t,e){new ResizeObserver((function(t){console.log(t);var n,r=u(t);try{for(r.s();!(n=r.n()).done;){var o=n.value.contentRect,a=o.width,i=o.height;e({width:a,height:i})}}catch(t){r.e(t)}finally{r.f()}console.log("Size changed")})).observe(t)}(l(".window"),(function(t){var e=t.width,n=t.height,o=Object(a.f)();Object(r.d)(e,n-20),o&&a.d.getContext("2d").drawImage(o,0,0,e,n-20)})),Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(6)]).then(function(t){n("iEVl")}.bind(null,n)).catch(n.oe)},nNMk:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"d",(function(){return d})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return h}));n("Zkhg"),n("CAcD");var r=n("6FWG"),o=n("ErGL"),a=n.n(o),i=[{},{},{},{},{},{},{},{}],c=!1;function u(){c=!0}var f=function(t,e){Object(r.h)(t,e);return function(n,o){console.log("store",n);var a=0,u=o.chunkSize,f=o.threadNum,d=o.juliaParameter,l=(n.x1-n.x0)/t,h=(n.y1-n.y0)/e;c=!1;var s=Math.ceil(t/u.width),g=Math.ceil(e/u.height),m=s*g;return console.log(s,g,m),new Promise((function(o){for(var p=function(p){var v=p%f,y={},b=u.width,w=u.height;y.x=p%s*u.width,y.y=parseInt(p/s)*u.height,console.log("pos",y),y.x===s-1&&t%u.width>0&&(b=t%u.width),y.y===g-1&&e%u.height>0&&(w=e%u.height);var x={position:y,chunkWidth:b,chunkHeight:w},O={fractalChunkData:{x0:n.x0+l*y.x,y0:n.y0+h*y.y,x1:n.x0+l*(y.x+b),y1:n.y0+h*(y.y+w)},canvasData:x,option:{real:d.real,imaginary:d.imaginary,platte:d.platte}};console.log(O),function t(e,n){var r;if(!c)return(r=i[e].worker?i[e].worker:i[e].worker=new Worker("./worker/worker.js")).working?r.promiseInstance.then((function(){return t(e,n)})):r.promiseInstance=new Promise((function(t){r.postMessage(n),r.working=!0,r.onmessage=function(e){r.working=!1,t(e.data)}}))}(v,O).then((function(t){1===++a||a===m&&o(m),t&&(Object(r.e)(y,b,w,t),console.log("webworker",p,a,v,O,t))}))},v=0;v<m;v++)p(v)})).then((function(){Object(r.g)()}))}};function d(t,e){l=f(t,e),h=a()(l,100)}var l=f(900,600),h=a()(l,100)},pyAK:function(t,e,n){}},[["QfWi",5,0,1,2]]]);