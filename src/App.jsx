import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import{   ShoppingCart,
  ArabicNavbar,
  ProductList,
  Signin,
  Signup,
  listofcategory} from'./router'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div id="vue-root"></div>
        <sign-in></sign-in> {/* تأكد من تسجيل هذا المكون */}
        <sign-up></sign-up> {/* تأكد من تسجيل هذا المكون */}
      </div>
    </BrowserRouter>
  );
};

export default App;
