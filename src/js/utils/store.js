// import { updateWatchedInFirebase } from '../firebase/firebase';
import localStorage from './localStorage';

export const actualLibraryUpdateToStore = actualLibrary => {
  localStorage.save('actualLibrary', actualLibrary);
};

export const actualLibraryFromStore = () => {
  return localStorage.load('actualLibrary');
};

// export const saveIdsArrayToStore = (nameOfArray, data) => {
//   console.log(`data wchodząca do local storage przy push`);
//   console.log(data);
//   console.log(`nameofarray wchodząca do local storage przy push`);
//   console.log(nameOfArray);
//   console.log(typeof nameOfArray);
//   localStorage.save(nameOfArray, data);
// };

// export const getIdsArrayFromStore = nameOfArray => {
//   return localStorage.load(nameOfArray);
// };

// export const pushToStore = (id, nameOfArray) => {
//   const idsArrayFromStore = localStorage.load(nameOfArray);
//   console.log(`to jest idsArrayFromStore`);
//   console.log(idsArrayFromStore);
//   console.log(typeof idsArrayFromStore);
//   const updatedIdsArray = idsArrayFromStore.push(id);
//   console.log(`to jest update idsArrayFromStore`);
//   console.log(idsArrayFromStore);
//   console.log(typeof idsArrayFromStore);
//   updateWatchedInFirebase(updatedIdsArray);
//   localStorage.save(nameOfArray, updatedIdsArray);
//   const fromstore = localStorage.load(nameOfArray);
//   console.log(`to jest update fromstore`);
//   console.log(fromstore);
//   console.log(typeof fromstore);
// };

// export const removeFromStore = (id, nameOfArray) => {
//   const idsArrayFromStore = localStorage.load(nameOfArray);
//   const updatedIdsArray = idsArrayFromStore.filter(e => e != id);
//   localStorage.save(updatedIdsArray, nameOfArray);
// };
