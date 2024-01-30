import React from 'react';
import './App.css';
import useLocalStorage from "use-local-storage"
import Navbar from './Pages/HomePage/Navbar/Navbar';

function App() {
  const [myTheme, setMyTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = myTheme === "light" ? "dark" : "light";
    setMyTheme(newTheme);
  };
  return (
    <div className="app" data-theme={myTheme}>
        <Navbar switchTheme={switchTheme}/>
    </div>
  );
}

export default App;
