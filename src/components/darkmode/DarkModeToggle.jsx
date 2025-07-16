import React, { useContext } from 'react';
import { ThemeContext } from "../themeContext/ThemeContext.jsx";


const DarkModeToggle = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <button
      onClick={toggleDarkMode}
      style={{
        width: '60px',
        height: '30px',
        borderRadius: '15px',
        border: 'none',
        backgroundColor: isDark ? '#4ade80' : '#e5e7eb',
        position: 'relative',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        outline: 'none',
        boxShadow: isDark
          ? '0 0 20px rgba(74, 222, 128, 0.3)'
          : '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div
        style={{
          width: '26px',
          height: '26px',
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          position: 'absolute',
          top: '2px',
          left: isDark ? '32px' : '2px',
          transition: 'left 0.3s ease, box-shadow 0.3s ease',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
        }}
      >
        {isDark ? '🌙' : '☀️'}
      </div>
    </button>
  );
};

export default DarkModeToggle;
