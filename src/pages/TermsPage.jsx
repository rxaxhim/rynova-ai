import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import { Helmet } from 'react-helmet';

export default function TermsPage() {
  return (
    <>
      <Nav onBookDemo={() => window.location.href = '/#contact'} />
      <Helmet>
        <title>Terms of Service – Rynova AI</title>
        <meta name="description" content="Read the terms of service for Rynova AI to understand our service agreement and user responsibilities." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rynovaai.com/terms" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Terms of Service – Rynova AI" />
        <meta property="og:description" content="Read the terms of service for Rynova AI to understand our service agreement and user responsibilities." />
        <meta property="og:url" content="https://www.rynovaai.com/terms" />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service",
            "description": "Read the terms of service for Rynova AI to understand our service agreement and user responsibilities.",
            "url": "https://www.rynovaai.com/terms",
            "mainEntity": {
              "@type": "Article",
              "name": "Terms of Service",
              "datePublished": "2025-07-09",
              "dateModified": "2025-07-09",
              "author": {
                "@type": "Organization",
                "name": "Rynova AI"
              }
            }
          })}
        </script>
      </Helmet>
      <main className="policy-page">
        <div className="policy-container">
          <div className="policy-logo">
            <img src="/images/logo.png" alt="Rynova AI Logo" />
          </div>

          {/* Back to Home link */}
          <div className="policy-back">
            <Link to="/">
              {/* tiny home svg */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{verticalAlign:'middle'}}>
                <path d="M4 11.5L12 4L20 11.5" stroke="#41ffe3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 11.5V19c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-7.5" stroke="#41ffe3" strokeWidth="2"/>
                <rect x="9" y="15" width="6" height="5" rx="1" fill="none" stroke="#41ffe3" strokeWidth="2"/>
              </svg>
              &nbsp;Back to Home
            </Link>
          </div>

          <h1>Terms of Service</h1>
          <p><b>Effective Date:</b> July 9, 2025</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the Rynova AI website or services, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

          <h2>2. Service Description</h2>
          <p>Rynova AI provides AI-powered appointment booking, client follow-up, and related automation solutions for businesses. We may update or modify the service at any time.</p>

          <h2>3. User Responsibilities</h2>
          <ul>
            <li>You agree to use the service only for lawful purposes and in accordance with these terms.</li>
            <li>You must not misuse the service (including spamming, hacking, or violating others' rights).</li>
            <li>If you create an account, you are responsible for maintaining its security and confidentiality.</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>All content, trademarks, logos, and technology on this website are the property of Rynova AI or its licensors. You may not copy, modify, or distribute our materials without permission.</p>

          <h2>5. Disclaimers and Limitation of Liability</h2>
          <p>The service is provided "as is" and without warranty of any kind. Rynova AI is not liable for any indirect, incidental, or consequential damages arising from your use of the service.</p>

          <h2>6. Termination</h2>
          <p>We reserve the right to suspend or terminate your access to our service at our discretion, without notice, for any reason, including violation of these terms.</p>

          <h2>7. Governing Law</h2>
          <p>These terms are governed by the laws of Ontario, Canada. Any disputes will be resolved in the courts of Ontario.</p>

          <h2>8. Changes to Terms</h2>
          <p>We may update these Terms of Service at any time. Changes will be posted on this page, and your continued use of the service constitutes acceptance of those changes.</p>

          <h2>9. Contact</h2>
          <p>
            If you have questions about these Terms, please contact us at{' '}
            <a href="mailto:contact@rynovaai.com">contact@rynovaai.com</a>.
          </p>

          <p style={{marginTop:38, color:'#8deee7', fontSize:'0.98em', textAlign:'center'}}>
            &copy; 2025 Rynova AI
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
