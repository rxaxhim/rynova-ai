// src/components/ParticlesBg.jsx
import React, { useEffect } from 'react';

const ParticlesBg = () => {
  useEffect(() => {
    const ts = window.tsParticles;
    if (!ts) return;
    ts.load('bg-particles', {
      fpsLimit: 60,
      particles: {
        color: { value: "#00f6bf" },
        links: { color: "#00f6bf", enable: true, distance: 108, opacity: 0.09, width: 1.1 },
        move: { enable: true, speed: 1.04, direction: "none", outModes: "out" },
        number: { value: 60 },
        opacity: { value: 0.16 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3.1 } }
      },
      interactivity: { events: { onHover: { enable: false }, onClick: { enable: false } } },
      detectRetina: true,
      background: { color: "transparent" }
    });
  }, []);
  return <div id="bg-particles"></div>;
};
export default ParticlesBg;
