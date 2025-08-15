// src/components/CTA.jsx
import React from 'react';
const CTA = ({ onBookDemo }) => (
  <section className="cta-section" id="contact">
    <h2>Ready to Grow your Business?</h2>
    <p>
      Whether you run a medspa, real estate team, pet clinic, or any business built on client calls — Rynova AI makes sure you never miss an opportunity.
    </p>
    <a href="#" onClick={(e)=>{e.preventDefault(); onBookDemo();}} className="book-demo-btn">Book a Free Demo</a>
  </section>
);
export default CTA;
