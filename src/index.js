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
import { renderPagination } from './js/rendering/render-pagination.js';
const FORM_DOM = document.querySelector('.header-input__form');
const GALLERY_DOM = document.querySelector('.gallery');

FORM_DOM.addEventListener('submit', handleSubmit);

getMovieGenresAndSaveToStore();
startLoader();
getPopularMovies();
renderPagination();

// const paginationClickerContainer = document.querySelector('.pagination', false)
// const paginationClicker = paginationClickerContainer.querySelectorAll('a.tui-page-btn')

// paginationClicker.addEventListener("click", ()=>{
//     console.log(paginationClicker.value)
// })


//jutro wyeksportuję do oddzielnego handlera
GALLERY_DOM.addEventListener('click', evt => {
  //zmiana klasy modala
  toggleModal();
  //do dodania return dla nie divów
  const singleMovieCard = evt.target.parentElement.parentElement;
  //wyświetlenie Id filmu
  console.log(singleMovieCard.dataset.movieId);
  // getTrailerUrlByMovieId(singleMovieCard.dataset.movieId);
  getMovieById(singleMovieCard.dataset.movieId);
  onShowModal();
});
