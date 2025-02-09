import React from 'react';
import HomeAboutArea from './HomeAboutArea/HomeAboutArea';

import HomeCta from './HomeCta/HomeCta';
import HomeFact from './HomeFact/HomeFact';
import HomeFooter from './HomeFooter/HomeFooter';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeHeroSection from './HomeHeroSection/HomeHeroSection';
import HomeOurTeam from './HomeOurTeam/HomeOurTeam';



const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeHeroSection/>
            <HomeAboutArea/>
            {/* <HomeServices/> */}
            <HomeOurTeam/>
            <HomeFact/>
            {/* <HomePricing/> */}
            <HomeCta/>
            {/* <HomeBlogs/> */}
            <HomeFooter/>
        </>
    );
};

export default Home;