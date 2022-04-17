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
        <div>
            <h2>Wedding Photo:{weddings.length}</h2>
            <div>
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