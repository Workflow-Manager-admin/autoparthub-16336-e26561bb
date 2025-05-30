import React, { useState } from 'react';
import './SidebarFilter.css';

// PUBLIC_INTERFACE
/**
 * SidebarFilter renders filtering controls for product type and price range.
 * Calls onFilterChange with the selected filter criteria.
 */
function SidebarFilter({ filter, onFilterChange, partTypes }) {
  // These could be dynamic, but are hardcoded for the mock dataset.
  const uniqueTypes = partTypes || [
    'Brake Pad',
    'Air Filter',
    'Engine Oil',
    'Spark Plug',
    'Alternator',
    'Timing Belt',
    'Oil Filter',
    'Radiator',
    'Battery'
  ];

  const [typeChecks, setTypeChecks] = useState(() =>
    uniqueTypes.reduce((acc, t) => ({ ...acc, [t]: false }), {})
  );
  const [minPrice, setMinPrice] = useState(filter?.minPrice ?? '');
  const [maxPrice, setMaxPrice] = useState(filter?.maxPrice ?? '');

  // Handle checkbox changes
  const handleTypeChange = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;
    const updatedChecks = { ...typeChecks, [name]: checked };
    setTypeChecks(updatedChecks);
    triggerFilterChange(updatedChecks, minPrice, maxPrice);
  };

  // Handle price input change
  const handleMinPriceChange = (e) => {
    const val = e.target.value.replace(/[^\d.]/g, '');
    setMinPrice(val);
    triggerFilterChange(typeChecks, val, maxPrice);
  };

  const handleMaxPriceChange = (e) => {
    const val = e.target.value.replace(/[^\d.]/g, '');
    setMaxPrice(val);
    triggerFilterChange(typeChecks, minPrice, val);
  };

  const handleReset = () => {
    setTypeChecks(uniqueTypes.reduce((acc, t) => ({ ...acc, [t]: false }), {}));
    setMinPrice('');
    setMaxPrice('');
    if (typeof onFilterChange === 'function') {
      onFilterChange({ types: [], minPrice: '', maxPrice: '' });
    }
  };

  // Send filter object up
  function triggerFilterChange(typesObj, min, max) {
    if (typeof onFilterChange === 'function') {
      onFilterChange({
        types: Object.entries(typesObj)
          .filter(([_, checked]) => checked)
          .map(([name]) => name),
        minPrice: min,
        maxPrice: max
      });
    }
  }

  return (
    <aside className="sidebar-filter" aria-label="Filter sidebar">
      <h3 className="sidebar-filter-title">Filter Parts</h3>
      <form className="sidebar-filter-form" onSubmit={(e) => e.preventDefault()}>
        <section className="sidebar-filter-section">
          <div className="sidebar-filter-label">Type</div>
          <div className="sidebar-filter-checkbox-group">
            {uniqueTypes.map((type) => (
              <label className="sidebar-filter-checkbox" key={type}>
                <input
                  type="checkbox"
                  name={type}
                  checked={!!typeChecks[type]}
                  onChange={handleTypeChange}
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </section>
        <section className="sidebar-filter-section">
          <div className="sidebar-filter-label">Price Range ($)</div>
          <div className="sidebar-filter-price-inputs">
            <input
              type="text"
              pattern="\\d*"
              inputMode="numeric"
              className="sidebar-filter-price"
              placeholder="Min"
              value={minPrice}
              onChange={handleMinPriceChange}
              aria-label="Minimum Price"
              autoComplete="off"
            />
            <span style={{ margin: "0 4px" }}>-</span>
            <input
              type="text"
              pattern="\\d*"
              inputMode="numeric"
              className="sidebar-filter-price"
              placeholder="Max"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              aria-label="Maximum Price"
              autoComplete="off"
            />
          </div>
        </section>
        <div style={{ marginTop: "8px" }}>
          <button
            type="button"
            className="btn sidebar-filter-reset-btn"
            onClick={handleReset}
            aria-label="Reset filters"
          >
            Reset
          </button>
        </div>
      </form>
    </aside>
  );
}

export default SidebarFilter;
