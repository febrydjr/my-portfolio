import { Text } from "@chakra-ui/react";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWorkOutline } from "react-icons/md";
const ExperienceTimeline = () => {
  const title = {
    fontSize: "16px",
    fontWeight: "bold",
  };
  const subtitle = {
    fontWeight: "normal",
    fontSize: "14px",
    marginTop: "2px",
  };
  const description = {
    fontSize: "13px",
  };
  const objective = {
    fontSize: "13px",
    marginTop: "8px",
  };
  const list = {
    marginLeft: "22px",
  };
  return (
    <>
      <VerticalTimeline layout="1-column-left">
        <Text ml={12} fontSize={"2xl"} fontWeight={"bold"}>
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
    </>
  );
};

export default ExperienceTimeline;
