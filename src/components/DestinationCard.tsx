
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { toast } from "@/components/ui/sonner";

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  rating: number;
  price: string;
  delay?: number;
}

const DestinationCard = ({
  image,
  title,
  location,
  rating,
  price,
  delay = 0
}: DestinationCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleBookNow = () => {
    toast.success(`Booking started for ${title}`);
  };

  return (
    <div 
      className="destination-card group reveal"
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div className="relative h-[450px] overflow-hidden rounded-xl">
        {/* Image with blur loading effect */}
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        <img
          src={image}
          alt={title}
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
        
        {/* Card content */}
        <div className="card-content">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-white/80 text-sm">{location}</p>
              <div className="flex items-center bg-white/20 px-2 py-1 rounded-full">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 text-sm">{rating}</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold">{title}</h3>
            
            <div className="flex items-center justify-between pt-3">
              <div>
                <span className="text-sm text-white/80">Starting from</span>
                <p className="text-lg font-bold">{price}</p>
              </div>
              
              <Button 
                onClick={handleBookNow}
                size="sm" 
                className="bg-primary/90 hover:bg-primary text-white rounded-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
              >
                Book Now <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
