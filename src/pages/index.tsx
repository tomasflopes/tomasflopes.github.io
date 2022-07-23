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
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <Head>
        <title>Tomás Lopes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container height="100vh" width={"100%"}>
        <Navbar />
        <Grid
          templateAreas={{
            md: `'text image'`,
            base: `'image' 
                                                      'text'`,
          }}
          w="80%"
          h="100%"
          pb="24"
          px={12}
          alignItems="center"
          justifyContent={"center"}
        >
          <GridItem area={"image"}>
            <Image
              src={"http://github.com/tomas050302.png"}
              alt="Tomás Lopes"
              borderRadius="full"
              h="auto"
              w={{ base: "100%", md: "auto" }}
            />
          </GridItem>
          <GridItem area={"text"}>
            <Heading
              lineHeight="tall"
              size={"3xl"}
              mr={4}
              zIndex={1}
              textAlign={{ md: "right", base: "center" }}
            >
              <Highlight
                query={["fullstack", "Porto"]}
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: isDark ? "teal.100" : "teal.400",
                  color: isDark ? "black" : "white",
                }}
              >
                I'm a fullstack developer based in Porto, Portugal.
              </Highlight>
            </Heading>
          </GridItem>
        </Grid>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
