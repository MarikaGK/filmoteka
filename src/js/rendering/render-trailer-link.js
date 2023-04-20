import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

const trailerLink = document.querySelector('.modal-card__trailer');

export const renderTrailerLink = ytLink => {
  const markupTrailer = `<a class="modal-card__yt-link link" href="${ytLink}" data-fancybox><div class="yt-logo"></div><p>Watch the trailer</p></a>`;
  trailerLink.innerHTML = markupTrailer;

  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  });
};