import {
  getMoviesByTitle,
  getPopularMovies,
  getMovieGenresAndSaveToStore,
  getMovieById,
  getTrailerUrlByMovieId,
} from './js/fetching/fetch-movies.js';

import { handleSubmit } from './js/utils/search-form-handler.js';
//loader gallery
import { startLoader } from './js/utils/loader.js';
import { renderPagination } from './js/rendering/render-pagination.js';
const FORM_DOM = document.querySelector('.header-input__form');

FORM_DOM.addEventListener('submit', handleSubmit);

getMovieGenresAndSaveToStore();
startLoader();
getPopularMovies();
let oldMovieIdExample = '1369'; // Film: Rambo First Blood
let newMovieIdExample = '603692'; // Film: JOHN WICK: CHAPTER 4 (z 2023 roku)
getMovieById(newMovieIdExample);
getTrailerUrlByMovieId(newMovieIdExample);
renderPagination()

// const paginationClickerContainer = document.querySelector('.pagination', false)
// const paginationClicker = paginationClickerContainer.querySelectorAll('a.tui-page-btn')

// paginationClicker.addEventListener("click", ()=>{
//     console.log(paginationClicker.value)
// })

document.addEventListener("click", (e)=>{
  const target = e.target.closest(".tui-page-btn"); // Or any other selector.

  if(target){
    const targetPage = target.id
    console.log(targetPage)
    getPopularMovies(targetPage)
  }
});