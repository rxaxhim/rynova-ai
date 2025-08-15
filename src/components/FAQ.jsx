// src/components/FAQ.jsx
import React, { useState } from 'react';

const Item = ({q, a, open, onToggle}) => (
  <div className={`faq-item ${open ? 'open' : ''}`}>
    <button className="faq-question" onClick={onToggle}>
      {q}
      <span className="faq-arrow">
        <svg width="28" height="28" viewBox="0 0 24 24"><path d="M6 10l6 6 6-6" stroke="#41ffe3" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    </button>
    <div className="faq-answer">{a}</div>
  </div>
);

const FAQ = () => {
  const [open, setOpen] = useState(-1);
  const data = [
    {
      q: 'What is Rynova AI and how is it different?',
      a: <>Rynova is a 24/7 AI receptionist and automation system that <b>handles everything for you</b>—from live call answering to CRM/calendar integrations, follow-ups, review requests, reminders, and even custom workflows. We set it up end-to-end, so you never have to touch a thing.</>
    },
    { q: 'Do you set up all the integrations for me?', a: <><b>Yes—100% done for you.</b> We connect your CRM, calendar, SMS, email, review tools, and more, so your system is truly plug-and-play. You just hand us access, and we handle the rest.</> },
    { q: 'What locations do you serve?', a: <>Rynova serves businesses in <b>Mississauga, Toronto, the GTA, and throughout Canada and the United States</b>. We specialize in AI automation for local service businesses in the Greater Toronto Area, but also support clients across North America. Every system is customized for your region and timezone.</> },
    { q: 'How quickly can I get started?', a: <>Most clients go live in <b>24-48 hours</b> after onboarding. We handle all setup, testing, and launch for you.</> },
    { q: 'Can Rynova handle multiple staff or locations?', a: <>Yes! Rynova supports <b>multi-location businesses</b> and can route calls, bookings, and reminders to the right staff or team automatically.</> },
    { q: 'Is Rynova secure and privacy-compliant?', a: <>Absolutely. All data is encrypted and your workflows are fully compliant with privacy laws (PIPEDA, HIPAA-ready on request). You control your data and integrations.</> },
    { q: 'What if I already have a CRM or booking system?', a: <>No problem—Rynova’s team will connect and integrate with your CRM and booking tools (GoHighLevel, Square, HubSpot, Google Calendar, and more) for you. We handle the entire setup, so everything works seamlessly—no technical work needed on your end.</> },
    { q: 'What does onboarding look like?', a: <>After a brief consult, you provide us access to your tools—we configure everything, test it live, and show you how to use your dashboard. No technical skills needed.</> },
  ];

  return (
    <section className="faq-section">
      <div className="section-title" id="faq">Frequently Asked Questions</div>
      <div className="faq-list">
        {data.map((item, i) => (
          <Item key={i} q={item.q} a={item.a} open={open===i} onToggle={()=>setOpen(open===i?-1:i)} />
        ))}
      </div>
    </section>
  );
};
export default FAQ;
