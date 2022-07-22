
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './components/Home';


export default function App() {

  return (
    
    <Router>
      
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Resume">Resume</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/resume" element={<Resume />}>
          </Route>
          <Route path="/portfolio" element={<Portfolio />}>
          </Route>
          <Route path="/contact" element={<ContactForm />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
  
}




