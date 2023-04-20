const toggleSwitch = document.querySelector(
  '.dark-mode-switch input[type="checkbox"]'
);
let isDarkModeOn = false;

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    isDarkModeOn = true;
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    isDarkModeOn = false;
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

const Switch = document.querySelector('input[type="checkbox"]');
const body = document.querySelector('body');

function switchTheme(event) {
  if (event.target.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }    
}

Switch.addEventListener('change', switchTheme, false);

export { darkModeSwitch };



// ==== js ==== prototyp 

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//   // dark mode
// }

// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
//   const newColorScheme = e.matches ? "dark" : "light";
// });