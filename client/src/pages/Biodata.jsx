import React from "react";
import {
  Image,
  Avatar,
  Box,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Biodata = () => {
  return (
    <Box mt={24} w={"100vh"}>
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        FEBRY DHARMAWAN JUNIOR
      </Text>
      <Text mt={5} fontWeight={"bold"}>
        Biodata
      </Text>
      <Box mt={2}>
        <Stack
          bg={useColorModeValue("gray.50", "gray.800")}
          borderRadius={12}
          py={16}
          px={8}
          spacing={{ base: 8, md: 10 }}
          align={"center"}
          direction={"column"}
        >
          <Text
            fontSize={{ base: "md", md: "md" }}
            textAlign={"center"}
            maxW={"3xl"}
          >
            Lulusan Program Studi Teknik Informatika dari Universitas 17 Agustus
            1945 Surabaya tahun 2022, memiliki ketertarikan pada bidang
            Teknologi Informasi. Merupakan seseorang yang komunikatif, problem
            solving yang baik, mudah beradaptasi, cekatan, kerja keras, mampu
            bekerja sama dalam tim, ahli dalam troubleshooting, mengutamakan
            kejujuran dalam bekerja, serta selalu memperluas pengalaman dan
            pengetahuan.
          </Text>
          <Box textAlign={"center"}>
            <Avatar src={"foto.jpg"} mb={2} />

            <Text fontWeight={600}>Febry Dharmawan Junior</Text>
            <Text
              fontSize={"sm"}
              color={useColorModeValue("gray.400", "gray.400")}
            >
              The Developer
            </Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Biodata;
