import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { BiChevronsDown } from "react-icons/bi";
import './Hero.css';

const Hero = () => {
    // ----fore type writer----------
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <div id="hero" className='hero_section'>

            <div className="container">
                <div className='text-center text-white'>
                    <h2 >Welcome</h2>
                    <h3 className='text-center text-white'>I am {' '}<Typewriter
                        words={['Freelancer', 'Graphic Designer', 'Logo Designer']}
                        loop={Infinity}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onLoopDone={handleDone}
                    /></h3>
                    <p className='mt-4 mb-5'>based in Los Angeles, California.</p>
                    <button>Hire me</button>
                    <div className='animated'>
                        <a href='#about' ><BiChevronsDown  className='animated_icon'/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;