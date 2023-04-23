import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import { renderMovies } from './render-movies';
import { showLoader } from '../utils/loader';

import { getMoviesByTitle, getPopularMovies } from '../fetching/fetch-movies';
// import { createArrayOfCurrentPage, saveFactorToLocalStorage } from '../../my-library';

// Pagination config:
const perPage = 20
const visiblePages = 5
const prevPage = document.querySelector('.tui-prev')
const nextPage = document.querySelector('.tui-next')

const watchedArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
const queueArray = [101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150];

export const saveWatchedToLocalStorage = watchedArray => {
  const watched = watchedArray;
  localStorage.setItem('watched', JSON.stringify(watched));
};

export const saveQueueToLocalStorage = queueArray => {
  const queue = queueArray;
  localStorage.setItem('queue', JSON.stringify(queue));
};


export const getFactorFromStorage = () => {
  const factor = localStorage.getItem('factor');
  return factor;
};

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
export const saveFactorToLocalStorage = (value) => {
    let factor = value;
    localStorage.setItem('factor', JSON.stringify(factor));
  };

export const createArrayOfCurrentPageForWatched = (factor=1)=>{
    const popularParameter = getPopularParameterFromStorage();
    console.log(popularParameter)
    // const factor = getFactorFromStorage()-1;
    const multiplier = 20 * (factor-1);
    if (popularParameter==3)
    {
      const arrayOfCurrentPage = watchedArray.slice(0+multiplier,20+multiplier);
      console.log('console log dla array of CurrentPage of Watched');
      console.log(arrayOfCurrentPage)
    }
    saveFactorToLocalStorage(factor)
  }

export const renderPagination = (data) => {
  const paginationType = getPopularParameterFromStorage();
  if (paginationType!==3)
    {
      const options = {
        totalItems: getTotalResultsFromStorage(),
        itemsPerPage: 20,
        visiblePages: 5,
        page: getCurrentPageFromStorage(),
        centerAlign: true,
        firstItemClassName: 'tui-first-child',
        lastItemClassName: 'tui-last-child',
        template: 
          {
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
    else
    {
      const options = {
        totalItems: watchedArray.length,
        itemsPerPage: 20,
        visiblePages: 5,
        page: getCurrentPageFromStorage(),
        centerAlign: true,
        firstItemClassName: 'tui-first-child',
        lastItemClassName: 'tui-last-child',
        template: 
          {
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


}

document.addEventListener("click", (e)=>{
    const target = e.target.closest(".tui-mid-button");
    const popularParameter = getPopularParameterFromStorage();
    if (popularParameter==1) 
      {
        if(target)
        {
          const targetPage = target.id;
          getPopularMovies(targetPage)
        }  
      }
    else if (popularParameter==2)
      {
        if(target)
        {
          const targetPage = target.id;
          const searchMovieBox = document.querySelector('.header-input__text-box')
          const searchMovie = searchMovieBox.value;
          getMoviesByTitle(searchMovie, targetPage)
        }
      }
      else if (popularParameter==3)
      {
        if(target)
        {
            const factor = parseInt(target.id);
            createArrayOfCurrentPageForWatched(factor)
            saveFactorToLocalStorage(factor) 
        }
      }
    }
);

document.addEventListener("click", (e)=>{
  const target = e.target.closest(".tui-prev");
  const selectedTarget = document.querySelector('.tui-is-selected')
  const selectedPage = selectedTarget.id
  const popularParameter = getPopularParameterFromStorage();
  if (popularParameter==1) 
    {
      if(target)
      {
        const targetPage = selectedPage; getPopularMovies(targetPage)
      }
    }
  else if(popularParameter==2)
    {
      if(target)
      {
        const searchMovieBox = document.querySelector('.header-input__text-box')
        const searchMovie = searchMovieBox.value;
        getMoviesByTitle(searchMovie, selectedPage)
      }
    }
  else if(popularParameter==3)
    {
      if(target)
      {

      }
    }
  }
);

document.addEventListener("click", (e)=>{
  const target = e.target.closest(".tui-next");
  const selectedTarget = document.querySelector('.tui-is-selected')
  const selectedPage = selectedTarget.id
  const popularParameter = getPopularParameterFromStorage();
  if (popularParameter==1) 
    {
      if(target)
      {
        getPopularMovies(selectedPage)
      }
    }
  else if (popularParameter==2) 
    {
      if(target)
      {
        const searchMovieBox = document.querySelector('.header-input__text-box')
        const searchMovie = searchMovieBox.value;
        getMoviesByTitle(searchMovie, selectedPage)
      }
    }
  else if (popularParameter==3) 
    {
      if(target)
      {

      }
    }
    }
  );