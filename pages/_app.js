import Layout from "@components/Layout";
import "@styles/globals.css";
import { Component } from "react";

// function Application({ Component, pageProps }) {
//     return <Component {...pageProps} />;
// }

function Application({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Application;
