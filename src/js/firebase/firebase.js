import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  push,
  child,
  update,
  onValue,
} from 'firebase/database';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';

import { getIdsArrayFromStore, saveIdsArrayToStore } from '../utils/store';

const firebaseConfig = {
  apiKey: 'AIzaSyC3WI9OwBz4EKjWjZ6_OIwGrF26sBcAXyE',
  authDomain: 'filmoteka-js-team-project.firebaseapp.com',
  databaseURL:
    'https://filmoteka-js-team-project-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'filmoteka-js-team-project',
  storageBucket: 'filmoteka-js-team-project.appspot.com',
  messagingSenderId: '191570493203',
  appId: '1:191570493203:web:cb4db6ae8cb26ef95fe4e6',
  measurementId: 'G-F8RYGXVXSJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);

//AUTHENTICATION BY GOOGLE
const signInBtn = document.querySelector('#sign-in');
const signOutBtn = document.querySelector('#sign-out');
const navFirst = document.querySelector('.header-nav__first');
const navSecond = document.querySelector('.header-nav__second');
const watchedBtn = document.querySelector('[data-add-to-watched]');
const queueBtn = document.querySelector('[data-add-to-queue]');
const modalBtnsDiv = document.querySelector('.modal-btns-div');

export const saveIdArraysFromFirebaseToStore = () => {
  window.addEventListener('load', () => {
    getWatchedMoviesIds();
    getQueueMoviesIds();
  });
};

if (localStorage.getItem('user')) {
  const user = JSON.parse(localStorage.getItem('user'));
  navFirst.classList.add('header__none');
  navSecond.classList.remove('header__none');
  modalBtnsDiv.classList.remove('display-none-for-unsigned-user');
  signInBtn.removeEventListener('click', () => {
    // signOut(auth);
    signInWithPopup(auth, provider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        localStorage.setItem('user', JSON.stringify(user));
        // saveIdArraysFromFirebaseToStore();
        navFirst.classList.add('header__none');
        navSecond.classList.remove('header__none');
        // console.log(user.uid)
        // console.log(`To jest wysłana do lS przy logowaniu tablica watched ${getIdsArrayFromStore('watched')}`);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  });
}

signInBtn.addEventListener('click', () => {
  // signOut(auth);
  signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      localStorage.setItem('user', JSON.stringify(user));
      navFirst.classList.add('header__none');
      navSecond.classList.remove('header__none');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
});

signOutBtn.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      localStorage.removeItem('user');
      navFirst.classList.remove('header__none');
      navSecond.classList.add('header__none');
      window.location.href = '/index';
    })
    .catch(error => {
      console.log('Error Sign Out');
    });
});

//AUTHENTICATION BY EMAIL AND PASSWORD

// const emailInput = document.querySelector("#email");
// const passwordInput = document.querySelector("#password");
// const signUpBtn = document.querySelector("#sign-up");

// let email;
// let password;

// signUpBtn.addEventListener("submit", (e) => {
//   e.preventDefault();
//   email = emailInput.value;
//   password = passwordInput.value;
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       console.log(email);
//       console.log(password);
//       console.log("Nowy User:", user);
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log('Błąd:', errorCode);
//       console.log('Błąd:', errorMessage);
//     });
// })

//REALTIME DATABASE

export function pushToWatched(array) {
  const moviesArray = array;
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user.uid;
  const updates = {};
  updates['/users/' + userId + '/watched/'] = moviesArray;
  update(ref(db), updates);
}

export function pushToQueue(array) {
  const moviesArray = array;
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user.uid;
  const updates = {};
  updates['/users/' + userId + '/queue/'] = moviesArray;
  update(ref(db), updates);
}

export function getWatchedMoviesIds() {
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user.uid;
  const watchedRef = ref(db, '/users/' + userId + '/watched/');
  const watchedMoviesIds = [];

  onValue(watchedRef, snapshot => {
    snapshot.forEach(childSnapshot => {
      const movieId = childSnapshot.val();
      watchedMoviesIds.push(movieId);
    });
    console.log(user.uid);
    console.log(`To jest watchedMoviesIds z firebase`);
    console.log(watchedMoviesIds);
    saveIdsArrayToStore(watchedMoviesIds, 'watched');
  });
}

export function getQueueMoviesIds() {
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user.uid;
  const queueRef = ref(db, '/users/' + userId + '/queue/');
  const queueMoviesIds = [];

  onValue(queueRef, snapshot => {
    snapshot.forEach(childSnapshot => {
      const movieId = childSnapshot.val();
      queueMoviesIds.push(movieId);
    });
    console.log(`To jest queueMoviesIds z firebase`);
    console.log(queueMoviesIds);
    saveIdsArrayToStore(queueMoviesIds, 'queue');
  });
}

// funkcja zwraca -1, jeśli id nie ma w tablicy
const checkTheIdInWatched = id => {
  const arrayOfWatchedIds = getIdsArrayFromStore('watched');
  return arrayOfWatchedIds.indexOf(id);
};
const checkTheIdInQueue = id => {
  const arrayOfQueueIds = getIdsArrayFromStore('queue');
  return arrayOfQueueIds.indexOf(id);
};

export const ifWatchedBtnClassHasToBeToggled = id => {
  if (checkTheIdInWatched(id) === -1) {
    console.log('Nie ma id w watched');
    return watchedBtn.classList.remove('button--orange');
  }
  console.log('Jest id w watched');
  watchedBtn.classList.add('button--orange');
  watchedBtn.innerHTML = 'In watched';
};
export const ifQueueBtnClassHasToBeToggled = id => {
  if (checkTheIdInQueue(id) === -1) {
    console.log('Nie ma id w queue');
    return watchedBtn.classList.remove('button--orange');
  }
  console.log('Jest id w queue');
  queueBtn.classList.add('button--orange');
  queueBtn.innerHTML = 'In queue';
};

/////do zmiany
export const manageIdInWatched = id => {
  if (checkTheIdInWatched(id) === -1) {
    return pushToStore(id, 'watched');
  }
  removeFromStore(id, 'watched');
};
export const manageIdInQueue = id => {
  if (checkTheIdInQueue(id) === -1) {
    return pushToStore(id, 'queue');
  }
  removeFromStore(id, 'queue');
};
