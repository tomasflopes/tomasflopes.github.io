import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Constants from "../styles/Constants";
import { DarkModeSwitch } from "./DarkModeSwitch";

interface NavbarProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavbarProps) => (
  <Link
    p={2}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    fontSize={{ base: "4xl", md: "md" }}
    href={href}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const options = [
    { name: "About me", url: "/about" },
    { name: "Projects", url: "/projects" },
    { name: "Contact me", url: "/contact-me" },
  ];

  return (
    <Box px={4} w="100%">
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <HStack spacing={8} alignItems={"center"}>
          <Heading as="h1" size="lg" noOfLines={1}>
            Tomás Lopes
          </Heading>
          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
          >
            {options.map((option) => (
              <NavLink key={option.url} href={option.url}>
                {option.name}
              </NavLink>
            ))}
          </HStack>
        </HStack>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={4}>
            <Menu>
              <MenuList alignItems={"center"}>
                {options.map((option) => (
                  <NavLink href={option.url}>{option.name}</NavLink>
                ))}
              </MenuList>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              ></MenuButton>
              <DarkModeSwitch />
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
            </Menu>
          </Stack>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box
          pb={4}
          display={{ md: "none" }}
          position={{ base: "fixed" }}
          width={"100%"}
          zIndex={2}
          overflowY="hidden"
          bg={Constants.bgColor[useColorModeValue("light", "dark")]}
          h={{ base: "100vh", md: "0" }}
        >
          <Stack as={"nav"} spacing="8" alignItems={"center"}>
            {options.map((option) => (
              <NavLink key={option.url} href={option.url}>
                {option.name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
