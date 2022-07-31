import { Container, Heading } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Projects: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tomás Lopes. Projects</title>
      </Head>
      <Container minH="93vh" minW="100vw">
        <Navbar />
        <Heading>Projects</Heading>
        <Container width="container.xl">
          <Container
            border="1px solid"
            borderColor={"gray.100"}
            borderRadius="lg"
          >
            <Heading>Project name</Heading>
            <p>Project description</p>
            <span>
              Technologies
              <br />
              <span>
                <a href="https://www.typescriptlang.org/">
                  TypeScript
                </a>
              </span>
              <span>
                <a href="https://www.typescriptlang.org/">React</a>
              </span>
              <span>
                <a href="https://www.typescriptlang.org/">
                  Chakra UI
                </a>
              </span>
            </span>
            <a href="#">Repo</a>
          </Container>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Projects;
