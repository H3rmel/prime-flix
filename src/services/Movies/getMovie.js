import api from "../api";

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

export default getMovie;
