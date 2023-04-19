import { saveMovieGenresToStorage } from '../rendering/render-genres';
import { renderMovies } from '../rendering/render-movies';
import { showLoader } from '../utils/loader';

// ------> CONSTANTS USED IN THE PROJECT:

const apiKey = '11f568ee70218bec08ad7368f7bb3250';
const apiUrl = 'https://api.themoviedb.org/3/search/movie';
const searchPopularUrl = 'https://api.themoviedb.org/3/movie/popular';
const searchGenresUrl = 'https://api.themoviedb.org/3/genre/movie/list';
const searchByMovieIdUrl = 'https://api.themoviedb.org/3/movie/';
const NO_HIT_INFO_DIV_DOM = document.querySelector('.header-no-hit-info');
let page = 1;

export const getMovieGenresAndSaveToStore = async () => {
  try {
    const response = await fetch(searchGenresUrl + `?api_key=` + apiKey);
    // response Status:404 handling
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data.genres);

    saveMovieGenresToStorage(data);
    return;

    //TODO function here!
  } catch (error) {
    console.error(error);
  }
};

//  2.    ------ Function fetch - get popular movies ------

export const getPopularMovies = async (page = 1) => {
  try {
    const response = await fetch(
      searchPopularUrl + `?api_key=` + apiKey + '&page=' + page
    );
    // response Status:404 handling
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);

    // TODO function here!
    renderMovies(data.results);
  } catch (error) {
    console.error(error);
  }
};

//  3.    ------ function fetch - get movies by title ------

// movieTitle is a .value from header input
export const getMoviesByTitle = async movieTitle => {
  try {
    NO_HIT_INFO_DIV_DOM.textContent = '';
    const response = await fetch(
      apiUrl + `?api_key=` + apiKey + '&query=' + movieTitle + '&page=' + page
    );
    // response Status:404 handling
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    if (!data.total_results) {
      NO_HIT_INFO_DIV_DOM.textContent =
        'Search result not successful. Enter the correct movie name and search again.';
      console.log('pusta tablica');
      return;
    }
    console.log(`Poniżej przykladowy console.log dla filmu "${movieTitle}"`);
    console.log(data);
    showLoader();

    //TODO function here!
    renderMovies(data.results);
  } catch (error) {
    console.error(error);
  }
};

//  4.    ------ Function fetch - get movie (details object) by movie ID ------

export const getMovieById = async movieId => {
  try {
    const response = await fetch(
      searchByMovieIdUrl + movieId + `?api_key=` + apiKey
    );
    // response Status:404 handling
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(
      `Poniżej console.log dla jednego filmu (${data.original_title}) po movieId: ${movieId}`
    );
    console.log(data);
    //TO DO function here!
    return renderModal(data);
  } catch (error) {
    console.error(error);
  }
};

//  5.    ------ Function fetch - get trailer's url by movie ID ------

export const getTrailerUrlByMovieId = async movieId => {
  try {
    const response = await fetch(
      searchByMovieIdUrl + movieId + '/videos' + `?api_key=` + apiKey
    );
    // response Status:404 handling
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    const findIndexOfKeyTrailer = data.results.findIndex(
      youtubeKey => youtubeKey.type === 'Trailer'
    );
    const youtubeKey = data.results[findIndexOfKeyTrailer].key;
    const movieTrailerUrl = `https://www.youtube.com/watch?v=${youtubeKey}`;
    console.log(movieTrailerUrl);

    return movieTrailerUrl;

    //TODO function here!
  } catch (error) {
    console.error(error);
  }
};
