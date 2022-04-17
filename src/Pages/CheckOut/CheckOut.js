import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const CheckOut = () => {
    
    return (
        <div>
            <h2>Your Check Out Is complete</h2>
        </div>
    );
};

export default CheckOut;