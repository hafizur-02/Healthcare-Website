import React from 'react';
import './Error.css';
import errorImg from '../../images/404 error lost in space-pana.svg'
const Error = () => {
    return (
        <>
           <div className='error'>
               <div className='error_container'>
                    <div className='error_image'>
                        <img src={errorImg} alt="" />
                    </div>
               </div>
           </div>    
        </>
    );
};

export default Error;