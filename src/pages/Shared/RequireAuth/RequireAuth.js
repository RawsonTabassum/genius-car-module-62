import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();

    if(loading){
        return <Loading></Loading>
    }
    if(!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if(user.providerData[0]?.providerId === 'passowrd' && !user.emailVerified){
        return <div>
            <h3 className='text-center text-danger'>*Your email is not verified</h3>
            <h5 className='text-center text-success'>Please verify your email address</h5>

            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary mt-2'>Send verification email</button>
            </div>
        </div>
    }

    return children;
};

export default RequireAuth;

