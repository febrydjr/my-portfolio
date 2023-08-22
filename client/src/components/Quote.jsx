import React from "react";
import {
  Container,
  Text,
  VStack,
  Stack,
  Avatar,
  Icon,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaQuoteRight } from "react-icons/fa";
import { extendTheme } from "@chakra-ui/react"; // Import extendTheme

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({ breakpoints });

const testimonial = {
  username: "Febry Dharmawan Jr",
  position: "Developer",
  company: "-",
  image: "malio.jpg",
  content: `Pada akhirnya, Virtual DOM mengajarkan kita bahwa perubahan adalah
  konstan, dan adaptasi adalah kunci kesuksesan.`,
};

const Quote = () => {
  const [isSmallerThanMd] = useMediaQuery(
    "(max-width: " + theme.breakpoints.md + ")"
  );

  return (
    <Container
      position={"absolute"}
      fontFamily={"Victor Mono"}
      maxW="5xl"
      p={isSmallerThanMd ? { base: 12, md: 10 } : { base: 10, md: 14 }} // Responsive padding
      _hover={{
        transform: "scale(1.1)",
      }}
      w={isSmallerThanMd ? "95%" : "100vh"} // Responsive width
      mt={isSmallerThanMd ? 0 : 12}
    >
      <VStack
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
          <Text fontSize={isSmallerThanMd ? "12px" : "18px"} color="gray.500">
            {testimonial.content}
          </Text>
          <Text
            fontWeight="bold"
            fontSize={isSmallerThanMd ? "md" : "lg"} // Responsive font size
            mr={isSmallerThanMd ? 2 : 12} // Responsive margin
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
          size={isSmallerThanMd ? "md" : "xl"} // Responsive avatar size
          pos="absolute"
          right={isSmallerThanMd ? "-24px" : "-48px"} // Responsive position
          bottom={isSmallerThanMd ? "-12px" : "-20px"} // Responsive position
          shadow="lg"
        />
      </VStack>
    </Container>
  );
};

export default Quote;
