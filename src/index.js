import {
  getPopularMovies,
  getMovieGenresAndSaveToStore,
  getMovieById,
  getMoviesByArrayOfIds,
} from './js/fetching/fetch-movies.js';

import { handleSubmit } from './js/utils/search-form-handler.js';

//toggle modal fn
import { onShowModal, toggleModal } from './js/utils/modal-movie-details.js';

import { startLoader } from './js/utils/loader.js';
import { setDarkOrNormalModeOnPageLoadFromLocalStorageState } from './js/utils/dark-mode-switch.js';
import { showButtonOnScroll, scrollToTop } from './js/utils/scroll-to-top.js';
import { renderPagination, saveFactorToLocalStorage, setPopularParameterToStorage } from './js/rendering/render-pagination.js';
import { db } from './js/firebase/firebase.js';
import { galleryHandler } from './js/utils/gallery-handler.js';
import { renderCategoriesBox } from './js/rendering/render-multiselectBox.js';
import { discoveryHandler } from './js/utils/categories-filter.js';
import { addELToTeamModal } from './js/utils/modal-team.js';
import { actualLibraryUpdateToStore } from './js/utils/store.js';

const FORM_DOM = document.querySelector('.header-input__form');
const GALLERY_DOM = document.querySelector('.gallery');
const BROWSE_BUTTON = document.querySelector('.header__browse');
const FIND_BUTTON = document.querySelector('.header__selectButton');
const CATEGORIES_BOX = document.querySelector('.header__categoriesBox');

FORM_DOM.addEventListener('submit', handleSubmit);

setPopularParameterToStorage(1)
saveFactorToLocalStorage(2)
// GALLERY_DOM.addEventListener('click', galleryHandler);
// FIND_BUTTON.addEventListener('click', discoveryHandler);
// BROWSE_BUTTON.addEventListener('click', evt => {
//   evt.preventDefault();
//   CATEGORIES_BOX.classList.toggle('is-hidden');
// });
actualLibraryUpdateToStore('home');
//* DARK MODE
setDarkOrNormalModeOnPageLoadFromLocalStorageState();
getMovieGenresAndSaveToStore();
startLoader();
getPopularMovies();
// renderCategoriesBox();
renderPagination();
// const paginationClickerContainer = document.querySelector('.pagination', false)
// const paginationClicker = paginationClickerContainer.querySelectorAll('a.tui-page-btn')

// paginationClicker.addEventListener("click", ()=>{
//     console.log(paginationClicker.value)
// })
GALLERY_DOM.addEventListener('click', evt => {
  const singleMovieCard = evt.target.parentElement.parentElement;
  if (!singleMovieCard.classList.contains('movie-card')) return;
  // getTrailerUrlByMovieId(singleMovieCard.dataset.movieId);
  getMovieById(singleMovieCard.dataset.movieId);
  onShowModal(singleMovieCard.dataset.movieId);
  //zmiana klasy modala
  toggleModal();
});
//* Scroll site to top
const SCROLL_UP_BUTTON_DOM = document.querySelector('.scroll-up-arrow');
window.addEventListener('scroll', showButtonOnScroll);
SCROLL_UP_BUTTON_DOM.addEventListener('click', scrollToTop);

addELToTeamModal();
