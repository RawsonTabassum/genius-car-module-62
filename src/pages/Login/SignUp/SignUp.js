import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import { sendEmailVerification } from 'firebase/auth';

const Signup = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    const handleRegister = async (event)=> {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name});
        alert('account creation successful');
    }

    if(user){
        navigate('/home');
    }


    return (
        <div className='container w-50 mx-auto my-3'>
            <h2 className='text-center text-primary'>Register</h2>
            <div className='d-flex justify-content-center'>
                <form action="" className='w-75' onSubmit={handleRegister}>
                    {/* <label htmlFor="name">Name</label>
                    <br /> */}
                    <input className='form-control' type="text" name='name' placeholder='Your name' required/>
                    <br />
                    {/* <label htmlFor="email">Email</label>
                    <br /> */}
                    <input className='form-control' type="text" name='email' placeholder='Email' required/>
                    <br />
                    {/* <label htmlFor="password">Password</label>
                    <br /> */}
                    <input className='form-control' type="password" name="password" id="password" placeholder='password' required/>
                    <br />
                    {/* <label htmlFor="confirm-password">Confirm Password</label>
                    <br /> */}
                    <input className='form-control' type="password" name="confirm-password" id="confirm-password" placeholder='confirm password' required/>

                    <input onClick={()=> setAgree(!agree)} className='form control mt-3 me-2' type="checkbox" name="terms" id="" />
                    <label className={agree? '' : 'text-danger'} htmlFor="terms">Accept terms and conditions</label>

                    <p className='text-danger'>{error && error.message}</p>

                    <div className='d-flex justify-content-center mt-2'>
                        <input className='btn btn-primary' type="submit" value="Register" disabled={!agree}/>
                    </div>
                </form>

                
            </div>
            <br />
            <p className='text-center'>Already have an account? <Link to='/login' className='text-danger text-decoration-none'>Login</Link></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;