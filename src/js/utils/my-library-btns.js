import { getMoviesByArrayOfIds } from '../fetching/fetch-movies';
import { actualLibraryUpdateToStore, getIdsArrayFromStore } from './store';

const WATCHED_BTN_DOM = document.querySelector('[data-watched-btn');
const QUEUE_BTN_DOM = document.querySelector('[data-queue-btn');
const GALLERY_DOM = document.querySelector('.gallery');

export const renderWatchedGallery = e => {
  e.preventDefault();
  GALLERY_DOM.innerHTML = '';
  getMoviesByArrayOfIds(getIdsArrayFromStore('watched'));
  // if (getIdsArrayFromStore('watched') == []) {
  //   GALLERY_DOM.innerHTML = `<div class="no-hit-info"><p>No movie in your Watched Library yet</p></div>`;
  // }
  WATCHED_BTN_DOM.classList.add('button--orange');
  QUEUE_BTN_DOM.classList.remove('button--orange');
  actualLibraryUpdateToStore('watched');
};
export const renderQueueGallery = e => {
  e.preventDefault();
  GALLERY_DOM.innerHTML = '';
  getMoviesByArrayOfIds(getIdsArrayFromStore('queue'));
  // if (getIdsArrayFromStore('watched') == []) {
  //   GALLERY_DOM.innerHTML = `<div class="no-hit-info"><p>No movie in your Queue Library yet</p></div>`;
  // }
  QUEUE_BTN_DOM.classList.add('button--orange');
  WATCHED_BTN_DOM.classList.remove('button--orange');
  actualLibraryUpdateToStore('queue');
};
