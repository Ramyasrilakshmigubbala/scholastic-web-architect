
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Admissions: React.FC = () => {
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
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Apply Now
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admissions;
