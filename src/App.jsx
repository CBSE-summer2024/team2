import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShoppingCart, ArabicNavbar, ProductList, SignIn, SignUp,Homepage } from './router'; 

const App = () => {
  return (
    <BrowserRouter>
      <ArabicNavbar />
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/Productlist" element={<ProductList />} />

        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/login" element={<sign-in></sign-in>} />
        <Route path="/signup" element={<sign-up></sign-up>} />
        <Route path="/signup" element={<sign-up></sign-up>} />
      </Routes>

    </BrowserRouter>
    
  );
};

export default App;