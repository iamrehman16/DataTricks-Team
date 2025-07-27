import { Container, Typography, Box, Avatar } from "@mui/material";

const AboutUsSection = () => {
  return (
    <Container id="about" data-aos="fade-up" sx={{ minHeight: "100vh", py: 10 }}>
      
      {/* Main Title */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
         About Us
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

      {/* Introduction */}
      <Typography
        variant="body1"
        sx={{
          mb: 5,
          opacity: 0.9,
          fontSize: "1.05rem",
          lineHeight: 1.9
        }}
      >
        At <b>DataTricks</b>, we believe that innovation thrives in adversity.  
        Based in Pakistan, we have grown out of a landscape where opportunities are scarce,  
        yet dreams are limitless. Our journey is fueled by passion, resilience,  
        and an unshakable belief that technology can transform lives.  
        Every line of code we write, every product we build, is driven by our mission  
        to empower businesses, nurture local talent, and make an impact—locally and globally.
      </Typography>

      {/* Motivational Quote */}
      <Typography
        variant="h5"
        sx={{ fontStyle: "italic", opacity: 0.85, mb: 6 }}
      >
        "Great things are done by a series of small things brought together." – Vincent Van Gogh
      </Typography>

      {/* Founder Message */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
        //   backgroundColor: "#f5f5f5",
          borderRadius: 3,
          p: 3,
        //   boxShadow: 2
        }}
      >
        {/* Founder Image */}
        <Avatar
          src="./Hussain.jpeg"
          alt="Hussain Ali"
          sx={{ width: 100, height: 100, boxShadow: 2 }}
        />

        {/* Message */}
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Message from the Founder – Hussain Ali
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.85, lineHeight: 1.7, mt: 1 }}>
            "When I started this journey, I envisioned a platform where young developers  
            could challenge the norms and build solutions that matter.  
            At DataTricks, we’re not just writing code—we’re shaping the future,  
            empowering our people, and proving that with the right mindset,  
            nothing is out of reach."
          </Typography>
        </Box>
      </Box>

    </Container>
  );
};

export default AboutUsSection;
