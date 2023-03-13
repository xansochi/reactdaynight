import { createContext } from 'react';

export const themes = {
  dark: true,
  light: false,
};

export const ThemeContext = createContext(
  {
    theme: themes.light,
    changeTheme: () => {},
  },
);
