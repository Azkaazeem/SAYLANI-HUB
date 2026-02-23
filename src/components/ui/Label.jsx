import React from 'react';

const Label = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1 transition-colors duration-200">
      {children}
    </label>
  );
};

export default Label;