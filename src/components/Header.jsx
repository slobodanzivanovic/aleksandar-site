import { Phone } from "lucide-react";

export const Header = () => {
  return (
    <div className="w-full  py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-full py-2 px-6 flex items-center justify-between">
          <div className="flex items-center justify-between gap-10">
            {/* Logo */}
            <div className="flex items-center">
              <img className="w-16 h-16" src="./logo as.svg" alt="Vite Logo" />
            </div>
            {/* Phone number */}
            <div className="hidden md:flex items-center">
              <Phone size={18} className="mr-2 text-gray-500" />
              <span className="text-gray-500">Pozovite nas odmah:</span>
              <a href="tel:0603189200" className="ml-1 font-bold text-blue-800">
                0603189200
              </a>
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
