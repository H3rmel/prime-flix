import { useEffect } from "react";
export const ErrorLayout = ({ children, pageTitle }) => {
  useEffect(() => {
    document.title = `${pageTitle} | Prime Flix`;
  }, []);

  return (
    <div className="w-full h-screen bg-red-500 flex flex-col justify-center items-center gap-4">
      <h2 className="text-2xl text-white font-mono font-semibold">
        {children}
      </h2>
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
