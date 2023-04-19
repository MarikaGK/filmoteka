import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { renderMovies } from './render-movies';
import { getPopularMovies } from '../fetching/fetch-movies';

// Pagination config:
const perPage = 20
const visiblePage = 7


export const saveTotalPageToStorage = d => {
    const totalPages = d.total_pages;
    localStorage.setItem('totalPagesArray', JSON.stringify(totalPages));
    console.log('Ponizej console log dla totalPages');
    console.log(totalPages)
  };

export const saveTotalResultsToStorage = d => {
    const totalResults = d.total_results;
    localStorage.setItem('totalResultsArray', JSON.stringify(totalResults));
    console.log('Ponizej consolelog dla totalResults');
    console.log(totalResults)
  };

export const saveCurrentPageToStorage = d => {
    const currentPage = d.page;
    localStorage.setItem('currentPageArray', JSON.stringify(currentPage));
    console.log('Ponizej console log dlacurrentPage');
    console.log(currentPage);
  };

const getTotalPagesFromStorage = () => {
    const totalPages = localStorage.getItem('totalPagesArray');
    const parsedTotalPages = JSON.parse(totalPages);
    console.log('Ponizej console log dla parseTotalPages');
    console.log(parsedTotalPages);
    return parsedTotalPages;
  };

  const getTotalResultsFromStorage = () => {
    const totalResults = localStorage.getItem('totalResultsArray');
    const parsedTotalResults = JSON.parse(totalResults);
    console.log('Ponizej console log dla parsedTotalResults');
    console.log(parsedTotalResults);
    return parsedTotalResults;
  };
  const getCurrentPageFromStorage = () => {
    const currentPage = localStorage.getItem('currentPageArray');
    const parsedCurrentPage = JSON.parse(currentPage);
    console.log('Ponizej console log dla parsedCurrentPage');
    console.log(parsedCurrentPage);
    return parsedCurrentPage;
  };


export const renderPagination = (data) => {
console.log('ponizej console.log dla renderPopularPagination')
const options = {
  totalItems: getTotalResultsFromStorage(),
  itemsPerPage: 20,
  visiblePages: 7,
  page: getCurrentPageFromStorage(),
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn" data-src="{{page}}">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected" data-src="{{page}}">{{page}}</strong>',
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
console.log('Ponizej consolelog Options dla paginacji')
console.log(options)


const pagination = new Pagination('pagination', options);
console.log('0000000000000000000000000000');
console.log(pagination)

}

// const paginationClicker = document.querySelectorAll('.header')
// console.log('0000000000000000000000000000');
// console.log(paginationClicker)
// paginationClicker.addEventListener("click", ()=>{console.log('test')})


// export const renderGalleryByPage = ()=>{
//     const pageNumber = document.querySelector('.tui-page-btn').value
//     const movieTitle = document.querySelector('.header-input__text-box').value.trim()
//     const getMoviesByPage = async (movieTitle, pageNumber=1) =>{
//       try {
//         const response = await fetch(
//           apiUrl + `?api_key=` + apiKey + '&query=' + movieTitle + '&page=' + page
//         );
//         // response Status:404 handling
//         if (!response.ok) {
//           throw new Error(response.status);
//         }
//         const data = await response.json();
//         //TO DO function here!
//         renderMovies(data.results);
//         renderPagination(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
// }

// export const pageClicker = document.querySelector('.tui-page-btn')
// pageClicker.addEventListener("click", ()=>{
//     if (pageClicker.value==!null) {
//         page = pageClicker.value
//         getMoviesByTitle(page)
//     }else     {
//         page = 1
//     }
// console.log(pageClicker)
// console.log('ponizej log z pageClickera');
// console.log(page);
// })
