export default function Newsletter() {
  return (
    <div className="bg-blue-600 text-white py-16 text-center">
      
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Get the best hotel deals
      </h2>

      <p className="mb-6">
        Subscribe to our newsletter for exclusive discounts
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-4 px-6">
        
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-md text-black w-full md:w-80"
        />

        <button className="bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-gray-100 transition">
          Subscribe
        </button>

      </div>

    </div>
  );
}