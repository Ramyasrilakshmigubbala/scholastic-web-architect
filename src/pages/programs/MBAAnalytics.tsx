
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp } from 'lucide-react';

const MBAAnalytics: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-green-500 p-3 rounded-full text-white">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">MBA in Business Analytics</h1>
          </div>
          
          <p className="text-lg mb-6">
            Our MBA in Business Analytics program combines business acumen with data analysis skills, preparing students to make data-driven decisions in today's competitive business landscape.
          </p>
          
          <div className="bg-green-50 p-6 rounded-xl mb-8">
            <h2 className="text-2xl font-semibold mb-4">Program Overview</h2>
            <p>
              This two-year graduate program equips students with the knowledge and skills needed to analyze complex business problems using data-driven approaches. The curriculum covers business fundamentals, statistical analysis, data visualization, predictive modeling, and strategic decision-making.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Courses</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Business Statistics and Analytics</li>
              <li>Data Mining for Business Insights</li>
              <li>Big Data Management</li>
              <li>Predictive Analytics</li>
              <li>Marketing Analytics</li>
              <li>Financial Analytics</li>
              <li>Supply Chain Analytics</li>
              <li>Business Intelligence and Visualization</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Career Opportunities</h2>
            <p className="mb-4">Graduates of this program can pursue careers in:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Business Analytics Manager</li>
              <li>Data Analyst</li>
              <li>Business Intelligence Analyst</li>
              <li>Marketing Analyst</li>
              <li>Financial Analyst</li>
              <li>Supply Chain Analyst</li>
              <li>Analytics Consultant</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MBAAnalytics;
