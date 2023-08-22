import * as React from "react";
import {
  SimpleGrid,
  Container,
  useMediaQuery,
  Box,
  Text,
} from "@chakra-ui/react";
import SkillData from "../datas/SkillData";
import { extendTheme } from "@chakra-ui/react";
import SkillsCard from "../components/SkillsCards";

const Skills = () => {
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
      h={isSmallerThanMd ? "auto" : "90vh"}
      mb={isSmallerThanMd ? 4 : 0}
      mr={isSmallerThanMd ? 4 : 0}
    >
      <Text fontSize={isSmallerThanMd ? "xl" : "2xl"} fontWeight={"bold"}>
        FEBRY DHARMAWAN JUNIOR
      </Text>
      <Text mt={5} fontWeight={"bold"}>
        Skills Stack
      </Text>
      <Text mt={1} fontSize={"sm"}>
        Here is a compilation of the tools and technologies I frequently employ
        and enjoy using.
      </Text>
      <Box mt={4}>
        <SimpleGrid columns={[1, 2, 2]} spacing={4}>
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
