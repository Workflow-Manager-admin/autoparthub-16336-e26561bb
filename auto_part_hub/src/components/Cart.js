import React from "react";

/**
 * PUBLIC_INTERFACE
 * Cart component displays items selected for purchase.
 */
const Cart = () => {
  // Placeholder cart state
  const items = [
    { id: 1, name: "Brake Pads", price: 40, qty: 2 }
  ];

  return (
    <div className="cart" style={{ padding: 24 }}>
      <h2>Your Cart</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} x{item.qty} — ${item.price * item.qty}</li>
        ))}
      </ul>
      <button className="btn btn-large" style={{ marginTop: 20 }}>Checkout</button>
    </div>
  );
};

export default Cart;
