import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Service = ( props ) => {
    const{ id , serviceName , title , img } = props?.service ;
 
    return (
        <>
            <article className='service'>
                <div className='service_figure'>
                    <img src={img} alt="" />
                    <span className='service_icon'>
                        <FontAwesomeIcon className='icon' icon={  faBriefcaseMedical } />
                    </span>
                </div>
                <div className='service_text'>
                    <h3>{serviceName}</h3>
                    <p>{title}</p>
                    <Link className='service_btn' to={`/services/${id}`}>Read More</Link>
                </div>
            </article>

        </>
    );
};

export default Service;