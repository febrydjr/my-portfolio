import React from "react";
import { Box, Text, Image, useMediaQuery } from "@chakra-ui/react";
import Quote from "../components/Quote";
import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({ breakpoints });

const Home = () => {
  const [isSmallerThanMd] = useMediaQuery(
    "(max-width: " + theme.breakpoints.md + ")"
  );

  return (
    <Box
      ml={isSmallerThanMd ? 4 : 0}
      mt={isSmallerThanMd ? 4 : 24}
      h={isSmallerThanMd ? "auto" : "100vh"}
      mb={isSmallerThanMd ? "24vh" : 0}
    >
      <Text fontSize={isSmallerThanMd ? "xl" : "2xl"} mb={5} fontWeight="bold">
        FEBRY DHARMAWAN JUNIOR
      </Text>
      <Text mt={isSmallerThanMd ? 3 : 4} fontWeight="bold">
        Introduction
      </Text>
      <Quote />
      <Image
        mt={isSmallerThanMd ? 4 : 6}
        w={isSmallerThanMd ? "95%" : "100vh"} // Responsive width
        h={isSmallerThanMd ? "auto" : "650px"}
        src="wave.gif"
        alt="HomePic"
      />
    </Box>
  );
};

export default Home;
