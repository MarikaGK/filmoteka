!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function r(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,s,"next",t)}function s(t){r(i,o,a,c,s,"throw",t)}c(void 0)}))}};var n={},o=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(t,e,r){var n=h;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?d:f,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function y(){}function m(){}function g(){}var w={};s(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(O([])));x&&x!==r&&n.call(x,a)&&(w=x);var _=g.prototype=y.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:T}}function T(){return{value:e,done:!0}}return m.prototype=g,s(_,"constructor",g),s(g,"constructor",m),m.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},k(L.prototype),s(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(_),s(_,c,"Generator"),s(_,a,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(n);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var a,i=document.querySelector(".gallery"),c=function(t){var e=t.map((function(t){return null!==t.poster_path?'<div class="movie-card" data-movie-id="'.concat(t.id,'">\n          <div class="movie-card-poster">\n            <img class="movie-img" src="https://image.tmdb.org/t/p/original').concat(t.poster_path,'" width=280 alt="').concat(t.original_title,'" loading="lazy" />\n          </div>\n          <div class="movie-card-description">\n            <p class="movie-title">').concat(t.original_title,'</p>\n            <div class="movie-subtitle">\n              <p class="movie-genre">').concat(t.genre_ids.slice(0,3),'  |</p>\n              <p class="movie-year">').concat(parseInt(t.release_date),'</p>\n              <p><button class="movie-vote" type="button">').concat(t.vote_average.toPrecision(2),"</button>\n              </p>\n            </div>\n          </div>\n        </div>"):'<div class="movie-card" data-movie-id="'.concat(t.id,'">\n          <div class="movie-card-poster"></div>\n          <div class="movie-card-description">  \n          <p class="movie-title">').concat(t.original_title,'</p>\n            <div class="movie-subtitle">\n              <p class="movie-genre">').concat(t.genre_ids.slice(0,3),'</p>\n              <p class="movie-year">').concat(parseInt(t.release_date),'</p>\n              <p><button class="movie-vote" type="button">').concat(t.vote_average.toPrecision(2),"</button>\n              </p>\n              </div>\n            </div>\n          </div>")})).join("");i.insertAdjacentHTML("beforeend",e)},s="11f568ee70218bec08ad7368f7bb3250",u="https://api.themoviedb.org/3/movie/popular",l="https://api.themoviedb.org/3/movie/",h=document.querySelector(".header-no-hit-info"),f=(a=t(e)(t(n).mark((function e(){var r,o,a,i=arguments;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:1,t.prev=1,t.next=4,fetch(u+"?api_key="+s+"&page="+r);case 4:if((o=t.sent).ok){t.next=7;break}throw new Error(o.status);case 7:return t.next=9,o.json();case 9:a=t.sent,console.log("Poniżej przykladowy console.log dla popularnych"),console.log(a),c(a.results),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),console.error(t.t0);case 18:case"end":return t.stop()}}),e,null,[[1,15]])}))),function(){return a.apply(this,arguments)}),p=function(){var r=t(e)(t(n).mark((function e(r){var o,a;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,h.textContent="",t.next=4,fetch("https://api.themoviedb.org/3/search/movie?api_key=11f568ee70218bec08ad7368f7bb3250&query="+r+"&page=1");case 4:if((o=t.sent).ok){t.next=7;break}throw new Error(o.status);case 7:return t.next=9,o.json();case 9:if((a=t.sent).total_results){t.next=14;break}return h.textContent="Search result not successful. Enter the correct movie name and search again.",console.log("pusta tablica"),t.abrupt("return");case 14:console.log('Poniżej przykladowy console.log dla filmu "'.concat(r,'"')),console.log(a),document.querySelector("form").addEventListener("submit",(function(){var t=document.querySelector(".loader");t.classList.remove("loader-hidden"),setTimeout((function(){t.classList.add("loader-hidden")}),1500),console.log(t.classList)})),console.log("loadMovie work"),c(a.results),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(0),console.error(t.t0);case 23:case"end":return t.stop()}}),e,null,[[0,20]])})));return function(t){return r.apply(this,arguments)}}(),d=function(){var r=t(e)(t(n).mark((function e(){var r,o;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key="+s);case 3:if((r=t.sent).ok){t.next=6;break}throw new Error(r.status);case 6:return t.next=8,r.json();case 8:o=t.sent,console.log("Poniżej przykladowy console.log dla listy gatunków"),console.log(o),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.error(t.t0);case 16:case"end":return t.stop()}}),e,null,[[0,13]])})));return function(){return r.apply(this,arguments)}}(),v=function(){var r=t(e)(t(n).mark((function e(r){var o,a;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(l+r+"?api_key="+s);case 3:if((o=t.sent).ok){t.next=6;break}throw new Error(o.status);case 6:return t.next=8,o.json();case 8:return a=t.sent,console.log("Poniżej console.log dla jednego filmu (".concat(a.original_title,") po movieId: ").concat(r)),console.log(a),t.abrupt("return",a);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),e,null,[[0,14]])})));return function(t){return r.apply(this,arguments)}}(),y=function(){var r=t(e)(t(n).mark((function e(r){var o,a,i,c,u;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(l+r+"/videos?api_key="+s);case 3:if((o=t.sent).ok){t.next=6;break}throw new Error(o.status);case 6:return t.next=8,o.json();case 8:return a=t.sent,i=a.results.findIndex((function(t){return"Trailer"===t.type})),c=a.results[i].key,u="https://www.youtube.com/watch?v=".concat(c),console.log("Poniżej link do Video na Youtube jednego filmu po movieId: ".concat(r)),console.log(u),t.abrupt("return",u);case 17:t.prev=17,t.t0=t.catch(0),console.error(t.t0);case 20:case"end":return t.stop()}}),e,null,[[0,17]])})));return function(t){return r.apply(this,arguments)}}(),m=document.querySelector(".gallery"),g=document.querySelector(".header-input__text-box"),w=document.querySelector(".header-no-hit-info");document.querySelector(".header-input__form").addEventListener("submit",(function(t){t.preventDefault();var e=g.value.trim();w.textContent="",e?(m.textContent="",p(e)):w.textContent="Type anything..."})),window.addEventListener("load",(function(){var t=document.querySelector(".loader");t.classList.remove("loader-hidden"),setTimeout((function(){t.classList.add("loader-hidden")}),1500),console.log(t.classList)})),console.log("loadGallery work"),f(),d();var b="603692";v(b),y(b)}();
//# sourceMappingURL=index.57bb83c5.js.map