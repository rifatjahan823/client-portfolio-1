import React from 'react';
import tesimonialimg1 from '../../../Image/client-sm-1.jpg';
import tesimonialimg2 from '../../../Image/client-sm-2.jpg';
import tesimonialimg3 from '../../../Image/client-sm-3.jpg';
import tesimonialimg4 from '../../../Image/client-sm-4.jpg';
import { FaStar } from "react-icons/fa";
import { Pagination } from 'swiper';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Carusel.css'

const Carusel = () => {
    return (
        <div id="client" className='carusel_section'>
            <div className="container">
                <div className='text-center about-title carusel_top_title'>
                    <h2>testimonial</h2>
                    <p >client speak</p>
                </div>
                <div className='mt-5'>
                    <Swiper
                        // install Swiper modules
                        spaceBetween={30}
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        loop={true}
                        autoplay={{ delay: 3000 }}
                        breakpoints={{
                            991: {
                                slidesPerView: 2,
                            },
                            0: {
                                slidesPerView: 1,
                            },
                        }}
                    >

                        <div className='container text-center'>
                            <SwiperSlide>
                                <div className='carousel-content'>
                                    <div className='d-flex align-items-center carusel_title'>
                                        <img src={tesimonialimg1} alt="" />
                                        <div>
                                        <h6>Chris Tom</h6>
                                        <p>User from UK</p>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <p>
                                        “Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.”
                                        </p>
                                    </div>
                                    <div>
                                        <FaStar className='carusel_star'/>
                                        <FaStar className='carusel_star'/>
                                        <FaStar className='carusel_star'/>
                                        <FaStar className='carusel_star'/>
                                        <FaStar className='carusel_star'/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='carousel-content'>
                                    <div className='d-flex align-items-center carusel_title'>
                                        <img src={tesimonialimg2} alt="" />
                                        <div>
                                        <h6>Chris Tom</h6>
                                        <p>User from UK</p>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <p>
                                        "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.”
                                        </p>
                                    </div>
                                    <div>
                                        <FaStar className='carusel_star'/>
                                        <FaStar className='carusel_star'/>
                                        <FaStar className='carusel_star'/>
                                        <FaStar className='carusel_star'/>
                                        <FaStar className='carusel_star'/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='carousel-content'>
                                    <div className='d-flex align-items-center carusel_title'>
                                        <img src={tesimonialimg3} alt="" />
                                        <div>
                                        <h6>Chris Tom</h6>
                                        <p>User from UK</p>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <p>
                                        "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.”
                                        </p>
                                    </div>
                                    <div>
                                        <FaStar className='carusel_star'/>
                                        <FaStar className='carusel_star'/>
                                        <FaStar className='carusel_star'/>
                                        <FaStar className='carusel_star'/>
                                        <FaStar className='carusel_star'/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='carousel-content'>
                                    <div className='d-flex align-items-center carusel_title'>
                                        <img src={tesimonialimg4} alt="" />
                                        <div>
                                        <h6>Chris Tom</h6>
                                        <p>User from UK</p>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <p>
                                        "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.”
                                        </p>
                                    </div>
                                    <div>
                                        <FaStar className='carusel_star'/>
                                        <FaStar className='carusel_star'/>
                                        <FaStar className='carusel_star'/>
                                        <FaStar className='carusel_star'/>
                                        <FaStar className='carusel_star'/>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Carusel;