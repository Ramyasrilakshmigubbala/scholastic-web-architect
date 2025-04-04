
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CampusLife: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Campus Life</h1>
          <p className="text-lg mb-6">
            Life at Elite College extends far beyond the classroom. Discover the vibrant community, state-of-the-art facilities, and enriching experiences waiting for you.
          </p>
          <p className="text-lg mb-6">
            From student clubs and organizations to sports teams and cultural events, there are countless opportunities to get involved and make lifelong memories.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CampusLife;
