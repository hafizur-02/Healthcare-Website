import React from 'react';
import './Testimonial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft , faStar } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const Testimonial = () => {
    return (
        <>
            <div className='testimonial' id='testimonial'>
                <Swiper 
                    pagination={{
                        dynamicBullets: true,
                      }}
                    modules={[Pagination]}
                    className="mySwiper testimonial_container"
                >
                    <SwiperSlide>
                        <div className='testimonial_content'>
                            <div className='quote_icon'>
                                <FontAwesomeIcon className='icon' icon={ faQuoteLeft } /> 
                            </div>
                            <blockquote>
                                The doctors and nurses and aides were excellent. The food was excellent. I am feeling fine and very lucky, back to my old self again and it feels great. Thank God for clinics such as yours. I appreciate all your kindness and good care you gave me is beyond my expectations they wonder for me.
                            </blockquote>
                            <div className='star_ratting'>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon className='icon' icon={ faStar } /> 
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className='icon' icon={ faStar } /> 
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className='icon' icon={ faStar } /> 
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className='icon' icon={ faStar } /> 
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className='icon' icon={ faStar } /> 
                                    </li>
                                </ul>
                            </div>
                            <div className='testimonial_caption'>
                                <h5> Raymon Myers</h5>
                                <label>Patient</label>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='testimonial_content'>
                            <div className='quote_icon'>
                                <FontAwesomeIcon className='icon' icon={ faQuoteLeft } /> 
                            </div>
                            <blockquote>
                                Prior to my stay at Delmont, I was aware of their stellar reputation and multiple friends commented about how lucky I was to have my surgery scheduled there. As a result my expectations were high and yet the kind and professional staff with excellent patient care surpassed them
                            </blockquote>
                            <div className='star_ratting'>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon className='icon' icon={ faStar } /> 
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className='icon' icon={ faStar } /> 
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className='icon' icon={ faStar } /> 
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className='icon' icon={ faStar } /> 
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className='icon' icon={ faStar } /> 
                                    </li>
                                </ul>
                            </div>
                            <div className='testimonial_caption'>
                                <h5> RAshley Foster </h5>
                                <label>Patient</label>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='testimonial_content'>
                            <div className='quote_icon'>
                                <FontAwesomeIcon className='icon' icon={ faQuoteLeft } /> 
                            </div>
                            <blockquote>
                                Great co workers, really good environment and excellent patient care. They are continuously innovating themselves which is why they remain a premier dental clinic.This was the cleanest medical establishment I've ever been in. They just loved the welcoming and warm atmosphere in there.
                            </blockquote>
                            <div className='star_ratting'>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon className='icon' icon={ faStar } /> 
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className='icon' icon={ faStar } /> 
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className='icon' icon={ faStar } /> 
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className='icon' icon={ faStar } /> 
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className='icon' icon={ faStar } /> 
                                    </li>
                                </ul>
                            </div>
                            <div className='testimonial_caption'>
                                <h5> Alan  Sears</h5>
                                <label>Patient</label>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </>
    );
};

export default Testimonial;