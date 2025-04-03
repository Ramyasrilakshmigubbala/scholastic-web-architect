
import React from 'react';
import { Button } from '@/components/ui/button';
import { Monitor, TrendingUp, Flask, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    icon: <Monitor className="h-6 w-6" />,
    title: 'B.Tech in Artificial Intelligence',
    description: 'Explore the cutting-edge field of AI and machine learning to build intelligent systems.',
    link: '/programs/btech-ai',
    bgColor: 'bg-blue-500'
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'MBA in Business Analytics',
    description: 'Gain expertise in data-driven decision making and business strategy.',
    link: '/programs/mba-analytics',
    bgColor: 'bg-green-500'
  },
  {
    icon: <Flask className="h-6 w-6" />,
    title: 'B.Sc. in Biotechnology',
    description: 'Discover the science of living systems and their applications in medicine and agriculture.',
    link: '/programs/bsc-biotech',
    bgColor: 'bg-purple-500'
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: 'BA in Graphic Design',
    description: 'Develop your creative skills and learn industry-standard design techniques.',
    link: '/programs/ba-design',
    bgColor: 'bg-orange-500'
  }
];

const FeaturedPrograms: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const nextProgram = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % programs.length);
  };
  
  const prevProgram = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + programs.length) % programs.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Programs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most popular and industry-relevant academic programs
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden h-[400px]">
            <div 
              className="flex transition-transform duration-300 h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {programs.map((program, index) => (
                <div 
                  key={index} 
                  className="min-w-full h-full px-2"
                >
                  <Link 
                    to={program.link}
                    className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col h-full card-hover"
                  >
                    <div className={`${program.bgColor} p-4 text-white flex items-center justify-center`}>
                      <div className="bg-white/20 p-3 rounded-full">
                        {program.icon}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-montserrat font-semibold text-xl mb-3">{program.title}</h3>
                      <p className="text-gray-600 mb-6 flex-1">{program.description}</p>
                      <Button className="w-full">Learn More</Button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            
            {/* Navigation dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {programs.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation buttons */}
            <button 
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
              onClick={prevProgram}
              aria-label="Previous program"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
              onClick={nextProgram}
              aria-label="Next program"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Link 
              key={index}
              to={program.link} 
              className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col card-hover h-full"
            >
              <div className={`${program.bgColor} p-4 text-white flex items-center justify-center`}>
                <div className="bg-white/20 p-3 rounded-full">
                  {program.icon}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-montserrat font-semibold text-xl mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6 flex-1">{program.description}</p>
                <Button className="w-full">Learn More</Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
