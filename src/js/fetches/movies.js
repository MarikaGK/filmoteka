import { renderMovies } from '../rendering/render';
import { loadMovie } from '../utils/loader';
import { renderPagination } from '../pagination/pagination';

// ------ nessesary for work ------
const apiKey = '11f568ee70218bec08ad7368f7bb3250';
const apiUrl = 'https://api.themoviedb.org/3/search/movie';
const searchPopularUrl = 'https://api.themoviedb.org/3/movie/popular';
const searchGenresUrl = 'https://api.themoviedb.org/3/genre/movie/list';
const searchByMovieIdUrl = 'https://api.themoviedb.org/3/movie/';
const NO_HIT_INFO_DIV_DOM = document.querySelector('.header-no-hit-info');
const PAGINATION_DOM = document.querySelector('.pagination__list');


// może być przydatne do wyciągnięcia języka przeglądarki użytkownika - do zmiany języka strony/opisów filmów itd.
// const userLocaleLang =
//   navigator.languages && navigator.languages.length
//     ? navigator.languages[0]
//     : navigator.language;

//  1.    ------ Function - fetch - Popular movies ------
export const getPopular = async (page = 1) => {
  try {
    const response = await fetch(
      searchPopularUrl + `?api_key=` + apiKey + '&page=' + page
    );
    // response Status:404 handling
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log('Poniżej przykladowy console.log dla popularnych');
    console.log(data);
    // TO DO function here!
    renderMovies(data.results);

  } catch (error) {
    console.error(error);
  }
};

//  2.    ------ function fetch - get movies by title ------
// movieTitle is a .value from header input
export const getMoviesByTitle = async (movieTitle, page = 1) => {
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
    console.log(data)
    loadMovie();
    //TO DO function here!
    renderMovies(data.results);
    renderPagination(PAGINATION_DOM, page,);
  } catch (error) {
    console.error(error);
  }
};

// 3.     ------ function fetch - get whole movies genres ------
//?api_key=<<api_key>>&language=en-US
export const getMovieGenres = async () => {
  try {
    const response = await fetch(searchGenresUrl + `?api_key=` + apiKey);
    // response Status:404 handling
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log('Poniżej przykladowy console.log dla listy gatunków');
    console.log(data);
    //TO DO function here!
  } catch (error) {
    console.error(error);
  }
};

//  4.    ------ Function - fetch - get movie details object by movie ID ------
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
    return data;
  } catch (error) {
    console.error(error);
  }
};

//  5.    ------ Function - fetch - get trailer's url by movie ID ------
export const returnTrailerUrlByMovieId = async movieId => {
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
    console.log(
      `Poniżej link do Video na Youtube jednego filmu po movieId: ${movieId}`
    );
    console.log(movieTrailerUrl);
    return movieTrailerUrl;
    //TO DO function here!
  } catch (error) {
    console.error(error);
  }
};
