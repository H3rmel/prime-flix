const saveMovie = (movie) => {
  const savedMovies = getSavedMoviesList();

  hasMovie(savedMovies, movie, (condition) => {
    if (condition) alert("Este filme já esta na sua lista!");
    else {
      savedMovies.push(movie);
      setSavedMoviesList(savedMovies, "Filme salvo com sucesso!");
    }
  });
};

const removeMovie = (movie, setData) => {
  const savedMovies = getSavedMoviesList();

  hasMovie(savedMovies, movie, (condition) => {
    if (!condition) alert("Este filme não esta na sua lista!");
    else {
      let filteredSavedMovies = savedMovies.filter(
        (savedMovie) => savedMovie.id !== movie.id
      );
      setSavedMoviesList(filteredSavedMovies, "Filme removido com sucesso!");
      setData(getSavedMoviesList);
    }
  });
};

//#region Utils

const setSavedMoviesList = (savedMovies, message) => {
  localStorage.setItem("@primeflix", JSON.stringify(savedMovies));
  alert(message);
};

const getSavedMoviesList = () => {
  const myList = localStorage.getItem("@primeflix");
  return JSON.parse(myList) || [];
};

const hasMovie = (moviesList, movie, callback) => {
  if (moviesList.some((savedMovie) => savedMovie.id == movie.id))
    callback(true);
  else callback(false);
};

//#endregion

export {
  saveMovie,
  removeMovie,
  setSavedMoviesList,
  getSavedMoviesList,
  hasMovie,
};

