import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  set,
  get,
  onValue,
} from 'firebase/database';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';

import localStorage from '../utils/localStorage';

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
      modalBtnsDiv.classList.remove('display-none-for-unsigned-user');
      saveIdArraysFromFirebaseToStore();
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
      modalBtnsDiv.classList.add('display-none-for-unsigned-user');
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
      window.location.href = 'https://marikagk.github.io/filmoteka-js-team-project/index';
    })
    .catch(error => {
      console.log('Error Sign Out');
    });
});

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
      } else {
        const updatedArray = watchedArray.filter(e => e != id);
        set(watchedRef, updatedArray);
        watchedBtn.innerHTML = 'Add to watched';
        if (watchedBtn.classList.contains('button--orange')) {
          watchedBtn.classList.remove('button--orange');
        }
        localStorage.save('watched', updatedArray);
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
      } else {
        const updatedArray = queueArray.filter(e => e != id);
        set(queueRef, updatedArray);
        queueBtn.classList.toggle('button--orange');
        queueBtn.innerHTML = 'Add to queue';
        localStorage.save('queue', updatedArray);
      }
    })
    .catch(console.error());
};

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
  });
};