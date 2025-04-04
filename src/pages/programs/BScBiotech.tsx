
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Beaker } from 'lucide-react';

const BScBiotech: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-purple-500 p-3 rounded-full text-white">
              <Beaker className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">B.Sc. in Biotechnology</h1>
          </div>
          
          <p className="text-lg mb-6">
            Our B.Sc. in Biotechnology program explores the fascinating intersection of biology and technology, preparing students to contribute to advancements in medicine, agriculture, and environmental science.
          </p>
          
          <div className="bg-purple-50 p-6 rounded-xl mb-8">
            <h2 className="text-2xl font-semibold mb-4">Program Overview</h2>
            <p>
              This three-year undergraduate program provides a strong foundation in biological sciences with specialized knowledge in biotechnological applications. Students gain hands-on experience in modern laboratory techniques and develop critical thinking skills for solving complex biological problems.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Courses</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cell Biology and Genetics</li>
              <li>Molecular Biology</li>
              <li>Biochemistry</li>
              <li>Microbiology</li>
              <li>Immunology</li>
              <li>Genetic Engineering</li>
              <li>Bioinformatics</li>
              <li>Industrial Biotechnology</li>
              <li>Bioprocess Technology</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Career Opportunities</h2>
            <p className="mb-4">Graduates of this program can pursue careers in:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Research Scientist</li>
              <li>Bioprocess Engineer</li>
              <li>Quality Control Analyst</li>
              <li>Clinical Research Associate</li>
              <li>Bioinformatics Specialist</li>
              <li>Microbiologist</li>
              <li>Biochemist</li>
              <li>Molecular Biologist</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BScBiotech;
