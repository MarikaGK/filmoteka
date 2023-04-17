// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, child, update, onValue } from 'firebase/database';
// import { getAnalytics } from "firebase/analytics";
// jeszcze nie wiem czy będzie potrzebne

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
// const analytics = getAnalytics(app);
//jeszcze nie wiem czy będzie potrzebne

// 111111111111111


// const firebaseRef = app.database().ref('Watched');
// const firebaseRef = ref(getDatabase(app), 'watched');

// sendMovieToFirebase = e => {
//     const movieId = e.target.parentNode.dataset.movieId;
//     console.log(`Dodano film o id ${movieId} do listy obejrzanych`);
//     // firebaseRef.push(movieToSend);
//     push(firebaseRef, movieToSend);
//     console.log("succes!!!!!");
// };

// 2222222222222222
export function pushToWatched(id, title) {
  const postData = {
    id: 4,
    title: "syrenka",
  };

  const newPostKey = push(child(ref(db), 'watched')).key;

  const updates = {};
  updates['/watched/' + newPostKey] = postData;
  // updates['/user-posts/' + id + '/' + newPostKey] = postData;

  return update(ref(db), updates);
}

export function pushToQueue(id, title) {
  const postData = {
    id: 12,
    title: "mario",
  };

  const newPostKey = push(child(ref(db), 'queue')).key;

  const updates = {};
  updates['/queue/' + newPostKey] = postData;
  // updates['/user-posts/' + id + '/' + newPostKey] = postData;

  return update(ref(db), updates);
}
