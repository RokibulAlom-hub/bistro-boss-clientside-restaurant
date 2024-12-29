import React from 'react';
import Banner from '../Banner/Banner';
import Slider from '../Slider/Slider';
import Menu from '../MenuItems/Menu';
import Features from '../FeatturesSection/Features';
import Testomonial from '../Testomonial/Testomonial';

const Home = () => {
    return (
        <div className='space-y-6'>
            <Banner></Banner>
            <Slider></Slider>
            <Menu></Menu>
            <Features></Features>
            <Testomonial></Testomonial>
        </div>
    );
};

export default Home;