import React from 'react';
import Carusel from './Carusel/Carusel';
import Contact from './Contact/Contact';
import About from './Hero/About/About';
import Hero from './Hero/Hero';
import Portfolio from './Portfolio/Portfolio';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Portfolio></Portfolio>
            <Carusel></Carusel>
            <Contact></Contact>
        </div>
    );
};

export default Home;