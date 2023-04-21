import {
  getPopularMovies,
  getMovieGenresAndSaveToStore,
  getMovieById,
  getMoviesByArrayOfIds,
} from './js/fetching/fetch-movies.js';

//toggle modal fn
import { onShowModal, toggleModal } from './js/utils/modal-movie-details.js';
import { startLoader } from './js/utils/loader.js';

const FORM_DOM = document.querySelector('.header-input__form');
const GALLERY_DOM = document.querySelector('.gallery');

// getMovieGenresAndSaveToStore();
// startLoader();
// getPopularMovies();
//Przykład zastosowania funkcji przyjmującej tablicę movieIDs
const oldMovieIdExample = 1369; // Film: Rambo First Blood
const newMovieIdExample = 603692; // Film: JOHN WICK: CHAPTER 4 (z 2023 roku)
const newMovieIdExample2 = 594767; // Film: Shazam! Fury of the gods (z 2023 roku)
const arrayOfMoviesIds = [1369, 603692, 594767];
getMoviesByArrayOfIds(arrayOfMoviesIds);

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
