import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.300",
        color: "#16161D",
        userSelect: "none",
        transition: "all 0.5s",
      },
    },
  },
});
