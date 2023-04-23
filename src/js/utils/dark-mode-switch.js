const CHECKBOX_DARK_MODE_SWITCH_DOM = document.querySelector('input[type="checkbox"]');
let isDarkModeOn = false;
CHECKBOX_DARK_MODE_SWITCH_DOM.checked = isDarkModeOn;

// function switchTheme(e) {
//   if (e.target.checked) {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     isDarkModeOn = true;
//   } else {
//     document.documentElement.setAttribute('data-theme', 'light');
//     isDarkModeOn = false;
//   }
// }

// CHECKBOX_DARK_MODE_SWITCH_DOM.addEventListener('change', switchTheme, false);

// const checkboxSwitch = document.querySelector('input[type="checkbox"]');
const BODY_DOM = document.querySelector('body');

function switchTheme(event) {
  if (event.target.checked) {
    BODY_DOM.classList.add('dark-mode');
    document.documentElement.setAttribute('data-theme', 'dark');
    isDarkModeOn = true;
  } else {
    BODY_DOM.classList.remove('dark-mode');
    document.documentElement.setAttribute('data-theme', 'light');
    isDarkModeOn = false;
  }
}

CHECKBOX_DARK_MODE_SWITCH_DOM.addEventListener('change', switchTheme, isDarkModeOn);

export { darkModeSwitch };



// ==== js ==== prototyp 

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//   // dark mode
// }

// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
//   const newColorScheme = e.matches ? "dark" : "light";
// });