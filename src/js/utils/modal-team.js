import { showButtonOnScroll } from './scroll-to-top.js';

const linkModalTeam = document.querySelector('.footer__wrapper-link');
const modalTeamBackdrop = document.querySelector('.backdrop');
const modalTeam = document.querySelector('.team');
const modalClose = document.querySelector('.team_close');
const SCROLL_UP_BUTTON_DOM = document.querySelector('.scroll-up-arrow');

const closeModalTeamByBackdrop = e => {
  if (e.target === modalTeamBackdrop) {
    modalTeam.classList.toggle('none');
    modalTeamBackdrop.classList.toggle('is-hidden');
    document.removeEventListener('keydown', keyPress);
    modalTeamBackdrop.removeEventListener('click', closeModalTeamByBackdrop);
    modalClose.removeEventListener('click', closeModalTeamByIcon);
    window.addEventListener('scroll', showButtonOnScroll);
  }
};

const closeModalTeamByIcon = e => {
  modalTeam.classList.toggle('none');
  modalTeamBackdrop.classList.toggle('is-hidden');
  document.removeEventListener('keydown', keyPress);
  modalTeamBackdrop.removeEventListener('click', closeModalTeamByBackdrop);
  modalClose.removeEventListener('click', closeModalTeamByIcon);
  window.addEventListener('scroll', showButtonOnScroll);
};

const keyPress = e => {
  if (e.code === 'Escape') {
    modalTeam.classList.toggle('none');
    modalTeamBackdrop.classList.toggle('is-hidden');
    modalClose.removeEventListener('click', closeModalTeamByIcon);
    modalTeamBackdrop.removeEventListener('click', closeModalTeamByBackdrop);
    document.removeEventListener('keydown', keyPress);
    window.addEventListener('scroll', showButtonOnScroll);
  }
};

export const addELToTeamModal = () => {
  linkModalTeam.addEventListener('click', e => {
    e.preventDefault();
    onShowTeamModal();
  });
};

const onShowTeamModal = () => {
  modalTeam.classList.toggle('none');
  modalTeamBackdrop.classList.toggle('is-hidden');
  document.addEventListener('keydown', keyPress);
  modalTeamBackdrop.addEventListener('click', closeModalTeamByBackdrop);
  modalClose.addEventListener('click', closeModalTeamByIcon);
  window.removeEventListener('scroll', showButtonOnScroll);
  if (!SCROLL_UP_BUTTON_DOM.classList.contain('is-hidden')) {
    SCROLL_UP_BUTTON_DOM.classList.add('is-hidden');
  }
};
