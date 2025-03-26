import { RoutePaths } from "./RoutePaths.jsx";
import { useNavigate } from "react-router-dom";
import { Frown } from "lucide-react";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-gray-900 relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background shape */}
      <div className="absolute left-0 top-0 w-full h-full">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H1440V900H0V0Z" fill="#1E2A3B" />
          <path
            d="M-300 200C150 250 450 600 1800 400"
            stroke="#293B62"
            strokeWidth="300"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="bg-blue-900 bg-opacity-50 rounded-3xl p-12 max-w-2xl mx-auto">
          <div className="w-32 h-32 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-8">
            <Frown className="w-16 h-16 text-teal-300" />
          </div>

          <h1 className="text-5xl font-light text-white mb-6">
            404 - Stranica nije pronađena
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Izgleda da stranica koju ste tražili ne postoji ili je premeštena.
          </p>

          <button
            onClick={() => navigate(RoutePaths.HOME)}
            className="py-3 px-10 bg-teal-300 hover:bg-teal-400 text-gray-900 font-medium rounded-full transition duration-300"
            type="button"
          >
            Vrati se na početnu
          </button>
        </div>
      </div>
    </div>
  );
};
