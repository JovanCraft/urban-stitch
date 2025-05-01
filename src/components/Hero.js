import React from 'react';
import './Hero.css';

function Hero({ onShopClick }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Urban Stitch</h1>
        <p>Redefining everyday fashion with edge</p>
        <button onClick={onShopClick}>Shop Now</button>
      </div>
    </section>
  );
}

export default Hero;
