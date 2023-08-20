import React, { useState } from "react";
import { Box, Button, Link, VStack, Avatar } from "@chakra-ui/react";
import Home from "../pages/Home";
import Biodata from "../pages/Biodata";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";

const Sidebar = () => {
  const [currentPage, setCurrentPage] = useState("home");

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
        return <Home />;
      default:
        return null;
    }
  };

  return (
    <Box
      // bg={"#F3F3F3"}
      fontFamily={"Victor Mono"}
      gap={6}
      justifyContent={"center"}
      display="flex"
    >
      <VStack gap={4} align="flex-end" p={4}>
        <Avatar display={"flex"} src="avatar.png" size={"2xl"} mb={2} />
        <Link onClick={() => setCurrentPage("home")}>Home</Link>
        <Link onClick={() => setCurrentPage("biodata")}>Biodata</Link>
        <Link onClick={() => setCurrentPage("portfolio")}>Portfolio</Link>
        <Link onClick={() => setCurrentPage("stack")}>Stack</Link>
        <Link onClick={() => setCurrentPage("contact")}>Contact</Link>
      </VStack>
      <Box p={4}>{renderPage()}</Box>
    </Box>
  );
};

export default Sidebar;
