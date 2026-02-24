import React from 'react';
import { Target, Heart, Award, Code, Globe, Users } from 'lucide-react';
import myPic from '../assets/myPic.png';
import founderPic from '../assets/founder.jpg';

const smitBlue = '#014990';
const smitGreen = '#65A338';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 md:px-8 animate-page-fade font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            About <span style={{ color: smitBlue }}>Saylani</span> <span style={{ color: smitGreen }}>Hub</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Saylani Mass IT Training (SMIT) Hub is a dedicated platform designed to streamline campus activities, foster community engagement, and provide essential digital services to our students and staff.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${smitBlue}15`, color: smitBlue }}>
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              To empower the youth with modern IT skills and provide a seamless campus experience through digital innovation.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${smitGreen}15`, color: smitGreen }}>
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              To create a globally recognized ecosystem where technology meets welfare, transforming lives across boundaries.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 bg-red-50 text-red-500">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Core Values</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Empathy, technical excellence, community service, and continuous growth drive everything we do.
            </p>
          </div>
        </div>

        {/* Profiles Section */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Meet the People Behind the Mission</h2>
          <p className="text-gray-500 dark:text-gray-400">The visionaries and creators driving this platform forward.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          
          {/* ================= THE FOUNDER CARD ================= */}
          <div className="w-full md:w-[400px] bg-white dark:bg-gray-800 rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 group hover:shadow-2xl transition-all duration-300">
            <div className="h-32 relative overflow-hidden" style={{ backgroundColor: smitBlue }}>
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
            </div>
            
            <div className="flex justify-center -mt-16 relative z-10 px-6">
              <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 bg-gray-100 overflow-hidden shadow-md flex items-center justify-center">
                <img 
                  src={founderPic} 
                  alt="Maulana Bashir Farooq Qadiri" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Founder' }}
                />
              </div>
            </div>

            <div className="px-6 pt-4 pb-8 text-center">
              <div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3" style={{ backgroundColor: `${smitBlue}15`, color: smitBlue }}>
                <Award size={12} className="mr-1" /> The Visionary
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white leading-tight mb-1">Maulana Bashir Farooq Qadiri</h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium mb-4">Founder & Chairman, Saylani Welfare</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl">
                "Our aim is to uplift the nation through education and technology. SMIT was founded to provide free, high-quality IT training to millions of students, shaping the future of our country."
              </p>
            </div>
          </div>

          {/* ================= THE DEVELOPER CARD ================= */}
          <div className="w-full md:w-[400px] bg-white dark:bg-gray-800 rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 group hover:shadow-2xl transition-all duration-300">
            <div className="h-32 relative overflow-hidden" style={{ backgroundColor: smitGreen }}>
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
            </div>
            
            <div className="flex justify-center -mt-16 relative z-10 px-6">
              <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 bg-gray-100 overflow-hidden shadow-md flex items-center justify-center">
                <img 
                  src={myPic} 
                  alt="Azka" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Developer' }}
                />
              </div>
            </div>

            <div className="px-6 pt-4 pb-8 text-center">
              <div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3" style={{ backgroundColor: `${smitGreen}15`, color: smitGreen }}>
                <Code size={12} className="mr-1" /> The Creator
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white leading-tight mb-1">Azka Azeem</h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium mb-4">Frontend Developer</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl">
                "I designed and developed the Saylani Hub to provide a modern, fast, and unified digital experience for our community. Building intuitive and impactful interfaces is my passion."
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;