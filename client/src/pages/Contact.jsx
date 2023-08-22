import React from "react";
import { extendTheme } from "@chakra-ui/react";
import {
  Box,
  useMediaQuery,
  Text,
  Image,
  VStack,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import SocialMedia from "../components/SocialMedia";
const Contact = () => {
  const breakpoints = {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };

  const theme = extendTheme({ breakpoints });

  const [isSmallerThanMd] = useMediaQuery(
    "(max-width: " + theme.breakpoints.md + ")"
  );
  return (
    <Box
      ml={isSmallerThanMd ? 4 : 0}
      mt={isSmallerThanMd ? 4 : 24}
      h={isSmallerThanMd ? "auto" : "100vh"}
    >
      <Text fontSize={isSmallerThanMd ? "xl" : "2xl"} fontWeight={"bold"}>
        FEBRY DHARMAWAN JUNIOR
      </Text>
      <Text mt={5} fontWeight={"bold"}>
        Contact
      </Text>
      <Box mt={4} fontSize={`13px`}>
        <Text>febrydj99@gmail.com</Text>
        <Text>Phone: 081234171936</Text>
        <Text>
          Jl. Pahlawan RT 11 RW 02 Damarsi, <br /> Buduran, Sidoarjo 61252
        </Text>
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
          w={isSmallerThanMd ? "35vh" : "50vh"}
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
          w={isSmallerThanMd ? "35vh" : "50vh"}
          border={"1px solid black"}
          variant={"outline"}
          placeholder="Your Email"
        />
        <Textarea
          w={isSmallerThanMd ? "52vh" : "100vh"}
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
          mr={isSmallerThanMd ? 5 : 0}
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
        <Text mb={3} mt={4} fontSize={`12px`}>
          @2023 Febry Dharmawan Junior
        </Text>
      </Box>
    </Box>
  );
};

export default Contact;
