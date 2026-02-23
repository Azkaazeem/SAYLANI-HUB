import React from 'react';

const Button = ({ children, onClick, type = "button", variant = "primary", className = "" }) => {
  const baseStyle = "w-full py-2.5 text-sm rounded-lg font-semibold transition-all duration-300 transform active:scale-[0.98] shadow-sm hover:shadow-md hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-primary-blue text-white hover:bg-primary-blue/90",
    outline: "border-2 border-primary-blue text-primary-blue hover:bg-primary-blue/10"
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;