import React from 'react';
import Banner from '../Banner/Banner';
import Devices from '../Devices/Devices';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
            <Devices></Devices>
        </div>
    );
};

export default Home;