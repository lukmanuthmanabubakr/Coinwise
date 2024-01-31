import React, { useState } from "react";
import logo from "../../../Asset/logo.png";
import { NavLink } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import "./Navbar.css";

const Navbar = ({ switchTheme, isDarkMode }) => {
  return (
    <nav className="navbarComponent">
      <div className="brandLogo">
        <NavLink to="/">
          <img src={logo} alt="logo" className="brandImage"/>
          <p className="brandName">
            coin<span>Wise</span>
          </p>
        </NavLink>
      </div>
      <div className="navbarLinks">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/library">Library</NavLink>
        <NavLink to="/company">Company</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
      <div className="navbarBtn">
        <button className="switchBtn" onClick={switchTheme}>
          {isDarkMode ? <FiSun  size={19}/> : <FiMoon  size={19}/>}
        </button>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;