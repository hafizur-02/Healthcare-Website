import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const PrivateRoute = ( { children } ) => {

    console.log( children ) ;
    const { user } = UseAuth() ;
    const location = useLocation() ;

    return (
        user?.email ? children :
        <Navigate
            to={'/login'}
            state={ {from: location }}
        />
    );
};

export default PrivateRoute;