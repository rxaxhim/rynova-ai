// src/components/LogoIntroOverlay.jsx
import React, { useEffect, useRef } from 'react';

const LogoIntroOverlay = () => {
  const overlayRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const introLogo = logoRef.current;
    const heroLogo = document.getElementById('hero-logo');
    if (!overlay || !introLogo || !heroLogo) return;

    const run = () => {
      const heroRect = heroLogo.getBoundingClientRect();
      const introRect = introLogo.getBoundingClientRect();
      const heroCenterX = heroRect.left + heroRect.width / 2;
      const heroCenterY = heroRect.top + heroRect.height / 2;
      const introCenterX = introRect.left + introRect.width / 2;
      const introCenterY = introRect.top + introRect.height / 2;
      const scale = heroRect.width / introRect.width;
      const deltaX = heroCenterX - introCenterX;
      const deltaY = heroCenterY - introCenterY - 5;

      introLogo.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;
      introLogo.style.boxShadow = '0 0 30px #41ffe399, 0 0 100px #00f6bf60';
      introLogo.style.opacity = '0.95';
      setTimeout(() => {
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
      }, 1100);
      setTimeout(() => overlay.remove(), 1650);
      setTimeout(() => {
        const hl = document.getElementById('hero-logo');
        if (hl) hl.style.opacity = '1';
      }, 1200);
    };

    const t = setTimeout(run, 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      id="logo-intro-overlay"
      ref={overlayRef}
      style={{
        position:'fixed',zIndex:9999,inset:0,display:'flex',alignItems:'center',justifyContent:'center',
        background:'linear-gradient(160deg,#101624 60%,#0b1019 100%)',
        transition:'opacity .6s cubic-bezier(.4,0,.2,1)'
      }}
    >
      <img
        id="logo-intro-img"
        ref={logoRef}
        src="/images/logo.png"
        alt="Rynova Logo Intro"
        style={{
          width:'210px',maxWidth:'44vw',borderRadius:0,
          transition:'all 1s cubic-bezier(.76,1.9,.14,.97)'
        }}
      />
    </div>
  );
};
export default LogoIntroOverlay;
