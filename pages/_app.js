import "../styles/globals.css";
import Layout from "../components/Layout";
import { GlobalProvider } from "../context/GlobalData";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </Layout>
  );
}

export default MyApp;
