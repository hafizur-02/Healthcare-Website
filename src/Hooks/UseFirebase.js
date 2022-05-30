import {  getAuth, signInWithPopup, GoogleAuthProvider , FacebookAuthProvider , createUserWithEmailAndPassword , onAuthStateChanged  , signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/Firebase.init";

// initialize firebase..
initializeFirebase() ;

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const UseFirebase = () => {
    const auth = getAuth() ;
    const[ user , setUser ] = useState({});
    const[ email , setEmail ] = useState('') ;
    const[ password , setPassword ] = useState('') ;

    // get email input value..
    const emailHandler = (event) => {
        setEmail(event.target.value)
    }

    // get password input value..
    const passwordHandler = ( event ) => {
        setPassword( event.target.value) ;
    }

    // sign in with google..
    const signInGoogle = () => {
      return  signInWithPopup(auth , googleProvider)
        //  
    }

    // sign in with facebook..
    const signInFacebook = () => {
        signInWithPopup(auth, facebookProvider)
        .then( (result) => {
            const user = result.user;
            setUser(user) ;
        })
        .catch((error) => {
            const errorMessage = error.message ;
        })
    }

    // sing in with email..
    const signInWithEmail = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then( (userCredential) => {
            const user = userCredential.user;
            setUser(user) ;
        })
        .catch((error) => {
            const errorMessage = error.message ;
        })
    }


    // firebasse observer..
    useEffect(() => {
        onAuthStateChanged( auth , (user) => {
            if(user){
                setUser(user) ;
            }
        })
    } , []) ;

    // sign out
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('log out successful..')
          }).catch((error) => {
            // An error happened.
          });   
    }
    console.log(user) ;
    return {
        signInGoogle ,
        signInFacebook ,
        signInWithEmail ,
        emailHandler ,
        passwordHandler ,
        user ,
        logOut 
    }
}

export default UseFirebase ;