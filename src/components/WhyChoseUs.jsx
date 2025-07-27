import { Container, Box, Typography } from "@mui/material";
import AttributeCard from "./AttributeCard";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import SecurityIcon from "@mui/icons-material/Security";
import PsychologyIcon from "@mui/icons-material/Psychology";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const attributes = [
  {
    icon: ElectricBoltIcon,
    title: "Blazing Fast",
    desc: "We make everything faster than ever before with optimized solutions."
  },
  {
    icon: SecurityIcon,
    title: "Secure by Design",
    desc: "Security is at the core of everything we build."
  },
  {
    icon: PsychologyIcon,
    title: "AI-Driven Insights",
    desc: "Leveraging AI to unlock smarter decisions and predictive solutions."
  },
  {
    icon: RocketLaunchIcon,
    title: "Next-Gen Innovation",
    desc: "Pushing boundaries with futuristic technologies that redefine possibilities."
  }
];

const WhyChooseUsSection = () => {
  return (
    <Container data-aos="fade-up" sx={{ minHeight: "100vh", py: 8 }}>
      
      {/* Heading */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
          Why Choose Us?
        </Typography>
        <Box
          sx={{
            width: 220,
            height: 4,
            backgroundColor: "primary.main",
            mx: "auto",
            borderRadius: 2
          }}
        />
      </Box>

      {/* Attribute Cards */}
      <Box sx={{ display: "flex", gap: 3, justifyContent: "center", flexWrap: "wrap", py: 5 }}>
        {attributes.map((attr, i) => (
          <AttributeCard
            key={i}
            icon={attr.icon}
            title={attr.title}
            desc={attr.desc}
          />
        ))}
      </Box>
      
    </Container>
  );
};

export default WhyChooseUsSection;
