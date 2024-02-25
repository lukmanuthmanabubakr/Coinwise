import React, { useState } from 'react';
import './App.css';
import useLocalStorage from "use-local-storage"
import { Route, Routes } from 'react-router-dom';
import Navbar from './Containers/Navbar/Navbar';


function App() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("theme", false);

  const switchTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="app" data-theme={isDarkMode ? 'dark' : 'light'}>
      <Navbar switchTheme={switchTheme} isDarkMode={isDarkMode} />

      <Routes>
      {/* <Route path='/' element={</>}/> */}

      </Routes>
      
    </div>
  );
}

export default App;