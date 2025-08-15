// src/pages/HomePage.jsx
import React, { useEffect, useRef, useState } from 'react';
import Nav from '../components/Nav.jsx';
import LogoIntroOverlay from '../components/LogoIntroOverlay.jsx';
import ParticlesBg from '../components/ParticlesBg.jsx';
import Hero from '../components/Hero.jsx';
import MissedCallStats from '../components/MissedCallStats.jsx';
import Features from '../components/Features.jsx';
import Industries from '../components/Industries.jsx';
import Metrics from '../components/Metrics.jsx';
import Cases from '../components/Cases.jsx';
import Timeline from '../components/Timeline.jsx';
import FeaturesPlatform from '../components/FeaturesPlatform.jsx';
import Calculator from '../components/Calculator.jsx';
import Compare from '../components/Compare.jsx';
import FAQ from '../components/FAQ.jsx';
import CTA from '../components/CTA.jsx';
import Footer from '../components/Footer.jsx';
import CalendlyModal from '../components/CalendlyModal.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToId } from '../utils/scroll';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  const [calOpen, setCalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
  const target = location.state?.scrollTo;
  if (target) {
    // Let the page paint first
    setTimeout(() => {
      scrollToId(target);
      // clear state so back/forward doesn't re-trigger
      navigate('.', { replace: true, state: {} });
    }, 0);
  }
}, [location.state, navigate]);

  // ScrollReveal — same selectors you used
  useEffect(() => {
    const SR = window.ScrollReveal;
    if (!SR) return;
    SR().reveal(
      'section, .feature-block, .metric-block, .case-block, .calculator, .cta-section, .header-cta a, .sticky-demo',
      {
        distance: '33px',
        duration: 730,
        easing: 'cubic-bezier(.4,0,.2,1)',
        interval: 60,
        opacity: 0,
        origin: 'bottom',
        scale: 0.99,
        reset: false,
        cleanup: true
      }
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>Rynova AI – Canada’s #1 AI Receptionist & CRM</title>
        <meta name="description" content="Rynova AI helps businesses handle calls, bookings, reminders, and more with a 24/7 virtual AI assistant." />
      </Helmet>
      <LogoIntroOverlay />
      <ParticlesBg />
      <Nav onBookDemo={() => setCalOpen(true)} />
      <Hero onBookDemo={() => setCalOpen(true)} />
      <main>
        <MissedCallStats />
        <Features />
        <Industries />
        <Metrics />
        <Cases />
        <Timeline />
        <FeaturesPlatform />
        <Calculator />
        <Compare />
        <FAQ />
        <CTA onBookDemo={() => setCalOpen(true)} />
        <Footer />
      </main>
      <CalendlyModal open={calOpen} onClose={() => setCalOpen(false)} />
    </>
  );
};

export default HomePage;
