import React from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Container,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import PortoCard from "../components/PortoCards";
import PortfolioData from "../datas/PortfolioData";
import { extendTheme } from "@chakra-ui/react";

const Portfolio = () => {
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
      w={isSmallerThanMd ? "auto" : "100vh"}
      mr={isSmallerThanMd ? 4 : 0}
      mb={isSmallerThanMd ? 4 : 0}
    >
      <Text fontSize={isSmallerThanMd ? "xl" : "2xl"} fontWeight={"bold"}>
        FEBRY DHARMAWAN JUNIOR
      </Text>
      <Text mt={5} fontWeight={"bold"}>
        Portfolio
      </Text>
      <Text mt={1} fontSize={"sm"}>
        Enumerate a selection of the open-source repositories to which I have
        either contributed or released.
      </Text>
      <Box>
        <Box maxW="100vw" mt={4}>
          <SimpleGrid columns={[1, 2]} spacing={4}>
            {PortfolioData().map((repo, index) => (
              <motion.div whileHover={{ y: -5 }} key={index}>
                <PortoCard
                  title={repo.title}
                  description={repo.description}
                  cover={repo.cover}
                  techStack={repo.techStack}
                  url={repo.url}
                  live={repo.live}
                  stargazers_count={repo.stargazers_count}
                />
              </motion.div>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
