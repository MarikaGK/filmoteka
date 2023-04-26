import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  // push,
  set,
  get,
  // child,
  remove,
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

import localStorage from '../utils/localStorage';
import { getMoviesByArrayOfIds } from '../fetching/fetch-movies';
// import { renderMovies } from '../rendering/render-movies';

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
const watchedBtn = document.querySelector('.add-to-watched');
const queueBtn = document.querySelector('.add-to-queue');
const modalBtnsDiv = document.querySelector('.modal-btns-div');

export const saveIdArraysFromFirebaseToStore = () => {
  window.addEventListener('load', () => {
    getWatchedMoviesIds();
    getQueueMoviesIds();
  });
};

if (localStorage.load('user')) {
  // const user = localStorage.load('user');
  navFirst.classList.toggle('header__none');
  navSecond.classList.toggle('header__none');
  modalBtnsDiv.classList.toggle('display-none-for-unsigned-user');
  signInBtn.removeEventListener('click', () => {
    // signOut(auth);
    signInWithPopup(auth, provider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        localStorage.save('user', user);
        // saveIdArraysFromFirebaseToStore();
        navFirst.classList.toggle('header__none');
        navSecond.classList.toggle('header__none');
        saveIdArraysFromFirebaseToStore();
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
      localStorage.save('user', user);
      navFirst.classList.toggle('header__none');
      navSecond.classList.toggle('header__none');
      saveIdArraysFromFirebaseToStore();
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
      localStorage.remove('user');
      localStorage.remove('watched');
      localStorage.remove('queue');
      navFirst.classList.toggle('header__none');
      navSecond.classList.toggle('header__none');
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

// export function updateWatchedInFirebase(id) {
//   const movieId = id;
//   console.log(`Zupdate'owana watched do firebase ${id}`);
//   console.log(id);
//   const user = localStorage.load('user');
//   const userId = user.uid;
//   const updates = {};
//   updates['/users/' + userId + '/watched/'] = movieId;
//   update(ref(db), updates);
// }

// export function updateQueueInFirebase(id) {
//   const movieId = id;
//   console.log(`Zupdate'owana queue do firebase ${id}`);
//   const user = localStorage.load('user');
//   const userId = user.uid;
//   const updates = {};
//   updates['/users/' + userId + '/queue/'] = movieId;
//   update(ref(db), updates);
// }

// export function removeFromWatchedFirebase(id) {
//   const movieId = id;
//   console.log(`Zupdate'owana queue do firebase ${id}`);
//   const user = localStorage.load('user');
//   const userId = user.uid;
//   const updates = {};
//   updates['/users/' + userId + '/watched/'] = movieId;
//   remove(ref(db), updates);
// }
// export function removeFromQueueFirebase(id) {
//   const movieId = id;
//   console.log(`Zupdate'owana queue do firebase ${id}`);
//   const user = localStorage.load('user');
//   const userId = user.uid;
//   const updates = {};
//   updates['/users/' + userId + '/queue/'] = movieId;
//   remove(ref(db), updates);
// }

export function getWatchedMoviesIds() {
  const user = localStorage.load('user');
  const userId = user.uid;
  const watchedRef = ref(db, '/users/' + userId + '/watched/');
  const watchedMoviesIds = [];

  onValue(watchedRef, snapshot => {
    snapshot.forEach(childSnapshot => {
      const movieId = childSnapshot.val();
      watchedMoviesIds.push(movieId);
    });
    // console.log(user.uid);
    // console.log(`To jest watchedMoviesIds z firebase`);
    // console.log(watchedMoviesIds);
    localStorage.save('watched', watchedMoviesIds);
  });
}

export function getQueueMoviesIds() {
  const user = localStorage.load('user');
  const userId = user.uid;
  const queueRef = ref(db, '/users/' + userId + '/queue/');
  const queueMoviesIds = [];

  onValue(queueRef, snapshot => {
    snapshot.forEach(childSnapshot => {
      const movieId = childSnapshot.val();
      queueMoviesIds.push(movieId);
    });
    localStorage.save('queue', queueMoviesIds);
  });
}

// funkcja zwraca -1, jeśli id nie ma w tablicy
// export const checkTheIdInWatched = id => {
//   const arrayOfWatchedIds = localStorage.load('watched');
//   if (arrayOfWatchedIds.length === 0) {
//     return -1;
//   }
//   return arrayOfWatchedIds.indexOf(Number(id));
// };
// export const checkTheIdInQueue = id => {
//   const arrayOfQueueIds = localStorage.load('queue');
//   if (arrayOfQueueIds.length === 0) {
//     return -1;
//   }
//   return arrayOfQueueIds.indexOf(Number(id));
// };

export const changeWatched = e => {
  const movieInfo = e.target.parentElement.parentElement;
  const id = Number(movieInfo.dataset.movieId);
  const user = localStorage.load('user');
  const userId = user.uid;
  const watchedRef = ref(db, '/users/' + userId + '/watched/');
  get(watchedRef)
    .then(snapshot => {
      const watchedArray = snapshot.val() || [];
      if (!watchedArray.includes(id)) {
        watchedArray.push(id);
        set(watchedRef, watchedArray);
        if (!watchedBtn.classList.contains('button--orange')) {
          watchedBtn.classList.add('button--orange');
        }
        watchedBtn.innerHTML = 'In watched';
        localStorage.save('watched', watchedArray);
        // if (localStorage.load('actualLibrary') == 'watched') {
        //   getMoviesByArrayOfIds(watchedArray);
        // }
      } else {
        const updatedArray = watchedArray.filter(e => e != id);
        set(watchedRef, updatedArray);
        watchedBtn.innerHTML = 'Add to watched';
        if (watchedBtn.classList.contains('button--orange')) {
          watchedBtn.classList.remove('button--orange');
        }
        localStorage.save('watched', updatedArray);
        // if (localStorage.load('actualLibrary') === 'watched') {
        //   getMoviesByArrayOfIds(updatedArray);
        // }
      }
    })
    .catch(console.error());
};
export const changeQueue = e => {
  const movieInfo = e.target.parentElement.parentElement;
  const id = Number(movieInfo.dataset.movieId);
  const user = localStorage.load('user');
  const userId = user.uid;
  const queueRef = ref(db, '/users/' + userId + '/queue/');
  get(queueRef)
    .then(snapshot => {
      const queueArray = snapshot.val() || [];
      if (!queueArray.includes(id)) {
        queueArray.push(id);
        set(queueRef, queueArray);
        queueBtn.innerHTML = 'In queue';
        queueBtn.classList.toggle('button--orange');
        localStorage.save('queue', queueArray);
        // if (localStorage.load('actualLibrary') === 'queue') {
        //   getMoviesByArrayOfIds(queueArray);
        // }
      } else {
        const updatedArray = queueArray.filter(e => e != id);
        set(queueRef, updatedArray);
        queueBtn.classList.toggle('button--orange');
        queueBtn.innerHTML = 'Add to queue';
        localStorage.save('queue', updatedArray);
        // if (localStorage.load('actualLibrary') === 'queue') {
        //   getMoviesByArrayOfIds(updatedArray);
        // }
      }
    })
    .catch(console.error());
};

// watchedBtn.addEventListener('click', changeWatched);

export const ifWatchedBtnClassHasToBeToggled = id => {
  const user = localStorage.load('user');
  const userId = user.uid;
  const watchedRef = ref(db, '/users/' + userId + '/watched/');
  get(watchedRef).then(snapshot => {
    const watchedArray = snapshot.val() || [];
    if (!watchedArray.includes(id)) {
      if (watchedBtn.classList.contains('button--orange')) {
        watchedBtn.classList.remove('button--orange');
      }
      return (watchedBtn.innerHTML = 'Add to watched');
    }
    if (!watchedBtn.classList.contains('button--orange')) {
      watchedBtn.classList.add('button--orange');
    }
    watchedBtn.innerHTML = 'In watched';
  });
};

export const ifQueueBtnClassHasToBeToggled = id => {
  const user = localStorage.load('user');
  const userId = user.uid;
  const queueRef = ref(db, '/users/' + userId + '/queue/');
  get(queueRef).then(snapshot => {
    const queueArray = snapshot.val() || [];
    if (!queueArray.includes(id)) {
      if (queueBtn.classList.contains('button--orange')) {
        queueBtn.classList.remove('button--orange');
      }
      return (queueBtn.innerHTML = 'Add to queue');
    }
    if (!queueBtn.classList.contains('button--orange')) {
      queueBtn.classList.add('button--orange');
    }
    queueBtn.innerHTML = 'In queue';
    // watchedBtn.classList.toggle('button--orange');
  });
};

// export const manageIdInWatched = id => {
//   if (checkTheIdInWatched(id) === -1) {
//     console.log(`to jest managedIdInWatched id ${id}`);
//     console.log(typeof id);
//     const watchedArray = localStorage.load('watched');
//     const updatedWatchedArray = watchedArray.push(id);
//     updateWatchedInFirebase(updatedWatchedArray);
//   } else {
//     removeFromWatchedFirebase(id);
//   }
// };
// export const manageIdInQueue = id => {
//   console.log(`To jest id przekazane do manage ${id}`);
//   if (checkTheIdInQueue(id) === -1) {
//     updateQueueInFirebase(id);
//   } else {
//     removeFromQueueFirebase(id);
//   }
// };
