// src/components/BrandMarquee.jsx
import React, { useEffect, useRef } from 'react';

const Logo = ({ src, alt }) => (
  <span className="logo-reflect">
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
    />
    <img
      src={src}
      alt={`${alt} Reflection`}
      className="logo-reflection-img"
      loading="lazy"
      decoding="async"
    />
  </span>
);

const Track = () => (
  <div className="logo-marquee-under">
    <Logo src="/images/google.png" alt="Google" />
    <Logo src="/images/twilio.png" alt="Twilio" />
    <Logo src="/images/openai.png" alt="OpenAI" />
    <Logo src="/images/n8n.png" alt="n8n" />
    <Logo src="/images/ghl.png" alt="ghl" />
    <Logo src="/images/square.png" alt="Square" />
    <Logo src="/images/hubspot.png" alt="HubSpot" />
    <Logo src="/images/monday.png" alt="Monday" />
    <Logo src="/images/zenoti.png" alt="Zenoti" />
  </div>
);

const BrandMarquee = () => {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapRef.current;
    if (!wrapper) return;

    let raf;
    const tick = () => {
      wrapper.scrollLeft += 1;
      if (wrapper.scrollLeft >= wrapper.scrollWidth / 2) {
        wrapper.scrollLeft = 0;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="brand-marquee-wrap">
      <div className="brand-marquee-inner" ref={wrapRef}>
        <Track />
        <Track />
      </div>
    </div>
  );
};

export default BrandMarquee;
