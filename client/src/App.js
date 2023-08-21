import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <Box fontFamily={"Victor Mono"} borderRadius={"none"}>
      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Sidebar />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
