import React from 'react';
import Events from '../Events/Events';
import Weddings from '../Wedding/Weddings';


const Album = () => {
    return (
        <div>
            <h2>This is Album</h2>
            <Weddings></Weddings>
            <Events></Events>
        </div>
    );
};

export default Album;