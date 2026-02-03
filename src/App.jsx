import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import Tracking from './pages/Tracking';

function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <Router>
          <div className="app-container">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/tracking" element={<Tracking />} />
            </Routes>
          </div>
        </Router>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;
