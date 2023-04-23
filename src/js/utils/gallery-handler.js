export const galleryHandler = (evt) => {
    const singleMovieCard = evt.target.parentElement.parentElement;
    if (!singleMovieCard.classList.contains('movie-card')) return;
    toggleModal();
    getMovieById(singleMovieCard.dataset.movieId);
    onShowModal();
}