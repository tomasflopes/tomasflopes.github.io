import type { NextPage } from "next";
import Head from "next/head";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageBreadcrumb from "../components/PageBreadcrumb";

const about: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tomás Lopes. About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container minH="91vh" minW={"100vw"}>
        <Navbar />
        <PageBreadcrumb currentPage="About me" />
      </Container>
      <Footer />
    </>
  );
};

export default about;
