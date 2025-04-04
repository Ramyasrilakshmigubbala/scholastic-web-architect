
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PenTool } from 'lucide-react';

const BADesign: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-orange-500 p-3 rounded-full text-white">
              <PenTool className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">BA in Graphic Design</h1>
          </div>
          
          <p className="text-lg mb-6">
            Our BA in Graphic Design program nurtures creative talent and technical skills, preparing students to excel in the dynamic field of visual communication.
          </p>
          
          <div className="bg-orange-50 p-6 rounded-xl mb-8">
            <h2 className="text-2xl font-semibold mb-4">Program Overview</h2>
            <p>
              This three-year undergraduate program combines artistic creativity with technical proficiency, teaching students to communicate visually through various media. The curriculum covers design principles, typography, digital media, illustration, and industry-standard software tools.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Courses</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Design Fundamentals</li>
              <li>Typography</li>
              <li>Digital Illustration</li>
              <li>Web Design</li>
              <li>User Interface (UI) Design</li>
              <li>Brand Identity Design</li>
              <li>Motion Graphics</li>
              <li>Publication Design</li>
              <li>Portfolio Development</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Career Opportunities</h2>
            <p className="mb-4">Graduates of this program can pursue careers in:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Graphic Designer</li>
              <li>UI/UX Designer</li>
              <li>Brand Identity Designer</li>
              <li>Web Designer</li>
              <li>Illustrator</li>
              <li>Art Director</li>
              <li>Publication Designer</li>
              <li>Motion Graphics Designer</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BADesign;
