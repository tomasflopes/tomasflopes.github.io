import { Flex, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>404. Not Found</title>
      </Head>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={"column"}
        h="100vh"
        w="100vw"
      >
        <Heading as="h1" fontSize={"7xl"} borderBottom="1px" mb="2">
          404
        </Heading>
        <Text fontSize="2xl">Oops... This page does not exist!</Text>
      </Flex>
    </>
  );
};

export default NotFound;
