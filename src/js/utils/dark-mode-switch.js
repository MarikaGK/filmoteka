const CHECKBOX_DARK_MODE_SWITCH_DOM = document.querySelector(
  'input[type="checkbox"]'
);

// ---- get DARK MODE from local storage to JS ------
export const getStateOfDarkModeFromLocalStorage = () => {
  if (!localStorage.getItem('IS_DARK_MODE_ON_STORED')) {
    localStorage.setItem('IS_DARK_MODE_ON_STORED', JSON.stringify(false));
    return false;
  } else {
    const isDarkModeOnStoredJSON = localStorage.getItem(
      'IS_DARK_MODE_ON_STORED'
    );
    const parsedIsDarkModeOnStored = JSON.parse(isDarkModeOnStoredJSON);
    return parsedIsDarkModeOnStored;
  }
};

let IS_DARK_MODE_ON = getStateOfDarkModeFromLocalStorage();
CHECKBOX_DARK_MODE_SWITCH_DOM.checked = IS_DARK_MODE_ON;

// ---- get state of DARK MODE to local storage ------
export const setStateOfDarkModeToLocalStorage = IS_DARK_MODE_ON => {
  if (localStorage.getItem('IS_DARK_MODE_ON_STORED') !== IS_DARK_MODE_ON) {
    localStorage.setItem(
      'IS_DARK_MODE_ON_STORED',
      JSON.stringify(IS_DARK_MODE_ON)
    );
  }
  return;
};

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

export const setDarkOrNormalModeOnPageLoadFromLocalStorageState = () => {
  if (IS_DARK_MODE_ON === true) {
    BODY_DOM.classList.add('dark-mode');
    document.documentElement.setAttribute('data-theme', 'dark');
  } else return;
};

export const switchThemeOnDarkModeSwitchEvent = event => {
  if (event.target.checked) {
    BODY_DOM.classList.add('dark-mode');
    document.documentElement.setAttribute('data-theme', 'dark');
    IS_DARK_MODE_ON = true;
    setStateOfDarkModeToLocalStorage(IS_DARK_MODE_ON);
  } else {
    BODY_DOM.classList.remove('dark-mode');
    document.documentElement.setAttribute('data-theme', 'light');
    IS_DARK_MODE_ON = false;
    setStateOfDarkModeToLocalStorage(IS_DARK_MODE_ON);
  }
};

CHECKBOX_DARK_MODE_SWITCH_DOM.addEventListener(
  'change',
  switchThemeOnDarkModeSwitchEvent,
  IS_DARK_MODE_ON
);

// ==== js ==== prototyp

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//   // dark mode
// }

// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
//   const newColorScheme = e.matches ? "dark" : "light";
// });
