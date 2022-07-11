import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  useColorMode,
  useToast,
} from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const toast = useToast();

  function handleThemeChange() {
    toggleColorMode();

    toast({
      position: "bottom-left",
      render: () => (
        <Box
          color="white"
          p={3}
          mx={1}
          bg={isDark ? "green.500" : "green.700"}
        >
          Theme changed to {isDark ? "light" : "dark"}
        </Box>
      ),
    });
  }

  return (
    <Button
      onClick={handleThemeChange}
      position="fixed"
      top="1rem"
      right="1rem"
    >
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
