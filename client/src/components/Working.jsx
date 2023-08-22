import { Text, Box, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWorkOutline } from "react-icons/md";
import { extendTheme } from "@chakra-ui/react";
const ExperienceTimeline = () => {
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

  const title = {
    fontSize: isSmallerThanMd ? "lg" : "2xl",
    fontWeight: "bold",
  };

  const subtitle = {
    fontSize: isSmallerThanMd ? "14px" : "14px",
    marginTop: isSmallerThanMd ? "0.5rem" : "2px",
  };

  const description = {
    fontSize: isSmallerThanMd ? "sm" : "13px",
  };

  const objective = {
    fontSize: isSmallerThanMd ? "12px" : "13px",
    marginTop: isSmallerThanMd ? "0.5rem" : "8px",
  };

  const list = {
    marginLeft: isSmallerThanMd ? "20px" : "22px",
    fontSize: isSmallerThanMd ? "12px" : "13px",
  };
  return (
    <Box align="left" w={isSmallerThanMd ? "42vh" : "49vh"}>
      <VerticalTimeline layout="1-column-left">
        <Text
          ml={12}
          fontSize={isSmallerThanMd ? "lg" : "2xl"}
          fontWeight={"bold"}
        >
          Experience
        </Text>
        <VerticalTimelineElement
          date="Mar 2021 - Apr 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdOutlineWorkOutline />}
        >
          <h3 style={{ ...title }}>Magang Web Programmer</h3>
          <h4 style={{ ...subtitle }}>
            Gamelab Indonesia, Salatiga, Jawa Tengah
          </h4>
          <p style={{ ...description }}>
            Gamelab Indonesia adalah lembaga pendidikan dan pelatihan kerja yang
            didirikan oleh PT Educa Sisfomedia Indonesia (Educa Studio).
          </p>
          <ol style={{ ...objective }}>
            Objective:
            <li style={{ ...list }}>Pembuatan Landing Page Coffee Shop</li>
            <li style={{ ...list }}>
              Mendapatkan nilai akhir kegiatan magang 91/100
            </li>
          </ol>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Nov 2019 - Mar 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdOutlineWorkOutline />}
        >
          <h3 style={{ ...title }}>Hischooffee</h3>
          <h4 style={{ ...subtitle }}>Sidoarjo, Jawa Timur</h4>
          <p style={{ ...description }}>
            Hischooffee adalah sebuah produk minuman kopi dengan metode
            penjualan sistem pre-order dalam periode penjualan setiap minggu.
          </p>
          <ol style={{ ...objective }}>
            Objective:
            <li style={{ ...list }}>
              Menjual lebih dari 50 cup dalam setiap pre-order
            </li>
            <li style={{ ...list }}>Penyusunan laporan transaksi</li>
          </ol>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
};

export default ExperienceTimeline;
