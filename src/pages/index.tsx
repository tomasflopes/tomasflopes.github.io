import { Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tomás Lopes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container height={"container.xl"} width={"100%"}>
        <Navbar />
        <Container>
          <Text>
            I{"'"}m a software developer based in Porto, Portugal.
          </Text>
        </Container>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
