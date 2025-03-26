import { DetailsCarousel } from "../components/DetailsCarousel.jsx";

export const Home = () => {
  return (
    <>
      <div className="min-home-screen w-full bg-gray-900 relative overflow-hidden">
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
        <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between relative z-10">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 text-white mb-12 lg:mb-0">
            <h1 className="text-5xl sm:text-6xl font-light leading-tight mb-6">
              We provide the best
              <br />
              value insurance
            </h1>
            <p className="text-xl text-gray-300 max-w-lg">
              Simple Steps You Can Take to Improve Your Financial Well-Being for
              the rest of Your Life
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
      <DetailsCarousel />
    </>
  );
};
