import {
  pushToQueue,
  pushToWatched,
  manageIdInQueue,
  manageIdInWatched,
  toggleClassToQueueBtn,
  toggleClassToWatchedBtn,
  db,
  getWatchedMoviesIds,
  getQueueMoviesIds,
  ifWatchedBtnClassHasToBeToggled,
  ifQueueBtnClassHasToBeToggled,
  checkTheIdInWatched,
  updateWatchedInFirebase,
  updateQueueInFirebase,
} from '../firebase/firebase';
import { getIdsArrayFromStore } from './store';

const modalOverlay = document.querySelector('[data-modal]');
const modal = document.querySelector('.modal-card');
const watchedBtn = document.querySelector('.add-to-watched');
const queueBtn = document.querySelector('.add-to-queue');
const CLOSE_BTN = document.querySelector('.close-btn');
const modalCardMovieInfo = document.querySelector('.modal-card__movie-info');
const modalCardPoster = document.querySelector('.modal-card__poster');
const modalCardDescriptionWrapper = document.querySelector(
  '.modal-card__movie-description-wrapper'
);

export const toggleModal = () => {
  modalOverlay.classList.toggle('is-hidden');
  modal.classList.toggle('none');
};

const resetMarkupModal = () => {
  modalCardPoster.innerHTML = '';
  modalCardDescriptionWrapper.innerHTML = '';
};

const closeOnXBtn = () => {
  onHideModal();
};

const closeOnEsc = e => {
  if (e.code === 'Escape') {
    onHideModal();
  }
  return;
};

const closeOnBackdropClick = e => {
  if (e.target === modalOverlay) {
    onHideModal();
  }
  return;
};

const checkWatched = e => {
  e.preventDefault();
  const movieId = getMovieIdFromParent(e);
  console.log(`to jest movie id przekazywane z el`)
  console.log(movieId)
  console.log(typeof movieId)
  manageIdInWatched(Number(movieId));
  ifWatchedBtnClassHasToBeToggled(Number(movieId));
};
const checkQueue = e => {
  e.preventDefault();
  const movieId = getMovieIdFromParent(e);
  manageIdInQueue(Number(movieId));
  ifQueueBtnClassHasToBeToggled(Number(movieId));
};

const refreshingMyLibraryOnHidingMovieDetails = () => {
  if (location.pathname === '/my-library') {
    getMoviesByArrayOfIds(getIdsArrayFromStore(actualLibraryFromStore()));
  }
};
const getMovieIdFromParent = e => {
  const movieInfo = e.target.parentElement.parentElement;
  return movieInfo.dataset.movieId;
};

const addEventListenersToBtns = e => {
  watchedBtn.addEventListener('click', checkWatched);
  queueBtn.addEventListener('click', checkQueue);
};

const removeEventListenersFromBtns = () => {
  watchedBtn.removeEventListener('click', checkWatched);
  queueBtn.removeEventListener('click', checkQueue);
};

export const onShowModal = id => {
  getWatchedMoviesIds();
  getQueueMoviesIds();
  CLOSE_BTN.addEventListener('click', closeOnXBtn);
  modalOverlay.addEventListener('click', closeOnBackdropClick);
  document.addEventListener('keydown', closeOnEsc);
  getIdsArrayFromStore('watched');
  getIdsArrayFromStore('queue');
  console.log(`To jest {getIdsArrayFromStore('watched')`);
  console.log(getIdsArrayFromStore('watched'));
  console.log(`To jest getIdsArrayFromStore('queue')`);
  console.log(getIdsArrayFromStore('queue'));
  ifWatchedBtnClassHasToBeToggled(Number(id));
  ifQueueBtnClassHasToBeToggled(Number(id));
  addEventListenersToBtns();
};

const onHideModal = () => {
  resetMarkupModal();
  CLOSE_BTN.removeEventListener('click', closeOnXBtn);
  modalOverlay.removeEventListener('click', closeOnBackdropClick);
  document.removeEventListener('keydown', closeOnEsc);
  toggleModal();
  refreshingMyLibraryOnHidingMovieDetails();
  // removeEventListenersFromBtns();
  // updateWatchedInFirebase(getIdsArrayFromStore('watched'));
  // updateQueueInFirebase(getIdsArrayFromStore('queue'));
};
