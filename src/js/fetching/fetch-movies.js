import { saveMovieGenresToStorage } from '../rendering/render-genres';
import { renderMovies, renderLibrary } from '../rendering/render-movies';
import { showLoader } from '../utils/loader';
import {
  saveTotalPageToStorage,
  saveTotalResultsToStorage,
  saveCurrentPageToStorage,
  setPopularParameterToStorage,
  renderPagination,
} from '../rendering/render-pagination';
import { categoriesFilter } from '../utils/categories-filter.js';
import { renderModal } from '../rendering/render-modal';
import { startLoader } from '../utils/loader';
// ------> CONSTANTS USED IN THE PROJECT:
const API_KEY = '11f568ee70218bec08ad7368f7bb3250';
const apiUrl = 'https://api.themoviedb.org/3/search/movie';
const searchPopularUrl = 'https://api.themoviedb.org/3/movie/popular';
const searchGenresUrl = 'https://api.themoviedb.org/3/genre/movie/list';
const searchByMovieIdUrl = 'https://api.themoviedb.org/3/movie';
const searchWithFilters = 'https://api.themoviedb.org/3/discover/movie';
const NO_HIT_INFO_DIV_DOM = document.querySelector('.header-no-hit-info');
//  1. --- Function fetch - get movies genres array ---
export const getMovieGenresAndSaveToStore = async () => {
  try {
    const response = await fetch(`${searchGenresUrl}?api_key=${API_KEY}`);
    // response Status:404 handling
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    saveMovieGenresToStorage(data);
    return;
  } catch (error) {
    console.error(error);
  }
};
//  2. --- Function fetch - get popular movies ---
export const getPopularMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `${searchPopularUrl}?api_key=${API_KEY}&page=${page}`
    );
    // response Status:404 handling
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    // TODO function here!
    const limitedTotalPagesForPopularSearch = 500;
    const limitedTotalResultsForPopularSearch = 10000;
    data.total_pages = limitedTotalPagesForPopularSearch;
    data.total_results = limitedTotalResultsForPopularSearch;
    startLoader();
    setPopularParameterToStorage(1);
    saveTotalPageToStorage(data);
    saveTotalResultsToStorage(data);
    saveCurrentPageToStorage(data);
    renderMovies(data.results);
  } catch (error) {
    console.error(error);
  }
};
//  3. --- function fetch - get movies by title ---
// movieTitle is a .value from header input
export const getMoviesByTitle = async (movieTitle, page = 1) => {
  try {
    NO_HIT_INFO_DIV_DOM.textContent = '';
    const response = await fetch(
      `${apiUrl}?api_key=${API_KEY}&query=${movieTitle}&page=${page}`
    );
    // response Status:404 handling
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    if (!data.total_results) {
      NO_HIT_INFO_DIV_DOM.textContent =
        'Search result not successful. Enter the correct movie name and search again.';
      return;
    }
    //TODO function here!
    startLoader();
    setPopularParameterToStorage(2);
    saveTotalPageToStorage(data);
    saveTotalResultsToStorage(data);
    saveCurrentPageToStorage(data);
    renderMovies(data.results);
    renderPagination();
  } catch (error) {
    console.error(error);
  }
};
//  4. --- Function fetch - get movie (details object) by movie ID ---
export const getMovieById = async movieId => {
  try {
    const response = await fetch(
      `${searchByMovieIdUrl}/${movieId}?api_key=${API_KEY}&append_to_response=videos`
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    const videosObject = data.videos.results;
    const movieTrailerUrl = getTrailerUrlFromObjectVideos(videosObject);
    return renderModal(data, movieTrailerUrl);
  } catch (error) {
    console.error(error);
  }
};

//  5. --- Function get trailer's url from returned object in function getMovieById (from sub-object Videos) ---
const getTrailerUrlFromObjectVideos = videosObject => {
  const findIndexOfKeyTrailer = videosObject.findIndex(
    youtubeKey => youtubeKey.type === 'Trailer'
  );
  if (findIndexOfKeyTrailer === -1) {
    return;
  } else {
    const youtubeKey = videosObject[findIndexOfKeyTrailer].key;
    const movieTrailerUrl = `https://www.youtube.com/watch?v=${youtubeKey}`;
    return movieTrailerUrl;
  }
};

//  6. --- Function fetch - get array of movieIds  ---
export const getMoviesByArrayOfIds = async arrayOfMoviesIds => {
  const spreadArrayOfMoviesIds = [...arrayOfMoviesIds];
  const url = `${searchByMovieIdUrl}?api_key=${API_KEY}&append_to_response=${spreadArrayOfMoviesIds}`;

  startLoader();
  if (spreadArrayOfMoviesIds.length == 0) {
    return;
  }
  try {
    let response = await fetch(url);
    // handling with first response from server => Status: 404
    if (response.status === 404) {
      const data = await response.json();
      const filteredData = Object.keys(data)
        .filter(key => Number.isInteger(Number(key)))
        .reduce((acc, key) => {
          acc[key] = data[key];
          return acc;
        }, {});
      const films = [];
      const keys = Object.keys(filteredData);
      for (let i = 0; i < keys.length; ++i) {
        const key = Number(keys[i]);
        const newObj = structuredClone(filteredData[key]);
        newObj.id = key;
        films.push(newObj);
      }
      renderLibrary(films);
    }
  } catch (error) {
    console.error(error);
  }
};

//  7. --- Function fetch - get movies with filters  ---
export const getMoviesWithFilters = async (page = 1) => {
  const genres = categoriesFilter();
  try {
    NO_HIT_INFO_DIV_DOM.textContent = '';
    const response = await fetch(
      `${searchWithFilters}?api_key=${API_KEY}&page=${page}&with_genres=${genres}`
    );
    // response Status:404 handling
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    if (!data.total_results) {
      NO_HIT_INFO_DIV_DOM.textContent =
        'Search result not successful. Select less movies genres and search again.';
      return;
    }
    startLoader();
    //TODO function here!
    setPopularParameterToStorage(false);
    saveTotalPageToStorage(data);
    saveTotalResultsToStorage(data);
    saveCurrentPageToStorage(data);
    renderMovies(data.results);
    renderPagination();
  } catch (error) {
    console.error(error);
  }
};
