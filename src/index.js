import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Mapbox from './Components/Mapbox';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App />} />
    </Routes>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
