import { Box, Typography, Button } from "@mui/material";

const CallToActionSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(to right, #0d47a1, #1976d2)",
        color: "white",
        px: 3
      }}
    >
      {/* Main Heading */}
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Ready to Build the Future With Us?
      </Typography>

      {/* Supporting Text */}
      <Typography
        variant="h6"
        sx={{ maxWidth: 700, mb: 4, opacity: 0.9 }}
      >
        Whether you're a startup with a vision or an enterprise looking to scale, 
        we’re here to deliver cutting-edge solutions tailored to your needs.
      </Typography>

      {/* CTA Button */}
      <Button
        variant="contained"
        size="large"
        sx={{
          bgcolor: "white",
          color: "primary.main",
          fontWeight: "bold",
          px: 5,
          py: 1.5,
          fontSize: "1.1rem",
          "&:hover": { bgcolor: "#f5f5f5" }
        }}
        onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
        Let's Talk
      </Button>
    </Box>
  );
};

export default CallToActionSection;
