// src/components/Timeline.jsx
import React, { useEffect } from 'react';

const Timeline = () => {
  useEffect(() => {
    const steps = Array.from(document.querySelectorAll('.timeline-step'));
    const onScroll = () => {
      const trigger = window.innerHeight * 0.8;
      steps.forEach((step) => {
        const top = step.getBoundingClientRect().top;
        if (top < trigger) step.classList.add('active'); else step.classList.remove('active');
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="rynova-timeline-section">
      <h2 className="timeline-title" id="journey-timeline">
        Every Client Journey, Automated
        <span className="timeline-sub">How Rynova AI Handles 24/7 Engagement</span>
      </h2>
      <div className="rynova-timeline">
        <div className="timeline-step">
          <div className="timeline-icon-wrap">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
              <circle cx="19" cy="19" r="17" fill="#101624" stroke="#00f6bf" strokeWidth="2"/>
              <g transform="translate(6,9) scale(0.4)">
                <path fill="none" stroke="#00f6bf" strokeWidth="3" d="M64,12.78v17s-3.63.71-4.38.81-3.08.85-4.78-.78C52.22,27.25,42.93,18,42.93,18a3.54,3.54,0,0,0-4.18-.21c-2.36,1.24-5.87,3.07-7.33,3.78a3.37,3.37,0,0,1-5.06-2.64,3.44,3.44,0,0,1,2.1-3c3.33-2,10.36-6,13.29-7.52,1.78-1,3.06-1,5.51,1C50.27,12,53,14.27,53,14.27a2.75,2.75,0,0,0,2.26.43C58.63,14,64,12.78,64,12.78ZM27,41.5a3,3,0,0,0-3.55-4.09,3.07,3.07,0,0,0-.64-3,3.13,3.13,0,0,0-3-.75,3.07,3.07,0,0,0-.65-3,3.38,3.38,0,0,0-4.72.13c-1.38,1.32-2.27,3.72-1,5.14s2.64.55,3.72.3c-.3,1.07-1.2,2.07-.09,3.47s2.64.55,3.72.3c-.3,1.07-1.16,2.16-.1,3.46s2.84.61,4,.25c-.45,1.15-1.41,2.39-.18,3.79s4.08.75,5.47-.58a3.32,3.32,0,0,0,.3-4.68A3.18,3.18,0,0,0,27,41.5Zm25.35-8.82L41.62,22a3.53,3.53,0,0,0-3.77-.68c-1.5.66-3.43,1.56-4.89,2.24a8.15,8.15,0,0,1-3.29,1.1,5.59,5.59,0,0,1-3-10.34C29,12.73,34.09,10,34.09,10a6.46,6.46,0,0,0-5-2C25.67,8,18.51,12.7,18.51,12.7a5.61,5.61,0,0,1-4.93.13L8,10.89v19.4s1.59.46,3,1a6.33,6.33,0,0,1,1.56-2.47,6.17,6.17,0,0,1,8.48-.06,5.4,5.4,0,0,1,1.34,2.37,5.49,5.49,0,0,1,2.29,1.4A5.4,5.4,0,0,1,26,34.94a5.47,5.47,0,0,1,3.71,4,5.38,5.38,0,0,1,2.39,1.43,5.65,5.65,0,0,1,1.48,4.89,0,0,0,0,1,0,0s.8.9,1.29,1.39a2.46,2.46,0,0,0,3.48-3.48s2,2.48,4.28,1c2-1.4,1.69-3.06.74-4a3.19,3.19,0,0,0,4.77.13,2.45,2.45,0,0,0,.13-3.3s1.33,1.81,4,.12c1.89-1.6,1-3.43,0-4.39Z"/>
              </g>
            </svg>
          </div>
          <div className="timeline-content">
            <div className="timeline-step-title">White-Glove Onboarding</div>
            <div className="timeline-step-desc">
              Our team connects everything for you—CRM, calendar, bookings, SMS, and automations.<br/>
              <b>Go live in 24 hours with zero technical work. Just hand us the keys, we handle the rest.</b>
            </div>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-icon-wrap">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
              <circle cx="19" cy="19" r="17" fill="#101624" stroke="#00f6bf" stroke-width="2"/>
              <g transform="translate(-3,2) scale(1)">
              <path d="M25.2 23.1c-2.6 0-5.1-1-7-2.9a10 10 0 0 1-2.9-7c0-.4.2-.8.6-1l3.3-1.7a1 1 0 0 1 1.1.1l1.9 2c.2.2.3.6.2.9l-.7 2a8.5 8.5 0 0 0 4.7 4.7l2-.7c.3-.1.7 0 .9.2l2 1.9c.3.3.3.8.1 1.1l-1.7 3.3c-.2.4-.6.6-1 .6z" stroke="#41ffe3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </g>
            </svg>
          </div>
          <div class="timeline-content">
            <div class="timeline-step-title">Call or Text Comes In</div>
            <div class="timeline-step-desc">Rynova instantly answers every call or SMS—no missed contacts, no manual handling.</div>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-icon-wrap">
            <svg viewBox="0 0 32 32" width="38" height="38"><circle cx="16" cy="16" r="15" fill="#101624" stroke="#00f6bf" stroke-width="2"/><rect x="8" y="11" width="16" height="12" rx="5" fill="#00f6bf"/><circle cx="12" cy="17" r="1.4" fill="#101624"/><circle cx="20" cy="17" r="1.4" fill="#101624"/><rect x="13" y="20" width="6" height="1.5" rx="0.7" fill="#101624"/></svg>
          </div>
          <div class="timeline-content">
            <div class="timeline-step-title">Conversational AI Handles Booking</div>
            <div class="timeline-step-desc">Friendly, ultra human AI collects details, answers questions, books/reschedules/cancels or escalates, and confirms with the client.</div>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-icon-wrap">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
              <circle cx="19" cy="19" r="17" fill="#101624" stroke="#00f6bf" stroke-width="2"/>
              <rect x="10" y="13" width="18" height="13" rx="3" fill="#181e2c" stroke="#41ffe3" stroke-width="1.6"/>
              <rect x="14" y="18" width="4" height="4" rx="1" fill="#41ffe3"/>
              <rect x="20" y="18" width="4" height="4" rx="1" fill="#00f6bf"/>
              <rect x="14" y="15" width="10" height="1.2" rx="0.6" fill="#41ffe3" opacity="0.4"/>
            </svg>
          </div>
          <div class="timeline-content">
            <div class="timeline-step-title">Instant Calendar/CRM Sync</div>
            <div class="timeline-step-desc">Booking is auto-logged—appears instantly in your calendar or CRM, no data entry, no errors.</div>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-icon-wrap">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
              <circle cx="19" cy="19" r="17" fill="#101624" stroke="#00f6bf" stroke-width="2"/>
              <rect x="10" y="14" width="18" height="10" rx="3" fill="#181e2c" stroke="#41ffe3" stroke-width="1.5"/>
              <path d="M13 18l6 4 6-4" stroke="#41ffe3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="timeline-content">
            <div class="timeline-step-title">Automated SMS Reminders</div>
            <div class="timeline-step-desc">Clients get friendly text reminders—no-shows and last-minute confusion disappear.</div>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-icon-wrap">
            <svg viewBox="0 0 32 32" width="38" height="38"><circle cx="16" cy="16" r="15" fill="#101624" stroke="#00f6bf" stroke-width="2"/><polygon points="16,10 18,16 24,16 19,19 20,25 16,21.5 12,25 13,19 8,16 14,16" fill="#41ffe3" stroke="#00f6bf" stroke-width="0.8"/></svg>
          </div>
          <div class="timeline-content">
            <div class="timeline-step-title">Review & Feedback Requests</div>
            <div class="timeline-step-desc">After the visit, Rynova automatically asks for a Google review or rating by SMS—boosting your online presence.</div>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-icon-wrap">
            <svg viewBox="0 0 32 32" width="38" height="38"><circle cx="16" cy="16" r="15" fill="#101624" stroke="#00f6bf" stroke-width="2"/><path d="M12 20h8m0 0-2 2m2-2-2-2" stroke="#41ffe3" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M20 12h-8m0 0 2-2m-2 2 2 2" stroke="#41ffe3" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
          </div>
          <div class="timeline-content">
            <div class="timeline-step-title">Personalized Follow-Ups & Re-engagement</div>
            <div class="timeline-step-desc">From friendly check-ins to promo offers, Rynova automates follow-ups, keeping clients engaged and coming back.</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Timeline;
