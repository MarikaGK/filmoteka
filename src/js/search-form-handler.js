import { getMovie } from './fetches/movies';

const GALLERY_DOM = document.querySelector('.gallery');
const INPUT_DOM = document.querySelector('.header-input__text-box');

export function handleSubmit(event) {
  event.preventDefault();

  const searchingPhrasesTrimmed = INPUT_DOM.value.trim();

  if (!searchingPhrasesTrimmed) {
    return;
  }

  GALLERY_DOM.textContent = '';
  getMovie(searchingPhrasesTrimmed);
}
