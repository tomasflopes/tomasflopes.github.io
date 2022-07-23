import type { NextPage } from "next";
import Head from "next/head";

import {
  Grid,
  GridItem,
  Heading,
  Highlight,
  Image,
  useColorMode,
} from "@chakra-ui/react";

import { Container } from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <Head>
        <title>Tomás Lopes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container minHeight="93vh" width={"100%"}>
        <Navbar />
        <Grid
          templateAreas={{
            lg: `'text image'`,
            base: `'image' 
                                                      'text'`,
          }}
          w="80%"
          h="100%"
          px={{ md: 12 }}
          pb={{ md: 24 }}
          my="auto"
          alignItems="center"
          justifyContent="center"
        >
          <GridItem area={"image"}>
            <Image
              src={"http://github.com/tomas050302.png"}
              alt="Tomás Lopes"
              borderRadius="full"
              h="auto"
              w={{ base: "60%", lg: "auto" }}
              mx="auto"
              my={4}
            />
          </GridItem>
          <GridItem area={"text"}>
            <Heading
              lineHeight={{ base: "taller", lg: "tall" }}
              size={{ base: "2xl", md: "3xl" }}
              mr={4}
              zIndex={1}
              textAlign={{ lg: "right", base: "center" }}
            >
              <Highlight
                query={["fullstack", "Porto"]}
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  boxShadow: "lg",
                  bg: isDark ? "teal.100" : "teal.400",
                  color: isDark ? "black" : "white",
                }}
              >
                I'm a fullstack developer based in Porto, Portugal.
              </Highlight>
            </Heading>
          </GridItem>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
