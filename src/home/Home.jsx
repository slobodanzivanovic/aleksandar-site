import { DetailsCarousel } from "../components/DetailsCarousel.jsx";
import { Phone } from "lucide-react";
import { AboutUs } from "../components/AboutUs.jsx";
import { InsuranceClaims } from "../components/InsuranceClaims.jsx";
import { ContactUs } from "../components/ContactUs.jsx";
import { GoogleMap } from "../components/GoogleMap.jsx";

export const Home = () => {
  return (
    <>
      <div
        id="pocetna"
        className="min-home-screen w-full bg-gray-900 relative overflow-hidden pt-24"
      >
        {/* Main curved shape */}
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center justify-between relative z-10">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 text-white mb-12 lg:mb-0">
            <h1 className="text-5xl sm:text-6xl font-light leading-tight mb-6">
              Brzo i efikasno do
              <br />
              naknade štete
            </h1>
            <p className="text-xl text-gray-300 max-w-lg mb-8">
              Specijalizovani za procenu i naknadu štete na vozilima i
              objektima, sa kompletnom pravnom podrškom i pratećim uslugama
            </p>
            <p className="flex items-center gap-3 border-1 border-solid border-blue-800 bg-blue-800 p-2 rounded-lg w-full md:w-fit">
              <Phone size={18} className="mr-2 text-gray-500" />
              <span className="text-gray-500">
                Pozovite nas odmah:
                <a href="tel:0603189200" className="ml-1 font-bold text-white">
                  0603189200
                </a>
              </span>
            </p>
          </div>

          {/* Right side form */}
          <div className="w-full lg:w-5/12">
            <div className="bg-blue-900 rounded-3xl p-8 text-white">
              <h2 className="text-3xl font-medium text-center mb-8">
                Get a Quote
              </h2>

              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-blue-300 pb-2 outline-none text-white placeholder-blue-300"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full bg-transparent border-b border-blue-300 pb-2 outline-none text-white placeholder-blue-300"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-blue-300 pb-2 outline-none text-white placeholder-blue-300"
                  />
                </div>

                <div>
                  <select className="w-full bg-transparent border-b border-blue-300 pb-2 outline-none text-blue-300">
                    <option value="" disabled selected className="bg-blue-800">
                      Insurance Category
                    </option>
                    <option value="life" className="bg-blue-800">
                      Life Insurance
                    </option>
                    <option value="health" className="bg-blue-800">
                      Health Insurance
                    </option>
                    <option value="auto" className="bg-blue-800">
                      Auto Insurance
                    </option>
                    <option value="home" className="bg-blue-800">
                      Home Insurance
                    </option>
                  </select>
                </div>

                <div>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full bg-transparent border-b border-blue-300 pb-2 outline-none text-white placeholder-blue-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-teal-300 hover:bg-teal-400 text-gray-900 font-medium rounded-full transition duration-300"
                >
                  Get Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="usluge">
        <DetailsCarousel />
      </div>
      <div id="o-nama">
        <AboutUs />
      </div>
      <div id="potrazivanja">
        <InsuranceClaims />
      </div>
      <div id="kontakt">
        <ContactUs />
      </div>
      <GoogleMap />
    </>
  );
};
