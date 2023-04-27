import {
  // getMovieGenresAndSaveToStore,
  getMovieById,
  getMoviesByArrayOfIds,
} from './js/fetching/fetch-movies.js';
//toggle modal fn
import { onShowModal, toggleModal } from './js/utils/modal-movie-details.js';
import {
  renderPagination,
  saveFactorToLocalStorage,
  createArrayOfCurrentPageForWatched,
  setPopularParameterToStorage,
} from './js/rendering/render-pagination.js';
import { getMoviesByArrayOfIds } from './js/fetching/fetch-movies.js';
import { addELToTeamModal } from './js/utils/modal-team.js';
import { actualLibraryUpdateToStore } from './js/utils/store.js';
import {
  renderWatchedGallery,
  renderQueueGallery,
} from './js/utils/my-library-btns.js';
import localStorage from './js/utils/localStorage.js';
import { setDarkOrNormalModeOnPageLoadFromLocalStorageState } from './js/utils/dark-mode-switch.js';
import { addELToTeamModal } from './js/utils/modal-team.js';
import { saveIdArraysFromFirebaseToStore } from './js/firebase/firebase.js';
import { startLoader } from './js/utils/loader.js';

const GALLERY_DOM = document.querySelector('.gallery');
const WATCHED_BTN_DOM = document.querySelector('[data-watched-btn');
const QUEUE_BTN_DOM = document.querySelector('[data-queue-btn');

setPopularParameterToStorage(3);
saveIdArraysFromFirebaseToStore();
actualLibraryUpdateToStore('watched');
//* DARK MODE
setDarkOrNormalModeOnPageLoadFromLocalStorageState();
startLoader();
// saveIdArraysFromFirebaseToStore();
WATCHED_BTN_DOM.addEventListener('click', renderWatchedGallery);
QUEUE_BTN_DOM.addEventListener('click', renderQueueGallery);
addELToTeamModal();
saveFactorToLocalStorage(1);
createArrayOfCurrentPageForWatched(1);
renderPagination();
//jutro wyeksportuję do oddzielnego handlera
GALLERY_DOM.addEventListener('click', evt => {
  const singleMovieCard = evt.target.parentElement.parentElement;
  if (!singleMovieCard.classList.contains('movie-card')) return;
  getMovieById(singleMovieCard.dataset.movieId);
  onShowModal(singleMovieCard.dataset.movieId);
  //zmiana klasy modala
  toggleModal();
  // getTrailerUrlByMovieId(singleMovieCard.dataset.movieId);
});
getMoviesByArrayOfIds(localStorage.load('watched'));
