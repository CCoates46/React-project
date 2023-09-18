import React from 'react';
import header_image from '../../images/header_image.jpeg';
import './Hero.css';

function Hero() {
    return (
    <div>
        <div className="card">
            <img src={ header_image} alt="badge" className="Image1"/>
            <h1 className="title">My journey into coding as a fortysomething mum of 2 kids</h1>
        </div>
    </div>
    );
}

export default Hero;