import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 transition-colors duration-300">
      <div className="text-center">
        {/* Saylani Green Color */}
        <h1 className="text-7xl md:text-9xl font-extrabold text-[#8dc63f] tracking-widest drop-shadow-sm">
          404
        </h1>
        
        {/* Saylani Blue Color */}
        <div className="bg-[#00205b] text-white px-2 text-sm md:text-base rounded rotate-12 absolute -mt-10 md:-mt-14 ml-10 md:ml-16 shadow-lg">
          Page Not Found
        </div>
        
        <h2 className="mt-8 text-2xl md:text-4xl font-bold text-[#00205b] dark:text-blue-400">
          Oops! Page Not Found
        </h2>
        
        <p className="mt-4 text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto text-sm md:text-base">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        {/* Back to Home Button */}
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#00205b] hover:bg-blue-800 dark:bg-[#8dc63f] dark:hover:bg-green-600 dark:text-[#00205b] transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;