
import React from 'react';
import { Award, Calendar, FileCheck, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  {
    title: 'Admissions',
    description: 'Apply now and start your journey with us',
    icon: <FileCheck className="h-8 w-8 text-primary" />,
    link: '/admissions',
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Rankings & Accreditations',
    description: 'Learn about our prestigious recognitions',
    icon: <Award className="h-8 w-8 text-primary" />,
    link: '/about/accreditations',
    bgColor: 'bg-green-50'
  },
  {
    title: 'Upcoming Events',
    description: 'Stay updated with our latest events',
    icon: <Calendar className="h-8 w-8 text-primary" />,
    link: '/events',
    bgColor: 'bg-yellow-50'
  },
  {
    title: 'Campus Tour',
    description: 'Explore our campus facilities virtually',
    icon: <Map className="h-8 w-8 text-primary" />,
    link: '/campus-tour',
    bgColor: 'bg-purple-50'
  }
];

const QuickLinks: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Quick Access</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Elite College at your fingertips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((item, index) => (
            <Link 
              to={item.link} 
              key={index}
              className={`${item.bgColor} rounded-xl p-6 text-center card-hover flex flex-col items-center justify-center`}
            >
              <div className="mb-4 p-3 bg-white/70 rounded-full">
                {item.icon}
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
