
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 bg-gradient-to-br from-primary to-primary-light overflow-hidden">
      <div className="container-custom min-h-[80vh] flex flex-col items-center justify-center py-20">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Empowering Future Leaders
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join Elite College and embark on a journey of academic excellence, innovation, 
            and personal growth to shape your future success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 hover:text-primary font-semibold px-6 py-6 text-base" asChild>
              <Link to="/programs">
                Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button className="bg-accent hover:bg-accent/90 font-semibold px-6 py-6 text-base" asChild>
              <Link to="/admissions">
                Apply for Admission
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full"></div>
          <div className="absolute top-40 -left-20 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full"></div>
        </div>
        
        {/* Overlay image */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center opacity-40"></div>
      </div>
    </section>
  );
};

export default HeroSection;
