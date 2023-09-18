import React from 'react';

import '../AboutMeIntro/AboutMeIntro.css';

function AboutMeIntro() {
    return (
    <div>
        <div className="card2">
            <h1 className="aboutMe">About Me</h1>
            <p className="me_intro">
            Hi, i'm Clare. I am a software development engineer in test (SDET). <br />
            First of all, thank you for reading my blog. It's such a pleasure to have you here! <br />
            <br />
            A couple of words about my professional life: I am an SDET and an advocate for Quality.
            I have spent most of my career as a manual software tester and post covid I decided to embark 
            on a journey into coding in order to progress my career. <br />
            Almost 18 months ago I could not read or write a line of code but having studied an online Javascript
            course on Udemy in my spare time, alongside having the opportunity to pair program daily with experienced 
            engineers in my current company, I have been able to write integration tests and automated UI tests. <br />
            <br />
            During my time at Dunelm, I have regularly written articles about my journey. I received great feedback from 
            people reading my articles which allowed me to inspire others.<br />
            </p>
        </div>
    </div>
    );
}

export default AboutMeIntro;