import {
  // getMovieGenresAndSaveToStore,
  getMovieById,
  getMoviesByArrayOfIds,
} from './js/fetching/fetch-movies.js';

// import { handleSubmit } from './js/utils/search-form-handler.js';

//toggle modal fn
import { onShowModal, toggleModal } from './js/utils/modal-movie-details.js';
import { startLoader } from './js/utils/loader.js';



import { renderPagination, 
          getPopularParameterFromStorage,
          saveFactorToLocalStorage,
          createArrayOfCurrentPageForWatched,
          saveWatchedToLocalStorage, 
          saveQueueToLocalStorage,
        setPopularParameterToStorage } from './js/rendering/render-pagination.js';

setPopularParameterToStorage(3)

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
WATCHED_BTN_DOM.addEventListener('click', renderWatchedGallery);
QUEUE_BTN_DOM.addEventListener('click', renderQueueGallery);
addELToTeamModal();


saveFactorToLocalStorage(1)



createArrayOfCurrentPageForWatched(1)

// -------------------------END OF EDIT
// addEventListenersToBtns()

// getMoviesByArrayOfIds(arrayOfMoviesIds);
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

// const watchedBtn = document.querySelector('[data-watched-btn]');
// const queueBtn = document.querySelector('[data-queue-btn]');

// watchedBtn.addEventListener("click", ()=>{
//   console.log('watched button zostal wcisniety')
//   setPopularParameterToStorage(3)
//   const factor = parseInt(1);
//   createArrayOfCurrentPageForWatched(factor)
//   saveFactorToLocalStorage(factor)
//   renderPagination()
// })
// queueBtn.addEventListener("click", ()=>{
//   console.log('queue button zostal wcisniety')
//   setPopularParameterToStorage(4)
//   const factor = parseInt(1);
//   createArrayOfCurrentPageForWatched(factor)
//   saveFactorToLocalStorage(factor)
//   renderPagination()
// })
getMoviesByArrayOfIds(localStorage.load('watched'))