import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, child, update, onValue } from 'firebase/database';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

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
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);

//AUTHENTICATION BY GOOGLE
const signInBtn = document.querySelector("#sign-in");
const signOutBtn = document.querySelector("#sign-out");
const navFirst = document.querySelector(".header-nav__first");
const navSecond = document.querySelector(".header-nav__second");

if (localStorage.getItem("user")) {
  const user = JSON.parse(localStorage.getItem("user"));
  navFirst.classList.add("header__none");
  navSecond.classList.remove("header__none");
}

signInBtn.addEventListener("click", () => {
  // signOut(auth);
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      localStorage.setItem("user", JSON.stringify(user));
      navFirst.classList.add("header__none");
      navSecond.classList.remove("header__none");
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
});

signOutBtn.addEventListener("click", () => {
  signOut(auth).then(() => {
    localStorage.removeItem("user");
    navFirst.classList.remove("header__none");
    navSecond.classList.add("header__none");
  }).catch((error) => {
    console.log("Error Sign Out")
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

export function pushToWatched(id) {
  id = 67890966;
  const movieId = id;
  // const user = JSON.parse(localStorage.getItem("user"));
  const newPostKey = push(child(ref(db), 'watched')).key;
  const updates = {};
  updates['/watched/' + newPostKey] = movieId;
  update(ref(db), updates);
  return getWatchedMoviesIds()
}

export function pushToQueue(id) {
  id = 23323232;
  const movieId = id;
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
  return queueMoviesIds;
};
