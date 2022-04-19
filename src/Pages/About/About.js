import React from 'react';
import about from '../../Images/About/Hridoy-bg.png'
import './About.css';

const About = () => {
    return (
        <div style={{ minHeight: "70vh" }} className='about-container'>
            <div className='img-container'>
                <img height={400} src={about} alt="" />
            </div>
            <div >
                <div className='text-center' style={{marginTop: "20px"}}>
                    <h2>Md Fardous Hossain Reday</h2>
                    <h5>Bachelor in Software Engineering, Yangzhou University, China</h5>
                </div>
                <div>
                    <p className='goal-container'>
                        My goal as a student of software engineering is to be a good wave developer and that is why I chose this course.  Being from an IT background has made things a lot easier for me to learn.  My main goal is to make myself a good developer.  I want to be a full steak developer.  The demand for full steak is current.  It is true that now that many developers are being created, there is a lot of competition.  But there is still a demand for good quality developers.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;