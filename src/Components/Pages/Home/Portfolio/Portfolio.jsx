import React from 'react';
import project1 from '../../../Image/project-1.jpg';
import project2 from '../../../Image/project-2.jpg';
import project3 from '../../../Image/project-3.jpg';
import project4 from '../../../Image/project-4.jpg';
import project5 from '../../../Image/project-5.jpg';
import project6 from '../../../Image/project-6.jpg';
import project7 from '../../../Image/project-7.jpg';
import { Link } from 'react-router-dom';
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div id="portfolio" className='portfolio_section'>
            <div className="container">
                <div className='text-center about-title portfolio_title'>
                    <h2>portfolio</h2>
                    <p >My Work</p>
                </div>
                <div className='portfolio mt-5 d-none d-lg-block'>
                    <div className="row g-4 ">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="portfilo_content mb-4">
                                <img className='img-fluid' src={project1} alt="" />
                            </div>
                            <div className="portfilo_content">
                                <img className='img-fluid' src={project4} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="portfilo_content mb-4">
                                <img className='img-fluid' src={project2} alt="" />
                            </div>
                            <div className="portfilo_content">
                                <img className='img-fluid' src={project7} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="portfilo_content mb-4">
                                <img className='img-fluid' src={project3} alt="" />
                            </div>
                            <div className="portfilo_content mb-4">
                                <img className='img-fluid' src={project6} alt="" />
                            </div>
                            <div className="portfilo_content mb-4">
                                <img className='img-fluid' src={project5} alt="" />
                            </div>
                        </div>
                    </div>
                    <Link to ="/allportfolio"><button className="btn form-btn mt-5 m-auto d-block" type="submit">load more</button></Link>
                </div>
                <div className='portfolio mt-5 d-block d-lg-none'>
                <div className="row g-4 ">
                        <div className="col-md-6 col-12">
                        <div className="portfilo_content mb-4">
                                <img className='img-fluid' src={project1} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                        <div className="portfilo_content mb-4">
                                <img className='img-fluid' src={project4} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                        <div className="portfilo_content mb-4">
                                <img className='img-fluid' src={project2} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                        <div className="portfilo_content mb-4">
                                <img className='img-fluid' src={project7} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                        <div className="portfilo_content mb-4">
                                <img className='img-fluid' src={project3} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                        <div className="portfilo_content mb-4">
                                <img className='img-fluid' src={project6} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                        <div className="portfilo_content mb-4">
                                <img className='img-fluid' src={project5} alt="" />
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Portfolio;