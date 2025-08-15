// src/components/Industries.jsx
import React from 'react';
const Card = ({img, alt, label}) => (
  <div className="industry-card">
    <img src={img} alt={alt}/><div>{label}</div>
  </div>
);
const Industries = () => (
  <section className="industry-section" id="industries">
    <div className="section-title" style={{marginTop:56}}>Built for businesses like yours</div>
    <div className="timeline-sub">Join other small businesses in your industry using Rynova AI.</div>
    <div className="industry-grid">
      <Card img="/images/homeservices.jpg" alt="Home Services" label="Home Services"/>
      <Card img="/images/lawfirms.jpg" alt="Law Firms" label="Law Firms"/>
      <Card img="/images/propertymanagement.jpg" alt="Property Management" label="Property Management"/>
      <Card img="/images/construction.jpeg" alt="Construction" label="Construction"/>
      <Card img="/images/realestate.jpg" alt="Real Estate" label="Real Estate"/>
      <Card img="/images/plumbing.jpg" alt="Plumbing" label="Plumbing"/>
      <Card img="/images/automotive.jpg" alt="Automotive" label="Automotive"/>
      <Card img="/images/salons.jpg" alt="Salons" label="Salons"/>
    </div>
  </section>
);
export default Industries;
