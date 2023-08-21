import React from "react";
import {
  Box,
  Text,
  HStack,
  VStack,
  SimpleGrid,
  useMediaQuery,
  Icon,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import features from "../datas/CompetencyData";
import { extendTheme } from "@chakra-ui/react";

const Competency = () => {
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
    <>
      <Box maxW={"90vh"}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={8}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text
                  fontSize={isSmallerThanMd ? "14px" : "md"}
                  fontWeight={600}
                >
                  {feature.title}
                </Text>
                <Text
                  fontSize={isSmallerThanMd ? "13px" : "14px"}
                  color={"gray.600"}
                  style={{ textAlign: "left" }}
                >
                  {feature.text}
                </Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Competency;
