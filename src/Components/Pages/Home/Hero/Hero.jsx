import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { BiChevronsDown } from "react-icons/bi";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './Hero.css';


const Hero = () => {
    // ----fore type writer----------
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    const particlesInit = async (main) => {
        await loadFull(main);
      };
      const particlesLoaded = (container) => {};
    return (
        <div id="hero" className='hero_section'>
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.9,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
            <div className="container">
                <div className='text-center text-white'>
                    <h2 >Welcome</h2>
                    <h3 className='text-center text-white'>I am {' '}  <span style={{ color: '#20C997', fontWeight: 'bold' }}><Typewriter
                        words={['Freelancer', 'Graphic Designer', 'Logo Designer']}
                        loop={Infinity}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onLoopDone={handleDone}
                    /></span></h3>
                    <p className='mt-4 mb-5'>Savar,Dhaka.</p>
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