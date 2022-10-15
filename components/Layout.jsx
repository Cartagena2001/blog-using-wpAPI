import Head from "next/head";
import React, { children } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({
  children,
  title = "Mi Blog",
  description = "Este es mi blog personal ❤️",
}) => {
  return (
    <div className="max-w-[80rem] mx-auto px-5">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
