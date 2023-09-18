import React from 'react';

import './IStories1.css';
import Snippet from '../Snippets/Snippets';
import Yay2 from '../../images/Yay2.jpeg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";

function IStories() {
    return (
    <div>
        <div className="card4">    
            <Snippet
                title="I bloody well did it!! I’m now an SDET"
                paragraph1="For anybody who doesn’t know my story, I’m a 47 year old mother of two who has spent the past 18 months on a personal journey into coding with the goal of becoming an SDET (Software Developer Engineer in Test)."
                paragraph2="Back in November I received the news that my promotion had been approved and as at 1st January 2023, I would be an SDET. As you can imagine the celebrations were wild; one glass of fizz and I then fell asleep next to my youngest whilst putting her to bed at 7pm!.......
                Click icon for more info" 
            />
            <a href="https://medium.com/dunelm-tech/i-bloody-well-did-it-im-now-an-sdet-d5b66849042f"
            className="Medium" target="_blank" rel="noreferrer"> 
            <FontAwesomeIcon icon={ faMedium } size="5x" />
            </a>
        <img src={ Yay2 } alt='FunFact' className='Image5' />
        </div>
    </div>
    );
}

export default IStories;