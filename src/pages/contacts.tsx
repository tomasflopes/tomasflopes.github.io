import { NextPage } from "next";
import Head from "next/head";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const contacts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tomás Lopes. Contacts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container minH="91vh" minW={"100vw"}>
        <Navbar />
      </Container>
      <Footer />
    </>
  );
};

export default contacts;
