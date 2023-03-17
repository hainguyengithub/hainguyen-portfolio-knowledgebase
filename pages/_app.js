import Layout from "@components/Layout";
import "@styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Application({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Application;
