const e=document.querySelector(".gallery"),o=o=>{const t=o.map((e=>null!==e.poster_path?`<div class="movie-card" data-movie-id="${e.id}">\n          <div class="movie-card-poster"><img class="movie-img" src="https://image.tmdb.org/t/p/original${e.poster_path}" width=375 height=574 alt="${e.original_title}" loading="lazy" /></div>\n          <p class="movie-title">${e.original_title}</p>\n          <div class="movie-subtitle">\n            <p class="movie-genre">${e.genre_ids}</p>\n            <p class="movie-year">${parseInt(e.release_date)}</p>\n            <p><button class="movie-vote" type="button">${e.vote_average.toPrecision(2)}</button>\n            </p>\n          </div>\n        </div>`:`<div class="movie-card" data-movie-id="${e.id}">\n        <div class="movie-card-poster"></div>\n          <p class="movie-title">${e.original_title}</p>\n          <div class="movie-subtitle">\n            <p class="movie-genre">${e.genre_ids}</p>\n            <p class="movie-year">${parseInt(e.release_date)}</p>\n            <p><button class="movie-vote" type="button">${e.vote_average.toPrecision(2)}</button>\n            </p>\n          </div>\n        </div>`)).join("");e.insertAdjacentHTML("beforeend",t)},t=document.querySelector(".header-no-hit-info");const n=async e=>{try{t.textContent="";const n=await fetch("https://api.themoviedb.org/3/search/movie?api_key=11f568ee70218bec08ad7368f7bb3250&query="+e+"&page=1");if(!n.ok)throw new Error(n.status);const s=await n.json();if(!s.total_results)return t.textContent="Search result not successful. Enter the correct movie name and search again.",void console.log("pusta tablica");console.log(`Poniżej przykladowy console.log dla filmu "${e}"`),console.log(s),document.querySelector("form").addEventListener("submit",(()=>{const e=document.querySelector(".loader");let o;e.classList.remove("loader-hidden"),o=setTimeout((()=>{e.classList.add("loader-hidden")}),1500),console.log(e.classList)})),console.log("loadMovie work"),o(s.results)}catch(e){console.error(e)}},s=document.querySelector(".gallery"),a=document.querySelector(".header-input__text-box"),i=document.querySelector(".header-no-hit-info");document.querySelector(".header-input__form").addEventListener("submit",(function(e){e.preventDefault();const o=a.value.trim();i.textContent="",o?(s.textContent="",n(o)):i.textContent="Type anything..."})),window.addEventListener("load",(()=>{const e=document.querySelector(".loader");let o;e.classList.remove("loader-hidden"),o=setTimeout((()=>{e.classList.add("loader-hidden")}),1500),console.log(e.classList)})),console.log("loadGallery work"),(async(e=1)=>{try{const t=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=11f568ee70218bec08ad7368f7bb3250&page="+e);if(!t.ok)throw new Error(t.status);const n=await t.json();console.log("Poniżej przykladowy console.log dla popularnych"),console.log(n),o(n.results)}catch(e){console.error(e)}})(),(async()=>{try{const e=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=11f568ee70218bec08ad7368f7bb3250");if(!e.ok)throw new Error(e.status);const o=await e.json();console.log("Poniżej przykladowy console.log dla listy gatunków"),console.log(o)}catch(e){console.error(e)}})();(async e=>{try{const o=await fetch("https://api.themoviedb.org/3/movie/"+e+"?api_key=11f568ee70218bec08ad7368f7bb3250");if(!o.ok)throw new Error(o.status);const t=await o.json();console.log(`Poniżej console.log dla jednego filmu (${t.original_title}) po movieId: ${e}`),console.log(t)}catch(e){console.error(e)}})("603692"),(async e=>{try{const o=await fetch("https://api.themoviedb.org/3/movie/"+e+"/videos?api_key=11f568ee70218bec08ad7368f7bb3250");if(!o.ok)throw new Error(o.status);const t=await o.json(),n=t.results.findIndex((e=>"Trailer"===e.type)),s=`https://www.youtube.com/watch?v=${t.results[n].key}`;console.log(`Poniżej link do Video na Youtube jednego filmu po movieId: ${e}`),console.log(s)}catch(e){console.error(e)}})("603692");
//# sourceMappingURL=index.73c34dd7.js.map
