const refs = {
  openModalBtn: document.querySelector('.movie-card'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  poster: document.querySelector('.modal-card__poster'),
  title: document.querySelector('.modal-card__move-title'),
  rating: document.querySelector('.rating'),
  votes: document.querySelector('.votes'),
  popularity: document.querySelector('.popularity'),
  originalTitle: document.querySelector('.originalTitle'),
  genre: document.querySelector('.genre'),
  description: document.querySelector('.modal-card__about-description'),
};
const toggleModal = () => {
  refs.modal.classList.toggle('is-hidden');
};
const renderModal = () => {
  toggleModal();
  refs.poster.innerHTML - `<img src="${movie.poster_path}">`;
  refs.title.textContent = movie.title;
  refs.rating.textContent = movie.vote_average;
  refs.votes.textContent = movie.vote_count;
  refs.popularity.textContent = movie.popularity;
  refs.originalTitle.textContent = movie.original_title;
  refs.genre.textContent = movie.genre_ids;
  refs.description.textContent = movie.overview;
};

const modalHandler = () => {
  refs.openModalBtn.addEventListener('click', renderModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
};