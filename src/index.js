import {
  getMoviesByTitle,
  getPopularMovies,
  getMovieGenresAndSaveToStore,
  getMovieById,
  getTrailerUrlByMovieId,
} from './js/fetching/fetch-movies.js';

import { handleSubmit } from './js/utils/search-form-handler.js';

//toggle modal fn
import { hideModal, showModal } from './modal.js';
import { startLoader } from './js/utils/loader.js';

const FORM_DOM = document.querySelector('.header-input__form');
const GALLERY_DOM = document.querySelector('.gallery');
const CLOSE_BTN = document.querySelector('[data-modal-close]');

FORM_DOM.addEventListener('submit', handleSubmit);

getMovieGenresAndSaveToStore();
startLoader();
getPopularMovies();
let oldMovieIdExample = '1369'; // Film: Rambo First Blood
let newMovieIdExample = '603692'; // Film: JOHN WICK: CHAPTER 4 (z 2023 roku)
getMovieById(newMovieIdExample);
returnTrailerUrlByMovieId(newMovieIdExample);
// import { renderMovies } from './js/rendering/render.js';

//jutro wyeksportuję do oddzielnego handlera
GALLERY_DOM.addEventListener('click', evt => {
  //zmiana klasy modala
  showModal;
  //do dodania return dla nie divów
  const singleMovieCard = evt.target.parentElement.parentElement;
  //wyświetlenie Id filmu
  console.log(singleMovieCard.dataset.movieId);
  getMovieById(singleMovieCard.dataset.movieId);
  CLOSE_BTN.addEventListener('click', hideModal);
});
