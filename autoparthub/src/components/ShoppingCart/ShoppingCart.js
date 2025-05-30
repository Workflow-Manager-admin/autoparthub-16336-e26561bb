import React from 'react';
import './ShoppingCart.css';

/**
 * PUBLIC_INTERFACE
 * ShoppingCart modal/panel:
 * @param {boolean} isOpen - whether cart panel is open
 * @param {Function} onClose - function to hide cart
 * @param {Array} cart - items in cart [{name, price, quantity, image,...}]
 * @param {Function} onRemove - decrement quantity of item
 * @param {Function} onRemoveItemCompletely - remove item from cart
 */
function ShoppingCart({ isOpen, onClose, cart = [], onRemove, onRemoveItemCompletely }) {
  if (!isOpen) return null;

  const empty = !cart || cart.length === 0;
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="cart-modal-backdrop">
      <div className="cart-panel">
        <div className="cart-panel-header">
          <span className="cart-title" style={{ fontWeight: 600, fontSize: '1.18rem' }}>
            Shopping Cart
          </span>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart panel">&times;</button>
        </div>
        <div className="cart-panel-content">
          {empty ? (
            <div className="cart-empty" style={{ textAlign: 'center', color: '#757575', marginTop: 24 }}>
              Your cart is empty.
            </div>
          ) : (
            <ul className="cart-items-list">
              {cart.map((item) => (
                <li key={item.name} className="cart-item">
                  <div className="cart-item-img-wrap">
                    <img
                      src={item.image || 'https://via.placeholder.com/60x60?text=No+Image'}
                      alt={item.name}
                      className="cart-item-img"
                      style={{
                        width: 54, height: 54, borderRadius: 8, objectFit: 'contain', background: '#f5f5f5', border: '1px solid #eee'
                      }}
                    />
                  </div>
                  <div className="cart-item-details">
                    <span style={{ fontWeight: 600 }}>{item.name}</span>
                    <div style={{ fontSize: '0.98rem', color: '#e87a41', fontWeight: 600 }}>
                      ${item.price?.toFixed(2)}
                    </div>
                    <span style={{ fontSize: '0.95rem', color: '#757575' }}>
                      Quantity: {item.quantity}
                    </span>
                  </div>
                  <div className="cart-item-actions">
                    <button
                      className="btn cart-btn-remove"
                      type="button"
                      onClick={() => onRemove && onRemove(item.name)}
                      aria-label="Remove one"
                      style={{ fontSize: '1.08rem', padding: '4px 9px', marginRight: 2 }}
                    >–</button>
                    <button
                      className="btn cart-btn-delete"
                      type="button"
                      onClick={() => onRemoveItemCompletely && onRemoveItemCompletely(item.name)}
                      aria-label="Remove item"
                      style={{
                        background: '#fff0f0',
                        border: '1.2px solid #e87a41',
                        color: '#e87a41',
                        fontSize: '1.07rem',
                        marginLeft: 2,
                        padding: '3px 7px'
                      }}
                    >✕</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="cart-panel-footer" style={{ paddingTop: 7, paddingBottom: 5, textAlign: 'end' }}>
          {!empty && (
            <>
              <span style={{ fontWeight: 700, fontSize: '1.07rem', color: '#222', marginRight: 12 }}>
                Total: ${totalPrice.toFixed(2)}
              </span>
              <button className="btn btn-large" style={{ fontSize: '1.05rem' }} disabled>
                Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
