
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Faculty: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Faculty</h1>
          <p className="text-lg mb-6">
            Meet our distinguished faculty members who are leaders in their fields. Our professors bring academic excellence, industry experience, and a passion for teaching to the classroom.
          </p>
          <p className="text-lg mb-6">
            With a commitment to both teaching and research, Elite College faculty members mentor students while advancing knowledge in their respective disciplines.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Faculty;
