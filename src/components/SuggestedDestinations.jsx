import DestinationCard from "./DestinationCard";
import lagos from "../assets/lagos.jpg";
import abuja from "../assets/abuja.jpg";
import ph from "../assets/ph.jpg";
import ibadan from "../assets/ibadan.jpg";

export default function SuggestedDestinations() {
  const destinations = [
    { name: "lagos", image: lagos },
    { name: "abuja", image: abuja },
    { name: "ph", image: ph },
    { name: "ibadan", image: ibadan },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Suggested Destinations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((place, index) => (
          <DestinationCard key={index} {...place} />
        ))}
      </div>
    </section>
  );
}