(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"6FWG":function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return s})),n.d(e,"g",(function(){return g})),n.d(e,"h",(function(){return m})),n.d(e,"e",(function(){return v})),n.d(e,"f",(function(){return p})),n.d(e,"c",(function(){return y}));n("FZoA"),n("rGdY"),n("JG/L"),n("SJCa"),n("lPBy"),n("G8eP"),n("JbqQ"),n("kkT2"),n("MuoG"),n("EIT+");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={fractalLocation:{x0:-1.5,x1:1.5,y0:-1,y1:1},canvasSize:{width:900,height:600}};var c=document.getElementById("root"),u=null,f=document.createElement("canvas"),l=f.getContext("2d");c.appendChild(f);e.d=f;var d,h,s=(h=(d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"zoom":var n=e.payload,r=n.zoom,a=n.x,c=n.y,u=t.canvasSize,f=u.width,l=u.height,d=t.fractalLocation,h=d.x0,s=d.x1,g=d.y0,m=d.y1,v={};return v.x0=((r-1)*(h+(s-h)/f*a)+h)/r,v.x1=((r-1)*(h+(s-h)/f*a)+s)/r,v.y0=((r-1)*(g+(m-g)/l*c)+g)/r,v.y1=((r-1)*(g+(m-g)/l*c)+m)/r,o(o({},t),{},{fractalLocation:v});case"drag":var p=e.payload,y=p.movementX,b=p.movementY,w=t.canvasSize,x=w.width,O=w.height,j=t.fractalLocation,k=j.x0,S=j.x1,P=j.y0,E=j.y1,I={};return I.x0=k-(S-k)/x*y,I.x1=S-(S-k)/x*y,I.y0=P-(E-P)/O*b,I.y1=E-(E-P)/O*b,o(o({},t),{},{fractalLocation:I});case"reset":var L=o({},e.payload);return o(o({},t),{},{fractalLocation:L});case"setSize":var z=o({},e.payload);return o(o({},t),{},{canvasSize:z});default:return t}})(void 0,{}),{dispatch:function(t){h=d(h,t)},getState:function(){return h}});function g(){(u=document.createElement("canvas")).width=f.width,u.height=f.height,u.getContext("2d").drawImage(f,0,0)}function m(t,e){f.width=t,f.height=e,s.dispatch({type:"setSize",payload:{width:t,height:e}})}function v(t,e,n,r){l.putImageData(r,t.x,t.y)}function p(){return u}function y(){l.clearRect(0,0,f.width,f.height)}},BTkg:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return i}));n("DIQv"),n("KEO2"),n("Vm4B"),n("a6At");function r(t,e){for(var n=e.x-t.x,r=e.rgb.map((function(e,r){return(e-t.rgb[r])/n})),o=1,a={},i=t.x+1;i<=e.x;i++)a[i]=t.rgb.map((function(t,e){return Math.round(t+o*r[e])})),o++;return a[t.x]=t.rgb,a}var o={x0:-1.5,y0:-1,x1:1.5,y1:1},a={chunkSize:{width:100,height:100},threadNum:4,juliaParameter:{real:-.835,imaginary:-.2321,platte:Array.from({length:201}).map((function(t,e){return[0,0,0,e]}))}};function i(t){a.juliaParameter.platte=function(t){for(var e,n,o={},a=[],i=0;i<t.length;i++){var c=t[i].map((function(t){return t.y})).map((function(t){return Math.round(1.7*t)}));a.push({x:t[i][0].x,rgb:c}),0==i&&(e=t[i][0].x),i==t.length-1&&(n=t[i][0].x)}console.log(a);for(var u=0;u<a.length-1;u++)Object.assign(o,r(a[u],a[u+1]));return o.length=201,o=Array.from(o),console.log("platte",o,e,n),o.map((function(t,r,o){return r<e?o[e].slice():r>n?o[n].slice():t}))}(t).map((function(t){return t.push(255),t})),console.log("platte",a.juliaParameter.platte)}},QfWi:function(t,e,n){"use strict";n.r(e);var r=n("nNMk"),o=n("BTkg"),a=n("6FWG");function i(t,e,n){var r=document.createElement("canvas");r.width=a.d.width,r.height=a.d.height,r.getContext("2d").drawImage(a.d,0,0),Object(a.c)(),a.b.dispatch({type:"zoom",payload:{zoom:t,x:e,y:n}}),a.a.drawImage(r,(1-t)*e,(1-t)*n,a.d.width*t,a.d.height*t)}function c(t){var e=t.movementX,n=t.movementY;console.log("movement"),function(t,e){Object(a.g)(),Object(a.c)(),a.b.dispatch({type:"drag",payload:{movementX:t,movementY:e}}),a.d.getContext("2d").drawImage(Object(a.f)(),t,e)}(e,n),Object(r.a)(a.b.getState().fractalLocation,o.b)}n("G8eP"),n("7sMS"),n("n2D4"),n("lPBy"),n("DIQv"),n("KEO2"),n("pFDu"),n("QFcP"),n("P1vA"),n("kkT2");function u(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var l=function t(e,n){e.addEventListener("mousedown",(function(e){var r=e.offsetX,o=e.offsetY;t.moveHandle=function(t){return n(t,r,o)},document.addEventListener("mousemove",t.moveHandle)})),document.addEventListener("mouseup",(function(){document.removeEventListener("mousemove",t.moveHandle)})),"CANVAS"===e.tagName&&e.addEventListener("mouseleave",(function(){document.removeEventListener("mousemove",n)}))};function d(t){return document.querySelector(t)}var h,s;n("pyAK");Object(r.c)(o.a,o.b),h=a.d,s=function(t){Object(r.b)(),function(t){t.stopPropagation();var e=t.clientX-a.d.getBoundingClientRect().left,n=t.clientY-a.d.getBoundingClientRect().top;t.deltaY<0?i(1.2,e,n):i(1/1.2,e,n),Object(r.a)(a.b.getState().fractalLocation,o.b)}(t)},h.addEventListener("wheel",s),l(a.d,(function(t){Object(r.b)(),c(t)})),l(d(".header"),(function(t,e,n){t.preventDefault();var r,o,a,i,c=d(".window");r=c,o=t,a=e,i=n,console.log(o),r.style.left=o.clientX-a+"px",r.style.top=o.clientY-i+"px"})),function(t,e){new ResizeObserver((function(t){console.log(t);var n,r=u(t);try{for(r.s();!(n=r.n()).done;){var o=n.value.contentRect,a=o.width,i=o.height;e({width:a,height:i})}}catch(t){r.e(t)}finally{r.f()}console.log("Size changed")})).observe(t)}(d(".window"),(function(t){var e=t.width,n=t.height,o=Object(a.f)();Object(r.d)(e,n-20),o&&a.d.getContext("2d").drawImage(o,0,0,e,n-20)})),Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(6)]).then(function(t){n("iEVl")}.bind(null,n)).catch(n.oe)},nNMk:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"d",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return h}));n("XxzG"),n("kkT2");var r=n("6FWG"),o=n("7dF+"),a=n.n(o),i=[{},{},{},{},{},{},{},{}],c=!1;function u(){c=!0}var f=function(t,e){Object(r.h)(t,e);return function(n,o){console.log("store",n);var a=0,u=o.chunkSize,f=o.threadNum,l=o.juliaParameter,d=(n.x1-n.x0)/t,h=(n.y1-n.y0)/e;c=!1;var s=Math.ceil(t/u.width),g=Math.ceil(e/u.height),m=s*g;return console.log(s,g,m),new Promise((function(o){for(var v=function(v){var p=v%f,y={},b=u.width,w=u.height;y.x=v%s*u.width,y.y=parseInt(v/s)*u.height,console.log("pos",y),y.x===s-1&&t%u.width>0&&(b=t%u.width),y.y===g-1&&e%u.height>0&&(w=e%u.height);var x={position:y,chunkWidth:b,chunkHeight:w},O={fractalChunkData:{x0:n.x0+d*y.x,y0:n.y0+h*y.y,x1:n.x0+d*(y.x+b),y1:n.y0+h*(y.y+w)},canvasData:x,option:{real:l.real,imaginary:l.imaginary,platte:l.platte}};console.log(O),function t(e,n){var r;if(!c)return(r=i[e].worker?i[e].worker:i[e].worker=new Worker("./worker/worker.js")).working?r.promiseInstance.then((function(){return t(e,n)})):r.promiseInstance=new Promise((function(t){r.postMessage(n),r.working=!0,r.onmessage=function(e){r.working=!1,t(e.data)}}))}(p,O).then((function(t){1===++a||a===m&&o(m),t&&(Object(r.e)(y,b,w,t),console.log("webworker",v,a,p,O,t))}))},p=0;p<m;p++)v(p)})).then((function(){Object(r.g)()}))}};function l(t,e){d=f(t,e),h=a()(d,100)}var d=f(900,600),h=a()(d,100)},pyAK:function(t,e,n){}},[["QfWi",5,0,1,2]]]);