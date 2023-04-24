import {
  getMovieGenresAndSaveToStore,
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
import { addEventListenersToBtns } from './js/utils/modal-movie-details.js'

const GALLERY_DOM = document.querySelector('.gallery');
setPopularParameterToStorage(3)
// FORM_DOM.addEventListener('submit', handleSubmit);

// getMovieGenresAndSaveToStore();
startLoader();

//*  Trzeba pobierać z localstorage tablice watched i queue oraz zapisywać do zmiennych (aktualizować zmiany i przesyłać na serwer zewn również)
//! localStorage.getItem('watched')); - może taka zmienna?
//! localStorage.getItem('queue')); - może taka zmienna?
//* eventLestenery na buttony: Watched i Queue 
//* wybierać funkcją getMoviesByArrayOfIds() odpowiednią tablicę z local storage


//Przykład zastosowania funkcji przyjmującej tablicę movieIDs
const oldMovieIdExample = 1369; // Film: Rambo First Blood
const newMovieIdExample = 603692; // Film: JOHN WICK: CHAPTER 4 (z 2023 roku)
const newMovieIdExample2 = 594767; // Film: Shazam! Fury of the gods (z 2023 roku)
const arrayOfMoviesIds = [1369, 603692, 594767, 47356, 21248];

// ---------- Edited 23.04.2023
saveFactorToLocalStorage(1)
const watchedArray = [4651,7892,543,2544,4455,8896,877,84568,9122,4510,6611,4152,8413,1244,1458,1486,9917,45618,4149,2550,2616,2772,2223,2124,3325,1126,4427,2778,8829,9390,3111,3222,3773,434,2335,361,3117,2382,3339,7740,9941,4232,4783,4784,2425,4622,4117,3348,4999,950];
const queueArray = [10771,4102,1603,1044,1105,1006,1707,1808,2109,3110,1121,1112,1113,1714,1715,1716,1717,1718,1819,1820,1721,1922,1923,1324,1025,1426,1827,1248,1629,8130,1431,1322,12334,1434,1435,1536,1537,1385,1396,15404,1441,1642,1743,1944,1645,1146,1247,1348,1349,1750];

// const watchedArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
// const queueArray = [101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150];



createArrayOfCurrentPageForWatched(1)

// -------------------------END OF EDIT
// addEventListenersToBtns()

// getMoviesByArrayOfIds(arrayOfMoviesIds);
renderPagination();

//jutro wyeksportuję do oddzielnego handlera
GALLERY_DOM.addEventListener('click', evt => {
  //zmiana klasy modala
  toggleModal();
  //do dodania return dla nie divów
  const singleMovieCard = evt.target.parentElement.parentElement;
  //wyświetlenie Id filmu
  console.log(singleMovieCard.dataset.movieId);
  // getTrailerUrlByMovieId(singleMovieCard.dataset.movieId);
  getMovieById(singleMovieCard.dataset.movieId);
  onShowModal();
});

const watchedBtn = document.querySelector('[data-watched-btn]');
const queueBtn = document.querySelector('[data-queue-btn]');

watchedBtn.addEventListener("click", ()=>{
  console.log('watched button zostal wcisniety')
  setPopularParameterToStorage(3)
  const factor = parseInt(1);
  createArrayOfCurrentPageForWatched(factor)
  saveFactorToLocalStorage(factor)
})
queueBtn.addEventListener("click", ()=>{
  console.log('queue button zostal wcisniety')
  setPopularParameterToStorage(4)
  const factor = parseInt(1);
  createArrayOfCurrentPageForWatched(factor)
  saveFactorToLocalStorage(factor)
})