import hotel1 from "../assets/hotel1.jpg";
import hotel2 from "../assets/hotel2.jpg";
import hotel3 from "../assets/hotel3.jpg";
import hotel4 from "../assets/hotel4.jpg";

export default function TopDeals() {
  const deals = [
  {
    name: "Eko Hotel Lagos",
    price: "₦120,000 / night",
    location: "Victoria Island, Lagos",
    rating: "8.5",
    image: hotel1,
    discount: "20% OFF",
  },
  {
    name: "Transcorp Hilton",
    price: "₦150,000 / night",
    location: "Abuja",
    rating: "9.0",
    image: hotel2,
    discount: "15% OFF",
  },
  {
    name: "Radisson Blu Ikeja",
    price: "₦130,000 / night",
    location: "Ikeja, Lagos",
    rating: "8.8",
    image: hotel3,
    discount: "10% OFF",
  },
  {
    name: "Sheraton Lagos",
    price: "₦110,000 / night",
    location: "Ikeja, Lagos",
    rating: "8.2",
    image: hotel4,
    discount: "25% OFF",
  },
];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Top Hotel Deals</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {deals.map((hotel, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold">{hotel.name}</h3>
              <p className="text-blue-600 font-bold">{hotel.price}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}