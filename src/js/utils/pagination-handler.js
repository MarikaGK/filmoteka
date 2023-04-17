import { getMoviesByTitle } from '../fetches/movies';

const GALLERY_DOM = document.querySelector('.gallery');
const INPUT_DOM = document.querySelector('.header-input__text-box');
const NO_HIT_INFO_DIV_DOM = document.querySelector('.header-no-hit-info');

export const paginationHandler = (event) => {

  const pageNumber = Number(event.target.textContent);
  console.log(pageNumber);
  GALLERY_DOM.textContent = '';
  console.log(pageNumber);
  getMoviesByTitle(INPUT_DOM.value.trim, pageNumber);
}
