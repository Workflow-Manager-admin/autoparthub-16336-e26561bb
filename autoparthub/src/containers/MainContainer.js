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
function MainContainer() {
  return (
    <div>
      <NavigationBar />
      <div className="main-content">
        <SidebarFilter />
        {/* Pass mockPartsData to ProductGrid so the main page shows the part cards */}
        <ProductGrid parts={mockPartsData} />
        {/* Other features below */}
        <ShoppingCart />
        <ProductDetailModal />
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
