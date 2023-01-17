import type { NextPage } from "next";

import { Container, Flex } from "@chakra-ui/react";
import Head from "next/head";
import AnimatedHeader from "../components/AnimatedHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tomás Lopes. Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container minH="91vh" w={"100vw"}>
        <Navbar />
        <Flex>
          <AnimatedHeader text="Projects" />
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default projects;
