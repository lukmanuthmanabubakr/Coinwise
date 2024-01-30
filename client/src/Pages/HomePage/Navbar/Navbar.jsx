import React from "react";
import logo from "../../../Asset/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbarComponent">
      <div>
        <NavLink>
          <img src={logo} alt="logos" />
          <p>coin<span>Wise</span></p>
        </NavLink>
      </div>
      <div></div>
      <div></div>
    </nav>
  );
};

export default Navbar;
