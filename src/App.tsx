
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import CampusLife from "./pages/CampusLife";
import Faculty from "./pages/Faculty";
import Contact from "./pages/Contact";
import Programs from "./pages/Programs";
import News from "./pages/News";
import Departments from "./pages/Departments";
import AcademicCalendar from "./pages/AcademicCalendar";

// Program detail pages
import BTechAI from "./pages/programs/BTechAI";
import MBAAnalytics from "./pages/programs/MBAAnalytics";
import BScBiotech from "./pages/programs/BScBiotech";
import BADesign from "./pages/programs/BADesign";

// News detail pages
import CollegeFest2025 from "./pages/news/CollegeFest2025";
import GuestLectureSeries from "./pages/news/GuestLectureSeries";
import TopTenRanking from "./pages/news/TopTenRanking";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/academic-calendar" element={<AcademicCalendar />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/news" element={<News />} />
          
          {/* Program detail routes */}
          <Route path="/programs/btech-ai" element={<BTechAI />} />
          <Route path="/programs/mba-analytics" element={<MBAAnalytics />} />
          <Route path="/programs/bsc-biotech" element={<BScBiotech />} />
          <Route path="/programs/ba-design" element={<BADesign />} />
          
          {/* News detail routes */}
          <Route path="/news/college-fest-2025" element={<CollegeFest2025 />} />
          <Route path="/news/guest-lecture-series" element={<GuestLectureSeries />} />
          <Route path="/news/top-10-ranking" element={<TopTenRanking />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
