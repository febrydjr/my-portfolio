// Home.jsx
import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box mt={24} w={"100vh"}>
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        FEBRY DHARMAWAN JUNIOR
      </Text>
      <Image mt={6} src="https://picsum.photos/1920/1780" alt="Home Picture" />
    </Box>
  );
};

export default Home;
