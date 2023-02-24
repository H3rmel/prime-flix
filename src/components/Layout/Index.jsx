import { useEffect } from "react";

import Header from "../Header/Index";

const Layout = ({ children, pageTitle }) => {
  useEffect(() => {
    document.title = `${pageTitle} | Prime Flix`;
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {children}
      </div>
    </>
  );
};

export default Layout;
