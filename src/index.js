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
import { showButtonOnScroll, scrollToTop } from './js/utils/scroll-to-top.js';
import { renderPagination, saveFactorToLocalStorage } from './js/rendering/render-pagination.js';
import { galleryHandler } from './js/utils/gallery-handler.js';
const FORM_DOM = document.querySelector('.header-input__form');
const GALLERY_DOM = document.querySelector('.gallery');

FORM_DOM.addEventListener('submit', handleSubmit);
GALLERY_DOM.addEventListener('click', galleryHandler);

saveFactorToLocalStorage(2)
getMovieGenresAndSaveToStore();
startLoader();
getPopularMovies();
renderPagination();
// const paginationClickerContainer = document.querySelector('.pagination', false)
// const paginationClicker = paginationClickerContainer.querySelectorAll('a.tui-page-btn')

// paginationClicker.addEventListener("click", ()=>{
//     console.log(paginationClicker.value)
// })



//* Scroll site to top
const SCROLL_UP_BUTTON_DOM = document.querySelector('.scroll-up-arrow');
window.addEventListener('scroll', showButtonOnScroll);
SCROLL_UP_BUTTON_DOM.addEventListener('click', scrollToTop);
