import React from 'react'

import Hero from '../components/Hero/Hero';
import Intro from '../components/Intro/Intro';
import SocialFollow from '../components/Footer/SocialFollow';
import ScrollToTop from '../components/ScrollUp/ScrollToTop';

function Home() {
    return (
      <div>
        <div className="container">
        </div>
        <Hero />
        <Intro />
        <SocialFollow />
        <ScrollToTop />
      </div>    
    );
  }
  
  export default Home;