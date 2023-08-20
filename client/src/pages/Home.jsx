import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import Quote from "../components/Quote";

const Home = () => {
  return (
    <Box mt={24} w={"100vh"}>
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        FEBRY DHARMAWAN JUNIOR
      </Text>
      <Text mt={5} fontWeight={"bold"}>
        Introduction
      </Text>
      <Quote />
      <Image mt={6} w={"1920px"} h={"720px"} src="wave.gif" alt="HomePicture" />
    </Box>
  );
};

export default Home;
