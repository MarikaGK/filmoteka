const modal = document.querySelector('[data-modal]');
const watchedBtn = document.querySelector('[data-add-to-watched]');
const queueBtn = document.querySelector('[data-add-to-queue]');
const CLOSE_BTN = document.querySelector('.close-btn');

export const toggleModal = () => {
  modal.classList.toggle('is-hidden');
};

const addEventListenersToBtns = () => {
  watchedBtn.addEventListener('click');
  queueBtn.addEventListener('click');
};

const removeEventListenersFromBtns = () => {
  watchedBtn.removeEventListener('click' );
  queueBtn.removeEventListener('click');
};

export const onShowModal = () => {
  CLOSE_BTN.addEventListener('click', onHideModal);
  // addEventListenersToBtns;
};

export const onHideModal = () => {
  toggleModal();
  // removeEventListenersFromBtns;
};