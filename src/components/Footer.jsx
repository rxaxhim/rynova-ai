// src/components/Footer.jsx
import React from 'react';
import useHomeScroll from '../utils/useHomeScroll';
import { Link } from 'react-router-dom';

export default function Footer() {
  const go = useHomeScroll();

  const sectionLinks = [
    ['about', 'Why Rynova'],
    ['industries', 'Industries'],
    ['metrics', 'Metrics'],
    ['success', 'Success Stories'],
    ['journey-timeline', 'System in Action'],
    ['features-platform', 'Features'],
    ['calculator', 'Savings'],
    ['compare', 'How We Compare'],
    ['faq', 'FAQ'],
    ['contact', 'Contact'],
  ];

  return (
    <footer>
      <div className="footer-main">
        <img
          src="/images/logo.png"
          alt="Rynova AI Logo"
          className="footer-logo-img"
        />

        <div className="footer-links">
          {sectionLinks.map(([id, label]) => (
            <a
              key={id}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                go(id); // navigate to "/" then smooth-scroll to the section
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              go('contact'); // Book a Demo -> Contact (or your demo section)
            }}
          >
            Book a Demo
          </a>
        </div>

        <div className="footer-contact">
          <a href="mailto:contact@rynovaai.com">contact@rynovaai.com</a>
        </div>

        <span className="footer-location">Mississauga, ON</span>

        <div className="footer-social">
          <a
            href="https://linkedin.com/company/rynova-ai"
            target="_blank"
            aria-label="LinkedIn"
            className="footer-linkedin"
            rel="noopener noreferrer"
          >
            <svg height="22" width="22" viewBox="0 0 32 32" style={{ verticalAlign: 'middle' }}>
              <circle cx="16" cy="16" r="16" fill="#41ffe3" opacity="0.16" />
              <path
                fill="#41ffe3"
                d="M26 24h-3.429v-5.692c0-1.357-.021-3.104-1.893-3.104-1.894 0-2.184 1.479-2.184 3.007V24H15.064V13h3.292v1.507h.048c.459-.868 1.581-1.783 3.254-1.783 3.482 0 4.125 2.292 4.125 5.275V24zM9.444 11.492A1.99 1.99 0 1 1 9.44 7.51a1.99 1.99 0 0 1 .004 3.982zm1.716 12.508H7.72V13h3.44v11z"
              />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/rynova_ai"
            target="_blank"
            aria-label="Instagram"
            className="footer-linkedin"
            rel="noopener noreferrer"
          >
            <svg width="22" height="22" viewBox="0 0 32 32" style={{ verticalAlign: 'middle' }}>
              <circle cx="16" cy="16" r="16" fill="#41ffe3" opacity="0.16" />
              <g>
                <rect x="9" y="9" width="14" height="14" rx="5" fill="none" stroke="#41ffe3" strokeWidth="2" />
                <circle cx="16" cy="16" r="3.1" fill="none" stroke="#41ffe3" strokeWidth="2" />
                <circle cx="21.4" cy="10.6" r="1.1" fill="#41ffe3" />
              </g>
            </svg>
          </a>

          <a
            href="https://www.facebook.com/people/Rynova-AI/61579099550931/"
            target="_blank"
            aria-label="Facebook"
            className="footer-linkedin"
            rel="noopener noreferrer"
          >
            <svg width="22" height="22" viewBox="0 0 32 32" style={{ verticalAlign: 'middle' }}>
              <circle cx="16" cy="16" r="16" fill="#41ffe3" opacity="0.16" />
              <path
                fill="#41ffe3"
                d="M21.5 16H18v9h-3v-9h-2v-3h2v-1.7c0-2.2 1.2-3.3 3.5-3.3 1 0 1.7.1 1.7.1v3h-1.2c-.7 0-.8.3-.8.8V13h2.7l-.4 3z"
              />
            </svg>
          </a>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div>© 2025 Rynova AI — All rights reserved</div>
          <div>
              <Link to="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link> | <Link to="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
