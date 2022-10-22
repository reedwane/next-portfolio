import About from "Components/About/About";
import Skills from "Components/Skills/Skills";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ridwan Gboyega Abdulkareem | Home</title>
      </Head>

      <About />
      <Skills />
    </>
  );
};

export default Home;
