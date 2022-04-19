import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { img, name, price, description } = service;
    const navigate = useNavigate();

    const handleToCheckOut = () => {
        navigate('/checkout')
    }
    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <Card   style={{ width: '18rem', height: "100vh", marginBottom: "20px" }}>
                <Card.Img className='mx-auto w-100 ' style={{width: '260px', height: '230px'}} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button style={{margin: "0"}} onClick={handleToCheckOut} variant="primary">Go CheckOut</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;