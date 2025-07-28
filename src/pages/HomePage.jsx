// src/pages/HomePage.jsx
import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, Divider } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import TechnologyStack from '../components/TechnologyStackSection';
import OurProjects from '../components/ProjectsSection';
import Performance from '../components/PerformanceSection';
import ContactUs from '../components/ContactUs';
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/MotiveSection';
import ServicesSection from '../components/ServiceSection';
import TeamSection from '../components/TeamSection';
import WhyChooseUsSection from '../components/WhyChoseUs';
import CallToActionSection from '../components/CallToActionSection';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const HomePage = () => {

    useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // duration=animation speed
    }, []);

  return (
    <Box id="home" sx={{ flexGrow: 1 }}>
      
      {/* Hero Section */}
      <Box data-aos='fade-up' sx={{ position: "relative", height: "100vh" }}>
        <img src="/inode.png" className="floating" style={{ top: "20%", left: "10%", width: 60 }} />
        <img src="/iunreal.png" className="floating" style={{ top: "68%", left: "12%", width: 60 }} />
        <img src="/cloud.png" className="floating" style={{ top: "40%", left: "18%", width: 80 }} />
        <img src="/idea.png" className="floating" style={{ top: "25%", left: "85%", width: 60 }} />
        <img src="/code.png" className="floating" style={{ top: "70%", left: "68%", width: 60 }} />
        <img src="/iexpress.png" className="floating" style={{ top: "50%", left: "80%", width: 60, animationDelay: "2s" }} />
        <HeroSection />
      </Box>

      
     
      {/* motive section */}
      <AboutUsSection/>

      <Divider sx={{ my: 2, width:'80%', mx:'auto' }} />
       {/* Services */}
       <ServicesSection/>
      

      <Divider sx={{ my: 2, width:'80%', mx:'auto' }} />
      {/* Technology stack */}
      <TechnologyStack/>

      <Divider sx={{ my: 2, width:'80%', mx:'auto' }} />
        {/* our projects */}
        <OurProjects/>

      <Divider sx={{ my: 2, width:'80%', mx:'auto' }} />
        {/* our performance */}
        <Performance/>

      <Divider sx={{ my: 2, width:'80%', mx:'auto' }} />
          {/* Our team */}
        <TeamSection/>



      <Divider sx={{ my: 2, width:'80%', mx:'auto' }} />
          {/* why choose us */}
          <WhyChooseUsSection/>


      {/* call to action */}
      <CallToActionSection/>
      <ContactUs/>


      <Button
        sx={{
          padding: '14px',
          backgroundColor: '#1976d2',
          color: 'white',
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          borderRadius: '50%',
          minWidth: 'auto',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#1565c0',
            transform: 'scale(1.1)',
            boxShadow: '0 6px 15px rgba(0,0,0,0.3)',
          },
          zIndex: 1000,
        }}
        component="a"
        href="#"
      >
        <ArrowUpwardIcon sx={{ fontSize: 28, fontWeight: 'bold' }} />
      </Button>


    </Box>
  );
};

export default HomePage;
