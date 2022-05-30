import React, { useState } from 'react';
import './Login.css';
import brandLogo from '../../images/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGooglePlusG , faFacebookF, faSlack} from '@fortawesome/free-brands-svg-icons' ;
import { useLocation, useNavigate } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Login = () => {

    const{ signInGoogle , signInFacebook , signInWithEmail , emailHandler ,passwordHandler , user , setUser } = UseAuth() ;

    const[ signIn , setSignIn ] = useState(false);
    const location = useLocation();
    const redirect_url = location?.state?.from || '/home' ;
    const navigate = useNavigate() ;

    // sign in with google..
    const signinWithGoogleHandler = () => {
        signInGoogle()
        .then( (result) => {
            navigate(redirect_url) ;
        } ) 
        .catch((error) => {
            const errorMessage = error.message ;
        })
    }

    return (
        <>
           <div className='login' id='login'>
               <div className='login_container'>
                    <div className='login_left'>
                        <div className='brand_logo'>
                            <img src={brandLogo} alt="" />
                        </div>
                        <p>
                            Login using social media to get quick access
                        </p>
                        <button className='btnn facebook_btn' onClick={signInFacebook}>
                            <FontAwesomeIcon className='icon' icon={faFacebookF } />
                            Signin With Facebook
                        </button>
                        <button className='btnn google_btn' onClick={signinWithGoogleHandler}>
                            <FontAwesomeIcon className='icon' icon={ faGooglePlusG } />
                            Signin With Google
                        </button>
                    </div>
                    <div className='login_right'>
                         <form>
                             <input type="email" placeholder='Email Address' onBlur={emailHandler} required />
                             <br/>
                             <input type="password" placeholder='Password ' onBlur={passwordHandler} required />
                             <br/>
                             <input className='email_btn' onClick={signInWithEmail} type="submit" value="Login With Email" />
                         </form>
                         <a href="" className='forgot_btn'>Forgot password?</a>
                         <div className={ signIn ? 'sign_in_show' : 'sign_in'}>
                            <form className='sign_up_form'>
                                <input className='signin_input' type="text" placeholder='Name' required />
                                <br/>
                                <input  className='signin_input' type="email" placeholder='Email Address' required />
                                <br/>
                                <input  className='signin_input' type="password" placeholder='Password' required />
                                <br/>
                                <input  className='email_btn sign_up_btn' type="submit" value="Sign Up With Email" />
                            </form>
                            <button onClick={() => setSignIn(!signIn)} className='have_account_btn ' >Already Have An Account?</button>
                         </div>
                         <button onClick={() => setSignIn(!signIn)} className='new_user_btn'>New User</button>
                    </div>
               </div>
           </div> 
        </>
    );
};

export default Login;