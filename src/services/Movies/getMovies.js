import api from "./api";

const getMovies = async (setData, setLoading) => {
  const response = await api.get("/movie/now_playing", {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      language: "pt-BR",
      page: 1,
    },
  });

  setData(response.data.results), setLoading(false);
  return;
};

export default getMovies;
