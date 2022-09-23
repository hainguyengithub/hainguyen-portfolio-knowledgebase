import React from "react";
import Footer from "./Footer";
import MetaHead from "./MetaHead";
import Nav from "./Nav";

function Layout(props) {
  return (
    <>
      <MetaHead
        keywords={["knowledge", "portfolio"]}
        description="hello world"
        title="Next.js Starter!"
      />
      <Nav />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
