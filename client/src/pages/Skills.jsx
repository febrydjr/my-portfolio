import * as React from "react";
import { SimpleGrid, Container, Box, Text } from "@chakra-ui/react";
import SkillData from "../datas/SkillData";
import SkillsCard from "../components/SkillsCards";

const Skills = () => {
  return (
    <Box mt={24} w={"100vh"}>
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        FEBRY DHARMAWAN JUNIOR
      </Text>
      <Text mt={5} fontWeight={"bold"}>
        Stack Skills
      </Text>
      <Box mt={4}>
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {SkillData().map((tool, index) => (
            <SkillsCard
              key={index}
              name={tool.name}
              description={tool.description}
              image={tool.image}
              link={tool.link}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Skills;
