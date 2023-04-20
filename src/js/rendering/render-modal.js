const modalCardMovieInfo = document.querySelector('.modal-card__movie-info');

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
  const markupModal = `    
 
  <div class="modal-card__poster" data-movie-id="${id}">
  <img 
    class="modal-card__img"
    src="https://image.tmdb.org/t/p/original${poster_path}"
    width="375"
    alt="${original_title}"
    loading="lazy"
  />
</div>
<div class="modal-card__movie-description">
  <h2 class="modal-card__movie-title uppercase">${title}</h2>
  <ul class="movie-data-list">
    <li class="movie-data-list__item">
      <p class="movie-data-list__item-description">Vote / Votes</p>
      <p class="movie-data-list__item-value">
        <span class="rating--orange"> ${vote_average.toFixed(
          2
        )} </span> / <span class="rating--grey"> ${vote_count}</span>
      </p>
    </li>
    <li class="movie-data-list__item">
      <p class="movie-data-list__item-description">Popularity</p>
      <p class="movie-data-list__item-value">${popularity}</p>
    </li>
    <li class="movie-data-list__item">
      <p class="movie-data-list__item-description">Original Title</p>
      <p class="movie-data-list__item-value uppercase">
        ${original_title}
      </p>
    </li>
    <li class="movie-data-list__item">
      <p class="movie-data-list__item-description">Genre</p>
      <p class="movie-data-list__item-value">${genres
        .map(g => g.name)
        .join(', ')}</p>
    </li>
  </ul>
  <h3 class="modal-card__about uppercase">About</h3>
  <p class="modal-card__about-description">${overview}</p>
  <div class="button-list">
    <button
      class="button button--orange uppercase"
      type="button"
      [data-add-to-watched]
    >
      Add to watched
    </button>
    <button
      class="button button--transparent-black uppercase"
      type="button"
      [data-add-to-queue]
    >
      Add to queue
    </button>
  </div>
</div>
`;
  modalCardMovieInfo.innerHTML = markupModal;
};
