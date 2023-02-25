import { toast } from "react-toastify";

const isMovieInFavorites = (favorites, movie, callback) => {
  if (favorites.some((favorite) => favorite.id === movie.id)) callback(true);
  else callback(false);
};

const setFavorites = (savedMovies, message) => {
  localStorage.setItem("@primeflix", JSON.stringify(savedMovies));
  toast.success(message);
};

const getFavorites = () => {
  const myList = localStorage.getItem("@primeflix");
  return JSON.parse(myList) || [];
};

export { isMovieInFavorites, setFavorites, getFavorites };

