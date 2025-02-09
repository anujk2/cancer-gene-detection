import React from 'react';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import GeneDetectArea from './GeneDetectArea/GeneDetectArea';

const GeneDetect = () => {
    return (
        <>
            <HomeHeader/>
            <GeneDetectArea/>
            <Footer/>
        </>
    );
};

export default GeneDetect;