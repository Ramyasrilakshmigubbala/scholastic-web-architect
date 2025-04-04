
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    id: 1,
    title: 'College Fest 2025 Announced!',
    date: 'June 15, 2024',
    excerpt: 'Mark your calendars for the biggest campus celebration of the year with music, competitions, and more.',
    content: "Elite College is thrilled to announce the dates for our annual College Fest 2025! From September 15-18, 2025, the campus will come alive with music, dance, competitions, exhibitions, and much more. This year's theme is \"Innovation for Tomorrow,\" celebrating creativity and forward thinking across all disciplines. Students from all departments are encouraged to participate and showcase their talents. Special performances by renowned artists are also scheduled.",
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    link: '/news/college-fest-2025'
  },
  {
    id: 2,
    title: 'Guest Lecture by Industry Leaders',
    date: 'July 8, 2024',
    excerpt: 'Join us for an insightful session with top executives from leading tech companies sharing their experiences.',
    content: "Elite College is pleased to host a distinguished panel of industry leaders for a special guest lecture series on July 15, 2024. The event will feature CEOs and senior executives from companies like Google, Microsoft, and Amazon who will share insights about emerging technologies, industry trends, and career opportunities. This is a valuable opportunity for students to learn from and network with accomplished professionals at the forefront of technological innovation.",
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    link: '/news/guest-lecture-series'
  },
  {
    id: 3,
    title: 'College Ranked Among Top 10 Universities',
    date: 'May 30, 2024',
    excerpt: 'We are proud to announce our placement in the top 10 universities nationwide for academic excellence.',
    content: "Elite College has achieved a remarkable milestone by being ranked among the top 10 universities nationwide in the latest educational rankings. This recognition reflects our commitment to academic excellence, innovative teaching methodologies, and world-class research facilities. The ranking particularly highlighted our strong industry partnerships, high employment rates for graduates, and contributions to cutting-edge research. This achievement is a testament to the hard work of our faculty, staff, and students.",
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    link: '/news/top-10-ranking'
  }
];

const News: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Latest News & Events</h1>
          <p className="text-lg mb-10">
            Stay updated with what's happening at Elite College. Browse our latest news, events, and announcements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Link 
                key={item.id}
                to={item.link}
                className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col h-full card-hover"
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
      </main>
      
      <Footer />
    </div>
  );
};

export default News;
