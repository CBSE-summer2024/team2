import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/navbar.jsx';
import './components/Signin/sign-in.js'; // تأكد من أن هذا الملف موجود
import './components/Signup/sign-up.js'; // تأكد من أن هذا الملف موجود

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
