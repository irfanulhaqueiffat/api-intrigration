import React, { useState } from 'react';
import '../App.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    // {
    //   id: 1,
    //   name: 'Product 1',
    //   price: 99.99,
    //   quantity: 1,
    //   image: 'https://via.placeholder.com/150'
    // },
    // {
    //   id: 2,
    //   name: 'Product 2',
    //   price: 149.99,
    //   quantity: 2,
    //   image: 'https://via.placeholder.com/150'
    // }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity >= 0) {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart-container">
      <h1> Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total: tk{calculateTotal().toFixed(2)}</h2>
        <button className="checkout-btn">Please  Checkout</button>
      </div>
    </div>
  );
};

export default Cart;