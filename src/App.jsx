import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { supabase } from './components/lib/supabaseClient'; // Ensure this path is correct
import { Loader2 } from 'lucide-react';

import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import PlaceholderPage from './pages/PlaceholderPage';
import LostFound from './pages/LostFound';
import Complaints from './pages/Complaints';
import Volunteer from './pages/Volunteer';
import MyIdCards from './pages/MyIdCards';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import DashboardLayout from './pages/DashboardLayout';

/* ==========================================
   STRICT ADMIN ROUTE GUARD
========================================== */
const AdminProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      // 1. Get current logged-in user
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setIsAdmin(false);
        setIsLoading(false);
        return;
      }

      // 2. Check user role from profiles table
      const { data: profile } = await supabase
        .from('smit_hub_profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      // 3. Grant access if role is admin OR email matches admin email
      if ((profile && profile.role === 'admin') || user.email === 'admin@gmail.com') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } catch (error) {
      console.error("Error checking admin access:", error);
      setIsAdmin(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Show a loading spinner while checking database
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
      </div>
    );
  }

  // If strict check fails, redirect back to home page
  return isAdmin ? children : <Navigate to="/" replace />;
};


function App() {
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Router>
      <Routes>
        {/* PUBLIC ROUTES (No strict check required) */}
        <Route 
          element={
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
              <Navbar isDark={isDark} toggleTheme={toggleTheme} />
              <Outlet />
            </div>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/lost-found" element={<LostFound />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-id-cards" element={<MyIdCards />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* STRICT ADMIN ROUTES */}
        <Route 
          path="/admin" 
          element={
            <AdminProtectedRoute>
              <DashboardLayout isDark={isDark} toggleTheme={toggleTheme} />
            </AdminProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;