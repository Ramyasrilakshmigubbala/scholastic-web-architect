
import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { 
    title: "Academics", 
    path: "/academics",
    dropdownItems: [
      { title: "Departments", path: "/departments" },
      { title: "Programs", path: "/programs" },
      { title: "Academic Calendar", path: "/academic-calendar" },
    ]
  },
  { title: "Admissions", path: "/admissions" },
  { title: "Campus Life", path: "/campus-life" },
  { title: "Faculty", path: "/faculty" },
  { title: "Contact", path: "/contact" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-md py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-primary text-white h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-md">
              <span className="font-montserrat font-bold text-lg md:text-xl">EC</span>
            </div>
            <span className="font-montserrat font-bold text-lg md:text-xl hidden sm:inline-block text-primary">Elite College</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <div key={link.title} className="relative group">
              <Link 
                to={link.path}
                className="nav-link flex items-center"
                onMouseEnter={() => link.dropdownItems && setOpenDropdown(link.title)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.title}
                {link.dropdownItems && <ChevronDown className="ml-1 h-4 w-4" />}
              </Link>
              
              {link.dropdownItems && openDropdown === link.title && (
                <div 
                  className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 w-48 z-10"
                  onMouseEnter={() => setOpenDropdown(link.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.dropdownItems.map((item) => (
                    <Link 
                      key={item.title}
                      to={item.path}
                      className="block px-4 py-2 text-sm hover:bg-secondary-light hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <Button className="bg-primary hover:bg-primary/90">Apply Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden animate-fade-in">
            <nav className="container-custom py-6 flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <React.Fragment key={link.title}>
                  <Link 
                    to={link.path}
                    className="text-lg font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                  {link.dropdownItems && (
                    <div className="pl-4 flex flex-col space-y-2">
                      {link.dropdownItems.map((item) => (
                        <Link 
                          key={item.title}
                          to={item.path}
                          className="text-muted-foreground hover:text-primary py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => setIsMenuOpen(false)}>
                  Apply Now
                </Button>
              </div>
            </nav>
          </div>
        )}

        {/* Search Dialog */}
        <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
          <DialogContent className="sm:max-w-md">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Search</h2>
              <div className="flex space-x-2">
                <Input placeholder="Search for courses, faculty, events..." className="flex-1" />
                <Button type="submit">Search</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
};

export default Header;
