import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import ThemeContextWrapper from './wrappers/themeContextWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextWrapper>
      <App />
    </ThemeContextWrapper>
  </React.StrictMode>,
);
