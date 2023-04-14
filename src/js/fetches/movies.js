

// ------ nessesary for work ------ 
const apiKey = "?api_key=11f568ee70218bec08ad7368f7bb3250";
const apiUrl = "https://api.themoviedb.org/3/search/movie";
const popularUrl = "https://api.themoviedb.org/3/movie/popular"
let page = 1;


//  1.    ------ Function - fetch - Popular movies ------ 
export const checkPopular = async (page = 1) => {
    try{
      const response = await fetch(popularUrl+apiKey+'&page='+page)
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
export const checkMovie = async (movieTitle) => {
    try {
      const response = await fetch(apiUrl+apiKey+'&query='+ movieTitle+'&page='+ page);
      const data = await response.json();
      console.log('Poniżej przykladowy console.log dla filmu "Rambo"')
      console.log(data)
//TO DO function here!
    } catch (error) {
      console.error(error);
    }}