import React from "react";
import {
  Avatar,
  Box,
  Stack,
  Text,
  useColorModeValue,
  Flex,
  Button,
} from "@chakra-ui/react";
import EducationTimeline from "../components/Education";
import ExperienceTimeline from "../components/Working";
import Competency from "../components/Competency";
import { Divider } from "@chakra-ui/react";
import Organization from "../components/Organization";

const Biodata = () => {
  return (
    <Box mt={24} w={"100vh"}>
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        FEBRY DHARMAWAN JUNIOR
      </Text>
      <Text mt={5} fontWeight={"bold"}>
        Curriculum Vitae
      </Text>
      <Box mt={2}>
        <Stack
          bg={useColorModeValue("gray.50", "gray.800")}
          borderRadius={12}
          py={16}
          px={8}
          spacing={{ base: 8, md: 8 }}
          align={"center"}
          direction={"column"}
        >
          <Text
            fontSize={{ base: "md", md: "md" }}
            textAlign={"center"}
            maxW={"3xl"}
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
          </Box>
          <Flex gap={4}>
            <EducationTimeline />
            <ExperienceTimeline />
          </Flex>
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
