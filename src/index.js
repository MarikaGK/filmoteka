import {
  getPopularMovies,
  getMovieGenresAndSaveToStore,
  // getMovieById,
  getMovieDetailsWithVideosById,
} from './js/fetching/fetch-movies.js';
import { handleSubmit } from './js/utils/search-form-handler.js';
//toggle modal fn
import { onShowModal, toggleModal } from './js/utils/modal-movie-details.js';
import { setDarkOrNormalModeOnPageLoadFromLocalStorageState } from './js/utils/dark-mode-switch.js';
import { showButtonOnScroll, scrollToTop } from './js/utils/scroll-to-top.js';
import {
  renderPagination,
  saveFactorToLocalStorage,
  setPopularParameterToStorage,
} from './js/rendering/render-pagination.js';
import { addELToTeamModal } from './js/utils/modal-team.js';
import { actualLibraryUpdateToStore } from './js/utils/store.js';
import { startLoader } from './js/utils/loader.js';

const FORM_DOM = document.querySelector('.header-input__form');
const GALLERY_DOM = document.querySelector('.gallery');

FORM_DOM.addEventListener('submit', handleSubmit);

setPopularParameterToStorage(1);
saveFactorToLocalStorage(2);
actualLibraryUpdateToStore('home');
//* DARK MODE
setDarkOrNormalModeOnPageLoadFromLocalStorageState();
getMovieGenresAndSaveToStore();
startLoader();
getPopularMovies();
renderPagination();

GALLERY_DOM.addEventListener('click', evt => {
  const singleMovieCard = evt.target.parentElement.parentElement;
  if (!singleMovieCard.classList.contains('movie-card')) return;
  // getTrailerUrlByMovieId(singleMovieCard.dataset.movieId);
  getMovieDetailsWithVideosById(singleMovieCard.dataset.movieId);
  onShowModal(singleMovieCard.dataset.movieId);
  //zmiana klasy modala
  toggleModal();
});
//* Scroll site to top
const SCROLL_UP_BUTTON_DOM = document.querySelector('.scroll-up-arrow');
window.addEventListener('scroll', showButtonOnScroll);
SCROLL_UP_BUTTON_DOM.addEventListener('click', scrollToTop);

addELToTeamModal();
