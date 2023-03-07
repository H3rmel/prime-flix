import { useEffect } from "react";

import Header from "./Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const MainLayout = ({ children, pageTitle }) => {
  useEffect(() => {
    document.title = `${pageTitle} | Prime Flix`;
  }, []);

  return (
    <>
      <Header />
      <div className="w-11/12 sm:container mx-auto my-4">{children}</div>
      <ToastContainer autoClose={3000} theme="dark" />
    </>
  );
};
