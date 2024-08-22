import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ShoppingCart from './Cart/cart';
import ArabicNavbar from './Navbar/navbar';

function App() {
  return (
    <>
      <ArabicNavbar />
      <Routes>
        <Route path="/cart" element={<ShoppingCart />} /> 
      </Routes>
    </>
  );
}

export default App;
