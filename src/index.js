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

const FORM_DOM = document.querySelector('.header-input__form');
const GALLERY_DOM = document.querySelector('.gallery');
const CATEGORIES_BUTTON = document.querySelector('.header-input__categoriesButton')
FORM_DOM.addEventListener('submit', handleSubmit);

getMovieGenresAndSaveToStore();
startLoader();
getPopularMovies();
// renderCategoriesBox(getMovieGenresFromStorage);
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



CATEGORIES_BUTTON.addEventListener('click', (evt) => {
  const categories = getMovieGenresFromStorage();
  console.log(categories);

})

console.log("  test")
const test = getMovieGenresFromStorage();
console.log(test)