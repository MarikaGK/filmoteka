import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import { renderMovies } from './render-movies';
import { showLoader } from '../utils/loader';
import { getMoviesByTitle, getPopularMovies } from '../fetching/fetch-movies';

// Pagination config:
const perPage = 20
const visiblePages = 5
const prevPage = document.querySelector('.tui-prev')
const nextPage = document.querySelector('.tui-next')


export const saveTotalPageToStorage = d => {
  const totalPages = d.total_pages;
  localStorage.setItem('totalPagesArray', JSON.stringify(totalPages));
};

export const saveTotalResultsToStorage = d => {
  const totalResults = d.total_results;
  localStorage.setItem('totalResultsArray', JSON.stringify(totalResults));
};

export const saveCurrentPageToStorage = d => {
  const currentPage = d.page;
  localStorage.setItem('currentPageArray', JSON.stringify(currentPage));
};
export const setPopularParameterToStorage = (isItPopular) => {
  const isItPopularParameter = isItPopular
  localStorage.setItem('isItPopular', JSON.stringify(isItPopularParameter))
}
export const getPopularParameterFromStorage = () => {
  const popularParameter = localStorage.getItem('isItPopular');
  const parsedPopularParameter = JSON.parse(popularParameter);
  return parsedPopularParameter
}

export const getTotalPagesFromStorage = () => {
  const totalPages = localStorage.getItem('totalPagesArray');
  const parsedTotalPages = JSON.parse(totalPages);
  return parsedTotalPages;
};

export const getTotalResultsFromStorage = () => {
  const totalResults = localStorage.getItem('totalResultsArray');
  const parsedTotalResults = JSON.parse(totalResults);
  return parsedTotalResults;
};
export const getCurrentPageFromStorage = () => {
  const currentPage = localStorage.getItem('currentPageArray');
  const parsedCurrentPage = JSON.parse(currentPage);
  return parsedCurrentPage;
};

export const renderPagination = (data) => {
  const options = {
    totalItems: getTotalResultsFromStorage(),
    itemsPerPage: 20,
    visiblePages: 5,
    page: getCurrentPageFromStorage(),
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn tui-mid-button" id="{{page}}">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected" id="{{page}}">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>'
    }
  };

  const pagination = new Pagination('pagination', options);
}

document.addEventListener("click", (e) => {
  const target = e.target.closest(".tui-mid-button");
  const popularParameter = getPopularParameterFromStorage();
  if (popularParameter == true) {
    if (target) {
      const targetPage = target.id;
      getPopularMovies(targetPage)
    }
  }
  else if (target) {
    const targetPage = target.id;
    const searchMovieBox = document.querySelector('.header-input__text-box')
    const searchMovie = searchMovieBox.value;
    getMoviesByTitle(searchMovie, targetPage)
    console.log('test');
  }
}
);

document.addEventListener("click", (e) => {
  const target = e.target.closest(".tui-prev");
  const selectedTarget = document.querySelector('.tui-is-selected')
  const selectedPage = selectedTarget.id
  const popularParameter = getPopularParameterFromStorage();
  if (popularParameter == true) {
    if (target) {
      const targetPage = selectedPage; getPopularMovies(targetPage)
    }
  }
  else if (target) {
    const searchMovieBox = document.querySelector('.header-input__text-box')
    const searchMovie = searchMovieBox.value;
    getMoviesByTitle(searchMovie, selectedPage)
  }
}
);

document.addEventListener("click", (e) => {
  const target = e.target.closest(".tui-next");
  const selectedTarget = document.querySelector('.tui-is-selected')
  const selectedPage = selectedTarget.id
  const popularParameter = getPopularParameterFromStorage();
  if (popularParameter == true) {
    if (target) { getPopularMovies(selectedPage) }
  }
  else {
    if (target) {
      const searchMovieBox = document.querySelector('.header-input__text-box')
      const searchMovie = searchMovieBox.value;
      getMoviesByTitle(searchMovie, selectedPage)
    }
  }
});