import React from 'react';
import { NavLink } from "react-router-dom";

function Nav() {

  return (
    <nav>
      <ul>
      <li>
      <NavLink activeclassname="active" to="/">
        Home
      </NavLink>
      </li>
      <li>
      <NavLink activeclassname="active" to="./About">
        About
      </NavLink>
      </li>
      <li>
      <NavLink activeclassname="active" to="./downloads/resume.pdf">
        Resume
      </NavLink>
      </li>
      <li>
      <NavLink activeclassname="active" to="./Portfolio">
        Portfolio
      </NavLink>
      </li>
      <li>
      <NavLink activeclassname="active" to="./Contact">
        Contact
      </NavLink>
      </li>
      </ul>
    </nav>
    
  );
}

export default Nav;