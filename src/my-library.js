import {
  // getMovieGenresAndSaveToStore,
  getMovieById,
  getMoviesByArrayOfIds,
} from './js/fetching/fetch-movies.js';

// import { handleSubmit } from './js/utils/search-form-handler.js';

//toggle modal fn
import { onShowModal, toggleModal } from './js/utils/modal-movie-details.js';
import { startLoader } from './js/utils/loader.js';
import { addELToTeamModal } from './js/utils/modal-team.js';
// import {
//   getQueueMoviesIds,
//   getWatchedMoviesIds,
//   pushToWatched,
//   updateQueueInFirebase,
//   updateWatchedInFirebase,
// } from './js/firebase/firebase.js';
import {
  actualLibraryUpdateToStore,
} from './js/utils/store.js';
import {
  renderWatchedGallery,
  renderQueueGallery,
} from './js/utils/my-library-btns.js';
import localStorage from './js/utils/localStorage.js';
import { setDarkOrNormalModeOnPageLoadFromLocalStorageState } from './js/utils/dark-mode-switch.js';
import { renderPagination } from './js/rendering/render-pagination.js';

const GALLERY_DOM = document.querySelector('.gallery');
const WATCHED_BTN_DOM = document.querySelector('[data-watched-btn');
const QUEUE_BTN_DOM = document.querySelector('[data-queue-btn');

actualLibraryUpdateToStore('watched');
// saveIdArraysFromFirebaseToStore();
startLoader();
getMoviesByArrayOfIds(localStorage.load('watched'));
WATCHED_BTN_DOM.addEventListener('click', renderWatchedGallery);
QUEUE_BTN_DOM.addEventListener('click', renderQueueGallery);
renderPagination();
addELToTeamModal();

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
  onShowModal(singleMovieCard.dataset.movieId);
});

//* DARK MODE
setDarkOrNormalModeOnPageLoadFromLocalStorageState();
