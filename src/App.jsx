import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import{   ShoppingCart,
  ArabicNavbar,
  ProductList,
  SignIn,  
  SignUp,  
  listofcategory} from'./router'

const App = () => {
  return (
   
   
    <BrowserRouter>
      <ArabicNavbar />
      <ProductList />
      <ShoppingCart />
      <listofcategory /> {/* Added listofcategory component */}
      {/* Add other components as needed */}
    </BrowserRouter>
    
  );
};

export default App;
