// src/components/Calculator.jsx
import React, { useEffect, useMemo, useRef, useState } from 'react';

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const Calculator = () => {
  const [rate, setRate] = useState(25);
  const [hours, setHours] = useState(40);
  const [animatedSave, setAnimatedSave] = useState(0);
  const [touched, setTouched] = useState(false);        // NEW
  const reqId = useRef();

  const monthlyCost = useMemo(() => rate * hours * 4, [rate, hours]);
  const aiCost = 997;
  const monthlySavings = useMemo(() => monthlyCost - aiCost, [monthlyCost]);
  const annualSavings = useMemo(() => monthlySavings * 12, [monthlySavings]);

  // Animate only after first interaction
  useEffect(() => {
    if (!touched) return;                                // NEW
    cancelAnimationFrame(reqId.current);
    const startVal = 0;
    const endVal = monthlySavings;
    const dur = 500; let start;
    const tick = (t) => {
      if (!start) start = t;
      const p = clamp((t - start) / dur, 0, 1);
      setAnimatedSave(startVal + (endVal - startVal) * p);
      if (p < 1) reqId.current = requestAnimationFrame(tick);
    };
    reqId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(reqId.current);
  }, [monthlySavings, touched]);                         // UPDATED deps

  const onRateChange = (e) => {                          // NEW
    if (!touched) setTouched(true);
    setRate(parseInt(e.target.value, 10));
  };
  const onHoursChange = (e) => {                         // NEW
    if (!touched) setTouched(true);
    setHours(parseInt(e.target.value, 10));
  };

  return (
    <section id="calculator" className="calculator-section">
      <div className="section-title">Savings Calculator</div>
      <div className="calculator" id="savingsCalc">
        <h3>How much could you save?</h3>

        <label htmlFor="hourlyRate">
          Hourly wage of your receptionist:
          <span id="hourlyRateValue" style={{ color:'#41ffe3', fontWeight:700 }}> ${rate}</span>
        </label>
        <input
          id="hourlyRate"
          type="range"
          min="18"
          max="50"
          step="1"
          value={rate}
          onChange={onRateChange}                         // UPDATED
        />

        <label htmlFor="hoursPerWeek">
          Hours per week:
          <span id="hoursPerWeekValue" style={{ color:'#41ffe3', fontWeight:700 }}> {hours}</span>
          <span style={{ color:'#41ffe3', fontWeight:700 }}>hrs</span>
        </label>
        <input
          id="hoursPerWeek"
          type="range"
          min="5"
          max="50"
          step="1"
          value={hours}
          onChange={onHoursChange}                        // UPDATED
        />

        {/* Only show results after first interaction */}
        {touched && (                                     // NEW conditional
          <div className="result" id="savingsOutput">
            <div className="annual-savings-hero" style={{ textAlign:'center', marginBottom:18 }}>
              <span style={{ color:'#8bfff2', fontSize:'1.01em', fontWeight:700 }}>Annual Savings</span>
              <span style={{ display:'block', color:'#41ffe3', fontSize:'2em', fontWeight:900, margin:'6px 0 2px 0' }}>
                ${annualSavings.toLocaleString()}
              </span>
              <span style={{ color:'#a8ffe5', fontSize:'1.09em', fontWeight:500 }}>Guaranteed with Rynova AI</span>
            </div>
            <div className="calc-breakdown-row">
              <div>
                <div style={{ color:'#a8ffe5', fontSize:'.93em', fontWeight:400, marginBottom:2 }}>Current Cost</div>
                <div style={{ color:'#41ffe3', fontSize:'1.18em', fontWeight:800 }}>${monthlyCost.toFixed(2)}/mo</div>
              </div>
              <div>
                <div style={{ color:'#a8ffe5', fontSize:'.93em', fontWeight:400, marginBottom:2 }}>You Save</div>
                <div id="savingsCount" style={{ color:'#41ffe3', fontSize:'1.18em', fontWeight:800 }}>
                  ${animatedSave.toFixed(2)}/mo
                </div>
              </div>
            </div>
            <div className="calc-note" style={{ textAlign:'center', color:'#a8ffe5', marginTop:5, fontSize:'.9em', fontWeight:500 }}>
              <br/>24/7 coverage & up to 56% more bookings.
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Calculator;
