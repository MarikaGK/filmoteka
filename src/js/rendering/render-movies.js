import { renderGenresToGallery } from './render-genres';
import { getStateOfDarkModeFromLocalStorage } from '../utils/dark-mode-switch';

const gallery = document.querySelector('.gallery');

// ------> RENDERING POPULAR/SEARCH GALLERY:

export const renderMovies = movies => {
  gallery.innerHTML = '';
  const IS_DARK_MODE_ON = getStateOfDarkModeFromLocalStorage();
  const markupMovies = movies
    .map(movie => {
      const genres = renderGenresToGallery(movie.genre_ids);
      const markupReleaseDate = releaseDate => {
        if (releaseDate) {
          return releaseDate;
        }
        return `No info`;
      };
      if (IS_DARK_MODE_ON) {
        if (movie.poster_path !== null) {
          return `<div class="movie-card dark-mode-box-shadow" data-movie-id="${
            movie.id
          }">
          <div class="movie-card-poster">
          <img class="movie-img" src="https://image.tmdb.org/t/p/original${
            movie.poster_path
          }" width=280 alt="${movie.original_title}" loading="lazy" />
          </div>
          <div class="movie-card-description">
              <p class="movie-title">${movie.original_title}</p>
              <div class="movie-subtitle">
              <span class="movie-genre">${genres}  |</span>
              <span class="movie-year">${markupReleaseDate(
                parseInt(movie.release_date)
              )}</span>
              </div>
              </div>
              </div>`;
        } else {
          return `<div class="movie-card dark-mode-box-shadow" data-movie-id="${
            movie.id
          }">
          <div class="movie-card-poster"><div class="movie-card-no-poster"></div></div>
          <div class="movie-card-description">  
          <p class="movie-title">${movie.original_title}</p>
          <div class="movie-subtitle">
          <span class="movie-genre">${genres}  |</span>
          <span class="movie-year">${markupReleaseDate(
            parseInt(movie.release_date)
          )}</span>
          </div>
          </div>
          </div>`;
        }
      } else {
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
          <span class="movie-year">${markupReleaseDate(
            parseInt(movie.release_date)
          )}</span>
          </div>
          </div>
          </div>`;
        } else {
          return `<div class="movie-card" data-movie-id="${movie.id}">
          <div class="movie-card-poster"><div class="movie-card-no-poster"></div></div>
          <div class="movie-card-description">  
          <p class="movie-title">${movie.original_title}</p>
          <div class="movie-subtitle">
          <span class="movie-genre">${genres}  |</span>
            <span class="movie-year">${markupReleaseDate(
              parseInt(movie.release_date)
            )}</span>
            </div>
            </div>
            </div>`;
        }
      }
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markupMovies);
};

// -----> RENDERING USER'S QUEUED/WATCHED LIBRARY:

export const renderLibrary = movies => {
  gallery.innerHTML = '';
  const IS_DARK_MODE_ON = getStateOfDarkModeFromLocalStorage();
  const markupLibrary = movies
    .map(movie => {
      const markupReleaseDate = releaseDate => {
        if (releaseDate) {
          return releaseDate;
        }
        return `No info`;
      };
      if (IS_DARK_MODE_ON) {
        // const genres = renderGenresToGallery(movie.genre_ids);
        if (movie.poster_path !== null) {
          return `<div class="movie-card dark-mode-box-shadow" data-movie-id="${
            movie.id
          }">
            <div class="movie-card-poster">
            <img class="movie-img" src="https://image.tmdb.org/t/p/original${
              movie.poster_path
            }" width=280 alt="${movie.original_title}" loading="lazy" />
          </div>
            <div class="movie-card-description">
              <p class="movie-title">${movie.title}</p>
              <div class="movie-subtitle">
                <span class="movie-genre">${movie.genres
                  .slice(0, 3)
                  .map(g => g.name)
                  .join(', ')}  |</span>
                <span class="movie-year">${markupReleaseDate(
                  parseInt(movie.release_date)
                )}</span>
                <span class="movie-vote">${movie.vote_average.toPrecision(
                  2
                )}</span>
              </div>
            </div>
            </div>`;
        } else {
          return `<div class="movie-card" data-movie-id="${movie.id}">
          <div class="movie-card-poster"><div class="movie-card-no-poster"></div></div>
          <div class="movie-card-description">  
            <p class="movie-title">${movie.original_title}</p>
            <div class="movie-subtitle">
              <span class="movie-genre">${movie.genres
                .slice(0, 3)
                .map(g => g.name)
                .join(', ')}  |</span>
              <span class="movie-year">${markupReleaseDate(
                parseInt(movie.release_date)
              )}</span>
              <span class="movie-vote">${movie.vote_average.toPrecision(
                2
              )}</span>
            </div>
          </div>
          </div>`;
        }
      } else {
        if (movie.poster_path !== null) {
          return `<div class="movie-card" data-movie-id="${movie.id}">
          <div class="movie-card-poster">
            <img class="movie-img" src="https://image.tmdb.org/t/p/original${
              movie.poster_path
            }" width=280 alt="${movie.original_title}" loading="lazy" />
            </div>
            <div class="movie-card-description">
              <p class="movie-title">${movie.title}</p>
              <div class="movie-subtitle">
                <span class="movie-genre">${movie.genres
                  .slice(0, 3)
                  .map(g => g.name)
                  .join(', ')}  |</span>
                <span class="movie-year">${markupReleaseDate(
                  parseInt(movie.release_date)
                )}</span>
                <span class="movie-vote">${movie.vote_average.toPrecision(
                  2
                )}</span>
              </div>
            </div>
            </div>`;
        } else {
          return `<div class="movie-card" data-movie-id="${movie.id}">
          <div class="movie-card-poster"><div class="movie-card-no-poster"></div></div>
          <div class="movie-card-description">  
            <p class="movie-title">${movie.original_title}</p>
            <div class="movie-subtitle">
              <span class="movie-genre">${movie.genres
                .slice(0, 3)
                .map(g => g.name)
                .join(', ')}  |</span>
              <span class="movie-year">${markupReleaseDate(
                parseInt(movie.release_date)
              )}</span>
              <span class="movie-vote">${movie.vote_average.toPrecision(
                2
              )}</span>
            </div>
          </div>
          </div>`;
        }
      }
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markupLibrary);
};
