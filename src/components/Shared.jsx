import React from 'react';
import smitLogo from '../assets/SMIT.png'; 
import SocialButton from './ui/SocialButton';
import { supabase } from './lib/supabaseClient'; 
import Swal from 'sweetalert2';

export const Logo = ({ className = "" }) => (
  <div className={`flex justify-center mb-3 ${className}`}>
    <img 
        src={smitLogo} 
        alt="SMIT Logo" 
        className="h-12 md:h-14 object-contain animate-fade-in-up" 
    />
  </div>
);

export const FormHeading = ({ title }) => (
  <h2 className="text-center text-xl md:text-2xl font-bold text-primary-blue dark:text-white mb-4 animate-fade-in-up transition-colors duration-300">
    {title}
  </h2>
);

export const AuthLinkText = ({ text, linkText, onClick }) => (
  <p className="text-center text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-4 transition-colors duration-300">
    {text}{" "}
    <button type="button" onClick={onClick} className="font-semibold text-primary-green hover:text-primary-blue dark:hover:text-white transition-colors underline-offset-4 hover:underline">
      {linkText}
    </button>
  </p>
);

export const SocialLoginGroup = () => {
  const handleOAuthLogin = async (provider) => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: window.location.origin
        }
      });

      if (error) {
        Swal.fire({
          icon: 'error',
          title: 'Authentication Error',
          text: error.message,
          confirmButtonColor: '#0057a8'
        });
      }
    } catch (err) {
      console.error('OAuth login failed:', err);
    }
  };

  return (
    <div className="flex justify-center gap-3 mt-3">
        <SocialButton icon="google" onClick={() => handleOAuthLogin('google')} />
        <SocialButton icon="github" onClick={() => handleOAuthLogin('github')} />
    </div>
  );
};