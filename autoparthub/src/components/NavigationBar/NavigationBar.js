import React from 'react';
import './NavigationBar.css';

// PUBLIC_INTERFACE
function NavigationBar() {
  /**
   * NavigationBar renders the main navigation for the app, featuring:
   *  - Logo section (left)
   *  - Centered search bar
   *  - User account and shopping cart icons (right)
   * Styling ensures visible separation and alignment, using a dark background.
   */
  return (
    <nav className="navbar navbar-ap-nav" role="navigation" aria-label="Primary Navigation">
      {/* Left Section: Logo */}
      <div className="navbar-section navbar-logo" tabIndex={0} aria-label="AutoPartHub Home">
        {/* Placeholder SVG logo (car) */}
        <span className="logo-symbol" aria-hidden="true">
          {/* Inline SVG, automotive theme */}
          <svg width="28" height="24" viewBox="0 0 28 24" fill="none" aria-hidden="true">
            <rect x="2" y="10" width="24" height="8" rx="3" fill="#E87A41"/>
            <rect x="6" y="5" width="16" height="8" rx="2" fill="#616161"/>
          </svg>
        </span>
        <span className="logo-text">AutoPartHub</span>
      </div>

      {/* Center Section: Search */}
      <div className="navbar-section navbar-search" role="search">
        <input
          type="text"
          className="navbar-search-input"
          placeholder="Search for parts, models, or brands"
          aria-label="Search"
        />
      </div>

      {/* Right Section: Actions */}
      <div className="navbar-section navbar-actions">
        {/* User Account Icon */}
        <button className="navbar-icon-btn" aria-label="Your account" title="User Account">
          {/* SVG user */}
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
            <circle cx="12" cy="8.5" r="4" stroke="#fff" strokeWidth="1.5" fill="#424242"/>
            <ellipse cx="12" cy="17" rx="6.2" ry="4.5" stroke="#fff" strokeWidth="1.5" fill="#424242"/>
          </svg>
        </button>
        {/* Shopping Cart Icon */}
        <button className="navbar-icon-btn" aria-label="Shopping cart" title="Shopping Cart">
          {/* SVG cart */}
          <svg viewBox="0 0 28 28" width="24" height="24" fill="none" aria-hidden="true">
            <rect x="6" y="8" width="16" height="10" rx="2" fill="#fff" fillOpacity="0.11"/>
            <path d="M8 8V6.6C8 5.15979 9.15979 4 10.6 4H17.4C18.8402 4 20 5.15979 20 6.6V8" stroke="#fff" strokeWidth="1.3"/>
            <circle cx="10" cy="20" r="1.7" fill="#fff"/>
            <circle cx="18" cy="20" r="1.7" fill="#fff"/>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default NavigationBar;
