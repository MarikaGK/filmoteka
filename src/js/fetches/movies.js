

// ------ nessesary for work ------ 
const apiKey = "11f568ee70218bec08ad7368f7bb3250";
const apiUrl = "https://api.themoviedb.org/3/search/movie";
const popularUrl = "https://api.themoviedb.org/3/movie/popular"
const genresUrl = "https://api.themoviedb.org/3/genre/movie/list"
let page = 1;


//  1.    ------ Function - fetch - Popular movies ------ 
export const getPopular = async (page = 1) => {
    try{
      const response = await fetch(popularUrl + `?api_key=` + apiKey + '&page=' + page)
      const data = await response.json();
      console.log('Poniżej przykladowy console.log dla popularnych')
      console.log(data)
// TO DO function here!
    }catch(error){
      console.error(error);
    }
  }

//  2.    ------ function fetch - Movie checker - by title ------ 
// movieTitle is a .value from header input
export const getMovie = async (movieTitle) => {
    try {
      const response = await fetch(apiUrl + `?api_key=` + apiKey + '&query=' + movieTitle + '&page=' + page);
      const data = await response.json();
      console.log('Poniżej przykladowy console.log dla filmu "Rambo"')
      console.log(data)
//TO DO function here!
    } catch (error) {
      console.error(error);
    }}


// 3.
//?api_key=<<api_key>>&language=en-US
export const getGenres = async () =>{
  try {
    const response = await fetch(genresUrl + `?api_key=` + apiKey);
    const data = await response.json();
    console.log('Poniżej przykladowy console.log dla listy gatunków')
    console.log(data)
//TO DO function here!
  } catch (error) {
    console.error(error);
  }}
