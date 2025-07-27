import React, { useState } from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PolicyDialog from './PolicyDialog';   // ✅ Import the dialog

const Footer = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: "", content: "" });

  const openDialog = (title, content) => {
    setDialogContent({ title, content });
    setDialogOpen(true);
  };

  const closeDialog = () => setDialogOpen(false);

  // ✅ Policies Content
  const privacyPolicy = `Privacy Policy:
We respect your privacy and protect your data. 
- We only collect necessary information to provide services.
- No data is sold to third parties.
- You can request deletion of your data anytime.
...`;

  const termsOfService = `Terms of Service:
By using DataTricks, you agree to:
- Use our services legally.
- Avoid malicious activities.
- Respect intellectual property.
Violation may result in service termination.
...`;

  const cookiePolicy = `Cookie Policy:
We use cookies to improve user experience:
- Essential cookies ensure site functionality.
- Analytics cookies help us understand usage.
- You can disable cookies in your browser settings.
...`;

  return (
    <Box sx={{ backgroundColor: '#0A1929', color: '#fff', padding: '40px 0', marginTop: 'auto' }}>
      <Container maxWidth="lg">
        <Box sx={{ display:'flex', justifyContent:'space-around', flexWrap:'wrap', my:4, gap:5 }}>
          
          {/* Quick Links */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>Quick Links</Typography>
            <Link component="button" onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })} color="inherit" underline="hover" display="block">Home</Link>
            <Link component="button" onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })} color="inherit" underline="hover" display="block">About</Link>
            <Link component="button" onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })} color="inherit" underline="hover" display="block">Services</Link>
            <Link component="button" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })} color="inherit" underline="hover" display="block">Contact</Link>
          </Box>

          {/* Contact Info */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>Contact Info</Typography>
            <Box display="flex" alignItems="center" gap={1} mb={1}><LocationOnIcon fontSize="small" /> <Typography variant="body2">Islamabad, Pakistan</Typography></Box>
            <Box display="flex" alignItems="center" gap={1} mb={1}><PhoneIcon fontSize="small" /> <Typography variant="body2">+92 3347033613</Typography></Box>
            <Box display="flex" alignItems="center" gap={1}><EmailIcon fontSize="small" /> <Typography variant="body2">contact@datatricks.team@gmail.com</Typography></Box>
          </Box>

          {/* Social Media */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>Follow Us</Typography>
            <Box>
              <IconButton href="https://github.com/DataTricks-stack" color="inherit"><GitHubIcon /></IconButton>
              <IconButton href="https://www.instagram.com/datatricks.team?utm_source=qr&igsh=eWdlYnZibmRzNWFh" color="inherit"><InstagramIcon /></IconButton>
              <IconButton href="https://www.linkedin.com/company/datatricks/" color="inherit"><LinkedInIcon /></IconButton>
            </Box>
          </Box>

          {/* Legal Links that open Dialog */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>Legal</Typography>
            <Link component="button" onClick={() => openDialog("Privacy Policy", privacyPolicy)} color="inherit" underline="hover" display="block">Privacy Policy</Link>
            <Link component="button" onClick={() => openDialog("Terms of Service", termsOfService)} color="inherit" underline="hover" display="block">Terms of Service</Link>
            <Link component="button" onClick={() => openDialog("Cookie Policy", cookiePolicy)} color="inherit" underline="hover" display="block">Cookie Policy</Link>
          </Box>
        </Box>

        {/* Bottom Bar */}
        <Box sx={{ textAlign: 'center', marginTop: 3, opacity: 0.6 }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} DataTricks. All rights reserved. Made with ❤️ by Abdur Rahman - Cofounder @DataTricks
          </Typography>
        </Box>
      </Container>

      {/* ✅ Dialog Component */}
      <PolicyDialog open={dialogOpen} onClose={closeDialog} title={dialogContent.title} content={dialogContent.content} />
    </Box>
  );
};

export default Footer;
