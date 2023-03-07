import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { MainLayout } from "@/layouts/MainLayout";

import { saveMovie } from "@/services/favorites";
import { getMovie } from "@/services/movies";

import { toast } from "react-toastify";

export const Movie = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      getMovie(id, setMovie, setLoading);
    } catch (error) {
      toast.error(error);
      navigate("/", { replace: true });
    }
  }, []);

  const handleSaveMovie = () => {
    try {
      saveMovie(movie);
      toast.success("Filme salvo com sucesso!");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <MainLayout pageTitle="Filme">
      {loading ? (
        "Carregando..."
      ) : (
        <>
          <article
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            }}
            className="relative w-full h-192 rounded-2xl shadow-md bg-no-repeat bg-cover bg-center"
          >
            <div className="card-fade">
              <div className="flex flex-col justify-between items-start md:items-end md:flex-row">
                <h2 className="mb-1">{movie.title}</h2>
                <span className="bg-blue-500 px-2 py-1 rounded-lg w-fit">
                  Nota: {movie.vote_average.toFixed(1)}
                </span>
              </div>
            </div>
          </article>
          <article className="bg-slate-900 text-slate-200 p-4 rounded-xl shadow-md my-4">
            <h2 className="mb-1">Resumo</h2>
            <p className="text-lg">{movie.overview}</p>
            <hr className="my-2" />
            <p>
              <strong>Gêneros:</strong>{" "}
              {movie.genres.map((genre) => `${genre.name} `)}
            </p>
          </article>
          <div className="flex gap-4 justify-center md:justify-start">
            <button
              className="link bg-blue-500 hover:bg-blue-600"
              onClick={handleSaveMovie}
            >
              Salvar
            </button>
            <a
              href={`https://youtube.com/results?search_query=${movie.title} Trailer`}
              rel="external"
              target="_blank"
              className="link bg-blue-500 hover:bg-blue-600"
            >
              Trailer
            </a>
          </div>
        </>
      )}
    </MainLayout>
  );
};
