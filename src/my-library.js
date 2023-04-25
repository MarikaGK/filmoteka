import {
  getMovieGenresAndSaveToStore,
  getMovieById,
  getMoviesByArrayOfIds,
} from './js/fetching/fetch-movies.js';

// import { handleSubmit } from './js/utils/search-form-handler.js';

//toggle modal fn
import { onShowModal, toggleModal } from './js/utils/modal-movie-details.js';
import { startLoader } from './js/utils/loader.js';
import { setDarkOrNormalModeOnPageLoadFromLocalStorageState } from './js/utils/dark-mode-switch.js';
import { renderPagination } from './js/rendering/render-pagination.js';
import { addELToTeamModal } from './js/utils/modal-team.js';
import { galleryHandler } from './js/utils/gallery-handler.js';
import { addELToTeamModal } from './js/utils/modal-team.js';
import { showButtonOnScroll, scrollToTop } from './js/utils/scroll-to-top.js';
const GALLERY_DOM = document.querySelector('.gallery');

// FORM_DOM.addEventListener('submit', handleSubmit);

//* DARK MODE
setDarkOrNormalModeOnPageLoadFromLocalStorageState();
startLoader();
addELToTeamModal();
//*  Trzeba pobierać z localstorage tablice watched i queue oraz zapisywać do zmiennych (aktualizować zmiany i przesyłać na serwer zewn również)
//! localStorage.getItem('watched')); - może taka zmienna?
//! localStorage.getItem('queue')); - może taka zmienna?
//* eventLestenery na buttony: Watched i Queue
//* wybierać funkcją getMoviesByArrayOfIds() odpowiednią tablicę z local storage

//Przykład zastosowania funkcji przyjmującej tablicę movieIDs
const oldMovieIdExample = 1369; // Film: Rambo First Blood
const newMovieIdExample = 603692; // Film: JOHN WICK: CHAPTER 4 (z 2023 roku)
const newMovieIdExample2 = 594767; // Film: Shazam! Fury of the gods (z 2023 roku)
const arrayOfMoviesIds = [1369, 603692, 594767];
getMoviesByArrayOfIds(arrayOfMoviesIds);
renderPagination();

addELToTeamModal();
GALLERY_DOM.addEventListener('click', galleryHandler);
//* Scroll site to top
const SCROLL_UP_BUTTON_DOM = document.querySelector('.scroll-up-arrow');
window.addEventListener('scroll', showButtonOnScroll);
SCROLL_UP_BUTTON_DOM.addEventListener('click', scrollToTop);
