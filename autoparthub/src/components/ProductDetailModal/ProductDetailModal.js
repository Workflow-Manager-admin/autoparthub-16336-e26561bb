// PUBLIC_INTERFACE
import React from 'react';
import Modal from '../Modal/Modal';

/**
 * ProductDetailModal - displays full details of the selected part in a modal.
 * @param {Object} part - The selected part object (expects name, image, etc)
 * @param {Function} onClose - function to close the modal
 * @param {Function} onAddToCart - optional: add this part to cart
 */
function ProductDetailModal({ part, onClose, onAddToCart }) {
  if (!part) return null;

  const { name, image, price, description, reviews } = part;
  const placeholder = 'https://via.placeholder.com/160x160?text=No+Image';

  const handleAddToCart = () => {
    if (typeof onAddToCart === 'function') {
      onAddToCart(part);
    }
  };

  // Render rating as stars
  function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const result = [];
    for (let i = 0; i < 5; i++) {
      result.push(
        <span
          key={i}
          aria-hidden="true"
          style={{
            color: i < fullStars ? '#e87a41' : '#e0e0e0',
            fontSize: '1.11em',
            marginRight: 1
          }}
        >
          ★
        </span>
      );
    }
    return result;
  }

  return (
    <Modal isOpen={!!part} onClose={onClose}>
      <div className="product-detail-modal-content" style={{
        textAlign: 'center',
        minWidth: 290,
        padding: '8px 8px 22px 8px'
      }}>
        {image ? (
          <img
            src={image}
            alt={name}
            style={{
              width: 160,
              height: 160,
              objectFit: 'contain',
              background: '#f3f6f9',
              borderRadius: 9,
              marginBottom: 18,
              border: '1px solid #ececec'
            }}
            onError={e => {
              e.target.onerror = null;
              e.target.src = placeholder;
            }}
          />
        ) : (
          <div
            style={{
              width: 160,
              height: 160,
              background: '#e0e0e0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              borderRadius: '9px',
              margin: '0 auto 18px auto',
              border: '1px solid #dadada',
              userSelect: 'none'
            }}
            aria-label="No image available"
            data-testid="product-detail-modal-image-placeholder"
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true" style={{ marginBottom: 5 }}>
              <rect x="6" y="15" width="48" height="30" rx="9" fill="#bbbbbb" />
              <circle cx="23" cy="30" r="8" fill="#dedede" />
              <rect x="32" y="26" width="17" height="13" rx="4" fill="#dedede" />
            </svg>
            <span style={{ color: '#969696', marginTop: 2, fontSize: 15, fontWeight: 500 }}>No Image Available</span>
          </div>
        )}
        <h2 style={{ marginBottom: 6 }}>{name}</h2>
        <div
          style={{
            color: '#e87a41',
            fontWeight: 600,
            fontSize: '1.22rem',
            marginBottom: 6,
            letterSpacing: 0.01
          }}
          aria-label="Price"
        >
          ${price != null ? price.toFixed(2) : '—'}
        </div>
        <div
          style={{
            fontSize: '1.04rem',
            color: '#343432',
            marginBottom: '18px',
            lineHeight: '1.45',
            textAlign: 'center'
          }}
        >
          {description}
        </div>
        <div style={{ color: '#757575', fontSize: '0.99rem', marginBottom: '18px' }}>
          <em>More specifications and compatibility info coming soon.</em>
        </div>
        {onAddToCart && (
          <button
            className="btn"
            type="button"
            onClick={handleAddToCart}
            style={{ marginBottom: 14, minWidth: 120, fontSize: '1.04rem' }}
          >
            Add to Cart
          </button>
        )}
        {/* REVIEWS SECTION */}
        <div
          style={{
            marginTop: 28,
            marginBottom: 3,
            textAlign: 'left',
            background: '#faf8f6',
            borderRadius: 9,
            padding: '16px 13px 12px 13px',
            boxShadow: '0 2px 3px 0 rgba(230,215,195,0.05)',
            maxWidth: 420,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <div style={{ fontWeight: 600, fontSize: '1.13rem', marginBottom: 9, color: '#e87a41' }}>
            Reviews
          </div>
          {reviews && reviews.length > 0 ? (
            <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
              {reviews.map((r, i) => (
                <li
                  key={r.reviewer + '-' + i}
                  style={{
                    marginBottom: 15,
                    borderBottom: '1px solid #eee',
                    paddingBottom: 8
                  }}
                >
                  <span style={{ fontWeight: 500, color: '#232323', fontSize: '1rem' }}>
                    {r.reviewer}
                  </span>
                  <span style={{ marginLeft: 9, verticalAlign: 'middle' }} aria-label={`Rating: ${r.rating} out of 5`}>
                    {renderStars(r.rating)}
                  </span>
                  <div style={{
                    fontSize: '0.97rem',
                    color: '#474747',
                    marginTop: 3,
                  }}>
                    {r.text}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div style={{ color: '#969696', fontSize: '0.99rem', marginBottom: 5 }}>
              No reviews yet.
            </div>
          )}
          {/* MOCK REVIEW FORM */}
          <form
            style={{
              marginTop: 17,
              paddingTop: 8,
              borderTop: '1px solid #e8e6e2',
              display: 'flex',
              flexDirection: 'column',
              gap: 7
            }}
            onSubmit={e => e.preventDefault()}
          >
            <div style={{ fontSize: '1.02rem', fontWeight: 500, color: '#333' }}>
              Leave a Review (coming soon)
            </div>
            <input
              type="text"
              placeholder="Your name"
              style={{
                padding: '6px 9px',
                borderRadius: 5,
                border: '1px solid #dadada',
                fontSize: '1rem',
                marginBottom: 4
              }}
              disabled
            />
            <select
              style={{
                padding: '5px 8px',
                borderRadius: 5,
                border: '1px solid #dadada',
                fontSize: '1rem',
                marginBottom: 4
              }}
              disabled
            >
              <option>Rating</option>
              <option>5 - Excellent</option>
              <option>4 - Good</option>
              <option>3 - Average</option>
              <option>2 - Fair</option>
              <option>1 - Poor</option>
            </select>
            <textarea
              placeholder="Write your review..."
              style={{
                borderRadius: 5,
                border: '1px solid #dadada',
                minHeight: 40,
                fontSize: '1rem',
                padding: '7px 8px',
                resize: 'vertical'
              }}
              disabled
            />
            <button
              type="submit"
              className="btn"
              style={{
                background: '#e87a41',
                color: '#fff',
                border: 'none',
                borderRadius: 5,
                fontSize: '1.01rem',
                padding: '8px 16px',
                fontWeight: 500,
                opacity: 0.75,
                cursor: 'not-allowed'
              }}
              disabled
            >
              Submit Review
            </button>
          </form>
        </div>
        {/* END REVIEWS */}
        <button className="btn" type="button" onClick={onClose} style={{ marginTop: 8 }}>
          Close
        </button>
      </div>
    </Modal>
  );
}

export default ProductDetailModal;
