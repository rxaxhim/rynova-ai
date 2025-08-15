// src/components/Nav.jsx
import React, { useEffect, useState } from 'react';
import useHomeScroll from '../utils/useHomeScroll';

const Nav = ({ onBookDemo }) => {
  const [open, setOpen] = useState(false);
  const go = useHomeScroll();

  // close menu on narrow screens after clicking a nav link
  useEffect(() => {
    const closeOnClick = (e) => {
      if (window.innerWidth <= 700 && e.target.closest('.nav-links a')) {
        setOpen(false);
      }
    };
    document.addEventListener('click', closeOnClick);
    return () => document.removeEventListener('click', closeOnClick);
  }, []);

  return (
    <nav>
      <span className="nav-brand">Rynova AI</span>

      <div
        className={`hamburger ${open ? 'active' : ''}`}
        id="hamburger"
        aria-label="Toggle menu"
        tabIndex={0}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setOpen(!open)}
      >
        <span></span><span></span><span></span>
      </div>

      <div className={`nav-links ${open ? 'open' : ''}`} id="navLinks">
        <a href="#about" onClick={(e)=>{e.preventDefault(); go('about');}}>Why Rynova?</a>
        <a href="#industries" onClick={(e)=>{e.preventDefault(); go('industries');}}>Industries</a>
        <a href="#metrics" onClick={(e)=>{e.preventDefault(); go('metrics');}}>Metrics</a>
        <a href="#success" onClick={(e)=>{e.preventDefault(); go('success');}}>Success Stories</a>
        <a href="#journey-timeline" onClick={(e)=>{e.preventDefault(); go('journey-timeline');}}>System in Action</a>
        <a href="#features-platform" onClick={(e)=>{e.preventDefault(); go('features-platform');}}>Features</a>
        <a href="#calculator" onClick={(e)=>{e.preventDefault(); go('calculator');}}>Savings</a>
        <a href="#compare" onClick={(e)=>{e.preventDefault(); go('compare');}}>How We Compare</a>
        <a href="#faq" onClick={(e)=>{e.preventDefault(); go('faq');}}>FAQ</a>
        <a href="#contact" onClick={(e)=>{e.preventDefault(); go('contact');}}>Contact</a>
        <a href="#" className="nav-demo-btn" onClick={(e)=>{e.preventDefault(); onBookDemo?.();}}>Book a Demo</a>
      </div>
    </nav>
  );
};

export default Nav;
