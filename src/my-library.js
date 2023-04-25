import {
  // getMovieGenresAndSaveToStore,
  getMovieById,
  getMoviesByArrayOfIds,
} from './js/fetching/fetch-movies.js';

// import { handleSubmit } from './js/utils/search-form-handler.js';

//toggle modal fn
import { onShowModal, toggleModal } from './js/utils/modal-movie-details.js';
import { startLoader } from './js/utils/loader.js';
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
import { galleryHandler } from './js/utils/gallery-handler.js';

const GALLERY_DOM = document.querySelector('.gallery');
const WATCHED_BTN_DOM = document.querySelector('[data-watched-btn');
const QUEUE_BTN_DOM = document.querySelector('[data-queue-btn');

actualLibraryUpdateToStore('watched');
// saveIdArraysFromFirebaseToStore();
startLoader();
getMoviesByArrayOfIds(localStorage.load('watched'));
WATCHED_BTN_DOM.addEventListener('click', renderWatchedGallery);
QUEUE_BTN_DOM.addEventListener('click', renderQueueGallery);
addELToTeamModal();
renderPagination();
GALLERY_DOM.addEventListener('click', galleryHandler);

//* DARK MODE
setDarkOrNormalModeOnPageLoadFromLocalStorageState();
