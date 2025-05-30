import React from 'react';
import './NavigationBar.css';

// PUBLIC_INTERFACE
function NavigationBar() {
  // NavigationBar with logo, search bar, user and cart icons
  return (
    <nav className="navbar navbar-ap-nav">
      <div className="navbar-section navbar-logo">
        <span className="logo-symbol">🚗</span>
        <span className="logo-text">AutoPartHub</span>
      </div>
      <div className="navbar-section navbar-search">
        <input
          type="text"
          className="navbar-search-input"
          placeholder="Search for parts, models, brands..."
          aria-label="Search"
        />
      </div>
      <div className="navbar-section navbar-actions">
        <button className="navbar-icon-btn" aria-label="User Account" title="User Account">
          <span role="img" aria-label="User">👤</span>
        </button>
        <button className="navbar-icon-btn" aria-label="Shopping Cart" title="Shopping Cart">
          <span role="img" aria-label="Cart">🛒</span>
        </button>
      </div>
    </nav>
  );
}

export default NavigationBar;
