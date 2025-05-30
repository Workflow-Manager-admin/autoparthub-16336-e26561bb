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
import CustomerReviewSection from '../components/CustomerReviewSection/CustomerReviewSection';

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

  // PUBLIC_INTERFACE
  // Cart state: array of {name, image, price, description, quantity}
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

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

  // PUBLIC_INTERFACE
  // Add a part to cart (by name: increases quantity if already present)
  const handleAddToCart = (item) => {
    setCart((prev) => {
      const idx = prev.findIndex((p) => p.name === item.name);
      if (idx !== -1) {
        // Already present: increment quantity
        return prev.map((p, i) =>
          i === idx ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        );
      }
      // New item
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // PUBLIC_INTERFACE
  // Remove one quantity (or remove item entirely) from cart
  const handleRemoveFromCart = (itemName) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === itemName
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // PUBLIC_INTERFACE
  // Remove entire item from cart
  const handleRemoveItemCompletely = (itemName) => {
    setCart((prev) =>
      prev.filter((item) => item.name !== itemName)
    );
  };

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  return (
    <div>
      {/* Pass openCart to NavigationBar */}
      <NavigationBar onCartClick={openCart} cartCount={cart.reduce((sum, p) => sum + (p.quantity || 1), 0)} />
      <div
        className="main-content"
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "38px",
          minHeight: "86vh"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", minWidth: 260, maxWidth: 325 }}>
          <SidebarFilter
            filter={filter}
            onFilterChange={handleFilterChange}
            partTypes={partTypes}
          />
          {/* App-level Customer Review Section */}
          <CustomerReviewSection />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Pass addToCart to ProductGrid/ProductCard */}
          <ProductGrid
            parts={filteredParts}
            onPartClick={handlePartClick}
            onAddToCart={handleAddToCart}
          />

          {/* Cart modal/panel */}
          <ShoppingCart
            isOpen={cartOpen}
            onClose={closeCart}
            cart={cart}
            onRemove={handleRemoveFromCart}
            onRemoveItemCompletely={handleRemoveItemCompletely}
          />

          {/* Product details with addToCart */}
          <ProductDetailModal
            part={selectedPart}
            onClose={handleModalClose}
            onAddToCart={handleAddToCart}
          />

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
