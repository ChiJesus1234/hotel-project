export default function HotelCard({ name, price, image }) {
  return (
    <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold mb-2">{name}</h3>
        <p className="text-blue-600 font-bold">{price}</p>
      </div>

    </div>
  );
}