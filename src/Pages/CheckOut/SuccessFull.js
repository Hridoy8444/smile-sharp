import React from 'react';
import greenCheck from '../../Images/Green-Check/greenCheck.png'

const SuccessFull = () => {
    return (
        <div style={{minHeight: "70vh"}} className='text-center mb-5'>
            <img  src={greenCheck} alt="" />
            <h3>Successfully done your checkOut!</h3>
            <h3>We will you contract very soon!</h3>
        </div>
    );
};

export default SuccessFull;