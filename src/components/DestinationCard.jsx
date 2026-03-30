export default function DestinationCard({ name, image }) {
  return (
    <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
      
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover"
      />

      <div className="p-4 font-semibold">
        {name}
      </div>

    </div>
  );
}