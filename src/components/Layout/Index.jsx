import { useEffect } from "react";

import Header from "../Header/Index";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Layout = ({ children, pageTitle }) => {
  useEffect(() => {
    document.title = `${pageTitle} | Prime Flix`;
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto my-4">{children}</div>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Layout;
