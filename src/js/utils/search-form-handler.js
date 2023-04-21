import { getMoviesByTitle } from '../fetching/fetch-movies';

const GALLERY_DOM = document.querySelector('.gallery');
const INPUT_DOM = document.querySelector('.header-form__input');
const NO_HIT_INFO_DIV_DOM = document.querySelector('.header-no-hit-info');

export function handleSubmit(event) {
  event.preventDefault();

  const searchingPhrasesTrimmed = INPUT_DOM.value.trim();
  NO_HIT_INFO_DIV_DOM.textContent = '';
  if (!searchingPhrasesTrimmed) {
    NO_HIT_INFO_DIV_DOM.textContent = 'Type your movie title here';
    return;
  }

  GALLERY_DOM.textContent = '';
  getMoviesByTitle(searchingPhrasesTrimmed);
}
