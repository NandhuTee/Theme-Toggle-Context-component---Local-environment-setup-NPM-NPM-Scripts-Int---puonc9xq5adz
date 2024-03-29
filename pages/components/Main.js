'use client';
import React, {useContext, useEffect, useState} from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeContext } from './ThemeProvider';

const Main = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const [tempState, setTempState] = useState(true);

  function toggleThemeInternalFunc(){
    toggleTheme()
    const newValue = tempState ? false : true;
    setTempState(newValue)
  }

  useEffect(()=>{
    
    setTempState(true);
  },[tempState])

  return (
    <div className={`container bg-${theme === 'light'? 'light': 'dark'} txt-${theme === 'light'? 'light': 'dark'}`} 
      id='themed-page'
    >
      <p id='themed-text-container'>lorem ipsum dolor iterit n stuff</p>
      <button 
        className={`btn btn-${theme === 'light'? 'light': 'dark'}`} 
        id='themed-button'
        onClick={toggleThemeInternalFunc}
      >
        Themed Button
      </button>
      {tempState && <LocalThemedBox />}
    </div>
  );
};

export { Main };