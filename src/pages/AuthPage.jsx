import React, { useState, useEffect } from 'react';
import AuthCard from '../components/layout/AuthCard';
import SignUpForm from '../components/forms/SignUpForm';
import SignInForm from '../components/forms/SignInForm';
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm';
import UpdatePasswordForm from '../components/forms/UpdatePasswordForm';
import { supabase } from '../components/lib/supabaseClient';

const AuthPage = () => {
  const [currentView, setCurrentView] = useState('signin');

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        setCurrentView('update_password');
      }
    });
    return () => authListener.subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-[calc(100vh-64px)] w-full flex items-center justify-center py-6 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <AuthCard isSignUpMode={currentView === 'signup'}>
        {currentView === 'signup' && <SignUpForm onToggleMode={() => setCurrentView('signin')} />}
        {currentView === 'signin' && <SignInForm onToggleMode={() => setCurrentView('signup')} onForgotPassword={() => setCurrentView('forgot')} />}
        {currentView === 'forgot' && <ForgotPasswordForm onBackToSignIn={() => setCurrentView('signin')} />}
        {currentView === 'update_password' && <UpdatePasswordForm onPasswordUpdated={() => setCurrentView('signin')} />}
      </AuthCard>
    </div>
  );
};

export default AuthPage;