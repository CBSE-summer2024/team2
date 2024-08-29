import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/navbar.jsx';
import './components/Signin/sign-in.js';
import './components/Signup/sign-up.js';


// تأكد من أنك قد قمت بتحميل وتسجيل مكون Web Component في مكان ما
// يمكن أن يكون في index.js أو في App.jsx قبل استخدامه

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div id="vue-root"></div>
        <sign-in></sign-in>
        <sign-up></sign-up> {/* استخدام مكون Web Component */}
      </div>
    </BrowserRouter>
  );
};

export default App;
