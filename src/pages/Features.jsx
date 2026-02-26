import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  AlertCircle, 
  HeartHandshake, 
  CreditCard, 
  Droplet, 
  Briefcase, 
  GraduationCap, 
  Calendar 
} from 'lucide-react';

const Features = () => {
  const smitBlue = '#014990';
  const smitGreen = '#65A338';

  const featuresList = [
    {
      title: 'Lost & Found',
      description: 'Report lost items or help others find their missing belongings on campus.',
      icon: Search,
      path: '/lost-found',
      color: 'blue',
      status: 'Active'
    },
    {
      title: 'Campus Complaints',
      description: 'Easily report issues related to internet, electricity, or maintenance.',
      icon: AlertCircle,
      path: '/complaints',
      color: 'green',
      status: 'Active'
    },
    {
      title: 'Volunteer Program',
      description: 'Join the Saylani IT Hub team to manage events and serve the community.',
      icon: HeartHandshake,
      path: '/volunteer',
      color: 'blue',
      status: 'Active'
    },
    {
      title: 'My ID Cards',
      description: 'View, verify, and download your official Saylani Volunteer ID Cards.',
      icon: CreditCard,
      path: '/my-id-cards',
      color: 'green',
      status: 'Active'
    },
    {
      title: 'Blood Bank',
      description: 'Find emergency blood donors quickly or register yourself as a donor.',
      icon: Droplet,
      path: '#',
      color: 'red',
      status: 'Coming Soon'
    },
    {
      title: 'Job Portal',
      description: 'Exclusive job opportunities and internships for SMIT students.',
      icon: Briefcase,
      path: '#',
      color: 'blue',
      status: 'Coming Soon'
    },
    {
      title: 'Events & Seminars',
      description: 'Get the latest updates on upcoming tech events, hackathons, and seminars.',
      icon: Calendar,
      path: '#',
      color: 'green',
      status: 'Coming Soon'
    },
    {
      title: 'Alumni Network',
      description: 'Connect with successful alumni for career guidance and mentorship.',
      icon: GraduationCap,
      path: '#',
      color: 'blue',
      status: 'Coming Soon'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 md:px-8 animate-page-fade">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Discover <span style={{ color: smitBlue }}>Saylani</span> <span style={{ color: smitGreen }}>Hub</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            All essential campus facilities and services integrated into a single, easy-to-use platform. Select a service to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuresList.map((feature, index) => {
            const IconComponent = feature.icon;
            const isComingSoon = feature.status === 'Coming Soon';
            
            return (
              <Link 
                to={isComingSoon ? '#' : feature.path} 
                key={index}
                className={`relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 
                  ${isComingSoon ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-2 hover:shadow-xl group'}`}
              >
                {isComingSoon && (
                  <div className="absolute top-4 right-4 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Coming Soon
                  </div>
                )}

                <div 
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 ${!isComingSoon && 'group-hover:scale-110'}`}
                  style={{ 
                    backgroundColor: feature.color === 'blue' ? `${smitBlue}15` : feature.color === 'red' ? '#fee2e2' : `${smitGreen}15`,
                    color: feature.color === 'blue' ? smitBlue : feature.color === 'red' ? '#ef4444' : smitGreen
                  }}
                >
                  <IconComponent size={28} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {!isComingSoon && (
                  <div className="mt-5 flex items-center text-sm font-bold" style={{ color: feature.color === 'blue' ? smitBlue : smitGreen }}>
                    Explore <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                )}
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Features;