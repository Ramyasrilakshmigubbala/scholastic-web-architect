
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

const Admissions: React.FC = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleApplyNow = () => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Application Started",
        description: "Your application process has been initiated. Check your email for further instructions.",
        duration: 5000,
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Admissions</h1>
          <p className="text-lg mb-6">
            Ready to join Elite College? Our admissions process is designed to identify passionate, talented students who will thrive in our academic environment.
          </p>
          <p className="text-lg mb-6">
            Learn about our application requirements, important deadlines, and financial aid opportunities.
          </p>
          <div className="mt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={handleApplyNow}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Apply Now"}
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-3">Undergraduate Admissions</h3>
              <p className="text-gray-600 mb-4">
                Begin your journey toward a bachelor's degree with our competitive undergraduate programs.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Application Deadline: January 15</li>
                <li>Early Decision: November 1</li>
                <li>Early Action: December 1</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-3">Graduate Admissions</h3>
              <p className="text-gray-600 mb-4">
                Advance your career with our master's and doctoral programs designed for working professionals.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Fall Semester: March 1</li>
                <li>Spring Semester: October 1</li>
                <li>Summer Semester: February 1</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-3">Financial Aid</h3>
              <p className="text-gray-600 mb-4">
                We offer various scholarships and financial aid programs to help make education affordable.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>FAFSA Priority Deadline: February 1</li>
                <li>Scholarship Applications: March 15</li>
                <li>Work-Study Programs Available</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admissions;
