// src/components/Metrics.jsx
import React from 'react';
const Block = ({num, label}) => (
  <div className="metric-block"><h3>{num}</h3><p>{label}</p></div>
);
const Metrics = () => (
  <section id="metrics" className="metrics-section">
    <div className="metrics-title">Metrics That Matter</div>
    <div className="metrics-row">
      <Block num="100%" label="Missed Calls Answered"/>
      <Block num="+220%" label="Higher Lead Conversion"/>
      <Block num="56%" label="More Bookings per Month"/>
      <Block num="15s" label="Median Callback Time"/>
      <Block num="99.9%" label="Message Delivery Success"/>
      <Block num="52%" label="Clients Re-engaged"/>
      <Block num="55%" label="No-show Reduction"/>
      <Block num="5x" label="Faster Lead Response"/>
      <Block num="80%" label="Cost Savings Delivered"/>
    </div>
  </section>
);
export default Metrics;
