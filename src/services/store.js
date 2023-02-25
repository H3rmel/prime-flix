import { toast } from "react-toastify";

const saveMovie = (movie) => {
  const favorites = getFavorites();

  hasMovie(favorites, movie, (condition) => {
    if (condition) toast.error("Este filme já esta na sua lista!");
    else pushToFavorites(movie, favorites, "Filme salvo com sucesso!");
  });
};

const removeMovie = (movie, setData) => {
  const favorites = getFavorites();

  hasMovie(favorites, movie, (condition) => {
    if (!condition) toast.error("Este filme não esta na sua lista!");
    else removeOfFavorites(favorites, movie, setData);
  });
};

const removeOfFavorites = (favorites, movie, setData) => {
  const filteredFavorites = favorites.filter(
    (favorite) => favorite.id !== movie.id
  );
  setFavorites(filteredFavorites, "Filme removido com sucesso!");
  setData(getFavorites);
};

const pushToFavorites = (movie, favorites, message) => {
  favorites.push(movie);
  setFavorites(favorites, message);
};

const setFavorites = (savedMovies, message) => {
  localStorage.setItem("@primeflix", JSON.stringify(savedMovies));
  toast.success(message);
};

const getFavorites = () => {
  const myList = localStorage.getItem("@primeflix");
  return JSON.parse(myList) || [];
};

const hasMovie = (favorites, movie, callback) => {
  if (favorites.some((favorite) => favorite.id === movie.id)) callback(true);
  else callback(false);
};

export { saveMovie, removeMovie, getFavorites };

