import { AllProducts, NewProduct, ProductTreemap } from '../components';
import React from 'react';

const AdminView = () => {
  return (
    <div id="adminView">
      <h1>Marketplace Analytics</h1>
      <div id="adminProductsDisplay">
        <AllProducts />
        <NewProduct />
      </div>
      {/* <ProductTreemap /> */}
    </div>
  );
};

export default AdminView;
