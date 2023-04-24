
const linkModalTeam = document.querySelector('.footer__wrapper-link');
const modalTeam = document.querySelector('.backdrop');
const modalClose = document.querySelector('.team_close');

linkModalTeam.addEventListener('click', (e) => {
  e.preventDefault();
  modalTeam.classList.remove('is-hidden');
});

modalTeam.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('backdrop') ||
    e.target.classList.contains('team_close')
  ) {
    modalTeam.classList.add('is-hidden');
  }
});

const keyPress = (e) => {
  if (e.key === 'Escape') {
    modalTeam.classList.add('is-hidden');
  }
};

modalTeam.addEventListener('keydown', keyPress);