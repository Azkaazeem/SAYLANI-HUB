import React from 'react';

const Input = ({ type = "text", placeholder, id, icon: Icon, ...props }) => {
  return (
    <div className="relative group">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue hover:border-primary-blue/50 transition-all duration-300 ease-in-out ${Icon ? 'pr-9' : ''}`}
        {...props}
      />
      {Icon && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary-blue dark:group-focus-within:text-white transition-colors duration-300">
          <Icon size={16} />
        </div>
      )}
    </div>
  );
};

export default Input;