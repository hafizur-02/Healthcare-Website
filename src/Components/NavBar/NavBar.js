import React, { useState } from 'react';
import './NavBar.css';
import brand_logo from '../../images/logo-white.png' ;
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faTimes } from '@fortawesome/free-solid-svg-icons';
import UseFirebase from '../../Hooks/UseFirebase';

const NavBar = () => {
    const[ hamburgerIcon , setHamburgerIcon ] = useState(false);
    const{ user , logOut } = UseFirebase() ;

    return (
        <>
            <div className='nav_bar'>
                <div className='nav_bar_container '>
                        <div className='brand_logo'>
                            <Link className='link' to={'/home'}>
                                <img src={brand_logo} alt="" />
                            </Link>
                        </div>
                        <ul className={ hamburgerIcon ? "nav_menu mobile_nav_menu" : "nav_menu" }>
                        <FontAwesomeIcon  onClick={() => setHamburgerIcon(!hamburgerIcon)} className='close_icon' icon={ faTimes } />
                            <li>
                                <HashLink onClick={() => setHamburgerIcon(!hamburgerIcon)}  className='link' to={'/home#home'}>Home</HashLink>
                            </li>
                            <li>
                                <HashLink onClick={() => setHamburgerIcon(!hamburgerIcon)} className='link' to={'/about#about'}>About</HashLink>
                            </li>
                            <li>
                                <HashLink onClick={() => setHamburgerIcon(!hamburgerIcon)}  className='link' to={'/services#services'}>Services</HashLink>
                            </li>
                            <li>
                                <HashLink onClick={() => setHamburgerIcon(!hamburgerIcon)} className='link' to={'/testimonial#testimonial'}>Testimonial</HashLink>
                            </li>
                            <li>
                                <HashLink onClick={() => setHamburgerIcon(!hamburgerIcon)} className='link' to={'/contact#footer'}>Contact Us</HashLink>
                            </li>
                            
                            {
                                user?.email ? <button className='log_out_btn' onClick={logOut}>Sign Out</button> :  
                                <li>
                                <HashLink onClick={() => setHamburgerIcon(!hamburgerIcon)} to={'/login#login'} className='link'> Sign In</HashLink>
                            </li>
                            }
                            <div>
                            {
                                user.email ? <div className='nav_bar_profile'> <img src={user?.photoURL} alt="" /></div> : null
                            }
                        </div>
                        </ul>
                        <button className='hamburger_icon'>
                            <FontAwesomeIcon  onClick={() => setHamburgerIcon(!hamburgerIcon)} className='icon' icon={ faBars} />
                        </button>
                        
                </div>
            </div>
        </>
    );
};

export default NavBar;