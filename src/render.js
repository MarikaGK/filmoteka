const API_KEY = 'b118f38ec77100db6763b4cc83604589';
const gallery = document.querySelector('.gallery');

// const fetchGenres = async () => {
//   const genreArray = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
//   try {
//     const response = await fetch(genreArray);
//     const genres = await response.json();
//     return genres;
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchGenres();

// Ustalic genres:
// poiterowac po main genre array z serwera
// sprawdzic czy id ten sam co w danym movie
//let genreIds = "";
//genreIds+= genres z array

export const renderMovies = movies => {
  const markupMovies = movies
    .map(movie => {
      return `
    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" height=574 alt="${movie.original_title}" data-movie-id="${movie.id}"/>
    <div class="movie-card">
      <p class="movie-title">
        <b>${movie.original_title}</b>
      </p>
      <p class="movie-genre">
        <b>${movie.genre_ids}</b>
      </p>
      <p class="movie-year">
        <b>${movie.release_date}</b>
      </p>
    </div>
  </a>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markupMovies);
};

const fetchTrendingMovies = async () => {
  const movieGallery = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
  try {
    const response = await fetch(movieGallery);
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.log(error);
  }
};

const startRenderingTrendingMovies = async () => {
  const trendingMovies = await fetchTrendingMovies();
  console.log(trendingMovies);
  renderMovies(trendingMovies.results);
};

startRenderingTrendingMovies();
