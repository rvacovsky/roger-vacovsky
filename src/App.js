import React from 'react';

import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
    <Header></Header>
    <main>
          <About></About>
          <Portfolio></Portfolio>
        <ContactForm></ContactForm>
    </main>
    <Footer></Footer>
  </div>
);
}

export default App;
