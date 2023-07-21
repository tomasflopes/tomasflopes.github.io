import type { NextPage } from "next";
import Head from "next/head";

import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Image,
  useColorMode,
} from "@chakra-ui/react";

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
      <Flex
        w="100%"
        h="91vh"
        overflowX={"hidden"}
        alignItems="center"
        justifyContent="center"
        flexDirection={"column"}
      >
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
              src={"http://github.com/tomasflopes.png"}
              alt="Tomás Lopes"
              borderRadius="full"
              h="auto"
              w={{ base: "60%", lg: "auto" }}
              maxW="90%"
              minW="60%"
              mx="auto"
              my={4}
            />
          </GridItem>
          <GridItem area={"text"}>
            <Heading
              lineHeight={{ base: "taller", sm: "tall" }}
              size={{ base: "xl", md: "3xl" }}
              pr={{ md: 6 }}
              pt={{ base: 4 }}
              zIndex={1}
              w={"100%"}
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
      </Flex>
      <Footer />
    </>
  );
};

export default Home;
