
import { Container, Box, Typography } from "@mui/material";
import MemberCard from "./MemberCard";

import '../../public/AbdurRahman.jpg';
import '../../public/Waseel.jpg';
import '../../public/Tayyab.jpg';
import '../../public/Hussain.jpeg';

const teamMembers = [
  {
    image: "./Hussain.jpeg",
    name: "Hussain Ali",
    role: "Data Engineer",
    expertise: "Transforms complex datasets into actionable insights and AI solutions."
  },
  {
    image: "./Tayyab.jpg",
    name: "Tayyab Mehboob",
    role: "Lead UI/UX Engineer",
    expertise: "Designs seamless user experiences with precision and creativity."
  },
  {
    image: "./AbdurRahman.jpg",
    name: "Abdur Rahman",
    role: "Full Stack Developer",
    expertise: "Turns ideas into scalable web applications with cutting-edge tech."
  },
  {
    image: "./Waseel.jpg",
    name: "Waseel Ahmar",
    role: "Game Developer",
    expertise: "Creates immersive and engaging gaming experiences."
  }
];

const TeamSection = () => {
  return (
    <Container id="team" data-aos="fade-up" sx={{ minHeight: "100vh", py: 10 }}>
      
      {/* Dramatic Intro */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Box sx={{ textAlign: "center", mb: 1 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Our Team
        </Typography>
        <Box
          sx={{
            width: 200,
            height: 4,
            backgroundColor: "primary.main",
            mx: "auto",
            borderRadius: 2
          }}
        />
      </Box>
        <Typography
          variant="h6"
          sx={{ maxWidth: 700, mx: "auto", opacity: 0.85, lineHeight: 1.7 }}
        >
          "We brought together a team of remarkable people, each a master of their craft,
          united by a shared mission — to innovate, build, and reshape the digital world."
        </Typography>
      </Box>

      {/* Team Grid */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 4
        }}
      >
        {teamMembers.map((member, i) => (
          <MemberCard
            key={i}
            image={member.image}
            name={member.name}
            role={member.role}
            expertise={member.expertise}
          />
        ))}
      </Box>
      
    </Container>
  );
};

export default TeamSection;
