/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
import React from 'react';
import { ThemeContext, themes } from '../../contexts/themecontext';
import './statebutton.css';

function StateButton() {
  const [darkMode, setDarkMode] = React.useState(true);
  return (
    <ThemeContext.Consumer>
      {({ changeTheme }) => (
        <div className="toggleWrapper">
          <input
            type="checkbox"
            className="dn"
            id="dn"
            onChange={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          />
          <label htmlFor="dn" className="toggle">
            <span className="toggle__handler">
              <span className="crater crater--1" />
              <span className="crater crater--2" />
              <span className="crater crater--3" />
            </span>
            <span className="star star--1" />
            <span className="star star--2" />
            <span className="star star--3" />
            <span className="star star--4" />
            <span className="star star--5" />
            <span className="star star--6" />
          </label>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default StateButton;
