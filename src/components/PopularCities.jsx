import CityCard from "./CityCard";

export default function PopularCities() {
  const cities = [
    "Lagos",
    "Abuja",
    "Port Harcourt",
    "Ibadan",
    "Enugu",
    "Kano",
    "Uyo",
    "Owerri",
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      
      <h2 className="text-2xl font-bold mb-6">
        Popular Cities
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {cities.map((city, index) => (
          <CityCard key={index} name={city} />
        ))}
      </div>

    </div>
  );
}
