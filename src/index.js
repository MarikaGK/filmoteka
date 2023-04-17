import {
  getMoviesByTitle,
  getPopular,
  getMovieGenres,
  getMovieById,
  returnTrailerUrlByMovieId,
} from './js/fetches/movies.js';
//*? Powyższy import nie jest jeszcze używany - możliwe, że nie będzie potrzebny w ogóle.
import { handleSubmit } from './js/search-form-handler.js';

const FORM_DOM = document.querySelector('.header-input__form');

FORM_DOM.addEventListener('submit', handleSubmit);

//for result for "Rambo" check console and use example from below
// getMoviesByTitle('Rambo');
getPopular();
getMovieGenres();
let oldMovieIdExample = '1369'; // Film: Rambo First Blood
let newMovieIdExample = '603692'; // Film: JOHN WICK: CHAPTER 4 (z 2023 roku)
getMovieById(newMovieIdExample);
returnTrailerUrlByMovieId(newMovieIdExample);
// import { renderMovies } from './js/rendering/render.js';


// import { sendMovieToFirebase } from './js/firebase/firebase.js';
// const addToWatched = document.querySelector(".button-list_watched");
// console.log(addToWatched);
// addToWatched.addEventListener("click", sendMovieToFirebase);

import { testFirst } from './js/firebase/firebase.js';
const addToWatched = document.querySelector(".button-list_watched");
console.log(addToWatched);
let id = 5;
let title = "blablabla";
addToWatched.addEventListener("click", testFirst(id, title));
