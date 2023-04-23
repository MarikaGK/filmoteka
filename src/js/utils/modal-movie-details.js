import {
  pushToQueue,
  pushToWatched,
  manageIdInQueue,
  manageIdInWatched,
  toggleClassToQueueBtn,
  toggleClassToWatchedBtn,
  db,
  getWatchedMoviesIds,
} from '../firebase/firebase';

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

const checkWatched = movieId => {
  manageIdInWatched(movieId);
  toggleClassToWatchedBtn();
};
const checkQueue = movieId => {
  manageIdInQueue(movieId);
  toggleClassToQueueBtn();
};

const getMovieIdFromParent = e => {
  const movieInfo = e.target.parentElement.parentElement;
  return movieInfo.dataset.movieId;
};
// const idArray = [594767, 502356, 76600];
const addEventListenersToBtns = () => {
  // watchedBtn.addEventListener('click', checkWatched);
  // queueBtn.addEventListener('click', checkQueue);
  watchedBtn.addEventListener('click', e => {
    const movieId = getMovieIdFromParent(e);

  });
  queueBtn.addEventListener('click', e => {
    const movieId = getMovieIdFromParent(e);
  });
};

const removeEventListenersFromBtns = () => {
  watchedBtn.removeEventListener('click', checkWatched);
  queueBtn.removeEventListener('click', checkQueue);
};

export const onShowModal = () => {
  CLOSE_BTN.addEventListener('click', closeOnXBtn);
  modalOverlay.addEventListener('click', closeOnBackdropClick);
  document.addEventListener('keydown', closeOnEsc);
  addEventListenersToBtns();
};

const onHideModal = () => {
  resetMarkupModal();
  CLOSE_BTN.removeEventListener('click', closeOnXBtn);
  modalOverlay.removeEventListener('click', closeOnBackdropClick);
  document.removeEventListener('keydown', closeOnEsc);
  toggleModal();
  // removeEventListenersFromBtns();
};
