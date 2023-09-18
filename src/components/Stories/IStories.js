import React from 'react';

import './IStories.css';
import Snippet from '../Snippets/Snippets';
import FunFact2 from '../../images/FunFact2.jpeg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";

function IStories() {
    return (
    <div>
        <div className="card3">    
            <Snippet
                title="I started my career licking envelopes"
                paragraph1="Now a Quality Engineer at Dunelm — on a path to becoming an SDET (Software Developer Engineer in Test)."
                paragraph2="It’s true, I started my career some 20 odd years ago working for a bank in the Northeast of England. I was fresh out of Uni with no idea what or where I was heading. I stumbled into the 
                role of packing the promotional literature into envelopes that was sent out for the savings accounts.......
                Click icon for more info" 
            />
            <a href="https://medium.com/dunelm-tech/fun-fact-1-i-started-my-career-licking-envelopes-42477bc9db19"
            className="Medium" target="_blank" rel="noreferrer"> 
            <FontAwesomeIcon icon={ faMedium } size="5x" />
            </a>
        <img src={ FunFact2 } alt='FunFact' className='Image4' />
        </div>
    </div>
    );
}

export default IStories;