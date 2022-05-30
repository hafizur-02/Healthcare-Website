import React from 'react';
import './About.css' ;
import about_image from '../../images/single_01.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeartCirclePlus , faFileMedicalAlt } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <>
            <div className='about' id='about'>
                <div className='about_container'>
                    <div className='about_left'>
                        <div className='about_image'>
                            <img src={about_image} alt="" />
                        </div>
                       
                    </div>
                    <div className='about_right'>
                        <p className='intro'>
                            introducing
                        </p>
                        <h1>
                            We Are Always Ready to Help You & Your Family
                        </h1>
                        <p className='text'>
                                Health is the level of functional and metabolic efficiency of a living organism. In humans it is the ability of individuals to adapt and self-manage when facing physical, mental or social changes.
                        </p>
                        <div className='needs'>
                                <div className='needs_left'>
                                    <FontAwesomeIcon className='icon' icon={ faHeartCirclePlus } /> 
                                    <h3>
                                        Understand Your <br /> Needs
                                    </h3>
                                </div>  
                                <div className='needs_right'>
                                <FontAwesomeIcon className='icon' icon={ faFileMedicalAlt } />
                                    <h3>
                                    Understand Your <br /> Needs
                                    </h3>
                                </div> 
                        </div>
                        <p className='text'>
                                Health is the level of functional and metabolic efficiency of a living organism. In humans it is the ability of individuals to adapt.
                        </p>
                        <button className='about_btn'>get an appointment</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;