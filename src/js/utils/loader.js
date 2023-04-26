import { getMovieGenresAndSaveToStore } from '../fetching/fetch-movies';

const checkGenresInLocalStorage = () => {
  if (localStorage.getItem('movieGenresIdsArray')) {
    return;
  }
  getMovieGenresAndSaveToStore();
};

export const startLoader = () => {
  window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.remove('loader-hidden');
    let timeout;
    timeout = setTimeout(() => {
      loader.classList.add('loader-hidden');
    }, 1500);
    // console.log(loader.classList);
  });
  // console.log('startLoader work');
};

export const showLoader = () => {
  const gallery = document.querySelector('form');
  gallery.addEventListener('submit', () => {
    const loader = document.querySelector('.loader');
    loader.classList.remove('loader-hidden');
    let timeout;
    timeout = setTimeout(() => {
      loader.classList.add('loader-hidden');
    }, 1500);
    console.log(loader.classList);
  });
  console.log('showLoader work');
};
