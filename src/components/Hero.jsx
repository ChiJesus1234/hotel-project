export default function Hero() {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Find and Book Hotels in Nigeria
        </h1>

        {/* Subtext */}
        <p className="mb-8 text-lg">
          Search through thousands of hotels at the best prices
        </p>

        {/* Search Box */}
        <div className="bg-white rounded-lg p-4 flex flex-col md:flex-row gap-4 shadow-lg">
          
          <input
            type="text"
            placeholder="Enter city or hotel"
            className="flex-1 px-4 py-2 rounded-md text-black border outline-none"
          />

          <input
            type="date"
            className="px-4 py-2 rounded-md text-black border outline-none"
          />

          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-[#1557b0] transition">
            Search
          </button>

        </div>

      </div>
    </div>
  );
}