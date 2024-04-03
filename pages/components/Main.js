'use client';
import React, {useContext} from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeContext } from './ThemeProvider';

const Main = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div className={`container bg-${theme === 'light'? 'light': 'dark'}`} 
      id='themed-page'
    >
      <p id='themed-text-container' className={`txt-${theme}`}>lorem ipsum dolor iterit n stuff</p>
      <button 
        className={`btn btn-${theme === 'light'? 'light': 'dark'} txt-${theme === 'light'? 'light': 'dark'}`} 
        id='global-theme-toggler'
        onClick={toggleTheme}
      >
        Themed Button
      </button>
      <LocalThemedBox />
    </div>
  );
};

export { Main };
