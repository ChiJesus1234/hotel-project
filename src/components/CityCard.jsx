export default function CityCard({ name }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300 cursor-pointer hover:bg-[#3b82f6] group">
      
      <p className="font-semibold group-hover:text-white">
        {name}
      </p>

    </div>
  );
}