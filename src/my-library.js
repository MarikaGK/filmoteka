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
          saveFactorToLocalStorage } from './js/rendering/render-pagination.js';

const GALLERY_DOM = document.querySelector('.gallery');

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
const arrayOfMoviesIds = [1369, 603692, 594767, 4756, 2148];

// ---------- Edited 23.04.2023
saveFactorToLocalStorage(2)
const watchedArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
const queueArray = [101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150];

const saveWatchedToLocalStorage = watchedArray => {
  const watched = watchedArray;
  localStorage.setItem('watched', JSON.stringify(watched));
};

const saveQueueToLocalStorage = queueArray => {
  const queue = queueArray;
  localStorage.setItem('queue', JSON.stringify(queue));
};


export const getFactorFromStorage = () => {
  const factor = localStorage.getItem('factor');
  return factor;
};

export const createArrayOfCurrentPage = ()=>{
  const popularParameter = getPopularParameterFromStorage();
  const factor = getFactorFromStorage()-1;
  const multiplier = 20 * factor;
  if (popularParameter==3)
  {
    const arrayOfCurrentPage = queueArray.slice(0+multiplier,19+multiplier);
    console.log('console log dla array of current page');
    console.log(arrayOfCurrentPage)
  }
  saveFactorToLocalStorage(factor)
}
createArrayOfCurrentPage()
saveWatchedToLocalStorage(watchedArray)
saveQueueToLocalStorage(queueArray)




// -------------------------END OF EDIT

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

