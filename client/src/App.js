import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Box fontFamily={"Victor Mono"} bg={"#F3F3F3"} h={"100%"}>
      {/* <Navbar /> */}
      <Sidebar />
      <Routes>
        <Route></Route>
      </Routes>
    </Box>
  );
}

export default App;
