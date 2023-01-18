import { Flex, FlexProps, useColorMode } from "@chakra-ui/react";
import Constants from "../styles/Constants";

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={Constants.bgColor[colorMode]}
      color={Constants.color[colorMode]}
      minW="100vw"
      w="100%"
      {...props}
    />
  );
};
