import { Container, Box, Typography } from "@mui/material";
import TechCard from "./TechCard";
import '../../public/sql.png';
import '../../public/tailwind.png';
import '../../public/python.jpeg';
import '../../public/node.png';
import '../../public/mongo.png';
import '../../public/express.png';
import '../../public/dotnet.png';
import '../../public/react.png';
import '../../public/unreal.png';
import '../../public/mui.png';
import '../../public/tailwind.png';



const techStack = [
  { title: "Python", image: "./python.jpeg" },
  { title: "SQL", image: "./sql.png" },
  { title: "MongoDB", image: "./mongo.png" },
  { title: "React", image: "./react.png" },
  { title: "Material UI", image: "./mui.png" },
  { title: "Express", image: "./express.png" },
  { title: "Node.js", image: "./node.png" },
  { title: ".NET", image: "./dotnet.png" },
  { title: "Unreal Engine", image: "./unreal.png" },
  { title: "Tailwind", image: "./tailwind.png" },
];

const TechnologyStack = () => {
  return (
    <Container id="techstack" data-aos="fade-up" sx={{ minHeight: "100vh", py: 10 }}>
      {/* Section Title */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Box sx={{ textAlign: "center", mb: 1 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Our Technology Stack
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
        <Typography variant="h6" sx={{ maxWidth: 700, mx: "auto", opacity: 0.8 }}>
          We master a wide range of technologies, ensuring that every project is powered by the best tools in the industry.
        </Typography>
      </Box>

      {/* Tech Grid */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 3
        }}
      >
        {techStack.map((tech, i) => (
          <TechCard key={i} title={tech.title} image={tech.image} />
        ))}
      </Box>
    </Container>
  );
};

export default TechnologyStack;
