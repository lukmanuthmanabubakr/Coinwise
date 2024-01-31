import React, { useState } from 'react';
import './App.css';
import useLocalStorage from "use-local-storage"
import Navbar from './Pages/HomePage/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import About from './Pages/About/About';

function App() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("theme", false);

  const switchTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="app" data-theme={isDarkMode ? 'dark' : 'light'}>
      <Navbar switchTheme={switchTheme} isDarkMode={isDarkMode} />
      <Routes>
        {/* <Route path='/' element={<HomePage/>}/> */}
      </Routes>
    </div>
  );
}

export default App;

