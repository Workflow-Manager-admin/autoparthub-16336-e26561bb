import React from 'react';
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
 * MainContainer: Top-level layout, routes, and composition for AutoPartHub.
 * Renders the homepage with navigation, sidebar, part grid, and other features.
 */
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

  // Handler for clicking a part: open modal with selected details
  const handlePartClick = (part) => setSelectedPart(part);

  // Handler for closing modal
  const handleModalClose = () => setSelectedPart(null);

  return (
    <div>
      <NavigationBar />
      <div className="main-content">
        <SidebarFilter />
        <ProductGrid parts={mockPartsData} onPartClick={handlePartClick} />

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
  );
}

export default MainContainer;
