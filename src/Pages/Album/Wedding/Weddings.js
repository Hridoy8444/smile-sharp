import React, { useEffect, useState } from 'react';
import Wedding from './WeddingPhoto/Wedding';


const Weddings = () => {
    const [weddings, setWeddings] = useState([]);

    useEffect(()=> {
        fetch('wedding.json')
        .then(res => res.json())
        .then(data => setWeddings(data))
    }, []);

    return (
        <div id='weddings'>
            <h2 className='text-primary text-center'>Wedding Photo</h2>
            <div className='row container mx-auto ms-4' >
                {
                    weddings.map(wedding => <Wedding
                    key={wedding.id}
                    wedding={wedding}
                    ></Wedding>)
                }
            </div>
        </div>
    );
};

export default Weddings;