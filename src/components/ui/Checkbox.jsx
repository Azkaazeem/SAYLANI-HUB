import React from 'react';

const Checkbox = ({ id, label, ...props }) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        className="h-4 w-4 text-primary-blue focus:ring-primary-blue border-gray-300 rounded transition duration-200 cursor-pointer"
        {...props}
      />
      <label htmlFor={id} className="ml-2 block text-sm text-gray-600 cursor-pointer select-none">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;