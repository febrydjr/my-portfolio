import React from "react";
import { Box, Text, HStack, VStack, SimpleGrid, Icon } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import features from "../datas/CompetencyData";

const Competency = () => {
  return (
    <>
      <Box maxW={"90vh"}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text
                  color={"gray.600"}
                  style={{ textAlign: "justify", lineHeight: "1.2" }}
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
