
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Users, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const academicLinks = [
  {
    title: "Departments",
    description: "Explore our diverse academic departments and their specialized programs",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    link: "/departments"
  },
  {
    title: "Programs",
    description: "Browse through our comprehensive range of undergraduate and graduate programs",
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    link: "/programs"
  },
  {
    title: "Academic Calendar",
    description: "View important dates and deadlines for the current academic year",
    icon: <Calendar className="h-10 w-10 text-primary" />,
    link: "/academic-calendar"
  },
  {
    title: "Faculty",
    description: "Meet our distinguished faculty members and research experts",
    icon: <Users className="h-10 w-10 text-primary" />,
    link: "/faculty"
  }
];

const Academics: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Academics</h1>
          <p className="text-lg mb-6">
            Explore our comprehensive academic programs designed to provide students with the knowledge and skills needed for success in their chosen fields.
          </p>
          <p className="text-lg mb-10">
            With over 100 accredited programs across various disciplines, Elite College offers a diverse range of educational opportunities for students at all levels.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {academicLinks.map((item, index) => (
              <Link 
                key={index}
                to={item.link}
                className="bg-white rounded-xl shadow-sm p-6 flex flex-col h-full card-hover border border-gray-100"
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
                <div className="text-primary font-medium">Learn More →</div>
              </Link>
            ))}
          </div>
          
          <div className="bg-primary/5 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Begin Your Academic Journey?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Take the first step towards your future by applying to Elite College today.
            </p>
            <Button size="lg" asChild>
              <Link to="/admissions">Apply Now</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Academics;
