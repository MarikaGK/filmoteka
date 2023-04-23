import {
  getMovieGenresAndSaveToStore,
  getMovieById,
  getMoviesByArrayOfIds,
} from './js/fetching/fetch-movies.js';

// import { handleSubmit } from './js/utils/search-form-handler.js';

//toggle modal fn
import { onShowModal, toggleModal } from './js/utils/modal-movie-details.js';
import { startLoader } from './js/utils/loader.js';
import {
  getQueueMoviesIds,
  getWatchedMoviesIds,
  pushToWatched,
} from './js/firebase/firebase.js';
import { getIdArrayFromStore } from './js/utils/store.js';

const GALLERY_DOM = document.querySelector('.gallery');


// for (const key in watchedMoviesArray) {
//   idArray.push(watchedMoviesArray.value);
// }

// FORM_DOM.addEventListener('submit', handleSubmit);

// getMovieGenresAndSaveToStore();
startLoader();
getMoviesByArrayOfIds(getIdsArrayFromStore('watched'));

//*  Trzeba pobierać z localstorage tablice watched i queue oraz zapisywać do zmiennych (aktualizować zmiany i przesyłać na serwer zewn również)
//! localStorage.getItem('watched')); - może taka zmienna?
//! localStorage.getItem('queue')); - może taka zmienna?
//* eventLestenery na buttony: Watched i Queue
//* wybierać funkcją getMoviesByArrayOfIds() odpowiednią tablicę z local storage

//Przykład zastosowania funkcji przyjmującej tablicę movieIDs
const oldMovieIdExample = 1369; // Film: Rambo First Blood
const newMovieIdExample = 603692; // Film: JOHN WICK: CHAPTER 4 (z 2023 roku)
const newMovieIdExample2 = 594767; // Film: Shazam! Fury of the gods (z 2023 roku)
const arrayOfMoviesIds = [1369, 603692, 594767];
// getMoviesByArrayOfIds(arrayOfMoviesIds);

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
