import React, { useState } from "react";
import logo from "../../../Asset/logo.png";
import { NavLink } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import "./Navbar.css";

const Navbar = ({ switchTheme, isDarkMode }) => {
  const [active, setActive] = useState("navbarLinks");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");

  const navToggle = () => {
    active === "navbarLinks"
      ? setActive("navbarLinks nav_active")
      : setActive("navbarLinks");

    //Toggler Icon

    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
  };
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
      <div className={active}>
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

      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;