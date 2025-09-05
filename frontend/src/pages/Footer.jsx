import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-300 mt-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-lg">About</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-red-500 transition">
                How Airbnb Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Newsroom
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Investors
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Airbnb Plus
              </a>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-lg">Community</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Diversity & Belonging
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Invite Friends
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Gift Cards
              </a>
            </li>
          </ul>
        </div>

        {/* Hosting */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-lg">Hosting</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Try Hosting
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition">
                AirCover for Hosts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Explore Resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Community Forum
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-lg">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Cancellation Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Safety Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Report a Concern
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Airbnb Clone, Inc. · Privacy · Terms ·
            Sitemap
          </p>
          <div className="flex space-x-3 mt-3 md:mt-0">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-600 transition"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-600 transition"
            >
              <FaTwitter className="text-white" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-600 transition"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-600 transition"
            >
              <FaLinkedinIn className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
