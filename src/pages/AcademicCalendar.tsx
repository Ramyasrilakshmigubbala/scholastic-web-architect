
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Calendar as CalendarIcon, GraduationCap, BookOpen } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const academicEvents = [
  {
    semester: "Fall Semester 2024",
    events: [
      { date: "August 15-18", event: "New Student Orientation", icon: <BookOpen className="h-4 w-4" /> },
      { date: "August 20", event: "Fall Classes Begin", icon: <BookOpen className="h-4 w-4" /> },
      { date: "September 2", event: "Labor Day (No Classes)", icon: <CalendarIcon className="h-4 w-4" /> },
      { date: "October 14-15", event: "Fall Break", icon: <CalendarIcon className="h-4 w-4" /> },
      { date: "November 27-29", event: "Thanksgiving Break", icon: <CalendarIcon className="h-4 w-4" /> },
      { date: "December 6", event: "Last Day of Classes", icon: <BookOpen className="h-4 w-4" /> },
      { date: "December 9-13", event: "Final Exams", icon: <GraduationCap className="h-4 w-4" /> }
    ]
  },
  {
    semester: "Spring Semester 2025",
    events: [
      { date: "January 13", event: "Spring Classes Begin", icon: <BookOpen className="h-4 w-4" /> },
      { date: "January 20", event: "Martin Luther King Jr. Day (No Classes)", icon: <CalendarIcon className="h-4 w-4" /> },
      { date: "March 9-13", event: "Spring Break", icon: <CalendarIcon className="h-4 w-4" /> },
      { date: "April 10", event: "Good Friday (No Classes)", icon: <CalendarIcon className="h-4 w-4" /> },
      { date: "May 1", event: "Last Day of Classes", icon: <BookOpen className="h-4 w-4" /> },
      { date: "May 4-8", event: "Final Exams", icon: <GraduationCap className="h-4 w-4" /> },
      { date: "May 16", event: "Commencement Ceremony", icon: <GraduationCap className="h-4 w-4" /> }
    ]
  },
  {
    semester: "Summer Sessions 2025",
    events: [
      { date: "May 26", event: "Memorial Day (No Classes)", icon: <CalendarIcon className="h-4 w-4" /> },
      { date: "May 27", event: "Summer Session I Begins", icon: <BookOpen className="h-4 w-4" /> },
      { date: "July 2", event: "Summer Session I Ends", icon: <BookOpen className="h-4 w-4" /> },
      { date: "July 4", event: "Independence Day (No Classes)", icon: <CalendarIcon className="h-4 w-4" /> },
      { date: "July 6", event: "Summer Session II Begins", icon: <BookOpen className="h-4 w-4" /> },
      { date: "August 14", event: "Summer Session II Ends", icon: <BookOpen className="h-4 w-4" /> }
    ]
  }
];

const AcademicCalendar: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="h-8 w-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold text-primary">Academic Calendar</h1>
          </div>
          
          <p className="text-lg mb-10 max-w-3xl">
            Plan ahead with important dates and deadlines for the academic year. This calendar includes semester start and end dates, holidays, exam periods, and other significant academic events.
          </p>
          
          <div className="space-y-12">
            {academicEvents.map((term, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">{term.semester}</h2>
                <Separator className="mb-6" />
                <div className="space-y-4">
                  {term.events.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        {item.icon}
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6 flex-1">
                        <span className="font-medium min-w-[140px]">{item.date}</span>
                        <span className="text-gray-700">{item.event}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AcademicCalendar;
