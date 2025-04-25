import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, deleteFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalCost = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div>
      <h2>Shopping Cart ({totalQuantity} items)</h2>
      <p>Total: ${totalCost.toFixed(2)}</p>
      
      {cartItems.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <div>
            <button onClick={() => dispatch(removeFromCart(item.id))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(addToCart(item))}>+</button>
            <button onClick={() => dispatch(deleteFromCart(item.id))}>Delete</button>
          </div>
        </div>
      ))}

      <button onClick={() => alert('Coming Soon!')}>Checkout</button>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default Cart;