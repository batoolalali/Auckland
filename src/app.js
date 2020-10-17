import React from 'react';
import Header from './components/Header/Header.js';
import AdFrame from './components/AdFrame/AdFrame.js';
import Discover from './components/Discover/discover.js';
import Deals from './components/Deals/Deals.js';
import Products from './components/Products/Products.js';
import Footer from './components/Footer/Footer.js'
import './app.css';

function App() {
  return (
  <>
      <Header />
      <AdFrame/>
      <Discover/>
      <Deals/>
      <Products/>
      <Footer/>
  </>
);
}

export default App;
