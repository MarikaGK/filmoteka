// ------ GENRES RENDERING ------

// ---- setting fetched array of ids genres to local storage ------
export const setMovieGenresToStorage = d => {
  const movieGenresIds = d.genres;
  localStorage.setItem('movieGenresIdsArray', JSON.stringify(movieGenresIds));
};

// ---- rendering array of ids genres from local storage to JS ------
const renderMovieGenres = () => {
  const movieGenresIdsJSON = localStorage.getItem('movieGenresIdsArray');
  const parsedGenresIDS = JSON.parse(movieGenresIdsJSON);
  return parsedGenresIDS;
};

// ----- genres and ids array rendered from local storage -----
const genresIdArray = renderMovieGenres();
console.log(`to jest genresIdArray`);
console.log(genresIdArray);

// ----- searching movie genre via genre id ------------
const compareId = id => {
  const genreName = genresIdArray.filter(e => e.id === id);
  return genreName[0].name;
};

// ----- rendering ids into genres ----------
export const renderGenreIds = genreIds => {
  const murkupIds = genreIds.slice(0, 3).map(id => compareId(id));
  return murkupIds.join(', ');
};
