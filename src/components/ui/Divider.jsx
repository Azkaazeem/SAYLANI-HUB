import React from 'react';

const Divider = ({ label = "OR" }) => {
  return (
    <div className="relative my-4">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200 dark:border-gray-700 transition-colors duration-300"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-300 transition-colors duration-300 uppercase font-medium">
          {label}
        </span>
      </div>
    </div>
  );
};

export default Divider;