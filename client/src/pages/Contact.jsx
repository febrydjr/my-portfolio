import React from "react";
import {
  Box,
  Text,
  Image,
  VStack,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import SocialMedia from "../components/SocialMedia";
const Contact = () => {
  return (
    <Box mt={24} w={"100vh"}>
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        FEBRY DHARMAWAN JUNIOR
      </Text>
      <Text mt={5} fontWeight={"bold"}>
        Contact
      </Text>
      <Box mt={6} fontSize={`13px`}>
        <Text>febrydj99@gmail.com</Text>
        <Text>Phone: 081234171936</Text>
      </Box>
      <Box>
        <SocialMedia />
      </Box>
      <Box display={"flex"} gap={2} flexDirection={"column"} mt={6}>
        <Input
          _hover={{
            bg: "white",
            color: "black",
            border: "1px solid black",
            transform: "scale(1.1)",
          }}
          h={"40px"}
          type="text"
          w={"40vh"}
          border={"1px solid black"}
          variant={"outline"}
          placeholder="Your Name"
        />
        <Input
          _hover={{
            bg: "white",
            color: "black",
            border: "1px solid black",
            transform: "scale(1.1)",
          }}
          h={"40px"}
          type="email"
          w={"40vh"}
          border={"1px solid black"}
          variant={"outline"}
          placeholder="Your Email"
        />
        <Textarea
          _hover={{
            bg: "white",
            color: "black",
            border: "1px solid black",
            transform: "scale(1.05)",
          }}
          border={"1px solid black"}
          h={"140px"}
          variant={"outline"}
          placeholder="Input Your Message Here..."
        ></Textarea>
        <Button
          bg={"black"}
          color={"white"}
          _hover={{ bg: "white", color: "black", border: "1px solid black" }}
          borderRadius={"none"}
          w={"18vh"}
          mt={2}
          ml="auto"
        >
          Send Message
        </Button>
        <Text mt={4} fontSize={`12px`}>
          @2023 Febry Dharmawan Junior
        </Text>
      </Box>
    </Box>
  );
};

export default Contact;
