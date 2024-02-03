import React, { useState } from "react";
import logo from "../../../Asset/logo.png";
import { NavLink } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import "./Navbar.css";
import { RiMailCheckLine } from "react-icons/ri";
import { TbWorldDollar } from "react-icons/tb";
import { RiEqualizerFill } from "react-icons/ri";
import { MdGroups2 } from "react-icons/md";
import { AiFillFund } from "react-icons/ai";

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
        <NavLink to="/dashboard"> <span> <RiMailCheckLine /> </span> Dashboard</NavLink>
        <NavLink to="/library"> <span> <RiMailCheckLine /> </span> Library</NavLink>
        <NavLink to="/company"> <span> <RiMailCheckLine /> </span> Company</NavLink>
        <NavLink to="/about"> <span> <RiMailCheckLine /> </span> About</NavLink>
        <NavLink to="/contact"> <span> <RiMailCheckLine /> </span> Contact Us</NavLink>


        <div className="navbarBtns">
        <button className="switchBtn" onClick={switchTheme}>
          {isDarkMode ? <FiSun  size={19}/> : <FiMoon  size={19}/>}
        </button>
        <NavLink to="/login">Login</NavLink>
      </div>
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