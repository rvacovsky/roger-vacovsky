import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
    <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
    ></Nav>
    <main>
      {!contactSelected ? (
        <>
          <About></About>
          <Portfolio currentCategory={currentCategory}></Portfolio>
        </>
      ) : (
        <ContactForm></ContactForm>
      )}
    </main>
  </div>
);
  );
}

export default App;
