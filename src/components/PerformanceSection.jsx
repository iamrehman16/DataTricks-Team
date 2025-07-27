import { Container, Box, Typography } from "@mui/material";
import PerformanceCard from "./PerformanceCard";

const performanceData = [
  { number: "100+", label: "Happy Clients" },
  { number: "2+", label: "Years of Experience" },
  { number: "15+", label: "Completed Projects" },
  { number: "10+", label: "Skilled Engineers" },
];

const Performance = () => {
  return (
    <Container id="performance" data-aos="fade-up" sx={{ minHeight: "100vh", py: 10 }}>
      {/* Section Title */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Box sx={{ textAlign: "center", mb: 1 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Our Performance
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
        <Typography variant="h6" sx={{ opacity: 0.75 }}>
          Numbers that speak for our dedication and impact.
        </Typography>
      </Box>

      {/* Performance Cards */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 4,
          mt: 4
        }}
      >
        {performanceData.map((p, i) => (
          <PerformanceCard key={i} number={p.number} label={p.label} />
        ))}
      </Box>
    </Container>
  );
};

export default Performance;
