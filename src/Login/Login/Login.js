import React, { useState } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleLogo from '../../../src/Images/Logo/googleLogo.png';
import facebookLogo from '../../../src/Images/Logo/facebookLogo.png';

const Login = () => {
    const [authUser, loading, error] = useAuthState(auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();


    const [
        signInWithEmailAndPassword,
        user

    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    const [signInWithFacebook] = useSignInWithFacebook(auth);

    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const navigateToRegister = () => {
        navigate('/register')
    }
    const handleToSubmit = event => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password);
    }
    if (authUser) {
        
        
        navigate(from, { replace: true });
    }
    const resetPassword = async (event) => {
        console.log(email)
        await sendPasswordResetEmail(email)
        Toast('Sent email');
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-success mt-2 text-center'>Please Login!</h2>
            <Form onSubmit={handleToSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='input-field' onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='input-field' onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='input-field field-color' style={{ width: '100%', padding: '10px' }} variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-center mt-2'>Forget Password? <button to={"/register"} className='text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
            <p>New to Smile Sharp Photography? <Link to={'/register'} className='text-primary text-decoration-none' onClick={navigateToRegister}>Please Register</Link></p>
            <div>
                <p onClick={() => signInWithGoogle()} className='social-media-container'><img height={32} src={googleLogo} alt="" /> <small>Continue With Google</small></p>
                <p onClick={() => signInWithFacebook()} className='social-media-container'><img height={32} src={facebookLogo} alt="" /> <small>Continue With Google</small></p>
            </div>
        </div>
    );
};

export default Login;