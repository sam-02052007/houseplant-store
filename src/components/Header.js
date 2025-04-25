import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header style={{ padding: '1rem', background: '#f8f8f8' }}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          Cart ({cartQuantity})
        </Link>
      </nav>
    </header>
  );
}

export default Header;