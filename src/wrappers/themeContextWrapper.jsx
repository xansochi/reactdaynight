/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useMemo } from 'react';
import { ThemeContext, themes } from '../contexts/themecontext';

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);
  function changeTheme(changevalue) {
    setTheme(changevalue);
  }
  useEffect(() => {
    switch (theme) {
      case themes.dark:
        document.querySelector('.App').style.setProperty('background', 'url("/img/stars.svg") no-repeat');
        document.querySelector('.App').style.setProperty('background-size', 'cover');
        document.querySelector('.tracers span').style.setProperty('background', '#79e2ff');
        document.getElementById('dn').checked = true;
        document.querySelector('.tracers').style.setProperty('color', '#00c2f8');

        break;
      case themes.light:
      default:
        document.querySelector('.App').style.setProperty('background', 'url("/img/clouds.svg") no-repeat');
        document.querySelector('.App').style.setProperty('background-size', 'cover');
        document.querySelector('.tracers span').style.setProperty('background', '#ef7800');
        document.querySelector('.toggle').style.setProperty('color', '#333333');
        document.querySelector('.tracers').style.setProperty('color', '#003f72');
        break;
    }
  }, [theme]);
  const foo = useMemo(() => ({ theme, changeTheme }), []); // This prevent re render, but made context work strange
  return (
    <ThemeContext.Provider value={foo}>
      {props.children}
    </ThemeContext.Provider>
  );
}
