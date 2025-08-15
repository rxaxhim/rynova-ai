import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Privacy = () => {

  return (
    <>
      <Nav onBookDemo={()=>go('contact')} />
      <Helmet>
        <title>Privacy Policy – Rynova AI</title>
        <meta name="description" content="Read the privacy policy for Rynova AI to understand how we handle your data securely." />
      </Helmet>
      <main>
        <body class="policy-page"></body>
        <div className="policy-container">
          <div className="policy-logo">
            <img src="/images/logo.png" alt="Rynova AI Logo" />
          </div>

          <div className="policy-back">
            <Link to="/" style={{ textDecoration: 'underline' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ verticalAlign: 'middle' }}>
                <path d="M4 11.5L12 4L20 11.5" stroke="#41ffe3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 11.5V19C4 19.8284 4.67157 20.5 5.5 20.5H18.5C19.3284 20.5 20 19.8284 20 19V11.5" stroke="#41ffe3" strokeWidth="2"/>
                <rect x="9" y="15" width="6" height="5" rx="1" fill="none" stroke="#41ffe3" strokeWidth="2"/>
              </svg>
              {' '}Back to Home
            </Link>
          </div>

          <h1>Privacy Policy</h1>
          <p><b>Effective Date:</b> July 9, 2025</p>

          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly via forms on our website, such as your name, email address, phone number, and business details. We may also collect data automatically through cookies and analytics tools (like Google Analytics).</p>

          <h2>2. How We Use Information</h2>
          <ul>
            <li>Respond to inquiries and demo requests</li>
            <li>Book and confirm appointments</li>
            <li>Send you reminders, updates, and relevant offers</li>
            <li>Improve our services and website</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We do not sell your personal information. We may share your data with trusted third-party providers (such as our CRM or email services) solely for the purpose of delivering our services. All such providers are required to protect your data.</p>

          <h2>4. Cookies and Analytics</h2>
          <p>Our site may use cookies to enhance your browsing experience and collect analytics data. You may disable cookies in your browser settings, though some features may not function optimally.</p>

          <h2>5. Data Security</h2>
          <p>We implement standard security measures to protect your information from unauthorized access or disclosure. However, no method of transmission over the Internet is 100% secure.</p>

          <h2>6. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal data at any time. To exercise your rights, please contact us at{' '}
            <a href="mailto:contact@rynovaai.com">contact@rynovaai.com</a>.
          </p>

          <h2>7. Updates to This Policy</h2>
          <p>We may update this policy periodically. Changes will be posted on this page, and the effective date will be updated above.</p>

          <h2>8. Contact</h2>
          <p>
            For questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:contact@rynovaai.com">contact@rynovaai.com</a>.
          </p>

          <p style={{ marginTop: 38, color: '#8deee7', fontSize: '0.98em', textAlign: 'center' }}>
            &copy; 2025 Rynova AI
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
