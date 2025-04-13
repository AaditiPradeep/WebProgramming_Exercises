// ThemedBox.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedBox() {
  const { theme } = useContext(ThemeContext);

  const boxStyle = {
    padding: '20px',
    margin: '10px 0',
    backgroundColor: theme === 'light' ? '#eee' : '#333',
    color: theme === 'light' ? '#000' : '#fff'
  };

  return <div style={boxStyle}>This box uses {theme} theme</div>;
}

export default ThemedBox;
