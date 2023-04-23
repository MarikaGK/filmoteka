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

const BODY_DOM = document.querySelector('body');
const MOVIE_CARD_ALL_DOM = document.querySelectorAll('.movie-card');
const DARK_MODE_MOON_ICON_DOM = document.querySelector(
  '.dark-mode-switch__moon-icon'
);
const DARK_MODE_SUN_ICON_DOM = document.querySelector(
  '.dark-mode-switch__sun-icon'
);

export const setDarkOrNormalModeOnPageLoadFromLocalStorageState = () => {
  if (IS_DARK_MODE_ON === true) {
    BODY_DOM.classList.add('dark-mode');
    document.documentElement.setAttribute('data-theme', 'dark');
    if (!DARK_MODE_SUN_ICON_DOM.classList.contains('display-none')) {
      DARK_MODE_SUN_ICON_DOM.classList.add('display-none');
    }
    if (DARK_MODE_MOON_ICON_DOM.classList.contains('display-none')) {
      DARK_MODE_MOON_ICON_DOM.classList.remove('display-none');
    }
  } else {
    if (!DARK_MODE_MOON_ICON_DOM.classList.contains('display-none')) {
      DARK_MODE_MOON_ICON_DOM.classList.add('display-none');
    }
    if (DARK_MODE_SUN_ICON_DOM.classList.contains('display-none')) {
      DARK_MODE_SUN_ICON_DOM.classList.remove('display-none');
    }
  }
};

export const switchThemeOnDarkModeSwitchEvent = event => {
  if (event.target.checked) {
    BODY_DOM.classList.add('dark-mode');
    document.documentElement.setAttribute('data-theme', 'dark');
    IS_DARK_MODE_ON = true;
    if (!DARK_MODE_SUN_ICON_DOM.classList.contains('display-none')) {
      DARK_MODE_SUN_ICON_DOM.classList.add('display-none');
    }
    if (DARK_MODE_MOON_ICON_DOM.classList.contains('display-none')) {
      DARK_MODE_MOON_ICON_DOM.classList.remove('display-none');
    }
    setStateOfDarkModeToLocalStorage(IS_DARK_MODE_ON);
  } else {
    BODY_DOM.classList.remove('dark-mode');
    document.documentElement.setAttribute('data-theme', 'light');
    IS_DARK_MODE_ON = false;
    if (!DARK_MODE_MOON_ICON_DOM.classList.contains('display-none')) {
      DARK_MODE_MOON_ICON_DOM.classList.add('display-none');
    }
    if (DARK_MODE_SUN_ICON_DOM.classList.contains('display-none')) {
      DARK_MODE_SUN_ICON_DOM.classList.remove('display-none');
    }
    setStateOfDarkModeToLocalStorage(IS_DARK_MODE_ON);
  }
};

CHECKBOX_DARK_MODE_SWITCH_DOM.addEventListener(
  'change',
  switchThemeOnDarkModeSwitchEvent,
  IS_DARK_MODE_ON
);
