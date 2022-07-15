import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    
    <div>
      <Header>
      <Router>
        <Route exact path="/" component={<App />} />
        <Route path="/About" component={<About />} />
        <Route path="/Portfolio" component={<Portfolio />} />
        <Route path="/Contact" component={<ContactForm />} />
      </Router>
      </Header>
      <Footer />
    </div>
  
);
}


export default App;
