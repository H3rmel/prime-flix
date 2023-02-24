import api from "./api";

// Get all Movies according to page
const getMovies = async (setData, setLoading, page) => {
  const response = await api.get("/movie/now_playing", {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      language: "pt-BR",
      page: page,
    },
  });

  setData(response.data.results), setLoading(false);
  return;
};

// Get specific Movie with Id
const getMovie = async (id, setData, setLoading, navigate) => {
  const response = await api
    .get(`/movie/${id}`, {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        language: "pt-BR",
      },
    })
    .then((response) => {
      setData(response.data);
      setLoading(false);
    })
    .catch(() => {
      console.log("Filme não encontrado!");
      navigate("/", { replace: true });
    });
  return;
};

export { getMovie, getMovies };

