import { Box, Container, Typography, Button, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #1976d2, #42a5f5)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        flexDirection: "column"
      }}
    >
      <Container>
        {/* Title */}
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to DataTricks
        </Typography>

        {/* Subtitle */}
        <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
          Crafted by Coders. Driven by Data. Designed for Change.
        </Typography>

        {/* CTA Button */}
        <Button
          variant="outlined"
          sx={{ bgcolor: "#fff", color: "primary.main", fontWeight: "bold", boxShadow: 3, mb: 3 }}
          size="large"
          onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
        >
          Get Started
        </Button>

        {/* Social Media Icons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
          <IconButton
            href="https://github.com/DataTricks-stack"
            target="_blank"
            sx={{ color: "white", "&:hover": { color: "#000" } }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com/company/datatricks/"
            target="_blank"
            sx={{ color: "white", "&:hover": { color: "#0A66C2" } }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>

          <IconButton
            href="mailto:datatricks.team@gmail.com" target="_blank"
            sx={{ color: "white", "&:hover": { color: "#D44638" } }} // Gmail Red Hover
          >
            <EmailIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
