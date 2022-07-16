import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Constants from "../styles/Constants";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={Constants.bgColor[useColorModeValue("light", "dark")]}
      color={Constants.color[useColorModeValue("light", "dark")]}
      position="absolute"
      bottom={4}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>
          © {new Date().getUTCFullYear()} Tomás Lopes. All rights
          reserved
        </Text>
        <Stack direction={"row"} spacing={4}>
          <SocialButton
            label={"GitHub"}
            href={"http://www.github.com/tomas050302"}
          >
            <FaGithub />
          </SocialButton>
          <SocialButton
            label={"LinkedIn"}
            href={
              "https://www.linkedin.com/in/tom%C3%A1s-lopes-021907172/"
            }
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton
            label={"Twitter"}
            href={"https://twitter.com/tomaslopes_dev"}
          >
            <FaTwitter />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
