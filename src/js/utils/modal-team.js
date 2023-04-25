const linkModalTeam = document.querySelector('.footer__wrapper-link');
const modalTeam = document.querySelector('.backdrop');
const modalClose = document.querySelector('.team_close');

const closeModalTeamByBackdrop = e => {
  if (e.target.classList.contains('backdrop')) {
    modalTeam.classList.toggle('is-hidden');
    modalTeam.removeEventListener('keydown', keyPress);
    modalTeam.removeEventListener('click', closeModalTeamByBackdrop);
    modalClose.removeEventListener('click', closeModalTeamByIcon);
  }
};

const closeModalTeamByIcon = e => {
  modalTeam.classList.toggle('is-hidden');
  modalTeam.removeEventListener('keydown', keyPress);
  modalTeam.removeEventListener('click', closeModalTeamByBackdrop);
  modalClose.removeEventListener('click', closeModalTeamByIcon);
};

const keyPress = e => {
  if (e.key === 'Escape') {
    modalTeam.classList.toggle('is-hidden');
    modalClose.removeEventListener('click', closeModalTeamByIcon);
    modalTeam.removeEventListener('click', closeModalTeamByBackdrop);
    modalTeam.removeEventListener('keydown', keyPress);
  }
};

export const addELToTeamModal = () => {linkModalTeam.addEventListener('click', e => {
  e.preventDefault();
onShowTeamModal();
});
}

const onShowTeamModal = () => {
  modalTeam.classList.toggle('is-hidden');
  modalTeam.addEventListener('keydown', keyPress);
  modalTeam.addEventListener('click', closeModalTeamByBackdrop);
  modalClose.addEventListener('click', closeModalTeamByIcon);
};
