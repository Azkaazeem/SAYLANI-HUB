import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ isDark, toggleTheme }) => {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative flex items-center justify-between w-14 h-7 rounded-full p-1 transition-colors duration-300 focus:outline-none shadow-inner ${
        isDark ? 'bg-gray-700' : 'bg-gray-300'
      }`}
      aria-label="Toggle Dark Mode"
    >

      <div
        className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 ${
          isDark ? 'translate-x-7 left-1' : 'translate-x-0 left-1'
        }`}
      />
    </button>
  );
};

export default ThemeToggle;