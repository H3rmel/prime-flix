import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import Layout from "../../components/Layout/Index";

import getMovie from "../../services/Movies/getMovie";

const Movie = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMovie(id, setMovie, setLoading, navigate);
  }, []);

  return (
    <Layout pageTitle="Filme">
      {loading ? (
        "Carregando..."
      ) : (
        <section className="my-4">
          <article
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            }}
            className="card-movie"
          >
            <div className="card-body">
              <div className="flex flex-col justify-between items-start md:items-end md:flex-row">
                <h2 className="mb-1">{movie.title}</h2>
                <span className="bg-blue-500 px-2 py-1 rounded-lg w-fit">
                  Nota: {movie.vote_average.toFixed(1)}
                </span>
              </div>
            </div>
          </article>
          <article className="bg-white p-4 my-4 rounded-xl shadow-md">
            <h2 className="mb-1">Resumo</h2>
            <p className="text-lg">{movie.overview}</p>
            <hr className="my-2" />
            <p>
              <strong>Gêneros:</strong>{" "}
              {movie.genres.map((genre) => `${genre.name} `)}
            </p>
          </article>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="btn">Salvar</button>
            <a
              href={`https://youtube.com/results?search_query=${movie.title} Trailer`}
              rel="external"
              target="_blank"
              className="btn"
            >
              Trailer
            </a>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Movie;
