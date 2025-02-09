import React from 'react';

import Footer from '../../components/Shared/Footer';

import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';



import AboutArea from './AboutArea/AboutArea';



const AboutUs = () => {
   return (
      <>
         <HomeHeader/>
         {/* <CommonPageHeader title="About Us" subtitle="About" /> */}
         <AboutArea/>
         {/* <AboutCounter/> */}
         {/* <HomeOurTeam/> */}
         {/* <HomeFact/> */}
         {/* <AboutTestimonial/> */}
         {/* <AboutAnalysis/> */}
         <Footer/>
      </>
   );
};

export default AboutUs;