const modalCard = document.querySelector('.modal-card');

export const renderModal = ({
  genres,
  id,
  original_title,
  overview,
  popularity,
  poster_path,
  title,
  vote_average,
  vote_count,
}) => {
  const genresName = genres.map(g => g.name).join(', ');
  const ratingPrecised = vote_average.toFixed(2);
  const markupModal = `    
  <button class="close-btn" title="close-btn" type="button" data-modal-close>
<svg
  class="modal__icon-close"
  width="30"
  height="30"
  viewport="0 0 32 32"
>
  <use href="./images/icons/icons.svg#icon-close"></use>
</svg>
</button>
<div class="modal-card__movie-info">
<div class="modal-card__poster">
    <img class="movie-img" src="https://image.tmdb.org/t/p/original${poster_path}" width=280 alt="${original_title}" loading="lazy" /></div>
<div class="modal-card__movie-description">
  <h2 class="modal-card__movie-title uppercase"> ${title} </h2>
  <ul class="movie-data-list">
    <li class="movie-data-list__item">
      <p class="movie-data-list__item-description">Vote / Votes</p>
      <p class="movie-data-list__item-value">
        <span class="rating"> ${ratingPrecised} </span> / ${vote_count}
      </p>
    </li>
    <li class="movie-data-list__item">
      <p class="movie-data-list__item-description">Popularity</p>
      <p class="movie-data-list__item-value">${popularity}</p>
    </li>
    <li class="movie-data-list__item">
      <p class="movie-data-list__item-description">Original Title</p>
      <p class="movie-data-list__item-value uppercase"> ${original_title} </p>
    </li>
    <li class="movie-data-list__item">
      <p class="movie-data-list__item-description">Genre</p>
      <p class="movie-data-list__item-value">${genresName}</p>
    </li>
  </ul>
  <h3 class="modal-card__about uppercase">About</h3>
  <p class="modal-card__about-description">${overview}</p>
  <div class="button-list">
    <button class="button button--orange uppercase" type="button" [data-add-to-watched]>Add to watched</button>
    <button class="button button--transparent uppercase" type="button" [data-add-to-queue]>Add to queue</button>
  </div>
</div>
</div>
`;
  modalCard.innerHTML = markupModal;
};
