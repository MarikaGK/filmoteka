!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var r=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,r.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,o){t[e]=o},e.parcelRequired7c6=r);var n=r("506vd"),a=r("8bBtd"),d=r("8dpKU"),l=r("iQFli"),i=r("wEgX6"),f=document.querySelector(".gallery");(0,d.startLoader)();(0,n.getMoviesByArrayOfIds)([1369,603692,594767]),(0,i.renderPagination)(),f.addEventListener("click",(function(e){(0,a.toggleModal)();var o=e.target.parentElement.parentElement;console.log(o.dataset.movieId),(0,n.getMovieById)(o.dataset.movieId),(0,a.onShowModal)()})),(0,l.setDarkOrNormalModeOnPageLoadFromLocalStorageState)()}();
//# sourceMappingURL=my-library.acf58b0f.js.map