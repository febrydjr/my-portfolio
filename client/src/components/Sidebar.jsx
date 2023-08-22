import React, { useState } from "react";
import {
  Box,
  Button,
  Link,
  VStack,
  Avatar,
  useMediaQuery,
  Flex,
  WrapItem,
  Wrap,
  useColorMode,
} from "@chakra-ui/react";
import Home from "../pages/Home";
import Biodata from "../pages/Biodata";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Skills from "../pages/Skills";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const MotionChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Sidebar = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isSmallerThanMd] = useMediaQuery("(max-width: 48em)"); // Check if screen is smaller than md breakpoint
  const { colorMode, toggleColorMode } = useColorMode();
  const breakpoints = {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "biodata":
        return <Biodata />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "stack":
        return <Skills />;
      default:
        return null;
    }
  };

  return (
    <Box
      bg={"#F3F3F3"}
      h={"70%"}
      fontFamily={"Victor Mono"}
      gap={isSmallerThanMd ? 0 : 6}
      justifyContent={isSmallerThanMd ? "center" : "center"} // Center content on smaller screens
      flexDirection={isSmallerThanMd ? "column" : "row"} // Stack items vertically on smaller screens
      display="flex"
    >
      <VStack
        mt={"42px"}
        gap={4}
        align={isSmallerThanMd ? "center" : "flex-end"} // Center align items on smaller screens
        p={4}
        mb={isSmallerThanMd ? 0 : 0}
      >
        {/* <Avatar display={"flex"} src="av.png" size={"2xl"} mb={2} /> */}
        <MotionChakraBox
          animate={{
            rotate: [0, 35, 0, -35, 0],
            scale: [0.8, 1, 1, 1, 0.9, 0.8],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          display={"flex"} // Chakra's shouldForwardProp
          justifyContent={"center"} // Chakra's shouldForwardProp
          alignItems={"center"} // Chakra's shouldForwardProp
          width={"100px"} // Chakra's shouldForwardProp
          height={"100px"} // Chakra's shouldForwardProp
          bgGradient="linear(to-l, #7928CA, #FF0080)"
        >
          <Avatar display={"flex"} src="av.png" size={"2xl"} mb={2} />
        </MotionChakraBox>
        {isSmallerThanMd ? (
          <Box
            mt={isSmallerThanMd ? 4 : 0}
            w={"100%"}
            display={"flex"}
            justifyContent={"space-beetween"}
          >
            <Wrap
              spacing={2} // Adjust the spacing as needed
              maxW={"100%"} // Adjust these values as needed
              justify="center" // Center the content horizontally
            >
              <WrapItem>
                <Button
                  borderRadius={"none"}
                  bg={currentPage === "home" ? "white" : "#385898"}
                  size={"xs"}
                  color={currentPage === "home" ? "black" : "white"}
                  py={4}
                  onClick={() => setCurrentPage("home")}
                >
                  Intro
                </Button>
              </WrapItem>
              <WrapItem>
                <Button
                  borderRadius={"none"}
                  bg={currentPage === "portfolio" ? "white" : "#385898"}
                  color={currentPage === "portfolio" ? "black" : "white"}
                  size={"xs"}
                  py={4}
                  onClick={() => setCurrentPage("portfolio")}
                >
                  Portfolio
                </Button>
              </WrapItem>
              <WrapItem>
                <Button
                  borderRadius={"none"}
                  bg={currentPage === "biodata" ? "white" : "#385898"}
                  color={currentPage === "biodata" ? "black" : "white"}
                  size={"xs"}
                  py={4}
                  onClick={() => setCurrentPage("biodata")}
                >
                  CV
                </Button>
              </WrapItem>
              <WrapItem>
                <Button
                  borderRadius={"none"}
                  bg={currentPage === "stack" ? "white" : "#385898"}
                  color={currentPage === "stack" ? "black" : "white"}
                  size={"xs"}
                  py={4}
                  onClick={() => setCurrentPage("stack")}
                >
                  SkillStack
                </Button>
              </WrapItem>
              <WrapItem>
                <Button
                  borderRadius={"none"}
                  bg={currentPage === "contact" ? "white" : "#385898"}
                  color={currentPage === "contact" ? "black" : "white"}
                  size={"xs"}
                  py={4}
                  onClick={() => setCurrentPage("contact")}
                >
                  Contact
                </Button>
              </WrapItem>
            </Wrap>
          </Box>
        ) : (
          <>
            <Link onClick={() => setCurrentPage("home")}>Intro</Link>
            <Link onClick={() => setCurrentPage("biodata")}>CV</Link>
            <Link onClick={() => setCurrentPage("portfolio")}>Portfolio</Link>
            <Link onClick={() => setCurrentPage("stack")}>SkillStack</Link>
            <Link onClick={() => setCurrentPage("contact")}>Contact</Link>
          </>
        )}
      </VStack>
      <Box mt={isSmallerThanMd ? 0 : 6}>{renderPage()}</Box>
    </Box>
  );
};

export default Sidebar;
