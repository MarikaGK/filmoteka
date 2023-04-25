
const linkModalTeam = document.querySelector('.footer__wrapper-link');
const modalTeam = document.querySelector('.backdrop');
const modalClose = document.querySelector('.team_close');

const closeModalTeamByBackdrop = (e) => {
  if (
    e.target.classList.contains('backdrop')
  ) {
    modalTeam.classList.add('is-hidden');
    modalTeam.removeEventListener('keydown', keyPress);
    modalTeam.removeEventListener('click', closeModalTeamByBackdrop);
    modalClose.removeEventListener('click', closeModalTeamByIcon);
  }
};

const closeModalTeamByIcon = (e) => {
  modalTeam.classList.add('is-hidden');
  modalTeam.removeEventListener('keydown', keyPress);
  modalTeam.removeEventListener('click', closeModalTeamByBackdrop);
  modalClose.removeEventListener('click', closeModalTeamByIcon);
}

const keyPress = (e) => {
  if (e.key === 'Escape') {
    modalTeam.classList.add('is-hidden');
    modalClose.removeEventListener('click', closeModalTeamByIcon);
    modalTeam.removeEventListener('click', closeModalTeamByBackdrop);
    modalTeam.removeEventListener('keydown', keyPress);
  }
};

linkModalTeam.addEventListener('click', (e) => {
  e.preventDefault();
  modalTeam.classList.remove('is-hidden');
});

modalTeam.addEventListener('keydown', keyPress);
modalTeam.addEventListener('click', closeModalTeamByBackdrop);
modalClose.addEventListener('click', closeModalTeamByIcon);
