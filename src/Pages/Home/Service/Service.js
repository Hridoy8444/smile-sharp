import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { img, name, price, description } = service;
    const navigate = useNavigate();

    const handleToCheckOut = () => {
        navigate('/checkout')
    }
    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <Card   style={{ width: '18rem', height: "95vh", marginBottom: "20px" }}>
                <Card.Img className='mx-auto w-100 ' style={{width: '260px', height: '230px'}} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='text-warning'>Price: {price} $</Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button className='card-btn' onClick={handleToCheckOut} variant="primary">Go CheckOut</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;