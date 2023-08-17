import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

const SocialMedia = () => {
  const socialLinks = [
    { icon: FaLinkedin, link: "link_to_linkedin_profile" },
    { icon: FaInstagram, link: "https://www.instagram.com/febrydjr/" },
    { icon: FaGithub, link: "https://www.github.com/febrydjr" },
    { icon: FaWhatsapp, link: "link_to_whatsapp_profile" },
  ];

  return (
    <Box mt={6} display="flex" gap={2}>
      {socialLinks.map(({ icon: Icon, link }) => (
        <a key={link} href={link} target="_blank" rel="noopener noreferrer">
          <IconButton
            _hover={{
              bg: "white",
              color: "black",
              border: "1px solid black",
              transform: "scale(1.2)",
            }}
            bg={"black"}
            color={"white"}
            aria-label={link}
            icon={<Icon />}
            size="sm"
          />
        </a>
      ))}
    </Box>
  );
};

export default SocialMedia;
