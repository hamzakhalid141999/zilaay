import React, { useState, useEffect } from "react";
import classes from "./layout.module.css";
import Head from "next/head";
import Navbar from "../navbar";
import Footer from "../footer";
import { useRouter } from "next/router";
// import { useWindowSize } from "../../utils";

function Layout({ children }) {
  const router = useRouter();
  // const { width } = useWindowSize();
  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    if (router.pathname) {
      const page = router.pathname.split("/");
      setCurrentPage(page[1]);
    }
  }, [router.pathname]);

  return (
    <div className={classes.container}>
      <>
        {currentPage === "" ? (
          <>
            <div className={classes.main}>{children}</div>
            <Footer />
          </>
        ) : currentPage === "dashboard" ? (
          <>
            <div className={classes.main}>{children}</div>
          </>
        ) : currentPage === "buy" || currentPage === "login" ? (
          <>
            <Navbar />
            <div className={classes.main}>
              {children}
            </div>
          </>
        ) : (
          <>
            <Navbar />
            <div className={classes.main}>
              {children}
            </div>
            <Footer />
          </>
        )}
      </>
    </div>
  );
}

export default Layout;
