import React from 'react';
import me from '../../images/me.jpg'
import './Intro.css';

function Intro() {
    return (
        <div className="Intro">
            <h3 className="IntroMe_Header">Hi, My name is Clare!<br />
                 Welcome to my Blog site 👋🏻 </h3>
            <p className="IntroMe_Para">This is my story about an unconventional journey into coding. <br />
                I started my career some twenty odd years ago licking envelopes (Yes you read that 
                correctly!) and over the years I successfully built up my career. Then the pandemic hit and 
                it made me think about where my career was heading. Post covid I decided to take back the reins on
                my career and I embarked on a journey into coding. <br />
                Here I am now nearly 2 years later writing and reading code and building websites. <br />
                As a colleague once said, on a Teams call of over 100 people when introducing my demo... 'Sit Back and Enjoy!'. </p>
            <img src={ me } alt="me" className="Image2"/>
        </div>
     );
}

export default Intro