import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ServiceDetails.css' ;


const ServiceDetails = () => {
    const[services , setServices ] = useState([]) ;
    const{ id } = useParams() ;
    const navigate = useNavigate() ;
    
    fetch('/servicesFakeData.json')
    .then( res => res.json())
    .then(data => setServices(data)) ;

    // get the specific service..
    const service = services.find( service => service?.id === id ) 

    const serviceHandler = () => {
        navigate(-1) ;
    }
    return (
        <>
           <div className='serviceDetails'>
                <div className='serviceDetails_container'>
                      <div className='serviceDetails_img'>
                         <img src={service?.img} alt="" /> 
                      </div>
                      <h3>{service?.serviceName}</h3>
                       <p>{service?.discription}</p>
                       <button onClick={serviceHandler} className='serviceDetails_btn'>Go to Services</button>
                </div>
           </div>
        </>
    );
};

export default ServiceDetails;