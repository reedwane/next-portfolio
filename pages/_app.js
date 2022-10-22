import Layout from "Components/Layout/Layout";
import Head from "next/head";
import "styles/globals.scss";
import "styles/utilities/utilities.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ridwan Gboyega Abdulkareem</title>
        <meta
          name="description"
          content="Ridwan is a web developer passionate about making impact and creating solutions through technology. He is focused on developing products that provide outstanding experiences and are accessible to users."
        />

        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
