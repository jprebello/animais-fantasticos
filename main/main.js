/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={61:(t,e,n)=>{var r=n(698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new _(r||[]);return a(i,"_invoke",{value:S(t,n,c)}),i}function v(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var h={};function p(){}function m(){}function y(){}var g={};f(g,u,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(M([])));L&&L!==n&&i.call(L,u)&&(g=L);var w=y.prototype=p.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,a,c,u){var s=v(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==r(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function S(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=A(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=v(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function A(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,A(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=v(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function M(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=y,a(w,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:m,configurable:!0}),m.displayName=f(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,f(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},x(E.prototype),f(E.prototype,s,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new E(d(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),f(w,l,"Generator"),f(w,u,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=M,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:M(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,n)=>{var r=n(61)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function r(t){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=t.apply(n,r);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}var o=n(687),i=n.n(o);function a(t,e,n){var r,o=document.querySelector(e);function i(t){var e=+t.innerHTML,n=Math.floor(e/100),r=0,o=setInterval((function(){r+=n,t.innerHTML=r,r>e&&(t.innerHTML=e,clearInterval(o))}),15)}function a(){var e=document.querySelectorAll(t);e.length&&e.forEach((function(t){i(t)}))}function c(t){t[0].target.classList.contains(n)&&(r.disconnect(),a())}function u(){(r=new MutationObserver(c)).observe(o,{attributes:!0})}return{init:function(){u()},incrementarNumero:i,animaNumeros:a,handleMutation:c,addMutationObserver:u}}(function(t){var e=document.querySelectorAll('[data-menu="list"] a[href^="#"]');function n(t){t.preventDefault();var e=t.currentTarget.getAttribute("href"),n=document.querySelector(e).offsetTop;window.scrollTo({top:n,behavior:"smooth"})}function r(){e.length&&e.forEach((function(t){t.addEventListener("click",n)}))}return{init:function(){r()},smoothClick:n,addLinkEvent:r}})().init(),function(t,e){var n=document.querySelectorAll("[data-anime='accordion'] dt"),r=document.querySelectorAll("[data-anime='accordion'] dd");function o(t){n[t].classList.toggle("seta"),r[t].classList.toggle("ativo")}function i(){n.length&&r.length&&n.forEach((function(t,e){t.addEventListener("click",(function(){o(e)}))}))}return{init:function(){i()},toggleAccordion:o,addAccordionEvent:i}}().init(),function(t,e){var n=document.querySelectorAll("[data-tab='menu'] img"),r=document.querySelectorAll("[data-tab='content'] div"),o="ativo";function i(t){r.forEach((function(t){t.classList.remove(o)})),r[t].classList.add(o)}function a(){n.length&&r.length&&n.forEach((function(t,e){t.addEventListener("click",(function(){i(e)}))}))}return{init:function(){a()},activeTab:i,addTabEvent:a}}().init(),function(t,e,n){var r=document.querySelector('[data-modal="abrir"]'),o=document.querySelector('[data-modal="fechar"]'),i=document.querySelector('[data-modal="container"]');function a(t){t.preventDefault(),i.classList.add("ativar")}function c(t){t.preventDefault(),i.classList.remove("ativar")}function u(t){t.target===this&&c(t)}function s(){r&&o&&i&&(r.addEventListener("click",a),o.addEventListener("click",c),i.addEventListener("click",u))}return{init:function(){s()},addModalEvent:s,cliqueForaModal:u,abrirModal:a,fecharModal:c}}().init(),function(t){var e,n=document.querySelector("[data-tooltip=tooltip]");function r(t){e.style.top="".concat(t.pageY+20,"px"),t.pageX+240>window.innerWidth?e.style.left="".concat(t.pageX-190,"px"):e.style.left="".concat(t.pageX+20,"px")}function o(t){e.remove(),t.currentTarget.removeEventListener("mouseleave",o),t.currentTarget.removeEventListener("mousemove",r)}function i(t){var n=document.createElement("div"),r=t.getAttribute("aria-label");n.classList.add("tooltip"),n.innerText=r,document.body.appendChild(n),e=n}function a(t){i(t.currentTarget),t.currentTarget.addEventListener("mouseleave",o),t.currentTarget.addEventListener("mousemove",r)}function c(){n&&n.addEventListener("mouseover",a)}return{init:function(){c()},onMouseMove:r,onMouseLeave:o,criarTooltipBox:i,onMouseOver:a,addTooltipsEvent:c}}().init(),function(t){function e(t){document.querySelector(".numeros-itens").innerHTML+="<li>".concat(t.specie,"</li><span data-numero>").concat(t.total,"</span>")}function n(){return o.apply(this,arguments)}function o(){return(o=r(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(t);case 2:return r=n.sent,n.next=5,r.json();case 5:n.sent.forEach((function(t){e(t)})),a("[data-numero]",".numeros","animar").init();case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return{init:function(){n()},fetchAnimais:n,createAnimal:e}}("./animais-api.json").init(),function(t,e){function n(){return o.apply(this,arguments)}function o(){return(o=r(i().mark((function n(){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(t);case 2:return r=n.sent,n.next=5,r.json();case 5:o=n.sent,document.querySelector(e).innerText=(100/o.BRL.sell).toFixed(5);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return{init:function(){n()},fetchBitcoin:n}}("https://blockchain.info/ticker",".btc-preco").init(),function(e){var n=document.querySelectorAll("[data-anime='scroll']"),r=.8*window.innerHeight;function o(){return(e=n,function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=t.offsetTop;return{element:t,offset:Math.floor(e-r)}}));var e}var i=o();function a(){i.forEach((function(t){window.pageYOffset>t.offset?t.element.classList.add("animar"):t.element.classList.contains("animar")&&t.element.classList.remove("animar")}))}var c,u,s=(c=a,50,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];clearTimeout(u),u=setTimeout((function(){c.apply(void 0,e)}),50)});return{init:function(){n.length&&(a(),window.addEventListener("scroll",s))},getDistance:o,checkDistance:a}}().init(),function(t){var e=document.querySelectorAll("[data-dropdown]");function n(t,e){var n=document.documentElement,r="data-outside";t.hasAttribute(r)||(n.addEventListener("click",(function o(i){t.contains(i.target)||(t.removeAttribute(r),e(),n.removeEventListener("click",o))})),t.setAttribute(r,""))}function r(t){var e=this;t.preventDefault(),this.classList.add("active"),n(this,(function(){e.classList.remove("active")}))}return{init:function(){e.length&&e.forEach((function(t){t.addEventListener("click",r)}))},handleClick:r,outsideClick:n}}().init();var c=function(t,e){var n=document.querySelector('[data-menu="button"]'),r=document.querySelector('[data-menu="list"]'),o=["click","touchstart"];function i(t,e,n){var r=document.documentElement,o="data-outside";function i(a){t.contains(a.target)||(t.removeAttribute(o),e.forEach((function(t){r.removeEventListener(t,i)})),n())}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){r.addEventListener(t,i)}))})),t.setAttribute(o,""))}function a(){r.classList.add("active"),n.classList.add("active"),i(r,o,(function(){r.classList.remove("active"),n.classList.remove("active")}))}return{init:function(){n&&r&&o.forEach((function(t){n.addEventListener(t,a)}))},outsideClick:i,openMenu:a}}();!function(){var t=document.querySelector("[data-semana]");if(t){var e=t.dataset.semana.split(",").map(Number),n=t.dataset.horario.split(",").map(Number),r=new Date,o=r.getDay(),i=r.getHours(),a=-1!==e.indexOf(o),c=i>=n[0]&&i<n[1];a&&c&&t.classList.add("aberto")}}(),c.init()})()})();