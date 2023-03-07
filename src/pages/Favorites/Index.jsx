import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { MainLayout } from "@/layouts/MainLayout";

import { getFavorites, removeMovie } from "@/services/favorites";

import { toast } from "react-toastify";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setFavorites(getFavorites());
    setLoading(false);
  }, []);

  const handleRemoveMovie = (favorite) => {
    try {
      removeMovie(favorite, setFavorites);
      toast.success("Filme removido com sucesso!");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <MainLayout pageTitle="Favoritos">
      {loading ? (
        "Carregando..."
      ) : (
        <>
          <h1 className="text-center text-slate-200">Meus filmes</h1>
          <hr className="my-4 border-slate-700" />

          {favorites.length === 0 ? (
            <p className="text-xl font-medium text-red-500 text-center">
              Você não possui nenhum filme favorito! ☹️
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {favorites.map((favorite) => (
                <article
                  key={favorite.id}
                  className="bg-slate-900 text-slate-200 p-4 rounded-xl shadow-md my-4 flex flex-col gap-2 md:flex-row justify-between"
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
                      className=" bg-red-500 hover:bg-red-600"
                      onClick={() => {
                        handleRemoveMovie(favorite);
                      }}
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
    </MainLayout>
  );
};
