// src/components/CalendlyModal.jsx
import React, { useEffect, useRef } from 'react';

const CalendlyModal = ({ open, onClose }) => {
  const frameRef = useRef(null);
  useEffect(() => {
    if (open && frameRef.current) {
      frameRef.current.src =
        "https://calendly.com/rynovaai/30min?hide_gdpr_banner=1&background_color=161e2b&text_color=41ffe3&primary_color=41ffe3";
      document.body.style.overflow = 'hidden';
    } else {
      if (frameRef.current) frameRef.current.src = '';
      document.body.style.overflow = '';
    }
  }, [open]);

  if (!open) return null;
  return (
    <div id="calendlyModal" style={{display:'block'}}>
      <div id="calendlyOverlay"
        style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:2001,
          background:'rgba(18,22,35,0.54)',backdropFilter:'blur(5px)',
          display:'flex',alignItems:'center',justifyContent:'center'}}
        onClick={(e)=>{ if (e.target.id==='calendlyOverlay') onClose(); }}
      >
        <div id="calendlyBox"
          style={{position:'relative',background:'#161e2b',borderRadius:14,boxShadow:'0 10px 40px #14ffe31c',
                  width:'94vw',maxWidth:410,height:600,padding:0,display:'flex',flexDirection:'column'}}>
          <button id="closeCalendly"
            style={{position:'absolute',top:10,right:13,background:'transparent',border:'none',
                    color:'#41ffe3',fontSize:'2.1rem',fontWeight:800,lineHeight:1,zIndex:2002,cursor:'pointer'}}
            onClick={onClose}>&times;</button>
          <iframe ref={frameRef} title="Calendly" style={{width:'100%',height:'100%',border:'none',borderRadius:13,overflow:'hidden'}} allowTransparency={true} />
        </div>
      </div>
    </div>
  );
};
export default CalendlyModal;
