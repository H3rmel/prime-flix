import { getFavorites, isMovieInFavorites } from "./store";

const saveMovie = (movie) => {
  const favorites = getFavorites();

  isMovieInFavorites(favorites, movie, (condition) => {
    if (condition) throw "Este filme já esta na sua lista!";
    else addMovieToFavorites(movie, favorites);
  });
};

const removeMovie = (movie, setData) => {
  const favorites = getFavorites();

  isMovieInFavorites(favorites, movie, (condition) => {
    if (!condition) throw "Este filme não esta na sua lista!";
    else removeMovieFromFavorites(favorites, movie, setData);
  });
};

const removeMovieFromFavorites = (favorites, movie, setData) => {
  const filteredFavorites = favorites.filter(
    (favorite) => favorite.id !== movie.id
  );
  localStorage.setItem("@primeflix", JSON.stringify(filteredFavorites));
  setData(getFavorites);
};

const addMovieToFavorites = (movie, favorites) => {
  const newFavorites = [...favorites, movie];
  localStorage.setItem("@primeflix", JSON.stringify(newFavorites));
};

export { saveMovie, removeMovie, getFavorites };

