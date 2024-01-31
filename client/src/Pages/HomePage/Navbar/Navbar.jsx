// import React, { useState } from "react";
// import logo from "../../../Asset/logo.png";
// import { NavLink } from "react-router-dom";
// import { FiSun } from "react-icons/fi";
// import { FiMoon } from "react-icons/fi";
// import "./Navbar.css"


// const Navbar = ({ switchTheme }) => {
//   return (
//     <nav className="navbarComponent">
//       <div>
//         <NavLink>
//           <img src={logo} alt="logos" />
//           <p>coin<span>Wise</span></p>
//         </NavLink>
//       </div>
//       <div>
//         <NavLink>Dashboard</NavLink>
//         <NavLink>Libary</NavLink>
//         <NavLink>Company</NavLink>
//         <NavLink>About</NavLink>
//         <NavLink>Contact-Us</NavLink>
//       </div>
//       <div>
//         <button onClick={switchTheme}><FiSun /></button>
//         <button><FiMoon /></button>
//         <NavLink>Login</NavLink>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import logo from "../../../Asset/logo.png";
import { NavLink } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import "./Navbar.css";

const Navbar = ({ switchTheme, isDarkMode }) => {
  return (
    <nav className="navbarComponent">
      <div className="brand">
        <NavLink to="/">
          <img src={logo} alt="logo" />
          <p>
            coin<span>Wise</span>
          </p>
        </NavLink>
      </div>
      <div>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/library">Library</NavLink>
        <NavLink to="/company">Company</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
      <div>
        <button onClick={switchTheme}>
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
