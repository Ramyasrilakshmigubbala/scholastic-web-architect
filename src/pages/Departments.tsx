
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Flask, GraduationCap, Calculator, Microscope, PenTool, HeartHandshake } from 'lucide-react';

const departments = [
  {
    title: "Computer Science",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    description: "Explore cutting-edge technologies and programming methodologies that shape our digital world.",
    faculty: 28,
    programs: 6
  },
  {
    title: "Business Administration",
    icon: <Users className="h-10 w-10 text-primary" />,
    description: "Develop management expertise and leadership skills essential for success in the global marketplace.",
    faculty: 32,
    programs: 8
  },
  {
    title: "Engineering",
    icon: <Calculator className="h-10 w-10 text-primary" />,
    description: "Create innovative solutions to complex problems through applied science and mathematics.",
    faculty: 40,
    programs: 12
  },
  {
    title: "Natural Sciences",
    icon: <Flask className="h-10 w-10 text-primary" />,
    description: "Investigate the natural world through experimentation, observation, and theoretical analysis.",
    faculty: 25,
    programs: 7
  },
  {
    title: "Humanities",
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    description: "Explore the human experience through literature, philosophy, history, and cultural studies.",
    faculty: 30,
    programs: 9
  },
  {
    title: "Medical Sciences",
    icon: <Microscope className="h-10 w-10 text-primary" />,
    description: "Prepare for careers in healthcare through rigorous scientific training and clinical experiences.",
    faculty: 35,
    programs: 5
  },
  {
    title: "Arts & Design",
    icon: <PenTool className="h-10 w-10 text-primary" />,
    description: "Express creativity and develop artistic skills across various visual and performing arts disciplines.",
    faculty: 22,
    programs: 6
  },
  {
    title: "Social Sciences",
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    description: "Study human behavior and societal structures through research-based methodologies.",
    faculty: 26,
    programs: 8
  }
];

const Departments: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Academic Departments</h1>
          <p className="text-lg mb-10 max-w-3xl">
            Our diverse academic departments offer comprehensive programs that combine theoretical knowledge with practical skills development, guided by expert faculty dedicated to scholarly excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden card-hover">
                <div className="p-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    {dept.icon}
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl mb-3">{dept.title}</h3>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{dept.faculty} Faculty Members</span>
                    <span>{dept.programs} Programs</span>
                  </div>
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

export default Departments;
