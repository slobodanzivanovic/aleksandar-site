import { Phone } from "lucide-react";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  if (location.pathname === "/politika-privatnosti") {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 w-full z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-full py-2 px-6 flex items-center justify-between">
          <div className="flex items-center justify-between gap-10">
            {/* Logo */}
            <div className="flex items-center">
              <img className="w-16 h-16" src="./logo as.svg" alt="Vite Logo" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-blue-800 font-medium flex items-center">
              <span className="mr-1">•</span>
              Početna
            </a>
            <a href="#" className="text-gray-700 font-medium">
              Test
            </a>
            <a href="#" className="text-gray-700 font-medium">
              Test
            </a>
            <a href="#" className="text-gray-700 font-medium">
              Test
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
