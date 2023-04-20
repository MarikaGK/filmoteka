import {
  getMoviesByTitle,
  getPopularMovies,
  getMovieGenresAndSaveToStore,
  getMovieById,
  getTrailerUrlByMovieId,
} from './js/fetching/fetch-movies.js';

import { handleSubmit } from './js/utils/search-form-handler.js';
//loader gallery
import { startLoader } from './js/utils/loader.js';
import { darkModeSwitch } from './js/utils/dark-mode-switch.js';

const FORM_DOM = document.querySelector('.header-input__form');

FORM_DOM.addEventListener('submit', handleSubmit);

getMovieGenresAndSaveToStore();
startLoader();
getPopularMovies();
let oldMovieIdExample = '1369'; // Film: Rambo First Blood
let newMovieIdExample = '603692'; // Film: JOHN WICK: CHAPTER 4 (z 2023 roku)
getMovieById(newMovieIdExample);
getTrailerUrlByMovieId(newMovieIdExample);
