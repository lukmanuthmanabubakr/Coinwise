// import React from 'react';
// import './App.css';
// import useLocalStorage from "use-local-storage"
// import Navbar from './Pages/HomePage/Navbar/Navbar';

// function App() {

//   const [myTheme, setMyTheme] = useLocalStorage("theme" ? "dark" : "light");

//   const switchTheme = () => {
//     const newTheme = myTheme === "light" ? "dark" : "light";
//     setMyTheme(newTheme);
//   };
//   return (
//     <div className="app" data-theme={myTheme}>
//         <Navbar switchTheme={switchTheme}/>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';
import useLocalStorage from "use-local-storage"
import Navbar from './Pages/HomePage/Navbar/Navbar';

function App() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("theme", false);

  const switchTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="app" data-theme={isDarkMode ? 'dark' : 'light'}>
      <Navbar switchTheme={switchTheme} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
