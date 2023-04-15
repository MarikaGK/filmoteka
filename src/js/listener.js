import { getMovie } from './fetches/movies';
import { renderMovies } from './rendering/render';

const formDOM = document.querySelector('.header-input__form');
const inputDOM = document.querySelector('.header-input__text-box');
const galleryDOM = document.querySelector('div.gallery');

function handleSubmit(event) {
  event.preventDefault();

  let searchingPhrasesTrimmed = inputDOM.value.trim();

  galleryDOM.textContent = '';

  if (!searchingPhrasesTrimmed) {
    return;
  }

    getMovie(searchingPhrasesTrimmed);
    renderMovies();
}

formDOM.addEventListener('submit', handleSubmit);


// dodać poniższą linijkę kodu do index.js
// import './js/listener.js';