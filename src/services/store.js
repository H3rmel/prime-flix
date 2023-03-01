const isMovieInFavorites = (favorites, movie, callback) => {
  if (favorites.some((favorite) => favorite.id === movie.id)) callback(true);
  else callback(false);
};

const getFavorites = () => {
  const myList = localStorage.getItem("@primeflix");
  return JSON.parse(myList) || [];
};

export { isMovieInFavorites, getFavorites };

