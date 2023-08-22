import { Text, Box, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolOutline } from "react-icons/io5";
import "../App.css";
import { extendTheme } from "@chakra-ui/react";

const EducationTimeline = () => {
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
    textAlign: "right",
    fontSize: isSmallerThanMd ? "lg" : "2xl",
    fontWeight: "bold",
  };

  const subtitle = {
    textAlign: "right",
    fontSize: isSmallerThanMd ? "14px" : "14px",
    marginTop: isSmallerThanMd ? "0.5rem" : "2px",
  };

  const description = {
    fontSize: isSmallerThanMd ? "sm" : "13px",
  };

  const objective = {
    textAlign: "right",
    fontSize: isSmallerThanMd ? "12px" : "13px",
    marginTop: isSmallerThanMd ? "0.5rem" : "8px",
  };

  const list = {
    marginLeft: isSmallerThanMd ? "20px" : "22px",
    fontSize: isSmallerThanMd ? "12px" : "13px",
  };
  const date = {
    textAlign: "right",
    fontSize: "14px",
    color: "gray",
  };

  return (
    <Box w={isSmallerThanMd ? "42vh" : "49vh"}>
      <VerticalTimeline layout="1-column-right">
        <Text
          align="right"
          mr={12}
          fontSize={isSmallerThanMd ? "lg" : "2xl"}
          fontWeight={"bold"}
        >
          Education
        </Text>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(226,135,67)", color: "#fff" }}
          icon={<IoSchoolOutline />}
        >
          <h3 style={{ ...title }}>Bootcamp Web Development</h3>
          <h4 style={{ ...subtitle }}>Purwadhika, Yogyakarta</h4>
          <p style={{ ...objective }}>Graduated with a GPA of XXX/100.</p>
          <p style={{ ...date }}>May 2023 - Nov 2023</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(226,135,67)", color: "#fff" }}
          icon={<IoSchoolOutline />}
        >
          <h3 style={{ ...title }}>
            Bachelor's Degree <br /> Teknik Informatika
          </h3>
          <h4 style={{ ...subtitle }}>Universitas 17 Agustus 1945 Surabaya</h4>
          <p style={{ ...objective }}>Graduated with a GPA of 3.65/4.00.</p>
          <p style={{ ...date }}>Aug 2018 - Jul 2022</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(226,135,67)", color: "#fff" }}
          icon={<IoSchoolOutline />}
        >
          <h3 style={{ ...title }}>
            High School <br />
            IPA
          </h3>
          <h4 style={{ ...subtitle }}>MAN Sidoarjo, Kab. Sidoarjo</h4>
          <p style={{ ...objective }}>
            Graduated with a score of 88.70/100.00.
          </p>
          <p style={{ ...date }}>Jun 2015 - May 2018</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
};

export default EducationTimeline;
