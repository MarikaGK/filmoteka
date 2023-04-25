import { getMoviesWithFilters } from '../fetching/fetch-movies';
const CATEGORIES_BOX = document.querySelector('.header__categoriesBox');
export const categoriesFilter = () => {
  const checked = document.querySelectorAll('.header__checkbox:checked');
  return [...checked].map(c => Number(c.id)).join();
};

export const discoveryHandler = evt => {
  evt.preventDefault();
  getMoviesWithFilters();
  CATEGORIES_BOX.classList.toggle('is-hidden');
};
