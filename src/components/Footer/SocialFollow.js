import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";

import './SocialFollow.css';

function SocialFollow() {
    return (
        <div className="Social-Container">
            <h3 className="Social-Title">Social Follow</h3>
            <a href="https://www.facebook.com/clare.lee.71"
            className="Facebook-social" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a href="https://www.linkedin.com/in/clare-coates-a05833b5/" className="LinkedIn-social"
            target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a href="https://www.instagram.com/ccoates_75/"
             className="Instagram-social" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
        </div>
    );
}

export default SocialFollow
