import { getMovie, getPopular, getGenres } from './js/fetches/movies.js';
//*? Powyższy import nie jest jeszcze używany - możliwe, że nie będzie potrzebny w ogóle.
import { handleSubmit } from './js/search-form-handler.js';

const FORM_DOM = document.querySelector('.header-input__form');

FORM_DOM.addEventListener('submit', handleSubmit);

//for result for "Rambo" check console and use example from below
getMovie('Rambo');
getPopular();
getGenres();

// import { renderMovies } from './js/rendering/render.js';
