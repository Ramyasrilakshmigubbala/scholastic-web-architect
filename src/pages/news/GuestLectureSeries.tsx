
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar } from 'lucide-react';

const GuestLectureSeries: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom">
          <div className="mb-6">
            <div className="flex items-center text-gray-500 text-sm mb-2">
              <Calendar className="h-4 w-4 mr-2" />
              <span>July 8, 2024</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">Guest Lecture by Industry Leaders</h1>
          </div>
          
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="Guest Lecture Series"
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Elite College is pleased to host a distinguished panel of industry leaders for a special guest lecture series on July 15, 2024. The event will feature CEOs and senior executives from companies like Google, Microsoft, and Amazon who will share insights about emerging technologies, industry trends, and career opportunities.
            </p>
            
            <h2>Event Details</h2>
            <p>
              <strong>Date:</strong> July 15, 2024<br />
              <strong>Time:</strong> 10:00 AM - 3:00 PM<br />
              <strong>Venue:</strong> Main Auditorium, Elite College Campus<br />
              <strong>Registration:</strong> Required (Free for students)
            </p>
            
            <h2>Featured Speakers</h2>
            <ul>
              <li><strong>Sarah Johnson</strong> - Chief Technology Officer, TechGiant Corp</li>
              <li><strong>Michael Chen</strong> - VP of AI Research, Global Innovations</li>
              <li><strong>Dr. Emily Rodriguez</strong> - Senior Director of Product, Future Technologies</li>
              <li><strong>James Wilson</strong> - Founder & CEO, NextGen Solutions</li>
            </ul>
            
            <h2>Topics to be Discussed</h2>
            <ul>
              <li>The future of artificial intelligence and machine learning</li>
              <li>Emerging technologies shaping various industries</li>
              <li>Skills and competencies needed for the jobs of tomorrow</li>
              <li>Entrepreneurship and innovation in the tech sector</li>
              <li>Ethical considerations in technology development</li>
            </ul>
            
            <h2>Registration Information</h2>
            <p>
              Students can register for this event through the Student Portal or visit the Career Development Center. Faculty members and staff can register through the Faculty Portal. Limited seats are available, so early registration is encouraged.
            </p>
            
            <p>
              This is a valuable opportunity for students to learn from and network with accomplished professionals at the forefront of technological innovation. Don't miss this chance to gain insights that could shape your future career!
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GuestLectureSeries;
