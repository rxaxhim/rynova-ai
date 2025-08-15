// src/components/MissedCallStats.jsx
import React from 'react';
const Card = ({stat, desc}) => (
  <div className="missed-call-card">
    <div className="missed-call-stat">{stat}</div>
    <div className="missed-call-desc">{desc}</div>
  </div>
);
const MissedCallStats = () => (
  <section className="missed-call-stats-section">
    <div className="missed-call-stats-heading">
      <div className="missed-call-title">That call you just missed?</div>
      <div className="missed-call-highlight">It could have been your <span>next paying customer.</span></div>
    </div>
    <div className="missed-call-cards-row">
      <Card stat="61%" desc="of customers prefer to call local businesses after finding them online." />
      <Card stat="62%" desc="of those calls go unanswered, leading to lost leads and revenue." />
      <Card stat="80%" desc="of callers don't leave a voicemail, resulting in countless lost opportunities for businesses." />
    </div>
  </section>
);
export default MissedCallStats;
