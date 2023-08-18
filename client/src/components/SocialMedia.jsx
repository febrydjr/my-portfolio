import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

const SocialMedia = () => {
  const linkwa =
    "https://wa.me/085963163141?text=Jika Anda mencari bantuan untuk mengembangkan atau meningkatkan situs web Anda, saya siap membantu Anda mewujudkan visi Anda. Tautan ini akan terhubung dengan saya dan mulai berbicara tentang proyek Anda. Saya sangat antusias untuk mendengar lebih banyak tentang apa yang Anda butuhkan!";
  const socialLinks = [
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/febrydjr/" },
    { icon: FaInstagram, link: "https://www.instagram.com/febrydjr/" },
    { icon: FaGithub, link: "https://www.github.com/febrydjr" },
    { icon: FaWhatsapp, link: `${linkwa}` },
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
