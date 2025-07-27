// src/pages/HomePage.jsx
import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, Divider } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
      <HeroSection/>
     
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


     <Button sx={{padding:'16px 12px', bgcolor:'#eee', position:'fixed', bottom:'50px', right:'50px', borderRadius:'50%', cursor:'pointer',}} component='a' href='#' ><ArrowUpwardIcon color='primary' sx={{fontWeight:'bold'}}/></Button>


    </Box>
  );
};

export default HomePage;
