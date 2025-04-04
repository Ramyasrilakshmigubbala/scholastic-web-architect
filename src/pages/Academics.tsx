
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
          <p className="text-lg mb-6">
            With over 100 accredited programs across various disciplines, Elite College offers a diverse range of educational opportunities for students at all levels.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Academics;
