import React, { useEffect, useState } from "react";
import { Box, Text, SimpleGrid, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import PortoCard from "../components/PortoCards";
import PortfolioData from "../datas/PortfolioData";

const Portfolio = () => {
  return (
    <Box mt={24} w={"100vh"}>
      <Text fontSize={"2xl"} fontWeight={"bold"}>
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
