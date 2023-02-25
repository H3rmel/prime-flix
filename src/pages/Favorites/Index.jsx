import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Layout from "@/components/Layout/Index";

import { getFavorites, removeMovie } from "@/services/favorites";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setFavorites(getFavorites());
    setLoading(false);
  }, []);

  return (
    <Layout pageTitle="Favoritos">
      {loading ? (
        "Carregando..."
      ) : (
        <>
          <h1 className="text-center">Meus filmes</h1>
          <hr className="my-4 border-slate-300" />

          {favorites.length === 0 ? (
            <p className="text-xl font-medium text-red-500 text-center">
              Você não possui nenhum filme favorito! ☹️
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {favorites.map((favorite) => (
                <article
                  key={favorite.id}
                  className="card-simple flex flex-col gap-2 md:flex-row justify-between"
                >
                  <h2>{favorite.title}</h2>
                  <div className="flex flex-col md:flex-row gap-2">
                    <Link
                      to={`/movie/${favorite.id}`}
                      className="block text-center underline py-2 px-4 font-medium text-blue-500 duration-300 hover:text-blue-600"
                    >
                      Ver detalhes
                    </Link>
                    <button
                      className="btn bg-red-500 hover:bg-red-600"
                      onClick={() => removeMovie(favorite, setFavorites)}
                    >
                      Excluir
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </>
      )}
    </Layout>
  );
};

export default Favorites;
