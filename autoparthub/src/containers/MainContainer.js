import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import SidebarFilter from '../components/SidebarFilter/SidebarFilter';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import mockPartsData from '../components/ProductGrid/mockPartsData';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';
import ProductDetailModal from '../components/ProductDetailModal/ProductDetailModal';
import Checkout from '../components/Checkout/Checkout';
import OrderTracking from '../components/OrderTracking/OrderTracking';
import UserAccount from '../components/UserAccount/UserAccount';
import Loader from '../components/Loader/Loader';
import Modal from '../components/Modal/Modal';

import './MainContainer.css';

/**
 * PUBLIC_INTERFACE
 * MainContainer: Top-level layout and state handling for viewing, selecting, and inspecting parts.
 */
function MainContainer() {
  // State for tracking which part is selected (for modal)
  const [selectedPart, setSelectedPart] = useState(null);

  // State for filter criteria (type and price range)
  const [filter, setFilter] = useState({
    types: [],
    minPrice: '',
    maxPrice: ''
  });

  // Handler for clicking a part: open modal with selected details
  const handlePartClick = (part) => setSelectedPart(part);

  // Handler for closing modal
  const handleModalClose = () => setSelectedPart(null);

  // Handler for filter changes from SidebarFilter
  const handleFilterChange = (filterObj) => {
    setFilter(filterObj);
  };

  // Available part types (unique names from mock data)
  const partTypes = mockPartsData.map((p) => p.name);

  // Filtered product list
  const filteredParts = mockPartsData.filter((part) => {
    // Type filtering (OR logic among checked types)
    const typeOk =
      !filter.types || filter.types.length === 0 || filter.types.includes(part.name);

    // Price filtering
    let minNum = parseFloat(filter.minPrice || '');
    let maxNum = parseFloat(filter.maxPrice || '');
    // If min/max are not numbers, ignore them (treat as open range)
    if (isNaN(minNum)) minNum = undefined;
    if (isNaN(maxNum)) maxNum = undefined;

    const priceOk =
      (minNum === undefined || part.price >= minNum) &&
      (maxNum === undefined || part.price <= maxNum);

    return typeOk && priceOk;
  });

  return (
    <div>
      <NavigationBar />
      <div
        className="main-content"
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "38px",
          minHeight: "86vh"
        }}
      >
        <SidebarFilter
          filter={filter}
          onFilterChange={handleFilterChange}
          partTypes={partTypes}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <ProductGrid parts={filteredParts} onPartClick={handlePartClick} />

          {/* Other features below */}
          <ShoppingCart />
          <ProductDetailModal part={selectedPart} onClose={handleModalClose} />
          <Checkout />
          <OrderTracking />
          <UserAccount />
          <Loader />
          <Modal isOpen={false}></Modal>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
