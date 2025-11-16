// src/components/Features.jsx
import React from 'react';

const Item = ({title, text}) => (
  <div className="feature-block">
    <h4>{title}</h4><p>{text}</p>
  </div>
);

const Features = () => (
  <section id="about" className="feature-section">
    <div className="section-title">Why Choose Rynova?</div>
    <div className="timeline-sub">
      Go live within 1 week — our team connects your CRM, calendar, and more. No tech work needed.
    </div>
    <div className="features-grid">
      <Item title="Zero Missed Calls" text="100% of your leads get answered—no more voicemails, no more lost revenue."/>
      <Item title="Ultra Human AI, 24/7" text="Clients can book, reschedule, and get info even when you’re closed."/>
      <Item title="Instant Lead Capture" text="Lead response is 5x faster, turning missed calls into paying customers."/>
      <Item title="Multi-Channel Followups" text="Text, voice, and email reminders sent at the perfect time, every time."/>
      <Item title="Integrates With Your Stack" text="Connects with your CRM, calendar, and custom workflows—no extra work for your team."/>
      <Item title="Works For Any Service Business" text="Medspa, real estate, law, grooming, health—if you take bookings, Rynova fits right in."/>
    </div>
  </section>
);
export default Features;
