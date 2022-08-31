import React from 'react';
import AnimatedNumbers from "react-animated-numbers";
import profile from '../../../../Image/profile.png'
import './About.css'

const About = () => {
    return (
        <div id="about" className='about_section'>
            <div className="container">
                <div className='text-center about-title'>
                    <h2>About Me</h2>
                    <p >Know Me More </p>
                </div>
                <div className='about_content mt-5'>
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-5 col-12">
                            <img src={ profile } alt="" />
                        </div>
                        <div className="col-lg-7  col-12 text-center text-md-start">
                            <h2 >I'm <span style={{ color: '#20C997' }}>Raj sharkar ove</span> Graphics & Web Developer</h2>
                            <p className='mt-3'>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p>Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
                            <div>   <p className='border-bottom p-1'><span className='fw-bold'>Name:</span> Raj sharkar ove</p>
                                <p className='border-bottom p-1'><span className='fw-bold'>Email:</span> <span style={{ color: '#20C997' }}>vrajon432@gmail.com</span></p>
                                <p className='border-bottom p-1'><span className='fw-bold'>Age:</span> 28</p>
                                <p><span className='fw-bold'>From:</span> Saver, Dhaka</p></div>
                        </div>
                    </div>
                </div>
                <div className='experience mt-5'>
                    <div className="row g-4">
                        <div className="col-md-3 col-sm-6 col-12 text-center text-md-left">
                            <div className='fact-item'>
                                <div className='fact-content-area'>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <span >
                                            <AnimatedNumbers
                                                animateToNumber={4}
                                                fontStyle={{ fontSize: 40, fontWeight: 700, color: '#6c757d', lineHeight: 1, }}
                                                configs={[
                                                    {
                                                        mass: 1,
                                                        tension: 220,
                                                        friction: 100,
                                                    },
                                                    {
                                                        mass: 1,
                                                        tension: 180,
                                                        friction: 130,
                                                    },
                                                    { mass: 1, tension: 280, friction: 90 },
                                                    {
                                                        mass: 1,
                                                        tension: 180,
                                                        friction: 135,
                                                    },
                                                    { mass: 1, tension: 280, friction: 90 },
                                                ]}
                                            ></AnimatedNumbers>
                                        </span>
                                        <h3>+</h3>
                                    </div>
                                    <p>Years Experiance </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 text-center text-md-left">
                            <div className='fact-item'>
                                <div className='fact-content-area'>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <span >
                                            <AnimatedNumbers
                                                animateToNumber={250}
                                                fontStyle={{ fontSize: 40, fontWeight: 700, color: '#6c757d', lineHeight: 1, }}
                                                configs={[
                                                    {
                                                        mass: 1,
                                                        tension: 220,
                                                        friction: 100,
                                                    },
                                                    {
                                                        mass: 1,
                                                        tension: 180,
                                                        friction: 130,
                                                    },
                                                    { mass: 1, tension: 280, friction: 90 },
                                                    {
                                                        mass: 1,
                                                        tension: 180,
                                                        friction: 135,
                                                    },
                                                    { mass: 1, tension: 280, friction: 90 },
                                                ]}
                                            ></AnimatedNumbers>
                                        </span>
                                        <h3>+</h3>
                                    </div>
                                    <p>Happy Clients </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 text-center text-md-left">
                            <div className='fact-item'>
                                <div className='fact-content-area'>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <span >
                                            <AnimatedNumbers
                                                animateToNumber={650}
                                                fontStyle={{ fontSize: 40, fontWeight: 700, color: '#6c757d', lineHeight: 1, }}
                                                configs={[
                                                    {
                                                        mass: 1,
                                                        tension: 220,
                                                        friction: 100,
                                                    },
                                                    {
                                                        mass: 1,
                                                        tension: 180,
                                                        friction: 130,
                                                    },
                                                    { mass: 1, tension: 280, friction: 90 },
                                                    {
                                                        mass: 1,
                                                        tension: 180,
                                                        friction: 135,
                                                    },
                                                    { mass: 1, tension: 280, friction: 90 },
                                                ]}
                                            ></AnimatedNumbers>
                                        </span>
                                        <h3>+</h3>
                                    </div>
                                    <p>Projects Done </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 text-center text-md-left">
                            <div className='fact-item'>
                                <div className='fact-content-area'>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <span >
                                            <AnimatedNumbers
                                                animateToNumber={38}
                                                fontStyle={{ fontSize: 40, fontWeight: 700, color: '#6c757d', lineHeight: 1, }}
                                                configs={[
                                                    {
                                                        mass: 1,
                                                        tension: 220,
                                                        friction: 100,
                                                    },
                                                    {
                                                        mass: 1,
                                                        tension: 180,
                                                        friction: 130,
                                                    },
                                                    { mass: 1, tension: 280, friction: 90 },
                                                    {
                                                        mass: 1,
                                                        tension: 180,
                                                        friction: 135,
                                                    },
                                                    { mass: 1, tension: 280, friction: 90 },
                                                ]}
                                            ></AnimatedNumbers>
                                        </span>
                                        <h3>+</h3>
                                    </div>
                                    <p>Get Awards </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;