import React from 'react';
import { Card } from 'react-bootstrap';

const Event = ({event}) => {
    const {img} = event;
    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <Card  style={{ width: '18rem' }}>
                <Card.Img className='mx-auto w-100 ' style={{width: '260px', height: '230px'}} variant="top" src={img} />
                
            </Card>
        </div>
    );
};

export default Event;