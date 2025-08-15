// src/components/Cases.jsx
import React from 'react';
const Case = ({title, metric, text}) => (
  <div className="case-block">
    <h4>{title}</h4>
    <div className="case-metric">{metric}</div>
    <p>{text}</p>
  </div>
);
const Cases = () => (
  <section id="success" className="case-section">
    <div className="case-title">Success Stories of Every Industry</div>
    <div className="case-grid">
      <Case title="Real Estate Team, Toronto" metric="41% More Booked Showings"
        text="Rynova answered every after-hours call, qualified buyers, and booked showings—no leads missed." />
      <Case title="Medspa, Mississauga" metric="100% Less Manual Calls"
        text="Missed calls didn’t go unanswered—our AI instantly picked up and handled the conversation. Over 60% of those calls turned into booked appointments, no front desk stress." />
      <Case title="Pet Groomer, Vaughan" metric="2x Client Retention"
        text="No-shows dropped by 60% with AI reminders, and over half of after-hours calls handled by AI led to paid bookings." />
      <Case title="Veterinary Clinic, Brampton" metric="Instant Emergency Routing"
        text="Critical calls routed directly to on-call staff, routine calls handled by AI. Response time: 12min → under 1min." />
    </div>
  </section>
);
export default Cases;
