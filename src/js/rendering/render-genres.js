// ------ GENRES RENDERING ------

// ---- setting fetched array of ids genres to local storage ------
export const saveMovieGenresToStorage = d => {
  const movieGenresIds = d.genres;
  localStorage.setItem('movieGenresIdsArray', JSON.stringify(movieGenresIds));
};

// ---- rendering array of ids genres from local storage to JS ------
const getMovieGenresFromStorage = () => {
  const movieGenresIdsJSON = localStorage.getItem('movieGenresIdsArray');
  const parsedGenresIDS = JSON.parse(movieGenresIdsJSON);
  return parsedGenresIDS;
};

// ----- genres and ids array rendered from local storage -----
const genresIdArray = getMovieGenresFromStorage();
console.log(`to jest genresIdArray`);
console.log(genresIdArray);

// ----- searching movie genre via genre id ------------
const compareGenresId = id => {
  const genreName = genresIdArray.filter(e => e.id === id);
  return genreName[0].name;
};

// ----- rendering ids into genres ----------
export const renderGenresToGallery = genreIds => {
  const markupIds = genreIds.slice(0, 3).map(id => compareGenresId(id));
  return markupIds.join(', ');
};
