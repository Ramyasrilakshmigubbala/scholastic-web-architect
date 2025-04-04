
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Monitor, TrendingUp, Beaker, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const featuredPrograms = [
  {
    icon: <Monitor className="h-8 w-8" />,
    title: 'B.Tech in Artificial Intelligence',
    description: 'Explore the cutting-edge field of AI and machine learning to build intelligent systems. This program offers comprehensive coverage of algorithms, data science, neural networks, and real-world applications.',
    link: '/programs/btech-ai',
    bgColor: 'bg-blue-500'
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'MBA in Business Analytics',
    description: 'Gain expertise in data-driven decision making and business strategy. Learn to leverage big data to identify trends, forecast outcomes, and drive organizational success in this dynamic program.',
    link: '/programs/mba-analytics',
    bgColor: 'bg-green-500'
  },
  {
    icon: <Beaker className="h-8 w-8" />,
    title: 'B.Sc. in Biotechnology',
    description: 'Discover the science of living systems and their applications in medicine and agriculture. This program combines molecular biology, genetics, biochemistry, and cutting-edge lab techniques.',
    link: '/programs/bsc-biotech',
    bgColor: 'bg-purple-500'
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: 'BA in Graphic Design',
    description: 'Develop your creative skills and learn industry-standard design techniques. From digital media to print, this program covers visual communication, typography, and interactive design principles.',
    link: '/programs/ba-design',
    bgColor: 'bg-orange-500'
  }
];

const Programs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Programs</h1>
          <p className="text-lg mb-10 max-w-3xl">
            Discover our comprehensive range of academic programs designed to prepare you for success in your chosen field. Each program offers a unique blend of theoretical knowledge and practical skills.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPrograms.map((program, index) => (
              <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden">
                <div className={`${program.bgColor} p-6 text-white flex items-center space-x-4`}>
                  <div className="bg-white/20 p-3 rounded-full">
                    {program.icon}
                  </div>
                  <h2 className="text-xl font-bold">{program.title}</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <Link to={program.link}>
                    <Button className="w-full">Learn More</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Programs;
