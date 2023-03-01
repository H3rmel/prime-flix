import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Layout from "@/components/Layout/Index";

import { getMovies } from "@/services/movies";

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
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
              }}
              className="relative w-64 h-96 bg-cover bg-no-repeat rounded-2xl shadow-md duration-300 bottom-0 hover:shadow-blue-500 hover:shadow-[0_0_0_4px] hover:bottom-1"
              key={movie.id}
            >
              <div className="card-fade">
                <h3 className="mb-1">{movie.title}</h3>
                <Link to={`/movie/${movie.id}`} className="link bg-blue-500 hover:bg-blue-600 small w-min">
                  Acessar
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Index;
