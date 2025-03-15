
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { useRevealAnimations } from "@/hooks/useIntersectionObserver";
import { 
  Globe, 
  HeartHandshake, 
  BadgePercent, 
  ShieldCheck, 
  Clock, 
  Users, 
  ChevronRight, 
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  useRevealAnimations();

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const target = document.querySelector(href);
        if (!target) return;
        
        window.scrollTo({
          top: (target as HTMLElement).offsetTop - 80,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  const destinations = [
    {
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      title: "Santorini Island",
      location: "Greece",
      rating: 4.9,
      price: "$1,299"
    },
    {
      image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      title: "Kyoto Gardens",
      location: "Japan",
      rating: 4.8,
      price: "$1,499"
    },
    {
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "Swiss Alps",
      location: "Switzerland",
      rating: 4.9,
      price: "$1,199"
    },
    {
      image: "https://images.unsplash.com/photo-1490077476659-095159692ab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1033&q=80",
      title: "Bali Beaches",
      location: "Indonesia",
      rating: 4.7,
      price: "$899"
    },
    {
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      title: "Venice Canals",
      location: "Italy",
      rating: 4.8,
      price: "$1,099"
    },
    {
      image: "https://images.unsplash.com/photo-1583292650898-7d22cd67094b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      title: "Machu Picchu",
      location: "Peru",
      rating: 4.9,
      price: "$1,599"
    }
  ];

  const features = [
    {
      icon: Globe,
      title: "Handpicked Experiences",
      description: "Our travel experts personally select each destination and experience to ensure exceptional quality and authenticity."
    },
    {
      icon: HeartHandshake,
      title: "Personalized Itineraries",
      description: "We create custom travel plans tailored to your preferences, interests, and travel style."
    },
    {
      icon: BadgePercent,
      title: "Best Price Guarantee",
      description: "Find a lower price for the same trip? We'll match it and give you an additional 5% discount."
    },
    {
      icon: ShieldCheck,
      title: "Secure Travel Protection",
      description: "Travel with confidence knowing you're covered by our comprehensive travel insurance options."
    },
    {
      icon: Clock,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available around the clock to assist you before, during, and after your journey."
    },
    {
      icon: Users,
      title: "Local Expert Guides",
      description: "Explore with knowledgeable local guides who provide authentic insights and exclusive access."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      quote: "Our honeymoon in Bali was absolute perfection! Every detail was thoughtfully arranged, from the stunning beach resorts to the private tours of ancient temples. We couldn't have asked for a more romantic experience.",
      rating: 5
    },
    {
      name: "David Chen",
      location: "Toronto, Canada",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      quote: "The guided tour through Japan's countryside exceeded all expectations. The local guides were incredibly knowledgeable, and the cultural experiences felt authentic rather than touristy. Will definitely book with Voyage again!",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      quote: "As a solo female traveler, safety was my priority. Voyage not only ensured I felt secure throughout my journey across Southeast Asia but also connected me with amazing fellow travelers. Truly a life-changing adventure!",
      rating: 4
    }
  ];

  return (
    <div className="overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Popular Destinations Section */}
      <section id="destinations" className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Popular Destinations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Explore Our Top Destinations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto md:text-lg">
              Discover breathtaking landscapes, vibrant cultures, and unforgettable experiences at our most sought-after travel destinations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={index}
                {...destination}
                delay={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12 reveal">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              View All Destinations <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative reveal">
              <img
                src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="About Voyage Travel"
                className="rounded-xl shadow-xl w-full h-auto"
              />
              {/* Stats card */}
              <div className="absolute -bottom-10 -right-10 bg-white rounded-xl shadow-xl p-6 max-w-xs hidden md:block">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-4xl font-bold text-primary">12+</p>
                    <p className="text-gray-600">Years of Experience</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-primary">50+</p>
                    <p className="text-gray-600">Destinations</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-primary">10k+</p>
                    <p className="text-gray-600">Happy Customers</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-primary">4.9</p>
                    <p className="text-gray-600">Review Score</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="reveal">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Creating Unforgettable Travel Experiences Since 2010
              </h2>
              <p className="text-gray-600 mb-6">
                At Voyage, we believe travel is more than just visiting new places — it's about creating meaningful connections, discovering diverse cultures, and collecting memories that last a lifetime.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of passionate travel experts is dedicated to crafting personalized journeys that match your unique interests and preferences. Whether you're seeking adventure, relaxation, cultural immersion, or a blend of experiences, we design each itinerary with meticulous attention to detail.
              </p>
              
              {/* Features grid for mobile */}
              <div className="grid grid-cols-2 gap-4 mb-8 md:hidden">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">12+</p>
                  <p className="text-gray-600 text-sm">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-gray-600 text-sm">Destinations</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">10k+</p>
                  <p className="text-gray-600 text-sm">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">4.9</p>
                  <p className="text-gray-600 text-sm">Review Score</p>
                </div>
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Learn More About Us <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Voyage Difference
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto md:text-lg">
              Discover what sets us apart and why thousands of travelers choose us for their journeys around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
            alt="World map"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-travel-dark/80"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white reveal">
            <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
              Start Your Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-white/80 mb-10 text-lg">
              Our travel experts are ready to help you plan the perfect getaway. Whether you're dreaming of tropical beaches, mountain retreats, or vibrant cities, we'll create a personalized itinerary just for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 text-lg"
              >
                Plan Your Trip Now <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white/10 px-8 text-lg"
              >
                View Special Offers
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Travelers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto md:text-lg">
              Hear from our satisfied customers about their experiences exploring the world with Voyage.
            </p>
          </div>
          
          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                delay={index}
              />
            ))}
          </div>
          
          {/* Navigation arrows */}
          <div className="flex justify-center items-center space-x-4 reveal">
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all">
              <ArrowLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <Newsletter />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
