import { renderGenresToGallery } from './render-genres';

const gallery = document.querySelector('.gallery');

// ------> RENDERING POPULAR/SEARCH GALLERY:

export const renderMovies = movies => {
  const markupMovies = movies
    .map(movie => {
      const genres = renderGenresToGallery(movie.genre_ids);
      if (movie.poster_path !== null) {
        return `<div class="movie-card" data-movie-id="${movie.id}">
          <div class="movie-card-poster">
          <img class="movie-img" src="https://image.tmdb.org/t/p/original${
            movie.poster_path
          }" width=280 alt="${movie.original_title}" loading="lazy" />
              </div>
            <div class="movie-card-description">
              <p class="movie-title">${movie.original_title}</p>
              <div class="movie-subtitle">
              <span class="movie-genre">${genres}  |</span>
              <span class="movie-year">${parseInt(movie.release_date)}</span>
            </div>
          </div>
          </div>`;
      } else {
        return `<div class="movie-card" data-movie-id="${movie.id}">
        <div class="movie-card-poster"></div>
        <div class="movie-card-description">  
          <p class="movie-title">${movie.original_title}</p>
          <div class="movie-subtitle">
            <span class="movie-genre">${genres}  |</span>
            <span class="movie-year">${parseInt(movie.release_date)}</span>
          </div>
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
      const genres = renderGenresToGallery(movie.genre_ids);
      if (movie.poster_path !== null) {
        return `<div class="movie-card" data-movie-id="${movie.id}">
          <div class="movie-card-poster">
            <img class="movie-img" src="https://image.tmdb.org/t/p/original${
              movie.poster_path
            }" width=280 alt="${movie.original_title}" loading="lazy" />
            </div>
            <div class="movie-card-description">
              <p class="movie-title">${movie.original_title}</p>
              <div class="movie-subtitle">
                <span class="movie-genre">${genres}  |</span>
                <span class="movie-year">${parseInt(movie.release_date)}</span>
                <span class="movie-vote">${movie.vote_average.toPrecision(
                  2
                )}</span>
              </div>
            </div>
            </div>`;
      } else {
        return `<div class="movie-card" data-movie-id="${movie.id}">
          <div class="movie-card-poster"></div>
          <div class="movie-card-description">  
            <p class="movie-title">${movie.original_title}</p>
            <div class="movie-subtitle">
              <span class="movie-genre">${genres}  |</span>
              <span class="movie-year">${parseInt(movie.release_date)}</span>
              <span class="movie-vote">${movie.vote_average.toPrecision(
                2
              )}</span>
            </div>
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
