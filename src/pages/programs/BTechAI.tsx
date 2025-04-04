
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Monitor } from 'lucide-react';

const BTechAI: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-blue-500 p-3 rounded-full text-white">
              <Monitor className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">B.Tech in Artificial Intelligence</h1>
          </div>
          
          <p className="text-lg mb-6">
            Our B.Tech in Artificial Intelligence program is designed to prepare students for careers in one of the fastest-growing and most exciting fields in technology today.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-xl mb-8">
            <h2 className="text-2xl font-semibold mb-4">Program Overview</h2>
            <p>
              This four-year undergraduate program provides comprehensive coverage of artificial intelligence concepts, algorithms, and applications. Students will gain expertise in machine learning, deep learning, natural language processing, computer vision, and robotics.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Courses</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Introduction to Artificial Intelligence</li>
              <li>Machine Learning Fundamentals</li>
              <li>Deep Learning and Neural Networks</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision</li>
              <li>Robotics and Automation</li>
              <li>Ethical AI and Responsible Computing</li>
              <li>AI Project Development</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Career Opportunities</h2>
            <p className="mb-4">Graduates of this program can pursue careers in:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Machine Learning Engineer</li>
              <li>AI Research Scientist</li>
              <li>Data Scientist</li>
              <li>NLP Engineer</li>
              <li>Computer Vision Engineer</li>
              <li>Robotics Engineer</li>
              <li>AI Ethics Consultant</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BTechAI;
