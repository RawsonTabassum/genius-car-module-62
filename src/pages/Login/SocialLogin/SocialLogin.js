import React from 'react';
import './SocialLogin.css'
import google from '../../../images/google.png'
import facebook from '../../../images/facebook.png'
import github from '../../../images/github.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const handleGoogleSignIn = ()=> {
        signInWithGoogle();
    }

    if(user){
        navigate('/home');
    }

    
    return (
        <div className='my-3'>
            <div className='d-flex justify-content-center align-items-center'>
                <hr className='line w-25'/>
                <p className='mt-2 px-5'> or </p>
                <hr className='line w-25'/>
            </div>
            <p className='text-center text-danger'>{error && error.message}</p>
            <div className='d-flex justify-content-center my-2'>
                <button onClick={handleGoogleSignIn} className='btn w-50 d-flex align-items- justify-content-center border border-1'>
                    <img src={google} className='me-3' style={{width: '25px', height: '25px'}} alt="" />
                    Google Sign In
                </button>
            </div>
            <div className='d-flex justify-content-center my-2'>
                <button className='btn w-50 d-flex align-items- justify-content-center border border-1'>
                    <img src={facebook} className='me-3' style={{width: '25px', height: '25px'}} alt="" />
                    Google Sign In
                </button>
            </div>
            <div className='d-flex justify-content-center my-2'>
                <button className='btn w-50 d-flex align-items- justify-content-center border border-1'>
                    <img src={github} className='me-3' style={{width: '25px', height: '25px'}} alt="" />
                    Google Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;