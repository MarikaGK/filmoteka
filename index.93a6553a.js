const e=document.querySelector(".gallery");(async()=>{const o=await(async()=>{try{const e=await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=b118f38ec77100db6763b4cc83604589");return await e.json()}catch(e){console.log(e)}})();console.log(o),(o=>{const a=o.map((e=>`\n    <div class="movie-card" data-movie-id="${e.id}">\n      <img src="https://image.tmdb.org/t/p/original${e.poster_path}" height=574 alt="${e.original_title}"/>\n    \n      <p class="movie-title">\n        <b>${e.original_title}</b>\n      </p>\n      <div class="movie-subtitle">\n        <p class="movie-genre">\n          <b>${e.genre_ids}</b>\n        </p>\n        <p class="movie-year">\n          <b>${parseInt(e.release_date)}</b>\n        </p>\n      </div>\n    </div>\n  </a>`)).join("");e.insertAdjacentHTML("beforeend",a)})(o.results)})(),(async e=>{try{const o=await fetch("https://api.themoviedb.org/3/search/movie?api_key=11f568ee70218bec08ad7368f7bb3250&query="+e+"&page=1"),a=await o.json();console.log('Poniżej przykladowy console.log dla filmu "Rambo"'),console.log(a)}catch(e){console.error(e)}})("Rambo"),(async(e=1)=>{try{const o=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=11f568ee70218bec08ad7368f7bb3250&page="+e),a=await o.json();console.log("Poniżej przykladowy console.log dla popularnych"),console.log(a)}catch(e){console.error(e)}})(),(async()=>{try{const e=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=11f568ee70218bec08ad7368f7bb3250"),o=await e.json();console.log("Poniżej przykladowy console.log dla listy gatunków"),console.log(o)}catch(e){console.error(e)}})();
//# sourceMappingURL=index.93a6553a.js.map
