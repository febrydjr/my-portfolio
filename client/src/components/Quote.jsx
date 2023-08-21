import React from "react";
import {
  Container,
  Text,
  VStack,
  Stack,
  Avatar,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaQuoteRight } from "react-icons/fa";

const testimonial = {
  username: "Febry Dharmawan Jr",
  position: "Developer",
  company: "-",
  image: "malio.jpg",
  content: `Pada akhirnya, Virtual DOM mengajarkan kita bahwa perubahan adalah
  konstan, dan adaptasi adalah kunci kesuksesan.`,
};

const Quote = () => {
  return (
    <Container
      position={"absolute"}
      fontFamily={"Victor Mono"}
      maxW="5xl"
      mt={4}
      p={{ base: 10, md: 14 }}
      _hover={{
        transform: "scale(1.1)",
      }}
    >
      <VStack
        // spacing={3}
        p={4}
        bg={useColorModeValue("#F3F3F3", "blackAlpha.600")}
        border="3px solid"
        borderColor="black"
        maxW="xl"
        margin="0 auto"
        boxShadow="lg"
        pos="relative"
      >
        <Icon
          as={FaQuoteRight}
          w={10}
          h={10}
          color="black"
          left="-1.3rem"
          position="absolute"
          top="-1.5rem"
        />
        <Stack direction="column" spacing={5}>
          <Text color="gray.500">{testimonial.content}</Text>
          {/* <Text color="gray.500">frontend!</Text> */}
          <Text
            fontWeight="bold"
            fontSize="lg"
            mr={12}
            align="right"
            style={{ marginRight: "3rem !important" }}
          >
            {testimonial.username}
          </Text>
        </Stack>
        <Avatar
          name="avatar"
          src={testimonial.image}
          showBorder={true}
          borderColor="black"
          size="xl"
          pos="absolute"
          right="-48px"
          bottom="-20px"
          shadow="lg"
        />
      </VStack>
    </Container>
  );
};

export default Quote;
