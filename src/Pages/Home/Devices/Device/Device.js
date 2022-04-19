import React from 'react';
import { Card } from 'react-bootstrap';

const Device = ({ device }) => {
    const { img, name } = device;
    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <Card style={{ width: '18rem', height: "50vh", marginBottom: "20px" }}>
                <Card.Img className='mx-auto w-100 ' style={{ width: '260px', height: '230px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Device;