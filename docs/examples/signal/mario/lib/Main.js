!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Mario=n():t.Mario=n()}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s="2Pgx")}({"2Pgx":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.main=void 0;var r,o=(r=e("Sgzc"))&&r.__esModule?r:{default:r},i=e("RJlM"),u=e("PIvJ"),c=e("lJmG");function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var s=37,f=39,l=32,d=function(t){return function(n){return function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){a(t,n,e[n])})}return t}({},n,{mario:(0,c.marioLogic)(t)(n.mario)})}},p=function(t){return function(){return(0,u.updateSprite)((0,u.updatePosition)(t.mario))}},h=function(t){return function(n){return function(e){return{left:t,right:n,jump:e}}}},m=function(){(0,u.onDOMContentLoaded)(function(){var t=(0,i.animationFrame)(),n={mario:{node:(0,u.getMarioNode)(),x:-50,y:0,dx:3,dy:6,dir:c.Direction.Right}},e=(0,i.keyPressed)(s),r=(0,i.keyPressed)(f),a=(0,i.keyPressed)(l).apply(r.apply(e.map(h))),m=t.sampleOn(a).foldp(d,n).map(p);o.default.run(m)})};n.main=m,e.c[e.s]===t&&m()}).call(this,e("YuTi")(t))},"8oxB":function(t,n){var e,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:i}catch(t){e=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var a,s=[],f=!1,l=-1;function d(){f&&a&&(f=!1,a.length?s=a.concat(s):l=-1,s.length&&p())}function p(){if(!f){var t=c(d);f=!0;for(var n=s.length;n;){for(a=s,s=[];++l<n;)a&&a[l].run();l=-1,n=s.length}a=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(n){try{return r.call(null,t)}catch(n){return r.call(this,t)}}}(t)}}function h(t,n){this.fun=t,this.array=n}function m(){}o.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)n[e-1]=arguments[e];s.push(new h(t,n)),1!==s.length||f||c(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},PIvJ:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getMarioNode=n.onDOMContentLoaded=n.updateSprite=n.updatePosition=void 0;var r=e("lJmG");n.updatePosition=function(t){return t.node.style.left="".concat(t.x,"px"),t.node.style.bottom="".concat(t.y+40,"px"),t};n.updateSprite=function(t){return t.node.className=(0,r.charSpriteDescriptor)(t),t};n.onDOMContentLoaded=function(t){"interactive"===document.readyState?t():document.addEventListener("DOMContentLoaded",t)};n.getMarioNode=function(){return document.getElementById("mario")||document.body}},RJlM:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.windowDimensions=n.animationFrame=n.mousePos=n.tap=n.touch=n.mouseButtonPressed=n.mouseButton=n.keyPressed=n.MouseButton=void 0;var r,o,i=(r=e("xEkU"))&&r.__esModule?r:{default:r},u=e("Sgzc");n.MouseButton=o,function(t){t[t.MouseLeftButton=0]="MouseLeftButton",t[t.MouseMiddleButton=1]="MouseMiddleButton",t[t.MouseIE8MiddleButton=2]="MouseIE8MiddleButton",t[t.MouseRightButton=3]="MouseRightButton"}(o||(n.MouseButton=o={}));n.keyPressed=function(t){var n=(0,u.constant)(!1);return window.addEventListener("keydown",function(e){e.keyCode===t&&n.set(!0)}),window.addEventListener("keyup",function(e){e.keyCode===t&&n.set(!1)}),n};var c=function(t){var n=(0,u.constant)(!1);return window.addEventListener("mousedown",function(e){e.button===t&&n.set(!0)}),window.addEventListener("mouseup",function(e){e.button===t&&n.set(!1)}),n};n.mouseButton=c;n.mouseButtonPressed=function(t){return t===o.MouseLeftButton?c(0):t===o.MouseRightButton?c(2):t===o.MouseMiddleButton?c(2):c(4)};var a=function(){var t=(0,u.constant)([]),n=function(n){for(var e=[],r=n.touches.length,o=0;o<r;o+=1){var i=n.touches.item(o);i&&e.push(i)}t.set(e)};return window.addEventListener("touchstart",n),window.addEventListener("touchend",n),window.addEventListener("touchmove",n),window.addEventListener("touchcancel",n),t};n.touch=a;n.tap=function(){return a().map(function(t){return t!==[]})};n.mousePos=function(){var t=(0,u.constant)({x:0,y:0});return window.addEventListener("mousemove",function(n){if(void 0!==n.pageX&&void 0!==n.pageY)t.set({x:n.pageX,y:n.pageY});else{if(void 0===n.clientX||void 0===n.clientY)throw new Error("Mouse event has no coordinates I recognise!");t.set({x:n.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,y:n.clientY+document.body.scrollTop+document.documentElement.scrollTop})}}),t};n.animationFrame=function(){var t=(0,u.constant)(Date.now());return(0,i.default)(function n(e){t.set(e),(0,i.default)(n)}),t};n.windowDimensions=function(){var t=(0,u.constant)({w:window.innerWidth,h:window.innerHeight});return window.addEventListener("resize",function(){t.set({w:window.innerWidth,h:window.innerHeight})}),t}},Sgzc:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Channel=n.default=n.channel=n.every=n.unwrap=n.run=n.constant=void 0;var r=e("kMv7");function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var u=function(t){return c.constant(t)};n.constant=u;n.run=function(t){return c.run(t)};n.unwrap=function(t){return c.unwrap(t)};n.every=function(t){return c.every(t)};n.channel=function(t){return a.channel(t)};var c=function t(n){var e=this;o(this,t),i(this,"value",void 0),i(this,"subscriptions",[]),i(this,"map",function(t){var n=u(t(e.get()));return e.subscribe(function(e){n.set(t(e))}),n}),i(this,"then",function(t){return t(e.get())}),i(this,"apply",function(t){var n=u(t.value(e.get())),r=function(){n.set(t.value(e.get()))};return t.subscribe(r),e.subscribe(r),n}),i(this,"merge",function(t){var n=u(e.get());return t.subscribe(n.set),e.subscribe(n.set),n}),i(this,"foldp",function(t,n){var r=n,o=u(r);return e.subscribe(function(n){r=t(n)(r),o.set(r)}),o}),i(this,"sampleOn",function(t){var n=u(t.get());return e.subscribe(function(){n.set(t.get())}),n}),i(this,"dropRepeats",function(){var t=e.get(),n=u(t);return e.subscribe(function(e){(0,r.eq)(t,e)||(t=e,n.set(t))}),n}),i(this,"filter",function(t,n){var r=u(t(e.get())?e.get():n);return e.subscribe(function(n){t(n)&&r.set(n)}),r}),i(this,"flatten",function(t){var n=t,o=e.get();if(Array.isArray(o)){var i=(0,r.empty)(),c=o.slice();c.length>0?n=c[0]:c=i;var a=u(n),s=function(t){t.forEach(a.set)};return setTimeout(function(){e.subscribe(function(t){c===i?s(t):(s(c.slice(1)),c=i)})},0),a}throw new Error("Cannot flatten a value that is not an array")}),i(this,"on",function(t){return e.subscribe(function(n){t(n)}),e}),i(this,"delay",function(t){var n=u(e.get()),r=!0;return e.subscribe(function(e){r?r=!1:setTimeout(function(){n.set(e)},t)}),n}),i(this,"since",function(t){var n,r=u(!1),o=!0,i=function(){r.set(!1),n=void 0};return e.subscribe(function(){o?o=!1:void 0===n?(r.set(!0),n=setTimeout(i,t)):(clearTimeout(n),n=setTimeout(i,t))}),r}),i(this,"get",function(){return e.value}),i(this,"set",function(t){e.value=t;var n=!0,r=!1,o=void 0;try{for(var i,u=e.subscriptions[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){(0,i.value)(t)}}catch(t){r=!0,o=t}finally{try{n||null==u.return||u.return()}finally{if(r)throw o}}}),i(this,"subscribe",function(t){e.subscriptions.push(t),t(e.get())}),this.value=n};n.default=c,i(c,"constant",function(t){return new c(t)}),i(c,"run",function(t){return t.subscribe(function(t){return t()})}),i(c,"unwrap",function(t){var n=u(t.get()());return t.subscribe(function(t){n.set(t())}),n}),i(c,"every",function(t){var n=u(Date.now());return setInterval(function(){n.set(Date.now())},t),n});var a=function t(n){var e=this;o(this,t),i(this,"signal",void 0),i(this,"send",function(t){return e.signal.set(t)}),i(this,"subscribe",function(){return e.signal}),this.signal=u(n)};n.Channel=a,i(a,"channel",function(t){return new a(t)})},YuTi:function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},bQgK:function(t,n,e){(function(n){(function(){var e,r,o,i,u,c;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:null!=n&&n.hrtime?(t.exports=function(){return(e()-u)/1e6},r=n.hrtime,i=(e=function(){var t;return 1e9*(t=r())[0]+t[1]})(),c=1e9*n.uptime(),u=i-c):Date.now?(t.exports=function(){return Date.now()-o},o=Date.now()):(t.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,e("8oxB"))},kMv7:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.eq=function t(n,e){if(Array.isArray(n)&&Array.isArray(e))return n.length>0&&n.length===e.length&&n.map(function(n,r){return t(n,e[r])}).reduce(function(t,n){return t&&Boolean(n)});if(n&&n.equals)return n.equals(e);return n===e},n.compose=n.exists=n.empty=void 0;n.empty=function(){};n.exists=function(t){return null!=t};n.compose=function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return e.reduce(function(t,n){return function(e){return t(n(e))}},t)}},lJmG:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.marioLogic=n.charSpriteDescriptor=n.Direction=n.Activity=void 0;var r,o,i=e("kMv7");function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){c(t,n,e[n])})}return t}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}n.Activity=r,function(t){t.Walking="walk",t.Standing="stand",t.Jumping="jump"}(r||(n.Activity=r={})),n.Direction=o,function(t){t.Left="left",t.Right="right"}(o||(n.Direction=o={}));var a=function(t){return t.y>0};n.charSpriteDescriptor=function(t){return"character ".concat(function(t){return a(t)?r.Jumping:function(t){return 0===t.dx}(t)?r.Jumping:r.Walking}(t)," ").concat(t.dir)};var s=function(t){return a(t)?.04:.06},f=function(t){return a(t)?.02:.1},l=function(t){return u({},t,{x:t.x+t.dx,y:t.y+t.dy})},d=function(t){return t.y<=-t.dy?u({},t,{y:0,dy:0}):u({},t,{dy:t.dy-.15})},p=function(t,n){return function(e){return t&&!n?u({},e,{dx:Math.max(-2.5,e.dx-s(e)),dir:o.Left}):n&&!t?u({},e,{dx:Math.min(2.5,e.dx+s(e)),dir:o.Right}):function(t){return 0===t.dx?t:Math.abs(t.dx)<=f(t)?u({},t,{dx:0}):t.dx>0?u({},t,{dx:t.dx-f(t)}):u({},t,{dx:t.dx+f(t)})}(e)}};n.marioLogic=function(t){return(0,i.compose)(l,d,p(t.left,t.right),(n=t.jump,function(t){return n&&!a(t)?u({},t,{dy:4+.8*Math.abs(t.dx)}):!n&&a(t)&&t.dy>0?u({},t,{dy:t.dy-.15}):t}));var n}},xEkU:function(t,n,e){(function(n){for(var r=e("bQgK"),o="undefined"==typeof window?n:window,i=["moz","webkit"],u="AnimationFrame",c=o["request"+u],a=o["cancel"+u]||o["cancelRequest"+u],s=0;!c&&s<i.length;s++)c=o[i[s]+"Request"+u],a=o[i[s]+"Cancel"+u]||o[i[s]+"CancelRequest"+u];if(!c||!a){var f=0,l=0,d=[];c=function(t){if(0===d.length){var n=r(),e=Math.max(0,1e3/60-(n-f));f=e+n,setTimeout(function(){var t=d.slice(0);d.length=0;for(var n=0;n<t.length;n++)if(!t[n].cancelled)try{t[n].callback(f)}catch(t){setTimeout(function(){throw t},0)}},Math.round(e))}return d.push({handle:++l,callback:t,cancelled:!1}),l},a=function(t){for(var n=0;n<d.length;n++)d[n].handle===t&&(d[n].cancelled=!0)}}t.exports=function(t){return c.call(o,t)},t.exports.cancel=function(){a.apply(o,arguments)},t.exports.polyfill=function(t){t||(t=o),t.requestAnimationFrame=c,t.cancelAnimationFrame=a}}).call(this,e("yLpj"))},yLpj:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e}}).default});