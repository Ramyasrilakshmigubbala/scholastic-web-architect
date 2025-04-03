
import React from 'react';
import { Award, Users, Briefcase, Building, Wallet } from 'lucide-react';

const features = [
  {
    icon: <Award className="h-7 w-7 text-primary" />,
    title: '100+ Accredited Programs',
    description: 'Choose from a wide range of internationally recognized programs designed to meet industry demands.'
  },
  {
    icon: <Users className="h-7 w-7 text-primary" />,
    title: 'World-Class Faculty',
    description: 'Learn from distinguished professors and industry experts committed to your academic success.'
  },
  {
    icon: <Briefcase className="h-7 w-7 text-primary" />,
    title: 'Top Placements & Partnerships',
    description: 'Benefit from our strong industry connections and impressive placement record with leading employers.'
  },
  {
    icon: <Building className="h-7 w-7 text-primary" />,
    title: 'State-of-the-Art Infrastructure',
    description: 'Access modern facilities, advanced laboratories, and comfortable living spaces for an optimal learning environment.'
  },
  {
    icon: <Wallet className="h-7 w-7 text-primary" />,
    title: 'Scholarships & Financial Aid',
    description: 'Explore various financial assistance options designed to make quality education accessible to deserving students.'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-secondary-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Elite College?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're committed to providing an exceptional educational experience that prepares you for success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm card-hover"
            >
              <div className="mb-4 p-3 bg-blue-50 rounded-full inline-block">
                {feature.icon}
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
