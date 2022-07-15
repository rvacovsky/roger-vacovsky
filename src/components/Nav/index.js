import React from 'react';
import { NavLink } from "react-router-dom";

function Nav() {

  return (
    <header className="flex-row px-1">
    <nav>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="./About">
        About
      </NavLink>
      <NavLink activeClassName="active" to="./downloads/resume.pdf">
        Resume
      </NavLink>
      <NavLink activeClassName="active" to="./Portfolio">
        Portfolio
      </NavLink>
      <NavLink activeClassName="active" to="./Contact">
        Contact
      </NavLink>
    </nav>
    </header>
  );
}

export default Nav;