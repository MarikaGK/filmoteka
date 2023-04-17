const gallery = document.querySelector('.gallery');

// ------> RENDERING POPULAR/SEARCH GALLERY:

// ------ genres rendering ------

// const compareId = id => {
//   genresIdArray.genres.filter(e => {
//     if (e.id == id) {
//       e.name;
//     }
//   });
// };

// function renderGenreIds(genreIds) {
//   const murkupIds = genreIds.map(id => compareId(id)).join(', ');

//   return murkupIds;
// }

export const renderMovies = (movies, genresIdArray) => {
  const compareId = id => {
    genresIdArray.slice(0, 2).filter(e => {
      if (e.id == id) {
        e.name;
      }
    });
  };
  const renderGenreIds = genreIds => {
    const murkupIds = genreIds.map(id => compareId(id));
    return murkupIds;
  };
  const markupMovies = movies
    .map(movie => {
      if (movie.poster_path !== null) {
        return `<div class="movie-card" data-movie-id="${movie.id}">
          <div class="movie-card-poster"><img class="movie-img" src="https://image.tmdb.org/t/p/original${
            movie.poster_path
          }" width=280 alt="${movie.original_title}" loading="lazy" /></div>
          <p class="movie-title">${movie.original_title}</p>
          <div class="movie-subtitle">
<<<<<<< Updated upstream
            <p class="movie-genre">${movie.genre_ids}  |</p>
=======
            <p class="movie-genre">${renderGenreIds(movie.genre_ids)}</p>
>>>>>>> Stashed changes
            <p class="movie-year">${parseInt(movie.release_date)}</p>
            <p><button class="movie-vote" type="button">${movie.vote_average.toPrecision(
              2
            )}</button>
            </p>
          </div>
        </div>`;
      } else {
        return `<div class="movie-card" data-movie-id="${movie.id}">
        <div class="movie-card-poster"></div>
          <p class="movie-title">${movie.original_title}</p>
          <div class="movie-subtitle">
            <p class="movie-genre">${movie.genre_ids}</p>
            <p class="movie-year">${parseInt(movie.release_date)}</p>
            <p><button class="movie-vote" type="button">${movie.vote_average.toPrecision(
              2
            )}</button>
            </p>
          </div>
        </div>`;
      }
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markupMovies);
};

// -----> RENDERING USER'S QUEUED/WATCHED LIBRARY:

export const renderLibrary = movies => {
  const markupLibrary = movies
    .map(movie => {
      if (movie.poster_path !== null) {
        return `<div class="movie-card" data-movie-id="${movie.id}">
          <img class="movie-img" src="https://image.tmdb.org/t/p/original${
            movie.poster_path
          }" width=280 alt="${movie.original_title}" loading="lazy" />
          <p class="movie-title">${movie.original_title}</p>
          <div class="movie-subtitle">
            <p class="movie-genre">${movie.genre_ids}  |</p>
            <p class="movie-year">${parseInt(movie.release_date)}</p>
            <p><button class="movie-vote" type="button">${movie.vote_average.toPrecision(
              2
            )}</button>
            </p>
          </div>
        </div>`;
      } else {
        return `<div class="movie-card" data-movie-id="${movie.id}">
          <img class="movie-img" src="${defaultImage}" height=574 alt="${
          movie.original_title
        }" loading="lazy"/>
          <p class="movie-title">${movie.original_title}</p>
          <div class="movie-subtitle">
            <p class="movie-genre">${movie.genre_ids}</p>
            <p class="movie-year">${parseInt(movie.release_date)}</p>
            <p><button class="movie-vote" type="button">${movie.vote_average.toPrecision(
              2
            )}</button>
            </p>
          </div>
        </div>`;
      }
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markupLibrary);
};

// -----> EXAMPLE FETCH FOR GALLERY RENDER:

// const API_KEY = 'b118f38ec77100db6763b4cc83604589';
// const fetchTrendingMovies = async () => {
//   const movieGallery = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
//   try {
//     const response = await fetch(movieGallery);
//     const movies = await response.json();
//     return movies;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const startRenderingTrendingMovies = async () => {
//   const trendingMovies = await fetchTrendingMovies();
//   console.log(trendingMovies);
//   renderMovies(trendingMovies.results);
// };

// startRenderingTrendingMovies();
