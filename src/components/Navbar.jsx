export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Hotels.ng
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#" className="hover:text-blue-600 cursor-pointer">
            Hotels in Lagos
          </a>
          <a href="#" className="hover:text-blue-600 cursor-pointer">
            Hotels in Abuja
          </a>
          <a href="#" className="hover:text-blue-600 cursor-pointer">
            Hotels in Port Harcourt
          </a>
          <a href="#" className="hover:text-blue-600 cursor-pointer">
            Deals
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm hover:text-blue-600 cursor-pointer">
            Sign in
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
          >
            Book Now
          </a>
        </div>

      </div>
    </nav>
  );
}