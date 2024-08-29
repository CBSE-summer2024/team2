// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for newer React versions
import { createApp } from 'vue';
import App from './App.jsx';
import listofcategory from './components/Categorylist/listofcategory.vue';
import './components/SignInForm.js';

// Render React app
ReactDOM.createRoot(document.getElementById('react-root')).render(<App />);

// Mount Vue app
const vueApp = createApp(listofcategory);
vueApp.mount('#vue-root');
