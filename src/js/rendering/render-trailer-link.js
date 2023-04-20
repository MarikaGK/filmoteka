const trailerLink = document.querySelector('.modal-card__trailer');

export const renderTrailerLink = ytLink => {
  const markupTrailer = `<a class="modal-card__yt-link link" href="${ytLink}" target="_blank"><div class="yt-logo"></div><p>Watch the trailer</p></a>`;
  trailerLink.innerHTML = markupTrailer;
};
