
import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    id: 1,
    title: 'College Fest 2025 Announced!',
    date: 'June 15, 2024',
    excerpt: 'Mark your calendars for the biggest campus celebration of the year with music, competitions, and more.',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    link: '/news/college-fest-2025'
  },
  {
    id: 2,
    title: 'Guest Lecture by Industry Leaders',
    date: 'July 8, 2024',
    excerpt: 'Join us for an insightful session with top executives from leading tech companies sharing their experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    link: '/news/guest-lecture-series'
  },
  {
    id: 3,
    title: 'College Ranked Among Top 10 Universities',
    date: 'May 30, 2024',
    excerpt: 'We are proud to announce our placement in the top 10 universities nationwide for academic excellence.',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    link: '/news/top-10-ranking'
  }
];

const LatestNews: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Latest News & Events</h2>
            <p className="text-lg text-gray-600">
              Stay updated with what's happening at our campus
            </p>
          </div>
          <Link to="/news" className="mt-4 md:mt-0 text-primary font-medium hover:text-primary-light transition-colors">
            View All News →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Link 
              key={item.id}
              to={item.link}
              className="bg-white rounded-xl overflow-hidden shadow-sm card-hover flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{item.date}</span>
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{item.excerpt}</p>
                <div className="text-primary font-medium">Read More →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
