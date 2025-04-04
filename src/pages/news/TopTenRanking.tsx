
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar } from 'lucide-react';

const TopTenRanking: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom">
          <div className="mb-6">
            <div className="flex items-center text-gray-500 text-sm mb-2">
              <Calendar className="h-4 w-4 mr-2" />
              <span>May 30, 2024</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">College Ranked Among Top 10 Universities</h1>
          </div>
          
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="Top 10 Ranking"
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Elite College has achieved a remarkable milestone by being ranked among the top 10 universities nationwide in the latest educational rankings. This recognition reflects our commitment to academic excellence, innovative teaching methodologies, and world-class research facilities.
            </p>
            
            <h2>Key Highlights from the Ranking</h2>
            <p>
              The ranking particularly highlighted several strengths of Elite College:
            </p>
            <ul>
              <li><strong>Industry Partnerships:</strong> Our strong ties with leading companies across various sectors</li>
              <li><strong>Graduate Employment:</strong> 94% of our graduates secure employment within six months of graduation</li>
              <li><strong>Research Output:</strong> Significant contributions to cutting-edge research in multiple disciplines</li>
              <li><strong>Faculty Expertise:</strong> World-renowned professors and researchers on our academic team</li>
              <li><strong>Campus Infrastructure:</strong> State-of-the-art facilities and learning environments</li>
            </ul>
            
            <h2>A Message from the President</h2>
            <blockquote>
              "This achievement is a testament to the hard work and dedication of our faculty, staff, and students. We are committed to maintaining the highest standards of education and research, preparing our students to be leaders in their fields and contributors to society. This recognition inspires us to reach even greater heights in the coming years."
              <footer>— Dr. James Mitchell, President of Elite College</footer>
            </blockquote>
            
            <h2>Looking Ahead</h2>
            <p>
              While we celebrate this achievement, we remain focused on our mission to provide exceptional education and create an environment where innovation thrives. We will continue to enhance our academic programs, expand research opportunities, and strengthen our connections with industry partners.
            </p>
            
            <p>
              We extend our gratitude to all members of the Elite College community—students, faculty, staff, alumni, and supporters—whose contributions have made this achievement possible.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TopTenRanking;
