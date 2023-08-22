import React, { useState } from "react";
import {
  Box,
  Button,
  Link,
  VStack,
  Avatar,
  useMediaQuery,
} from "@chakra-ui/react";
import Home from "../pages/Home";
import Biodata from "../pages/Biodata";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Skills from "../pages/Skills";

const Sidebar = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isSmallerThanMd] = useMediaQuery("(max-width: 48em)"); // Check if screen is smaller than md breakpoint

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
      gap={isSmallerThanMd ? 4 : 6}
      justifyContent={isSmallerThanMd ? "center" : "center"} // Center content on smaller screens
      flexDirection={isSmallerThanMd ? "column" : "row"} // Stack items vertically on smaller screens
      display="flex"
    >
      <VStack
        gap={4}
        align={isSmallerThanMd ? "center" : "flex-end"} // Center align items on smaller screens
        p={4}
        mb={isSmallerThanMd ? 4 : 0}
      >
        <Avatar display={"flex"} src="av.png" size={"2xl"} mb={2} />
        <Link onClick={() => setCurrentPage("home")}>Home</Link>
        <Link onClick={() => setCurrentPage("biodata")}>CV</Link>
        <Link onClick={() => setCurrentPage("portfolio")}>Portfolio</Link>
        <Link onClick={() => setCurrentPage("stack")}>Stack Skills</Link>
        <Link onClick={() => setCurrentPage("contact")}>Contact</Link>
      </VStack>
      <Box>{renderPage()}</Box>
    </Box>
  );
};

export default Sidebar;
