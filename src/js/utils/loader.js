import { getMovieGenres } from '../fetches/movies';

const checkGenresInLocalStorage = () => {
  if (localStorage.getItem('movieGenresIdsArray') !== null) {
    return;
  }
  getMovieGenres();
};

export const loadGallery = () => {
  window.addEventListener('load', () => {
    checkGenresInLocalStorage();
    const loader = document.querySelector('.loader');
    loader.classList.remove('loader-hidden');
    let timeout;
    timeout = setTimeout(() => {
      loader.classList.add('loader-hidden');
    }, 1500);
    console.log(loader.classList);
  });
  console.log('loadGallery work');
};

export const loadMovie = () => {
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
  console.log('loadMovie work');
};
