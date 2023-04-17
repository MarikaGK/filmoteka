import { getMoviesByTitle } from '../fetches/movies';

const GALLERY_DOM = document.querySelector('.gallery');
const INPUT_DOM = document.querySelector('.header-input__text-box');
const NO_HIT_INFO_DIV_DOM = document.querySelector('.header-no-hit-info');

export function handleSubmit(event) {
  event.preventDefault();

  const searchingPhrasesTrimmed = INPUT_DOM.value.trim();
  NO_HIT_INFO_DIV_DOM.textContent = '';
  if (!searchingPhrasesTrimmed) {
    NO_HIT_INFO_DIV_DOM.textContent = 'Type anything...';
    return;
  }

  GALLERY_DOM.textContent = '';
  getMoviesByTitle(searchingPhrasesTrimmed);
}
