import type { NextPage } from "next";
import Head from "next/head";

import { Container, Heading } from "@chakra-ui/react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const about: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tomás Lopes. About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container minH="93vh" minW={"100%"}>
        <Navbar />
        <Heading as="h1" fontSize={"4xl"} borderBottom="1px" my="2">
          About me
        </Heading>
      </Container>
      <Footer />
    </>
  );
};

export default about;
