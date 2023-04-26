import { getMoviesByArrayOfIds } from '../fetching/fetch-movies';
import { actualLibraryUpdateToStore } from './store';
import localStorage from './localStorage';
import { renderPagination, 
  getPopularParameterFromStorage,
  saveFactorToLocalStorage,
  createArrayOfCurrentPageForWatched,
  // saveWatchedToLocalStorage, 
  // saveQueueToLocalStorage,
setPopularParameterToStorage } from '../rendering/render-pagination';

const WATCHED_BTN_DOM = document.querySelector('[data-watched-btn]');
const QUEUE_BTN_DOM = document.querySelector('[data-queue-btn]');
const GALLERY_DOM = document.querySelector('.gallery');

export const renderWatchedGallery = e => {
  e.preventDefault();
  GALLERY_DOM.innerHTML = '';
  getMoviesByArrayOfIds(localStorage.load('watched'));
  if (localStorage.load('watched').length == 0) {
    GALLERY_DOM.innerHTML = `<div class="no-hit-info"><p>No movie in your Watched Library yet</p></div>`;
  }
  if (
    !WATCHED_BTN_DOM.classList.contains('button--orange') &&
    QUEUE_BTN_DOM.classList.contains('button--orange')
  ) {
    WATCHED_BTN_DOM.classList.add('button--orange');
    QUEUE_BTN_DOM.classList.remove('button--orange');
  }
  setPopularParameterToStorage(3)
  const factor = parseInt(1);
  createArrayOfCurrentPageForWatched(factor);
  saveFactorToLocalStorage(factor);
  renderPagination();
  actualLibraryUpdateToStore('watched');
};
export const renderQueueGallery = e => {
  e.preventDefault();
  GALLERY_DOM.innerHTML = '';
  getMoviesByArrayOfIds(localStorage.load('queue'));
  if (localStorage.load('queue').length == 0) {
    GALLERY_DOM.innerHTML = `<div class="no-hit-info"><p>No movie in your Queue Library yet</p></div>`;
  }
  if (
    !QUEUE_BTN_DOM.classList.contains('button--orange') &&
    WATCHED_BTN_DOM.classList.contains('button--orange')
  ) {
    QUEUE_BTN_DOM.classList.add('button--orange');
    WATCHED_BTN_DOM.classList.remove('button--orange');
  }
  setPopularParameterToStorage(4)
  const factor = parseInt(1);
  createArrayOfCurrentPageForWatched(factor)
  saveFactorToLocalStorage(factor)
  renderPagination()
  actualLibraryUpdateToStore('queue');
};
