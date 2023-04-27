import { saveMovieGenresToStorage } from '../rendering/render-genres';
import { renderMovies, renderLibrary } from '../rendering/render-movies';
import { showLoader } from '../utils/loader';
import {
  saveTotalPageToStorage,
  saveTotalResultsToStorage,
  saveCurrentPageToStorage,
  getTotalPagesFromStorage,
  setPopularParameterToStorage,
  getCurrentPageFromStorage,
  renderPagination,
} from '../rendering/render-pagination';
import { categoriesFilter } from '../utils/categories-filter.js';
import { renderModal } from '../rendering/render-modal';
// ------> CONSTANTS USED IN THE PROJECT:
const API_KEY = '11f568ee70218bec08ad7368f7bb3250';
const apiUrl = 'https://api.themoviedb.org/3/search/movie';
const searchPopularUrl = 'https://api.themoviedb.org/3/movie/popular';
const searchGenresUrl = 'https://api.themoviedb.org/3/genre/movie/list';
const searchByMovieIdUrl = 'https://api.themoviedb.org/3/movie';
const searchWithFilters = 'https://api.themoviedb.org/3/discover/movie';
const NO_HIT_INFO_DIV_DOM = document.querySelector('.header-no-hit-info');
let page = 1;
//  1. --- Function fetch - get movies genres array ---
export const getMovieGenresAndSaveToStore = async () => {
  try {
    const response = await fetch(`${searchGenresUrl}?api_key=${API_KEY}`);
    // response Status:404 handling
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    // console.log(data.genres);
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
    //* add secure overwrite to maxPage for popular (server say maxPage = 500)
    const limitedTotalPagesForPopularSearch = 500;
    const limitedTotalResultsForPopularSearch = 10000;
    data.total_pages = limitedTotalPagesForPopularSearch;
    data.total_results = limitedTotalResultsForPopularSearch;
    setPopularParameterToStorage(1)
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
      // console.log('pusta tablica');
      return;
    }
    showLoader();

    //TODO function here!
    setPopularParameterToStorage(2)
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
    //getting movieId and its videos object at once
    const response = await fetch(
      `${searchByMovieIdUrl}/${movieId}?api_key=${API_KEY}&append_to_response=videos`
    );
    // response Status:404 handling
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    const videosObject = data.videos.results;
    // getting trailer url for movieId
    const movieTrailerUrl = getTrailerUrlFromObjectVideos(videosObject);
    // console.log(`movie trailer url` + movieTrailerUrl);
    //return object with movie's details
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
    //do usunięcia console.log()
    // console.log(`There's no trailer`);
    return;
  } else {
    const youtubeKey = videosObject[findIndexOfKeyTrailer].key;
    const movieTrailerUrl = `https://www.youtube.com/watch?v=${youtubeKey}`;
    //do usunięcia console.log()
    // console.log(` oraz url do trailera: ${movieTrailerUrl}`);
    return movieTrailerUrl;
  }
};

//  6. --- Function fetch - get array of movieIds  ---
export const getMoviesByArrayOfIds = async arrayOfMoviesIds => {

  const spreadArrayOfMoviesIds = [...arrayOfMoviesIds];
  const url = `${searchByMovieIdUrl}?api_key=${API_KEY}&append_to_response=${spreadArrayOfMoviesIds}`;

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
      // console.log(films);
      renderLibrary(films);
      //console.log do usunięcia
      // console.log(
      //   `Przykładowy obiekt zwracany przez funkcję getMoviesByArrayOfIds`);
      // console.log(films);
    }
  } catch (error) {
    // console.log('test');
    console.error(error);
  }
};

//  7. --- Function fetch - get movies with filters  ---

export const getMoviesWithFilters = async (page = 1) => {
  const genres = categoriesFilter();
  try {
    NO_HIT_INFO_DIV_DOM.textContent = '';
    // console.log(
    //   `${searchWithFilters}?api_key=${API_KEY}&page=${page}&with_genres=${genres}`
    // );
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
      // console.log('pusta tablica');
      return;
    }
    showLoader();

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
