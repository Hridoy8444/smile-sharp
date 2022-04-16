import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate()

    const navigateToLogin = () => {
        navigate('/register')
    }
    return (
        <div>

            <div className='w-50 mx-auto'>
                <h2 className='text-primary mt-2'>Please Register!</h2>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control  type="text" name='name' placeholder="name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control  type="email" name='email' placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control  type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    
                    
                    <Button variant="primary" type="Register">
                        Submit
                    </Button>
                </Form>
                <p>Already have an account? <Link to={'/login'} className='text-primary text-decoration-none' onClick={navigateToLogin}>Please Login</Link></p>
            </div>
        </div>
    );
};

export default Register;