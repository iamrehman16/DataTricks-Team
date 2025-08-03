import React from "react";
import Slider from "react-slick";
import { Container, Box, Typography, IconButton } from "@mui/material";
import MemberCard from "./MemberCard";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { ArrowBackIosNew } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Team Members
const teamMembers = [
  { image: "/Hussain.jpeg", name: "Hussain Ali", role: "Data Engineer", expertise: "Transforms complex datasets into actionable insights and AI solutions." },
  { image: "/Tayyab.jpg", name: "Tayyab Mehboob", role: "Lead UI/UX Engineer", expertise: "Designs seamless user experiences with precision and creativity." },
  { image: "/AbdurRahman.jpg", name: "Abdur Rahman", role: "Full Stack Developer", expertise: "Turns ideas into scalable web applications with cutting-edge tech." },
  { image: "/Waseel.jpg", name: "Waseel Ahmar", role: "Game Developer", expertise: "Creates immersive and engaging gaming experiences." },
  { image: "/taha.jpg", name: "Taha Fayyaz", role: "Android Developer", expertise: "Builds sleek and high-performing Android apps with modern frameworks." }
];

// ✅ Custom Arrows
const CustomPrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      left: -10,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 5,
      bgcolor: "white",
      boxShadow: 2,
      "&:hover": { bgcolor: "primary.light" }
    }}
  >
    <ArrowBackIosNew fontSize="small" />
  </IconButton>
);

const CustomNextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: -10,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 5,
      bgcolor: "white",
      boxShadow: 2,
      "&:hover": { bgcolor: "primary.light" }
    }}
  >
    <ArrowForwardIos fontSize="small" />
  </IconButton>
);

const TeamSection = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0px", // ✅ no extra visible side cards
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 1, centerPadding: "0px" } }
    ]
  };

  return (
    <Container id="team" data-aos="fade-up" sx={{ py: 10, position: "relative" }}>
      {/* Title */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>Our Team</Typography>
        <Box sx={{ width: 200, height: 4, backgroundColor: "primary.main", mx: "auto", borderRadius: 2 }} />
        <Typography variant="h6" sx={{ maxWidth: 700, mx: "auto", opacity: 0.85, mt: 2 }}>
          "We brought together a team of remarkable people, united by a shared mission — to innovate, build, and reshape the digital world."
        </Typography>
      </Box>

      {/* ✅ Slider Wrapper with Blur */}
      <Box sx={{ position: "relative", overflow: "hidden", px: 4 }}>
        {/* Left Blur */}
        <Box sx={{
          position: "absolute", left: 0, top: 0, bottom: 0,
          width: "100px", zIndex: 4,
          background: "linear-gradient(to right, white, rgba(255,255,255,0))",
          pointerEvents: "none"
        }} />
        {/* Right Blur */}
        <Box sx={{
          position: "absolute", right: 0, top: 0, bottom: 0,
          width: "100px", zIndex: 4,
          background: "linear-gradient(to left, white, rgba(255,255,255,0))",
          pointerEvents: "none"
        }} />

        {/* Slider */}
        <Slider {...settings}>
          {teamMembers.map((member, i) => (
            <Box
              key={i}
              sx={{
                px: 2,
                transform: "scale(0.9)",
                transition: "transform 0.3s ease",
                "&.slick-center": { transform: "scale(1.05)" } // ✅ center scaling
              }}
              className="team-slide"
            >
              <MemberCard {...member} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default TeamSection;
