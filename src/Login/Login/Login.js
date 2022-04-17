import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleLogo from '../../../src/Images/Logo/googleLogo.png';
import facebookLogo from '../../../src/Images/Logo/facebookLogo.png';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,

    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    const [signInWithFacebook] = useSignInWithFacebook(auth);




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
    if (user) {
        navigate('/');
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-primary mt-2 text-center'>Please Login!</h2>
            <Form onSubmit={handleToSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button style={{width:  '100%', padding: '10px'}} variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to Smile Sharp Photography? <Link to={'/register'} className='text-primary text-decoration-none' onClick={navigateToRegister}>Please Register</Link></p>
            <div>
                <p onClick={() => signInWithGoogle()} className='social-media-container'><img height={32} src={googleLogo} alt="" /> <small>Continue With Google</small></p>
                <p onClick={() => signInWithFacebook()} className='social-media-container'><img height={32} src={facebookLogo} alt="" /> <small>Continue With Google</small></p>
            </div>
        </div>
    );
};

export default Login;