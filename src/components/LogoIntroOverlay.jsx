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

    // ensure hero logo starts hidden & has a transition
    heroLogo.style.opacity = '0';
    heroLogo.style.transition = 'opacity .35s ease';

    // prepare intro logo transitions (add box-shadow transition!)
    introLogo.style.transition =
      'transform 1s cubic-bezier(.76,1.9,.14,.97), box-shadow .9s ease';
    // start with a soft, subtle glow
    introLogo.style.boxShadow = '0 0 6px #41ffe320, 0 0 22px #00f6bf14';
    introLogo.style.opacity = '1';

    const run = () => {
      const heroRect  = heroLogo.getBoundingClientRect();
      const introRect = introLogo.getBoundingClientRect();
      const heroCenterX  = heroRect.left + heroRect.width / 2;
      const heroCenterY  = heroRect.top  + heroRect.height / 2;
      const introCenterX = introRect.left + introRect.width / 2;
      const introCenterY = introRect.top  + introRect.height / 2;
      const scale  = heroRect.width / introRect.width;
      const deltaX = heroCenterX - introCenterX;
      const deltaY = heroCenterY - introCenterY - 5;

      // kick off the transform
      introLogo.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;

      // on the next frame, ramp the glow so it animates smoothly
      requestAnimationFrame(() => {
        introLogo.style.boxShadow = '0 0 30px #41ffe399, 0 0 100px #00f6bf60';
      });

      // 1) fade hero in first
      setTimeout(() => {
        heroLogo.style.opacity = '1';
      }, 850);

      // 2) then fade overlay away
      setTimeout(() => {
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
      }, 1150);

      // 3) remove overlay
      setTimeout(() => overlay.remove(), 1700);
    };

    const t = setTimeout(run, 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      id="logo-intro-overlay"
      ref={overlayRef}
      style={{
        position:'fixed', zIndex:9999, inset:0,
        display:'flex', alignItems:'center', justifyContent:'center',
        background:'linear-gradient(160deg,#101624 60%,#0b1019 100%)',
        transition:'opacity .5s cubic-bezier(.4,0,.2,1)',
        willChange:'opacity'
      }}
    >
      <img
        id="logo-intro-img"
        ref={logoRef}
        src="/images/logo.png"
        alt="Rynova Logo Intro"
        style={{
          width:'210px', maxWidth:'44vw',
          borderRadius:0,
          transform:'translateZ(0)', // GPU nudge
          // transform + box-shadow transition is set in JS to avoid SSR warnings
          willChange:'transform, box-shadow, opacity',
          opacity:1
        }}
      />
    </div>
  );
};

export default LogoIntroOverlay;
