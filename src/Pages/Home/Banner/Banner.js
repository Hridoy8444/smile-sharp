import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import banner1 from '../../../Images/Banner/banner1.jpg'
import banner2 from '../../../Images/Banner/banner2.jpg'
import banner3 from '../../../Images/Banner/banner3.jpg'

const Banner = () => {
    
        const [index, setIndex] = useState(0);
    
      const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Seminar Photography</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Wedding Photography</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Events Photography</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;