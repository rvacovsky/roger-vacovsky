import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div>
      <Header>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
      </Header>
      <Footer />
    </div>
);
}


export default App;
