// src/components/Compare.jsx
import React from 'react';

const Compare = () => (
  <section className="compare-section" id="compare">
    <div className="section-title">Rynova vs Competitors</div>
    <div className="compare-table-wrap">
      <table className="compare-table">
        <thead>
          <tr>
            <th>Features</th>
            <th>Rynova</th>
            <th>Others</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Complete Solution:{' '}
              <span style={{ fontWeight: 400, fontSize: '0.97em' }}>
                Voice AI, Calendar/CRM integration, and full setup—no extra work.
              </span>
            </td>
            <td className="yes">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#41ffe3" opacity="0.13" />
                <path
                  d="M6 11.8l3 3 7-7"
                  stroke="#41ffe3"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </td>
            <td className="no">
              <div style={{ fontSize: '0.98em', color: '#ff8a93', fontWeight: 600 }}>Voice AI Only</div>
              <div style={{ fontSize: '0.66em', color: '#c6bfcf', fontWeight: 200 }}>
                You do the integrations
                <br />
                and setup yourself
              </div>
            </td>
          </tr>

          <tr>
            <td>All-in-One CRM Platform (leads, automations, reviews, sales)</td>
            <td className="yes">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#41ffe3" opacity="0.13" />
                <path
                  d="M6 11.8l3 3 7-7"
                  stroke="#41ffe3"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </td>
            <td className="partial">Limited</td>
          </tr>

          <tr>
            <td>Custom CRM Integration (GHL, HubSpot, Square, etc.)</td>
            <td className="yes">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#41ffe3" opacity="0.13" />
                <path
                  d="M6 11.8l3 3 7-7"
                  stroke="#41ffe3"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </td>
            <td className="partial">
              Limited
              <div
                style={{
                  fontSize: '0.75em',
                  color: '#c6bfcf',
                  fontWeight: 200,
                  lineHeight: 1.2
                }}
              >
                You do the integrations
                <br />
                and setup yourself
              </div>
            </td>
          </tr>

          <tr>
            <td>Unlimited calls, texts, minutes, bookings</td>
            <td className="yes">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#41ffe3" opacity="0.13" />
                <path
                  d="M6 11.8l3 3 7-7"
                  stroke="#41ffe3"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </td>
            <td className="no">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#ff8a93" opacity="0.13" />
                <path
                  d="M7.5 7.5l7 7m0-7l-7 7"
                  stroke="#ff8a93"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </td>
          </tr>

          <tr>
            <td>Built-in Email &amp; SMS Marketing Campaigns</td>
            <td className="yes">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#41ffe3" opacity="0.13" />
                <path
                  d="M6 11.8l3 3 7-7"
                  stroke="#41ffe3"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </td>
            <td className="no">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#ff8a93" opacity="0.13" />
                <path
                  d="M7.5 7.5l7 7m0-7l-7 7"
                  stroke="#ff8a93"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </td>
          </tr>

          <tr>
            <td>Professional Website &amp; Funnels Included</td>
            <td className="yes">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#41ffe3" opacity="0.13" />
                <path
                  d="M6 11.8l3 3 7-7"
                  stroke="#41ffe3"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </td>
            <td className="no">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#ff8a93" opacity="0.13" />
                <path
                  d="M7.5 7.5l7 7m0-7l-7 7"
                  stroke="#ff8a93"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </td>
          </tr>

          <tr>
            <td>AI-powered Campaign &amp; Promo Optimization</td>
            <td className="yes">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#41ffe3" opacity="0.13" />
                <path
                  d="M6 11.8l3 3 7-7"
                  stroke="#41ffe3"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </td>
            <td className="no">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#ff8a93" opacity="0.13" />
                <path
                  d="M7.5 7.5l7 7m0-7l-7 7"
                  stroke="#ff8a93"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </td>
          </tr>

          <tr>
            <td>Google review campaigns &amp; reputation management</td>
            <td className="yes">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#41ffe3" opacity="0.13" />
                <path
                  d="M6 11.8l3 3 7-7"
                  stroke="#41ffe3"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </td>
            <td className="no">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#ff8a93" opacity="0.13" />
                <path
                  d="M7.5 7.5l7 7m0-7l-7 7"
                  stroke="#ff8a93"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </td>
          </tr>

          <tr>
            <td>Bookings, reschedules, cancellations</td>
            <td className="yes">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#41ffe3" opacity="0.13" />
                <path
                  d="M6 11.8l3 3 7-7"
                  stroke="#41ffe3"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </td>
            <td className="partial">Limited</td>
          </tr>

          <tr>
            <td>Multi-location &amp; multi-staff support</td>
            <td className="yes">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#41ffe3" opacity="0.13" />
                <path
                  d="M6 11.8l3 3 7-7"
                  stroke="#41ffe3"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </td>
            <td className="no">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#ff8a93" opacity="0.13" />
                <path
                  d="M7.5 7.5l7 7m0-7l-7 7"
                  stroke="#ff8a93"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </td>
          </tr>

          <tr>
            <td>24/7 service (no extra cost)</td>
            <td className="yes">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#41ffe3" opacity="0.13" />
                <path
                  d="M6 11.8l3 3 7-7"
                  stroke="#41ffe3"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </td>
            <td className="partial">Limited</td>
          </tr>

          <tr>
            <td>Re-engages past &amp; lost clients automatically</td>
            <td className="yes">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#41ffe3" opacity="0.13" />
                <path
                  d="M6 11.8l3 3 7-7"
                  stroke="#41ffe3"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </td>
            <td className="no">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#ff8a93" opacity="0.13" />
                <path
                  d="M7.5 7.5l7 7m0-7l-7 7"
                  stroke="#ff8a93"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </td>
          </tr>

          <tr>
            <td>Live call transfer &amp; escalation</td>
            <td className="yes">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#41ffe3" opacity="0.13" />
                <path
                  d="M6 11.8l3 3 7-7"
                  stroke="#41ffe3"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </td>
            <td className="no">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#ff8a93" opacity="0.13" />
                <path
                  d="M7.5 7.5l7 7m0-7l-7 7"
                  stroke="#ff8a93"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </td>
          </tr>

          <tr>
            <td>Business phone number provided (no extra charge)</td>
            <td className="yes">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#41ffe3" opacity="0.13" />
                <path
                  d="M6 11.8l3 3 7-7"
                  stroke="#41ffe3"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </td>
            <td className="no">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#ff8a93" opacity="0.13" />
                <path
                  d="M7.5 7.5l7 7m0-7l-7 7"
                  stroke="#ff8a93"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </td>
          </tr>

          <tr>
            <td>Go live in 1 week</td>
            <td className="yes">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#41ffe3" opacity="0.13" />
                <path
                  d="M6 11.8l3 3 7-7"
                  stroke="#41ffe3"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </td>
            <td className="no">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#ff8a93" opacity="0.13" />
                <path
                  d="M7.5 7.5l7 7m0-7l-7 7"
                  stroke="#ff8a93"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </td>
          </tr>

          <tr>
            <td>No hidden fees, flat monthly rate</td>
            <td className="yes">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#41ffe3" opacity="0.13" />
                <path
                  d="M6 11.8l3 3 7-7"
                  stroke="#41ffe3"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </td>
            <td className="no">
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#ff8a93" opacity="0.13" />
                <path
                  d="M7.5 7.5l7 7m0-7l-7 7"
                  stroke="#ff8a93"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default Compare;
