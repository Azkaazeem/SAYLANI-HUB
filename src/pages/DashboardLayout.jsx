import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

import MainDashboard from './MainDashboard';
import ManageUsers from './ManageUsers';
import ManageVolunteers from './ManageVolunteers';
import ManageContacts from './ManageContacts';
import ManageComplaints from './ManageComplaints';
import ManageLostFound from './ManageLostFound';
import VolunteerSchedule from './VolunteerSchedule';

export default function DashboardLayout({ isDark, toggleTheme }) {
  const [currentView, setCurrentView] = useState('dashboard');
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard': return <MainDashboard />;
      case 'users': return <ManageUsers />; 
      case 'volunteers': return <ManageVolunteers />;
      case 'schedule': return <VolunteerSchedule />;
      case 'contacts': return <ManageContacts />;
      case 'complaints': return <ManageComplaints />;
      case 'lostfound': return <ManageLostFound />;
      default: return <MainDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-slate-900 font-sans transition-colors duration-300 relative overflow-hidden">
      
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}`}>
        <Sidebar 
          currentView={currentView} 
          setCurrentView={setCurrentView} 
          closeSidebar={() => setIsSidebarOpen(false)}
        />
      </div>

      <main className="flex-1 flex flex-col overflow-hidden w-full">
        <Header 
          isDarkMode={isDark} 
          toggleTheme={toggleTheme} 
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        />
        
        <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-100 dark:bg-slate-900 transition-colors duration-300">
            {renderContent()}
        </div>
      </main>
    </div>
  );
}