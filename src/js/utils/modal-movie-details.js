import {
  manageIdInQueue,
  manageIdInWatched,
  toggleClassToQueueBtn,
  toggleClassToWatchedBtn,
} from '../firebase/firebase';

const modalOverlay = document.querySelector('[data-modal]');
const modal = document.querySelector('.modal-card');
const watchedBtn = document.querySelector('[data-add-to-watched]');
const queueBtn = document.querySelector('[data-add-to-queue]');
const CLOSE_BTN = document.querySelector('.close-btn');

const addEvList = (target, behav, func) => {
  target.addEventListener(behav, func);
};

export const toggleModal = () => {
  modalOverlay.classList.toggle('is-hidden');
  modal.classList.toggle('none');
};

const closeOnEsc = e => {
  if (e.code === 'Escape') {
    toggleModal();
  }
  return;
};

const closeOnBackdropClick = e => {
  if (e.target === modalOverlay) {
    toggleModal();
  }
  return;
};

const checkWatched = e => {
  const movieId = e.target.dataset.movieId;
  manageIdInWatched(id);
  toggleClassToWatchedBtn();
};
const checkQueue = e => {
  const movieId = e.target.dataset.movieId;
  manageIdInQueue(id);
  toggleClassToQueueBtn();
};

const addEventListenersToBtns = () => {
  watchedBtn.addEventListener('click', checkWatched);
  queueBtn.addEventListener('click', checkQueue);
};

const removeEventListenersFromBtns = () => {
  watchedBtn.removeEventListener('click', checkWatched);
  queueBtn.removeEventListener('click', checkQueue);
};

export const onShowModal = () => {
  CLOSE_BTN.addEventListener('click', toggleModal);
  modalOverlay.addEventListener('click', closeOnBackdropClick);
  document.addEventListener('keydown', closeOnEsc);
  addEventListenersToBtns();
};

export const onHideModal = () => {
  CLOSE_BTN.removeEventListener('click', toggleModal);
  modalOverlay.removeEventListener('click', closeOnBackdropClick);
  document.removeEventListener('keydown', closeOnEsc);
  removeEventListenersFromBtns();
};
