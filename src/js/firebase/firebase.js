import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, child, update, onValue } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// jeszcze nie wiem czy będzie potrzebne

// const firebase = require('firebase');
// const firebaseui = require('firebaseui');
// Initialize the FirebaseUI Widget using Firebase.
// const ui = new firebaseui.auth.AuthUI(firebase.auth());

const firebaseConfig = {
  apiKey: "AIzaSyC3WI9OwBz4EKjWjZ6_OIwGrF26sBcAXyE",
  authDomain: "filmoteka-js-team-project.firebaseapp.com",
  databaseURL: "https://filmoteka-js-team-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "filmoteka-js-team-project",
  storageBucket: "filmoteka-js-team-project.appspot.com",
  messagingSenderId: "191570493203",
  appId: "1:191570493203:web:cb4db6ae8cb26ef95fe4e6",
  measurementId: "G-F8RYGXVXSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
//jeszcze nie wiem czy będzie potrzebne

//AUTHENTICATION

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});







//REALTIME DATABASE 

export function pushToWatched(id) {
  id = 67890966;
  const movieId = id;
  console.log(movieId);
  const newPostKey = push(child(ref(db), 'watched')).key;
  const updates = {};
  updates['/watched/' + newPostKey] = movieId;
  update(ref(db), updates);
  return getWatchedMoviesIds()
}

export function pushToQueue(id) {
  id = 23323232;
  const movieId = id;
  console.log(movieId);
  const newPostKey = push(child(ref(db), 'queue')).key;
  const updates = {};
  updates['/queue/' + newPostKey] = movieId;
  return update(ref(db), updates);
}

export function getWatchedMoviesIds() {
  const watchedRef = ref(db, 'watched');
  const watchedMoviesIds = [];

  onValue(watchedRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const movieId = childSnapshot.val();
      watchedMoviesIds.push(movieId);
    });
  });
  console.log(watchedMoviesIds);
  return watchedMoviesIds;
}

export function getQueueMoviesIds() {
  const queueRef = ref(db, 'queue');
  const queueMoviesIds = [];

  onValue(queueRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const movieId = childSnapshot.val();
      queueMoviesIds.push(movieId);
    });
  });
  console.log(queueMoviesIds);
  return queueMoviesIds;
};
