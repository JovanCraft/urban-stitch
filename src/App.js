import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Shop from './components/Shop';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './index.css';

function App() {

  const shopRef = useRef(null);

  const scrollToShop = () => {
    shopRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero onShopClick={scrollToShop} />
              <Shop ref={shopRef} />
              <About />
              <Footer />
            </div>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
