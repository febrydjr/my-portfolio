import React, { useState } from "react";
import {
  Box,
  Image,
  useColorModeValue,
  VStack,
  Text,
  AspectRatio,
  HStack,
  Tag,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Center,
  Flex,
  Tooltip,
  Link,
  Button,
} from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const PortoCard = (props) => {
  const { title, cover, techStack, url, description, stargazers_count, live } =
    props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  const handleLinkClick = (e, link) => {
    window.open(link);
    e.stopPropagation();
  };

  const handleLiveClick = (e, link) => {
    window.open(link);
    e.stopPropagation();
  };

  const getTagColor = (type) => {
    type = type.toLowerCase();
    switch (type) {
      case "ruby":
      case "rails": {
        return "red";
      }
      case "react": {
        return "cyan";
      }
      case "javascript": {
        return "yellow";
      }
      case "typescript":
      case "tailwindcss":
      case "nextjs": {
        return "blue";
      }
      case "chakraui":
      case "css": {
        return "teal";
      }
      default: {
        return "gray";
      }
    }
  };

  return (
    <Box
      onClick={handleClick}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.300", "gray.700")}
      cursor="pointer"
      size="xl"
    >
      <VStack
        // rounded="xl"
        borderWidth="1px"
        bg={useColorModeValue("white", "gray.800")}
        borderColor={useColorModeValue("gray.100", "gray.700")}
        _hover={{
          shadow: "lg",
          textDecoration: "none",
        }}
        overflow="hidden"
        align="start"
        spacing={0}
      >
        <Box position="relative" w="100%">
          <AspectRatio
            ratio={1.85 / 1}
            w="100%"
            borderBottomWidth="1px"
            borderColor={useColorModeValue("gray.100", "gray.700")}
          >
            <Image src={cover} objectFit="cover" alt="cover image" />
          </AspectRatio>
        </Box>

        <VStack py={2} px={[2, 4]} spacing={1} align="start" w="100%">
          <Flex justifyContent="space-between" width="100%">
            <Tooltip hasArrow label="Go to Repositories" placement="top">
              <HStack>
                <Icon as={FiGithub} boxSize="0.9em" mt={"1px"} />
                <Text
                  fontSize="sm"
                  noOfLines={1}
                  fontWeight="600"
                  align="left"
                  onClick={(e) => handleLinkClick(e, url)}
                  color="blue.400"
                >
                  {title}
                </Text>
              </HStack>
            </Tooltip>
            <Flex alignItems="center">
              <Icon as={AiOutlineStar} boxSize="0.9em" mt={"1px"} />
              <Box as="span" ml="1" fontSize="sm">
                {stargazers_count}
              </Box>
            </Flex>
          </Flex>
          <Box>
            <Text
              mt={1}
              mb={3}
              color="gray.500"
              fontSize="xs"
              noOfLines={2}
              textAlign="left"
            >
              {description}
            </Text>
          </Box>
          <Flex justifyContent="space-between" width="100%">
            <Box>
              <HStack mb={1} spacing="1">
                {techStack.map((tech, index) => (
                  <Tag
                    key={index}
                    borderRadius={"none"}
                    size="sm"
                    colorScheme={getTagColor(tech)}
                  >
                    <Text fontSize={["0.55rem", "inherit", "inherit"]}>
                      {tech}
                    </Text>
                  </Tag>
                ))}
              </HStack>
            </Box>
            {live !== "" && (
              <Tag
                mb={1}
                borderRadius={"none"}
                color="white"
                bgColor={"#1DBF73"}
                _hover={{
                  transform: "scale(1.1)",
                }}
                onClick={(e) => handleLinkClick(e, live)}
              >
                <Link>LIVE</Link>
              </Tag>
            )}
          </Flex>
        </VStack>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose} isCentered allowPinchZoom>
        <ModalOverlay />
        <ModalContent bg="none" maxW={"36rem"} w="auto">
          <ModalBody p={0} rounded="lg" overflow="hidden" bg="none">
            <Center>
              <Image src={cover} rounded="lg" alt="Repo image" />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PortoCard;
