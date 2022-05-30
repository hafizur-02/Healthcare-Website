import React from 'react';
import './Header.css' ;
import header_image from '../../images/slide-img-04.png';
import header_icon from '../../images/slider-icon001.png';
import About from '../About/About';
import Testimonial from '../Testimonial/Testimonial';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services/Services';
import Footer from '../Footer/Footer';
const Header = () => {
    return (
        
        <>
            <div className='header' id='home'>
                <div className='header_container'>
                    <div className='header_left'>
                        <div className='header_left_icon'>
                            <img src={header_icon} alt="" />
                            <p>We give  you the best!</p>
                        </div>
                        <h1>
                            we provide medical services that you  can trust
                        </h1>
                        <p>
                            I realized that becoming a doctor, i can only help a small 
                            community.But by becoming a doctor, i can help my whole country.
                        </p>
                        <button className='header_btn1'>Get An Appointment!</button>
                        <button className='header_btn2'>See How We can Help</button>
                    </div>
                    <div className='header_right'>
                        <div className='header_image'>
                            <img src={header_image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <About></About>
            <Services></Services>
            <Doctors></Doctors>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </>
    );
};

export default Header;