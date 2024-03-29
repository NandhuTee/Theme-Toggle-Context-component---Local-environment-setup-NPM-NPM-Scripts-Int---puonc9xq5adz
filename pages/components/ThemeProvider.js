'use client';
import React, { useState } from 'react';

const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }
  return (
    <>
      <ThemeContext.Provider value={{theme,toggleTheme}}>
        {props.children}
      </ThemeContext.Provider>
    </>
  )
};

export { ThemeProvider, ThemeContext };