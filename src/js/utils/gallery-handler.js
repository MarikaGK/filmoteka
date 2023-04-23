import { onShowModal, toggleModal } from "./modal-movie-details";
import { getMovieById } from "../fetching/fetch-movies";
import { onShowModal } from "./modal-movie-details";

export const galleryHandler = (evt) => {
    const singleMovieCard = evt.target.parentElement.parentElement;
    if (!singleMovieCard.classList.contains('movie-card')) return;
    toggleModal();
    getMovieById(singleMovieCard.dataset.movieId);
    onShowModal();
}