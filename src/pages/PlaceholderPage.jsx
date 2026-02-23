import React from 'react';

const PlaceholderPage = ({ title }) => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-gray-500 dark:text-gray-400">
        {title} Page Coming Soon
      </h1>
    </div>
  );
};

export default PlaceholderPage;
