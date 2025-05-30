import React from 'react';
import './NavigationBar.css';

// PUBLIC_INTERFACE
function NavigationBar() {
  /**
   * NavigationBar renders the main navigation for the app, featuring:
   *  - Logo section (left)
   *  - Centered search bar
   *  - Favorites/Liked Parts subdivision (right, before user/cart)
   *  - User account and shopping cart icons (right)
   * Designed for extensibility—extra nav sections/links can be added easily.
   */
  return (
    <nav className="navbar navbar-ap-nav" role="navigation" aria-label="Primary Navigation">
      {/* Left Section: Logo */}
      <div className="navbar-section navbar-logo" tabIndex={0} aria-label="AutoPartHub Home">
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

      {/* Favorites Section (Future extensibility: Insert more nav links here) */}
      <div className="navbar-section navbar-favorites" title="Liked Parts / Favorites">
        <button className="navbar-icon-btn" aria-label="Liked Parts" tabIndex={0}>
          {/* Heart (favorite) icon, suitable for 'Liked Parts' or 'Favorites' */}
          <svg viewBox="0 0 26 24" width="24" height="24" fill="none" aria-hidden="true">
            <path
              d="M13 21s-7.5-6.24-9.47-8.34C1.4 10.79 0.5 9.34 0.5 7.69 0.5 4.44 3.24 1.5 6.62 1.5c1.89 0 3.34 1.12 4.38 2.38C11.65 2.62 13.1 1.5 14.99 1.5 18.37 1.5 21.11 4.44 21.11 7.69c0 1.65-.89 3.1-3.03 4.97C20.5 14.76 13 21 13 21z"
              stroke="#fff"
              strokeWidth="1.6"
              fill="#E87A41"
              fillOpacity="0.78"
            />
          </svg>
        </button>
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
