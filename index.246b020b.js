function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},n.parcelRequired7c6=r),r.register("aTIOK",(function(t,n){e(t.exports,"getMovieGenresAndSaveToStore",(function(){return h})),e(t.exports,"getPopularMovies",(function(){return u})),e(t.exports,"getMoviesByTitle",(function(){return d})),e(t.exports,"getMovieById",(function(){return p})),e(t.exports,"getMoviesByArrayOfIds",(function(){return m}));var i=r("gzSTa"),s=r("j6ENM"),o=r("aVGVk"),a=r("a8AVW"),l=(r("6ghLp"),r("f9JW7"));const c=document.querySelector(".header-no-hit-info");const h=async()=>{try{const e=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=11f568ee70218bec08ad7368f7bb3250");if(!e.ok)throw new Error(e.status);const t=await e.json();return void(0,i.saveMovieGenresToStorage)(t)}catch(e){console.error(e)}},u=async(e=1)=>{try{const t=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=11f568ee70218bec08ad7368f7bb3250&page=${e}`);if(!t.ok)throw new Error(t.status);const n=await t.json(),i=500,r=1e4;n.total_pages=i,n.total_results=r,(0,a.setPopularParameterToStorage)(!0),(0,a.saveTotalPageToStorage)(n),(0,a.saveTotalResultsToStorage)(n),(0,a.saveCurrentPageToStorage)(n),(0,s.renderMovies)(n.results)}catch(e){console.error(e)}},d=async(e,t=1)=>{try{c.textContent="";const n=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=11f568ee70218bec08ad7368f7bb3250&query=${e}&page=${t}`);if(!n.ok)throw new Error(n.status);const i=await n.json();if(!i.total_results)return void(c.textContent="Search result not successful. Enter the correct movie name and search again.");(0,o.showLoader)(),(0,a.setPopularParameterToStorage)(!1),(0,a.saveTotalPageToStorage)(i),(0,a.saveTotalResultsToStorage)(i),(0,a.saveCurrentPageToStorage)(i),(0,s.renderMovies)(i.results),(0,a.renderPagination)()}catch(e){console.error(e)}},p=async e=>{try{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=11f568ee70218bec08ad7368f7bb3250&append_to_response=videos`);if(!t.ok)throw new Error(t.status);const n=await t.json(),i=n.videos.results,s=f(i);return console.log(n),(0,l.renderModal)(n,s)}catch(e){console.error(e)}},f=e=>{const t=e.findIndex((e=>"Trailer"===e.type));if(-1!==t){return`https://www.youtube.com/watch?v=${e[t].key}`}},m=async e=>{const t=`https://api.themoviedb.org/3/movie?api_key=11f568ee70218bec08ad7368f7bb3250&append_to_response=${[...e]}`;try{let e=await fetch(t);if(404===e.status){const t=await e.json(),n=Object.keys(t).filter((e=>Number.isInteger(Number(e)))).reduce(((e,n)=>(e[n]=t[n],e)),{}),i=[],r=Object.keys(n);for(let e=0;e<r.length;++e){const t=Number(r[e]),s=structuredClone(n[t]);s.id=t,i.push(s)}(0,s.renderLibrary)(i)}}catch(e){console.error(e)}}})),r.register("gzSTa",(function(t,n){e(t.exports,"saveMovieGenresToStorage",(function(){return i})),e(t.exports,"renderGenresToGallery",(function(){return r}));const i=e=>{const t=e.genres;localStorage.setItem("movieGenresIdsArray",JSON.stringify(t))},s=(()=>{const e=localStorage.getItem("movieGenresIdsArray");return JSON.parse(e)})(),r=e=>{const t=e.slice(0,3).map((e=>(e=>s.filter((t=>t.id===e))[0].name)(e)));return 0==t.length?"No info":t.join(", ")}})),r.register("j6ENM",(function(t,n){e(t.exports,"renderMovies",(function(){return a})),e(t.exports,"renderLibrary",(function(){return l}));var i=r("gzSTa"),s=r("1KQvo");const o=document.querySelector(".gallery"),a=e=>{o.innerHTML="";const t=(0,s.getStateOfDarkModeFromLocalStorage)(),n=e.map((e=>{const n=(0,i.renderGenresToGallery)(e.genre_ids),s=e=>e||"No info";return t?null!==e.poster_path?`<div class="movie-card dark-mode-box-shadow" data-movie-id="${e.id}">\n          <div class="movie-card-poster">\n          <img class="movie-img" src="https://image.tmdb.org/t/p/original${e.poster_path}" width=280 alt="${e.original_title}" loading="lazy" />\n          </div>\n          <div class="movie-card-description">\n              <p class="movie-title">${e.original_title}</p>\n              <div class="movie-subtitle">\n              <span class="movie-genre">${n}  |</span>\n              <span class="movie-year">${s(parseInt(e.release_date))}</span>\n              </div>\n              </div>\n              </div>`:`<div class="movie-card dark-mode-box-shadow" data-movie-id="${e.id}">\n          <div class="movie-card-poster"><div class="movie-card-no-poster"></div></div>\n          <div class="movie-card-description">  \n          <p class="movie-title">${e.original_title}</p>\n          <div class="movie-subtitle">\n          <span class="movie-genre">${n}  |</span>\n          <span class="movie-year">${s(parseInt(e.release_date))}</span>\n          </div>\n          </div>\n          </div>`:null!==e.poster_path?`<div class="movie-card" data-movie-id="${e.id}">\n          <div class="movie-card-poster">\n          <img class="movie-img" src="https://image.tmdb.org/t/p/original${e.poster_path}" width=280 alt="${e.original_title}" loading="lazy" />\n          </div>\n          <div class="movie-card-description">\n          <p class="movie-title">${e.original_title}</p>\n          <div class="movie-subtitle">\n          <span class="movie-genre">${n}  |</span>\n          <span class="movie-year">${s(parseInt(e.release_date))}</span>\n          </div>\n          </div>\n          </div>`:`<div class="movie-card" data-movie-id="${e.id}">\n          <div class="movie-card-poster"><div class="movie-card-no-poster"></div></div>\n          <div class="movie-card-description">  \n          <p class="movie-title">${e.original_title}</p>\n          <div class="movie-subtitle">\n          <span class="movie-genre">${n}  |</span>\n            <span class="movie-year">${s(parseInt(e.release_date))}</span>\n            </div>\n            </div>\n            </div>`})).join("");o.insertAdjacentHTML("beforeend",n)},l=e=>{o.innerHTML="";const t=(0,s.getStateOfDarkModeFromLocalStorage)(),n=e.map((e=>{const n=e=>e||"No info";return t?null!==e.poster_path?`<div class="movie-card dark-mode-box-shadow" data-movie-id="${e.id}">\n            <div class="movie-card-poster">\n            <img class="movie-img" src="https://image.tmdb.org/t/p/original${e.poster_path}" width=280 alt="${e.original_title}" loading="lazy" />\n          </div>\n            <div class="movie-card-description">\n              <p class="movie-title">${e.title}</p>\n              <div class="movie-subtitle">\n                <span class="movie-genre">${e.genres.slice(0,3).map((e=>e.name)).join(", ")}  |</span>\n                <span class="movie-year">${n(parseInt(e.release_date))}</span>\n                <span class="movie-vote">${e.vote_average.toPrecision(2)}</span>\n              </div>\n            </div>\n            </div>`:`<div class="movie-card" data-movie-id="${e.id}">\n          <div class="movie-card-poster"><div class="movie-card-no-poster"></div></div>\n          <div class="movie-card-description">  \n            <p class="movie-title">${e.original_title}</p>\n            <div class="movie-subtitle">\n              <span class="movie-genre">${e.genres.slice(0,3).map((e=>e.name)).join(", ")}  |</span>\n              <span class="movie-year">${n(parseInt(e.release_date))}</span>\n              <span class="movie-vote">${e.vote_average.toPrecision(2)}</span>\n            </div>\n          </div>\n          </div>`:null!==e.poster_path?`<div class="movie-card" data-movie-id="${e.id}">\n          <div class="movie-card-poster">\n            <img class="movie-img" src="https://image.tmdb.org/t/p/original${e.poster_path}" width=280 alt="${e.original_title}" loading="lazy" />\n            </div>\n            <div class="movie-card-description">\n              <p class="movie-title">${e.title}</p>\n              <div class="movie-subtitle">\n                <span class="movie-genre">${e.genres.slice(0,3).map((e=>e.name)).join(", ")}  |</span>\n                <span class="movie-year">${n(parseInt(e.release_date))}</span>\n                <span class="movie-vote">${e.vote_average.toPrecision(2)}</span>\n              </div>\n            </div>\n            </div>`:`<div class="movie-card" data-movie-id="${e.id}">\n          <div class="movie-card-poster"><div class="movie-card-no-poster"></div></div>\n          <div class="movie-card-description">  \n            <p class="movie-title">${e.original_title}</p>\n            <div class="movie-subtitle">\n              <span class="movie-genre">${e.genres.slice(0,3).map((e=>e.name)).join(", ")}  |</span>\n              <span class="movie-year">${n(parseInt(e.release_date))}</span>\n              <span class="movie-vote">${e.vote_average.toPrecision(2)}</span>\n            </div>\n          </div>\n          </div>`})).join("");o.insertAdjacentHTML("beforeend",n)}})),r.register("1KQvo",(function(t,n){e(t.exports,"getStateOfDarkModeFromLocalStorage",(function(){return o})),e(t.exports,"setDarkOrNormalModeOnPageLoadFromLocalStorageState",(function(){return f}));var i=r("a8AVW");const s=document.querySelector('input[type="checkbox"]'),o=()=>{if(localStorage.getItem("IS_DARK_MODE_ON_STORED")){const e=localStorage.getItem("IS_DARK_MODE_ON_STORED");return JSON.parse(e)}return localStorage.setItem("IS_DARK_MODE_ON_STORED",JSON.stringify(!1)),!1};let a=o();s.checked=a;const l=e=>{localStorage.getItem("IS_DARK_MODE_ON_STORED")!==e&&localStorage.setItem("IS_DARK_MODE_ON_STORED",JSON.stringify(e))},c=document.querySelector("main"),h=document.querySelector("footer"),u=document.querySelector(".dark-mode-switch__moon-icon"),d=document.querySelector(".dark-mode-switch__sun-icon"),p=document.querySelector(".modal-card"),f=()=>{!0===a?(c.classList.add("dark-mode"),h.classList.add("dark-mode"),p.classList.add("dark-mode-modal"),document.documentElement.setAttribute("data-theme","dark"),d.classList.contains("display-none")||d.classList.add("display-none"),u.classList.contains("display-none")&&u.classList.remove("display-none")):(u.classList.contains("display-none")||u.classList.add("display-none"),d.classList.contains("display-none")&&d.classList.remove("display-none"))};s.addEventListener("change",(e=>{e.target.checked?(c.classList.add("dark-mode"),h.classList.add("dark-mode"),p.classList.add("dark-mode-modal"),document.documentElement.setAttribute("data-theme","dark"),a=!0,d.classList.contains("display-none")||d.classList.add("display-none"),u.classList.contains("display-none")&&u.classList.remove("display-none"),l(a),(0,i.renderPagination)()):(c.classList.remove("dark-mode"),h.classList.remove("dark-mode"),p.classList.remove("dark-mode-modal"),document.documentElement.setAttribute("data-theme","light"),a=!1,u.classList.contains("display-none")||u.classList.add("display-none"),d.classList.contains("display-none")&&d.classList.remove("display-none"),l(a),(0,i.renderPagination)())}),a)})),r.register("a8AVW",(function(n,i){e(n.exports,"saveTotalPageToStorage",(function(){return l})),e(n.exports,"saveTotalResultsToStorage",(function(){return c})),e(n.exports,"saveCurrentPageToStorage",(function(){return h})),e(n.exports,"setPopularParameterToStorage",(function(){return u})),e(n.exports,"renderPagination",(function(){return m}));var s=r("fb9GJ");r("j6ENM"),r("aVGVk");var o=r("aTIOK"),a=r("1KQvo");document.querySelector(".tui-prev"),document.querySelector(".tui-next");const l=e=>{const t=e.total_pages;localStorage.setItem("totalPagesArray",JSON.stringify(t))},c=e=>{const t=e.total_results;localStorage.setItem("totalResultsArray",JSON.stringify(t))},h=e=>{const t=e.page;localStorage.setItem("currentPageArray",JSON.stringify(t))},u=e=>{const t=e;localStorage.setItem("isItPopular",JSON.stringify(t))},d=()=>{const e=localStorage.getItem("isItPopular");return JSON.parse(e)},p=()=>{const e=localStorage.getItem("totalResultsArray");return JSON.parse(e)},f=()=>{const e=localStorage.getItem("currentPageArray");return JSON.parse(e)},m=e=>{if((0,a.getStateOfDarkModeFromLocalStorage)()){const e={totalItems:p(),itemsPerPage:20,visiblePages:5,page:f(),centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn tui-mid-button dark-mode-pagination" id="{{page}}">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected" id="{{page}}">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn dark-mode-pagination tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn dark-mode-pagination tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new(t(s))("pagination",e)}else{const e={totalItems:p(),itemsPerPage:20,visiblePages:5,page:f(),centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn tui-mid-button" id="{{page}}">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected" id="{{page}}">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new(t(s))("pagination",e)}};document.addEventListener("click",(e=>{const t=e.target.closest(".tui-mid-button");if(1==d()){if(t){const e=t.id;(0,o.getPopularMovies)(e)}}else if(t){const e=t.id,n=document.querySelector(".header-input__text-box").value;(0,o.getMoviesByTitle)(n,e),console.log("test")}})),document.addEventListener("click",(e=>{const t=e.target.closest(".tui-prev"),n=document.querySelector(".tui-is-selected").id;if(1==d()){if(t){const e=n;(0,o.getPopularMovies)(e)}}else if(t){const e=document.querySelector(".header-input__text-box").value;(0,o.getMoviesByTitle)(e,n)}})),document.addEventListener("click",(e=>{const t=e.target.closest(".tui-next"),n=document.querySelector(".tui-is-selected").id;if(1==d())t&&(0,o.getPopularMovies)(n);else if(t){const e=document.querySelector(".header-input__text-box").value;(0,o.getMoviesByTitle)(e,n)}}))})),r.register("fb9GJ",(function(e,t){
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
var n;window,n=function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){e.exports=function(e,t){var n,i,s,r,o=Object.prototype.hasOwnProperty;for(s=1,r=arguments.length;s<r;s+=1)for(i in n=arguments[s])o.call(n,i)&&(e[i]=n[i]);return e}},function(e,t,n){e.exports=function(e){return void 0===e}},function(e,t,n){e.exports=function(e){return e instanceof Array}},function(e,t,n){var i=n(2),s=n(17),r=n(6);e.exports=function(e,t,n){i(e)?s(e,t,n):r(e,t,n)}},function(e,t,n){e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){e.exports=function(e){return e instanceof Function}},function(e,t,n){e.exports=function(e,t,n){var i;for(i in n=n||null,e)if(e.hasOwnProperty(i)&&!1===t.call(n,e[i],i,e))break}},function(e,t,n){var i=n(18),s=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&i(n,e),t.hasOwnProperty("static")&&(s(n,t.static),delete t.static),s(n.prototype,t),n}},function(e,t,n){var i=n(2);e.exports=function(e,t,n){var s,r;if(n=n||0,!i(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(r=t.length,s=n;n>=0&&s<r;s+=1)if(t[s]===e)return s;return-1}},function(e,t,n){var i=n(29),s=n(30),r=n(5),o={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),s=r(e)?e(t):i(e,t);return n.innerHTML=s,n.firstChild},bind:function(e,t){var n,i=Array.prototype.slice;return e.bind?e.bind.apply(e,i.call(arguments,1)):(n=i.call(arguments,2),function(){return e.apply(t,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){s("pagination","UA-129987462-1")}};e.exports=o},function(e,t,n){n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){var i=n(13),s=n(7),r=n(0),o=n(1),a=n(20),l=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},h=s({init:function(e,t){this._options=r({},c,t),this._currentPage=0,this._view=new a(e,this._options,l.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&l.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===e;return this._options.centerAlign?i?t-1:t+n:i?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),i=this._getPageIndex(e),s=this._getPageIndex(n),r=this._getEdge(e);return t.leftPageNumber=r.left,t.rightPageNumber=r.right,t.prevMore=i>1,t.nextMore=i<s,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,i,s=this._getLastPage(),r=this._options.visiblePages,o=this._getPageIndex(e);return this._options.centerAlign?(i=Math.floor(r/2),(n=(t=Math.max(e-i,1))+r-1)>s&&(t=Math.max(s-r+1,1),n=s)):(t=(o-1)*r+1,n=o*r,n=Math.min(n,s)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){o(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(h),e.exports=h},function(e,t,n){var i=n(0),s=n(14),r=n(4),o=n(16),a=n(2),l=n(5),c=n(3),h=/\s+/g;function u(){this.events=null,this.contexts=null}u.mixin=function(e){i(e.prototype,u.prototype)},u.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},u.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},u.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},u.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},u.prototype._memorizeContext=function(e){var t,n;s(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},u.prototype._forgetContext=function(e){var t,n;s(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},u.prototype._bindEvent=function(e,t,n){var i=this._safeEvent(e);this._memorizeContext(n),i.push(this._getHandlerItem(t,n))},u.prototype.on=function(e,t,n){var i=this;r(e)?(e=e.split(h),c(e,(function(e){i._bindEvent(e,t,n)}))):o(e)&&(n=t,c(e,(function(e,t){i.on(t,e,n)})))},u.prototype.once=function(e,t,n){var i=this;if(o(e))return n=t,void c(e,(function(e,t){i.once(t,e,n)}));this.on(e,(function s(){t.apply(n,arguments),i.off(e,s,n)}),n)},u.prototype._spliceMatches=function(e,t){var n,i=0;if(a(e))for(n=e.length;i<n;i+=1)!0===t(e[i])&&(e.splice(i,1),n-=1,i-=1)},u.prototype._matchHandler=function(e){var t=this;return function(n){var i=e===n.handler;return i&&t._forgetContext(n.context),i}},u.prototype._matchContext=function(e){var t=this;return function(n){var i=e===n.context;return i&&t._forgetContext(n.context),i}},u.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(i){var s=e===i.handler,r=t===i.context,o=s&&r;return o&&n._forgetContext(i.context),o}},u.prototype._offByEventName=function(e,t){var n=this,i=l(t),s=n._matchHandler(t);e=e.split(h),c(e,(function(e){var t=n._safeEvent(e);i?n._spliceMatches(t,s):(c(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},u.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);c(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},u.prototype._offByObject=function(e,t){var n,i=this;this._indexOfContext(e)<0?c(e,(function(e,t){i.off(t,e)})):r(t)?(n=this._matchContext(e),i._spliceMatches(this._safeEvent(t),n)):l(t)?(n=this._matchHandlerAndContext(t,e),c(this._safeEvent(),(function(e){i._spliceMatches(e,n)}))):(n=this._matchContext(e),c(this._safeEvent(),(function(e){i._spliceMatches(e,n)})))},u.prototype.off=function(e,t){r(e)?this._offByEventName(e,t):arguments.length?l(e)?this._offByHandler(e):o(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},u.prototype.fire=function(e){this.invoke.apply(this,arguments)},u.prototype.invoke=function(e){var t,n,i,s;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),i=0;t[i];){if(!1===(s=t[i]).handler.apply(s.context,n))return!1;i+=1}return!0},u.prototype.hasListener=function(e){return this.getListenerLength(e)>0},u.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=u},function(e,t,n){var i=n(1),s=n(15);e.exports=function(e){return!i(e)&&!s(e)}},function(e,t,n){e.exports=function(e){return null===e}},function(e,t,n){e.exports=function(e){return e===Object(e)}},function(e,t,n){e.exports=function(e,t,n){var i=0,s=e.length;for(n=n||null;i<s&&!1!==t.call(n,e[i],i,e);i+=1);}},function(e,t,n){var i=n(19);e.exports=function(e,t){var n=i(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){var i=n(3),s=n(7),r=n(21),o=n(22),a=n(24),l=n(25),c=n(0),h=n(4),u=n(28),d=n(9),p={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},f=["first","prev","next","last"],m=["prev","next"],g=s({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=c({},p,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(h(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!u(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){i(f,(function(e){this._buttons[e]=d.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){i(f,(function(e){var t="disabled"+d.capitalizeFirstLetter(e);this._buttons[t]=d.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){i(m,(function(e){var t=e+"More";this._buttons[t]=d.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,l(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,l(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,i=e.leftPageNumber,s=e.rightPageNumber;for(n=i;n<=s;n+=1)n===e.page?t=d.createElementByTemplate(this._template.currentPage,{page:n}):(t=d.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==i||e.prevMore||l(t,this._firstItemClassName),n!==s||e.nextMore||l(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();o(t,"click",(function(t){var n,i,s=r(t);a(t),(i=this._getButtonType(s))||(n=this._getPageNumber(s)),e(i,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return i(n,(function(n,i){return!d.isContained(e,n)||(t=i,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(t=this._enabledPageElements[n],d.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=g},function(e,t,n){e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){var i=n(4),s=n(3),r=n(23);function o(e,t,n,i){function o(t){n.call(i||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,o):"attachEvent"in e&&e.attachEvent("on"+t,o),function(e,t,n,i){var o=r(e,t),a=!1;s(o,(function(e){return e.handler!==n||(a=!0,!1)})),a||o.push({handler:n,wrappedHandler:i})}(e,t,n,o)}e.exports=function(e,t,n,r){i(t)?s(t.split(/\s+/g),(function(t){o(e,t,n,r)})):s(t,(function(t,i){o(e,i,t,n)}))}},function(e,t,n){var i="_feEventKey";e.exports=function(e,t){var n,s=e[i];return s||(s=e[i]={}),(n=s[t])||(n=s[t]=[]),n}},function(e,t,n){e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){var i=n(3),s=n(8),r=n(26),o=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),a=e.classList,l=[];a?i(n,(function(t){e.classList.add(t)})):((t=r(e))&&(n=[].concat(t.split(/\s+/),n)),i(n,(function(e){s(e,l)<0&&l.push(e)})),o(e,l))}},function(e,t,n){var i=n(1);e.exports=function(e){return e&&e.className?i(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){var i=n(2),s=n(1);e.exports=function(e,t){t=(t=i(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),s(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){var i=n(8),s=n(3),r=n(2),o=n(4),a=n(0),l=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,h=/\[\s?|\s?\]/,u=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,p=/^["']\w+["']$/,f=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:function(e,t,n){var i=function(e,t){var n=[e],i=[],r=0,o=0;return s(t,(function(e,s){0===e.indexOf("if")?r+=1:"/if"===e?r-=1:r||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),i.push(t.slice(o,s)),o=s+1)})),i.push(t.slice(o)),{exps:n,sourcesInsideIf:i}}(e,t),r=!1,o="";return s(i.exps,(function(e,t){return(r=b(e,n))&&(o=w(i.sourcesInsideIf[t],n)),!r})),o},each:function(e,t,n){var i=b(e,n),o=r(i)?"@index":"@key",l={},c="";return s(i,(function(e,i){l[o]=i,l["@this"]=e,a(n,l),c+=w(t.slice(),n)})),c},with:function(e,t,n){var s=i("as",e),r=e[s+1],o=b(e.slice(0,s),n),l={};return l[r]=o,w(t,a(n,l))||""}},v=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,i,s=[],r=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)i=n.index,s.push(e.slice(r,i)),r=i+n[0].length,n=t.exec(e);return s.push(e.slice(r)),s};function _(e,t){var n,i=t[e];return"true"===e?i=!0:"false"===e?i=!1:p.test(e)?i=e.replace(f,""):c.test(e)?i=_((n=e.split(h))[0],t)[_(n[1],t)]:u.test(e)?i=_((n=e.split(d))[0],t)[n[1]]:m.test(e)&&(i=parseFloat(e)),i}function y(e,t,n){for(var i,s,r,a,l=g[e],c=1,h=2,u=t[h];c&&o(u);)0===u.indexOf(e)?c+=1:0===u.indexOf("/"+e)&&(c-=1,i=h),u=t[h+=2];if(c)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=l(t[0].split(" ").slice(1),(s=0,r=i,(a=t.splice(s+1,r-s)).pop(),a),n),t}function b(e,t){var n=_(e[0],t);return n instanceof Function?function(e,t,n){var i=[];return s(t,(function(e){i.push(_(e,n))})),e.apply(null,i)}(n,e.slice(1),t):n}function w(e,t){for(var n,i,s,r=1,a=e[r];o(a);)i=(n=a.split(" "))[0],g[i]?(s=y(i,e.splice(r,e.length-r),t),e=e.concat(s)):e[r]=b(n,t),a=e[r+=2];return e.join("")}e.exports=function(e,t){return w(v(e,l),t)}},function(e,t,n){var i=n(1),s=n(31);e.exports=function(e,t){var n=location.hostname,r="TOAST UI "+e+" for "+n+": Statistics",o=window.localStorage.getItem(r);(i(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(e){return(new Date).getTime()-e>6048e5}(o)||(window.localStorage.setItem(r,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||s("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){var i=n(6);e.exports=function(e,t){var n=document.createElement("img"),s="";return i(t,(function(e,t){s+="&"+t+"="+e})),s=s.substring(1),n.src=e+"?"+s,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},e.exports=n()})),r.register("aVGVk",(function(t,n){e(t.exports,"startLoader",(function(){return i})),e(t.exports,"showLoader",(function(){return s}));r("aTIOK");const i=()=>{window.addEventListener("load",(()=>{const e=document.querySelector(".loader");let t;e.classList.remove("loader-hidden"),t=setTimeout((()=>{e.classList.add("loader-hidden")}),1500)}))},s=()=>{document.querySelector("form").addEventListener("submit",(()=>{const e=document.querySelector(".loader");let t;e.classList.remove("loader-hidden"),t=setTimeout((()=>{e.classList.add("loader-hidden")}),1500)}))}})),r.register("6ghLp",(function(e,t){})),r.register("f9JW7",(function(t,n){e(t.exports,"renderModal",(function(){return l}));var i=r("iqXVO");const s=document.querySelector(".modal-card__movie-description"),o=document.querySelector(".modal-card__poster"),a=document.querySelector(".modal-card__movie-description-wrapper"),l=({genres:e,id:t,original_title:n,overview:r,popularity:l,poster_path:c,title:h,vote_average:u,vote_count:d},p)=>{if(c)if(p){const t=`    \n  <img \n    class="modal-card__img"\n    src="https://image.tmdb.org/t/p/original${c}"\n    width="375"\n    alt="${n}"\n    loading="lazy"\n  />`,i=`\n  <h2 class="modal-card__movie-title uppercase">${h}</h2>\n  <ul class="movie-data-list">\n    <li class="movie-data-list__item">\n      <p class="movie-data-list__item-description">Vote / Votes</p>\n      <p class="movie-data-list__item-value">\n        <span class="rating--orange"> ${u.toFixed(2)} </span> / <span class="rating--grey"> ${d}</span>\n      </p>\n    </li>\n    <li class="movie-data-list__item">\n      <p class="movie-data-list__item-description">Popularity</p>\n      <p class="movie-data-list__item-value">${l}</p>\n    </li>\n    <li class="movie-data-list__item">\n      <p class="movie-data-list__item-description">Original Title</p>\n      <p class="movie-data-list__item-value uppercase">\n        ${n}\n      </p>\n    </li>\n    <li class="movie-data-list__item">\n      <p class="movie-data-list__item-description">Genre</p>\n      <p class="movie-data-list__item-value">${e.map((e=>e.name)).join(", ")}</p>\n    </li>\n    <li class="movie-data-list__item">\n      <p class="movie-data-list__item-description">Trailer</p>\n      <div><a class="modal-card__yt-link link" href="${p}" data-fancybox>\n      <p><span class="yt-logo"></span>Watch the trailer</p></a></div>\n    </li>\n  </ul>\n  <h3 class="modal-card__about uppercase">About</h3>\n  <p class="modal-card__about-description">${r}</p>\n`;o.insertAdjacentHTML("afterbegin",t),a.insertAdjacentHTML("afterbegin",i)}else{const t=`    \n    <img \n    class="modal-card__img"\n    src="https://image.tmdb.org/t/p/original${c}"\n    width="375"\n    alt="${n}"\n    loading="lazy"\n    />`,i=`\n    <h2 class="modal-card__movie-title uppercase">${h}</h2>\n    <ul class="movie-data-list">\n    <li class="movie-data-list__item">\n    <p class="movie-data-list__item-description">Vote / Votes</p>\n    <p class="movie-data-list__item-value">\n    <span class="rating--orange"> ${u.toFixed(2)} </span> / <span class="rating--grey"> ${d}</span>\n      </p>\n      </li>\n      <li class="movie-data-list__item">\n      <p class="movie-data-list__item-description">Popularity</p>\n      <p class="movie-data-list__item-value">${l}</p>\n      </li>\n      <li class="movie-data-list__item">\n      <p class="movie-data-list__item-description">Original Title</p>\n      <p class="movie-data-list__item-value uppercase">\n      ${n}\n      </p>\n      </li>\n      <li class="movie-data-list__item">\n      <p class="movie-data-list__item-description">Genre</p>\n      <p class="movie-data-list__item-value">${e.map((e=>e.name)).join(", ")}</p>\n        </li>\n        </ul>\n        <h3 class="modal-card__about uppercase">About</h3>\n        <p class="modal-card__about-description">${r}</p>\n        `;o.insertAdjacentHTML("afterbegin",t),a.insertAdjacentHTML("afterbegin",i)}else if(p){const t='    \n    <div class="modal-card__no-img"></div>',i=`\n    <h2 class="modal-card__movie-title uppercase">${h}</h2>\n    <ul class="movie-data-list">\n      <li class="movie-data-list__item">\n        <p class="movie-data-list__item-description">Vote / Votes</p>\n        <p class="movie-data-list__item-value">\n          <span class="rating--orange"> ${u.toFixed(2)} </span> / <span class="rating--grey"> ${d}</span>\n        </p>\n      </li>\n      <li class="movie-data-list__item">\n        <p class="movie-data-list__item-description">Popularity</p>\n        <p class="movie-data-list__item-value">${l}</p>\n      </li>\n      <li class="movie-data-list__item">\n        <p class="movie-data-list__item-description">Original Title</p>\n        <p class="movie-data-list__item-value uppercase">\n          ${n}\n        </p>\n      </li>\n      <li class="movie-data-list__item">\n        <p class="movie-data-list__item-description">Genre</p>\n        <p class="movie-data-list__item-value">${e.map((e=>e.name)).join(", ")}</p>\n      </li>\n      <li class="movie-data-list__item">\n        <p class="movie-data-list__item-description">Trailer</p>\n        <div><a class="modal-card__yt-link link" href="${p}" data-fancybox>\n        <p><span class="yt-logo"></span>Watch the trailer</p></a></div>\n      </li>\n    </ul>\n    <h3 class="modal-card__about uppercase">About</h3>\n    <p class="modal-card__about-description">${r}</p>\n  `;o.insertAdjacentHTML("afterbegin",t),a.insertAdjacentHTML("afterbegin",i)}else{const t='    \n      <div class="modal-card__no-img"></div>',i=`\n      <h2 class="modal-card__movie-title uppercase">${h}</h2>\n      <ul class="movie-data-list">\n      <li class="movie-data-list__item">\n      <p class="movie-data-list__item-description">Vote / Votes</p>\n      <p class="movie-data-list__item-value">\n      <span class="rating--orange"> ${u.toFixed(2)} </span> / <span class="rating--grey"> ${d}</span>\n        </p>\n        </li>\n        <li class="movie-data-list__item">\n        <p class="movie-data-list__item-description">Popularity</p>\n        <p class="movie-data-list__item-value">${l}</p>\n        </li>\n        <li class="movie-data-list__item">\n        <p class="movie-data-list__item-description">Original Title</p>\n        <p class="movie-data-list__item-value uppercase">\n        ${n}\n        </p>\n        </li>\n        <li class="movie-data-list__item">\n        <p class="movie-data-list__item-description">Genre</p>\n        <p class="movie-data-list__item-value">${e.map((e=>e.name)).join(", ")}</p>\n          </li>\n          </ul>\n          <h3 class="modal-card__about uppercase">About</h3>\n          <p class="modal-card__about-description">${r}</p>\n          `;o.insertAdjacentHTML("afterbegin",t),a.insertAdjacentHTML("afterbegin",i)}i.Fancybox.bind("[data-fancybox]",{}),s.setAttribute("data-movie-id",`${t}`)}})),r.register("iqXVO",(function(t,n){e(t.exports,"Fancybox",(function(){return Se}));const i=(e,t=1e4)=>(e=parseFloat(e+"")||0,Math.round((e+Number.EPSILON)*t)/t),s=function(e){if(!(e&&e instanceof Element&&e.offsetParent))return!1;const t=e.scrollHeight>e.clientHeight,n=window.getComputedStyle(e).overflowY,i=-1!==n.indexOf("hidden"),s=-1!==n.indexOf("visible");return t&&!i&&!s},r=function(e,t){return!(!e||e===document.body||t&&e===t)&&(s(e)?e:r(e.parentElement,t))},o=function(e){var t=(new DOMParser).parseFromString(e,"text/html").body;if(t.childElementCount>1){for(var n=document.createElement("div");t.firstChild;)n.appendChild(t.firstChild);return n}return t.firstChild},a=e=>`${e||""}`.split(" ").filter((e=>!!e)),l=(e,t,n)=>{a(t).forEach((t=>{e&&e.classList.toggle(t,n||!1)}))};class c{constructor(e){Object.defineProperty(this,"pageX",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"pageY",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clientX",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clientY",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"time",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"nativePointer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.nativePointer=e,this.pageX=e.pageX,this.pageY=e.pageY,this.clientX=e.clientX,this.clientY=e.clientY,this.id=self.Touch&&e instanceof Touch?e.identifier:-1,this.time=Date.now()}}const h={passive:!1};class u{constructor(e,{start:t=(()=>!0),move:n=(()=>{}),end:i=(()=>{})}){Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"startCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"moveCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"endCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"currentPointers",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"startPointers",{enumerable:!0,configurable:!0,writable:!0,value:[]}),this.element=e,this.startCallback=t,this.moveCallback=n,this.endCallback=i;for(const e of["onPointerStart","onTouchStart","onMove","onTouchEnd","onPointerEnd","onWindowBlur"])this[e]=this[e].bind(this);this.element.addEventListener("mousedown",this.onPointerStart,h),this.element.addEventListener("touchstart",this.onTouchStart,h),this.element.addEventListener("touchmove",this.onMove,h),this.element.addEventListener("touchend",this.onTouchEnd),this.element.addEventListener("touchcancel",this.onTouchEnd)}onPointerStart(e){if(!e.buttons||0!==e.button)return;const t=new c(e);this.currentPointers.some((e=>e.id===t.id))||this.triggerPointerStart(t,e)&&(window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseup",this.onPointerEnd),window.addEventListener("blur",this.onWindowBlur))}onTouchStart(e){for(const t of Array.from(e.changedTouches||[]))this.triggerPointerStart(new c(t),e);window.addEventListener("blur",this.onWindowBlur)}onMove(e){const t=this.currentPointers.slice(),n="changedTouches"in e?Array.from(e.changedTouches||[]).map((e=>new c(e))):[new c(e)],i=[];for(const e of n){const t=this.currentPointers.findIndex((t=>t.id===e.id));t<0||(i.push(e),this.currentPointers[t]=e)}i.length&&this.moveCallback(e,this.currentPointers.slice(),t)}onPointerEnd(e){e.buttons>0&&0!==e.button||(this.triggerPointerEnd(e,new c(e)),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseup",this.onPointerEnd),window.removeEventListener("blur",this.onWindowBlur))}onTouchEnd(e){for(const t of Array.from(e.changedTouches||[]))this.triggerPointerEnd(e,new c(t))}triggerPointerStart(e,t){return!!this.startCallback(t,e,this.currentPointers.slice())&&(this.currentPointers.push(e),this.startPointers.push(e),!0)}triggerPointerEnd(e,t){const n=this.currentPointers.findIndex((e=>e.id===t.id));n<0||(this.currentPointers.splice(n,1),this.startPointers.splice(n,1),this.endCallback(e,t,this.currentPointers.slice()))}onWindowBlur(){this.clear()}clear(){for(;this.currentPointers.length;){const e=this.currentPointers[this.currentPointers.length-1];this.currentPointers.splice(this.currentPointers.length-1,1),this.startPointers.splice(this.currentPointers.length-1,1),this.endCallback(new Event("touchend",{bubbles:!0,cancelable:!0,clientX:e.clientX,clientY:e.clientY}),e,this.currentPointers.slice())}}stop(){this.element.removeEventListener("mousedown",this.onPointerStart,h),this.element.removeEventListener("touchstart",this.onTouchStart,h),this.element.removeEventListener("touchmove",this.onMove,h),this.element.removeEventListener("touchend",this.onTouchEnd),this.element.removeEventListener("touchcancel",this.onTouchEnd),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseup",this.onPointerEnd),window.removeEventListener("blur",this.onWindowBlur)}}function d(e,t){return t?Math.sqrt(Math.pow(t.clientX-e.clientX,2)+Math.pow(t.clientY-e.clientY,2)):0}function p(e,t){return t?{clientX:(e.clientX+t.clientX)/2,clientY:(e.clientY+t.clientY)/2}:e}const f=e=>"object"==typeof e&&null!==e&&e.constructor===Object&&"[object Object]"===Object.prototype.toString.call(e),m=(e,...t)=>{const n=t.length;for(let i=0;i<n;i++){const n=t[i]||{};Object.entries(n).forEach((([t,n])=>{const i=Array.isArray(n)?[]:{};e[t]||Object.assign(e,{[t]:i}),f(n)?Object.assign(e[t],m(i,n)):Array.isArray(n)?Object.assign(e,{[t]:[...n]}):Object.assign(e,{[t]:n})}))}return e},g=function(e,t){return e.split(".").reduce(((e,t)=>"object"==typeof e?e[t]:void 0),t)};class v{constructor(e={}){Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"events",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),this.setOptions(e);for(const e of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))e.startsWith("on")&&"function"==typeof this[e]&&(this[e]=this[e].bind(this))}setOptions(e){this.options=e?m({},this.constructor.defaults,e):{};for(const[e,t]of Object.entries(this.option("on")||{}))this.on(e,t)}option(e,...t){let n=g(e,this.options);return n&&"function"==typeof n&&(n=n.call(this,this,...t)),n}optionFor(e,t,n,...i){let s=g(t,e);var r;"string"!=typeof(r=s)||isNaN(r)||isNaN(parseFloat(r))||(s=parseFloat(s)),"true"===s&&(s=!0),"false"===s&&(s=!1),s&&"function"==typeof s&&(s=s.call(this,this,e,...i));let o=g(t,this.options);return o&&"function"==typeof o?s=o.call(this,this,e,...i,s):void 0===s&&(s=o),void 0===s?n:s}cn(e){const t=this.options.classes;return t&&t[e]||""}localize(e,t=[]){e=String(e).replace(/\{\{(\w+).?(\w+)?\}\}/g,((e,t,n)=>{let i="";return n?i=this.option(`${t[0]+t.toLowerCase().substring(1)}.l10n.${n}`):t&&(i=this.option(`l10n.${t}`)),i||(i=e),i}));for(let n=0;n<t.length;n++)e=e.split(t[n][0]).join(t[n][1]);return e.replace(/\{\{(.*?)\}\}/g,((e,t)=>t))}on(e,t){let n=[];"string"==typeof e?n=e.split(" "):Array.isArray(e)&&(n=e),this.events||(this.events=new Map),n.forEach((e=>{let n=this.events.get(e);n||(this.events.set(e,[]),n=[]),n.includes(t)||n.push(t),this.events.set(e,n)}))}off(e,t){let n=[];"string"==typeof e?n=e.split(" "):Array.isArray(e)&&(n=e),n.forEach((e=>{const n=this.events.get(e);if(Array.isArray(n)){const e=n.indexOf(t);e>-1&&n.splice(e,1)}}))}emit(e,...t){[...this.events.get(e)||[]].forEach((e=>e(this,...t))),"*"!==e&&this.emit("*",e,...t)}}Object.defineProperty(v,"version",{enumerable:!0,configurable:!0,writable:!0,value:"5.0.16"}),Object.defineProperty(v,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{}});class _ extends v{constructor(e={}){super(e),Object.defineProperty(this,"plugins",{enumerable:!0,configurable:!0,writable:!0,value:{}})}attachPlugins(e={}){const t=new Map;for(const[n,i]of Object.entries(e)){const e=this.option(n),s=this.plugins[n];s||!1===e?s&&!1===e&&(s.detach(),delete this.plugins[n]):t.set(n,new i(this,e||{}))}for(const[e,n]of t)this.plugins[e]=n,n.attach();this.emit("attachPlugins")}detachPlugins(e){e=e||Object.keys(this.plugins);for(const t of e){const e=this.plugins[t];e&&e.detach(),delete this.plugins[t]}return this.emit("detachPlugins"),this}}var y,b;(b=y||(y={}))[b.Init=0]="Init",b[b.Error=1]="Error",b[b.Ready=2]="Ready",b[b.Panning=3]="Panning",b[b.Mousemove=4]="Mousemove",b[b.Destroy=5]="Destroy";const w=["a","b","c","d","e","f"],C={PANUP:"Move up",PANDOWN:"Move down",PANLEFT:"Move left",PANRIGHT:"Move right",ZOOMIN:"Zoom in",ZOOMOUT:"Zoom out",TOGGLEZOOM:"Toggle zoom level",TOGGLE1TO1:"Toggle zoom level",ITERATEZOOM:"Toggle zoom level",ROTATECCW:"Rotate counterclockwise",ROTATECW:"Rotate clockwise",FLIPX:"Flip horizontally",FLIPY:"Flip vertically",FITX:"Fit horizontally",FITY:"Fit vertically",RESET:"Reset",TOGGLEFS:"Toggle fullscreen"},E={content:null,width:"auto",height:"auto",panMode:"drag",touch:!0,dragMinThreshold:3,lockAxis:!1,mouseMoveFactor:1,mouseMoveFriction:.12,zoom:!0,pinchToZoom:!0,panOnlyZoomed:"auto",minScale:1,maxScale:2,friction:.25,dragFriction:.35,decelFriction:.05,click:"toggleZoom",dblClick:!1,wheel:"zoom",wheelLimit:7,spinner:!0,bounds:"auto",infinite:!1,rubberband:!0,bounce:!0,maxVelocity:75,transformParent:!1,classes:{content:"f-panzoom__content",isLoading:"is-loading",canZoomIn:"can-zoom_in",canZoomOut:"can-zoom_out",isDraggable:"is-draggable",isDragging:"is-dragging",inFullscreen:"in-fullscreen",htmlHasFullscreen:"with-panzoom-in-fullscreen"},l10n:C},T='<div class="f-spinner"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20"></circle><circle cx="25" cy="25" r="20"></circle></svg></div>',I=e=>e&&null!==e&&e instanceof Element&&"nodeType"in e,S=(e,t)=>{e&&a(t).forEach((t=>{e.classList.remove(t)}))},x=(e,t)=>{e&&a(t).forEach((t=>{e.classList.add(t)}))},P={a:1,b:0,c:0,d:1,e:0,f:0};let k=null,O=null;class R extends _{get isTouchDevice(){return null===O&&(O=window.matchMedia("(hover: none)").matches),O}get isMobile(){return null===k&&(k=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),k}get panMode(){return"mousemove"!==this.options.panMode||this.isTouchDevice?"drag":"mousemove"}get panOnlyZoomed(){const e=this.options.panOnlyZoomed;return"auto"===e?this.isTouchDevice:e}get isInfinite(){return this.option("infinite")}get angle(){return 180*Math.atan2(this.current.b,this.current.a)/Math.PI||0}get targetAngle(){return 180*Math.atan2(this.target.b,this.target.a)/Math.PI||0}get scale(){const{a:e,b:t}=this.current;return Math.sqrt(e*e+t*t)||1}get targetScale(){const{a:e,b:t}=this.target;return Math.sqrt(e*e+t*t)||1}get minScale(){return this.option("minScale")||1}get fullScale(){const{contentRect:e}=this;return e.fullWidth/e.fitWidth||1}get maxScale(){return this.fullScale*(this.option("maxScale")||1)||1}get coverScale(){const{containerRect:e,contentRect:t}=this,n=Math.max(e.height/t.fitHeight,e.width/t.fitWidth)||1;return Math.min(this.fullScale,n)}get isScaling(){return Math.abs(this.targetScale-this.scale)>1e-5&&!this.isResting}get isContentLoading(){const e=this.content;return!!(e&&e instanceof HTMLImageElement)&&!e.complete}get isResting(){if(this.isBouncingX||this.isBouncingY)return!1;for(const e of w){const t="e"==e||"f"===e?.001:1e-5;if(Math.abs(this.target[e]-this.current[e])>t)return!1}return!(!this.ignoreBounds&&!this.checkBounds().inBounds)}constructor(e,t={},n={}){var i;if(super(t),Object.defineProperty(this,"pointerTracker",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"updateTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"clickTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"rAF",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"isTicking",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"friction",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"ignoreBounds",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"isBouncingX",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"isBouncingY",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"clicks",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"trackingPoints",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"pwt",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"cwd",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"pmme",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:y.Init}),Object.defineProperty(this,"isDragging",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"content",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"spinner",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"containerRect",{enumerable:!0,configurable:!0,writable:!0,value:{width:0,height:0,innerWidth:0,innerHeight:0}}),Object.defineProperty(this,"contentRect",{enumerable:!0,configurable:!0,writable:!0,value:{top:0,right:0,bottom:0,left:0,fullWidth:0,fullHeight:0,fitWidth:0,fitHeight:0,width:0,height:0}}),Object.defineProperty(this,"dragStart",{enumerable:!0,configurable:!0,writable:!0,value:{x:0,y:0,top:0,left:0,time:0}}),Object.defineProperty(this,"dragOffset",{enumerable:!0,configurable:!0,writable:!0,value:{x:0,y:0,time:0}}),Object.defineProperty(this,"current",{enumerable:!0,configurable:!0,writable:!0,value:Object.assign({},P)}),Object.defineProperty(this,"target",{enumerable:!0,configurable:!0,writable:!0,value:Object.assign({},P)}),Object.defineProperty(this,"velocity",{enumerable:!0,configurable:!0,writable:!0,value:{a:0,b:0,c:0,d:0,e:0,f:0}}),Object.defineProperty(this,"lockedAxis",{enumerable:!0,configurable:!0,writable:!0,value:!1}),!e)throw new Error("Container Element Not Found");this.container=e,this.initContent(),this.attachPlugins(Object.assign(Object.assign({},R.Plugins),n)),this.emit("init");const s=this.content;if(s.addEventListener("load",this.onLoad),s.addEventListener("error",this.onError),this.isContentLoading){if(this.option("spinner")){e.classList.add(this.cn("isLoading"));const t=o(T);!e.contains(s)||s.parentElement instanceof HTMLPictureElement?this.spinner=e.appendChild(t):this.spinner=(null===(i=s.parentElement)||void 0===i?void 0:i.insertBefore(t,s))||null}this.emit("beforeLoad")}else queueMicrotask((()=>{this.enable()}))}initContent(){const{container:e}=this,t=this.cn("content");let n=this.option("content")||e.querySelector(`.${t}`);if(n||(n=e.querySelector("img,picture")||e.firstElementChild,n&&x(n,t)),n instanceof HTMLPictureElement&&(n=n.querySelector("img")),!n)throw new Error("No content found");this.content=n}onLoad(){this.spinner&&(this.spinner.remove(),this.spinner=null),this.option("spinner")&&this.container.classList.remove(this.cn("isLoading")),this.emit("afterLoad"),this.state===y.Init?this.enable():this.updateMetrics()}onError(){this.state!==y.Destroy&&(this.spinner&&(this.spinner.remove(),this.spinner=null),this.stop(),this.detachEvents(),this.state=y.Error,this.emit("error"))}attachObserver(){var e;const t=()=>Math.abs(this.containerRect.width-this.container.getBoundingClientRect().width)>.1||Math.abs(this.containerRect.height-this.container.getBoundingClientRect().height)>.1;this.resizeObserver||void 0===window.ResizeObserver||(this.resizeObserver=new ResizeObserver((()=>{this.updateTimer||(t()?(this.onResize(),this.isMobile&&(this.updateTimer=setTimeout((()=>{t()&&this.onResize(),this.updateTimer=null}),500))):this.updateTimer&&(clearTimeout(this.updateTimer),this.updateTimer=null))}))),null===(e=this.resizeObserver)||void 0===e||e.observe(this.container)}detachObserver(){var e;null===(e=this.resizeObserver)||void 0===e||e.disconnect()}attachEvents(){const{container:e}=this;e.addEventListener("click",this.onClick,{passive:!1,capture:!1}),e.addEventListener("wheel",this.onWheel,{passive:!1}),this.pointerTracker=new u(e,{start:this.onPointerDown,move:this.onPointerMove,end:this.onPointerUp}),document.addEventListener("mousemove",this.onMouseMove)}detachEvents(){var e;const{container:t}=this;t.removeEventListener("click",this.onClick,{passive:!1,capture:!1}),t.removeEventListener("wheel",this.onWheel,{passive:!1}),null===(e=this.pointerTracker)||void 0===e||e.stop(),this.pointerTracker=null,document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("keydown",this.onKeydown,!0),this.clickTimer&&(clearTimeout(this.clickTimer),this.clickTimer=null),this.updateTimer&&(clearTimeout(this.updateTimer),this.updateTimer=null)}animate(){const e=this.friction;this.setTargetForce();const t=this.option("maxVelocity");for(const n of w)e?(this.velocity[n]*=1-e,t&&!this.isScaling&&(this.velocity[n]=Math.max(Math.min(this.velocity[n],t),-1*t)),this.current[n]+=this.velocity[n]):this.current[n]=this.target[n];this.setTransform(),this.setEdgeForce(),!this.isResting||this.isDragging?this.rAF=requestAnimationFrame((()=>this.animate())):this.stop("current")}setTargetForce(){for(const e of w)"e"===e&&this.isBouncingX||"f"===e&&this.isBouncingY||(this.velocity[e]=(1/(1-this.friction)-1)*(this.target[e]-this.current[e]))}checkBounds(e=0,t=0){const{current:n}=this,i=n.e+e,s=n.f+t,r=this.getBounds(),{x:o,y:a}=r,l=o.min,c=o.max,h=a.min,u=a.max;let d=0,p=0;return l!==1/0&&i<l?d=l-i:c!==1/0&&i>c&&(d=c-i),h!==1/0&&s<h?p=h-s:u!==1/0&&s>u&&(p=u-s),Math.abs(d)<.001&&(d=0),Math.abs(p)<.001&&(p=0),Object.assign(Object.assign({},r),{xDiff:d,yDiff:p,inBounds:!d&&!p})}clampTargetBounds(){const{target:e}=this,{x:t,y:n}=this.getBounds();t.min!==1/0&&(e.e=Math.max(e.e,t.min)),t.max!==1/0&&(e.e=Math.min(e.e,t.max)),n.min!==1/0&&(e.f=Math.max(e.f,n.min)),n.max!==1/0&&(e.f=Math.min(e.f,n.max))}calculateContentDim(e=this.current){const{content:t,contentRect:n}=this,{fitWidth:i,fitHeight:s,fullWidth:r,fullHeight:o}=n;let a=r,l=o;if(this.option("zoom")||0!==this.angle){const n=!(t instanceof HTMLImageElement||"none"!==window.getComputedStyle(t).maxWidth&&"none"!==window.getComputedStyle(t).maxHeight),c=n?r:i,h=n?o:s,u=this.getMatrix(e),d=new DOMPoint(0,0).matrixTransform(u),p=new DOMPoint(0+c,0).matrixTransform(u),f=new DOMPoint(0+c,0+h).matrixTransform(u),m=new DOMPoint(0,0+h).matrixTransform(u),g=Math.abs(f.x-d.x),v=Math.abs(f.y-d.y),_=Math.abs(m.x-p.x),y=Math.abs(m.y-p.y);a=Math.max(g,_),l=Math.max(v,y)}return{contentWidth:a,contentHeight:l}}setEdgeForce(){if(this.ignoreBounds||this.isDragging||"mousemove"===this.panMode||this.targetScale<this.scale)return this.isBouncingX=!1,void(this.isBouncingY=!1);const{target:e}=this,{x:t,y:n,xDiff:i,yDiff:s}=this.checkBounds(),r=this.option("maxVelocity");let o=this.velocity.e,a=this.velocity.f;0!==i?(this.isBouncingX=!0,i*o<=0?o+=.14*i:(o=.14*i,t.min!==1/0&&(this.target.e=Math.max(e.e,t.min)),t.max!==1/0&&(this.target.e=Math.min(e.e,t.max))),r&&(o=Math.max(Math.min(o,r),-1*r))):this.isBouncingX=!1,0!==s?(this.isBouncingY=!0,s*a<=0?a+=.14*s:(a=.14*s,n.min!==1/0&&(this.target.f=Math.max(e.f,n.min)),n.max!==1/0&&(this.target.f=Math.min(e.f,n.max))),r&&(a=Math.max(Math.min(a,r),-1*r))):this.isBouncingY=!1,this.isBouncingX&&(this.velocity.e=o),this.isBouncingY&&(this.velocity.f=a)}enable(){const{content:e}=this,t=new DOMMatrixReadOnly(window.getComputedStyle(e).transform);for(const e of w)this.current[e]=this.target[e]=t[e];this.updateMetrics(),this.attachObserver(),this.attachEvents(),this.state=y.Ready,this.emit("ready")}onClick(e){var t;this.isDragging&&(null===(t=this.pointerTracker)||void 0===t||t.clear(),this.trackingPoints=[],this.startDecelAnim());const n=e.target;if(!n||e.defaultPrevented)return;if(n&&n.hasAttribute("disabled"))return e.preventDefault(),void e.stopPropagation();if((()=>{const e=window.getSelection();return e&&"Range"===e.type})()&&!n.closest("button"))return;const i=n.closest("[data-panzoom-action]"),s=n.closest("[data-panzoom-change]"),r=i||s,o=r&&I(r)?r.dataset:null;if(o){const t=o.panzoomChange,n=o.panzoomAction;if((t||n)&&e.preventDefault(),t){let e={};try{e=JSON.parse(t)}catch(e){console&&console.warn("The given data was not valid JSON")}return void this.applyChange(e)}if(n)return void(this[n]&&this[n]())}if(Math.abs(this.dragOffset.x)>3||Math.abs(this.dragOffset.y)>3)return e.preventDefault(),void e.stopPropagation();const a=this.content.getBoundingClientRect();if(this.dragStart.time&&!this.canZoomOut()&&(Math.abs(a.x-this.dragStart.x)>2||Math.abs(a.y-this.dragStart.y)>2))return;this.dragStart.time=0;const l=t=>{this.option("zoom")&&t&&"string"==typeof t&&/(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(t)&&"function"==typeof this[t]&&(e.preventDefault(),this[t]({event:e}))},c=this.option("click",e),h=this.option("dblClick",e);h?(this.clicks++,1==this.clicks&&(this.clickTimer=setTimeout((()=>{1===this.clicks?(this.emit("click",e),!e.defaultPrevented&&c&&l(c)):(this.emit("dblClick",e),e.defaultPrevented||l(h)),this.clicks=0,this.clickTimer=null}),350))):(this.emit("click",e),!e.defaultPrevented&&c&&l(c))}addTrackingPoint(e){const t=this.trackingPoints.filter((e=>e.time>Date.now()-100));t.push(e),this.trackingPoints=t}onPointerDown(e,t,n){var i;this.pwt=0,this.dragOffset={x:0,y:0,time:0},this.trackingPoints=[];const s=this.content.getBoundingClientRect();if(this.dragStart={x:s.x,y:s.y,top:s.top,left:s.left,time:Date.now()},this.clickTimer)return!1;if("mousemove"===this.panMode&&this.targetScale>1)return e.preventDefault(),e.stopPropagation(),!1;if(!n.length){const t=e.composedPath()[0];if(["A","TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].includes(t.nodeName)||t.closest("[contenteditable]")||t.closest("[data-selectable]")||t.closest("[data-panzoom-change]")||t.closest("[data-panzoom-action]"))return!1;null===(i=window.getSelection())||void 0===i||i.removeAllRanges()}if("mousedown"===e.type)e.preventDefault();else if(Math.abs(this.velocity.a)>.3)return!1;return this.target.e=this.current.e,this.target.f=this.current.f,this.stop(),this.isDragging||(this.isDragging=!0,this.addTrackingPoint(t),this.emit("touchStart",e)),!0}onPointerMove(e,t,n){if(!1===this.option("touch",e))return;if(!this.isDragging)return;if(t.length<2&&this.panOnlyZoomed&&i(this.targetScale)<=i(this.minScale))return;if(this.emit("touchMove",e),e.defaultPrevented)return;this.addTrackingPoint(t[0]);const{content:s}=this,o=p(n[0],n[1]),a=p(t[0],t[1]);let l=0,c=0;if(t.length>1){const e=s.getBoundingClientRect();l=o.clientX-e.left-.5*e.width,c=o.clientY-e.top-.5*e.height}const h=d(n[0],n[1]),u=d(t[0],t[1]);let f=h?u/h:1,m=a.clientX-o.clientX,g=a.clientY-o.clientY;this.dragOffset.x+=m,this.dragOffset.y+=g,this.dragOffset.time=Date.now()-this.dragStart.time;let v=i(this.targetScale)===i(this.minScale)&&this.option("lockAxis");if(v&&!this.lockedAxis)if("xy"===v||"y"===v||"touchmove"===e.type){if(Math.abs(this.dragOffset.x)<6&&Math.abs(this.dragOffset.y)<6)return void e.preventDefault();const t=Math.abs(180*Math.atan2(this.dragOffset.y,this.dragOffset.x)/Math.PI);this.lockedAxis=t>45&&t<135?"y":"x",this.dragOffset.x=0,this.dragOffset.y=0,m=0,g=0}else this.lockedAxis=v;if(r(e.target,this.content)&&(v="x",this.dragOffset.y=0),v&&"xy"!==v&&this.lockedAxis!==v&&i(this.targetScale)===i(this.minScale))return;e.cancelable&&e.preventDefault(),this.container.classList.add(this.cn("isDragging"));const _=this.checkBounds(m,g);this.option("rubberband")?("x"!==this.isInfinite&&(_.xDiff>0&&m<0||_.xDiff<0&&m>0)&&(m*=Math.max(0,.5-Math.abs(.75/this.contentRect.fitWidth*_.xDiff))),"y"!==this.isInfinite&&(_.yDiff>0&&g<0||_.yDiff<0&&g>0)&&(g*=Math.max(0,.5-Math.abs(.75/this.contentRect.fitHeight*_.yDiff)))):(_.xDiff&&(m=0),_.yDiff&&(g=0));const y=this.targetScale,b=this.minScale,w=this.maxScale;y<.5*b&&(f=Math.max(f,b)),y>1.5*w&&(f=Math.min(f,w)),"y"===this.lockedAxis&&i(y)===i(b)&&(m=0),"x"===this.lockedAxis&&i(y)===i(b)&&(g=0),this.applyChange({originX:l,originY:c,panX:m,panY:g,scale:f,friction:this.option("dragFriction"),ignoreBounds:!0})}onPointerUp(e,t,n){if(n.length)return this.dragOffset.x=0,this.dragOffset.y=0,void(this.trackingPoints=[]);this.container.classList.remove(this.cn("isDragging")),this.isDragging&&(this.addTrackingPoint(t),this.panOnlyZoomed&&this.contentRect.width-this.contentRect.fitWidth<1&&this.contentRect.height-this.contentRect.fitHeight<1&&(this.trackingPoints=[]),r(e.target,this.content)&&"y"===this.lockedAxis&&(this.trackingPoints=[]),this.emit("touchEnd",e),this.isDragging=!1,this.lockedAxis=!1,this.state!==y.Destroy&&(e.defaultPrevented||this.startDecelAnim()))}startDecelAnim(){const e=this.isScaling;this.rAF&&(cancelAnimationFrame(this.rAF),this.rAF=null),this.isBouncingX=!1,this.isBouncingY=!1;for(const e of w)this.velocity[e]=0;this.target.e=this.current.e,this.target.f=this.current.f,S(this.container,"is-scaling"),S(this.container,"is-animating"),this.isTicking=!1;const{trackingPoints:t}=this,n=t[0],s=t[t.length-1];let r=0,o=0,a=0;s&&n&&(r=s.clientX-n.clientX,o=s.clientY-n.clientY,a=s.time-n.time);let l=0,c=0,h=0,u=0,d=this.option("decelFriction");const p=this.targetScale;if(a>0){h=Math.abs(r)>3?r/(a/30):0,u=Math.abs(o)>3?o/(a/30):0;const e=this.option("maxVelocity");e&&(h=Math.max(Math.min(h,e),-1*e),u=Math.max(Math.min(u,e),-1*e))}h&&(l=h/(1/(1-d)-1)),u&&(c=u/(1/(1-d)-1)),("y"===this.option("lockAxis")||"xy"===this.option("lockAxis")&&"y"===this.lockedAxis&&i(p)===this.minScale)&&(l=h=0),("x"===this.option("lockAxis")||"xy"===this.option("lockAxis")&&"x"===this.lockedAxis&&i(p)===this.minScale)&&(c=u=0);const f=this.dragOffset.x,m=this.dragOffset.y,g=this.option("dragMinThreshold")||0;Math.abs(f)<g&&Math.abs(m)<g&&(l=c=0,h=u=0),(p<this.minScale-1e-5||p>this.maxScale+1e-5||e&&!l&&!c)&&(d=.35),this.applyChange({panX:l,panY:c,friction:d}),this.emit("decel",h,u,f,m)}onWheel(e){var t=[-e.deltaX||0,-e.deltaY||0,-e.detail||0].reduce((function(e,t){return Math.abs(t)>Math.abs(e)?t:e}));const n=Math.max(-1,Math.min(1,t));if(this.emit("wheel",e,n),"mousemove"===this.panMode)return;if(e.defaultPrevented)return;const i=this.option("wheel");"pan"===i?(e.preventDefault(),this.panOnlyZoomed&&!this.canZoomOut()||this.applyChange({panX:2*-e.deltaX,panY:2*-e.deltaY,bounce:!1})):"zoom"===i&&!1!==this.option("zoom")&&this.zoomWithWheel(e)}onMouseMove(e){this.panWithMouse(e)}onKeydown(e){"Escape"===e.key&&this.toggleFS()}onResize(){this.updateMetrics(),this.checkBounds().inBounds||this.requestTick()}setTransform(){this.emit("beforeTransform");const{current:e,target:t,content:n,contentRect:s}=this,r=Object.assign({},P);for(const n of w){const s="e"==n||"f"===n?1e3:1e5;r[n]=i(e[n],s),Math.abs(t[n]-e[n])<("e"==n||"f"===n?.51:.001)&&(e[n]=t[n])}let{a:o,b:a,c:l,d:c,e:h,f:u}=r,d=`matrix(${o}, ${a}, ${l}, ${c}, ${h}, ${u})`,p=n.parentElement instanceof HTMLPictureElement?n.parentElement:n;if(this.option("transformParent")&&(p=p.parentElement||p),p.style.transform===d)return;p.style.transform=d;const{contentWidth:f,contentHeight:m}=this.calculateContentDim();s.width=f,s.height=m,this.emit("afterTransform")}updateMetrics(e=!1){if(!this||this.state===y.Destroy)return;if(this.isContentLoading)return;const{container:t,content:n}=this,s=n instanceof HTMLImageElement,r=t.getBoundingClientRect(),o=getComputedStyle(this.container),a=r.width,l=r.height,c=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),h=a-(parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)),u=l-c;this.containerRect={width:a,height:l,innerWidth:h,innerHeight:u};let d=this.option("width")||"auto",p=this.option("height")||"auto";"auto"===d&&(d=parseFloat(n.dataset.width||"")||(e=>{let t=0;return t=e instanceof HTMLImageElement?e.naturalWidth:e instanceof SVGElement?e.width.baseVal.value:Math.max(e.offsetWidth,e.scrollWidth),t||0})(n)),"auto"===p&&(p=parseFloat(n.dataset.height||"")||(e=>{let t=0;return t=e instanceof HTMLImageElement?e.naturalHeight:e instanceof SVGElement?e.height.baseVal.value:Math.max(e.offsetHeight,e.scrollHeight),t||0})(n));let f=n.parentElement instanceof HTMLPictureElement?n.parentElement:n;this.option("transformParent")&&(f=f.parentElement||f);const m=f.getAttribute("style")||"";f.style.setProperty("transform","none","important"),s&&(f.style.width="",f.style.height=""),f.offsetHeight;const g=n.getBoundingClientRect();let v=g.width,_=g.height,b=0,w=0;s&&(Math.abs(d-v)>1||Math.abs(p-_)>1)&&({width:v,height:_,top:b,left:w}=((e,t,n,i)=>{const s=n/i;return s>e/t?(n=e,i=e/s):(n=t*s,i=t),{width:n,height:i,top:.5*(t-i),left:.5*(e-n)}})(v,_,d,p)),this.contentRect=Object.assign(Object.assign({},this.contentRect),{top:g.top-r.top+b,bottom:r.bottom-g.bottom+b,left:g.left-r.left+w,right:r.right-g.right+w,fitWidth:v,fitHeight:_,width:v,height:_,fullWidth:d,fullHeight:p}),f.style.cssText=m,s&&(f.style.width=`${v}px`,f.style.height=`${_}px`),this.setTransform(),!0!==e&&this.emit("refresh"),this.ignoreBounds||(i(this.targetScale)<i(this.minScale)?this.zoomTo(this.minScale,{friction:0}):this.targetScale>this.maxScale?this.zoomTo(this.maxScale,{friction:0}):this.state===y.Init||this.checkBounds().inBounds||this.requestTick()),this.updateControls()}getBounds(){const e=this.option("bounds");if("auto"!==e)return e;const{contentWidth:t,contentHeight:n}=this.calculateContentDim(this.target);let s=0,r=0,o=0,a=0;const l=this.option("infinite");if(!0===l||this.lockedAxis&&l===this.lockedAxis)s=-1/0,o=1/0,r=-1/0,a=1/0;else{let{containerRect:e,contentRect:l}=this,c=i(this.contentRect.fitWidth*this.targetScale,1e3),h=i(this.contentRect.fitHeight*this.targetScale,1e3),{innerWidth:u,innerHeight:d}=e;if(this.containerRect.width===c&&(u=e.width),this.containerRect.width===h&&(d=e.height),t>u){o=.5*(t-u),s=-1*o;let e=.5*(l.right-l.left);s+=e,o+=e}if(this.contentRect.fitWidth>u&&t<u&&(s-=.5*(this.contentRect.fitWidth-u),o-=.5*(this.contentRect.fitWidth-u)),n>d){a=.5*(n-d),r=-1*a;let e=.5*(l.bottom-l.top);r+=e,a+=e}this.contentRect.fitHeight>d&&n<d&&(s-=.5*(this.contentRect.fitHeight-d),o-=.5*(this.contentRect.fitHeight-d))}return{x:{min:s,max:o},y:{min:r,max:a}}}updateControls(){const e=this,t=e.container,{panMode:n,contentRect:s,fullScale:r,targetScale:o,coverScale:a,maxScale:c,minScale:h}=e;let u={toggleMax:o-h<.5*(c-h)?c:h,toggleCover:o-h<.5*(a-h)?a:h,toggleZoom:o-h<.5*(r-h)?r:h}[e.option("click")||""]||h,d=e.canZoomIn(),p=e.canZoomOut(),f=p&&"drag"===n;i(o)<i(h)&&!this.panOnlyZoomed&&(f=!0),(i(s.width,1)>i(s.fitWidth,1)||i(s.height,1)>i(s.fitHeight,1))&&(f=!0),i(s.width*o,1)<i(s.fitWidth,1)&&(f=!1),"mousemove"===n&&(f=!1);let m=d&&i(u)>i(o),g=!m&&!f&&p&&i(u)<i(o);l(t,this.cn("canZoomIn"),m),l(t,this.cn("canZoomOut"),g),l(t,this.cn("isDraggable"),f);for(const e of t.querySelectorAll('[data-panzoom-action="zoomIn"]'))d?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));for(const e of t.querySelectorAll('[data-panzoom-action="zoomOut"]'))p?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));for(const e of t.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')){d||p?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));const t=e.querySelector("g");t&&(t.style.display=d?"":"none")}}panTo({x:e=this.target.e,y:t=this.target.f,scale:n=this.targetScale,friction:i=this.option("friction"),angle:s=0,originX:r=0,originY:o=0,flipX:a=!1,flipY:l=!1,ignoreBounds:c=!1}){this.state!==y.Destroy&&this.applyChange({panX:e-this.target.e,panY:t-this.target.f,scale:n/this.targetScale,angle:s,originX:r,originY:o,friction:i,flipX:a,flipY:l,ignoreBounds:c})}applyChange({panX:e=0,panY:t=0,scale:n=1,angle:s=0,originX:r=-this.current.e,originY:o=-this.current.f,friction:a=this.option("friction"),flipX:l=!1,flipY:c=!1,ignoreBounds:h=!1,bounce:u=this.option("bounce")}){if(this.state===y.Destroy)return;this.rAF&&(cancelAnimationFrame(this.rAF),this.rAF=null),this.friction=a||0,this.ignoreBounds=h;const{current:d}=this,p=d.e,f=d.f,m=this.getMatrix(this.target);let g=(new DOMMatrix).translate(p,f).translate(r,o).translate(e,t);if(this.option("zoom")){if(!h){const e=this.targetScale,t=this.minScale,i=this.maxScale;e*n<t&&(n=t/e),e*n>i&&(n=i/e)}g=g.scale(n)}g=g.translate(-r,-o).translate(-p,-f).multiply(m),s&&(g=g.rotate(s)),l&&(g=g.scale(-1,1)),c&&(g=g.scale(1,-1));for(const e of w)"e"!==e&&"f"!==e&&(g[e]>this.minScale+1e-5||g[e]<this.minScale-1e-5)?this.target[e]=g[e]:this.target[e]=i(g[e],1e3);(this.targetScale<this.scale||Math.abs(n-1)>.1||"mousemove"===this.panMode||!1===u)&&!h&&this.clampTargetBounds(),this.isResting||(this.state=y.Panning,this.requestTick())}stop(e=!1){if(this.state===y.Init||this.state===y.Destroy)return;const t=this.isTicking;this.rAF&&(cancelAnimationFrame(this.rAF),this.rAF=null),this.isBouncingX=!1,this.isBouncingY=!1;for(const t of w)this.velocity[t]=0,"current"===e?this.current[t]=this.target[t]:"target"===e&&(this.target[t]=this.current[t]);this.setTransform(),S(this.container,"is-scaling"),S(this.container,"is-animating"),this.isTicking=!1,this.state=y.Ready,t&&(this.emit("endAnimation"),this.updateControls())}requestTick(){this.isTicking||(this.emit("startAnimation"),this.updateControls(),x(this.container,"is-animating"),this.isScaling&&x(this.container,"is-scaling")),this.isTicking=!0,this.rAF||(this.rAF=requestAnimationFrame((()=>this.animate())))}panWithMouse(e,t=this.option("mouseMoveFriction")){if(this.pmme=e,"mousemove"!==this.panMode||!e)return;if(i(this.targetScale)<=i(this.minScale))return;this.emit("mouseMove",e);const{container:n,containerRect:s,contentRect:r}=this,o=s.width,a=s.height,l=n.getBoundingClientRect(),c=(e.clientX||0)-l.left,h=(e.clientY||0)-l.top;let{contentWidth:u,contentHeight:d}=this.calculateContentDim(this.target);const p=this.option("mouseMoveFactor");p>1&&(u!==o&&(u*=p),d!==a&&(d*=p));let f=.5*(u-o)-c/o*100/100*(u-o);f+=.5*(r.right-r.left);let m=.5*(d-a)-h/a*100/100*(d-a);m+=.5*(r.bottom-r.top),this.applyChange({panX:f-this.target.e,panY:m-this.target.f,friction:t})}zoomWithWheel(e){if(this.state===y.Destroy||this.state===y.Init)return;const t=Date.now();if(t-this.pwt<45)return void e.preventDefault();this.pwt=t;var n=[-e.deltaX||0,-e.deltaY||0,-e.detail||0].reduce((function(e,t){return Math.abs(t)>Math.abs(e)?t:e}));const s=Math.max(-1,Math.min(1,n)),{targetScale:r,maxScale:o,minScale:a}=this;let l=r*(100+45*s)/100;i(l)<i(a)&&i(r)<=i(a)?(this.cwd+=Math.abs(s),l=a):i(l)>i(o)&&i(r)>=i(o)?(this.cwd+=Math.abs(s),l=o):(this.cwd=0,l=Math.max(Math.min(l,o),a)),this.cwd>this.option("wheelLimit")||(e.preventDefault(),i(l)!==i(r)&&this.zoomTo(l,{event:e}))}canZoomIn(){return this.option("zoom")&&(i(this.contentRect.width,1)<i(this.contentRect.fitWidth,1)||i(this.targetScale)<i(this.maxScale))}canZoomOut(){return this.option("zoom")&&i(this.targetScale)>i(this.minScale)}zoomIn(e=1.25,t){this.zoomTo(this.targetScale*e,t)}zoomOut(e=.8,t){this.zoomTo(this.targetScale*e,t)}zoomToFit(e){this.zoomTo("fit",e)}zoomToCover(e){this.zoomTo("cover",e)}zoomToFull(e){this.zoomTo("full",e)}zoomToMax(e){this.zoomTo("max",e)}toggleZoom(e){this.zoomTo(this.targetScale-this.minScale<.5*(this.fullScale-this.minScale)?"full":"fit",e)}toggleMax(e){this.zoomTo(this.targetScale-this.minScale<.5*(this.maxScale-this.minScale)?"max":"fit",e)}toggleCover(e){this.zoomTo(this.targetScale-this.minScale<.5*(this.coverScale-this.minScale)?"cover":"fit",e)}iterateZoom(e){this.zoomTo("next",e)}zoomTo(e=1,{friction:t="auto",originX:n=0,originY:i=0,event:s}={}){if(this.isContentLoading||this.state===y.Destroy)return;const{targetScale:r}=this;this.stop();let o=1;if("mousemove"===this.panMode&&(s=this.pmme||s),s){const e=this.content.getBoundingClientRect(),t=s.clientX||0,r=s.clientY||0;n=t-e.left-.5*e.width,i=r-e.top-.5*e.height}const a=this.fullScale,l=this.maxScale;let c=this.coverScale;"number"==typeof e?o=e/r:("next"===e&&(a-c<.2&&(c=a),e=r<a-1e-5?"full":r<l-1e-5?"max":"fit"),o="full"===e?a/r||1:"cover"===e?c/r||1:"max"===e?l/r||1:1/r||1),t="auto"===t?o>1?.15:.25:t,this.applyChange({scale:o,originX:n,originY:i,friction:t}),s&&"mousemove"===this.panMode&&this.panWithMouse(s,t)}rotateCCW(){this.applyChange({angle:-90})}rotateCW(){this.applyChange({angle:90})}flipX(){this.applyChange({flipX:!0})}flipY(){this.applyChange({flipY:!0})}fitX(){this.stop("target");const{containerRect:e,contentRect:t,target:n}=this;this.applyChange({panX:.5*e.width-(t.left+.5*t.fitWidth)-n.e,panY:.5*e.height-(t.top+.5*t.fitHeight)-n.f,scale:e.width/t.fitWidth/this.targetScale,originX:0,originY:0,ignoreBounds:!0})}fitY(){this.stop("target");const{containerRect:e,contentRect:t,target:n}=this;this.applyChange({panX:.5*e.width-(t.left+.5*t.fitWidth)-n.e,panY:.5*e.innerHeight-(t.top+.5*t.fitHeight)-n.f,scale:e.height/t.fitHeight/this.targetScale,originX:0,originY:0,ignoreBounds:!0})}toggleFS(){const{container:e}=this,t=this.cn("inFullscreen"),n=this.cn("htmlHasFullscreen");e.classList.toggle(t);const i=e.classList.contains(t);i?(document.documentElement.classList.add(n),document.addEventListener("keydown",this.onKeydown,!0)):(document.documentElement.classList.remove(n),document.removeEventListener("keydown",this.onKeydown,!0)),this.updateMetrics(),this.emit(i?"enterFS":"exitFS")}getMatrix(e=this.current){const{a:t,b:n,c:i,d:s,e:r,f:o}=e;return new DOMMatrix([t,n,i,s,r,o])}reset(e){if(this.state!==y.Init&&this.state!==y.Destroy){this.stop("current");for(const e of w)this.target[e]=P[e];this.target.a=this.minScale,this.target.d=this.minScale,this.clampTargetBounds(),this.isResting||(this.friction=void 0===e?this.option("friction"):e,this.state=y.Panning,this.requestTick())}}destroy(){this.stop(),this.state=y.Destroy,this.detachEvents(),this.detachObserver();const{container:e,content:t}=this,n=this.option("classes")||{};for(const t of Object.values(n))e.classList.remove(t+"");t&&(t.removeEventListener("load",this.onLoad),t.removeEventListener("error",this.onError)),this.detachPlugins()}}Object.defineProperty(R,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:E}),Object.defineProperty(R,"Plugins",{enumerable:!0,configurable:!0,writable:!0,value:{}});const M=function(e,t){let n=!0;return(...i)=>{n&&(n=!1,e(...i),setTimeout((()=>{n=!0}),t))}},A=(e,t)=>{let n=[];return e.childNodes.forEach((e=>{e.nodeType!==Node.ELEMENT_NODE||t&&!e.matches(t)||n.push(e)})),n};var N,L;(L=N||(N={}))[L.Init=0]="Init",L[L.Ready=1]="Ready",L[L.Destroy=2]="Destroy";const D=e=>{if("string"==typeof e&&(e={html:e}),!(e instanceof String||e instanceof HTMLElement)){const t=e.thumb;void 0!==t&&("string"==typeof t&&(e.thumbSrc=t),t instanceof HTMLImageElement&&(e.thumbEl=t,e.thumbElSrc=t.src,e.thumbSrc=t.src),delete e.thumb)}return Object.assign({html:"",el:null,isDom:!1,class:"",index:-1,dim:0,gap:0,pos:0,transition:!1},e)},F=(e={})=>Object.assign({index:-1,slides:[],dim:0,pos:-1},e);class j extends v{constructor(e,t){super(t),Object.defineProperty(this,"instance",{enumerable:!0,configurable:!0,writable:!0,value:e})}attach(){}detach(){}}class z extends j{constructor(){super(...arguments),Object.defineProperty(this,"isDynamic",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"list",{enumerable:!0,configurable:!0,writable:!0,value:null})}onRefresh(){this.refresh()}build(){let e=this.list;return e||(e=document.createElement("ul"),x(e,this.cn("list")),e.setAttribute("role","tablist"),this.instance.container.appendChild(e),x(this.instance.container,this.cn("hasDots")),this.list=e),e}refresh(){var e;const t=this.instance.pages.length,n=Math.min(2,this.option("minCount")),i=Math.max(2e3,this.option("maxCount")),s=this.option("dynamicFrom");if(t<n||t>i)return void this.cleanup();const r="number"==typeof s&&t>5&&t>=s,o=!this.list||this.isDynamic!==r||this.list.children.length!==t;o&&this.cleanup();const a=this.build();if(l(a,this.cn("isDynamic"),!!r),o)for(let e=0;e<t;e++)a.append(this.createItem(e));let c,h=0;for(const t of[...a.children]){const n=h===this.instance.page;n&&(c=t),l(t,this.cn("isCurrent"),n),null===(e=t.children[0])||void 0===e||e.setAttribute("aria-selected",n?"true":"false");for(const e of["isBeforePrev","isPrev","isNext","isAfterNext"])S(t,this.cn(e));h++}if(c=c||a.firstChild,r&&c){const e=c.previousElementSibling,t=e&&e.previousElementSibling;x(e,this.cn("isPrev")),x(t,this.cn("isBeforePrev"));const n=c.nextElementSibling,i=n&&n.nextElementSibling;x(n,this.cn("isNext")),x(i,this.cn("isAfterNext"))}this.isDynamic=r}createItem(e=0){var t;const n=document.createElement("li");n.setAttribute("role","presentation");const i=o(this.instance.localize(this.option("dotTpl"),[["%d",e+1]]).replace(/\%i/g,e+""));return n.appendChild(i),null===(t=n.children[0])||void 0===t||t.setAttribute("role","tab"),n}cleanup(){this.list&&(this.list.remove(),this.list=null),this.isDynamic=!1,S(this.instance.container,this.cn("hasDots"))}attach(){this.instance.on(["refresh","change"],this.onRefresh)}detach(){this.instance.off(["refresh","change"],this.onRefresh),this.cleanup()}}Object.defineProperty(z,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{classes:{list:"f-carousel__dots",isDynamic:"is-dynamic",hasDots:"has-dots",dot:"f-carousel__dot",isBeforePrev:"is-before-prev",isPrev:"is-prev",isCurrent:"is-current",isNext:"is-next",isAfterNext:"is-after-next"},dotTpl:'<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',dynamicFrom:11,maxCount:1/0,minCount:2}});class q extends j{constructor(){super(...arguments),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"prev",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"next",{enumerable:!0,configurable:!0,writable:!0,value:null})}onRefresh(){const e=this.instance,t=e.pages.length,n=e.page;if(t<2)return void this.cleanup();this.build();let i=this.prev,s=this.next;i&&s&&(i.removeAttribute("disabled"),s.removeAttribute("disabled"),e.isInfinite||(n<=0&&i.setAttribute("disabled",""),n>=t-1&&s.setAttribute("disabled","")))}createButton(e){const t=this.instance,n=document.createElement("button");n.setAttribute("tabindex","0"),n.setAttribute("title",t.localize(`{{${e.toUpperCase()}}}`)),x(n,this.cn("button")+" "+this.cn("next"===e?"isNext":"isPrev"));const i=t.isRTL?"next"===e?"prev":"next":e;var s;return n.innerHTML=t.localize(this.option(`${i}Tpl`)),n.dataset[`carousel${s=e,s?s.match("^[a-z]")?s.charAt(0).toUpperCase()+s.substring(1):s:""}`]="true",n}build(){let e=this.container;e||(this.container=e=document.createElement("div"),x(e,this.cn("container")),this.instance.container.appendChild(e)),this.next||(this.next=e.appendChild(this.createButton("next"))),this.prev||(this.prev=e.appendChild(this.createButton("prev")))}cleanup(){this.prev&&this.prev.remove(),this.next&&this.next.remove(),this.container&&this.container.remove(),this.prev=null,this.next=null,this.container=null}attach(){this.instance.on(["refresh","change"],this.onRefresh)}detach(){this.instance.off(["refresh","change"],this.onRefresh),this.cleanup()}}Object.defineProperty(q,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{classes:{container:"f-carousel__nav",button:"f-button",isNext:"is-next",isPrev:"is-prev"},nextTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',prevTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>'}});class H extends j{constructor(){super(...arguments),Object.defineProperty(this,"selectedIndex",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"target",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nav",{enumerable:!0,configurable:!0,writable:!0,value:null})}addAsTargetFor(e){this.target=this.instance,this.nav=e,this.attachEvents()}addAsNavFor(e){this.nav=this.instance,this.target=e,this.attachEvents()}attachEvents(){this.nav&&this.target&&(this.nav.options.initialSlide=this.target.options.initialPage,this.nav.on("ready",this.onNavReady),this.nav.state===N.Ready&&this.onNavReady(this.nav),this.target.on("ready",this.onTargetReady),this.target.state===N.Ready&&this.onTargetReady(this.target))}onNavReady(e){e.on("createSlide",this.onNavCreateSlide),e.on("Panzoom.click",this.onNavClick),e.on("Panzoom.touchEnd",this.onNavTouch),this.onTargetChange()}onTargetReady(e){e.on("change",this.onTargetChange),e.on("Panzoom.refresh",this.onTargetChange),this.onTargetChange()}onNavClick(e,t,n){n.pointerType||this.onNavTouch(e,e.panzoom,n)}onNavTouch(e,t,n){var i,s;if(Math.abs(t.dragOffset.x)>3||Math.abs(t.dragOffset.y)>3)return;const r=n.target,{nav:o,target:a}=this;if(!o||!a||!r)return;const l=r.closest("[data-index]");if(n.stopPropagation(),n.preventDefault(),!l)return;const c=parseInt(l.dataset.index||"",10)||0,h=a.getPageForSlide(c),u=o.getPageForSlide(c);o.slideTo(u),a.slideTo(h,{friction:null===(s=null===(i=this.nav)||void 0===i?void 0:i.plugins)||void 0===s?void 0:s.Sync.option("friction")}),this.markSelectedSlide(c)}onNavCreateSlide(e,t){t.index===this.selectedIndex&&this.markSelectedSlide(t.index)}onTargetChange(){const{target:e,nav:t}=this;if(!e||!t)return;if(t.state!==N.Ready||e.state!==N.Ready)return;const n=e.pages[e.page].slides[0].index,i=t.getPageForSlide(n);this.markSelectedSlide(n),t.slideTo(i)}markSelectedSlide(e){const{nav:t}=this;t&&t.state===N.Ready&&(this.selectedIndex=e,[...t.slides].map((t=>{t.el&&t.el.classList[t.index===e?"add":"remove"]("is-nav-selected")})))}attach(){let e=this.options.target,t=this.options.nav;e?this.addAsNavFor(e):t&&this.addAsTargetFor(t)}detach(){this.nav&&(this.nav.off("ready",this.onNavReady),this.nav.off("createSlide",this.onNavCreateSlide),this.nav.off("Panzoom.click",this.onNavClick),this.nav.off("Panzoom.touchEnd",this.onNavTouch)),this.nav=null,this.target&&(this.target.off("ready",this.onTargetReady),this.target.off("refresh",this.onTargetChange),this.target.off("change",this.onTargetChange)),this.target=null}}Object.defineProperty(H,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{friction:.35}});const B={Navigation:q,Dots:z,Sync:H};class U extends _{get axis(){return this.isHorizontal?"e":"f"}get isEnabled(){return this.state===N.Ready}get isInfinite(){let e=!1;const t=this.contentDim,n=this.viewportDim;return this.pages.length>=2&&t>1.5*n&&(e=this.option("infinite")),e}get isRTL(){return"rtl"===this.option("direction")}get isHorizontal(){return"x"===this.option("axis")}constructor(e,t={},n={}){if(super(),Object.defineProperty(this,"userOptions",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"userPlugins",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"bp",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"lp",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:N.Init}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"prevPage",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"viewport",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"track",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"slides",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"pages",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"panzoom",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"inTransition",{enumerable:!0,configurable:!0,writable:!0,value:new Set}),Object.defineProperty(this,"contentDim",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"viewportDim",{enumerable:!0,configurable:!0,writable:!0,value:0}),"string"==typeof e&&(e=document.querySelector(e)),!e||!I(e))throw new Error("No Element found");this.container=e,this.slideNext=M(this.slideNext.bind(this),150),this.slidePrev=M(this.slidePrev.bind(this),150),this.userOptions=t,this.userPlugins=n,queueMicrotask((()=>{this.processOptions()}))}processOptions(){const e=m({},U.defaults,this.userOptions);let t="";const n=e.breakpoints;if(n&&f(n))for(const[i,s]of Object.entries(n))window.matchMedia(i).matches&&f(s)&&(t+=i,m(e,s));t===this.bp&&this.state!==N.Init||(this.bp=t,this.state===N.Ready&&(e.initialSlide=this.pages[this.page].slides[0].index),this.state!==N.Init&&this.destroy(),super.setOptions(e),!1===this.option("enabled")?this.attachEvents():setTimeout((()=>{this.init()}),0))}init(){this.state=N.Init,this.emit("init"),this.attachPlugins(Object.assign(Object.assign({},U.Plugins),this.userPlugins)),this.initLayout(),this.initSlides(),this.updateMetrics(),this.setInitialPosition(),this.initPanzoom(),this.attachEvents(),this.state=N.Ready,this.emit("ready")}initLayout(){const{container:e}=this,t=this.option("classes");x(e,this.cn("container")),l(e,t.isLTR,!this.isRTL),l(e,t.isRTL,this.isRTL),l(e,t.isVertical,!this.isHorizontal),l(e,t.isHorizontal,this.isHorizontal);let n=this.option("viewport")||e.querySelector(`.${t.viewport}`);n||(n=document.createElement("div"),x(n,t.viewport),n.append(...A(e,`.${t.slide}`)),e.prepend(n));let i=this.option("track")||e.querySelector(`.${t.track}`);i||(i=document.createElement("div"),x(i,t.track),i.append(...Array.from(n.childNodes))),i.setAttribute("aria-live","polite"),n.contains(i)||n.prepend(i),this.viewport=n,this.track=i,this.emit("initLayout")}initSlides(){const{track:e}=this;if(e){this.slides=[],[...A(e,`.${this.cn("slide")}`)].forEach((e=>{if(I(e)){const t=D({el:e,isDom:!0,index:this.slides.length});this.slides.push(t),this.emit("initSlide",t,this.slides.length)}}));for(let e of this.option("slides",[])){const t=D(e);t.index=this.slides.length,this.slides.push(t),this.emit("initSlide",t,this.slides.length)}this.emit("initSlides")}}setInitialPage(){let e=0;const t=this.option("initialSlide");e="number"==typeof t?this.getPageForSlide(t):parseInt(this.option("initialPage",0)+"",10)||0,this.page=e}setInitialPosition(){if(!this.track||!this.pages.length)return;const e=this.isHorizontal;let t=this.page;this.pages[t]||(this.page=t=0);const n=this.pages[t].pos*(this.isRTL&&e?1:-1),i=e?`${n}px`:"0",s=e?"0":`${n}px`;this.track.style.transform=`translate3d(${i}, ${s}, 0) scale(1)`,this.option("adaptiveHeight")&&this.setViewportHeight()}initPanzoom(){this.panzoom&&(this.panzoom.destroy(),this.panzoom=null);const e=this.option("Panzoom")||{};this.panzoom=new R(this.viewport,m({},{content:this.track,zoom:!1,panOnlyZoomed:!1,lockAxis:this.isHorizontal?"x":"y",infinite:this.isInfinite,click:!1,dblClick:!1,touch:e=>!(this.pages.length<2&&!e.options.infinite),bounds:()=>this.getBounds(),maxVelocity:e=>Math.abs(e.target[this.axis]-e.current[this.axis])<2*this.viewportDim?100:0},e)),this.panzoom.on("*",((e,t,...n)=>{this.emit(`Panzoom.${t}`,e,...n)})),this.panzoom.on("decel",this.onDecel),this.panzoom.on("refresh",this.onRefresh),this.panzoom.on("beforeTransform",this.onBeforeTransform),this.panzoom.on("endAnimation",this.onEndAnimation)}attachEvents(){const e=this.container;e&&(e.addEventListener("click",this.onClick,{passive:!1,capture:!1}),e.addEventListener("slideTo",this.onSlideTo)),window.addEventListener("resize",this.onResize)}createPages(){let e=[];const{contentDim:t,viewportDim:n}=this;let i=this.option("slidesPerPage");("number"!=typeof i||t<=n)&&(i=1/0);let s=0,r=0,o=0;for(const t of this.slides)(!e.length||r+t.dim>n||o===i)&&(e.push(F()),s=e.length-1,r=0,o=0),e[s].slides.push(t),r+=t.dim+t.gap,o++;return e}processPages(){const e=this.pages,{contentDim:t,viewportDim:n}=this,s=this.option("center"),r=this.option("fill"),o=r&&s&&t>n&&!this.isInfinite;if(e.forEach(((e,i)=>{e.index=i,e.pos=e.slides[0].pos,e.dim=0;for(const[t,n]of e.slides.entries())e.dim+=n.dim,t<e.slides.length-1&&(e.dim+=n.gap);o&&e.pos+.5*e.dim<.5*n?e.pos=0:o&&e.pos+.5*e.dim>=t-.5*n?e.pos=t-n:s&&(e.pos+=-.5*(n-e.dim))})),e.forEach(((e,s)=>{r&&!this.isInfinite&&t>n&&(e.pos=Math.max(e.pos,0),e.pos=Math.min(e.pos,t-n)),e.pos=i(e.pos,1e3),e.dim=i(e.dim,1e3),e.pos<.1&&e.pos>-.1&&(e.pos=0)})),this.isInfinite)return e;const a=[];let l;return e.forEach((e=>{const t=Object.assign({},e);l&&t.pos===l.pos?(l.dim+=t.dim,l.slides=[...l.slides,...t.slides]):(t.index=a.length,l=t,a.push(t))})),a}getPageFromIndex(e=0){const t=this.pages.length;let n;return e=parseInt((e||0).toString())||0,n=this.isInfinite?(e%t+t)%t:Math.max(Math.min(e,t-1),0),n}getSlideMetrics(e){const t=this.isHorizontal?"width":"height";let n=0,s=0,r=e.el;r?n=parseFloat(r.dataset[t]||"")||0:(r=document.createElement("div"),r.style.visibility="hidden",x(r,this.cn("slide")+" "+e.class),(this.track||document.body).prepend(r)),n?(r.style[t]=`${n}px`,r.style["width"===t?"height":"width"]=""):n=r.getBoundingClientRect()[t];const o=getComputedStyle(r);return"content-box"===o.boxSizing&&(this.isHorizontal?(n+=parseFloat(o.paddingLeft)||0,n+=parseFloat(o.paddingRight)||0):(n+=parseFloat(o.paddingTop)||0,n+=parseFloat(o.paddingBottom)||0)),s=parseFloat(o[this.isHorizontal?"marginRight":"marginBottom"])||0,this.isHorizontal,e.el||r.remove(),{dim:i(n,1e3),gap:i(s,1e3)}}getBounds(){let e={min:0,max:0};if(this.isInfinite)e={min:-1/0,max:1/0};else if(this.pages.length){const t=this.pages[0].pos,n=this.pages[this.pages.length-1].pos;e=this.isRTL&&this.isHorizontal?{min:t,max:n}:{min:-1*n,max:-1*t}}return{x:this.isHorizontal?e:{min:0,max:0},y:this.isHorizontal?{min:0,max:0}:e}}repositionSlides(){let e,{viewport:t,viewportDim:n,contentDim:s,page:r,pages:o}=this,a=0,l=0,c=0,h=0;this.panzoom?h=-1*this.panzoom.current[this.axis]:o[r]&&(h=o[r].pos||0),e=this.isHorizontal?this.isRTL?"right":"left":"top",this.isRTL&&this.isHorizontal&&(h*=-1);for(const t of this.slides)t.el?("top"===e?(t.el.style.right="",t.el.style.left=""):t.el.style.top="",t.index!==a?t.el.style[e]=0===l?"":`${i(l,1e3)}px`:t.el.style[e]="",c+=t.dim+t.gap,a++):l+=t.dim+t.gap;if(this.isInfinite&&c&&t){const r=this.isHorizontal;let o=getComputedStyle(t),a="padding",u=r?"Right":"Bottom",d=parseFloat(o[a+(r?"Left":"Top")]);h-=d,n+=d,n+=parseFloat(o[a+u]);for(const t of this.slides)t.el&&(i(t.pos)<i(n)&&i(t.pos+t.dim+t.gap)<i(h)&&i(h)>i(s-n)&&(t.el.style[e]=`${i(l+c,1e3)}px`),i(t.pos+t.gap)>=i(s-n)&&i(t.pos)>i(h+n)&&i(h)<i(n)&&(t.el.style[e]=`-${i(c,1e3)}px`))}let u,d,p=[...this.inTransition];if(p.length>1&&(u=this.pages[p[0]],d=this.pages[p[1]]),u&&d){let t=0;for(const n of this.slides)n.el?this.inTransition.has(n.index)&&u.slides.indexOf(n)<0&&(n.el.style[e]=`${i(t+(u.pos-d.pos),1e3)}px`):t+=n.dim+n.gap}}createSlideEl(e){if(!this.track||!e)return;if(e.el)return;const t=document.createElement("div");x(t,this.cn("slide")),x(t,e.class),x(t,e.customClass),e.html&&(t.innerHTML=e.html);const n=[];this.slides.forEach(((e,t)=>{e.el&&n.push(t)}));const i=e.index;let s=null;if(n.length){let e=n.reduce(((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e));s=this.slides[e]}const r=s&&s.el?s.index<e.index?s.el.nextSibling:s.el:null;this.track.insertBefore(t,this.track.contains(r)?r:null),e.el=t,this.emit("createSlide",e)}removeSlideEl(e,t=!1){const n=e.el;if(!n)return;if(S(n,this.cn("isSelected")),e.isDom&&!t)return n.removeAttribute("aria-hidden"),n.removeAttribute("data-index"),S(n,this.cn("isSelected")),void(n.style.left="");this.emit("removeSlide",e);const i=new CustomEvent("animationend");n.dispatchEvent(i),e.el&&e.el.remove(),e.el=null}transitionTo(e=0,t=this.option("transition")){if(!t)return!1;const{pages:n,panzoom:s}=this;e=parseInt((e||0).toString())||0;const r=this.getPageFromIndex(e);if(!s||!n[r]||n.length<2||Math.abs(n[this.page].slides[0].dim-this.viewportDim)>1)return!1;const o=e>this.page?1:-1,a=this.pages[r].pos*(this.isRTL?1:-1);if(this.page===r&&i(a,1e3)===i(s.target[this.axis],1e3))return!1;this.clearTransitions();const l=s.isResting;x(this.container,this.cn("inTransition"));const c=this.pages[this.page].slides[0],h=this.pages[r].slides[0];this.inTransition.add(h.index),this.createSlideEl(h);let u=c.el,d=h.el;l||"slide"===t||(t="fadeFast",u=null);const p=this.isRTL?"next":"prev",f=this.isRTL?"prev":"next";return u&&(this.inTransition.add(c.index),c.transition=t,u.addEventListener("animationend",this.onAnimationEnd),u.classList.add(`f-${t}Out`,`to-${o>0?f:p}`)),d&&(h.transition=t,d.addEventListener("animationend",this.onAnimationEnd),d.classList.add(`f-${t}In`,`from-${o>0?p:f}`)),s.panTo({x:this.isHorizontal?a:0,y:this.isHorizontal?0:a,friction:0}),this.onChange(r),!0}manageSlideVisiblity(){const e=new Set,t=new Set,n=this.getVisibleSlides(parseFloat(this.option("preload",0)+"")||0);for(const i of this.slides)n.has(i)?e.add(i):t.add(i);for(const t of this.inTransition)e.add(this.slides[t]);for(const t of e)this.createSlideEl(t),this.lazyLoadSlide(t);for(const n of t)e.has(n)||this.removeSlideEl(n);this.markSelectedSlides(),this.repositionSlides()}markSelectedSlides(){if(!this.pages[this.page]||!this.pages[this.page].slides)return;const e="aria-hidden";let t=this.cn("isSelected");if(t)for(const n of this.slides)n.el&&(n.el.dataset.index=`${n.index}`,this.pages[this.page].slides.includes(n)?(n.el.classList.contains(t)||(x(n.el,t),this.emit("selectSlide",n)),n.el.removeAttribute(e)):(n.el.classList.contains(t)&&(S(n.el,t),this.emit("unselectSlide",n)),n.el.setAttribute(e,"true")))}flipInfiniteTrack(){const e=this.panzoom;if(!e||!this.isInfinite)return;const t="x"===this.option("axis")?"e":"f",{viewportDim:n,contentDim:i}=this;let s=e.current[t],r=e.target[t]-s,o=0,a=.5*n,l=i;this.isRTL&&this.isHorizontal?(s<-a&&(o=-1,s+=l),s>l-a&&(o=1,s-=l)):(s>a&&(o=1,s-=l),s<-l+a&&(o=-1,s+=l)),o&&(e.current[t]=s,e.target[t]=s+r)}lazyLoadSlide(e){const t=this,n=e&&e.el;if(!n)return;const i=new Set,s="f-fadeIn";n.querySelectorAll("[data-lazy-srcset]").forEach((e=>{e instanceof HTMLImageElement&&i.add(e)}));let r=Array.from(n.querySelectorAll("[data-lazy-src]"));n.dataset.lazySrc&&r.push(n),r.map((e=>{e instanceof HTMLImageElement?i.add(e):I(e)&&(e.style.backgroundImage=`url('${e.dataset.lazySrc||""}')`,delete e.dataset.lazySrc)}));const a=(e,n,i)=>{i&&(i.remove(),i=null),n.complete&&(n.classList.add(s),setTimeout((()=>{n.classList.remove(s)}),350),n.style.display=""),this.option("adaptiveHeight")&&e.el&&this.pages[this.page].slides.indexOf(e)>-1&&(t.updateMetrics(),t.setViewportHeight()),this.emit("load",e)};for(const t of i){let n=null;t.src=t.dataset.lazySrcset||t.dataset.lazySrc||"",delete t.dataset.lazySrc,delete t.dataset.lazySrcset,t.style.display="none",t.addEventListener("error",(()=>{a(e,t,n)})),t.addEventListener("load",(()=>{a(e,t,n)})),setTimeout((()=>{t.parentNode&&e.el&&(t.complete?a(e,t,n):(n=o(T),t.parentNode.insertBefore(n,t)))}),300)}}onAnimationEnd(e){var t;const n=e.target,i=n?parseInt(n.dataset.index||"",10)||0:-1,s=this.slides[i],r=e.animationName;if(!n||!s||!r)return;const o=!!this.inTransition.has(i)&&s.transition;o&&r.substring(0,o.length+2)===`f-${o}`&&this.inTransition.delete(i),this.inTransition.size||this.clearTransitions(),i===this.page&&(null===(t=this.panzoom)||void 0===t?void 0:t.isResting)&&this.emit("settle")}onDecel(e,t=0,n=0){const{isRTL:i,isHorizontal:s,axis:r,pages:o}=this,a=o.length,l=Math.abs(Math.atan2(n,t)/(Math.PI/180));let c=0;if(c=l>45&&l<135?s?0:n:s?t:0,!a)return;const h=this.option("dragFree");let u=this.page,d=i&&s?1:-1;const p=e.target[r]*d,f=e.current[r]*d;let{pageIndex:m}=this.getPageFromPosition(p),{pageIndex:g}=this.getPageFromPosition(f);h?this.onChange(m):(Math.abs(c)>5?(o[u].dim<document.documentElement["client"+(this.isHorizontal?"Width":"Height")]-1&&(u=g),u=i&&s?c<0?u-1:u+1:c<0?u+1:u-1):u=g,this.slideTo(u,{transition:!1,friction:e.option("decelFriction")}))}onClick(e){const t=e.target,n=t&&I(t)?t.dataset:null;let i,s;n&&(void 0!==n.carouselPage?(s="slideTo",i=n.carouselPage):void 0!==n.carouselNext?s="slideNext":void 0!==n.carouselPrev&&(s="slidePrev")),s?(e.preventDefault(),e.stopPropagation(),t&&!t.hasAttribute("disabled")&&this[s](i)):this.emit("click",e)}onSlideTo(e){const t=e.detail||0;this.slideTo(this.getPageForSlide(t),{friction:0})}onChange(e,t=0){const n=this.page;this.prevPage=n,this.page=e,this.option("adaptiveHeight")&&this.setViewportHeight(),e!==n&&(this.markSelectedSlides(),this.emit("change",e,n,t))}onRefresh(){let e=this.contentDim,t=this.viewportDim;this.updateMetrics(),this.contentDim===e&&this.viewportDim===t||this.slideTo(this.page,{friction:0,transition:!1})}onResize(){this.option("breakpoints")&&this.processOptions()}onBeforeTransform(e){this.lp!==e.current[this.axis]&&(this.flipInfiniteTrack(),this.manageSlideVisiblity()),this.lp=e.current.e}onEndAnimation(){this.inTransition.size||this.emit("settle")}reInit(e=null,t=null){this.destroy(),this.state=N.Init,this.userOptions=e||this.userOptions,this.userPlugins=t||this.userPlugins,this.processOptions()}slideTo(e=0,{friction:t=this.option("friction"),transition:n=this.option("transition")}={}){if(this.state===N.Destroy)return;const{axis:i,isHorizontal:s,isRTL:r,pages:o,panzoom:a}=this,l=o.length,c=r&&s?1:-1;if(!a||!l)return;if(this.transitionTo(e,n))return;const h=this.getPageFromIndex(e);let u=o[h].pos;if(this.isInfinite){const t=this.contentDim,n=a.target[i]*c;if(2===l)u+=t*Math.floor(parseFloat(e+"")/2);else{const e=n;u=[u,u-t,u+t].reduce((function(t,n){return Math.abs(n-e)<Math.abs(t-e)?n:t}))}}u*=c,Math.abs(a.target[i]-u)<.1||(a.panTo({x:s?u:0,y:s?0:u,friction:t}),this.onChange(h))}slideToClosest(e){if(this.panzoom){const{pageIndex:t}=this.getPageFromPosition(this.panzoom.current[this.isHorizontal?"e":"f"]);this.slideTo(t,e)}}slideNext(){this.slideTo(this.page+1)}slidePrev(){this.slideTo(this.page-1)}clearTransitions(){this.inTransition.clear(),S(this.container,this.cn("inTransition"));const e=["to-prev","to-next","from-prev","from-next"];for(const t of this.slides){const n=t.el;if(n){n.removeEventListener("animationend",this.onAnimationEnd),n.classList.remove(...e);const i=t.transition;i&&n.classList.remove(`f-${i}Out`,`f-${i}In`)}}this.manageSlideVisiblity()}prependSlide(e){var t,n;let i=Array.isArray(e)?e:[e];for(const e of i.reverse())this.slides.unshift(D(e));for(let e=0;e<this.slides.length;e++)this.slides[e].index=e;const s=(null===(t=this.pages[this.page])||void 0===t?void 0:t.pos)||0;this.page+=i.length,this.updateMetrics();const r=(null===(n=this.pages[this.page])||void 0===n?void 0:n.pos)||0;if(this.panzoom){const e=this.isRTL?s-r:r-s;this.panzoom.target.e-=e,this.panzoom.current.e-=e,this.panzoom.requestTick()}}appendSlide(e){let t=Array.isArray(e)?e:[e];for(const e of t){const t=D(e);t.index=this.slides.length,this.slides.push(t),this.emit("initSlide",e,this.slides.length)}this.updateMetrics()}removeSlide(e){const t=this.slides.length;e=(e%t+t)%t,this.removeSlideEl(this.slides[e],!0),this.slides.splice(e,1);for(let e=0;e<this.slides.length;e++)this.slides[e].index=e;this.updateMetrics(),this.slideTo(this.page,{friction:0,transition:!1})}updateMetrics(){const{panzoom:e,viewport:t,track:n,isHorizontal:s}=this;if(!n)return;const r=s?"width":"height";if(t){let e=i(t.getBoundingClientRect()[r],1e3),n=getComputedStyle(t),o="padding",a=s?"Right":"Bottom";e-=parseFloat(n[o+(s?"Left":"Top")])+parseFloat(n[o+a]),this.viewportDim=e}let o,a=this.pages.length,l=0;for(const[e,t]of this.slides.entries()){let n=0,s=0;!t.el&&o?(n=o.dim,s=o.gap):(({dim:n,gap:s}=this.getSlideMetrics(t)),o=t),n=i(n,1e3),s=i(s,1e3),t.dim=n,t.gap=s,t.pos=l,l+=n,(this.isInfinite||e<this.slides.length-1)&&(l+=s)}const c=this.contentDim;l=i(l,1e3),this.contentDim=l,e&&(e.contentRect[r]=l,e.contentRect["e"===this.axis?"fullWidth":"fullHeight"]=l),this.pages=this.createPages(),this.pages=this.processPages(),this.state===N.Init&&this.setInitialPage(),this.page=Math.max(0,Math.min(this.page,this.pages.length-1)),e&&a===this.pages.length&&Math.abs(l-c)>.5&&(e.target[this.axis]=-1*this.pages[this.page].pos,e.current[this.axis]=-1*this.pages[this.page].pos,e.stop()),this.manageSlideVisiblity(),this.emit("refresh")}getProgress(e,t=!1){void 0===e&&(e=this.page);const n=this,s=n.panzoom,r=n.pages[e]||0;if(!r||!s)return 0;let o=-1*s.current.e,a=n.contentDim;var l=[i((o-r.pos)/(1*r.dim),1e3),i((o+a-r.pos)/(1*r.dim),1e3),i((o-a-r.pos)/(1*r.dim),1e3)].reduce((function(e,t){return Math.abs(t)<Math.abs(e)?t:e}));return t?l:Math.max(-1,Math.min(1,l))}setViewportHeight(){const{page:e,pages:t,viewport:n,isHorizontal:i}=this;if(!n||!t[e])return;let s=0;i&&this.track&&(this.track.style.height="auto",t[e].slides.forEach((e=>{e.el&&(s=Math.max(s,e.el.offsetHeight))}))),n.style.height=s?`${s}px`:""}getPageForSlide(e){for(const t of this.pages)for(const n of t.slides)if(n.index===e)return t.index;return-1}getVisibleSlides(e=0){var t;const n=new Set;let{contentDim:i,viewportDim:s,pages:r,page:o}=this;i=i+(null===(t=this.slides[this.slides.length-1])||void 0===t?void 0:t.gap)||0;let a=0;a=this.panzoom?-1*this.panzoom.current[this.axis]:r[o]&&r[o].pos||0,this.isInfinite&&(a-=Math.floor(a/i)*i),this.isRTL&&this.isHorizontal&&(a*=-1);const l=a-s*e,c=a+s*(e+1),h=this.isInfinite?[-1,0,1]:[0];for(const e of this.slides)for(const t of h){const s=e.pos+t*i,r=e.pos+e.dim+e.gap+t*i;s<c&&r>l&&n.add(e)}return n}getPageFromPosition(e){const{viewportDim:t,contentDim:n}=this,i=this.pages.length,s=this.slides.length,r=this.slides[s-1];let o=0,a=0,l=0;const c=this.option("center");c&&(e+=.5*t),this.isInfinite||(e=Math.max(this.slides[0].pos,Math.min(e,r.pos)));const h=n+r.gap;l=Math.floor(e/h)||0,e-=l*h;let u=r,d=this.slides.find((t=>{const n=e+(u&&!c?.5*u.dim:0);return u=t,t.pos<=n&&t.pos+t.dim+t.gap>n}));return d||(d=r),a=this.getPageForSlide(d.index),o=a+l*i,{page:o,pageIndex:a}}destroy(){if([N.Destroy].includes(this.state))return;this.state=N.Destroy;const{container:e,viewport:t,track:n,slides:i,panzoom:s}=this,r=this.option("classes");e.removeEventListener("click",this.onClick,{passive:!1,capture:!1}),e.removeEventListener("slideTo",this.onSlideTo),window.removeEventListener("resize",this.onResize),s&&(s.destroy(),this.panzoom=null),i&&i.forEach((e=>{this.removeSlideEl(e)})),this.detachPlugins(),t&&t.offsetParent&&n&&n.offsetParent&&t.replaceWith(...n.childNodes);for(const[t,n]of Object.entries(r))"container"!==t&&n&&e.classList.remove(n);this.track=null,this.viewport=null,this.page=0,this.slides=[];const o=this.events.get("ready");this.events=new Map,o&&this.events.set("ready",o)}}Object.defineProperty(U,"Panzoom",{enumerable:!0,configurable:!0,writable:!0,value:R}),Object.defineProperty(U,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{viewport:null,track:null,enabled:!0,slides:[],axis:"x",transition:"fade",preload:1,slidesPerPage:"auto",initialPage:0,friction:.12,Panzoom:{decelFriction:.12},center:!0,infinite:!0,fill:!0,dragFree:!1,adaptiveHeight:!1,direction:"ltr",classes:{container:"f-carousel",viewport:"f-carousel__viewport",track:"f-carousel__track",slide:"f-carousel__slide",isLTR:"is-ltr",isRTL:"is-rtl",isHorizontal:"is-horizontal",isVertical:"is-vertical",inTransition:"in-transition",isSelected:"is-selected"},l10n:{NEXT:"Next slide",PREV:"Previous slide",GOTO:"Go to slide #%d"}}}),Object.defineProperty(U,"Plugins",{enumerable:!0,configurable:!0,writable:!0,value:B});const W=function(e){const t=window.pageYOffset,n=window.pageYOffset+window.innerHeight;if(!I(e))return 0;const i=e.getBoundingClientRect(),s=i.y+window.pageYOffset,r=i.y+i.height+window.pageYOffset;if(t>r||n<s)return 0;if(t<s&&n>r)return 100;if(s<t&&r>n)return 100;let o=i.height;s<t&&(o-=window.pageYOffset-s),r>n&&(o-=r-n);const a=o/window.innerHeight*100;return Math.round(a)},$=!("undefined"==typeof window||!window.document||!window.document.createElement);let V;const G=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'].join(","),Y=e=>{if(e&&$){void 0===V&&document.createElement("div").focus({get preventScroll(){return V=!0,!1}});try{if(V)e.focus({preventScroll:!0});else{const t=window.pageXOffset||document.body.scrollTop,n=window.pageYOffset||document.body.scrollLeft;e.focus(),document.body.scrollTo({top:t,left:n,behavior:"auto"})}}catch(e){}}},K={dragToClose:!0,hideScrollbar:!0,Carousel:{classes:{container:"fancybox__carousel",viewport:"fancybox__viewport",track:"fancybox__track",slide:"fancybox__slide"}},contentClick:"toggleZoom",contentDblClick:!1,backdropClick:"close",animated:!0,idle:3500,showClass:"f-zoomInUp",hideClass:"f-fadeOut",commonCaption:!1,parentEl:null,startIndex:0,l10n:Object.assign(Object.assign({},C),{CLOSE:"Close",NEXT:"Next",PREV:"Previous",MODAL:"You can close this modal content with the ESC key",ERROR:"Something Went Wrong, Please Try Again Later",IMAGE_ERROR:"Image Not Found",ELEMENT_NOT_FOUND:"HTML Element Not Found",AJAX_NOT_FOUND:"Error Loading AJAX : Not Found",AJAX_FORBIDDEN:"Error Loading AJAX : Forbidden",IFRAME_ERROR:"Error Loading Page",TOGGLE_ZOOM:"Toggle zoom level",TOGGLE_THUMBS:"Toggle thumbnails",TOGGLE_SLIDESHOW:"Toggle slideshow",TOGGLE_FULLSCREEN:"Toggle full-screen mode",DOWNLOAD:"Download"}),tpl:{closeButton:'<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',main:'<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>'},groupAll:!1,groupAttr:"data-fancybox",defaultType:"image",defaultDisplay:"block",autoFocus:!0,trapFocus:!0,placeFocusBack:!0,closeButton:"auto",keyboard:{Escape:"close",Delete:"close",Backspace:"close",PageUp:"next",PageDown:"prev",ArrowUp:"prev",ArrowDown:"next",ArrowRight:"next",ArrowLeft:"prev"},Fullscreen:{autoStart:!1},compact:()=>window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,wheel:"zoom"};var X,J,Z,Q;(Q=X||(X={}))[Q.Init=0]="Init",Q[Q.Ready=1]="Ready",Q[Q.Closing=2]="Closing",Q[Q.CustomClosing=3]="CustomClosing",Q[Q.Destroy=4]="Destroy",(Z=J||(J={}))[Z.Loading=0]="Loading",Z[Z.Opening=1]="Opening",Z[Z.Ready=2]="Ready",Z[Z.Closing=3]="Closing";const ee=()=>{queueMicrotask((()=>{(()=>{const{slug:e,index:t}=te.parseURL(),n=Se.getInstance();if(n&&!1!==n.option("Hash")){const i=n.carousel;if(e&&i){for(let t of i.slides)if(t.slug&&t.slug===e)return i.slideTo(t.index);if(e===n.option("slug"))return i.slideTo(t-1);const s=n.getSlide(),r=s&&s.triggerEl&&s.triggerEl.dataset;if(r&&r.fancybox===e)return i.slideTo(t-1)}te.hasSilentClose=!0,n.close()}te.startFromUrl()})()}))};class te extends j{constructor(){super(...arguments),Object.defineProperty(this,"origHash",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"timer",{enumerable:!0,configurable:!0,writable:!0,value:null})}onChange(){const e=this.instance,t=e.carousel;this.timer&&clearTimeout(this.timer);const n=e.getSlide();if(!t||!n)return;const i=e.isOpeningSlide(n),s=new URL(document.URL).hash;let r,o=n.slug||void 0;r=o||this.instance.option("slug"),!r&&n.triggerEl&&n.triggerEl.dataset&&(r=n.triggerEl.dataset.fancybox);let a="";r&&"true"!==r&&(a="#"+r+(!o&&t.slides.length>1?"-"+(n.index+1):"")),i&&(this.origHash=s!==a?s:""),a&&s!==a&&(this.timer=setTimeout((()=>{try{window.history[i?"pushState":"replaceState"]({},document.title,window.location.pathname+window.location.search+a)}catch(e){}}),300))}onClose(){if(this.timer&&clearTimeout(this.timer),!0!==te.hasSilentClose)try{window.history.replaceState({},document.title,window.location.pathname+window.location.search+(this.origHash||""))}catch(e){}}attach(){this.instance.on("Carousel.ready",this.onChange),this.instance.on("Carousel.change",this.onChange),this.instance.on("close",this.onClose)}detach(){this.instance.off("Carousel.ready",this.onChange),this.instance.off("Carousel.change",this.onChange),this.instance.off("close",this.onClose)}static parseURL(){const e=window.location.hash.slice(1),t=e.split("-"),n=t[t.length-1],i=n&&/^\+?\d+$/.test(n)&&parseInt(t.pop()||"1",10)||1;return{hash:e,slug:t.join("-"),index:i}}static startFromUrl(){if(te.hasSilentClose=!1,Se.getInstance()||!1===Se.defaults.Hash)return;const{hash:e,slug:t,index:n}=te.parseURL();if(!t)return;let i=document.querySelector(`[data-slug="${e}"]`);if(i&&i.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})),Se.getInstance())return;const s=document.querySelectorAll(`[data-fancybox="${t}"]`);s.length&&(i=s[n-1],i&&i.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})))}static destroy(){window.removeEventListener("hashchange",ee,!1)}}function ne(){window.addEventListener("hashchange",ee,!1),setTimeout((()=>{te.startFromUrl()}),500)}Object.defineProperty(te,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(te,"hasSilentClose",{enumerable:!0,configurable:!0,writable:!0,value:!1}),$&&(/complete|interactive|loaded/.test(document.readyState)?ne():document.addEventListener("DOMContentLoaded",ne));class ie extends j{onCreateSlide(e,t,n){const i=this.instance,s=i.optionFor(n,"src")||"",{el:r,type:o}=n;r&&"image"===o&&"string"==typeof s&&this.setContent(n,s).then((e=>{const t=n.contentEl,s=n.imageEl,o=n.thumbElSrc;if(i.isClosing()||!t||!s)return;t.offsetHeight;const a=!!i.isOpeningSlide(n)&&this.getZoomInfo(n);if(this.option("protected")){r.addEventListener("contextmenu",(e=>{e.preventDefault()}));const e=document.createElement("div");x(e,"fancybox-protected"),t.appendChild(e)}if(o&&a){const s=e.contentRect,r=Math.max(s.fullWidth,s.fullHeight);let c=null;!a.opacity&&r>1200&&(c=document.createElement("img"),x(c,"fancybox-ghost"),c.src=o,t.appendChild(c));const h=()=>{c&&(x(c,"f-fadeFastOut"),setTimeout((()=>{c&&(c.remove(),c=null)}),200))};(l=o,new Promise(((e,t)=>{const n=new Image;n.onload=e,n.onerror=t,n.src=l}))).then((()=>{n.state=J.Opening,this.instance.emit("reveal",n),this.zoomIn(n).then((()=>{h(),this.instance.done(n)}),(()=>{i.hideLoading(n)})),c&&setTimeout((()=>{h()}),r>2500?800:200)}),(()=>{i.hideLoading(n),i.revealContent(n)}))}else{const t=this.optionFor(n,"initialSize"),s=this.optionFor(n,"zoom"),r={event:i.prevMouseMoveEvent||i.options.event,friction:s?.12:0};let o=i.optionFor(n,"showClass")||void 0,a=!0;i.isOpeningSlide(n)&&("full"===t?e.zoomToFull(r):"cover"===t?e.zoomToCover(r):"max"===t?e.zoomToMax(r):a=!1,e.stop("current")),a&&o&&(o=e.isDragging?"f-fadeIn":""),i.revealContent(n,o)}var l}),(()=>{i.setError(n,"{{IMAGE_ERROR}}")}))}onRemoveSlide(e,t,n){n.panzoom&&n.panzoom.destroy(),n.panzoom=void 0,n.imageEl=void 0}onChange(e,t,n,i){for(const e of t.slides){const t=e.panzoom;t&&e.index!==n&&t.reset(.35)}}onClose(){const e=this.instance,t=e.container,n=e.getSlide();if(!t||!t.parentElement||!n)return;const{el:i,contentEl:s,panzoom:r}=n,o=n.thumbElSrc;if(!i||!o||!s||!r||r.isContentLoading||r.state===y.Init||r.state===y.Destroy)return;r.updateMetrics();let a=this.getZoomInfo(n);if(!a)return;this.instance.state=X.CustomClosing,t.classList.remove("is-zooming-in"),t.classList.add("is-zooming-out"),s.style.backgroundImage=`url('${o}')`;const l=t.getBoundingClientRect();Object.assign(t.style,{position:"absolute",top:`${window.pageYOffset}px`,left:`${window.pageXOffset}px`,bottom:"auto",right:"auto",width:`${l.width}px`,height:`${l.height}px`,overflow:"hidden"});const{x:c,y:h,scale:u,opacity:d}=a;if(d){const e=((e,t,n,i)=>{const s=t-e;return t=>1+((t-e)/s*-1||0)})(r.scale,u);r.on("afterTransform",(()=>{s.style.opacity=e(r.scale)+""}))}r.on("endAnimation",(()=>{e.destroy()})),r.target.a=u,r.target.b=0,r.target.c=0,r.target.d=u,r.panTo({x:c,y:h,scale:u,friction:d?.2:.33,ignoreBounds:!0}),r.isResting&&e.destroy()}setContent(e,t){return new Promise(((n,i)=>{var s,r;const a=this.instance,l=e.el;if(!l)return void i();a.showLoading(e);let c=this.optionFor(e,"content");"string"==typeof c&&(c=o(c)),c&&I(c)||(c=document.createElement("img"),c instanceof HTMLImageElement&&(c.src=t||"",c.alt=(null===(s=e.caption)||void 0===s?void 0:s.replace(/<[^>]+>/gi,"").substring(0,1e3))||`Image ${e.index+1} of ${null===(r=a.carousel)||void 0===r?void 0:r.pages.length}`,c.draggable=!1,e.srcset&&c.setAttribute("srcset",e.srcset)),e.sizes&&c.setAttribute("sizes",e.sizes)),c.classList.add("fancybox-image"),e.imageEl=c,a.setContent(e,c,!1),e.panzoom=new R(l,m({},this.option("Panzoom")||{},{content:c,width:a.optionFor(e,"width","auto"),height:a.optionFor(e,"height","auto"),wheel:()=>{const e=a.option("wheel");return("zoom"===e||"pan"==e)&&e},click:(t,n)=>{var i,s;if(a.isCompact||a.isClosing())return!1;if(e.index!==(null===(i=a.getSlide())||void 0===i?void 0:i.index))return!1;let r=!n||n.target&&(null===(s=e.contentEl)||void 0===s?void 0:s.contains(n.target));return a.option(r?"contentClick":"backdropClick")||!1},dblClick:()=>a.isCompact?"toggleZoom":a.option("contentDblClick")||!1,spinner:!1,panOnlyZoomed:!0,wheelLimit:1/0,transformParent:!0,on:{ready:e=>{n(e)},error:()=>{i()},destroy:()=>{i()}}}))}))}zoomIn(e){return new Promise(((t,n)=>{const i=this.instance,s=i.container,{panzoom:r,contentEl:o,el:a}=e;r&&r.updateMetrics();const l=this.getZoomInfo(e);if(!(l&&a&&o&&r&&s))return void n();const{x:c,y:h,scale:u,opacity:d}=l,p=()=>{e.state!==J.Closing&&(d&&(o.style.opacity=Math.max(Math.min(1,1-(1-r.scale)/(1-u)),0)+""),r.scale>=1&&r.scale>r.targetScale-.1&&t(r))},f=e=>{S(s,"is-zooming-in"),e.scale<.99||e.scale>1.01||(o.style.opacity="",e.off("endAnimation",f),e.off("touchStart",f),e.off("afterTransform",p),t(e))};r.on("endAnimation",f),r.on("touchStart",f),r.on("afterTransform",p),r.on(["error","destroy"],(()=>{n()})),r.panTo({x:c,y:h,scale:u,friction:0,ignoreBounds:!0}),r.stop("current");const m={event:"mousemove"===r.panMode?i.prevMouseMoveEvent||i.options.event:void 0},g=this.optionFor(e,"initialSize");x(s,"is-zooming-in"),i.hideLoading(e),"full"===g?r.zoomToFull(m):"cover"===g?r.zoomToCover(m):"max"===g?r.zoomToMax(m):r.reset(.172)}))}getZoomInfo(e){const{el:t,imageEl:n,thumbEl:i,panzoom:s}=e;if(!t||!n||!i||!s||W(i)<3||!this.optionFor(e,"zoom")||this.instance.state===X.Destroy)return!1;const{top:r,left:o,width:a,height:l}=i.getBoundingClientRect();let{top:c,left:h,fitWidth:u,fitHeight:d}=s.contentRect;if(!(a&&l&&u&&d))return!1;const p=a/u,f=s.container.getBoundingClientRect();c+=f.top,h+=f.left;const m=-1*(h+.5*u-(o+.5*a)),g=-1*(c+.5*d-(r+.5*l));let v=this.option("zoomOpacity")||!1;return"auto"===v&&(v=Math.abs(a/l-u/d)>.1),{x:m,y:g,scale:p,opacity:v}}attach(){this.instance.on("Carousel.change",this.onChange),this.instance.on("Carousel.createSlide",this.onCreateSlide),this.instance.on("Carousel.removeSlide",this.onRemoveSlide),this.instance.on("close",this.onClose)}detach(){this.instance.off("Carousel.change",this.onChange),this.instance.off("Carousel.createSlide",this.onCreateSlide),this.instance.off("Carousel.removeSlide",this.onRemoveSlide),this.instance.off("close",this.onClose)}}Object.defineProperty(ie,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{initialSize:"fit",Panzoom:{maxScale:1},protected:!1,zoom:!0,zoomOpacity:"auto"}});const se=(e,t={})=>{const n=new URL(e),i=new URLSearchParams(n.search),s=new URLSearchParams;for(const[e,n]of[...i,...Object.entries(t)]){let t=n.toString();"t"===e?s.set("start",parseInt(t).toString()):s.set(e,t)}let r=s.toString(),o=e.match(/#t=((.*)?\d+s)/);return o&&(r+=`#t=${o[1]}`),r},re=["image","html","ajax","inline","clone","iframe","map","pdf","html5video","youtube","vimeo","video"];class oe extends j{onInitSlide(e,t,n){this.processType(n)}onCreateSlide(e,t,n){this.setContent(n)}onRemoveSlide(e,t,n){n.closeBtnEl&&(n.closeBtnEl.remove(),n.closeBtnEl=void 0),n.xhr&&(n.xhr.abort(),n.xhr=null),n.iframeEl&&(n.iframeEl.onload=n.iframeEl.onerror=null,n.iframeEl.src="//about:blank",n.iframeEl=null);const i=n.contentEl,s=n.placeholderEl;if("inline"===n.type&&i&&s)i.classList.remove("fancybox__content"),"none"!==i.style.display&&(i.style.display="none"),s.parentNode&&s.parentNode.insertBefore(i,s),s.remove(),n.placeholderEl=null;else for(;n.el&&n.el.firstChild;)n.el.removeChild(n.el.firstChild)}onSelectSlide(e,t,n){n.state===J.Ready&&this.playVideo()}onUnselectSlide(e,t,n){var i,s;if("html5video"===n.type){try{null===(s=null===(i=n.el)||void 0===i?void 0:i.querySelector("video"))||void 0===s||s.pause()}catch(e){}return}let r;"vimeo"===n.type?r={method:"pause",value:"true"}:"youtube"===n.type&&(r={event:"command",func:"pauseVideo"}),r&&n.iframeEl&&n.iframeEl.contentWindow&&n.iframeEl.contentWindow.postMessage(JSON.stringify(r),"*"),n.poller&&clearTimeout(n.poller)}onDone(e,t){e.isCurrentSlide(t)&&!e.isClosing()&&this.playVideo()}onRefresh(e,t){t.slides.forEach((e=>{e.el&&(this.setAspectRatio(e),this.resizeIframe(e))}))}onMessage(e){try{let t=JSON.parse(e.data);if("https://player.vimeo.com"===e.origin){if("ready"===t.event)for(let t of Array.from(document.getElementsByClassName("fancybox__iframe")))t instanceof HTMLIFrameElement&&t.contentWindow===e.source&&(t.dataset.ready="true")}else if(e.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/)&&"onReady"===t.event){const e=document.getElementById(t.id);e&&(e.dataset.ready="true")}}catch(e){}}loadAjaxContent(e){const t=this.instance.optionFor(e,"src")||"";this.instance.showLoading(e);const n=this.instance,i=new XMLHttpRequest;n.showLoading(e),i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&n.state===X.Ready&&(n.hideLoading(e),200===i.status?n.setContent(e,i.responseText):n.setError(e,404===i.status?"{{AJAX_NOT_FOUND}}":"{{AJAX_FORBIDDEN}}"))};const s=e.ajax||null;i.open(s?"POST":"GET",t+""),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.send(s),e.xhr=i}setInlineContent(e){let t=null;if(I(e.src))t=e.src;else if("string"==typeof e.src){const n=e.src.split("#",2).pop();t=n?document.getElementById(n):null}if(t){if("clone"===e.type||t.closest(".fancybox__slide")){t=t.cloneNode(!0);const n=t.dataset.animationName;n&&(t.classList.remove(n),delete t.dataset.animationName);let i=t.getAttribute("id");i=i?`${i}--clone`:`clone-${this.instance.id}-${e.index}`,t.setAttribute("id",i)}else if(t.parentNode){const n=document.createElement("div");n.classList.add("fancybox-placeholder"),t.parentNode.insertBefore(n,t),e.placeholderEl=n}this.instance.setContent(e,t)}else this.instance.setError(e,"{{ELEMENT_NOT_FOUND}}")}setIframeContent(e){const{src:t,el:n}=e;if(!t||"string"!=typeof t||!n)return;const i=this.instance,s=document.createElement("iframe");s.className="fancybox__iframe",s.setAttribute("id",`fancybox__iframe_${i.id}_${e.index}`);for(const[t,n]of Object.entries(this.optionFor(e,"iframeAttr")||{}))s.setAttribute(t,n);s.onerror=()=>{i.setError(e,"{{IFRAME_ERROR}}")},e.iframeEl=s;const r=this.optionFor(e,"preload");if(n.classList.add("is-loading"),"iframe"!==e.type||!1===r)return s.setAttribute("src",e.src+""),this.resizeIframe(e),void i.setContent(e,s);i.showLoading(e),s.onload=()=>{if(!s.src.length)return;const t="true"!==s.dataset.ready;s.dataset.ready="true",this.resizeIframe(e),t?i.revealContent(e):i.hideLoading(e)},s.setAttribute("src",t),i.setContent(e,s,!1)}resizeIframe(e){const t=e.iframeEl,n=null==t?void 0:t.parentElement;if(!t||!n)return;let i=e.autoSize,s=e.width||0,r=e.height||0;s&&r&&(i=!1);const o=n&&n.style;if(!1!==e.preload&&!1!==i&&o)try{const e=window.getComputedStyle(n),i=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight),a=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom),l=t.contentWindow;if(l){const e=l.document,t=e.getElementsByTagName("html")[0],n=e.body;o.width="",n.style.overflow="hidden",s=s||t.scrollWidth+i,o.width=`${s}px`,n.style.overflow="",o.flex="0 0 auto",o.height=`${n.scrollHeight}px`,r=t.scrollHeight+a}}catch(e){}if(s||r){const e={flex:"0 1 auto",width:"",height:""};s&&(e.width=`${s}px`),r&&(e.height=`${r}px`),Object.assign(o,e)}}playVideo(){const e=this.instance.getSlide();if(!e)return;const{el:t}=e;if(!t||!t.offsetParent)return;if(!this.optionFor(e,"videoAutoplay"))return;if("html5video"===e.type)try{const e=t.querySelector("video");if(e){const t=e.play();void 0!==t&&t.then((()=>{})).catch((t=>{e.muted=!0,e.play()}))}}catch(e){}if("youtube"!==e.type&&"vimeo"!==e.type)return;const n=()=>{if(e.iframeEl&&e.iframeEl.contentWindow){let t;if("true"===e.iframeEl.dataset.ready)return t="youtube"===e.type?{event:"command",func:"playVideo"}:{method:"play",value:"true"},t&&e.iframeEl.contentWindow.postMessage(JSON.stringify(t),"*"),void(e.poller=void 0);"youtube"===e.type&&(t={event:"listening",id:e.iframeEl.getAttribute("id")},e.iframeEl.contentWindow.postMessage(JSON.stringify(t),"*"))}e.poller=setTimeout(n,250)};n()}processType(e){if(e.html)return e.type="html",e.src=e.html,void(e.html="");const t=this.instance.optionFor(e,"src","");if(!t||"string"!=typeof t)return;let n=e.type,i=null;if(i=t.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)){const s=this.optionFor(e,"youtube"),{nocookie:r}=s,o=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n}(s,["nocookie"]),a=`www.youtube${r?"-nocookie":""}.com`,l=se(t,o),c=encodeURIComponent(i[2]);e.videoId=c,e.src=`https://${a}/embed/${c}?${l}`,e.thumbSrc=e.thumbSrc||`https://i.ytimg.com/vi/${c}/mqdefault.jpg`,n="youtube"}else if(i=t.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)){const s=se(t,this.optionFor(e,"vimeo")),r=encodeURIComponent(i[1]),o=i[4]||"";e.videoId=r,e.src=`https://player.vimeo.com/video/${r}?${o?`h=${o}${s?"&":""}`:""}${s}`,n="vimeo"}if(!n&&e.triggerEl){const t=e.triggerEl.dataset.type;re.includes(t)&&(n=t)}n||"string"==typeof t&&("#"===t.charAt(0)?n="inline":(i=t.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(n="html5video",e.videoFormat=e.videoFormat||"video/"+("ogv"===i[1]?"ogg":i[1])):t.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?n="image":t.match(/\.(pdf)((\?|#).*)?$/i)?n="pdf":(i=t.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i))?(e.src=`https://maps.google.${i[1]}/?ll=${(i[2]?i[2]+"&z="+Math.floor(parseFloat(i[3]))+(i[4]?i[4].replace(/^\//,"&"):""):i[4]+"").replace(/\?/,"&")}&output=${i[4]&&i[4].indexOf("layer=c")>0?"svembed":"embed"}`,n="map"):(i=t.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i))&&(e.src=`https://maps.google.${i[1]}/maps?q=${i[2].replace("query=","q=").replace("api=1","")}&output=embed`,n="map")),n=n||this.instance.option("defaultType"),e.type=n,"image"===n&&(e.thumbSrc=e.thumbSrc||e.src)}setContent(e){const t=this.instance.optionFor(e,"src")||"";if(e&&e.type&&t){switch(e.type){case"html":this.instance.setContent(e,t);break;case"html5video":const n=this.option("videoTpl");n&&this.instance.setContent(e,n.replace(/\{\{src\}\}/gi,t+"").replace(/\{\{format\}\}/gi,this.optionFor(e,"videoFormat")||"").replace(/\{\{poster\}\}/gi,e.poster||e.thumbSrc||""));break;case"inline":case"clone":this.setInlineContent(e);break;case"ajax":this.loadAjaxContent(e);break;case"pdf":case"map":case"youtube":case"vimeo":e.preload=!1;case"iframe":this.setIframeContent(e)}this.setAspectRatio(e)}}setAspectRatio(e){var t;const n=e.contentEl,i=this.optionFor(e,"videoRatio"),s=null===(t=e.el)||void 0===t?void 0:t.getBoundingClientRect();if(!(n&&s&&i&&1!==i&&e.type&&["video","youtube","vimeo","html5video"].includes(e.type)))return;const r=s.width,o=s.height;n.style.aspectRatio=i+"",n.style.width=r/o>i?"auto":"",n.style.height=r/o>i?"":"auto"}attach(){this.instance.on("Carousel.initSlide",this.onInitSlide),this.instance.on("Carousel.createSlide",this.onCreateSlide),this.instance.on("Carousel.removeSlide",this.onRemoveSlide),this.instance.on("Carousel.selectSlide",this.onSelectSlide),this.instance.on("Carousel.unselectSlide",this.onUnselectSlide),this.instance.on("Carousel.Panzoom.refresh",this.onRefresh),this.instance.on("done",this.onDone),window.addEventListener("message",this.onMessage)}detach(){this.instance.off("Carousel.initSlide",this.onInitSlide),this.instance.off("Carousel.createSlide",this.onCreateSlide),this.instance.off("Carousel.removeSlide",this.onRemoveSlide),this.instance.off("Carousel.selectSlide",this.onSelectSlide),this.instance.off("Carousel.unselectSlide",this.onUnselectSlide),this.instance.off("Carousel.Panzoom.refresh",this.onRefresh),this.instance.off("done",this.onDone),window.removeEventListener("message",this.onMessage)}}Object.defineProperty(oe,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{ajax:null,autoSize:!0,preload:!0,iframeAttr:{allow:"autoplay; fullscreen",scrolling:"auto"},videoAutoplay:!0,videoRatio:16/9,videoTpl:'<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',videoFormat:"",vimeo:{byline:1,color:"00adef",controls:1,dnt:1,muted:0},youtube:{controls:1,enablejsapi:1,nocookie:1,rel:0,fs:1}}});class ae extends j{constructor(){super(...arguments),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:"ready"}),Object.defineProperty(this,"inHover",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"timer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"progressBar",{enumerable:!0,configurable:!0,writable:!0,value:null})}get isActive(){return"ready"!==this.state}onReady(e){this.option("autoStart")&&(e.isInfinite||e.page<e.pages.length-1)&&this.start()}onChange(){var e;(null===(e=this.instance.panzoom)||void 0===e?void 0:e.isResting)||(this.removeProgressBar(),this.pause())}onSettle(){this.resume()}onVisibilityChange(){"visible"===document.visibilityState?this.resume():this.pause()}onMouseEnter(){this.inHover=!0,this.pause()}onMouseLeave(){var e;this.inHover=!1,(null===(e=this.instance.panzoom)||void 0===e?void 0:e.isResting)&&this.resume()}onTimerEnd(){"play"===this.state&&(this.instance.isInfinite||this.instance.page!==this.instance.pages.length-1?this.instance.slideNext():this.instance.slideTo(0))}removeProgressBar(){this.progressBar&&(this.progressBar.remove(),this.progressBar=null)}createProgressBar(){var e;if(!this.option("showProgress"))return null;this.removeProgressBar();const t=this.instance,n=(null===(e=t.pages[t.page])||void 0===e?void 0:e.slides)||[];let i=this.option("progressParentEl");if(i||(i=(1===n.length?n[0].el:null)||t.viewport),!i)return null;const s=document.createElement("div");return x(s,"f-progress"),i.prepend(s),this.progressBar=s,s.offsetHeight,s}set(){if(this.instance.pages.length<2)return;if(this.progressBar)return;const e=this.option("timeout");this.state="play",x(this.instance.container,"has-autoplay");let t=this.createProgressBar();t&&(t.style.transitionDuration=`${e}ms`,t.style.transform="scaleX(1)"),this.timer=setTimeout((()=>{this.timer=null,this.inHover||this.onTimerEnd()}),e),this.emit("set")}clear(){this.timer&&(clearTimeout(this.timer),this.timer=null),this.removeProgressBar()}start(){if(this.set(),this.option("pauseOnHover")){const e=this.instance.container;e.addEventListener("mouseenter",this.onMouseEnter,!1),e.addEventListener("mouseleave",this.onMouseLeave,!1)}document.addEventListener("visibilitychange",this.onVisibilityChange,!1)}stop(){const e=this.instance.container;this.clear(),this.state="ready",e.removeEventListener("mouseenter",this.onMouseEnter,!1),e.removeEventListener("mouseleave",this.onMouseLeave,!1),document.removeEventListener("visibilitychange",this.onVisibilityChange,!1),S(e,"has-autoplay"),this.emit("stop")}pause(){"play"===this.state&&(this.state="pause",this.clear(),this.emit("pause"))}resume(){const e=this.instance;if(e.isInfinite||e.page!==e.pages.length-1)if("play"!==this.state){if("pause"===this.state&&!this.inHover){const e=new Event("resume",{bubbles:!0,cancelable:!0});this.emit("resume",event),e.defaultPrevented||this.set()}}else this.set();else this.stop()}toggle(){"play"===this.state||"pause"===this.state?this.stop():this.set()}attach(){this.instance.on("ready",this.onReady),this.instance.on("Panzoom.startAnimation",this.onChange),this.instance.on("Panzoom.endAnimation",this.onSettle),this.instance.on("Panzoom.touchMove",this.onChange)}detach(){this.instance.off("ready",this.onReady),this.instance.off("Panzoom.startAnimation",this.onChange),this.instance.off("Panzoom.endAnimation",this.onSettle),this.instance.off("Panzoom.touchMove",this.onChange),this.stop()}}Object.defineProperty(ae,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{autoStart:!0,pauseOnHover:!0,progressParentEl:null,showProgress:!0,timeout:3e3}});class le extends j{constructor(){super(...arguments),Object.defineProperty(this,"ref",{enumerable:!0,configurable:!0,writable:!0,value:null})}onPrepare(e){const t=e.carousel;if(!t)return;const n=e.container;n&&(t.options.Autoplay=m(this.option("Autoplay")||{},{pauseOnHover:!1,autoStart:!1,timeout:this.option("timeout"),progressParentEl:()=>n.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]")||n,on:{set:t=>{var i;n.classList.add("has-slideshow"),(null===(i=e.getSlide())||void 0===i?void 0:i.state)!==J.Ready&&t.pause()},stop:()=>{n.classList.remove("has-slideshow"),e.isCompact||e.endIdle()},resume:(t,n)=>{var i,s,r;!n||!n.cancelable||(null===(i=e.getSlide())||void 0===i?void 0:i.state)===J.Ready&&(null===(r=null===(s=e.carousel)||void 0===s?void 0:s.panzoom)||void 0===r?void 0:r.isResting)||n.preventDefault()}}}),t.attachPlugins({Autoplay:ae}),this.ref=t.plugins.Autoplay)}onReady(e){const t=e.carousel,n=this.ref;t&&n&&this.option("playOnStart")&&(t.isInfinite||t.page<t.pages.length-1)&&n.start()}onDone(e,t){const n=this.ref;if(!n)return;const i=t.panzoom;i&&i.on("startAnimation",(()=>{e.isCurrentSlide(t)&&n.stop()})),e.isCurrentSlide(t)&&n.resume()}onKeydown(e,t){var n;const i=this.ref;i&&t===this.option("key")&&"BUTTON"!==(null===(n=document.activeElement)||void 0===n?void 0:n.nodeName)&&i.toggle()}attach(){this.instance.on("Carousel.init",this.onPrepare),this.instance.on("Carousel.ready",this.onReady),this.instance.on("done",this.onDone),this.instance.on("keydown",this.onKeydown)}detach(){this.instance.off("Carousel.init",this.onPrepare),this.instance.off("Carousel.ready",this.onReady),this.instance.off("done",this.onDone),this.instance.off("keydown",this.onKeydown)}}Object.defineProperty(le,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{key:" ",playOnStart:!1,timeout:3e3}});const ce={classes:{container:"f-thumbs f-carousel__thumbs",viewport:"f-thumbs__viewport",track:"f-thumbs__track",slide:"f-thumbs__slide",isResting:"is-resting",isSelected:"is-selected",isLoading:"is-loading",hasThumbs:"has-thumbs"},minCount:2,parentEl:null,thumbTpl:'<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',type:"modern"};var he,ue;(ue=he||(he={}))[ue.Init=0]="Init",ue[ue.Ready=1]="Ready",ue[ue.Hidden=2]="Hidden",ue[ue.Disabled=3]="Disabled";let de=class extends j{constructor(){super(...arguments),Object.defineProperty(this,"type",{enumerable:!0,configurable:!0,writable:!0,value:"modern"}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"track",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"carousel",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"panzoom",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"thumbWidth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbClipWidth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbHeight",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbGap",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbExtraGap",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"shouldCenter",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:he.Init})}formatThumb(e,t){return this.instance.localize(t,[["%i",e.index],["%d",e.index+1],["%s",e.thumbSrc||"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]])}getSlides(){const e=[],t=this.option("thumbTpl")||"";if(t)for(const n of this.instance.slides||[]){let i="";n.type&&(i=`for-${n.type}`,n.type&&["video","youtube","vimeo","html5video"].includes(n.type)&&(i+=" for-video")),e.push({html:this.formatThumb(n,t),customClass:i})}return e}onInitSlide(e,t){const n=t.el;n&&(t.thumbSrc=n.dataset.thumbSrc||t.thumbSrc||"",t.thumbClipWidth=parseFloat(n.dataset.thumbClipWidth||"")||t.thumbClipWidth||0,t.thumbHeight=parseFloat(n.dataset.thumbHeight||"")||t.thumbHeight||0)}onInitSlides(){this.state===he.Init&&this.build()}onRefreshM(){this.refreshModern()}onChangeM(){"modern"===this.type&&(this.shouldCenter=!0,this.centerModern())}onClickModern(e){e.preventDefault(),e.stopPropagation();const t=this.instance,n=t.page,i=e=>{if(e){const t=e.closest("[data-carousel-index]");if(t)return parseInt(t.dataset.carouselIndex||"",10)||0}return-1},s=(e,t)=>{const n=document.elementFromPoint(e,t);return n?i(n):-1};let r=i(e.target);r<0&&(r=s(e.clientX+this.thumbGap,e.clientY),r===n&&(r=n-1)),r<0&&(r=s(e.clientX-this.thumbGap,e.clientY),r===n&&(r=n+1)),r<0&&(r=(t=>{let i=s(e.clientX-t,e.clientY),o=s(e.clientX+t,e.clientY);return r<0&&i===n&&(r=n+1),r<0&&o===n&&(r=n-1),r})(this.thumbExtraGap)),r===n?this.centerModern():r>-1&&r<t.pages.length&&t.slideTo(r)}onTransformM(){if("modern"!==this.type)return;const{instance:e,container:t,track:n}=this,i=e.panzoom;if(!(t&&n&&i&&this.panzoom))return;l(t,this.cn("isResting"),i.state!==y.Init&&i.isResting);const s=this.thumbGap,r=this.thumbExtraGap,o=this.thumbClipWidth;let a=0,c=0,h=0;for(const t of e.slides){let n=t.index,i=t.thumbSlideEl;if(!i)continue;l(i,this.cn("isSelected"),n===e.page),c=1-Math.abs(e.getProgress(n)),i.style.setProperty("--progress",c?c+"":"");const u=.5*((t.thumbWidth||0)-o);a+=s,a+=u,c&&(a-=c*(u+r)),i.style.setProperty("--shift",a-s+""),a+=u,c&&(a-=c*(u+r)),a-=s,0===n&&(h=r*c)}n&&(n.style.setProperty("--left",h+""),n.style.setProperty("--width",a+h+s+r*c+"")),this.shouldCenter&&this.centerModern()}buildClassic(){const{container:e,track:t}=this,n=this.getSlides();if(!e||!t||!n)return;const i=new this.instance.constructor(e,m({track:t,infinite:!1,center:!0,fill:!0,dragFree:!0,slidesPerPage:1,transition:!1,Dots:!1,Navigation:!1,Sync:{},classes:{container:"f-thumbs",viewport:"f-thumbs__viewport",track:"f-thumbs__track",slide:"f-thumbs__slide"}},this.option("Carousel")||{},{Sync:{target:this.instance},slides:n}));this.carousel=i,this.track=t,i.on("ready",(()=>{this.emit("ready")}))}buildModern(){if("modern"!==this.type)return;const{container:e,track:t,instance:n}=this,i=this.option("thumbTpl")||"";if(!e||!t||!i)return;x(e,"is-horizontal"),this.updateModern();for(const e of n.slides||[]){const n=document.createElement("div");if(x(n,this.cn("slide")),e.type){let t=`for-${e.type}`;["video","youtube","vimeo","html5video"].includes(e.type)&&(t+=" for-video"),x(n,t)}n.appendChild(o(this.formatThumb(e,i))),e.thumbSlideEl=n,t.appendChild(n),this.resizeModernSlide(e)}const s=new n.constructor.Panzoom(e,{content:t,lockAxis:"x",zoom:!1,panOnlyZoomed:!1,bounds:()=>{let e=0,t=0,i=n.slides[0],s=n.slides[n.slides.length-1],r=n.slides[n.page];return i&&s&&r&&(t=-1*this.getModernThumbPos(0),0!==n.page&&(t+=.5*(i.thumbWidth||0)),e=-1*this.getModernThumbPos(n.slides.length-1),n.page!==n.slides.length-1&&(e+=(s.thumbWidth||0)-(r.thumbWidth||0)-.5*(s.thumbWidth||0))),{x:{min:e,max:t},y:{min:0,max:0}}}});s.on("touchStart",((e,t)=>{this.shouldCenter=!1})),s.on("click",((e,t)=>this.onClickModern(t))),s.on("ready",(()=>{this.centerModern(),this.emit("ready")})),s.on(["afterTransform","refresh"],(e=>{this.lazyLoadModern()})),this.panzoom=s,this.refreshModern()}updateModern(){if("modern"!==this.type)return;const{container:e}=this;e&&(this.thumbGap=parseFloat(getComputedStyle(e).getPropertyValue("--f-thumb-gap"))||0,this.thumbExtraGap=parseFloat(getComputedStyle(e).getPropertyValue("--f-thumb-extra-gap"))||0,this.thumbWidth=parseFloat(getComputedStyle(e).getPropertyValue("--f-thumb-width"))||40,this.thumbClipWidth=parseFloat(getComputedStyle(e).getPropertyValue("--f-thumb-clip-width"))||40,this.thumbHeight=parseFloat(getComputedStyle(e).getPropertyValue("--f-thumb-height"))||40)}refreshModern(){var e;if("modern"===this.type){this.updateModern();for(const e of this.instance.slides||[])this.resizeModernSlide(e);this.onTransformM(),null===(e=this.panzoom)||void 0===e||e.updateMetrics(!0),this.centerModern(0)}}centerModern(e){const t=this.instance,{container:n,panzoom:s}=this;if(!n||!s||s.state===y.Init)return;const r=t.page;let o=this.getModernThumbPos(r),a=o;for(let e=t.page-3;e<t.page+3;e++){if(e<0||e>t.pages.length-1||e===t.page)continue;const n=1-Math.abs(t.getProgress(e));n>0&&n<1&&(a+=n*(this.getModernThumbPos(e)-o))}let l=100;void 0===e&&(e=.2,t.inTransition.size>0&&(e=.12),Math.abs(-1*s.current.e-a)>s.containerRect.width&&(e=.5,l=0)),s.options.maxVelocity=l,s.applyChange({panX:i(-1*a-s.target.e,1e3),friction:null===t.prevPage?0:e})}lazyLoadModern(){const{instance:e,panzoom:t}=this;if(!t)return;const n=-1*t.current.e||0;let i=this.getModernThumbPos(e.page);if(t.state!==y.Init||0===i)for(const i of e.slides||[]){const e=i.thumbSlideEl;if(!e)continue;const s=e.querySelector("img[data-lazy-src]"),r=i.index,a=this.getModernThumbPos(r),l=n-.5*t.containerRect.innerWidth,c=l+t.containerRect.innerWidth;if(!s||a<l||a>c)continue;let h=s.dataset.lazySrc;if(!h||!h.length)continue;if(delete s.dataset.lazySrc,s.src=h,s.complete)continue;x(e,this.cn("isLoading"));const u=o(T);e.appendChild(u),s.addEventListener("load",(()=>{e.offsetParent&&(e.classList.remove(this.cn("isLoading")),u.remove())}),!1)}}resizeModernSlide(e){if("modern"!==this.type)return;if(!e.thumbSlideEl)return;const t=e.thumbClipWidth&&e.thumbHeight?Math.round(this.thumbHeight*(e.thumbClipWidth/e.thumbHeight)):this.thumbWidth;e.thumbWidth=t}getModernThumbPos(e){const t=this.instance.slides[e],n=this.panzoom;if(!n||!n.contentRect.fitWidth)return 0;let s=n.containerRect.innerWidth,r=n.contentRect.width;2===this.instance.slides.length&&(e-=1,r=2*this.thumbClipWidth);let o=e*(this.thumbClipWidth+this.thumbGap)+this.thumbExtraGap+.5*(t.thumbWidth||0);return o-=r>s?.5*s:.5*r,i(o||0,1)}build(){const e=this.instance,t=e.container,n=this.option("minCount")||0;if(n){let t=0;for(const n of e.slides||[])n.thumbSrc&&t++;if(t<n)return this.cleanup(),void(this.state=he.Disabled)}const i=this.option("type");if(["modern","classic"].indexOf(i)<0)return void(this.state=he.Disabled);this.type=i;const s=document.createElement("div");x(s,this.cn("container")),x(s,`is-${i}`);const r=this.option("parentEl");r?r.appendChild(s):t.after(s),this.container=s,x(t,this.cn("hasThumbs"));const o=document.createElement("div");x(o,this.cn("track")),s.appendChild(o),this.track=o,"classic"===i?this.buildClassic():this.buildModern(),this.state=he.Ready,s.addEventListener("click",(t=>{setTimeout((()=>{var t;null===(t=null==s?void 0:s.querySelector(`[data-carousel-index="${e.page}"]`))||void 0===t||t.focus()}),100)}))}cleanup(){this.carousel&&this.carousel.destroy(),this.carousel=null,this.panzoom&&this.panzoom.destroy(),this.panzoom=null,this.container&&this.container.remove(),this.container=null,this.track=null,this.state=he.Init,S(this.instance.container,this.cn("hasThumbs"))}attach(){const{instance:e}=this;e.on("initSlide",this.onInitSlide),e.state===N.Init?e.on("initSlides",this.onInitSlides):this.onInitSlides(),e.on("Panzoom.afterTransform",this.onTransformM),e.on("Panzoom.refresh",this.onRefreshM),e.on("change",this.onChangeM)}detach(){const{instance:e}=this;e.off("initSlide",this.onInitSlide),e.off("initSlides",this.onInitSlides),e.off("Panzoom.afterTransform",this.onTransformM),e.off("Panzoom.refresh",this.onRefreshM),e.off("change",this.onChangeM),this.cleanup()}};Object.defineProperty(de,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:ce});const pe=Object.assign(Object.assign({},ce),{key:"t",showOnStart:!0,parentEl:null});class fe extends j{constructor(){super(...arguments),Object.defineProperty(this,"ref",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"hidden",{enumerable:!0,configurable:!0,writable:!0,value:!1})}get isEnabled(){const e=this.ref;return e&&e.state!==he.Disabled}get isHidden(){return this.hidden}onInit(){const e=this.instance,t=e.carousel;if(this.ref||!t)return;const n=this.option("parentEl")||e.footer||e.container;n&&(t.options.Thumbs=m({},this.options,{parentEl:n,classes:{container:"f-thumbs fancybox__thumbs"},Carousel:{Sync:{friction:e.option("Carousel.friction")},on:{click:(e,t)=>{t.stopPropagation()}}},on:{ready:e=>{const t=e.container;t&&this.hidden&&(this.refresh(),t.style.transition="none",this.hide(),t.offsetHeight,queueMicrotask((()=>{t.style.transition="",this.show()})))}}}),t.attachPlugins({Thumbs:de}),this.ref=t.plugins.Thumbs,this.option("showOnStart")||(this.ref.state=he.Hidden,this.hidden=!0))}onResize(){var e;const t=null===(e=this.ref)||void 0===e?void 0:e.container;t&&(t.style.maxHeight="")}onKeydown(e,t){const n=this.option("key");n&&n===t&&this.toggle()}toggle(){const e=this.ref;e&&e.state!==he.Disabled&&(e.state!==he.Hidden?this.hidden?this.show():this.hide():e.build())}show(){const e=this.ref,t=e&&e.state!==he.Disabled&&e.container;t&&(this.refresh(),t.offsetHeight,t.removeAttribute("aria-hidden"),t.classList.remove("is-hidden"),this.hidden=!1)}hide(){const e=this.ref,t=e&&e.container;t&&(this.refresh(),t.offsetHeight,t.classList.add("is-hidden"),t.setAttribute("aria-hidden","true")),this.hidden=!0}refresh(){const e=this.ref;if(!e||e.state===he.Disabled)return;const t=e.container,n=(null==t?void 0:t.firstChild)||null;t&&n&&n.childNodes.length&&(t.style.maxHeight=`${n.getBoundingClientRect().height}px`)}attach(){this.instance.state===X.Init?this.instance.on("Carousel.init",this.onInit):this.onInit(),this.instance.on("resize",this.onResize),this.instance.on("keydown",this.onKeydown)}detach(){var e;this.instance.off("Carousel.init",this.onInit),this.instance.off("resize",this.onResize),this.instance.off("keydown",this.onKeydown),null===(e=this.instance.carousel)||void 0===e||e.detachPlugins(["Thumbs"]),this.ref=null}}Object.defineProperty(fe,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:pe});const me={panLeft:{icon:'<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',change:{panX:-100}},panRight:{icon:'<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',change:{panX:100}},panUp:{icon:'<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',change:{panY:-100}},panDown:{icon:'<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',change:{panY:100}},zoomIn:{icon:'<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',action:"zoomIn"},zoomOut:{icon:'<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',action:"zoomOut"},toggle1to1:{icon:'<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',action:"toggleZoom"},toggleZoom:{icon:'<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',action:"toggleZoom"},iterateZoom:{icon:'<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',action:"iterateZoom"},rotateCCW:{icon:'<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',action:"rotateCCW"},rotateCW:{icon:'<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',action:"rotateCW"},flipX:{icon:'<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',action:"flipX"},flipY:{icon:'<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',action:"flipY"},fitX:{icon:'<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',action:"fitX"},fitY:{icon:'<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',action:"fitY"},reset:{icon:'<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',action:"reset"},toggleFS:{icon:'<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',action:"toggleFS"}};var ge,ve;(ve=ge||(ge={}))[ve.Init=0]="Init",ve[ve.Ready=1]="Ready",ve[ve.Disabled=2]="Disabled";const _e={tabindex:"-1",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"};class ye extends j{constructor(){super(...arguments),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:ge.Init}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null})}onReady(e){var t;if(!e.carousel)return;let n=this.option("display"),i=this.option("absolute"),s=this.option("enabled");if("auto"===s){const e=this.instance.carousel;let t=0;if(e)for(const n of e.slides)(n.panzoom||"image"===n.type)&&t++;t||(s=!1)}s||(n=void 0);let r=0;const o={left:[],middle:[],right:[]};if(n)for(const e of["left","middle","right"])for(const i of n[e]){const n=this.createEl(i);n&&(null===(t=o[e])||void 0===t||t.push(n),r++)}let a=null;if(r&&(a=this.createContainer()),a){for(const[e,t]of Object.entries(o)){const n=document.createElement("div");x(n,"fancybox__toolbar__column is-"+e);for(const e of t)n.appendChild(e);"auto"!==i||"middle"!==e||t.length||(i=!0),a.appendChild(n)}!0===i&&x(a,"is-absolute"),this.state=ge.Ready,this.onRefresh()}else this.state=ge.Disabled}onClick(e){var t,n;const i=this.instance,s=i.getSlide(),r=null==s?void 0:s.panzoom,o=e.target,a=o&&I(o)?o.dataset:null;if(!a)return;if(void 0!==a.fancyboxToggleThumbs)return e.preventDefault(),e.stopPropagation(),void(null===(t=i.plugins.Thumbs)||void 0===t||t.toggle());if(void 0!==a.fancyboxToggleFullscreen)return e.preventDefault(),e.stopPropagation(),void this.instance.toggleFullscreen();if(void 0!==a.fancyboxToggleSlideshow){e.preventDefault(),e.stopPropagation();const t=null===(n=i.carousel)||void 0===n?void 0:n.plugins.Autoplay;let s=t.isActive;return r&&"mousemove"===r.panMode&&!s&&r.reset(),void(s?t.stop():t.start())}const l=a.panzoomAction,c=a.panzoomChange;if((c||l)&&(e.preventDefault(),e.stopPropagation()),c){let e={};try{e=JSON.parse(c)}catch(e){}r&&r.applyChange(e)}else l&&r&&r[l]&&r[l]()}onChange(){this.onRefresh()}onRefresh(){if(this.instance.isClosing())return;const e=this.container;if(!e)return;const t=this.instance.getSlide();if(!t||t.state!==J.Ready)return;const n=t&&!t.error&&t.panzoom;for(const t of e.querySelectorAll("[data-panzoom-action]"))n?(t.removeAttribute("disabled"),t.removeAttribute("tabindex")):(t.setAttribute("disabled",""),t.setAttribute("tabindex","-1"));let i=n&&n.canZoomIn(),s=n&&n.canZoomOut();for(const t of e.querySelectorAll('[data-panzoom-action="zoomIn"]'))i?(t.removeAttribute("disabled"),t.removeAttribute("tabindex")):(t.setAttribute("disabled",""),t.setAttribute("tabindex","-1"));for(const t of e.querySelectorAll('[data-panzoom-action="zoomOut"]'))s?(t.removeAttribute("disabled"),t.removeAttribute("tabindex")):(t.setAttribute("disabled",""),t.setAttribute("tabindex","-1"));for(const t of e.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')){s||i?(t.removeAttribute("disabled"),t.removeAttribute("tabindex")):(t.setAttribute("disabled",""),t.setAttribute("tabindex","-1"));const e=t.querySelector("g");e&&(e.style.display=i?"":"none")}}onDone(e,t){var n;null===(n=t.panzoom)||void 0===n||n.on("afterTransform",(()=>{this.instance.isCurrentSlide(t)&&this.onRefresh()})),this.instance.isCurrentSlide(t)&&this.onRefresh()}createContainer(){const e=this.instance.container;if(!e)return null;const t=this.option("parentEl")||e,n=document.createElement("div");return x(n,"fancybox__toolbar"),t.prepend(n),n.addEventListener("click",this.onClick,{passive:!1,capture:!0}),e&&x(e,"has-toolbar"),this.container=n,n}createEl(e){var t;const n=this.instance.carousel;if(!n)return null;if("toggleFS"===e)return null;if("fullscreen"===e&&!this.instance.fsAPI)return null;let i=null;const s=n.slides.length||0;let r=0,a=0;for(const e of n.slides)(e.panzoom||"image"===e.type)&&r++,("image"===e.type||e.downloadSrc)&&a++;if(s<2&&["infobar","prev","next"].includes(e))return i;if(void 0!==me[e]&&!r)return null;if("download"===e&&!a)return null;if("thumbs"===e){const e=this.instance.plugins.Thumbs;if(!e||!e.isEnabled)return null}if("slideshow"===e&&(!(null===(t=this.instance.carousel)||void 0===t?void 0:t.plugins.Autoplay)||s<2))return null;if(void 0!==me[e]){const t=me[e];i=document.createElement("button"),i.setAttribute("title",this.instance.localize(`{{${e.toUpperCase()}}}`)),x(i,"f-button"),t.action&&(i.dataset.panzoomAction=t.action),t.change&&(i.dataset.panzoomChange=JSON.stringify(t.change)),i.appendChild(o(this.instance.localize(t.icon)))}else{const t=(this.option("items")||[])[e];t&&(i=o(this.instance.localize(t.tpl)),"function"==typeof t.click&&i.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation(),"function"==typeof t.click&&t.click.call(this,this,e)})))}const l=null==i?void 0:i.querySelector("svg");if(l)for(const[e,t]of Object.entries(_e))l.getAttribute(e)||l.setAttribute(e,String(t));return i}removeContainer(){const e=this.container;e&&e.remove(),this.container=null,this.state=ge.Disabled;const t=this.instance.container;t&&S(t,"has-toolbar")}attach(){const e=this,{instance:t}=e;t.on("Carousel.initSlides",e.onReady),t.on("done",e.onDone),t.on("reveal",e.onChange),t.on("Carousel.change",e.onChange),e.onReady(e.instance)}detach(){const e=this,{instance:t}=e;t.off("Carousel.initSlides",e.onReady),t.off("done",e.onDone),t.off("reveal",e.onChange),t.off("Carousel.change",e.onChange),e.removeContainer()}}Object.defineProperty(ye,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{absolute:"auto",display:{left:["infobar"],middle:[],right:["iterateZoom","slideshow","fullscreen","thumbs","close"]},enabled:"auto",items:{infobar:{tpl:'<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>'},download:{tpl:'<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>'},prev:{tpl:'<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>'},next:{tpl:'<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>'},slideshow:{tpl:'<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'},fullscreen:{tpl:'<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'},thumbs:{tpl:'<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>'},close:{tpl:'<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>'}},parentEl:null}});const be={Hash:te,Html:oe,Images:ie,Slideshow:le,Thumbs:fe,Toolbar:ye},we=function(){var e=window.getSelection();return e&&"Range"===e.type};let Ce=null,Ee=null;const Te=new Map;let Ie=0;class Se extends _{get isIdle(){return this.idle}get isCompact(){return this.option("compact")}constructor(e=[],t={},n={}){super(t),Object.defineProperty(this,"userSlides",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"userPlugins",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"idle",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"idleTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"clickTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"pwt",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"ignoreFocusChange",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:X.Init}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"footer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"carousel",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"lastFocus",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"prevMouseMoveEvent",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fsAPI",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.fsAPI=(()=>{let e,t="",n="",i="";return document.fullscreenEnabled?(t="requestFullscreen",n="exitFullscreen",i="fullscreenElement"):document.webkitFullscreenEnabled&&(t="webkitRequestFullscreen",n="webkitExitFullscreen",i="webkitFullscreenElement"),t&&(e={request:function(e){return"webkitRequestFullscreen"===t?e[t](Element.ALLOW_KEYBOARD_INPUT):e[t]()},exit:function(){return document[i]&&document[n]()},isFullscreen:function(){return document[i]}}),e})(),this.id=t.id||++Ie,Te.set(this.id,this),this.userSlides=e,this.userPlugins=n,queueMicrotask((()=>{this.init()}))}init(){if(this.state===X.Destroy)return;this.state=X.Init,this.attachPlugins(Object.assign(Object.assign({},Se.Plugins),this.userPlugins)),this.emit("init"),!0===this.option("hideScrollbar")&&(()=>{if(!$)return;const e=document.body;if(e.classList.contains("hide-scrollbar"))return;const t=window.innerWidth-document.documentElement.getBoundingClientRect().width,n=e.currentStyle||window.getComputedStyle(e),i=parseFloat(n.marginRight);document.documentElement.style.setProperty("--fancybox-scrollbar-compensate",`${t}px`),i&&e.style.setProperty("--fancybox-body-margin",`${i}px`),e.classList.add("hide-scrollbar")})(),this.initLayout();const e=()=>{this.initCarousel(this.userSlides),this.state=X.Ready,this.attachEvents(),this.emit("ready"),setTimeout((()=>{this.container&&this.container.setAttribute("aria-hidden","false")}),16)};this.option("Fullscreen.autoStart")&&this.fsAPI&&!this.fsAPI.isFullscreen()?this.fsAPI.request(this.container).then((()=>e())).catch((()=>e())):e()}initLayout(){var e,t;const n=this.option("parentEl")||document.body,i=o(this.localize(this.option("tpl.main")||""));i&&(i.setAttribute("id",`fancybox-${this.id}`),i.setAttribute("aria-label",this.localize("{{MODAL}}")),i.classList.toggle("is-compact",this.isCompact),x(i,this.option("mainClass")||""),this.container=i,this.footer=i.querySelector(".fancybox__footer"),n.appendChild(i),x(document.documentElement,"with-fancybox"),Ce&&Ee||(Ce=document.createElement("span"),x(Ce,"fancybox-focus-guard"),Ce.setAttribute("tabindex","0"),Ce.setAttribute("aria-hidden","true"),Ce.setAttribute("aria-label","Focus guard"),Ee=Ce.cloneNode(),null===(e=i.parentElement)||void 0===e||e.insertBefore(Ce,i),null===(t=i.parentElement)||void 0===t||t.append(Ee)),this.option("animated")&&(x(i,"is-animated"),setTimeout((()=>{this.isClosing()||S(i,"is-animated")}),350)),this.emit("initLayout"))}initCarousel(e){const t=this.container;if(!t)return;const n=t.querySelector(".fancybox__carousel");if(!n)return;const i=this.carousel=new U(n,m({},{slides:e,transition:"fade",Panzoom:{lockAxis:this.option("dragToClose")?"xy":"x",infinite:!!this.option("dragToClose")&&"y"},Dots:!1,Navigation:{classes:{container:"fancybox__nav",button:"f-button",isNext:"is-next",isPrev:"is-prev"}},initialPage:this.option("startIndex"),l10n:this.option("l10n")},this.option("Carousel")||{}));i.on("*",((e,t,...n)=>{this.emit(`Carousel.${t}`,e,...n)})),i.on(["ready","change"],(()=>{var e;const t=this.getSlide();t&&(null===(e=t.panzoom)||void 0===e||e.updateControls()),this.manageCaption(t)})),i.on("removeSlide",((e,t)=>{t.closeBtnEl&&t.closeBtnEl.remove(),t.closeBtnEl=void 0,t.captionEl&&t.captionEl.remove(),t.captionEl=void 0,t.spinnerEl&&t.spinnerEl.remove(),t.spinnerEl=void 0,t.state=void 0})),i.on("Panzoom.touchStart",(()=>{this.isCompact||this.endIdle()})),i.on("settle",(()=>{this.idleTimer||this.isCompact||!this.option("idle")||this.setIdle(),this.option("autoFocus")&&this.checkFocus()})),this.option("dragToClose")&&(i.on("Panzoom.afterTransform",((e,t)=>{const n=this.getSlide();if(n&&s(n.el))return;const i=this.container;if(i){const e=Math.abs(t.current.f),n=e<1?"":Math.max(.5,Math.min(1,1-e/t.contentRect.fitHeight*1.5));i.style.setProperty("--fancybox-ts",n?"0s":""),i.style.setProperty("--fancybox-opacity",n+"")}})),i.on("Panzoom.touchEnd",((e,t,n)=>{var i;const r=this.getSlide();if(r&&s(r.el))return;if(t.isMobile&&document.activeElement&&-1!==["TEXTAREA","INPUT"].indexOf(null===(i=document.activeElement)||void 0===i?void 0:i.nodeName))return;const o=Math.abs(t.dragOffset.y);"y"===t.lockedAxis&&(o>=200||o>=50&&t.dragOffset.time<300)&&(n&&n.cancelable&&n.preventDefault(),this.close(n,"f-throwOut"+(t.current.f<0?"Up":"Down")))}))),i.on(["change"],(e=>{var t;let n=null===(t=this.getSlide())||void 0===t?void 0:t.triggerEl;if(n){const t=new CustomEvent("slideTo",{bubbles:!0,cancelable:!0,detail:e.page});n.dispatchEvent(t)}})),i.on(["refresh","change"],(e=>{const t=this.container;if(!t)return;for(const n of t.querySelectorAll("[data-fancybox-current-index]"))n.innerHTML=e.page+1;for(const n of t.querySelectorAll("[data-fancybox-count]"))n.innerHTML=e.pages.length;if(!e.isInfinite){for(const n of t.querySelectorAll("[data-fancybox-next]"))e.page<e.pages.length-1?(n.removeAttribute("disabled"),n.removeAttribute("tabindex")):(n.setAttribute("disabled",""),n.setAttribute("tabindex","-1"));for(const n of t.querySelectorAll("[data-fancybox-prev]"))e.page>0?(n.removeAttribute("disabled"),n.removeAttribute("tabindex")):(n.setAttribute("disabled",""),n.setAttribute("tabindex","-1"))}const n=this.getSlide();if(!n)return;let i=n.downloadSrc||"";i||"image"!==n.type||n.error||"string"!=typeof n.src||(i=n.src);for(const e of t.querySelectorAll("[data-fancybox-download]")){const t=n.downloadFilename;i?(e.removeAttribute("disabled"),e.removeAttribute("tabindex"),e.setAttribute("href",i),e.setAttribute("download",t||i),e.setAttribute("target","_blank")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"),e.removeAttribute("href"),e.removeAttribute("download"))}})),this.emit("initCarousel")}attachEvents(){const e=this.container;e&&(e.addEventListener("click",this.onClick,{passive:!1,capture:!1}),e.addEventListener("wheel",this.onWheel,{passive:!1,capture:!1}),document.addEventListener("keydown",this.onKeydown,{passive:!1,capture:!0}),document.addEventListener("visibilitychange",this.onVisibilityChange,!1),document.addEventListener("mousemove",this.onMousemove),this.option("trapFocus")&&document.addEventListener("focus",this.onFocus,!0),window.addEventListener("resize",this.onResize))}detachEvents(){const e=this.container;e&&(document.removeEventListener("keydown",this.onKeydown,{passive:!1,capture:!0}),e.removeEventListener("wheel",this.onWheel,{passive:!1,capture:!1}),e.removeEventListener("click",this.onClick,{passive:!1,capture:!1}),document.removeEventListener("mousemove",this.onMousemove),window.removeEventListener("resize",this.onResize),document.removeEventListener("visibilitychange",this.onVisibilityChange,!1),document.removeEventListener("focus",this.onFocus,!0))}onClick(e){var t,n;const{container:i,isCompact:s}=this;if(!i||this.isClosing())return;!s&&this.option("idle")&&this.resetIdle();const r=document.activeElement;if(we()&&r&&i.contains(r))return;const o=e.composedPath()[0];if(o===(null===(t=this.carousel)||void 0===t?void 0:t.container))return;if(o.closest(".f-spinner")||o.closest("[data-fancybox-close]"))return e.preventDefault(),void this.close(e);if(o.closest("[data-fancybox-prev]"))return e.preventDefault(),void this.prev();if(o.closest("[data-fancybox-next]"))return e.preventDefault(),void this.next();if(s&&"image"===(null===(n=this.getSlide())||void 0===n?void 0:n.type))return void(this.clickTimer?(clearTimeout(this.clickTimer),this.clickTimer=null):this.clickTimer=setTimeout((()=>{this.toggleIdle(),this.clickTimer=null}),350));if(this.emit("click",e),e.defaultPrevented)return;let a=!1;if(o.closest(".fancybox__content")){if(r){if(r.closest("[contenteditable]"))return;o.matches(G)||r.blur()}if(we())return;a=this.option("contentClick")}else o.closest(".fancybox__carousel")&&!o.matches(G)&&(a=this.option("backdropClick"));"close"===a?(e.preventDefault(),this.close(e)):"next"===a?(e.preventDefault(),this.next()):"prev"===a&&(e.preventDefault(),this.prev())}onWheel(e){const t=this.option("wheel",e),n="slide"===t,i=[-e.deltaX||0,-e.deltaY||0,-e.detail||0].reduce((function(e,t){return Math.abs(t)>Math.abs(e)?t:e})),s=Math.max(-1,Math.min(1,i)),r=Date.now();this.pwt&&r-this.pwt<300?n&&e.preventDefault():(this.pwt=r,this.emit("wheel",e),e.defaultPrevented||("close"===t?(e.preventDefault(),this.close(e)):"slide"===t&&(e.preventDefault(),this[s>0?"prev":"next"]())))}onKeydown(e){if(!this.isTopmost())return;this.isCompact||!this.option("idle")||this.isClosing()||this.resetIdle();const t=e.key,n=this.option("keyboard");if(!n||e.ctrlKey||e.altKey||e.shiftKey)return;const i=e.composedPath()[0],s=document.activeElement&&document.activeElement.classList,r=s&&s.contains("f-button")||i.dataset.carouselPage||i.dataset.carouselIndex;if("Escape"!==t&&!r&&I(i)&&(i.isContentEditable||-1!==["TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].indexOf(i.nodeName)))return;this.emit("keydown",t,e);const o=n[t];"function"==typeof this[o]&&(e.preventDefault(),this[o]())}onResize(){const e=this.container;if(!e)return;const t=this.isCompact;e.classList.toggle("is-compact",t),this.manageCaption(this.getSlide()),this.isCompact?this.clearIdle():this.endIdle(),this.emit("resize")}onFocus(e){this.isTopmost()&&this.checkFocus(e)}onMousemove(e){this.prevMouseMoveEvent=e,!this.isCompact&&this.option("idle")&&this.resetIdle()}onVisibilityChange(){"visible"===document.visibilityState?this.checkFocus():this.endIdle()}manageCloseBtn(e){const t=this.optionFor(e,"closeButton")||!1;if("auto"===t){const e=this.plugins.Toolbar;if(e&&e.state===ge.Ready)return}if(!t)return;if(!e.contentEl||e.closeBtnEl)return;const n=this.option("tpl.closeButton");if(n){const t=o(this.localize(n));e.closeBtnEl=e.contentEl.appendChild(t),e.el&&x(e.el,"has-close-btn")}}manageCaption(e){var t,n;const i="fancybox__caption",s="has-caption",r=this.container;if(!r)return;const o=this.isCompact||this.option("commonCaption"),a=!o;if(this.caption&&this.stop(this.caption),a&&this.caption&&(this.caption.remove(),this.caption=null),o&&!this.caption)for(const e of(null===(t=this.carousel)||void 0===t?void 0:t.slides)||[])e.captionEl&&(e.captionEl.remove(),e.captionEl=void 0,S(e.el,s),null===(n=e.el)||void 0===n||n.removeAttribute("aria-labelledby"));if(e||(e=this.getSlide()),!e||o&&!this.isCurrentSlide(e))return;const l=e.el;let c=this.optionFor(e,"caption","");if("string"!=typeof c||!c.length)return void(o&&this.caption&&this.animate(this.caption,"f-fadeOut",(()=>{var e;null===(e=this.caption)||void 0===e||e.remove(),this.caption=null})));let h=null;if(a){if(h=e.captionEl||null,l&&!h){const t=`fancybox__caption_${this.id}_${e.index}`;h=document.createElement("div"),x(h,i),h.setAttribute("id",t),e.captionEl=l.appendChild(h),x(l,s),l.setAttribute("aria-labelledby",t)}}else h=this.caption,h||(h=r.querySelector("."+i)),h||(h=document.createElement("div"),h.dataset.fancyboxCaption="",x(h,i),h.innerHTML=c,(this.footer||r).prepend(h)),x(r,s),this.caption=h;h&&(h.innerHTML=c)}checkFocus(e){var t;const n=document.activeElement||null;n&&(null===(t=this.container)||void 0===t?void 0:t.contains(n))||this.focus(e)}focus(e){var t;if(this.ignoreFocusChange)return;const n=document.activeElement||null,i=(null==e?void 0:e.target)||null,s=this.container,r=this.getSlide();if(!s||!(null===(t=this.carousel)||void 0===t?void 0:t.viewport))return;if(!e&&n&&s.contains(n))return;const o=r&&r.state===J.Ready?r.el:null;if(!o||o.contains(n)||s===n)return;e&&e.cancelable&&e.preventDefault(),this.ignoreFocusChange=!0;const a=Array.from(s.querySelectorAll(G));let l=[],c=null;for(let e of a){const t=!e.offsetParent||e.closest('[aria-hidden="true"]'),n=o&&o.contains(e),i=!this.carousel.viewport.contains(e);e===s||(n||i)&&!t?(l.push(e),void 0!==e.dataset.origTabindex&&(e.tabIndex=parseFloat(e.dataset.origTabindex)),e.removeAttribute("data-orig-tabindex"),!e.hasAttribute("autoFocus")&&c||(c=e)):(e.dataset.origTabindex=void 0===e.dataset.origTabindex?e.getAttribute("tabindex")||void 0:e.dataset.origTabindex,e.tabIndex=-1)}let h=null;e?(!i||l.indexOf(i)<0)&&(h=c||s,l.length&&(n===Ee?h=l[0]:this.lastFocus!==s&&n!==Ce||(h=l[l.length-1]))):h=r&&"image"===r.type?s:c||s,h&&Y(h),this.lastFocus=document.activeElement,this.ignoreFocusChange=!1}next(){const e=this.carousel;e&&e.pages.length>1&&e.slideNext()}prev(){const e=this.carousel;e&&e.pages.length>1&&e.slidePrev()}jumpTo(...e){this.carousel&&this.carousel.slideTo(...e)}isTopmost(){var e;return(null===(e=Se.getInstance())||void 0===e?void 0:e.id)==this.id}animate(e=null,t="",n){if(!e||!t)return void(n&&n());this.stop(e);const i=s=>{s.target===e&&e.dataset.animationName&&(e.removeEventListener("animationend",i),delete e.dataset.animationName,n&&n(),S(e,t))};e.dataset.animationName=t,e.addEventListener("animationend",i),x(e,t)}stop(e){e&&e.dispatchEvent(new CustomEvent("animationend",{bubbles:!1,cancelable:!0,currentTarget:e}))}setContent(e,t="",n=!0){if(this.isClosing())return;const i=e.el;if(!i)return;let s=null;if(I(t)?s=t:(s=o(t+""),I(s)||(s=document.createElement("div"),s.innerHTML=t+"")),["img","picture","iframe","video","audio"].includes(s.nodeName.toLowerCase())){const e=document.createElement("div");e.appendChild(s),s=e}I(s)&&e.filter&&!e.error&&(s=s.querySelector(e.filter)),s&&I(s)?(x(s,"fancybox__content"),e.id&&s.setAttribute("id",e.id),"none"!==s.style.display&&"none"!==getComputedStyle(s).getPropertyValue("display")||(s.style.display=e.display||this.option("defaultDisplay")||"flex"),i.classList.add(`has-${e.error?"error":e.type||"unknown"}`),i.prepend(s),e.contentEl=s,n&&this.revealContent(e),this.manageCloseBtn(e),this.manageCaption(e)):this.setError(e,"{{ELEMENT_NOT_FOUND}}")}revealContent(e,t){const n=e.el,i=e.contentEl;n&&i&&(this.emit("reveal",e),this.hideLoading(e),e.state=J.Opening,(t=this.isOpeningSlide(e)?void 0===t?this.optionFor(e,"showClass"):t:"f-fadeIn")?this.animate(i,t,(()=>{this.done(e)})):this.done(e))}done(e){this.isClosing()||(e.state=J.Ready,this.emit("done",e),x(e.el,"is-done"),this.isCurrentSlide(e)&&this.option("autoFocus")&&queueMicrotask((()=>{this.option("autoFocus")&&(this.option("autoFocus")?this.focus():this.checkFocus())})),this.isOpeningSlide(e)&&!this.isCompact&&this.option("idle")&&this.setIdle())}isCurrentSlide(e){const t=this.getSlide();return!(!e||!t)&&t.index===e.index}isOpeningSlide(e){var t,n;return null===(null===(t=this.carousel)||void 0===t?void 0:t.prevPage)&&e.index===(null===(n=this.getSlide())||void 0===n?void 0:n.index)}showLoading(e){e.state=J.Loading;const t=e.el;t&&(x(t,"is-loading"),this.emit("loading",e),e.spinnerEl||setTimeout((()=>{if(!this.isClosing()&&!e.spinnerEl&&e.state===J.Loading){let n=o(T);e.spinnerEl=n,t.prepend(n),this.animate(n,"f-fadeIn")}}),250))}hideLoading(e){const t=e.el;if(!t)return;const n=e.spinnerEl;this.isClosing()?null==n||n.remove():(S(t,"is-loading"),n&&this.animate(n,"f-fadeOut",(()=>{n.remove()})),e.state===J.Loading&&(this.emit("loaded",e),e.state=J.Ready))}setError(e,t){if(this.isClosing())return;this.emit("error"),e.error=t,this.hideLoading(e),this.clearContent(e);const n=document.createElement("div");n.classList.add("fancybox-error"),n.innerHTML=this.localize(t||"<p>{{ERROR}}</p>"),this.setContent(e,n)}clearContent(e){var t;null===(t=this.carousel)||void 0===t||t.emit("removeSlide",e),e.contentEl&&(e.contentEl.remove(),e.contentEl=void 0),e.closeBtnEl&&(e.closeBtnEl.remove(),e.closeBtnEl=void 0);const n=e.el;n&&(S(n,"is-loading"),S(n,"has-error"),S(n,"has-unknown"),S(n,`has-${e.type||"unknown"}`))}getSlide(){var e;const t=this.carousel;return(null===(e=null==t?void 0:t.pages[null==t?void 0:t.page])||void 0===e?void 0:e.slides[0])||void 0}close(e,t){if(this.isClosing())return;const n=new Event("shouldClose",{bubbles:!0,cancelable:!0});if(this.emit("shouldClose",n,e),n.defaultPrevented)return;e&&e.cancelable&&(e.preventDefault(),e.stopPropagation());const i=this.fsAPI,s=()=>{this.proceedClose(e,t)};i&&i.isFullscreen()?Promise.resolve(i.exit()).then((()=>s())):s()}clearIdle(){this.idleTimer&&clearTimeout(this.idleTimer),this.idleTimer=null}setIdle(e=!1){const t=()=>{this.clearIdle(),this.idle=!0,x(this.container,"is-idle"),this.emit("setIdle")};if(this.clearIdle(),!this.isClosing())if(e)t();else{const e=this.option("idle");e&&(this.idleTimer=setTimeout(t,e))}}endIdle(){this.clearIdle(),this.idle&&!this.isClosing()&&(this.idle=!1,S(this.container,"is-idle"),this.emit("endIdle"))}resetIdle(){this.endIdle(),this.setIdle()}toggleIdle(){this.idle?this.endIdle():this.setIdle(!0)}toggleFullscreen(){const e=this.fsAPI;e&&(e.isFullscreen()?e.exit():this.container&&e.request(this.container))}isClosing(){return[X.Closing,X.CustomClosing,X.Destroy].includes(this.state)}proceedClose(e,t){var n;this.state=X.Closing,this.clearIdle(),this.detachEvents();const i=this.container,s=this.carousel,r=this.getSlide(),o=r&&this.option("placeFocusBack")?r.triggerEl||this.option("trigger"):null;if(o&&(W(o)?Y(o):o.focus()),i&&(x(i,"is-closing"),i.setAttribute("aria-hidden","true"),this.option("animated")&&x(i,"is-animated"),i.style.pointerEvents="none"),s){s.clearTransitions(),null===(n=s.panzoom)||void 0===n||n.destroy();for(const e of s.slides){e.state=J.Closing,this.hideLoading(e);const t=e.contentEl;t&&this.stop(t);const n=null==e?void 0:e.panzoom;n&&(n.stop(),n.detachEvents(),n.detachObserver()),this.isCurrentSlide(e)||s.emit("removeSlide",e)}}this.emit("close",e),this.state!==X.CustomClosing?(void 0===t&&r&&(t=this.optionFor(r,"hideClass")),t&&r?(this.animate(r.contentEl,t,(()=>{s&&s.emit("removeSlide",r)})),setTimeout((()=>{this.destroy()}),500)):this.destroy()):setTimeout((()=>{this.destroy()}),500)}destroy(){var e;if(this.state===X.Destroy)return;this.state=X.Destroy,null===(e=this.carousel)||void 0===e||e.destroy();const t=this.container;t&&t.remove(),Te.delete(this.id);const n=Se.getInstance();n?n.focus():(Ce&&(Ce.remove(),Ce=null),Ee&&(Ee.remove(),Ee=null),S(document.documentElement,"with-fancybox"),(()=>{if(!$)return;const e=document,t=e.body;t.classList.remove("hide-scrollbar"),t.style.setProperty("--fancybox-body-margin",""),e.documentElement.style.setProperty("--fancybox-scrollbar-compensate","")})(),this.emit("destroy"))}static bind(e,t,n){if(!$)return;let i,s="",r={};if(void 0===e?i=document.body:"string"==typeof e?(i=document.body,s=e,"object"==typeof t&&(r=t||{})):(i=e,"string"==typeof t&&(s=t),"object"==typeof n&&(r=n||{})),!i||!I(i))return;s=s||"[data-fancybox]";const o=Se.openers.get(i)||new Map;o.set(s,r),Se.openers.set(i,o),1===o.size&&i.addEventListener("click",Se.fromEvent)}static unbind(e,t){let n,i="";if("string"==typeof e?(n=document.body,i=e):(n=e,"string"==typeof t&&(i=t)),!n)return;const s=Se.openers.get(n);s&&i&&s.delete(i),i&&s||(Se.openers.delete(n),n.removeEventListener("click",Se.fromEvent))}static destroy(){let e;for(;e=Se.getInstance();)e.destroy();for(const e of Se.openers.keys())e.removeEventListener("click",Se.fromEvent);Se.openers=new Map}static fromEvent(e){if(e.defaultPrevented)return;if(e.button&&0!==e.button)return;if(e.ctrlKey||e.metaKey||e.shiftKey)return;let t=e.composedPath()[0];const n=t.closest("[data-fancybox-trigger]");if(n){const e=n.dataset.fancyboxTrigger||"",i=document.querySelectorAll(`[data-fancybox="${e}"]`),s=parseInt(n.dataset.fancyboxIndex||"",10)||0;t=i[s]||t}if(!(t&&t instanceof Element))return;let i,s,r,o;if([...Se.openers].reverse().find((([e,n])=>!(!e.contains(t)||![...n].reverse().find((([n,a])=>{let l=t.closest(n);return!!l&&(i=e,s=n,r=l,o=a,!0)}))))),!i||!s||!r)return;o=o||{},e.preventDefault(),t=r;let a=[],l=m({},K,o);l.event=e,l.trigger=t,l.delegate=n;const c=l.groupAll,h=l.groupAttr,u=h&&t?t.getAttribute(`${h}`):"";if((!t||u||c)&&(a=[].slice.call(i.querySelectorAll(s))),t&&!c&&(a=u?a.filter((e=>e.getAttribute(`${h}`)===u)):[t]),!a.length)return;const d=Se.getInstance();return d&&d.options.trigger&&a.indexOf(d.options.trigger)>-1?void 0:(t&&(l.startIndex=a.indexOf(t)),Se.fromNodes(a,l))}static fromSelector(e,t){let n=null,i="";if("string"==typeof e?(n=document.body,i=e):e instanceof HTMLElement&&"string"==typeof t&&(n=e,i=t),!n||!i)return!1;const s=Se.openers.get(n);if(!s)return!1;const r=s.get(i);return!!r&&Se.fromNodes(Array.from(n.querySelectorAll(i)),r)}static fromNodes(e,t){t=m({},K,t||{});const n=[];for(const i of e){const e=i.dataset||{},s=e.src||i.getAttribute("href")||i.getAttribute("currentSrc")||i.getAttribute("src")||void 0;let r;const o=t.delegate;let a;o&&n.length===t.startIndex&&(r=o instanceof HTMLImageElement?o:o.querySelector("img:not([aria-hidden])")),r||(r=i instanceof HTMLImageElement?i:i.querySelector("img:not([aria-hidden])")),r&&(a=r.currentSrc||r.src||void 0,!a&&r.dataset&&(a=r.dataset.lazySrc||r.dataset.src||void 0));const l={src:s,triggerEl:i,thumbEl:r,thumbElSrc:a,thumbSrc:a};for(const t in e)"fancybox"!==t&&(l[t]=e[t]+"");n.push(l)}return new Se(n,t)}static getInstance(e){return e?Te.get(e):Array.from(Te.values()).reverse().find((e=>!e.isClosing()&&e))||null}static getSlide(){var e;return(null===(e=Se.getInstance())||void 0===e?void 0:e.getSlide())||null}static show(e=[],t={}){return new Se(e,t)}static next(){const e=Se.getInstance();e&&e.next()}static prev(){const e=Se.getInstance();e&&e.prev()}static close(e=!0,...t){if(e)for(const e of Te.values())e.close(...t);else{const e=Se.getInstance();e&&e.close(...t)}}}Object.defineProperty(Se,"version",{enumerable:!0,configurable:!0,writable:!0,value:"5.0.16"}),Object.defineProperty(Se,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:K}),Object.defineProperty(Se,"Plugins",{enumerable:!0,configurable:!0,writable:!0,value:be}),Object.defineProperty(Se,"openers",{enumerable:!0,configurable:!0,writable:!0,value:new Map})})),r.register("4Cu73",(function(t,n){e(t.exports,"toggleModal",(function(){return m})),e(t.exports,"onShowModal",(function(){return y}));var i=r("kThre"),s=r("emajU"),o=r("aTIOK"),a=r("a8AVW");r("11PIu"),r("f9JW7");const l=document.querySelector("[data-modal]"),c=document.querySelector(".modal-card"),h=document.querySelector(".add-to-watched"),u=document.querySelector(".add-to-queue"),d=document.querySelector(".close-btn"),p=document.querySelector(".modal-card__poster"),f=document.querySelector(".modal-card__movie-description-wrapper"),m=()=>{l.classList.toggle("is-hidden"),c.classList.toggle("none")},g=()=>{b()},v=e=>{"Escape"===e.code&&b()},_=e=>{e.target===l&&b()},y=e=>{s.default.load("user")&&((0,i.ifWatchedBtnClassHasToBeToggled)(Number(e)),(0,i.ifQueueBtnClassHasToBeToggled)(Number(e)),h.addEventListener("click",i.changeWatched),u.addEventListener("click",i.changeQueue)),d.addEventListener("click",g),l.addEventListener("click",_),document.addEventListener("keydown",v)},b=()=>{"watched"===s.default.load("actualLibrary")&&(0,o.getMoviesByArrayOfIds)(s.default.load("watched")),"queue"===s.default.load("actualLibrary")&&(0,o.getMoviesByArrayOfIds)(s.default.load("queue")),(0,a.renderPagination)(),p.innerHTML="",f.innerHTML="",d.removeEventListener("click",g),l.removeEventListener("click",_),document.removeEventListener("keydown",v),m(),h.removeEventListener("click",i.changeWatched),u.removeEventListener("click",i.changeQueue)}})),r.register("kThre",(function(t,n){e(t.exports,"saveIdArraysFromFirebaseToStore",(function(){return y})),e(t.exports,"changeWatched",(function(){return b})),e(t.exports,"changeQueue",(function(){return w})),e(t.exports,"ifWatchedBtnClassHasToBeToggled",(function(){return C})),e(t.exports,"ifQueueBtnClassHasToBeToggled",(function(){return E})),r("gKkQl");var i=r("ix4Jr");r("jAzyG");var s=r("8NPS8");r("eyjy7");var o=r("1ojCS"),a=r("emajU");r("aTIOK");const l=(0,i.initializeApp)({apiKey:"AIzaSyC3WI9OwBz4EKjWjZ6_OIwGrF26sBcAXyE",authDomain:"filmoteka-js-team-project.firebaseapp.com",databaseURL:"https://filmoteka-js-team-project-default-rtdb.europe-west1.firebasedatabase.app",projectId:"filmoteka-js-team-project",storageBucket:"filmoteka-js-team-project.appspot.com",messagingSenderId:"191570493203",appId:"1:191570493203:web:cb4db6ae8cb26ef95fe4e6",measurementId:"G-F8RYGXVXSJ"}),c=(0,s.getDatabase)(l),h=new(0,o.V)(l),u=(0,o.o)(l),d=document.querySelector("#sign-in"),p=document.querySelector("#sign-out"),f=document.querySelector(".header-nav__first"),m=document.querySelector(".header-nav__second"),g=document.querySelector(".add-to-watched"),v=document.querySelector(".add-to-queue"),_=document.querySelector(".modal-btns-div"),y=()=>{window.addEventListener("load",(()=>{!function(){const e=a.default.load("user").uid,t=(0,s.ref)(c,"/users/"+e+"/watched/"),n=[];(0,s.onValue)(t,(e=>{e.forEach((e=>{const t=e.val();n.push(t)})),a.default.save("watched",n)}))}(),function(){const e=a.default.load("user").uid,t=(0,s.ref)(c,"/users/"+e+"/queue/"),n=[];(0,s.onValue)(t,(e=>{e.forEach((e=>{const t=e.val();n.push(t)})),a.default.save("queue",n)}))}()}))};a.default.load("user")&&(f.classList.toggle("header__none"),m.classList.toggle("header__none"),_.classList.toggle("display-none-for-unsigned-user"),d.removeEventListener("click",(()=>{(0,o.c)(u,h).then((e=>{o.V.credentialFromResult(e).accessToken;const t=e.user;a.default.save("user",t),f.classList.toggle("header__none"),m.classList.toggle("header__none"),y()})).catch((e=>{e.code,e.message,e.customData.email,o.V.credentialFromError(e)}))}))),d.addEventListener("click",(()=>{(0,o.c)(u,h).then((e=>{o.V.credentialFromResult(e).accessToken;const t=e.user;a.default.save("user",t),f.classList.toggle("header__none"),m.classList.toggle("header__none"),y()})).catch((e=>{e.code,e.message,e.customData.email,o.V.credentialFromError(e)}))})),p.addEventListener("click",(()=>{(0,o.B)(u).then((()=>{a.default.remove("user"),a.default.remove("watched"),a.default.remove("queue"),f.classList.toggle("header__none"),m.classList.toggle("header__none"),window.location.href="https://marikagk.github.io/filmoteka-js-team-project/index"})).catch((e=>{console.log("Error Sign Out")}))}));const b=e=>{const t=e.target.parentElement.parentElement,n=Number(t.dataset.movieId),i=a.default.load("user").uid,r=(0,s.ref)(c,"/users/"+i+"/watched/");(0,s.get)(r).then((e=>{const t=e.val()||[];if(t.includes(n)){const e=t.filter((e=>e!=n));(0,s.set)(r,e),g.innerHTML="Add to watched",g.classList.contains("button--orange")&&g.classList.remove("button--orange"),a.default.save("watched",e)}else t.push(n),(0,s.set)(r,t),g.classList.contains("button--orange")||g.classList.add("button--orange"),g.innerHTML="In watched",a.default.save("watched",t)})).catch(console.error())},w=e=>{const t=e.target.parentElement.parentElement,n=Number(t.dataset.movieId),i=a.default.load("user").uid,r=(0,s.ref)(c,"/users/"+i+"/queue/");(0,s.get)(r).then((e=>{const t=e.val()||[];if(t.includes(n)){const e=t.filter((e=>e!=n));(0,s.set)(r,e),v.classList.toggle("button--orange"),v.innerHTML="Add to queue",a.default.save("queue",e)}else t.push(n),(0,s.set)(r,t),v.innerHTML="In queue",v.classList.toggle("button--orange"),a.default.save("queue",t)})).catch(console.error())},C=e=>{const t=a.default.load("user").uid,n=(0,s.ref)(c,"/users/"+t+"/watched/");(0,s.get)(n).then((t=>{if(!(t.val()||[]).includes(e))return g.classList.contains("button--orange")&&g.classList.remove("button--orange"),g.innerHTML="Add to watched";g.classList.contains("button--orange")||g.classList.add("button--orange"),g.innerHTML="In watched"}))},E=e=>{const t=a.default.load("user").uid,n=(0,s.ref)(c,"/users/"+t+"/queue/");(0,s.get)(n).then((t=>{if(!(t.val()||[]).includes(e))return v.classList.contains("button--orange")&&v.classList.remove("button--orange"),v.innerHTML="Add to queue";v.classList.contains("button--orange")||v.classList.add("button--orange"),v.innerHTML="In queue"}))}})),r.register("gKkQl",(function(t,n){e(t.exports,"initializeApp",(function(){return r("ix4Jr").initializeApp})),e(t.exports,"registerVersion",(function(){return r("ix4Jr").registerVersion}));r("ix4Jr");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r("ix4Jr").registerVersion)("firebase","9.20.0","app")})),r.register("ix4Jr",(function(t,n){e(t.exports,"_registerComponent",(function(){return v})),e(t.exports,"_getProvider",(function(){return _})),e(t.exports,"SDK_VERSION",(function(){return C})),e(t.exports,"initializeApp",(function(){return E})),e(t.exports,"getApp",(function(){return T})),e(t.exports,"registerVersion",(function(){return I}));var i=r("4a6xH"),s=r("7vF8m"),o=r("ffjl9"),a=r("cCiiD");o=r("ffjl9");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const c="@firebase/app",h="0.9.8",u=new(0,s.Logger)("@firebase/app"),d="[DEFAULT]",p={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},f=new Map,m=new Map;function g(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function v(e){const t=e.name;if(m.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;m.set(t,e);for(const t of f.values())g(t,e);return!0}function _(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const y={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},b=new(0,o.ErrorFactory)("app","Firebase",y);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,i.Component)("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw b.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C="9.20.0";function E(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const s=Object.assign({name:d,automaticDataCollectionEnabled:!1},t),r=s.name;if("string"!=typeof r||!r)throw b.create("bad-app-name",{appName:String(r)});if(n||(n=(0,o.getDefaultAppConfig)()),!n)throw b.create("no-options");const a=f.get(r);if(a){if((0,o.deepEqual)(n,a.options)&&(0,o.deepEqual)(s,a.config))return a;throw b.create("duplicate-app",{appName:r})}const l=new(0,i.ComponentContainer)(r);for(const e of m.values())l.addComponent(e);const c=new w(n,s,l);return f.set(r,c),c}function T(e="[DEFAULT]"){const t=f.get(e);if(!t&&e===d)return E();if(!t)throw b.create("no-app",{appName:e});return t}function I(e,t,n){var s;let r=null!==(s=p[e])&&void 0!==s?s:e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${r}" with version "${t}":`];return o&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}v(new(0,i.Component)(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S="firebase-heartbeat-store";let x=null;function P(){return x||(x=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(S)}}).catch((e=>{throw b.create("idb-open",{originalErrorMessage:e.message})}))),x}async function k(e,t){try{const n=(await P()).transaction(S,"readwrite"),i=n.objectStore(S);return await i.put(t,O(e)),n.done}catch(e){if(e instanceof o.FirebaseError)u.warn(e.message);else{const t=b.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}function O(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new A(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=M();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=M(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),N(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),N(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function M(){return(new Date).toISOString().substring(0,10)}class A{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await P()).transaction(S).objectStore(S).get(O(e))}catch(e){if(e instanceof o.FirebaseError)u.warn(e.message);else{const t=b.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return k(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return k(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function N(e){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L;L="",v(new(0,i.Component)("platform-logger",(e=>new l(e)),"PRIVATE")),v(new(0,i.Component)("heartbeat",(e=>new R(e)),"PRIVATE")),I(c,h,L),I(c,h,"esm2017"),I("fire-js","")})),r.register("4a6xH",(function(t,n){e(t.exports,"Component",(function(){return s})),e(t.exports,"ComponentContainer",(function(){return l}));var i=r("ffjl9");class s{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new(0,i.Deferred);if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===o?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}})),r.register("ffjl9",(function(t,i){e(t.exports,"assert",(function(){return c})),e(t.exports,"assertionError",(function(){return h})),e(t.exports,"base64",(function(){return d})),e(t.exports,"base64Encode",(function(){return f})),e(t.exports,"base64urlEncodeWithoutPadding",(function(){return m})),e(t.exports,"base64Decode",(function(){return g})),e(t.exports,"deepCopy",(function(){return v})),e(t.exports,"getDefaultEmulatorHost",(function(){return w})),e(t.exports,"getDefaultEmulatorHostnameAndPort",(function(){return C})),e(t.exports,"getDefaultAppConfig",(function(){return E})),e(t.exports,"getExperimentalSetting",(function(){return T})),e(t.exports,"Deferred",(function(){return I})),e(t.exports,"createMockUserToken",(function(){return S})),e(t.exports,"getUA",(function(){return x})),e(t.exports,"isMobileCordova",(function(){return P})),e(t.exports,"isBrowserExtension",(function(){return k})),e(t.exports,"isReactNative",(function(){return O})),e(t.exports,"isIE",(function(){return R})),e(t.exports,"isNodeSdk",(function(){return M})),e(t.exports,"isIndexedDBAvailable",(function(){return A})),e(t.exports,"validateIndexedDBOpenable",(function(){return N})),e(t.exports,"FirebaseError",(function(){return L})),e(t.exports,"ErrorFactory",(function(){return D})),e(t.exports,"jsonEval",(function(){return j})),e(t.exports,"stringify",(function(){return z})),e(t.exports,"isValidFormat",(function(){return H})),e(t.exports,"isAdmin",(function(){return B})),e(t.exports,"contains",(function(){return U})),e(t.exports,"safeGet",(function(){return W})),e(t.exports,"isEmpty",(function(){return $})),e(t.exports,"map",(function(){return V})),e(t.exports,"deepEqual",(function(){return G})),e(t.exports,"querystring",(function(){return K})),e(t.exports,"querystringDecode",(function(){return X})),e(t.exports,"extractQuerystring",(function(){return J})),e(t.exports,"Sha1",(function(){return Z})),e(t.exports,"createSubscribe",(function(){return Q})),e(t.exports,"errorPrefix",(function(){return ne})),e(t.exports,"stringToByteArray",(function(){return ie})),e(t.exports,"stringLength",(function(){return se})),e(t.exports,"getModularInstance",(function(){return re}));var s=r("4TNnu");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o=!1,a=!1,l="${JSCORE_VERSION}",c=function(e,t){if(!e)throw h(t)},h=function(e){return new Error("Firebase Database ("+l+") INTERNAL ASSERT FAILED: "+e)},u=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},d={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=s>>2,h=(3&s)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,r||(u=64)),i.push(n[c],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(u(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw new p;const l=s<<2|r>>4;if(i.push(l),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const f=function(e){const t=u(e);return d.encodeByteArray(t,!0)},m=function(e){return f(e).replace(/\./g,"")},g=function(e){try{return d.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function v(e){return _(void 0,e)}function _(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=_(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const y=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,b=()=>{try{return y()||(()=>{if(void 0===s||void 0===s.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&g(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},w=e=>{var t,n;return null===(n=null===(t=b())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},C=e=>{const t=w(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},E=()=>{var e;return null===(e=b())||void 0===e?void 0:e.config},T=e=>{var t;return null===(t=b())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[m(JSON.stringify({alg:"none",type:"JWT"})),m(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function P(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(x())}function k(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function O(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function R(){const e=x();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function M(){return!0===o||!0===a}function A(){try{return"object"==typeof indexedDB}catch(e){return!1}}function N(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class L extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,L.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(F,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new L(i,o,n)}}const F=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){return JSON.parse(e)}function z(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=j(g(r[0])||""),n=j(g(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:s}},H=function(e){const t=q(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},B=function(e){const t=q(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function W(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function $(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function V(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function G(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(Y(n)&&Y(r)){if(!G(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function Y(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function X(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function J(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),s=1518500249):(i=o^a^l,s=1859775393):e<60?(i=o&a|l&(o|a),s=2400959708):(i=o^a^l,s=3395469782);const t=(r<<5|r>>>27)+i+c+s+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<t;)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function Q(e,t){const n=new ee(e,t);return n.subscribe.bind(n)}class ee{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=te),void 0===i.error&&(i.error=te),void 0===i.complete&&(i.complete=te);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function te(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ie=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,c(i<e.length,"Surrogate pair missing trail surrogate.");s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},se=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function re(e){return e&&e._delegate?e._delegate:e}})),r.register("4TNnu",(function(e,t){var n,i,s=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var l,c=[],h=!1,u=-1;function d(){h&&l&&(h=!1,l.length?c=l.concat(c):u=-1,c.length&&p())}function p(){if(!h){var e=a(d);h=!0;for(var t=c.length;t;){for(l=c,c=[];++u<t;)l&&l[u].run();u=-1,t=c.length}l=null,h=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new f(e,t)),1!==c.length||h||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}})),r.register("7vF8m",(function(t,n){e(t.exports,"LogLevel",(function(){return s})),e(t.exports,"Logger",(function(){return h})),e(t.exports,"setLogLevel",(function(){return u})),e(t.exports,"setUserLogHandler",(function(){return d}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var s,r;(r=s||(s={}))[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT";const o={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},a=s.INFO,l={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=l[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class h{constructor(e){this.name=e,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}function u(e){i.forEach((t=>{t.setLogLevel(e)}))}function d(e,t){for(const n of i){let i=null;t&&t.level&&(i=o[t.level]),n.userLogHandler=null===e?null:(t,n,...r)=>{const o=r.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:s[n].toLowerCase(),message:o,args:r,type:t.name})}}}})),r.register("cCiiD",(function(t,n){e(t.exports,"openDB",(function(){return s}));var i=r("ekHjI");i=r("ekHjI");function s(e,t,{blocked:n,upgrade:s,blocking:r,terminated:o}={}){const a=indexedDB.open(e,t),l=(0,i.w)(a);return s&&a.addEventListener("upgradeneeded",(e=>{s((0,i.w)(a.result),e.oldVersion,e.newVersion,(0,i.w)(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),l.then((e=>{o&&e.addEventListener("close",(()=>o())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),l}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],l=new Map;function c(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(l.get(t))return l.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=a.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!o.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return l.set(t,r),r}(0,i.r)((e=>({...e,get:(t,n,i)=>c(t,n)||e.get(t,n,i),has:(t,n)=>!!c(t,n)||e.has(t,n)})))})),r.register("ekHjI",(function(t,n){e(t.exports,"w",(function(){return f})),e(t.exports,"r",(function(){return u}));let i,s;const r=new WeakMap,o=new WeakMap,a=new WeakMap,l=new WeakMap,c=new WeakMap;let h={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return o.get(e);if("objectStoreNames"===t)return e.objectStoreNames||a.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return f(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function u(e){h=e(h)}function d(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(m(this),t),f(r.get(this))}:function(...t){return f(e.apply(m(this),t))}:function(t,...n){const i=e.call(m(this),t,...n);return a.set(i,t.sort?t.sort():[t]),f(i)}}function p(e){return"function"==typeof e?d(e):(e instanceof IDBTransaction&&function(e){if(o.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));o.set(e,t)}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,h):e);var t}function f(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(f(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&r.set(t,e)})).catch((()=>{})),c.set(t,e),t}(e);if(l.has(e))return l.get(e);const t=p(e);return t!==e&&(l.set(e,t),c.set(t,e)),t}const m=e=>c.get(e)})),r.register("jAzyG",(function(t,n){e(t.exports,"getDatabase",(function(){return r("8NPS8").getDatabase})),e(t.exports,"ref",(function(){return r("8NPS8").ref})),e(t.exports,"onValue",(function(){return r("8NPS8").onValue})),e(t.exports,"get",(function(){return r("8NPS8").get})),e(t.exports,"set",(function(){return r("8NPS8").set})),r("8NPS8")})),r.register("8NPS8",(function(t,n){e(t.exports,"ref",(function(){return bs})),e(t.exports,"set",(function(){return Cs})),e(t.exports,"get",(function(){return Es})),e(t.exports,"onValue",(function(){return xs})),e(t.exports,"getDatabase",(function(){return Ms}));var i=r("ix4Jr"),s=r("4a6xH"),o=r("ffjl9"),a=r("7vF8m"),l=r("4TNnu");const c="@firebase/database",h="0.14.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class d{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,o.stringify)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,o.jsonEval)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,o.contains)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new d(t)}}catch(e){}return new p},m=f("localStorage"),g=f("sessionStorage"),v=new(0,a.Logger)("@firebase/database"),_=function(){let e=1;return function(){return e++}}(),y=function(e){const t=(0,o.stringToByteArray)(e),n=new(0,o.Sha1);n.update(t);const i=n.digest();return o.base64.encodeByteArray(i)},b=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=b.apply(null,i):t+="object"==typeof i?(0,o.stringify)(i):i,t+=" "}return t};let w=null,C=!0;const E=function(e,t){(0,o.assert)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(v.logLevel=a.LogLevel.VERBOSE,w=v.log.bind(v),t&&g.set("logging_enabled",!0)):"function"==typeof e?w=e:(w=null,g.remove("logging_enabled"))},T=function(...e){if(!0===C&&(C=!1,null===w&&!0===g.get("logging_enabled")&&E(!0)),w){const t=b.apply(null,e);w(t)}},I=function(e){return function(...t){T(e,...t)}},S=function(...e){const t="FIREBASE INTERNAL ERROR: "+b(...e);v.error(t)},x=function(...e){const t=`FIREBASE FATAL ERROR: ${b(...e)}`;throw v.error(t),new Error(t)},P=function(...e){const t="FIREBASE WARNING: "+b(...e);v.warn(t)},k=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},O="[MIN_NAME]",R="[MAX_NAME]",M=function(e,t){if(e===t)return 0;if(e===O||t===R)return-1;if(t===O||e===R)return 1;{const n=q(e),i=q(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},A=function(e,t){return e===t?0:e<t?-1:1},N=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,o.stringify)(t))},L=function(e){if("object"!=typeof e||null===e)return(0,o.stringify)(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,o.stringify)(t[i]),n+=":",n+=L(e[t[i]]);return n+="}",n},D=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function F(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const j=function(e){(0,o.assert)(!k(e),"Invalid JSON number");const t=1023;let n,i,s,r,a;0===e?(i=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=r+t,s=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,s=Math.round(e/Math.pow(2,-1074))));const l=[];for(a=52;a;a-=1)l.push(s%2?1:0),s=Math.floor(s/2);for(a=11;a;a-=1)l.push(i%2?1:0),i=Math.floor(i/2);l.push(n?1:0),l.reverse();const c=l.join("");let h="";for(a=0;a<64;a+=8){let e=parseInt(c.substr(a,8),2).toString(16);1===e.length&&(e="0"+e),h+=e}return h.toLowerCase()};const z=new RegExp("^-?(0*)\\d{1,10}$"),q=function(e){if(z.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},H=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw P("Exception was thrown by user callback.",t),e}),Math.floor(0))}},B=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class U{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){P(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(T("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',P(e)}}class ${constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}$.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const V="5",G=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Y="websocket",K="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(e,t,n,i,s=!1,r="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=m.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&m.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function J(e,t,n){let i;if((0,o.assert)("string"==typeof t,"typeof type must == string"),(0,o.assert)("object"==typeof n,"typeof params must == object"),t===Y)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==K)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return F(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,o.contains)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,o.deepCopy)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={},ee={};function te(e){const t=e.toString();return Q[t]||(Q[t]=new Z),Q[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&H((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="start";class se{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=I(e),this.stats_=te(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),J(t,K,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ne(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if((0,o.isNodeSdk)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new re(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ie)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=V,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&G.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){se.forceAllow_=!0}static forceDisallow(){se.forceDisallow_=!0}static isAvailable(){return!(0,o.isNodeSdk)()&&(!!se.forceAllow_||!(se.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,o.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,o.base64Encode)(t),i=D(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,o.isNodeSdk)())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,o.stringify)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class re{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,o.isNodeSdk)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=_(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=re.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){T("frame writing exception"),e.stack&&T(e.stack),T(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||T("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){(0,o.isNodeSdk)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{T("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oe=null;"undefined"!=typeof MozWebSocket?oe=MozWebSocket:"undefined"!=typeof WebSocket&&(oe=WebSocket);class ae{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=I(this.connId),this.stats_=te(t),this.connURL=ae.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){const r={};return r.v=V,!(0,o.isNodeSdk)()&&"undefined"!=typeof location&&location.hostname&&G.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r.ac=i),s&&(r.p=s),J(e,Y,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,m.set("previous_websocket_failure",!0);try{let e;if((0,o.isNodeSdk)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${u}/${l.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new oe(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){ae.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==oe&&!ae.forceDisallow_}static previouslyFailed(){return m.isInMemoryStorage||!0===m.get("previous_websocket_failure")}markConnectionHealthy(){m.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,o.jsonEval)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,o.assert)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,o.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=D(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ae.responsesRequiredToBeHealthy=2,ae.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[se,ae]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ae&&ae.isAvailable();let n=t&&!ae.previouslyFailed();if(e.webSocketOnly&&(t||P("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[ae];else{const e=this.transports_=[];for(const t of le.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);le.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}le.globalTransportInitialized_=!1;class ce{constructor(e,t,n,i,s,r,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=I("c:"+this.id+":"),this.transportManager_=new le(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=B((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=N("t",e),n=N("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=N("t",e),n=N("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=N("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?S("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):S("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),V!==n&&P("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),B((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):B((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(m.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,o.assert)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){(0,o.assert)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends ue{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,o.isMobileCordova)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new de}getInitialEvent(e){return(0,o.assert)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function fe(){return new pe("")}function me(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ge(e){return e.pieces_.length-e.pieceNum_}function ve(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new pe(e.pieces_,t)}function _e(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function ye(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function be(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new pe(t,0)}function we(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof pe)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new pe(n,0)}function Ce(e){return e.pieceNum_>=e.pieces_.length}function Ee(e,t){const n=me(e),i=me(t);if(null===n)return t;if(n===i)return Ee(ve(e),ve(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Te(e,t){if(ge(e)!==ge(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Ie(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(ge(e)>ge(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Se{constructor(e,t){this.errorPrefix_=t,this.parts_=ye(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=(0,o.stringLength)(this.parts_[e]);xe(this)}}function xe(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Pe(e))}function Pe(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends ue{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new ke}getInitialEvent(e){return(0,o.assert)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=1e3;class Re extends he{constructor(e,t,n,i,s,r,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Re.nextPersistentConnectionId_++,this.log_=I("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Oe,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!(0,o.isNodeSdk)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ke.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&de.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_((0,o.stringify)(s)),(0,o.assert)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new(0,o.Deferred),n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),(0,o.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,o.assert)(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;Re.warnOnListenWarnings_(r,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&(0,o.contains)(e,"w")){const n=(0,o.safeGet)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();P(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||(0,o.isAdmin)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,o.isValidFormat)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,o.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,o.stringify)(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):S("Unrecognized action received from server: "+(0,o.stringify)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,o.assert)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Oe,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Oe,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Oe),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Re.nextConnectionId_++,s=this.lastSessionId;let r=!1,a=null;const l=function(){a?a.close():(r=!0,n())},c=function(e){(0,o.assert)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,l]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);r?T("getToken() completed but was canceled"):(T("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=l&&l.token,a=new ce(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{P(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),r||(this.repoInfo_.nodeAdmin&&P(e),l())}}}interrupt(e){T("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){T("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,o.isEmpty)(this.interruptReasons_)&&(this.reconnectDelay_=Oe,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>L(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new pe(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){T("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){T("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,o.isNodeSdk)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+u.replace(/\./g,"-")]=1,(0,o.isMobileCordova)()?e["framework.cordova"]=1:(0,o.isReactNative)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=de.getInstance().currentlyOnline();return(0,o.isEmpty)(this.interruptReasons_)&&e}}Re.nextPersistentConnectionId_=0,Re.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Me(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Me(O,e),i=new Me(O,t);return 0!==this.compare(n,i)}minPost(){return Me.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ne;class Le extends Ae{static get __EMPTY_NODE(){return Ne}static set __EMPTY_NODE(e){Ne=e}compare(e,t){return M(e.name,t.name)}isDefinedOn(e){throw(0,o.assertionError)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Me.MIN}maxPost(){return new Me(R,Ne)}makePost(e,t){return(0,o.assert)("string"==typeof e,"KeyIndex indexValue must always be a string."),new Me(e,Ne)}toString(){return".key"}}const De=new Le;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class je{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:je.RED,this.left=null!=i?i:ze.EMPTY_NODE,this.right=null!=s?s:ze.EMPTY_NODE}copy(e,t,n,i,s){return new je(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ze.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return ze.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}je.RED=!0,je.BLACK=!1;class ze{constructor(e,t=ze.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ze(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,je.BLACK,null,null))}remove(e){return new ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,je.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fe(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Fe(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Fe(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Fe(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qe(e,t){return M(e.name,t.name)}function He(e,t){return M(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Be;ze.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new je(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Ue=function(e){return"number"==typeof e?"number:"+j(e):"string:"+e},We=function(e){if(e.isLeafNode()){const t=e.val();(0,o.assert)("string"==typeof t||"number"==typeof t||"object"==typeof t&&(0,o.contains)(t,".sv"),"Priority must be a string or number.")}else(0,o.assert)(e===Be||e.isEmpty(),"priority of unexpected type.");(0,o.assert)(e===Be||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let $e,Ve,Ge;class Ye{constructor(e,t=Ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,o.assert)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),We(this.priorityNode_)}static set __childrenNodeConstructor(e){$e=e}static get __childrenNodeConstructor(){return $e}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ye(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ce(e)?this:".priority"===me(e)?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=me(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,o.assert)(".priority"!==n||1===ge(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ue(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?j(this.value_):this.value_,this.lazyHash_=y(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ye.__childrenNodeConstructor?-1:((0,o.assert)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Ye.VALUE_TYPE_ORDER.indexOf(t),s=Ye.VALUE_TYPE_ORDER.indexOf(n);return(0,o.assert)(i>=0,"Unknown leaf type: "+t),(0,o.assert)(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Ke=new class extends Ae{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?M(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Me.MIN}maxPost(){return new Me(R,new Ye("[PRIORITY-POST]",Ge))}makePost(e,t){const n=Ve(e);return new Me(t,new Ye("[PRIORITY-POST]",n))}toString(){return".priority"}},Xe=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Xe,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ze=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new je(a,o.node,je.BLACK,null,null);{const l=parseInt(r/2,10)+t,c=s(t,l),h=s(l+1,i);return o=e[l],a=n?n(o):o,new je(a,o.node,je.BLACK,c,h)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const c=s(r+1,a),h=e[r],u=n?n(h):h;l(new je(u,h.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,je.BLACK):(a(i,je.BLACK),a(i,je.RED))}return r}(new Je(e.length));return new ze(i||t,r)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qe;const et={};class tt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,o.assert)(et&&Ke,"ChildrenNode.ts has not been loaded"),Qe=Qe||new tt({".priority":et},{".priority":Ke}),Qe}get(e){const t=(0,o.safeGet)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ze?t:null}hasIndex(e){return(0,o.contains)(this.indexSet_,e.toString())}addIndex(e,t){(0,o.assert)(e!==De,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(Me.Wrap);let r,a=s.getNext();for(;a;)i=i||e.isDefinedOn(a.node),n.push(a),a=s.getNext();r=i?Ze(n,e.getCompare()):et;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=r,new tt(h,c)}addToIndexes(e,t){const n=(0,o.map)(this.indexes_,((n,i)=>{const s=(0,o.safeGet)(this.indexSet_,i);if((0,o.assert)(s,"Missing index implementation for "+i),n===et){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(Me.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),Ze(n,s.getCompare())}return et}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new Me(e.name,i))),s.insert(e,e.node)}}));return new tt(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,o.map)(this.indexes_,(n=>{if(n===et)return n;{const i=t.get(e.name);return i?n.remove(new Me(e.name,i)):n}}));return new tt(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nt;class it{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&We(this.priorityNode_),this.children_.isEmpty()&&(0,o.assert)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return nt||(nt=new it(new ze(He),null,tt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||nt}updatePriority(e){return this.children_.isEmpty()?this:new it(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?nt:t}}getChild(e){const t=me(e);return null===t?this:this.getImmediateChild(t).getChild(ve(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,o.assert)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Me(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?nt:this.priorityNode_;return new it(i,r,s)}}updateChild(e,t){const n=me(e);if(null===n)return t;{(0,o.assert)(".priority"!==me(e)||1===ge(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(ve(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(Ke,((r,o)=>{t[r]=o.val(e),n++,s&&it.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ue(this.getPriority().val())+":"),this.forEachChild(Ke,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":y(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Me(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Me(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Me(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Me.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Me.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===st?-1:0}withIndex(e){if(e===De||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new it(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===De||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Ke),n=t.getIterator(Ke);let i=e.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===De?null:this.indexMap_.get(e.toString())}}it.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const st=new class extends it{constructor(){super(new ze(He),it.EMPTY_NODE,tt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return it.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Me,{MIN:{value:new Me(O,it.EMPTY_NODE)},MAX:{value:new Me(R,st)}}),Le.__EMPTY_NODE=it.EMPTY_NODE,Ye.__childrenNodeConstructor=it,Be=st,function(e){Ge=e}(st);function rt(e,t=null){if(null===e)return it.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),(0,o.assert)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Ye(e,rt(t))}if(e instanceof Array){let n=it.EMPTY_NODE;return F(e,((t,i)=>{if((0,o.contains)(e,t)&&"."!==t.substring(0,1)){const e=rt(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(rt(t))}{const n=[];let i=!1;if(F(e,((e,t)=>{if("."!==e.substring(0,1)){const s=rt(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new Me(e,s)))}})),0===n.length)return it.EMPTY_NODE;const s=Ze(n,qe,(e=>e.name),He);if(i){const e=Ze(n,Ke.getCompare());return new it(s,rt(t),new tt({".priority":e},{".priority":Ke}))}return new it(s,rt(t),tt.Default)}}!function(e){Ve=e}(rt);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot extends Ae{constructor(e){super(),this.indexPath_=e,(0,o.assert)(!Ce(e)&&".priority"!==me(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?M(e.name,t.name):s}makePost(e,t){const n=rt(e),i=it.EMPTY_NODE.updateChild(this.indexPath_,n);return new Me(t,i)}maxPost(){const e=it.EMPTY_NODE.updateChild(this.indexPath_,st);return new Me(R,e)}toString(){return ye(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new class extends Ae{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?M(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Me.MIN}maxPost(){return Me.MAX}makePost(e,t){const n=rt(e);return new Me(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(e){return{type:"value",snapshotNode:e}}function ct(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ht(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function ut(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(e){this.index_=e}updateChild(e,t,n,i,s,r){(0,o.assert)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=r&&(n.isEmpty()?e.hasChild(t)?r.trackChildChange(ht(t,a)):(0,o.assert)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?r.trackChildChange(ct(t,n)):r.trackChildChange(ut(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Ke,((e,i)=>{t.hasChild(e)||n.trackChildChange(ht(e,i))})),t.isLeafNode()||t.forEachChild(Ke,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(ut(t,i,s))}else n.trackChildChange(ct(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?it.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.indexedFilter_=new dt(e.getIndex()),this.index_=e.getIndex(),this.startPost_=pt.getStartPost_(e),this.endPost_=pt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,s,r){return this.matches(new Me(t,n))||(n=it.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=it.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(it.EMPTY_NODE);const s=this;return t.forEachChild(Ke,((e,t)=>{s.matches(new Me(e,t))||(i=i.updateImmediateChild(e,it.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new pt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new Me(t,n))||(n=it.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=it.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=it.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(it.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,it.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let r;if(this.reverse_){const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else r=this.index_.getCompare();const a=e;(0,o.assert)(a.numChildren()===this.limit_,"");const l=new Me(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const e=a.getImmediateChild(t);let o=i.getChildAfterChild(this.index_,c,this.reverse_);for(;null!=o&&(o.name===t||a.hasChild(o.name));)o=i.getChildAfterChild(this.index_,o,this.reverse_);const u=null==o?1:r(o,l);if(h&&!n.isEmpty()&&u>=0)return null!=s&&s.trackChildChange(ut(t,n,e)),a.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(ht(t,e));const n=a.updateImmediateChild(t,it.EMPTY_NODE);return null!=o&&this.rangedFilter_.matches(o)?(null!=s&&s.trackChildChange(ct(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:h&&r(c,l)>=0?(null!=s&&(s.trackChildChange(ht(c.name,c.node)),s.trackChildChange(ct(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,it.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ke}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,o.assert)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,o.assert)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:O}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,o.assert)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,o.assert)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:R}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,o.assert)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ke}copy(){const e=new mt;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function gt(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Ke?n="$priority":e.index_===at?n="$value":e.index_===De?n="$key":((0,o.assert)(e.index_ instanceof ot,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=(0,o.stringify)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,o.stringify)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,o.stringify)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,o.stringify)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,o.stringify)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function vt(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Ke&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends he{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=I("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,o.assert)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=_t.getListenId_(e,n),a={};this.listens_[r]=a;const l=gt(e._queryParams);this.restRequest_(s+".json",l,((e,t)=>{let l=t;if(404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(s,l,!1,n),(0,o.safeGet)(this.listens_,r)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=_t.getListenId_(e,t);delete this.listens_[n]}get(e){const t=gt(e._queryParams),n=e._path.toString(),i=new(0,o.Deferred);return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,o.querystring)(t);this.log_("Sending REST request for "+r);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+r+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=(0,o.jsonEval)(a.responseText)}catch(e){P("Failed to parse JSON response for "+r+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&P("Got unsuccessful REST response for "+r+" Status: "+a.status),n(a.status);n=null}},a.open("GET",r,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(){this.rootNode_=it.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return{value:null,children:new Map}}function wt(e,t,n){if(Ce(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=me(t);e.children.has(i)||e.children.set(i,bt());wt(e.children.get(i),t=ve(t),n)}}function Ct(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{Ct(i,new pe(t.toString()+"/"+e),n)}))}class Et{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&F(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Et(e);const n=1e4+2e4*Math.random();B(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;F(e,((e,i)=>{i>0&&(0,o.contains)(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),B(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It,St;function xt(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(St=It||(It={}))[St.OVERWRITE=0]="OVERWRITE",St[St.MERGE=1]="MERGE",St[St.ACK_USER_WRITE=2]="ACK_USER_WRITE",St[St.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Pt{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=It.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Ce(this.path)){if(null!=this.affectedTree.value)return(0,o.assert)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new pe(e));return new Pt(fe(),t,this.revert)}}return(0,o.assert)(me(this.path)===e,"operationForChild called for unrelated child."),new Pt(ve(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t){this.source=e,this.path=t,this.type=It.LISTEN_COMPLETE}operationForChild(e){return Ce(this.path)?new kt(this.source,fe()):new kt(this.source,ve(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=It.OVERWRITE}operationForChild(e){return Ce(this.path)?new Ot(this.source,fe(),this.snap.getImmediateChild(e)):new Ot(this.source,ve(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=It.MERGE}operationForChild(e){if(Ce(this.path)){const t=this.children.subtree(new pe(e));return t.isEmpty()?null:t.value?new Ot(this.source,fe(),t.value):new Rt(this.source,fe(),t)}return(0,o.assert)(me(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Rt(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ce(e))return this.isFullyInitialized()&&!this.filtered_;const t=me(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Nt(e,t,n,i,s,r){const a=i.filter((e=>e.type===n));a.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw(0,o.assertionError)("Should only compare child_ events.");const i=new Me(t.childName,t.snapshotNode),s=new Me(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),a.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function Lt(e,t){return{eventCache:e,serverCache:t}}function Dt(e,t,n,i){return Lt(new Mt(t,n,i),e.serverCache)}function Ft(e,t,n,i){return Lt(e.eventCache,new Mt(t,n,i))}function jt(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function zt(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qt;class Ht{constructor(e,t=(()=>(qt||(qt=new ze(A)),qt))()){this.value=e,this.children=t}static fromObject(e){let t=new Ht(null);return F(e,((e,n)=>{t=t.set(new pe(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:fe(),value:this.value};if(Ce(e))return null;{const n=me(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(ve(e),t);if(null!=s){return{path:we(new pe(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Ce(e))return this;{const t=me(e),n=this.children.get(t);return null!==n?n.subtree(ve(e)):new Ht(null)}}set(e,t){if(Ce(e))return new Ht(t,this.children);{const n=me(e),i=(this.children.get(n)||new Ht(null)).set(ve(e),t),s=this.children.insert(n,i);return new Ht(this.value,s)}}remove(e){if(Ce(e))return this.children.isEmpty()?new Ht(null):new Ht(null,this.children);{const t=me(e),n=this.children.get(t);if(n){const i=n.remove(ve(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new Ht(null):new Ht(this.value,s)}return this}}get(e){if(Ce(e))return this.value;{const t=me(e),n=this.children.get(t);return n?n.get(ve(e)):null}}setTree(e,t){if(Ce(e))return t;{const n=me(e),i=(this.children.get(n)||new Ht(null)).setTree(ve(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Ht(this.value,s)}}fold(e){return this.fold_(fe(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(we(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,fe(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Ce(e))return null;{const i=me(e),s=this.children.get(i);return s?s.findOnPath_(ve(e),we(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,fe(),t)}foreachOnPath_(e,t,n){if(Ce(e))return this;{this.value&&n(t,this.value);const i=me(e),s=this.children.get(i);return s?s.foreachOnPath_(ve(e),we(t,i),n):new Ht(null)}}foreach(e){this.foreach_(fe(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(we(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.writeTree_=e}static empty(){return new Bt(new Ht(null))}}function Ut(e,t,n){if(Ce(t))return new Bt(new Ht(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=Ee(s,t);return r=r.updateChild(o,n),new Bt(e.writeTree_.set(s,r))}{const i=new Ht(n),s=e.writeTree_.setTree(t,i);return new Bt(s)}}}function Wt(e,t,n){let i=e;return F(n,((e,n)=>{i=Ut(i,we(t,e),n)})),i}function $t(e,t){if(Ce(t))return Bt.empty();{const n=e.writeTree_.setTree(t,new Ht(null));return new Bt(n)}}function Vt(e,t){return null!=Gt(e,t)}function Gt(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ee(n.path,t)):null}function Yt(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Ke,((e,n)=>{t.push(new Me(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Me(e,n.value))})),t}function Kt(e,t){if(Ce(t))return e;{const n=Gt(e,t);return new Bt(null!=n?new Ht(n):e.writeTree_.subtree(t))}}function Xt(e){return e.writeTree_.isEmpty()}function Jt(e,t){return Zt(fe(),e.writeTree_,t)}function Zt(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?((0,o.assert)(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=Zt(we(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(we(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e,t){return pn(t,e)}function en(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,o.assert)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,a=e.allWrites.length-1;for(;s&&a>=0;){const t=e.allWrites[a];t.visible&&(a>=n&&tn(t,i.path)?s=!1:Ie(i.path,t.path)&&(r=!0)),a--}if(s){if(r)return function(e){e.visibleWrites=sn(e.allWrites,nn,fe()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=$t(e.visibleWrites,i.path);else{F(i.children,(t=>{e.visibleWrites=$t(e.visibleWrites,we(i.path,t))}))}return!0}return!1}function tn(e,t){if(e.snap)return Ie(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ie(we(e.path,n),t))return!0;return!1}function nn(e){return e.visible}function sn(e,t,n){let i=Bt.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)Ie(n,e)?(t=Ee(n,e),i=Ut(i,t,r.snap)):Ie(e,n)&&(t=Ee(e,n),i=Ut(i,fe(),r.snap.getChild(t)));else{if(!r.children)throw(0,o.assertionError)("WriteRecord should have .snap or .children");if(Ie(n,e))t=Ee(n,e),i=Wt(i,t,r.children);else if(Ie(e,n))if(t=Ee(e,n),Ce(t))i=Wt(i,fe(),r.children);else{const e=(0,o.safeGet)(r.children,me(t));if(e){const n=e.getChild(ve(t));i=Ut(i,fe(),n)}}}}}return i}function rn(e,t,n,i,s){if(i||s){const r=Kt(e.visibleWrites,t);if(!s&&Xt(r))return n;if(s||null!=n||Vt(r,fe())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(Ie(e.path,t)||Ie(t,e.path))};return Jt(sn(e.allWrites,r,t),n||it.EMPTY_NODE)}return null}{const i=Gt(e.visibleWrites,t);if(null!=i)return i;{const i=Kt(e.visibleWrites,t);if(Xt(i))return n;if(null!=n||Vt(i,fe())){return Jt(i,n||it.EMPTY_NODE)}return null}}}function on(e,t,n,i){return rn(e.writeTree,e.treePath,t,n,i)}function an(e,t){return function(e,t,n){let i=it.EMPTY_NODE;const s=Gt(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(Ke,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=Kt(e.visibleWrites,t);return n.forEachChild(Ke,((e,t)=>{const n=Jt(Kt(s,new pe(e)),t);i=i.updateImmediateChild(e,n)})),Yt(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Yt(Kt(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function ln(e,t,n,i){return function(e,t,n,i,s){(0,o.assert)(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=we(t,n);if(Vt(e.visibleWrites,r))return null;{const t=Kt(e.visibleWrites,r);return Xt(t)?s.getChild(n):Jt(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function cn(e,t){return function(e,t){return Gt(e.visibleWrites,t)}(e.writeTree,we(e.treePath,t))}function hn(e,t,n,i,s,r){return function(e,t,n,i,s,r,o){let a;const l=Kt(e.visibleWrites,t),c=Gt(l,fe());if(null!=c)a=c;else{if(null==n)return[];a=Jt(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<s;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,s,r)}function un(e,t,n){return function(e,t,n,i){const s=we(t,n),r=Gt(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return Jt(Kt(e.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function dn(e,t){return pn(we(e.treePath,t),e.writeTree)}function pn(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,o.assert)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,o.assert)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,ut(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,ht(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,ct(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw(0,o.assertionError)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,ut(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class gn{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Mt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return un(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:zt(this.viewCache_),s=hn(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(e,t,n,i,s){const r=new fn;let a,l;if(n.type===It.OVERWRITE){const c=n;c.source.fromUser?a=bn(e,t,c.path,c.snap,i,s,r):((0,o.assert)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered()&&!Ce(c.path),a=yn(e,t,c.path,c.snap,i,s,l,r))}else if(n.type===It.MERGE){const c=n;c.source.fromUser?a=function(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,l)=>{const c=we(n,i);wn(t,me(c))&&(a=bn(e,a,c,l,s,r,o))})),i.foreach(((i,l)=>{const c=we(n,i);wn(t,me(c))||(a=bn(e,a,c,l,s,r,o))})),a}(e,t,c.path,c.children,i,s,r):((0,o.assert)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered(),a=En(e,t,c.path,c.children,i,s,l,r))}else if(n.type===It.ACK_USER_WRITE){const l=n;a=l.revert?function(e,t,n,i,s,r){let a;if(null!=cn(i,n))return t;{const l=new gn(i,t,s),c=t.eventCache.getNode();let h;if(Ce(n)||".priority"===me(n)){let n;if(t.serverCache.isFullyInitialized())n=on(i,zt(t));else{const e=t.serverCache.getNode();(0,o.assert)(e instanceof it,"serverChildren would be complete if leaf node"),n=an(i,e)}h=e.filter.updateFullNode(c,n,r)}else{const s=me(n);let o=un(i,s,t.serverCache);null==o&&t.serverCache.isCompleteForChild(s)&&(o=c.getImmediateChild(s)),h=null!=o?e.filter.updateChild(c,s,o,ve(n),l,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(c,s,it.EMPTY_NODE,ve(n),l,r):c,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=on(i,zt(t)),a.isLeafNode()&&(h=e.filter.updateFullNode(h,a,r)))}return a=t.serverCache.isFullyInitialized()||null!=cn(i,fe()),Dt(t,h,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,l.path,i,s,r):function(e,t,n,i,s,r,o){if(null!=cn(s,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(Ce(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return yn(e,t,n,l.getNode().getChild(n),s,r,a,o);if(Ce(n)){let i=new Ht(null);return l.getNode().forEachChild(De,((e,t)=>{i=i.set(new pe(e),t)})),En(e,t,n,i,s,r,a,o)}return t}{let c=new Ht(null);return i.foreach(((e,t)=>{const i=we(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),En(e,t,n,c,s,r,a,o)}}(e,t,l.path,l.affectedTree,i,s,r)}else{if(n.type!==It.LISTEN_COMPLETE)throw(0,o.assertionError)("Unknown operation type: "+n.type);a=function(e,t,n,i,s){const r=t.serverCache,o=Ft(t,r.getNode(),r.isFullyInitialized()||Ce(n),r.isFiltered());return _n(e,o,n,i,mn,s)}(e,t,n.path,i,r)}const c=r.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=jt(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(lt(jt(t)))}}(t,a,c),{viewCache:a,changes:c}}function _n(e,t,n,i,s,r){const a=t.eventCache;if(null!=cn(i,n))return t;{let l,c;if(Ce(n))if((0,o.assert)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=zt(t),s=an(i,n instanceof it?n:it.EMPTY_NODE);l=e.filter.updateFullNode(t.eventCache.getNode(),s,r)}else{const n=on(i,zt(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const h=me(n);if(".priority"===h){(0,o.assert)(1===ge(n),"Can't have a priority with additional path components");const s=a.getNode();c=t.serverCache.getNode();const r=ln(i,n,s,c);l=null!=r?e.filter.updatePriority(s,r):a.getNode()}else{const o=ve(n);let u;if(a.isCompleteForChild(h)){c=t.serverCache.getNode();const e=ln(i,n,a.getNode(),c);u=null!=e?a.getNode().getImmediateChild(h).updateChild(o,e):a.getNode().getImmediateChild(h)}else u=un(i,h,t.serverCache);l=null!=u?e.filter.updateChild(a.getNode(),h,u,o,s,r):a.getNode()}}return Dt(t,l,a.isFullyInitialized()||Ce(n),e.filter.filtersNodes())}}function yn(e,t,n,i,s,r,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(Ce(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),e,null)}else{const e=me(n);if(!l.isCompleteForPath(n)&&ge(n)>1)return t;const s=ve(n),r=l.getNode().getImmediateChild(e).updateChild(s,i);c=".priority"===e?h.updatePriority(l.getNode(),r):h.updateChild(l.getNode(),e,r,s,mn,null)}const u=Ft(t,c,l.isFullyInitialized()||Ce(n),h.filtersNodes());return _n(e,u,n,s,new gn(s,u,r),a)}function bn(e,t,n,i,s,r,o){const a=t.eventCache;let l,c;const h=new gn(s,t,r);if(Ce(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=Dt(t,c,!0,e.filter.filtersNodes());else{const s=me(n);if(".priority"===s)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=Dt(t,c,a.isFullyInitialized(),a.isFiltered());else{const r=ve(n),c=a.getNode().getImmediateChild(s);let u;if(Ce(r))u=i;else{const e=h.getCompleteChild(s);u=null!=e?".priority"===_e(r)&&e.getChild(be(r)).isEmpty()?e:e.updateChild(r,i):it.EMPTY_NODE}if(c.equals(u))l=t;else{l=Dt(t,e.filter.updateChild(a.getNode(),s,u,r,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function wn(e,t){return e.eventCache.isCompleteForChild(t)}function Cn(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function En(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Ce(n)?i:new Ht(null).setTree(n,i);const h=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=Cn(0,t.serverCache.getNode().getImmediateChild(n),i);c=yn(e,c,new pe(n),l,s,r,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!l){const l=Cn(0,t.serverCache.getNode().getImmediateChild(n),i);c=yn(e,c,new pe(n),l,s,r,o,a)}})),c}class Tn{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new dt(n.getIndex()),s=(r=n).loadsAllData()?new dt(r.getIndex()):r.hasLimit()?new ft(r):new pt(r);var r;this.processor_=function(e){return{filter:e}}(s);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(it.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(it.EMPTY_NODE,a.getNode(),null),h=new Mt(l,o.isFullyInitialized(),i.filtersNodes()),u=new Mt(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Lt(u,h),this.eventGenerator_=new At(this.query_)}get query(){return this.query_}}function In(e,t){const n=zt(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ce(t)&&!n.getImmediateChild(me(t)).isEmpty())?n.getChild(t):null}function Sn(e){return 0===e.eventRegistrations_.length}function xn(e,t,n){const i=[];if(n){(0,o.assert)(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,s);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const s=e.eventRegistrations_[i];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Pn(e,t,n,i){t.type===It.MERGE&&null!==t.source.queryId&&((0,o.assert)(zt(e.viewCache_),"We should always have a full cache before handling merges"),(0,o.assert)(jt(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=vn(e.processor_,s,t,n,i);var a,l;return a=e.processor_,l=r.viewCache,(0,o.assert)(l.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),(0,o.assert)(l.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),(0,o.assert)(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,kn(e,r.changes,r.viewCache.eventCache.getNode(),null)}function kn(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const s=[],r=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Nt(e,s,"child_removed",t,i,n),Nt(e,s,"child_added",t,i,n),Nt(e,s,"child_moved",r,i,n),Nt(e,s,"child_changed",t,i,n),Nt(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let On,Rn;class Mn{constructor(){this.views=new Map}}function An(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return(0,o.assert)(null!=r,"SyncTree gave us an op for an invalid query."),Pn(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(Pn(r,t,n,i));return s}}function Nn(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=on(n,s?i:null),r=!1;e?r=!0:i instanceof it?(e=an(n,i),r=!1):(e=it.EMPTY_NODE,r=!1);const o=Lt(new Mt(e,r,!1),new Mt(i,s,!1));return new Tn(t,o)}return o}function Ln(e,t,n,i,s,r){const o=Nn(e,t,i,s,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Ke,((e,t)=>{i.push(ct(e,t))}));return n.isFullyInitialized()&&i.push(lt(n.getNode())),kn(e,i,n.getNode(),t)}(o,n)}function Dn(e,t,n,i){const s=t._queryIdentifier,r=[];let a=[];const l=Hn(e);if("default"===s)for(const[t,s]of e.views.entries())a=a.concat(xn(s,n,i)),Sn(s)&&(e.views.delete(t),s.query._queryParams.loadsAllData()||r.push(s.query));else{const t=e.views.get(s);t&&(a=a.concat(xn(t,n,i)),Sn(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||r.push(t.query)))}return l&&!Hn(e)&&r.push(new((0,o.assert)(On,"Reference.ts has not been loaded"),On)(t._repo,t._path)),{removed:r,events:a}}function Fn(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function jn(e,t){let n=null;for(const i of e.views.values())n=n||In(i,t);return n}function zn(e,t){if(t._queryParams.loadsAllData())return Bn(e);{const n=t._queryIdentifier;return e.views.get(n)}}function qn(e,t){return null!=zn(e,t)}function Hn(e){return null!=Bn(e)}function Bn(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Un=1;class Wn{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ht(null),this.pendingWriteTree_={visibleWrites:Bt.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $n(e,t,n,i,s){return function(e,t,n,i,s){(0,o.assert)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=Ut(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,s),s?Qn(e,new Ot({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Vn(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(en(e.pendingWriteTree_,t)){let t=new Ht(null);return null!=i.snap?t=t.set(fe(),!0):F(i.children,(e=>{t=t.set(new pe(e),!0)})),Qn(e,new Pt(i.path,t,n))}return[]}function Gn(e,t,n){return Qn(e,new Ot({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Yn(e,t,n,i,s=!1){const r=t._path,o=e.syncPointTree_.get(r);let a=[];if(o&&("default"===t._queryIdentifier||qn(o,t))){const l=Dn(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),s=e.syncPointTree_.findOnPath(r,((e,t)=>Hn(t)));if(n&&!s){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Hn(t)){return[Bn(t)]}{let e=[];return t&&(e=Fn(t)),F(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],s=i.query,r=ni(e,i);e.listenProvider_.startListening(li(s),ii(e,s),r.hashFn,r.onComplete)}}}if(!s&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(li(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(si(t));e.listenProvider_.stopListening(li(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=si(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function Kn(e,t,n,i){const s=ri(e,i);if(null!=s){const i=oi(s),r=i.path,o=i.queryId,a=Ee(r,t);return ai(e,r,new Ot(xt(o),a,n))}return[]}function Xn(e,t,n,i=!1){const s=t._path;let r=null,a=!1;e.syncPointTree_.foreachOnPath(s,((e,t)=>{const n=Ee(e,s);r=r||jn(t,n),a=a||Hn(t)}));let l,c=e.syncPointTree_.get(s);if(c?(a=a||Hn(c),r=r||jn(c,fe())):(c=new Mn,e.syncPointTree_=e.syncPointTree_.set(s,c)),null!=r)l=!0;else{l=!1,r=it.EMPTY_NODE;e.syncPointTree_.subtree(s).foreachChild(((e,t)=>{const n=jn(t,fe());n&&(r=r.updateImmediateChild(e,n))}))}const h=qn(c,t);if(!h&&!t._queryParams.loadsAllData()){const n=si(t);(0,o.assert)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Un++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let u=Ln(c,t,n,Qt(e.pendingWriteTree_,s),r,l);if(!h&&!a&&!i){const n=zn(c,t);u=u.concat(function(e,t,n){const i=t._path,s=ii(e,t),r=ni(e,n),a=e.listenProvider_.startListening(li(t),s,r.hashFn,r.onComplete),l=e.syncPointTree_.subtree(i);if(s)(0,o.assert)(!Hn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const t=l.fold(((e,t,n)=>{if(!Ce(e)&&t&&Hn(t))return[Bn(t).query];{let e=[];return t&&(e=e.concat(Fn(t).map((e=>e.query)))),F(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(li(i),ii(e,i))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return u}function Jn(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=jn(n,Ee(e,t));if(i)return i}));return rn(i,t,s,n,!0)}function Zn(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const s=Ee(e,n);i=i||jn(t,s)}));let s=e.syncPointTree_.get(n);s?i=i||jn(s,fe()):(s=new Mn,e.syncPointTree_=e.syncPointTree_.set(n,s));const r=null!=i,o=r?new Mt(i,!0,!1):null;return function(e){return jt(e.viewCache_)}(Nn(s,t,Qt(e.pendingWriteTree_,t._path),r?o.getNode():it.EMPTY_NODE,r))}function Qn(e,t){return ei(t,e.syncPointTree_,null,Qt(e.pendingWriteTree_,fe()))}function ei(e,t,n,i){if(Ce(e.path))return ti(e,t,n,i);{const s=t.get(fe());null==n&&null!=s&&(n=jn(s,fe()));let r=[];const o=me(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=dn(i,o);r=r.concat(ei(a,l,e,t))}return s&&(r=r.concat(An(s,e,i,n))),r}}function ti(e,t,n,i){const s=t.get(fe());null==n&&null!=s&&(n=jn(s,fe()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=dn(i,t),l=e.operationForChild(t);l&&(r=r.concat(ti(l,s,o,a)))})),s&&(r=r.concat(An(s,e,i,n))),r}function ni(e,t){const n=t.query,i=ii(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||it.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=ri(e,n);if(i){const n=oi(i),s=n.path,r=n.queryId,o=Ee(s,t);return ai(e,s,new kt(xt(r),o))}return[]}(e,n._path,i):function(e,t){return Qn(e,new kt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return Yn(e,n,null,i)}}}}function ii(e,t){const n=si(t);return e.queryToTagMap.get(n)}function si(e){return e._path.toString()+"$"+e._queryIdentifier}function ri(e,t){return e.tagToQueryMap.get(t)}function oi(e){const t=e.indexOf("$");return(0,o.assert)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new pe(e.substr(0,t))}}function ai(e,t,n){const i=e.syncPointTree_.get(t);(0,o.assert)(i,"Missing sync point for query tag that we're tracking");return An(i,n,Qt(e.pendingWriteTree_,t),null)}function li(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new((0,o.assert)(Rn,"Reference.ts has not been loaded"),Rn)(e._repo,e._path):e}class ci{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ci(t)}node(){return this.node_}}class hi{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=we(this.path_,e);return new hi(this.syncTree_,t)}node(){return Jn(this.syncTree_,this.path_)}}const ui=function(e,t,n){return e&&"object"==typeof e?((0,o.assert)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?di(e[".sv"],t,n):"object"==typeof e[".sv"]?pi(e[".sv"],t):void(0,o.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},di=function(e,t,n){if("timestamp"===e)return n.timestamp;(0,o.assert)(!1,"Unexpected server value: "+e)},pi=function(e,t,n){e.hasOwnProperty("increment")||(0,o.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&(0,o.assert)(!1,"Unexpected increment value: "+i);const s=t.node();if((0,o.assert)(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return"number"!=typeof r?i:r+i},fi=function(e,t,n,i){return gi(t,new hi(n,e),i)},mi=function(e,t,n){return gi(e,new ci(t),n)};function gi(e,t,n){const i=e.getPriority().val(),s=ui(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=ui(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new Ye(r,rt(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new Ye(s))),i.forEachChild(Ke,((e,i)=>{const s=gi(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function _i(e,t){let n=t instanceof pe?t:new pe(t),i=e,s=me(n);for(;null!==s;){const e=(0,o.safeGet)(i.node.children,s)||{children:{},childCount:0};i=new vi(s,i,e),n=ve(n),s=me(n)}return i}function yi(e){return e.node.value}function bi(e,t){e.node.value=t,Ii(e)}function wi(e){return e.node.childCount>0}function Ci(e,t){F(e.node.children,((n,i)=>{t(new vi(n,e,i))}))}function Ei(e,t,n,i){n&&!i&&t(e),Ci(e,(e=>{Ei(e,t,!0,i)})),n&&i&&t(e)}function Ti(e){return new pe(null===e.parent?e.name:Ti(e.parent)+"/"+e.name)}function Ii(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===yi(e)&&!wi(e)}(n),s=(0,o.contains)(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,Ii(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,Ii(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Si=/[\[\].#$\/\u0000-\u001F\u007F]/,xi=/[\[\].#$\u0000-\u001F\u007F]/,Pi=10485760,ki=function(e){return"string"==typeof e&&0!==e.length&&!Si.test(e)},Oi=function(e){return"string"==typeof e&&0!==e.length&&!xi.test(e)},Ri=function(e,t,n,i){i&&void 0===t||Mi((0,o.errorPrefix)(e,"value"),t,n)},Mi=function(e,t,n){const i=n instanceof pe?new Se(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Pe(i));if("function"==typeof t)throw new Error(e+"contains a function "+Pe(i)+" with contents = "+t.toString());if(k(t))throw new Error(e+"contains "+t.toString()+" "+Pe(i));if("string"==typeof t&&t.length>3495253.3333333335&&(0,o.stringLength)(t)>Pi)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+Pe(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if(F(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!ki(t)))throw new Error(e+" contains an invalid key ("+t+") "+Pe(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var a,l;l=t,(a=i).parts_.length>0&&(a.byteLength_+=1),a.parts_.push(l),a.byteLength_+=(0,o.stringLength)(l),xe(a),Mi(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=(0,o.stringLength)(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&s)throw new Error(e+' contains ".value" child '+Pe(i)+" in addition to actual children.")}},Ai=function(e,t,n,i){if(!(i&&void 0===n||Oi(n)))throw new Error((0,o.errorPrefix)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ni=function(e,t){if(".info"===me(t))throw new Error(e+" failed = Can't modify data under /.info/")},Li=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!ki(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Oi(e)}(n))throw new Error((0,o.errorPrefix)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Di{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fi(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||Te(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function ji(e,t,n){Fi(e,n),qi(e,(e=>Te(e,t)))}function zi(e,t,n){Fi(e,n),qi(e,(e=>Ie(e,t)||Ie(t,e)))}function qi(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){t(s.path)?(Hi(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Hi(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();w&&T("event: "+n.toString()),H(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="repo_interrupt";class Ui{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Di,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bt(),this.transactionQueueTree_=new vi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Wi(e,t,n){if(e.stats_=te(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new _t(e.repoInfo_,((t,n,i,s)=>{Gi(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Yi(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,o.stringify)(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Re(e.repoInfo_,t,((t,n,i,s)=>{Gi(e,t,n,i,s)}),(t=>{Yi(e,t)}),(t=>{!function(e,t){F(t,((t,n)=>{Ki(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return ee[n]||(ee[n]=t()),ee[n]}(e.repoInfo_,(()=>new Tt(e.stats_,e.server_))),e.infoData_=new yt,e.infoSyncTree_=new Wn({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Gn(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),Ki(e,"connected",!1),e.serverSyncTree_=new Wn({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);zi(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function $i(e){const t=e.infoData_.getNode(new pe(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Vi(e){return(t=(t={timestamp:$i(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Gi(e,t,n,i,s){e.dataUpdateCount++;const r=new pe(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(s)if(i){const t=(0,o.map)(n,(e=>rt(e)));a=function(e,t,n,i){const s=ri(e,i);if(s){const i=oi(s),r=i.path,o=i.queryId,a=Ee(r,t),l=Ht.fromObject(n);return ai(e,r,new Rt(xt(o),a,l))}return[]}(e.serverSyncTree_,r,t,s)}else{const t=rt(n);a=Kn(e.serverSyncTree_,r,t,s)}else if(i){const t=(0,o.map)(n,(e=>rt(e)));a=function(e,t,n){const i=Ht.fromObject(n);return Qn(e,new Rt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=rt(n);a=Gn(e.serverSyncTree_,r,t)}let l=r;a.length>0&&(l=ss(e,r)),zi(e.eventQueue_,l,a)}function Yi(e,t){Ki(e,"connected",t),!1===t&&function(e){es(e,"onDisconnectEvents");const t=Vi(e),n=bt();Ct(e.onDisconnect_,fe(),((i,s)=>{const r=fi(i,s,e.serverSyncTree_,t);wt(n,i,r)}));let i=[];Ct(n,fe(),((t,n)=>{i=i.concat(Gn(e.serverSyncTree_,t,n));const s=cs(e,t);ss(e,s)})),e.onDisconnect_=bt(),zi(e.eventQueue_,fe(),i)}(e)}function Ki(e,t,n){const i=new pe("/.info/"+t),s=rt(n);e.infoData_.updateSnapshot(i,s);const r=Gn(e.infoSyncTree_,i,s);zi(e.eventQueue_,i,r)}function Xi(e){return e.nextWriteId_++}function Ji(e,t,n,i,s){es(e,"set",{path:t.toString(),value:n,priority:i});const r=Vi(e),o=rt(n,i),a=Jn(e.serverSyncTree_,t),l=mi(o,a,r),c=Xi(e),h=$n(e.serverSyncTree_,t,l,c,!0);Fi(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const r="ok"===n;r||P("set at "+t+" failed: "+n);const o=Vn(e.serverSyncTree_,c,!r);zi(e.eventQueue_,t,o),ts(e,s,n,i)}));const u=cs(e,t);ss(e,u),zi(e.eventQueue_,u,[])}function Zi(e,t,n){let i;i=".info"===me(t._path)?Yn(e.infoSyncTree_,t,n):Yn(e.serverSyncTree_,t,n),ji(e.eventQueue_,t._path,i)}function Qi(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Bi)}function es(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),T(n,...t)}function ts(e,t,n,i){t&&H((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let s=e;i&&(s+=": "+i);const r=new Error(s);r.code=e,t(r)}}))}function ns(e,t,n){return Jn(e.serverSyncTree_,t,n)||it.EMPTY_NODE}function is(e,t=e.transactionQueueTree_){if(t||ls(e,t),yi(t)){const n=os(e,t);(0,o.assert)(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),s=ns(e,t,i);let r=s;const a=s.hash();for(let e=0;e<n.length;e++){const i=n[e];(0,o.assert)(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const s=Ee(t,i.path);r=r.updateChild(s,i.currentOutputSnapshotRaw)}const l=r.val(!0),c=t;e.server_.put(c.toString(),l,(i=>{es(e,"transaction put response",{path:c.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Vn(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();ls(e,_i(e.transactionQueueTree_,t)),is(e,e.transactionQueueTree_),zi(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)H(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{P("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}ss(e,t)}}),a)}(e,Ti(t),n)}else wi(t)&&Ci(t,(t=>{is(e,t)}))}function ss(e,t){const n=rs(e,t),i=Ti(n);return function(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let l=0;l<t.length;l++){const c=t[l],h=Ee(n,c.path);let u,d=!1;if((0,o.assert)(null!==h,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)d=!0,u=c.abortReason,s=s.concat(Vn(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=25)d=!0,u="maxretry",s=s.concat(Vn(e.serverSyncTree_,c.currentWriteId,!0));else{const n=ns(e,c.path,r);c.currentInputSnapshot=n;const i=t[l].update(n.val());if(void 0!==i){Mi("transaction failed: Data returned ",i,c.path);let t=rt(i);"object"==typeof i&&null!=i&&(0,o.contains)(i,".priority")||(t=t.updatePriority(n.getPriority()));const a=c.currentWriteId,l=Vi(e),h=mi(t,n,l);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=h,c.currentWriteId=Xi(e),r.splice(r.indexOf(a),1),s=s.concat($n(e.serverSyncTree_,c.path,h,c.currentWriteId,c.applyLocally)),s=s.concat(Vn(e.serverSyncTree_,a,!0))}else d=!0,u="nodata",s=s.concat(Vn(e.serverSyncTree_,c.currentWriteId,!0))}zi(e.eventQueue_,n,s),s=[],d&&(t[l].status=2,a=t[l].unwatcher,setTimeout(a,Math.floor(0)),t[l].onComplete&&("nodata"===u?i.push((()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot))):i.push((()=>t[l].onComplete(new Error(u),!1,null)))))}var a;ls(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)H(i[e]);is(e,e.transactionQueueTree_)}(e,os(e,n),i),i}function rs(e,t){let n,i=e.transactionQueueTree_;for(n=me(t);null!==n&&void 0===yi(i);)i=_i(i,n),n=me(t=ve(t));return i}function os(e,t){const n=[];return as(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function as(e,t,n){const i=yi(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Ci(t,(t=>{as(e,t,n)}))}function ls(e,t){const n=yi(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,bi(t,n.length>0?n:void 0)}Ci(t,(t=>{ls(e,t)}))}function cs(e,t){const n=Ti(rs(e,t)),i=_i(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{hs(e,t)})),hs(e,i),Ei(i,(t=>{hs(e,t)})),n}function hs(e,t){const n=yi(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,o.assert)(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):((0,o.assert)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Vn(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?bi(t,void 0):n.length=r+1,zi(e.eventQueue_,Ti(t),s);for(let e=0;e<i.length;e++)H(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=function(e,t){const n=ds(e),i=n.namespace;"firebase.com"===n.domain&&x(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||x("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&P("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new X(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new pe(n.pathString)}},ds=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(s=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):P(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}},ps="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fs{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,o.stringify)(this.snapshot.exportVal())}}class ms{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,o.assert)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vs{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return Ce(this._path)?null:_e(this._path)}get ref(){return new _s(this._repo,this._path)}get _queryIdentifier(){const e=vt(this._queryParams),t=L(e);return"{}"===t?"default":t}get _queryObject(){return vt(this._queryParams)}isEqual(e){if(!((e=(0,o.getModularInstance)(e))instanceof vs))return!1;const t=this._repo===e._repo,n=Te(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class _s extends vs{constructor(e,t){super(e,t,new mt,!1)}get parent(){const e=be(this._path);return null===e?null:new _s(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class ys{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new pe(e),n=ws(this.ref,e);return new ys(this._node.getChild(t),n,Ke)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new ys(n,ws(this.ref,t),Ke))))}hasChild(e){const t=new pe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function bs(e,t){return(e=(0,o.getModularInstance)(e))._checkNotDeleted("ref"),void 0!==t?ws(e._root,t):e._root}function ws(e,t){var n,i,s,r;return null===me((e=(0,o.getModularInstance)(e))._path)?(n="child",i="path",r=!1,(s=t)&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),Ai(n,i,s,r)):Ai("child","path",t,!1),new _s(e._repo,we(e._path,t))}function Cs(e,t){e=(0,o.getModularInstance)(e),Ni("set",e._path),Ri("set",t,e._path,!1);const n=new(0,o.Deferred);return Ji(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Es(e){e=(0,o.getModularInstance)(e);const t=new gs((()=>{})),n=new Ts(t);return function(e,t,n){const i=Zn(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then((i=>{const s=rt(i).withIndex(t._queryParams.getIndex());let r;if(Xn(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())r=Gn(e.serverSyncTree_,t._path,s);else{const n=ii(e.serverSyncTree_,t);r=Kn(e.serverSyncTree_,t._path,s,n)}return zi(e.eventQueue_,t._path,r),Yn(e.serverSyncTree_,t,n,null,!0),s}),(n=>(es(e,"get for query "+(0,o.stringify)(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new ys(t,new _s(e._repo,e._path),e._queryParams.getIndex())))}class Ts{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new fs("value",this,new ys(e.snapshotNode,new _s(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ms(this,e,t):null}matches(e){return e instanceof Ts&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Is{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ms(this,e,t):null}createEvent(e,t){(0,o.assert)(null!=e.childName,"Child events should have a childName.");const n=ws(new _s(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new fs(e.type,this,new ys(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Is&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Ss(e,t,n,i,s){let r;if("object"==typeof i&&(r=void 0,s=i),"function"==typeof i&&(r=i),s&&s.onlyOnce){const t=n,i=(n,i)=>{Zi(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new gs(n,r||void 0),a="value"===t?new Ts(o):new Is(t,o);return function(e,t,n){let i;i=".info"===me(t._path)?Xn(e.infoSyncTree_,t,n):Xn(e.serverSyncTree_,t,n),ji(e.eventQueue_,t._path,i)}(e._repo,e,a),()=>Zi(e._repo,e,a)}function xs(e,t,n,i){return Ss(e,"value",t,n,i)}!function(e){(0,o.assert)(!On,"__referenceConstructor has already been defined"),On=e}(_s),function(e){(0,o.assert)(!Rn,"__referenceConstructor has already been defined"),Rn=e}(_s);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ps={};let ks=!1;function Os(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||x("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),T("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=us(r,s),h=c.repoInfo;void 0!==l&&l.env&&(a=l.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,r=`http://${a}?ns=${h.namespace}`,c=us(r,s),h=c.repoInfo):o=!c.repoInfo.secure;const u=s&&o?new $($.OWNER):new W(e.name,e.options,t);Li("Invalid Firebase Database URL",c),Ce(c.path)||x("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,i){let s=Ps[t.name];s||(s={},Ps[t.name]=s);let r=s[e.toURLString()];r&&x("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new Ui(e,ks,n,i),s[e.toURLString()]=r,r}(h,e,u,new U(e.name,n));return new Rs(d,e)}class Rs{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Wi(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _s(this._repo,fe())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Ps[t];n&&n[e.key]===e||x(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Qi(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&x("Cannot call "+e+" on a deleted database.")}}function Ms(e=(0,i.getApp)(),t){const n=(0,i._getProvider)(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=(0,o.getDefaultEmulatorHostnameAndPort)("database");e&&function(e,t,n,i={}){(e=(0,o.getModularInstance)(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&x("Cannot call useEmulator() after instance has already been initialized.");const s=e._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&x('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new $($.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:(0,o.createMockUserToken)(i.mockUserToken,e.app.options.projectId);r=new $(t)}!function(e,t,n,i){e.repoInfo_=new X(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(s,t,n,r)}(n,...e)}return n}Re.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Re.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var As,Ns;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ns=i.SDK_VERSION,u=Ns,(0,i._registerComponent)(new(0,s.Component)("database",((e,{instanceIdentifier:t})=>Os(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(c,h,As),(0,i.registerVersion)(c,h,"esm2017")})),r.register("eyjy7",(function(t,n){e(t.exports,"GoogleAuthProvider",(function(){return r("1ojCS").V})),e(t.exports,"getAuth",(function(){return r("1ojCS").o})),e(t.exports,"signInWithPopup",(function(){return r("1ojCS").c})),e(t.exports,"signOut",(function(){return r("1ojCS").B})),r("1iO0g")})),r.register("1iO0g",(function(t,n){e(t.exports,"GoogleAuthProvider",(function(){return r("1ojCS").V})),e(t.exports,"getAuth",(function(){return r("1ojCS").o})),e(t.exports,"signInWithPopup",(function(){return r("1ojCS").c})),e(t.exports,"signOut",(function(){return r("1ojCS").B})),r("ffjl9"),r("ix4Jr"),r("7vF8m"),r("4a6xH");r("1ojCS")})),r.register("1ojCS",(function(t,n){e(t.exports,"V",(function(){return Fe})),e(t.exports,"B",(function(){return Ge})),e(t.exports,"c",(function(){return It})),e(t.exports,"o",(function(){return ln}));var i=r("ffjl9"),s=r("ix4Jr"),o=r("l73V3"),a=r("7vF8m"),l=r("4a6xH");function c(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h=c,u=new(0,i.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),d=new(0,a.Logger)("@firebase/auth");function p(e,...t){d.logLevel<=a.LogLevel.ERROR&&d.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw _(e,...t)}function m(e,...t){return _(e,...t)}function g(e,t,n){const s=Object.assign(Object.assign({},h()),{[t]:n});return new(0,i.ErrorFactory)("auth","Firebase",s).create(t,{appName:e.name})}function v(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&f(e,"argument-error"),g(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return u.create(e,...t)}function y(e,t,...n){if(!e)throw _(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw p(t),new Error(t)}function w(e,t){e||b(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){return"http:"===T()||"https:"===T()}function T(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.isMobileCordova)()||(0,i.isReactNative)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(E()||(0,i.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e,t){w(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},k=new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function R(e,t,n,s,r={}){return M(e,r,(async()=>{let r={},o={};s&&("GET"===t?o=s:r={body:JSON.stringify(s)});const a=(0,i.querystring)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),x.fetch()(N(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},r))}))}async function M(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},P),t);try{const t=new L(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await i.json();if("needConfirmation"in r)throw D(e,"account-exists-with-different-credential",r);if(i.ok&&!("errorMessage"in r))return r;{const t=i.ok?r.errorMessage:r.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw D(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw D(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw D(e,"user-disabled",r);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(e,a,o);f(e,a)}}catch(t){if(t instanceof i.FirebaseError)throw t;f(e,"network-request-failed",{message:String(t)})}}async function A(e,t,n,i,s={}){const r=await R(e,t,n,i,s);return"mfaPendingCredential"in r&&f(e,"multi-factor-auth-required",{_serverResponse:r}),r}function N(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?S(e.config,s):`${e.config.apiScheme}://${s}`}class L{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(m(this.auth,"network-request-failed"))),k.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function D(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=m(e,t,i);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){return 1e3*Number(e)}function z(e){const[t,n,s]=e.split(".");if(void 0===t||void 0===n||void 0===s)return p("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.base64Decode)(n);return e?JSON.parse(e):(p("Failed to decode base64 JWT payload"),null)}catch(e){return p("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function q(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof i.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class H{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=F(this.lastLoginAt),this.creationTime=F(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e){var t;const n=e.auth,i=await e.getIdToken(),s=await q(e,async function(e,t){return R(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));y(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const a=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=(0,o.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const l=(c=e.providerData,h=a,[...c.filter((e=>!h.some((t=>t.providerId===e.providerId)))),...h]);var c,h;const u=e.isAnonymous,d=!(e.email&&r.passwordHash||(null==l?void 0:l.length)),p=!!u&&d,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new B(r.createdAt,r.lastLoginAt),isAnonymous:p};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(void 0!==e.idToken,"internal-error"),y(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=z(e);return y(t,"internal-error"),y(void 0!==t.exp,"internal-error"),y(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await M(e,{},(async()=>{const n=(0,i.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,o=N(e,s,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",x.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,s,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,r=new W;return n&&(y("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),i&&(y("string"==typeof i,"internal-error",{appName:e}),r.accessToken=i),s&&(y("number"==typeof s,"internal-error",{appName:e}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new W,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e,t){y("string"==typeof e||void 0===e,"internal-error",{appName:t})}class V{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=(0,o.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new H(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new B(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await q(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=(0,i.getModularInstance)(e),s=await n.getIdToken(t),r=z(s);y(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"==typeof r.firebase?r.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:r,token:s,authTime:F(j(r.auth_time)),issuedAtTime:F(j(r.iat)),expirationTime:F(j(r.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=(0,i.getModularInstance)(e);await U(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new V(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await U(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await q(this,async function(e,t){return R(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,r,o,a,l,c;const h=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,p=null!==(r=t.photoURL)&&void 0!==r?r:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:_,emailVerified:b,isAnonymous:w,providerData:C,stsTokenManager:E}=t;y(_&&E,e,"internal-error");const T=W.fromJSON(this.name,E);y("string"==typeof _,e,"internal-error"),$(h,e.name),$(u,e.name),y("boolean"==typeof b,e,"internal-error"),y("boolean"==typeof w,e,"internal-error"),$(d,e.name),$(p,e.name),$(f,e.name),$(m,e.name),$(g,e.name),$(v,e.name);const I=new V({uid:_,auth:e,email:u,emailVerified:b,displayName:h,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:T,createdAt:g,lastLoginAt:v});return C&&Array.isArray(C)&&(I.providerData=C.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const i=new W;i.updateFromServerResponse(t);const s=new V({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await U(s),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=new Map;function Y(e){w(e instanceof Function,"Expected a class definition");let t=G.get(e);return t?(w(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,G.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}K.type="NONE";const X=K;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e,t,n){return`firebase:${e}:${t}:${n}`}class Z{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=J(this.userKey,i.apiKey,s),this.fullPersistenceKey=J("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?V._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Z(Y(X),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=i[0]||Y(X);const r=J(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(r);if(t){const i=V._fromJSON(e,t);n!==s&&(o=i),s=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(r)}catch(e){}}))),new Z(s,e,n)):new Z(s,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ie(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ee(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(re(t))return"Blackberry";if(oe(t))return"Webos";if(te(t))return"Safari";if((t.includes("chrome/")||ne(t))&&!t.includes("edge/"))return"Chrome";if(se(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ee(e=(0,i.getUA)()){return/firefox\//i.test(e)}function te(e=(0,i.getUA)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ne(e=(0,i.getUA)()){return/crios\//i.test(e)}function ie(e=(0,i.getUA)()){return/iemobile/i.test(e)}function se(e=(0,i.getUA)()){return/android/i.test(e)}function re(e=(0,i.getUA)()){return/blackberry/i.test(e)}function oe(e=(0,i.getUA)()){return/webos/i.test(e)}function ae(e=(0,i.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function le(e=(0,i.getUA)()){return ae(e)||se(e)||oe(e)||re(e)||/windows phone/i.test(e)||ie(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ce(e,t=[]){let n;switch(e){case"Browser":n=Q((0,i.getUA)());break;case"Worker":n=`${Q((0,i.getUA)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function he(e,t){return R(e,"GET","/v2/recaptchaConfig",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){return void 0!==e&&void 0!==e.enterprise}class de{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e){return new Promise(((t,n)=>{const i=document.createElement("script");var s,r;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=m("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)}))}function fe(e){return`__${e}${Math.floor(1e6*Math.random())}`}class me{constructor(e){this.type="recaptcha-enterprise",this.auth=ye(e)}async verify(e="verify",t=!1){function n(t,n,i){const s=window.grecaptcha;ue(s)?s.enterprise.ready((()=>{try{s.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((e=>{i(e)}))}catch(e){i(e)}})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{he(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new de(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((s=>{if(!t&&ue(window.grecaptcha))n(s,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));pe("https://www.google.com/recaptcha/enterprise.js?render="+s).then((()=>{n(s,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function ge(e,t,n,i=!1){const s=new me(e);let r;try{r=await s.verify(n)}catch(e){r=await s.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new be(this),this.idTokenSubscription=new be(this),this.beforeStateQueue=new ve(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Y(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Z.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await U(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.getModularInstance)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Y(e))}))}async initializeRecaptchaConfig(){const e=await he(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new de(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new me(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new(0,i.ErrorFactory)("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Y(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await Z.create(this,[Y(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return y(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ce(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){d.logLevel<=a.LogLevel.WARN&&d.warn(`Auth (${s.SDK_VERSION}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function ye(e){return(0,i.getModularInstance)(e)}class be{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.createSubscribe)((e=>this.observer=e))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e,t,n){const i=ye(e);y(i._canInitEmulator,i,"emulator-config-failed"),y(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),r=Ce(t),{host:o,port:a}=function(e){const t=Ce(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const e=s[1];return{host:e,port:Ee(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Ee(t)}}}(t),l=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Ce(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ee(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Te{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ie(e,t){return R(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Se(e,t){return A(e,"POST","/v1/accounts:signInWithPassword",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe extends Te{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new xe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new xe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await ge(e,n,"signInWithPassword");return Se(e,t)}return Se(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await ge(e,n,"signInWithPassword");return Se(e,t)}return Promise.reject(t)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return A(e,"POST","/v1/accounts:signInWithEmailLink",O(e,t))}(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ie(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return A(e,"POST","/v1/accounts:signInWithEmailLink",O(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(e,t){return A(e,"POST","/v1/accounts:signInWithIdp",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends Te{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ke(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=(0,o.__rest)(t,["providerId","signInMethod"]);if(!n||!i)return null;const r=new ke(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(e){return Pe(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Pe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Pe(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.querystring)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re extends Te{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Re({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Re({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return A(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await A(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,t));if(n.temporaryProof)throw D(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return A(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Oe)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return n||t||i||s?new Re({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){var t,n,s,r,o,a;const l=(0,i.querystringDecode)((0,i.extractQuerystring)(e)),c=null!==(t=l.apiKey)&&void 0!==t?t:null,h=null!==(n=l.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(s=l.mode)&&void 0!==s?s:null);y(c&&h&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=h,this.continueUrl=null!==(r=l.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=l.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=(0,i.querystringDecode)((0,i.extractQuerystring)(e)).link,n=t?(0,i.querystringDecode)((0,i.extractQuerystring)(t)).deep_link_id:null,s=(0,i.querystringDecode)((0,i.extractQuerystring)(e)).deep_link_id;return(s?(0,i.querystringDecode)((0,i.extractQuerystring)(s)).link:null)||s||n||t||e}(e);try{return new Me(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae{constructor(){this.providerId=Ae.PROVIDER_ID}static credential(e,t){return xe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Me.parseLink(t);return y(n,"argument-error"),xe._fromEmailAndCode(e,n.code,n.tenantId)}}Ae.PROVIDER_ID="password",Ae.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ae.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ne{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends Ne{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De extends Le{constructor(){super("facebook.com")}static credential(e){return ke._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch(e){return null}}}De.FACEBOOK_SIGN_IN_METHOD="facebook.com",De.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe extends Le{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ke._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Fe.credential(t,n)}catch(e){return null}}}Fe.GOOGLE_SIGN_IN_METHOD="google.com",Fe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class je extends Le{constructor(){super("github.com")}static credential(e){return ke._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return je.credential(e.oauthAccessToken)}catch(e){return null}}}je.GITHUB_SIGN_IN_METHOD="github.com",je.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ze extends Le{constructor(){super("twitter.com")}static credential(e,t){return ke._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ze.credential(t,n)}catch(e){return null}}}ze.TWITTER_SIGN_IN_METHOD="twitter.com",ze.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await V._fromIdTokenResponse(e,n,i),r=He(n);return new qe({user:s,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=He(n);return new qe({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function He(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be extends i.FirebaseError{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Be.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Be(e,t,n,i)}}function Ue(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Be._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(e,t,n=!1){const i=await q(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return qe._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $e(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await q(e,Ue(i,s,t,e),n);y(r.idToken,i,"internal-error");const o=z(r.idToken);y(o,i,"internal-error");const{sub:a}=o;return y(e.uid===a,i,"user-mismatch"),qe._forOperation(e,s,r)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&f(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(e,t,n=!1){const i="signIn",s=await Ue(e,i,t),r=await qe._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}function Ge(e){return(0,i.getModularInstance)(e).signOut()}new WeakMap;const Ye="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ye,"1"),this.storage.removeItem(Ye),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends Ke{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=(0,i.getUA)();return te(e)||ae(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=le(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const s=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);(0,i.isIE)()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,10):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xe.type="LOCAL";const Je=Xe;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends Ke{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ze.type="SESSION";const Qe=Ze;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new et(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tt(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et.receivers=[];class nt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const l=tt("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function st(){return void 0!==it().WorkerGlobalScope&&"function"==typeof it().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rt="firebaseLocalStorageDb",ot="firebaseLocalStorage",at="fbase_key";class lt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function ct(e,t){return e.transaction([ot],t?"readwrite":"readonly").objectStore(ot)}function ht(){const e=indexedDB.open(rt,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(ot,{keyPath:at})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(ot)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(rt);return new lt(e).toPromise()}(),t(await ht()))}))}))}async function ut(e,t,n){const i=ct(e,!0).put({[at]:t,value:n});return new lt(i).toPromise()}function dt(e,t){const n=ct(e,!0).delete(t);return new lt(n).toPromise()}class pt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ht()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return st()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=et._getInstance(st()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new nt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ht();return await ut(e,Ye,"1"),await dt(e,Ye),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ut(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ct(e,!1).get(t),i=await new lt(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>dt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ct(e,!1).getAll();return new lt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}pt.type="LOCAL";const ft=pt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
fe("rcb"),new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mt="recaptcha";async function gt(e,t,n){var i;const s=await n.verify();try{let r;if(y("string"==typeof s,e,"argument-error"),y(n.type===mt,e,"argument-error"),r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){y("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return R(e,"POST","/v2/accounts/mfaEnrollment:start",O(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;y(n,e,"missing-multi-factor-info");const o=await function(e,t){return R(e,"POST","/v2/accounts/mfaSignIn:start",O(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return R(e,"POST","/v1/accounts:sendVerificationCode",O(e,t))}(e,{phoneNumber:r.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{constructor(e){this.providerId=vt.PROVIDER_ID,this.auth=ye(e)}verifyPhoneNumber(e,t){return gt(this.auth,e,(0,i.getModularInstance)(t))}static credential(e,t){return Re._fromVerification(e,t)}static credentialFromResult(e){const t=e;return vt.credentialFromTaggedObject(t)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Re._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _t(e,t){return t?Y(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.PROVIDER_ID="phone",vt.PHONE_SIGN_IN_METHOD="phone";class yt extends Te{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Pe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Pe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bt(e){return Ve(e.auth,new yt(e),e.bypassAuthState)}function wt(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),$e(n,new yt(e),e.bypassAuthState)}async function Ct(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),We(n,new yt(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bt;case"linkViaPopup":case"linkViaRedirect":return Ct;case"reauthViaPopup":case"reauthViaRedirect":return wt;default:f(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new I(2e3,1e4);async function It(e,t,n){const i=ye(e);v(e,t,Ne);const s=_t(i,n);return new St(i,"signInViaPopup",t,s).executeNotNull()}class St extends Et{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,St.currentPopupAction&&St.currentPopupAction.cancel(),St.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=tt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,St.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Tt.get())};e()}}St.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xt=new Map;class Pt extends Et{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=xt.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Rt(t),i=Ot(e);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}xt.set(this.auth._key(),e)}return this.bypassAuthState||xt.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function kt(e,t){xt.set(e._key(),t)}function Ot(e){return Y(e._redirectPersistence)}function Rt(e){return J("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(e,t,n=!1){const i=ye(e),s=_t(i,t),r=new Pt(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class At{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lt(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Lt(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(m(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nt(e))}saveEventToCache(e){this.cachedEventUids.add(Nt(e)),this.lastProcessedEventTime=Date.now()}}function Nt(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Lt({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Dt=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ft=/^https?/;async function jt(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return R(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(zt(e))return}catch(e){}f(e,"unauthorized-domain")}function zt(e){const t=C(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!Ft.test(n))return!1;if(Dt.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new I(3e4,6e4);function Ht(){const e=it().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Bt=null;function Ut(e){return Bt=Bt||function(e){return new Promise(((t,n)=>{var i,s,r;function o(){Ht(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ht(),n(m(e,"network-request-failed"))},timeout:qt.get()})}if(null===(s=null===(i=it().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=it().gapi)||void 0===r?void 0:r.load)){const t=fe("iframefcb");return it()[t]=()=>{gapi.load?o():n(m(e,"network-request-failed"))},pe(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Bt=null,e}))}(e),Bt}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new I(5e3,15e3),$t={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vt=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gt(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?S(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},o=Vt.get(e.config.apiHost);o&&(r.eid=o);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.querystring)(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yt={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Kt{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Xt(e,t,n,s=500,r=600){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Yt),{width:s.toString(),height:r.toString(),top:o,left:a}),h=(0,i.getUA)().toLowerCase();n&&(l=ne(h)?"_blank":n),ee(h)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=(0,i.getUA)()){var t;return ae(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==l)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",l),new Kt(null);const d=window.open(t||"",l,u);y(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Kt(d)}const Jt="emulator/auth/handler",Zt=encodeURIComponent("fac");async function Qt(e,t,n,r,o,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.SDK_VERSION,eventId:o};if(t instanceof Ne){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,i.isEmpty)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof Le){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const e of Object.keys(c))void 0===c[e]&&delete c[e];const h=await e._getAppCheckToken(),u=h?`#${Zt}=${encodeURIComponent(h)}`:"";return`${function({config:e}){return e.emulator?S(e,Jt):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${(0,i.querystring)(c).slice(1)}${u}`}const en="webStorageSupport";const tn=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qe,this._completeRedirectFn=Mt,this._overrideRedirectResult=kt}async _openPopup(e,t,n,i){var s;w(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return Xt(e,await Qt(e,t,n,C(),i),tt())}async _openRedirect(e,t,n,i){await this._originValidation(e);return function(e){it().location.href=e}(await Qt(e,t,n,C(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Ut(e),n=it().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:Gt(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$t,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const s=m(e,"network-request-failed"),r=it().setTimeout((()=>{i(s)}),Wt.get());function o(){it().clearTimeout(r),n(t)}t.ping(o).then(o,(()=>{i(s)}))}))))}(e),n=new At(e);return t.register("authEvent",(t=>{y(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(en,{type:en},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==s&&t(!!s),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jt(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return le()||te()||ae()}};var nn="@firebase/auth",sn="0.23.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const on=(0,i.getExperimentalSetting)("authIdTokenMaxAge")||300;let an=null;function ln(e=(0,s.getApp)()){const t=(0,s._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=(0,s._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),s=n.getOptions();if((0,i.deepEqual)(s,null!=t?t:{}))return e;f(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:tn,persistence:[ft,Je,Qe]}),r=(0,i.getExperimentalSetting)("authTokenSyncURL");if(r){const e=(o=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>on)return;const i=null==t?void 0:t.token;an!==i&&(an=i,await fetch(o,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){(0,i.getModularInstance)(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,s){(0,i.getModularInstance)(e).onIdTokenChanged(t,n,s)}(n,(t=>e(t)))}var o;const a=(0,i.getDefaultEmulatorHost)("auth");return a&&we(n,`http://${a}`),n}var cn;cn="Browser",(0,s._registerComponent)(new(0,l.Component)("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:r,authDomain:o}=n.options;y(r&&!r.includes(":"),"invalid-api-key",{appName:n.name}),y(!(null==o?void 0:o.includes(":")),"argument-error",{appName:n.name});const a={apiKey:r,authDomain:o,clientPlatform:cn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ce(cn)},l=new _e(n,i,s,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Y);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,s._registerComponent)(new(0,l.Component)("auth-internal",(e=>{const t=ye(e.getProvider("auth").getImmediate());return new rn(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(nn,sn,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(cn)),(0,s.registerVersion)(nn,sn,"esm2017")})),r.register("l73V3",(function(t,n){e(t.exports,"__rest",(function(){return i}));function i(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n}Object.create;Object.create})),r.register("emajU",(function(t,n){e(t.exports,"default",(function(){return i}));var i={save:(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}}}})),r.register("11PIu",(function(t,n){e(t.exports,"actualLibraryUpdateToStore",(function(){return s}));var i=r("emajU");const s=e=>{i.default.save("actualLibrary",e)}})),r.register("d8JZc",(function(t,n){e(t.exports,"addELToTeamModal",(function(){return p}));var i=r("jhnEU");const s=document.querySelector(".goit-students"),o=document.querySelector(".backdrop"),a=document.querySelector(".team"),l=document.querySelector(".team_close"),c=document.querySelector(".scroll-up-arrow"),h=e=>{e.target===o&&(a.classList.toggle("none"),o.classList.toggle("is-hidden"),document.removeEventListener("keydown",d),o.removeEventListener("click",h),l.removeEventListener("click",u),window.addEventListener("scroll",i.showButtonOnScroll))},u=e=>{a.classList.toggle("none"),o.classList.toggle("is-hidden"),document.removeEventListener("keydown",d),o.removeEventListener("click",h),l.removeEventListener("click",u),window.addEventListener("scroll",i.showButtonOnScroll)},d=e=>{"Escape"===e.code&&(a.classList.toggle("none"),o.classList.toggle("is-hidden"),l.removeEventListener("click",u),o.removeEventListener("click",h),document.removeEventListener("keydown",d),window.addEventListener("scroll",i.showButtonOnScroll))},p=()=>{s.addEventListener("click",(e=>{e.preventDefault(),f()}))},f=()=>{a.classList.toggle("none"),o.classList.toggle("is-hidden"),document.addEventListener("keydown",d),o.addEventListener("click",h),l.addEventListener("click",u),window.removeEventListener("scroll",i.showButtonOnScroll),c.classList.contains("is-hidden")||c.classList.add("is-hidden")}})),r.register("jhnEU",(function(t,n){e(t.exports,"showButtonOnScroll",(function(){return s})),e(t.exports,"scrollToTop",(function(){return r}));const i=document.querySelector(".scroll-up-arrow"),s=()=>{window.scrollY>800?i.classList.remove("is-hidden"):i.classList.add("is-hidden")},r=()=>{window.scrollTo({top:0,behavior:"smooth"})}})),r.register("fZYoL",(function(e,t){}));
//# sourceMappingURL=index.246b020b.js.map
