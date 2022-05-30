import React from 'react';
import './Footer.css' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone , faEnvelope , faClock ,   } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn , faTwitter , faGooglePlusG , faFacebookF} from '@fortawesome/free-brands-svg-icons' ;
import news1 from '../../images/post-001-720x544.jpg';
import news2 from '../../images/post-002-720x544.jpg' ;
import news3 from '../../images/post-003-720x544.jpg' ;

const Footer = () => {
    return (
        <>
            <footer id='footer'>
                <div className='fast_footer'>
                    <div className='fast_footer_container'>
                        <article className='fast_footer_content'>
                              <div className='fast_footer_content_left'>
                                <FontAwesomeIcon className='icon' icon={ faPhone } />
                              </div>  
                              <div className='fast_footer_content_right'>
                                    <h4>+123 456 78910 / 11</h4>
                                    <h5>Have a question? call us now</h5>
                              </div>  
                        </article>
                        <article className='fast_footer_content'>
                              <div className='fast_footer_content_left'>
                                <FontAwesomeIcon className='icon' icon={ faEnvelope } />
                              </div>  
                              <div className='fast_footer_content_right'>
                                    <h4>info@domainname.com</h4>
                                    <h5>Need support? Drop us an email</h5>
                              </div>  
                        </article>
                        <article className='fast_footer_content'>
                              <div className='fast_footer_content_left'>
                                <FontAwesomeIcon className='icon' icon={  faClock } />
                              </div>  
                              <div className='fast_footer_content_right'>
                                    <h4>Mon – Sat 07:00 – 21:00</h4>
                                    <h5>We are open on</h5>
                              </div>  
                        </article>
                    </div>
                </div>

                {/*  second footer */}
                <div className='second_footer'>
                    <div className='second_footer_container'>
                        <article className='second_footer_content'>
                            <h3>About Delmont</h3>  
                            <p>
                                Our Clinic has grown to provide a world class facility for the clinic advanced restorative dentistry.
                                <br/>
                                <br/>
                                We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.
                            </p>
                            <ul className='social_icon'>
                                <li>
                                     <FontAwesomeIcon className='icon' icon={ faFacebookF } />
                                </li>
                                <li>
                                     <FontAwesomeIcon className='icon' icon={ faGooglePlusG  } />
                                </li>
                                <li>
                                     <FontAwesomeIcon className='icon' icon={ faTwitter } />
                                </li>
                                <li>
                                     <FontAwesomeIcon className='icon' icon={ faLinkedinIn } />
                                </li>
                            </ul>
                        </article>
                        <article className='second_footer_content'>
                            <h3>Quick Links</h3>
                            <ul className='quick_link'>
                                 <li>
                                    <a href="">Make Appointments</a>     
                                 </li>   
                                 <li>
                                    <a href="">Before & After</a>     
                                 </li>   
                                 <li>
                                    <a href="">Customer Treatments</a>     
                                 </li>   
                                 <li>
                                    <a href="">Our Doctors Team</a>     
                                 </li>   
                                 <li>
                                    <a href="">Departments Services</a>     
                                 </li>   
                                 <li>
                                    <a href="">About our Clinic</a>     
                                 </li>   
                                 <li>
                                    <a href="">Contact Us</a>     
                                 </li>   
                            </ul>
                        </article>
                        <article className='second_footer_content'>
                            <h3>Latest News</h3>
                            <article className='news'>
                                <div className='news_left'>
                                    <img src={news1} alt="" />
                                </div>
                                <div className='news_right'>
                                    <span>April 1, 2019</span>
                                    <br/>
                                    <a href="">How much aspirin to take for stroke</a>
                                </div>
                            </article>
                            <article className='news'>
                                <div className='news_left'>
                                    <img src={news2} alt="" />
                                </div>
                                <div className='news_right'>
                                    <span>April 1, 2019</span>
                                    <br/>
                                    <a href="">Implant Surgical equipment technology</a>
                                </div>
                            </article>
                            <article className='news'>
                                <div className='news_left'>
                                    <img src={news3} alt="" />
                                </div>
                                <div className='news_right'>
                                    <span>April 1, 2019</span>
                                    <br/>
                                    <a href="">The Benefits of Middle-Age Fitness</a>
                                </div>
                            </article>
                        </article>

                        <article className='second_footer_content'>
                            <h3>Our Services</h3>
                            <ul className='services_list'>
                                <li>
                                    <a href="">Surgery</a>
                                </li>
                                <li>
                                    <a href="">Cardiology</a>
                                </li>
                                <li>
                                    <a href="">Pediatric</a>
                                </li>
                                <li>
                                    <a href="">Anesthesiology</a>
                                </li>
                                <li>
                                    <a href="">Psychological</a>
                                </li>
                                <li>
                                    <a href="">Orthopedics</a>
                                </li>
                                <li>
                                    <a href="">Oncology</a>
                                </li>
                                <li>
                                    <a href="">Dermatology</a>
                                </li>
                            </ul>
                            <div className='subscribe'>
                                <input type="email" placeholder='Enter Your Email' />
                                <button>
                                    <FontAwesomeIcon className='sub_btn_icon' icon={ faEnvelope } />
                                </button>
                            </div>
                        </article>
                    </div>
                </div>

                <div className='third_footer'>
                    <div className='third_footer_container'>
                        <p>Copyright © 2022 Delmont Theme by <span>Hafizur Rahman</span></p>
                    </div> 
                </div>
            </footer>
        </>
    );
};

export default Footer;