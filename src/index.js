import {
  getPopularMovies,
  getMovieGenresAndSaveToStore,
  getMovieGenresFromStorage,
  getMovieById,
  getMoviesByArrayOfIds,
} from './js/fetching/fetch-movies.js';

import { handleSubmit } from './js/utils/search-form-handler.js';
import { renderCategoriesBox } from './js/rendering/render-multiselectBox.js';

//toggle modal fn
import { onShowModal, toggleModal } from './js/utils/modal-movie-details.js';
import { startLoader } from './js/utils/loader.js';
import { showButtonOnScroll, scrollToTop } from './js/utils/scroll-to-top.js';
import { renderPagination } from './js/rendering/render-pagination.js';
import { galleryHandler } from './js/utils/gallery-handler.js';
import { discoveryHandler } from './js/utils/categories-filter.js';



const DISCOVERY_BUTTON = document.querySelector('.header-input__discoveryButton')
const FIND_BUTTON = document.querySelector('.header-input__findButton')
const CATEGORIES_BOX = document.querySelector('.header-input__categoriesBox')
FORM_DOM.addEventListener('submit', handleSubmit);
GALLERY_DOM.addEventListener('click', galleryHandler);

getMovieGenresAndSaveToStore();
startLoader();
getPopularMovies();
renderCategoriesBox();
renderPagination();



//* Scroll site to top
const SCROLL_UP_BUTTON_DOM = document.querySelector('.scroll-up-arrow');
window.addEventListener('scroll', showButtonOnScroll);
SCROLL_UP_BUTTON_DOM.addEventListener('click', scrollToTop);



DISCOVERY_BUTTON.addEventListener('click', (evt) => {
  evt.preventDefault();
  CATEGORIES_BOX.classList.toggle('is-hidden')
})

FIND_BUTTON.addEventListener('click', discoveryHandler);

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
import { renderPagination } from './js/rendering/render-pagination.js';
import { galleryHandler } from './js/utils/gallery-handler.js';

const FORM_DOM = document.querySelector('.header-input__form');
const GALLERY_DOM = document.querySelector('.gallery');

FORM_DOM.addEventListener('submit', handleSubmit);
GALLERY_DOM.addEventListener('click', galleryHandler);

getMovieGenresAndSaveToStore();
startLoader();
getPopularMovies();
renderPagination();



//* DARK MODE
setDarkOrNormalModeOnPageLoadFromLocalStorageState();
