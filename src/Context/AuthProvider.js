import React, { createContext } from 'react';
import UseFirebase from '../Hooks/UseFirebase';

export  const MyContext = createContext() ;

const AuthProvider = ({ children }) => {
    const allContext = UseFirebase() ;

    return (
        <MyContext.Provider value={allContext}>
            { children }
        </MyContext.Provider>
    );
};

export default AuthProvider;