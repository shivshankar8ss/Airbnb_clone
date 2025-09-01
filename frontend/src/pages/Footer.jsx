import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10 border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                How Airbnb Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Newsroom
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Investors
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Airbnb Plus
              </a>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="font-semibold mb-3">Community</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Diversity & Belonging
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Invite Friends
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Gift Cards
              </a>
            </li>
          </ul>
        </div>

        {/* Hosting */}
        <div>
          <h3 className="font-semibold mb-3">Hosting</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Try Hosting
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                AirCover for Hosts
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Explore Resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Community Forum
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cancellation Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Safety Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Report a Concern
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © {new Date().getFullYear()} Airbnb Clone, Inc. · Privacy · Terms ·
            Sitemap
          </p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-gray-900">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
