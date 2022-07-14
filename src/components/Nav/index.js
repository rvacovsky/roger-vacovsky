import React from 'react';

function Nav() {

  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">
          <span>Roger Vacovsky</span> 
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">
              About me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;