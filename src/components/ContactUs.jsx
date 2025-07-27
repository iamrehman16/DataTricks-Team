import React, { useRef, useState } from "react";
import { Container, Box, Typography, TextField, Button, IconButton, Alert } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from "@mui/icons-material/GitHub";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_ukv4bzx",   // ✅ replace with EmailJS Service ID
        "template_m78oy5n",  // ✅ replace with Template ID
        formRef.current,
        "XX9ASkMFaJ484Blch"    // ✅ replace with Public Key
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => setStatus("error")
      );
  };

  return (
    <Container id="contact" data-aos="fade-up" sx={{ minHeight: "100vh", py: 10 }}>
      
      {/* Section Title */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Let's Connect
        </Typography>
        <Box sx={{ width: 200, height: 4, backgroundColor: "primary.main", mx: "auto", borderRadius: 2, mb: 1 }} />
        <Typography variant="h6" sx={{ opacity: 0.7, maxWidth: 600, mx: "auto" }}>
          Have a project in mind or just want to say hello? Reach out to us through any channel below.
        </Typography>
      </Box>

      {/* Social Media Icons */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <IconButton href="mailto:datatricks.team@gmail.com" color="primary"><EmailIcon fontSize="large" /></IconButton>
        <IconButton href="https://www.linkedin.com/company/datatricks/" target="_blank" color="primary"><LinkedInIcon fontSize="large" /></IconButton>
        <IconButton href="https://github.com/DataTricks-stack" target="_blank" color="primary"><GitHubIcon fontSize="large" /></IconButton>
        <IconButton href="https://www.instagram.com/datatricks.team?utm_source=qr" target="_blank" color="primary"><InstagramIcon fontSize="large" /></IconButton>
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
        {status === "success" && <Alert severity="success"> Message Sent Successfully!</Alert>}
        {status === "error" && <Alert severity="error">❌ Failed to send. Please try again.</Alert>}

        <form ref={formRef} onSubmit={sendEmail}>
          <TextField name="user_email" label="Your Email" variant="outlined" fullWidth required sx={{ mb: 2 }} />
          <TextField name="message" label="Your Message" variant="outlined" fullWidth multiline rows={4} required sx={{ mb: 2 }} />
          <Button type="submit" variant="contained" size="large" fullWidth disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ContactUs;
