export const renderMovies = movies => {
  const markupMovies = movies
    .map(movie => {
      return `
    <img src="${movie.url}" alt="${movie.id}" loading="lazy" />
    <div class="movie-card">
      <p class="movie-title">
        <b>${movie.title}</b> 
      </p>
      <p class="movie-genre">
        <b>${movie.genres}</b> 
      </p>
      <p class="movie-year">
        <b>${movie.year}</b> 
      </p>
    </div>
  </a>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markupMovies);
};

// DOM.movieGallery.addEventListener(
//     "click",
//     async (event) => {
//       const movieId = event.target.dataset.movieId;
//       const movie = await fetchSingleRocket(movieId);

//       const movieImage = rocket.flickr_images
//         .map((image) => {
//           return `<img src="${image}" />`;
//         })
//         .join("");

//       rocketDetailsContainer.innerHTML = `
//       <h2>${rocket.rocket_name}</h2>
//       <p>Height: ${Object.entries(rocket.height)}</p>
//       <p>Mass: ${Object.entries(rocket.mass)}</p>
//       <p>First Flight: ${rocket.first_flight}</p>
//       <p>${rocket.description}</p>
//       <div class="rocket-images">${rocketImages}</div>
//       `;
//     }
//   );
