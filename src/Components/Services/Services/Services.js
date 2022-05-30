import './Services.css' ;
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const[ services , setServices ] = useState([])
    useEffect( () => {
        fetch('servicesFakeData.json')
        .then( res => res.json())
        .then( data => setServices( data ))
    }, []);
    return (
        <>
           <div className='services' id='services'>
                <div className='services_title'>
                    <p>OUR SERVICES</p>
                    <h2>Special High-quality Services</h2>
                </div>    
                <div className='services_container'>
                    {
                    services.map( service => <Service
                    key={service?.id}
                    service={ service }
                    ></Service>)
                    }
                </div>
           </div>
           <hr className="hr_row " />            
        </>
    );
};

export default Services;