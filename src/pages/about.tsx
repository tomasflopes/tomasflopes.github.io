import type { NextPage } from "next";

import {
  Container,
  Flex,
  Heading,
  keyframes,
} from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const typewriter = keyframes`  
    from{width: 0;}
    to{width: 5em;}
    `;

const blinkTextCursor = keyframes`  
  from{border-right-color: rgba(255,255,255,.75);}
to{border-right-color: transparent;}
  `;

const about: NextPage = () => {
  const typewriterAnimation = `${typewriter} .8s steps(44) 1s 1 normal both, ${blinkTextCursor} .5s steps(22) 5 normal forwards`;

  return (
    <>
      <Head>
        <title>Tomás Lopes. About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container minH="91vh" minW={"100vw"}>
        <Navbar />
        <Flex>
          <Heading
            as="h1"
            fontSize={"4xl"}
            my="2"
            animation={{ md: typewriterAnimation }}
            overflow="hidden"
            borderRight={{ md: "2px" }}
            whiteSpace="nowrap"
            w="100%"
            textAlign={{ base: "center", md: "left" }}
            borderColor="rgba(255,255,255,.75)"
          >
            About me
          </Heading>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default about;
