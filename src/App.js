import React from 'react';
import './App.css';

// file name is case sensitive
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Portfolio />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
