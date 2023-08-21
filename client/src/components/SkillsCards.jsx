import React, { useState, useEffect } from "react";
import {
  VStack,
  HStack,
  Text,
  useColorModeValue,
  Link,
  Box,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const extractColor = async (imageSrc) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageSrc;
    img.crossOrigin = "Anonymous"; // Allow cross-origin loading for the image
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      context.drawImage(img, 0, 0, img.width, img.height);
      const pixelData = context.getImageData(0, 0, img.width, img.height).data;

      // Calculate the average color from the pixel data
      let r = 0,
        g = 0,
        b = 0;
      const totalPixels = img.width * img.height;
      for (let i = 0; i < totalPixels * 4; i += 4) {
        r += pixelData[i];
        g += pixelData[i + 1];
        b += pixelData[i + 2];
      }
      r = Math.floor(r / totalPixels);
      g = Math.floor(g / totalPixels);
      b = Math.floor(b / totalPixels);

      resolve(`rgb(${r}, ${g}, ${b})`);
    };
    img.onerror = reject;
  });
};

const SkillsCard = ({ name, image, link, description }) => {
  const [bgColor, setBgColor] = useState("transparent");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    extractColor(image)
      .then((color) => {
        setBgColor(color);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error extracting color:", error);
        setLoading(false);
      });
  }, [image]);

  return (
    <motion.div whileHover={{ y: -5 }}>
      <Link href={link} isExternal>
        <HStack
          p={4}
          bg={useColorModeValue("white", "gray.800")}
          rounded="xl"
          borderWidth="1px"
          borderColor={useColorModeValue("gray.100", "gray.700")}
          w="100%"
          textAlign="left"
          align="start"
          spacing={4}
          _hover={{ shadow: "md" }}
        >
          <Box
            rounded="lg"
            p={2}
            position="relative"
            overflow="hidden"
            lineHeight={0}
            boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
          >
            <Box
              bg={bgColor}
              position="absolute"
              top={0}
              bottom={0}
              left={0}
              right={0}
              opacity={0.25}
            ></Box>
            {loading ? (
              <Skeleton height={26} width={26} rounded="md" />
            ) : (
              <Image
                src={image}
                height={26}
                width={26}
                layout="fixed"
                rounded="md"
              />
            )}
          </Box>
          <VStack
            align="start"
            justify="flex-start"
            spacing={1}
            maxW="lg"
            h="100%"
          >
            <VStack spacing={0} align="start" flexGrow={1}>
              <Text fontWeight="bold" fontSize="md" noOfLines={2} color="black">
                {name}
              </Text>
              <Text
                fontSize="sm"
                color={useColorModeValue("gray.500", "gray.200")}
              >
                {description}
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </Link>
    </motion.div>
  );
};

export default SkillsCard;
