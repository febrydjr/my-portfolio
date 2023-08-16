import React from "react";
import { Box, Flex, Avatar, Text, HStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      bg={"#F3F3F3"}
      fontFamily={"Victor Mono"}
      w={"134vh"}
      maxW={"100%"}
      justifyContent={"center"}
      display="flex"
    >
      <HStack gap={10} align="flex-end" p={4}>
        <Avatar
          display={"flex"}
          src="https://picsum.photos/200/300"
          size={"2xl"}
        />
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          FEBRY DHARMAWAN JUNIOR
        </Text>
      </HStack>
    </Box>
  );
};

export default Navbar;
