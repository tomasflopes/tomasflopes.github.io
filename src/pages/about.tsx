import type { NextPage } from "next";
import Head from "next/head";

import { Flex } from "@chakra-ui/react";

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
        <Flex>
          <PageBreadcrumb currentPage="About me" />
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default about;
