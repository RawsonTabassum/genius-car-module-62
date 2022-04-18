import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const formHandleSubmit = (event)=> {
        event.preventDefault();
        const email = emailRef.current.value;
        const passowrod = passwordRef.current.value;

        signInWithEmailAndPassword(email, passowrod);
    }

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);


    if(user){
        navigate(from, { replace: true });
    }

    if(loading){
        return <Loading></Loading>
    }

    const resetPasswordHandle = async()=> {
        const emailR = emailRef.current.value;

        if (emailR) {
            await sendPasswordResetEmail(emailR);
            alert('mail sent');
        } else {
            alert('please enter your email address!')
        }
    }


    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center my-3'>Login</h2>
            <Form onSubmit={formHandleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <div className='d-flex justify-content-center'>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </div>
            </Form>
            <br />
            <p className='text-danger'>{error && error.message}</p>
            <p className='text-center'>New to Genius Car? <Link to='/register' className='text-danger text-decoration-none'>Register</Link></p>
            <p className='text-center'>Forgot password? <button onClick={resetPasswordHandle} className='btn btn-link text-danger text-decoration-none'>Reset Password</button></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;