
import { Calendar, MapPin, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const BookingForm = () => {
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [travelers, setTravelers] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!destination || !dates || !travelers) {
      toast.error("Please fill in all the fields");
      return;
    }
    
    toast.success("Your trip planning request has been received!");
    setDestination("");
    setDates("");
    setTravelers("");
  };

  return (
    <div className="glass rounded-2xl p-6 max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <label className="block text-white text-sm font-medium mb-2 text-left">
            Destination
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              className="bg-white/20 text-white placeholder:text-white/70 rounded-lg py-3 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Where to?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </div>
        
        <div className="relative">
          <label className="block text-white text-sm font-medium mb-2 text-left">
            Dates
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              className="bg-white/20 text-white placeholder:text-white/70 rounded-lg py-3 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Select dates"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
            />
          </div>
        </div>
        
        <div className="relative">
          <label className="block text-white text-sm font-medium mb-2 text-left">
            Travelers
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              className="bg-white/20 text-white placeholder:text-white/70 rounded-lg py-3 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
            >
              <option value="" className="text-gray-800">Select travelers</option>
              <option value="1" className="text-gray-800">1 Traveler</option>
              <option value="2" className="text-gray-800">2 Travelers</option>
              <option value="3" className="text-gray-800">3 Travelers</option>
              <option value="4" className="text-gray-800">4+ Travelers</option>
            </select>
          </div>
        </div>
        
        <div className="relative md:self-end">
          <Button 
            type="submit" 
            className="w-full mt-7 bg-primary hover:bg-primary/90 text-white font-medium"
          >
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
