import React from 'react';
import project1 from '../../../Image/portfolio-main/p-1.jpg';
import project2 from '../../../Image/portfolio-main/p-2.jpg';
import project3 from '../../../Image/portfolio-main/p-3.jpg';
import project4 from '../../../Image/portfolio-main/p-4.jpg';
import project5 from '../../../Image/portfolio-main/p-5.jpg';
import project6 from '../../../Image/portfolio-main/p-6.jpg';
import project7 from '../../../Image/portfolio-main/p-7.jpg';
import project8 from '../../../Image/portfolio-main/p-8.jpg';
import project9 from '../../../Image/portfolio-main/p-9.jpg';
import project10 from '../../../Image/portfolio-main/p-10.jpg';
import project11 from '../../../Image/portfolio-main/p-11.jpg';
import project12 from '../../../Image/portfolio-main/p-12.jpg';
import project13 from '../../../Image/portfolio-main/p-13.jpg';
import project14 from '../../../Image/portfolio-main/p-14.jpg';
import image4 from '../../../Image/portfolio/41.jpg';
import image5 from '../../../Image/portfolio/13.jpg';
import image6 from '../../../Image/portfolio/40.jpg';
import image1 from '../../../Image/portfolio/6.jpg';
import image2 from '../../../Image/portfolio/7.jpg';
import image3 from '../../../Image/portfolio/9.jpg';
import image23 from '../../../Image/portfolio/20.jpg';
import image24 from '../../../Image/portfolio/21.jpg';
import image25 from '../../../Image/portfolio/22.jpg';
import image26 from '../../../Image/portfolio/23.jpg';
import image27 from '../../../Image/portfolio/24.jpg';
import image28 from '../../../Image/portfolio/25.jpg';
import image20 from '../../../Image/portfolio/19.jpg';
import image21 from '../../../Image/portfolio/3.jpg';
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
                <div className='portfolio mt-5'>
                    <div className="row g-4 ">
                        {/* -------======----------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={project1} alt="" />
                        </div>
                        {/* -------======----------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={project2} alt="" />
                        </div>
                        {/* -------======----------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={project3} alt="" />
                        </div>
                        {/* -------======----------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={project4} alt="" />
                        </div>
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={image4} alt="" />
                        </div>
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={image5} alt="" />
                        </div>
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={image6} alt="" />
                        </div>
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={project7} alt="" />
                        </div>
                 
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={image1} alt="" />
                        </div>
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={image2} alt="" />
                        </div>
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={image3} alt="" />
                        </div>
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={image23} alt="" />
                        </div>
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={project10} alt="" />
                        </div>
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={project11} alt="" />
                        </div>
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={project12} alt="" />
                        </div>
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={project13} alt="" />
                        </div>
                           {/* --------==========--------- */}
                           <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={project14} alt="" />
                        </div>
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={image24} alt="" />
                        </div>
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={image25} alt="" />
                        </div>
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={image26} alt="" />
                        </div>
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={image27} alt="" />
                        </div>
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={image28} alt="" />
                        </div>
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={image20} alt="" />
                        </div>
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={image21} alt="" />
                        </div>
                            {/* --------==========--------- */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={project5} alt="" />
                        </div>
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={project6} alt="" />
                        </div>
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={project8} alt="" />
                        </div>
                        {/* --------==========--------- */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src={project9} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Portfolio;