import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div style={{ 
      backgroundImage: "url('https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=1600')",
      minHeight: '100vh',
      backgroundSize: 'cover'
    }}>
      <h1>GreenThumb Haven</h1>
      <p>
        Welcome to GreenThumb Haven, your premier destination for beautiful houseplants.
        We specialize in providing high-quality, carefully selected plants that bring life
        and freshness to your living spaces.
      </p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;