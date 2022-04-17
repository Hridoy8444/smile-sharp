import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import googleLogo from '../../../src/Images/Logo/googleLogo.png';
import facebookLogo from '../../../src/Images/Logo/facebookLogo.png';


const Register = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    const [signInWithFacebook] = useSignInWithFacebook(auth);

    const [sendEmailVerification] = useSendEmailVerification(auth);


   
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    if(user){
        navigate('/');
    }
    const handleToSubmit = event => {
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your Password are not match');
            return;
        }
        createUserWithEmailAndPassword(email, password);
         sendEmailVerification(auth);
         alert('send email')
    }
    const navigateToLogin = () => {
        navigate('/register')
    }
    return (
        <div>

            <div className='w-50 mx-auto'>
                <h2 className='text-primary mt-2 text-center'>Please Register!</h2>
                <Form onSubmit={handleToSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" name='email' placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handleConfirmPasswordBlur} type="password" name='confirmPassword' placeholder="confirmPassword" />
                    </Form.Group>

                    <p style={{color: 'red'}}>{error}</p>
                    <Button style={{width:  '100%', padding: '10px'}} variant="primary" type="Register">
                        Register
                    </Button>
                </Form>
                <p>Already have an account? <Link to={'/login'} className='text-primary text-decoration-none' onClick={navigateToLogin}>Please Login</Link></p>
                <div>
                    <p onClick={() => signInWithGoogle()} className='social-media-container'><img  height={32} src={googleLogo} alt="" /> <small>Continue With Google</small></p>
                    <p onClick={() => signInWithFacebook()} className='social-media-container'><img height={32} src={facebookLogo} alt="" /> <small>Continue With Google</small></p>
                </div>
            </div>
        </div>
    );
};

export default Register;