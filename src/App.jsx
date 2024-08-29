// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="vue-root"></div>
      <sign-in-form></sign-in-form>
    </div>
  );
};

export default App;
