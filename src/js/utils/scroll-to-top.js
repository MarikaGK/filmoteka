const SCROLL_UP_BUTTON_DOM = document.querySelector('.scroll-up-arrow');

export const showButtonOnScroll = () => {
  if (window.scrollY > 800) {
    SCROLL_UP_BUTTON_DOM.classList.remove('is-hidden');
  } else {
    SCROLL_UP_BUTTON_DOM.classList.add('is-hidden');
  }
};

export const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth', });
};