import React from "react";
import {
  Avatar,
  Box,
  Stack,
  Text,
  useColorModeValue,
  useMediaQuery,
  Flex,
  Button,
} from "@chakra-ui/react";
import EducationTimeline from "../components/Education";
import ExperienceTimeline from "../components/Working";
import Competency from "../components/Competency";
import { Divider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Organization from "../components/Organization";
import Experience from "../components/Experience";
const Biodata = () => {
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
        Curriculum Vitae
      </Text>
      <Box mt={2}>
        <Stack
          bg={useColorModeValue("gray.50", "gray.800")}
          borderRadius={12}
          py={12}
          px={6}
          spacing={{ base: 8, md: 8 }}
          align={"center"}
          direction={"column"}
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            textAlign={"center"}
            // maxW={"3xl"}
          >
            Sebagai lulusan Program Studi Teknik Informatika dari Universitas 17
            Agustus 1945 Surabaya tahun 2022, saya membawa ketertarikan yang
            kuat dalam bidang Teknologi Informasi. Dengan kemampuan komunikasi
            yang baik, kepemahaman dalam problem solving, serta adaptabilitas
            yang tinggi, saya siap menghadapi berbagai tantangan. Saya memiliki
            keahlian dalam bekerja kolaboratif dalam tim, menguasai
            troubleshooting, dan menjunjung tinggi nilai kejujuran dalam setiap
            tindakan. Dalam pengembangan web, saya tertarik khususnya pada
            penggunaan tools seperti ReactJS, Chakra UI, dan JavaScript. Saya
            berkomitmen untuk terus belajar, memperluas pengalaman, dan
            mengaplikasikan pengetahuan saya guna mencapai hasil terbaik dalam
            setiap proyek yang saya jalani.
          </Text>
          <Box textAlign={"center"}>
            <Avatar size={"lg"} src={"foto.jpg"} mb={2} />
            <Text fontWeight={600}>Febry Dharmawan Junior</Text>
            <Text
              fontSize={"sm"}
              color={useColorModeValue("gray.400", "gray.400")}
            >
              The Developer
            </Text>
            <Experience />
          </Box>
          <Organization />
          <Box>
            <Competency />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Biodata;
