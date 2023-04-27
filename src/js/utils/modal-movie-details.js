import {
  ifWatchedBtnClassHasToBeToggled,
  ifQueueBtnClassHasToBeToggled,
  changeWatched,
  changeQueue,
} from '../firebase/firebase';
import localStorage from './localStorage';
import { getMoviesByArrayOfIds } from '../fetching/fetch-movies';
import { renderPagination } from '../rendering/render-pagination';
import { getStateOfDarkModeFromLocalStorage } from './dark-mode-switch';
import { startLoader } from './loader';

const modalOverlay = document.querySelector('[data-modal]');
const modal = document.querySelector('.modal-card');
const watchedBtn = document.querySelector('.add-to-watched');
const queueBtn = document.querySelector('.add-to-queue');
const CLOSE_BTN = document.querySelector('.close-btn');
const buttonList = document.querySelector('.modal-btns-div');
// const modalCardMovieInfo = document.querySelector('.modal-card__movie-info');
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

export const addEventListenersToBtns = () => {
  watchedBtn.addEventListener('click');
  queueBtn.addEventListener('click');
};

export const removeEventListenersFromBtns = () => {
  watchedBtn.removeEventListener('click');
  queueBtn.removeEventListener('click');
};

export const onShowModal = id => {
  if (localStorage.load('user')) {
    if (buttonList.classList.contains('display-none-for-unsigned-user')) {
      buttonList.classList.remove('display-none-for-unsigned-user');
    }
    if (getStateOfDarkModeFromLocalStorage()) {
      if (!watchedBtn.classList.contains('button--transparent')) {
        watchedBtn.classList.add('button--transparent');
        queueBtn.classList.add('button--transparent');
      }
    } else if (watchedBtn.classList.contains('button--transparent')) {
      watchedBtn.classList.remove('button--transparent');
      queueBtn.classList.remove('button--transparent');
    }
    ifWatchedBtnClassHasToBeToggled(Number(id));
    ifQueueBtnClassHasToBeToggled(Number(id));
    watchedBtn.addEventListener('click', changeWatched);
    queueBtn.addEventListener('click', changeQueue);
  }
  CLOSE_BTN.addEventListener('click', closeOnXBtn);
  modalOverlay.addEventListener('click', closeOnBackdropClick);
  document.addEventListener('keydown', closeOnEsc);
};

const onHideModal = () => {
  if (localStorage.load('actualLibrary') === 'watched') {
    getMoviesByArrayOfIds(localStorage.load('watched'));
  }
  if (localStorage.load('actualLibrary') === 'queue') {
    getMoviesByArrayOfIds(localStorage.load('queue'));
  }
  renderPagination();
  resetMarkupModal();
  CLOSE_BTN.removeEventListener('click', closeOnXBtn);
  modalOverlay.removeEventListener('click', closeOnBackdropClick);
  document.removeEventListener('keydown', closeOnEsc);
  toggleModal();
  watchedBtn.removeEventListener('click', changeWatched);
  queueBtn.removeEventListener('click', changeQueue);
};
