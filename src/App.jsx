import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShoppingCart, ArabicNavbar, ProductList, SignIn, SignUp } from './router'; // Adjust imports as needed

const App = () => {
  return (
    <BrowserRouter>
      <ArabicNavbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
