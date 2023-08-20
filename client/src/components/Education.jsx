import { Text } from "@chakra-ui/react";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolOutline } from "react-icons/io5";
import "../App.css";

const EducationTimeline = () => {
  const title = {
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "right",
  };
  const subtitle = {
    fontWeight: "normal",
    textAlign: "right",
    fontSize: "14px",
    marginTop: "2px",
  };
  const description = {
    fontSize: "13px",
  };
  const objective = {
    fontSize: "13px",
    marginTop: "8px",
    textAlign: "right",
  };
  const list = {
    marginLeft: "22px",
  };
  const date = {
    textAlign: "right",
    fontSize: "14px",
    color: "gray",
  };
  return (
    <VerticalTimeline layout="1-column-right">
      <Text align="right" mr={12} fontSize={"2xl"} fontWeight={"bold"}>
        Education
      </Text>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(226,135,67)", color: "#fff" }}
        icon={<IoSchoolOutline />}
      >
        <h3 style={{ ...title }}>Bootcamp Web Development</h3>
        <h4 style={{ ...subtitle }}>Purwadhika, Yogyakarta</h4>
        <p style={{ ...objective }}>Graduated with a GPA of 89/100.</p>
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
        <p style={{ ...objective }}>Graduated with a score of 88.70/100.00.</p>
        <p style={{ ...date }}>Jun 2015 - May 2018</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default EducationTimeline;
