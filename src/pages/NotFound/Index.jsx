import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-screen bg-red-500 flex flex-col justify-center items-center gap-4">
      <h2 className="text-2xl text-white font-mono font-semibold">404 - Página não encontrada</h2>
      <div className="bg-white p-6 rounded-xl shadow-md text-center">
        <Link
          to="/"
          className="px-4 py-2 border-solid border-2 border-red-500 rounded-xl duration-300 hover:bg-red-500 hover:text-white"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
