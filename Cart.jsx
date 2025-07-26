import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function Cart() {
  const items = useSelector((state) => state.cart.items);

  if (items.length === 0) return <p className="cart">Your cart is empty.</p>;

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Cart;
