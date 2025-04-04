
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Us</h1>
          <p className="text-lg mb-6">
            Welcome to Elite College, where academic excellence meets innovation. Our institution is dedicated to providing world-class education to shape the leaders of tomorrow.
          </p>
          <p className="text-lg mb-6">
            Founded in 1985, Elite College has grown into one of the most prestigious educational institutions in the country, offering a wide range of programs across various disciplines.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
