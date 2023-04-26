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
import { actualLibraryUpdateToStore } from './js/utils/store.js';
import {
  renderWatchedGallery,
  renderQueueGallery,
} from './js/utils/my-library-btns.js';
import localStorage from './js/utils/localStorage.js';
import { setDarkOrNormalModeOnPageLoadFromLocalStorageState } from './js/utils/dark-mode-switch.js';
import { renderPagination } from './js/rendering/render-pagination.js';
import { addELToTeamModal } from './js/utils/modal-team.js';
import { galleryHandler } from './js/utils/gallery-handler.js';
import { saveIdArraysFromFirebaseToStore } from './js/firebase/firebase.js';
const GALLERY_DOM = document.querySelector('.gallery');
const WATCHED_BTN_DOM = document.querySelector('[data-watched-btn');
const QUEUE_BTN_DOM = document.querySelector('[data-queue-btn');

saveIdArraysFromFirebaseToStore()
actualLibraryUpdateToStore('watched');
//* DARK MODE
setDarkOrNormalModeOnPageLoadFromLocalStorageState();
// saveIdArraysFromFirebaseToStore();
startLoader();
getMoviesByArrayOfIds(localStorage.load('watched'));
WATCHED_BTN_DOM.addEventListener('click', renderWatchedGallery);
QUEUE_BTN_DOM.addEventListener('click', renderQueueGallery);
renderPagination();
addELToTeamModal();

GALLERY_DOM.addEventListener('click', evt => {
  const singleMovieCard = evt.target.parentElement.parentElement;
  if (!singleMovieCard.classList.contains('movie-card')) return;
  //zmiana klasy modala
  toggleModal();
  // getTrailerUrlByMovieId(singleMovieCard.dataset.movieId);
  getMovieById(singleMovieCard.dataset.movieId);
  onShowModal(singleMovieCard.dataset.movieId);
});
