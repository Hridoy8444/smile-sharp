import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const CheckOut = () => {
    
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const navigate = useNavigate();

    const handleEmail= event => {
        setEmail(event.target.value)
    }
    const handleName= event => {
        setName(event.target.value)
    }
    const handleAddress= event => {
        setAddress(event.target.value)
    }
    const handleNumber= event => {
        setNumber(event.target.value)
    }
    const handleCheckOut = event => {
        event.preventDefault();
        navigate('/successfull')

    }
    return (
        <div>
            <h2 className='text-primary text-center'>Please Complete your Check out</h2>
            <div className='w-50 mx-auto'>
                <Form onSubmit={handleCheckOut} >
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control onBlur={handleName} className='input-field' type="text" name='name' placeholder="name " required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} className='input-field'  type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Address</Form.Label>
                        <Form.Control onBlur={handleAddress} className='input-field'  type="text" name='address' placeholder="Address" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control onBlur={handleNumber} className='input-field'  type="text" name='number' placeholder="Phone Number" required />
                    </Form.Group>

                    {/* <p style={{ color: 'red' }}>{error}</p> */}
                    <Button className='input-field field-color' style={{ width: '100%', padding: '10px' }} variant="primary" type="Register">
                        Check Out
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default CheckOut;