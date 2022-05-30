import React from 'react';
import './Doctors.css' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMd , faHandHoldingUsd , faStethoscope} from '@fortawesome/free-solid-svg-icons';
const Doctors = () => {
    return (
        <>
            <div className='doctors'>
                <div className='doctors_container'>
                      <article className='doctors_content'>
                          <div className='doctors_content_top'>
                                <div className='icon'>
                                    <FontAwesomeIcon className='icon' icon={ faUserMd } />
                                </div>
                                <div className='text'>
                                    <h4>2500</h4> 
                                    <span>Projects completed</span>
                                </div>
                          </div>
                          <div className='doctors_content_bottom'>
                            <p>
                                Health is the level of functional and metabolic efficiency of a living organism. 
                            </p>
                          </div>
                      </article>  
                      <article className='doctors_content'>
                          <div className='doctors_content_top'>
                                <div className='icon'>
                                    <FontAwesomeIcon className='icon' icon={faHandHoldingUsd} />
                                </div>
                                <div className='text'>
                                    <h4>1100</h4> 
                                    <span>Qualified Staff</span>
                                </div>
                          </div>
                          <div className='doctors_content_bottom'>
                            <p>
                                Health is the level of functional and metabolic efficiency of a living organism. 
                            </p>
                          </div>
                      </article>  
                      <article className='doctors_content'>
                          <div className='doctors_content_top'>
                                <div>
                                    <FontAwesomeIcon className='icon' icon={ faStethoscope} />
                                </div>
                                <div className='text'>
                                    <h4>130</h4> 
                                    <span>Expert Doctor</span>
                                </div>
                          </div>
                          <div className='doctors_content_bottom'>
                            <p>
                                Health is the level of functional and metabolic efficiency of a living organism. 
                            </p>
                          </div>
                      </article>  
                     
                </div>
            </div>
        </>
    );
};

export default Doctors;