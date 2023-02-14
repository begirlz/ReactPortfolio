import React from 'react';
import './App.css';

// file name is case sensitive
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

    <Router>
      <div>
        <Header />
        <Routes>
          {/* React 6 use element instead of component */}
          <Route exact path="*" element={<About />} /> 
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Portfolio" element={<Portfolio />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
