import React, { useState } from 'react';
import { Camera, Loader2 } from 'lucide-react';

const FileUpload = ({ label, onUploadComplete, previewUrl }) => {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    await onUploadComplete(file);
    setUploading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mb-2">
      <div className="relative group cursor-pointer">
        <label className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-dashed border-primary-blue/50 dark:border-primary-blue/70 bg-gray-50 dark:bg-gray-700/50 hover:bg-primary-blue/10 dark:hover:bg-primary-blue/20 overflow-hidden transition-all duration-300 relative cursor-pointer shadow-sm">
          
          {/* Image Preview or Icons */}
          {previewUrl ? (
            <img src={previewUrl} alt="Profile Preview" className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center justify-center">
              {uploading ? (
                <Loader2 className="w-6 h-6 text-primary-blue animate-spin" />
              ) : (
                <Camera className="w-6 h-6 text-primary-blue dark:text-gray-300" />
              )}
            </div>
          )}

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Camera className="w-6 h-6 text-white" />
          </div>

          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
          />
        </label>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-medium transition-colors duration-300">
        {uploading ? 'Uploading...' : label}
      </p>
    </div>
  );
};

export default FileUpload;