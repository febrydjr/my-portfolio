import React from "react";
import EducationTimeline from "../components/Education";
import ExperienceTimeline from "../components/Working";
import { Flex, useMediaQuery } from "@chakra-ui/react";

const Experience = () => {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {isSmallerThanMd ? (
        <>
          <EducationTimeline />
          <ExperienceTimeline />
        </>
      ) : (
        <Flex>
          <EducationTimeline />
          <ExperienceTimeline />
        </Flex>
      )}
    </>
  );
};

export default Experience;
