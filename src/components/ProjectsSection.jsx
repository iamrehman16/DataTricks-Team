import { Container, Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "GiftCart",
    desc: "An innovative gift selection and cart system with dynamic pricing, built with Swing & Web frontend.",
    link: "https://yourproject1-link.com"
  },
  {
    title: "Event Management System",
    desc: "Digitizing trip & event management for student groups with payments, updates, and info features.",
    link: "https://yourproject2-link.com"
  },
  {
    title: "Data Insights Platform",
    desc: "A data engineering pipeline with AI-powered insights for smarter business decisions.",
    link: "https://yourproject3-link.com"
  },
  {
    title: "Game Prototype",
    desc: "An immersive Unreal Engine project demonstrating our gaming capabilities.",
    link: "https://yourproject4-link.com"
  },
  {
    title: "Image Gallery",
    desc: "A heartfelt, joyful, and wholesome vibe giving image gallery with minimal clean UI",
    link: "https://yourproject4-link.com"
  }
];

const OurProjects = () => {
  return (
    <Container id="projects" data-aos="fade-up" sx={{ minHeight: "100vh", py: 10 }}>
      {/* Section Title */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Box sx={{ textAlign: "center", mb: 1 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Our Projects
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
          sx={{ maxWidth: 700, mx: "auto", opacity: 0.8, lineHeight: 1.7 }}
        >
          From web platforms to cutting-edge game development, our projects showcase 
          how we turn ideas into impactful digital solutions.
        </Typography>
      </Box>

      {/* Projects Grid */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 4
        }}
      >
        {projects.map((proj, i) => (
          <ProjectCard
            key={i}
            title={proj.title}
            desc={proj.desc}
            link={proj.link}
          />
        ))}
      </Box>
    </Container>
  );
};

export default OurProjects;
