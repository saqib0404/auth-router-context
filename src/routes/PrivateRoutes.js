import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext)

    if(user){
        return children;
    }
    else{
       return <Navigate to='/login'></Navigate>
    }
};

export default PrivateRoutes;