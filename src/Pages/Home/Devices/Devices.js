import React, { useEffect, useState } from 'react';
import Device from './Device/Device';

const Devices = () => {
    const [devices, SetDevices] = useState([]);

    useEffect(()=> {
        fetch('devices.json')
        .then(res => res.json())
        .then(data => SetDevices(data))
    }, []);
    return (
        <div>
            <h2 className='text-primary text-center mt-4 mb-4 '>Photographic Equipment</h2>
            <div className='row container mx-auto ms-4'>
                {
                    devices.map(device => <Device
                    key={device.id}
                    device={device}
                    ></Device>)
                }
            </div>
        </div>
    );
};

export default Devices;