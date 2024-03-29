import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeProvider';

const LocalThemedBox = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const [localTheme, setLocalTheme] = useState(theme);
  console.log(theme);
  console.log('localtheme', localTheme)
  // useEffect(()=>{
  //   setLocalTheme(theme)
  // },[theme])
  return (
    <div
      style={{ width: '200px', height: '200px', border: '2px solid green' }}
      id='local-themed-box'
      className={`bg-${localTheme === 'light'? 'light': 'dark'} txt-${localTheme === 'light'? 'light': 'dark'}`}
    >
      hiiii
      <button 
        onClick={()=>setLocalTheme(localTheme === 'light'? 'dark': 'light')}
        // onClick={toggleTheme}
        className={`btn btn-${localTheme === 'light'? 'light': 'dark'}`}
      >
        Toggle local theme to {localTheme === 'light'? 'dark': 'light' }
      </button>
    </div>
  );
};

export { LocalThemedBox };