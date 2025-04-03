
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import QuickLinks from '@/components/home/QuickLinks';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FeaturedPrograms from '@/components/home/FeaturedPrograms';
import Testimonials from '@/components/home/Testimonials';
import LatestNews from '@/components/home/LatestNews';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <QuickLinks />
        <WhyChooseUs />
        <FeaturedPrograms />
        <Testimonials />
        <LatestNews />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
