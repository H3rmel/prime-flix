import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Layout from "../../components/Layout/Index";

import getMovies from "../../services/getMovies";

const Index = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies(setMovies, setLoading);
  }, []);

  return (
    <Layout pageTitle="Home">
      {loading ? (
        "Carregando..."
      ) : (
        <div className="my-4 grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <article
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
              }}
              className="card"
              key={movie.id}
            >
              <div className="card-body">
                <h3 className="mb-1">{movie.title}</h3>
                <Link to={`/movie/${movie.id}`} className="btn btn-sm w-min">
                  Acessar
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Index;
