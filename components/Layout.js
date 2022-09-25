import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

function Layout(props) {
  return (
    <>
      {/* The MetaHead/Head should be on each page/post file. */}
      {/* <MetaHead/> */}

      {/* The main navigation bar. */}
      <Nav />
      {props.children}

      {/* The footer. */}
      <Footer />
    </>
  );
}

export default Layout;
