import { Container, Box, Typography, TextField, Button, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const ContactUs = () => {
  return (
    <Container id="contact" data-aos='fade-up' sx={{ minHeight: "100vh", py: 10 }}>
      
      {/* Section Title */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Box sx={{ textAlign: "center", mb: 1 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Let's Connect
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
        <Typography variant="h6" sx={{ opacity: 0.7, maxWidth: 600, mx: "auto" }}>
          Have a project in mind or just want to say hello? Reach out to us through any channel below.
        </Typography>
      </Box>

      {/* Social Media */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <IconButton href="mailto:contact@datatricks.com" color="primary">
          <EmailIcon fontSize="large" />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank" color="primary">
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton href="https://github.com" target="_blank" color="primary">
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton href="https://twitter.com" target="_blank" color="primary">
          <TwitterIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Contact Form */}
      <Box
        sx={{
          maxWidth: 500,
          mx: "auto",
          p: 4,
          borderRadius: 3,
          backgroundColor: "white",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: 3
        }}
      >
        <TextField label="Your Email" variant="outlined" fullWidth />
        <TextField label="Your Message" variant="outlined" fullWidth multiline rows={4} />
        <Button variant="contained" size="large">
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default ContactUs;
