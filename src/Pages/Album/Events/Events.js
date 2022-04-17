import React, { useEffect, useState } from 'react';
import Event from './Event/Event';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(()=> {
        fetch('event.json')
        .then(res => res.json())
        .then(data => setEvents(data))
    } ,[])
    return (
        <div id='events'>
            <h2 className='text-primary text-center mt-3 mb-3'>Events Photo</h2>
            <div className="row mx-auto gy-3  ">
                {
                    events.map(event => <Event
                    key={event.id}
                    event={event}
                    ></Event>)
                }
            </div>
        </div>
    );
};

export default Events;