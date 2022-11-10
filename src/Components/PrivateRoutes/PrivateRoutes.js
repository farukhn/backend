import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, } from 'react-router-dom';
import { AuthenticationContext } from '../AuthContext/AuthContext';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthenticationContext);
    if(loading){
        return <div className='text-center'><Spinner animation="border" />;</div>
    }
   if(user&&user.email){
    return children;
   }
   return <Navigate to='/login'/>
};

export default PrivateRoutes;