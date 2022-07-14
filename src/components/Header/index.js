import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex-row px-1">
    <h2>
      <a href="/">
        <span>Roger Vacovsky</span> 
      </a>
    </h2>
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
export default Header;