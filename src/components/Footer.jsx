export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Company */}
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Careers</a></li>
            <li><a href="#" className="hover:text-gray-400">Blog</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-bold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
          </ul>
        </div>

        {/* Discover */}
        <div>
          <h3 className="font-bold mb-4">Discover</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-400">Hotels in Lagos</a></li>
            <li><a href="#" className="hover:text-gray-400">Hotels in Abuja</a></li>
            <li><a href="#" className="hover:text-gray-400">Hotels in Ibadan</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-sm mt-8 text-gray-400">
        © 2026 Hotels.ng Clone. All rights reserved.
      </div>
    </footer>
  );
}