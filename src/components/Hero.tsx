
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import BookingForm from "./BookingForm";
import { useIsMobile } from "@/hooks/use-mobile";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Discover Your Next Adventure",
    subtitle: "Explore breathtaking destinations around the world"
  },
  {
    url: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Unforgettable Experiences Await",
    subtitle: "Create memories that last a lifetime"
  },
  {
    url: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Journey Beyond Imagination",
    subtitle: "Let us guide you to extraordinary places"
  }
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={`Travel destination ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full container mx-auto px-4 md:px-8 flex flex-col justify-center items-center text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Indicator dots */}
          <div className="flex justify-center space-x-2 mb-8">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? "bg-white w-8" : "bg-white/50"
                }`}
                aria-label={`View slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Title and subtitle with animation */}
          <div className="space-y-6">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 absolute left-0 right-0 ${
                  index === currentImageIndex
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-8"
                }`}
                style={{ 
                  transitionDelay: index === currentImageIndex ? "300ms" : "0ms" 
                }}
              >
                {index === currentImageIndex && (
                  <>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                      {image.title}
                    </h1>
                    <p className="text-xl md:text-2xl mt-6 max-w-2xl mx-auto text-white/90">
                      {image.subtitle}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Buttons with animation - Fixed for mobile */}
          <div className={`${isMobile ? 'mt-28' : 'mt-36 md:mt-48'} flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4`}>
            <Button 
              size={isMobile ? "default" : "lg"}
              onClick={() => setShowForm(!showForm)}
              className={`bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 ${isMobile ? 'py-2 text-base w-full max-w-xs' : 'py-6 text-lg'} rounded-full btn-hover-slide`}
            >
              {showForm ? "Hide Form" : "Plan Your Trip"} <ChevronRight className={`ml-1 ${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
            </Button>
            <Button 
              size={isMobile ? "default" : "lg"} 
              variant="outline" 
              className={`bg-travel-blue hover:bg-travel-blue/90 text-white border-travel-blue ${isMobile ? 'px-6 py-2 text-base w-full max-w-xs' : 'px-8 py-6 text-lg'} rounded-full`}
            >
              Explore Destinations
            </Button>
          </div>

          {/* Booking Form */}
          <div 
            className={`mt-8 transition-all duration-500 ease-in-out ${
              showForm 
                ? "opacity-100 transform translate-y-0" 
                : "opacity-0 transform translate-y-10 pointer-events-none"
            }`}
          >
            <BookingForm />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#destinations" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll</span>
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
