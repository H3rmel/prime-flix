import api from "./api";

import { apiParams } from "@/constants/params";

export const getAllMovies = async (setData, setLoading, page) => {
  try {
    const response = await api.get("/movie/now_playing", {
      params: {
        ...apiParams,
        page: page,
      },
    });

    setData(response.data.results), setLoading(false);
  } catch (error) {
    throw error;
  }
};

export const getMovie = async (id, setData, setLoading) => {
  try {
    const response = await api.get(`/movie/${id}`, {
      params: {
        ...apiParams,
      },
    });

    setData(response.data), setLoading(false);
  } catch (error) {
    throw error;
  }
};
