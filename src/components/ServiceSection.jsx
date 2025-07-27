import { Container, Box, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";
import WebIcon from "@mui/icons-material/Web";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import DevicesIcon from "@mui/icons-material/Devices";
import DataObjectIcon from "@mui/icons-material/DataObject";

const services = [
  {
    icon: WebIcon,
    title: "Full Stack Development",
    desc: "We build scalable, high-performance web apps using modern frameworks and best practices."
  },
  {
    icon: SportsEsportsIcon,
    title: "Game Development",
    desc: "From concept to playable reality, we create immersive game experiences that engage users."
  },
  {
    icon: DevicesIcon,
    title: "UI/UX Engineering",
    desc: "Our designers craft sleek, user-friendly interfaces that enhance the user experience."
  },
  {
    icon: DataObjectIcon,
    title: "Data Engineering",
    desc: "Transforming raw data into valuable insights with robust pipelines and analytics solutions."
  }
];

const ServicesSection = () => {
  return (
    <Container id="services" data-aos="fade-up" sx={{ minHeight: "100vh", py: 10 }}>
      
      {/* Section Heading */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Our Services
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

      {/* Services Grid */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 4,
          pt: 8
        }}
      >
        {services.map((service, i) => (
          <ServiceCard
            key={i}
            icon={service.icon}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </Box>

    </Container>
  );
};

export default ServicesSection;
