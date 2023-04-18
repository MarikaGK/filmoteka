import {
    getMoviesByTitle,
    getPopular,
    getMovieGenres,
    getMovieById,
    returnTrailerUrlByMovieId,
} from './js/fetches/movies.js';
//*? Powyższy import nie jest jeszcze używany - możliwe, że nie będzie potrzebny w ogóle.
import { handleSubmit } from './js/utils/search-form-handler.js';
//loader gallery
import { loadGallery } from './js/utils/loader.js';

const FORM_DOM = document.querySelector('.header-input__form');
GALLERY_DOM = document.querySelector('.gallery')
FORM_DOM.addEventListener('submit', handleSubmit);

//for result for "Rambo" check console and use example from below
// getMoviesByTitle('Rambo');
loadGallery();
getPopular();
getMovieGenres();
let oldMovieIdExample = '1369'; // Film: Rambo First Blood
let newMovieIdExample = '603692'; // Film: JOHN WICK: CHAPTER 4 (z 2023 roku)
getMovieById(newMovieIdExample);
returnTrailerUrlByMovieId(newMovieIdExample);
// import { renderMovies } from './js/rendering/render.js';

//jutro wyeksportuję do oddzielnego handlera
GALLERY_DOM.addEventListener('click', (evt) => {
    //do dodania return dla nie divów
    const singleMovieCard = evt.target.parentElement.parentElement;
    //wyświetlenie Id filmu
    console.log(singleMovieCard.dataset.movieId);
    getMovieById(singleMovieCard.dataset.movieId);

})