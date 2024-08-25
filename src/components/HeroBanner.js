import React from 'react';
import headerImg from "../assets/images/realEstate.png"
import './HeroBanner.css';

const HeroBanner = ({ image, title, subtitle }) => (
  <div className="hero-banner" style={{ backgroundImage: `url(${headerImg})` }}>
    <div className="hero-content">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </div>
);

export default HeroBanner;
