import type { NextPage } from "next";
import Head from "next/head";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const about: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tomás Lopes. About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container minH="91vh" minW={"100vw"}>
        <Navbar />
      </Container>
      <Footer />
    </>
  );
};

export default about;
