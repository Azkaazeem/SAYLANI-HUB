import React, { useEffect, useState } from 'react';
import { Menu, Moon, Sun, Bell, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import Swal from 'sweetalert2';

export default function Header({ isDarkMode, toggleTheme, toggleSidebar }) {
  const [adminName, setAdminName] = useState('Admin');

  useEffect(() => {
    const fetchAdmin = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user?.email) {
        const name = session.user.email.split('@')[0];
        setAdminName(name);
      }
    };
    fetchAdmin();
  }, []);

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: 'Logout?',
      text: "Are you sure you want to log out of the Admin Panel?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#64748b',
      confirmButtonText: 'Yes, log out!'
    });

    if (result.isConfirmed) {
      await supabase.auth.signOut();
      window.location.href = 'https://saylani-hub-orpin.vercel.app/'; 
    }
  };

  return (
    <header className="h-16 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 flex items-center justify-between px-6 transition-colors duration-300">
      
      <div className="flex items-center">
        <button 
          onClick={toggleSidebar} 
          className="mr-4 p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-700 transition-colors md:hidden"
          title="Open Menu"
        >
          <Menu size={24}/>
        </button>
        
        <div className="text-lg font-bold text-gray-800 dark:text-white hidden sm:block">
           Admin Panel
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleTheme} 
          className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
          title="Toggle Dark/Light Mode"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button className="relative p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors" title="Notifications">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-2 border-l border-gray-200 dark:border-slate-700 pl-4">
          <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm uppercase shadow-sm">
            {adminName.charAt(0)}
          </div>
          <span className="text-sm font-semibold text-gray-700 dark:text-white hidden md:block capitalize">
            {adminName}
          </span>
        </div>

        <button 
          onClick={handleLogout} 
          className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors ml-2" 
          title="Logout"
        >
          <LogOut size={20} />
        </button>
      </div>
    </header>
  );
}