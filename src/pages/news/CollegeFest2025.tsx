
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar } from 'lucide-react';

const CollegeFest2025: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom">
          <div className="mb-6">
            <div className="flex items-center text-gray-500 text-sm mb-2">
              <Calendar className="h-4 w-4 mr-2" />
              <span>June 15, 2024</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">College Fest 2025 Announced!</h1>
          </div>
          
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="College Fest 2025"
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Elite College is thrilled to announce the dates for our annual College Fest 2025! From September 15-18, 2025, the campus will come alive with music, dance, competitions, exhibitions, and much more.
            </p>
            
            <h2>Innovation for Tomorrow</h2>
            <p>
              This year's theme is "Innovation for Tomorrow," celebrating creativity and forward thinking across all disciplines. Students from all departments are encouraged to participate and showcase their talents.
            </p>
            
            <h2>What to Expect</h2>
            <ul>
              <li>Cultural performances and competitions</li>
              <li>Technology exhibitions showcasing student projects</li>
              <li>Art and design showcases</li>
              <li>Sports tournaments</li>
              <li>Guest performances by renowned artists</li>
              <li>Food festivals featuring cuisines from around the world</li>
              <li>Alumni meetups and networking events</li>
            </ul>
            
            <h2>How to Participate</h2>
            <p>
              Registration for various competitions and events will open on July 1, 2024. Students can register individually or as teams through the Student Portal or at the Student Activities Office.
            </p>
            
            <p>
              Mark your calendars and get ready for the biggest celebration of the year at Elite College! Stay tuned for more updates on specific events, guest appearances, and competition details.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CollegeFest2025;
