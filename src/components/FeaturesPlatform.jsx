// src/components/FeaturesPlatform.jsx
import React, { useRef } from 'react';

const Card = ({ title, children, icon }) => (
  <div className="features-scroller-card">
    <div className="features-icon-wrap">{icon}</div>
    <div className="features-scroller-title">{title}</div>
    <div className="features-scroller-desc">{children}</div>
  </div>
);

const FeaturesPlatform = () => {
  const scrollerRef = useRef(null);

  return (
    <section className="features-platform-section" id="features-platform">
      <div className="features-platform-container">
        <h2 className="features-platform-title">Everything You Need. All in One AI Platform.</h2>

        <div className="features-scroller-wrap">
          <button
            type="button"
            className="features-arrow features-arrow-left"
            aria-label="Previous"
            onClick={() => scrollerRef.current?.scrollBy({ left: -350, behavior: 'smooth' })}
          >
            <svg viewBox="0 0 128 128" width="48" height="48">
              <path fill="#41ffe3" d="M85.2 90.7l5.4-3.7L64 64l26.6-24-5.3-2.7L56 64l29.2 26.7z" />
              <circle fill="none" stroke="#41ffe3" strokeWidth="5" opacity="0.13" cx="64" cy="64" r="62" />
            </svg>
          </button>

          <div className="features-scroller" id="features-scroller" ref={scrollerRef}>
            {/* 1) AI Receptionist, 24/7 */}
            <Card
              title="AI Receptionist, 24/7"
              icon={
                <svg className="features-icon" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="23" fill="#41ffe3" opacity="0.13" />
                  <path
                    d="M17 14c2 6 8 12 14 14l3-3c.6-.6 1.5-.7 2.1-.1l3 2.9c.6.6.7 1.5.1 2.1l-2.4 2.5c-.8.8-2 1.1-3 .8C25.6 32.5 17.6 24.5 14.8 17.1c-.3-1 .1-2.1.8-2.9l2.4-2.5c.6-.6 1.5-.7 2.1-.1l2.9 3c.6.6.6 1.5 0 2.1l-3 3z"
                    stroke="#41ffe3"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
            >
              Answers and qualifies every lead, books and reschedules even after hours, so you never miss a client.
            </Card>

            {/* 2) All-in-One CRM Platform */}
            <Card
              title="All-in-One CRM Platform"
              icon={
                <svg className="features-icon" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="23" fill="#41ffe3" opacity="0.13" />
                  <rect x="13" y="15" width="22" height="18" rx="4" stroke="#41ffe3" strokeWidth="2" />
                  <circle cx="20" cy="24" r="2.1" fill="#41ffe3" opacity="0.23" />
                  <circle cx="28" cy="24" r="2.1" fill="#41ffe3" opacity="0.19" />
                  <rect x="18" y="31" width="12" height="2.2" rx="1" fill="#41ffe3" opacity="0.24" />
                </svg>
              }
            >
              Get a powerful, modern CRM included—manage leads, run automations, build landing pages, send email/SMS
              campaigns, and track results in one seamless place.
            </Card>

            {/* 3) Plug Into Your CRM */}
            <Card
              title="Plug Into Your CRM"
              icon={
                <svg className="features-icon" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="23" fill="#41ffe3" opacity="0.13" />
                  <rect x="14" y="18" width="8" height="12" rx="2.5" stroke="#41ffe3" strokeWidth="2" />
                  <rect x="26" y="18" width="8" height="12" rx="2.5" stroke="#41ffe3" strokeWidth="2" />
                  <path d="M22 24h4" stroke="#41ffe3" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="24" cy="24" r="1.5" fill="#41ffe3" opacity="0.4" />
                </svg>
              }
            >
              Already have a CRM? Rynova integrates directly with your existing tools (including GHL, HubSpot, Square,
              and more) to keep your current workflow—just way smarter.
            </Card>

            {/* 4) Smart Booking & Reminders */}
            <Card
              title="Smart Booking & Reminders"
              icon={
                <svg className="features-icon" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="23" fill="#41ffe3" opacity="0.13" />
                  <rect x="14" y="18" width="20" height="16" rx="3" stroke="#41ffe3" strokeWidth="2" />
                  <rect x="18" y="22" width="4" height="4" fill="#41ffe3" opacity="0.3" />
                  <rect x="26" y="22" width="4" height="4" fill="#41ffe3" opacity="0.3" />
                </svg>
              }
            >
              Automated reminders, schedule integration, and follow-ups to fill your calendar, reduce no-shows, and keep
              clients engaged.
            </Card>

            {/* 5) Automated Promotions */}
            <Card
              title="Automated Promotions"
              icon={
                <svg className="features-icon" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="23" fill="#41ffe3" opacity="0.13" />
                  <path d="M18 30l12-12M20 28l4 4 6-6" stroke="#41ffe3" strokeWidth="2.1" strokeLinecap="round" />
                  <rect x="12" y="34" width="24" height="4" rx="2" fill="#41ffe3" opacity="0.17" />
                </svg>
              }
            >
              Instantly send out promotions and limited-time offers by SMS or email to fill your slow days and keep your
              schedule packed.
            </Card>

            {/* 6) Review & Reputation Boost */}
            <Card
              title="Review & Reputation Boost"
              icon={
                <svg className="features-icon" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="23" fill="#41ffe3" opacity="0.13" />
                  <path
                    d="M24 15l2.4 6.8h7.2l-5.8 4.2 2.2 6.8-5.8-4.2-5.8 4.2 2.2-6.8-5.8-4.2h7.2L24 15z"
                    stroke="#41ffe3"
                    strokeWidth="2"
                    fill="#41ffe3"
                    fillOpacity="0.13"
                  />
                </svg>
              }
            >
              Requests Google reviews from happy customers only, improving your online reputation. Proactively re-engage
              lost clients.
            </Card>

            {/* 7) Handles 20+ Calls at Once */}
            <Card
              title="Handles 20+ Calls at Once"
              icon={
                <svg className="features-icon" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="23" fill="#41ffe3" opacity="0.13" />
                  <g>
                    <circle cx="24" cy="20" r="5" fill="#41ffe3" />
                    <circle cx="34" cy="22.5" r="3" fill="#41ffe3" opacity="0.82" />
                    <circle cx="14" cy="22.5" r="3" fill="#41ffe3" opacity="0.82" />
                    <ellipse cx="24" cy="32" rx="9" ry="4" fill="#41ffe3" opacity="0.22" />
                    <ellipse cx="34" cy="30.5" rx="5" ry="2.5" fill="#41ffe3" opacity="0.16" />
                    <ellipse cx="14" cy="30.5" rx="5" ry="2.5" fill="#41ffe3" opacity="0.16" />
                  </g>
                </svg>
              }
            >
              Never miss a client—Rynova AI can answer, route, and book over 20 calls at the same time. No hold music,
              no busy signals, and every customer gets instant help.
            </Card>

            {/* 8) Client Re-Engagement */}
            <Card
              title="Client Re-Engagement"
              icon={
                <svg className="features-icon" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="23" fill="#41ffe3" opacity="0.13" />
                  <path d="M16 24c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8" stroke="#41ffe3" strokeWidth="2" />
                  <polyline
                    points="22 28 16 24 22 20"
                    fill="none"
                    stroke="#41ffe3"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              }
            >
              Automatically follow up with clients who haven’t visited in a while, win back lost business, and boost
              loyalty—all on autopilot.
            </Card>

            {/* 9) Intelligent Call Routing */}
            <Card
              title="Intelligent Call Routing"
              icon={
                <svg className="features-icon" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="23" fill="#41ffe3" opacity="0.13" />
                  <path d="M24 15v18m0 0-6-6m6 6 6-6" stroke="#41ffe3" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
            >
              Emergencies get priority—calls can be routed instantly (e.g. burst pipes for plumbers, urgent hair fixes,
              etc).
            </Card>

            {/* 10) AI-Driven Improvements */}
            <Card
              title="AI-Driven Improvements"
              icon={
                <svg className="features-icon" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="23" fill="#41ffe3" opacity="0.13" />
                  <rect x="16" y="16" width="16" height="16" rx="5" stroke="#41ffe3" strokeWidth="2" />
                  <circle cx="24" cy="24" r="5" fill="#41ffe3" opacity="0.23" />
                  <circle cx="24" cy="9" r="1.7" fill="#41ffe3" opacity="0.52" />
                  <circle cx="24" cy="39" r="1.7" fill="#41ffe3" opacity="0.52" />
                  <circle cx="9" cy="24" r="1.7" fill="#41ffe3" opacity="0.52" />
                  <circle cx="39" cy="24" r="1.7" fill="#41ffe3" opacity="0.52" />
                </svg>
              }
            >
              Rynova’s AI monitors results and automatically adjusts campaigns, call flows, and offers for maximum
              impact and conversions.
            </Card>
          </div>

          <button
            type="button"
            className="features-arrow features-arrow-right"
            aria-label="Next"
            onClick={() => scrollerRef.current?.scrollBy({ left: 350, behavior: 'smooth' })}
          >
            <svg viewBox="0 0 128 128" width="48" height="48">
              <path fill="#41ffe3" d="M42.8 37.3 37.4 41 64 64 37.4 88l5.3 2.7L72 64 42.8 37.3z" />
              <circle fill="none" stroke="#41ffe3" strokeWidth="5" opacity="0.13" cx="64" cy="64" r="62" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesPlatform;
