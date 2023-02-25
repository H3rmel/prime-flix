import { toast } from "react-toastify";
import { getFavorites, isMovieInFavorites, setFavorites } from "./store";

const saveMovie = (movie) => {
  const favorites = getFavorites();

  isMovieInFavorites(favorites, movie, (condition) => {
    if (condition) toast.error("Este filme já esta na sua lista!");
    else addMovieToFavorites(movie, favorites, "Filme salvo com sucesso!");
  });
};

const removeMovie = (movie, setData) => {
  const favorites = getFavorites();

  isMovieInFavorites(favorites, movie, (condition) => {
    if (!condition) toast.error("Este filme não esta na sua lista!");
    else removeMovieFromFavorites(favorites, movie, setData);
  });
};

const removeMovieFromFavorites = (favorites, movie, setData) => {
  const filteredFavorites = favorites.filter(
    (favorite) => favorite.id !== movie.id
  );
  setFavorites(filteredFavorites, "Filme removido com sucesso!");
  setData(getFavorites);
};

const addMovieToFavorites = (movie, favorites, message) => {
  const newFavorites = [...favorites, movie];
  setFavorites(newFavorites, message);
};

export { saveMovie, removeMovie, getFavorites };

