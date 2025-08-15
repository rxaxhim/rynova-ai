// src/components/Hero.jsx
import React, { useEffect } from 'react';
import { scrollToId } from '../utils/scroll';
import BrandMarquee from './BrandMarquee.jsx';

const Hero = ({ onBookDemo }) => {
  useEffect(() => {
    // simple keyframes for brand-intro (like your fadeInUp)
    // CSS already has @keyframes, so nothing needed here.
  }, []);
  return (
    <header>
      <div className="logo-container">
        <img id="hero-logo" src="/images/logo.png" alt="Rynova Logo"/>
      </div>
      <h1 className="hero-heading">
        AI Automation. 24/7 Growth.<br/>Zero Missed Calls.
      </h1>
      <p>
        Rynova never sleeps. Instantly books, qualifies, and follows up—so you win more clients for your medspa, clinic, real estate, or any business.
      </p>
      <div className="header-cta">
        <a href="#calculator" onClick={(e)=>{e.preventDefault(); scrollToId('calculator')}}>Calculate Savings</a>
        <a href="#" onClick={(e)=>{e.preventDefault(); onBookDemo();}}>Book Demo</a>
      </div>
      <div className="brand-intro">
        <svg width="22" height="22" style={{ marginRight: 3 }} viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="10" fill="#41ffe3" opacity="0.14"/>
          <path d="M6 10.6l2.2 2.2 5-5" stroke="#41ffe3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Backed by Trusted Partners
      </div>
      <BrandMarquee />
    </header>
  );
};
export default Hero;
