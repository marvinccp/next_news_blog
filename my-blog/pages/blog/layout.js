import React from "react";
import Head from "next/head";
import Nav from "../../components/Nav";

const Layout = ({ children, title = "Next Blog" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Nav />
      {children}
    </>
  );
};

export default Layout;
