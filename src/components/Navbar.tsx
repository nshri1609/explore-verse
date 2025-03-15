
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  Menu, 
  X,
  Globe, 
  Phone
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="z-50 flex items-center">
            <span className={`text-2xl font-heading font-bold ${isScrolled ? "text-travel-dark" : "text-white"}`}>
              SimplyRaahi
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className={`flex space-x-6 ${isScrolled ? "text-travel-dark" : "text-white"}`}>
              <li className="relative group">
                <a href="#destinations" className="flex items-center py-2 text-sm font-medium hover:text-primary transition-colors">
                  Destinations <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tropical Beaches</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mountain Retreats</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Historic Cities</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Island Getaways</a>
                  </div>
                </div>
              </li>
              <li>
                <a href="#about" className="py-2 text-sm font-medium hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className="py-2 text-sm font-medium hover:text-primary transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="py-2 text-sm font-medium hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className={`font-medium ${isScrolled ? "text-travel-dark hover:text-primary" : "text-white hover:text-primary hover:bg-white/10"}`}>
                <Phone className="mr-1 h-4 w-4" /> Contact
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Plan Your Trip
              </Button>
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-travel-dark" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-travel-dark" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container h-full flex flex-col pt-24 px-6 pb-8">
          <ul className="space-y-6 text-travel-dark">
            <li>
              <a 
                href="#destinations" 
                className="block text-xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Destinations
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="block text-xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="#features" 
                className="block text-xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Choose Us
              </a>
            </li>
            <li>
              <a 
                href="#testimonials" 
                className="block text-xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
            </li>
          </ul>
          
          <div className="mt-auto space-y-4">
            <Button className="w-full" variant="outline">
              <Globe className="mr-2 h-4 w-4" /> Contact Us
            </Button>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Plan Your Trip
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
