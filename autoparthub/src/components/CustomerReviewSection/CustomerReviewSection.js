import React, { useState } from 'react';
import './CustomerReviewSection.css';

// Dummy initial app-level reviews (not linked to products)
const INITIAL_REVIEWS = [
  {
    reviewer: "Kelly A.",
    rating: 5,
    text: "AutoPartHub made finding the right parts for my car so easy! Loved the fast checkout.",
  },
  {
    reviewer: "Vikram S.",
    rating: 4,
    text: "Wide selection and the site feels modern. Would be even better with more payment options.",
  },
  {
    reviewer: "Dana P.",
    rating: 5,
    text: "Super intuitive interface and quick delivery. I trust this site for all my car needs.",
  },
  {
    reviewer: "Jules G.",
    rating: 4,
    text: "Overall great site - appreciated the live tracking and simple filters.",
  },
];

// PUBLIC_INTERFACE
/**
 * CustomerReviewSection displays overall app feedback and a mock form for new reviews.
 */
function CustomerReviewSection() {
  // Demo: new "reviews" only update local state
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);

  // Mock form state (doesn't persist)
  const [form, setForm] = useState({ name: '', rating: '5', text: '' });
  const [formTouched, setFormTouched] = useState(false);

  // PUBLIC_INTERFACE
  // For demo: Add review locally (not persisted, no backend)
  function handleMockSubmit(e) {
    e.preventDefault();
    if (form.name.trim() && form.text.trim()) {
      setReviews([
        { reviewer: form.name.trim(), rating: parseInt(form.rating), text: form.text.trim() },
        ...reviews,
      ]);
      setForm({ name: '', rating: '5', text: '' });
      setFormTouched(false);
    } else {
      setFormTouched(true);
    }
  }

  // Render stars: filled for rating, outlined for rest (max 5)
  function renderStars(rating = 0) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`crs-star${i < rating ? ' filled' : ''}`}
          aria-hidden="true"
        >
          ★
        </span>
      );
    }
    return stars;
  }

  return (
    <aside className="customer-review-section" aria-label="Customer Reviews">
      <h3 className="crs-title">What Users Say</h3>
      <ul className="crs-review-list">
        {reviews.map((r, idx) => (
          <li className="crs-review-item" key={r.reviewer + idx}>
            <span className="crs-reviewer">{r.reviewer}</span>
            <span className="crs-stars" aria-label={`Rating: ${r.rating} out of 5`}>
              {renderStars(r.rating)}
            </span>
            <span className="crs-review-text">{r.text}</span>
          </li>
        ))}
      </ul>

      <div className="crs-form-wrapper">
        <div className="crs-form-title">Leave Feedback</div>
        <form className="crs-form" onSubmit={handleMockSubmit} autoComplete="off">
          <label>
            <span className="crs-label">Your name</span>
            <input
              className="crs-input"
              type="text"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              placeholder="Enter your name"
              aria-label="Name"
              maxLength={28}
              required
              style={{ borderColor: formTouched && !form.name ? 'var(--kavia-orange, #e87a41)' : undefined }}
            />
          </label>
          <label>
            <span className="crs-label">Rating</span>
            <select
              className="crs-input"
              value={form.rating}
              onChange={e => setForm({ ...form, rating: e.target.value })}
              aria-label="Rating"
            >
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Good</option>
              <option value="3">3 - Average</option>
              <option value="2">2 - Fair</option>
              <option value="1">1 - Poor</option>
            </select>
          </label>
          <label>
            <span className="crs-label">Feedback</span>
            <textarea
              className="crs-input crs-textarea"
              value={form.text}
              onChange={e => setForm({ ...form, text: e.target.value })}
              placeholder="Share your experience with AutoPartHub..."
              maxLength={270}
              aria-label="Feedback"
              rows={2}
              required
              style={{ borderColor: formTouched && !form.text ? 'var(--kavia-orange, #e87a41)' : undefined }}
            />
          </label>
          <button type="submit" className="btn crs-btn">
            Submit
          </button>
        </form>
        <div className="crs-form-note">* Demo only: Submission updates local reviews.</div>
      </div>
    </aside>
  );
}

export default CustomerReviewSection;
