import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const SocialButton = ({ icon, onClick }) => {
  let IconComponent = icon === 'google' ? FcGoogle : FaGithub;
  
  return (
    <button 
      type="button" 
      onClick={onClick}
      className="flex justify-center items-center p-3 border-2 border-gray-200 rounded-full hover:bg-gray-50 hover:border-primary-blue/30 transition-all duration-300 transform hover:scale-110"
    >
      <IconComponent size={24} />
    </button>
  );
};

export default SocialButton;