// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for newer React versions
import { createApp } from 'vue';
import App from './App.jsx';
import CategoryList from './components/CategoryList.vue';
import './components/SignInForm.js';

// Render React app
ReactDOM.createRoot(document.getElementById('react-root')).render(<App />);

// Mount Vue app
const vueApp = createApp(CategoryList);
vueApp.mount('#vue-root');
