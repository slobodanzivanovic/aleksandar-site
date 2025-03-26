import { Car, Home, Plane, ChevronRight, Dog } from "lucide-react";
import { useState } from "react";

export const DetailsCarousel = () => {
  // State to track active job description
  const [activeIndex, setActiveIndex] = useState(0);

  // Job descriptions data
  const jobDetails = [
    {
      title: "Car Insurance",
      icon: <Car className="w-8 h-8 text-white" />,
      description:
        "Make a plan for the emergence of life. We protect your most precious assets, allowing you to devote your time and energy to more essential things in life.",
      additionalInfo:
        "Discover the most appropriate fit for you and your Family.",
      image: "/v303_461.png",
      imageAlt: "Car with family at sunset",
    },
    {
      title: "Home Insurance",
      icon: <Home className="w-8 h-8 text-white" />,
      description:
        "Protect your home and belongings from unexpected events. Our comprehensive coverage ensures peace of mind for you and your family.",
      additionalInfo: "Find the perfect coverage for your home today.",
      image: "/v303_461.png",
      imageAlt: "House protected by insurance",
    },
    {
      title: "Pet Insurance",
      icon: <Dog className="w-8 h-8 text-white" />,
      description:
        "Give your pets the care they deserve with our comprehensive pet insurance plans. Cover veterinary expenses and ensure their health and happiness.",
      additionalInfo: "Tailored plans for all types of pets and budgets.",
      image: "/v303_461.png",
      imageAlt: "Happy dog with family",
    },
    {
      title: "Travel Insurance",
      icon: <Plane className="w-8 h-8 text-white" />,
      description:
        "Travel with confidence knowing you're protected against unexpected events. Our travel insurance covers medical emergencies, trip cancellations, and more.",
      additionalInfo: "Global coverage for your peace of mind.",
      image: "/v303_461.png",
      imageAlt: "Family on vacation",
    },
  ];

  // Function to handle button click
  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  // Function to handle next button click
  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % jobDetails.length);
  };

  return (
    <div className="min-home-screen w-full bg-gray-900 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute left-0 top-0 w-full h-full">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H1440V600H0V0Z" fill="#1E2A3B" />
          <path
            d="M-300 200C150 250 450 600 1800 400"
            stroke="#293B62"
            strokeWidth="300"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Container for the whole content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex flex-col items-center justify-center relative z-10">
        <div className="flex flex-col lg:flex-row w-full items-center lg:items-start justify-center">
          {/* Left side vertical navigation - becomes horizontal on mobile */}
          <div className="flex flex-row lg:flex-col items-center justify-center lg:justify-start space-x-4 lg:space-x-0 lg:space-y-6 mb-8 lg:mb-0 lg:mr-8 xl:mr-16">
            {jobDetails.map((job, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`transition-all duration-300 ${
                  activeIndex === index
                    ? "transform scale-110"
                    : "opacity-70 hover:opacity-100"
                }`}
                aria-label={`View ${job.title} details`}
              >
                <div className="relative">
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-600 flex items-center justify-center ${
                      activeIndex === index ? "ring-2 ring-blue-300" : ""
                    }`}
                  >
                    {job.icon}
                  </div>
                  {activeIndex === index && (
                    <div className="absolute -inset-3 border border-blue-300 rounded-full opacity-20"></div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Main content */}
          <div className="flex flex-col md:flex-row w-full items-center justify-between">
            {/* Center content */}
            <div className="w-full md:w-1/2 lg:w-1/3 text-white px-4 md:px-8">
              <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 md:mb-8">
                {jobDetails[activeIndex].title}
              </h1>
              <p className="text-gray-300 mb-4 md:mb-6">
                {jobDetails[activeIndex].description}
              </p>
              <p className="text-gray-300 mb-8 md:mb-10">
                {jobDetails[activeIndex].additionalInfo}
              </p>

              <button
                onClick={handleNextClick}
                className="w-12 h-12 rounded-full bg-teal-300 text-gray-900 flex items-center justify-center transition-transform hover:scale-105"
                aria-label="Next insurance type"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Right side image */}
            <div className="w-full md:w-1/2 mt-10 md:mt-0 md:ml-8">
              <div className="relative">
                <div className="absolute -inset-4 md:-inset-6 rounded-3xl bg-blue-800 opacity-50"></div>
                <div className="rounded-3xl overflow-hidden relative z-10">
                  <img
                    src={jobDetails[activeIndex].image}
                    alt={jobDetails[activeIndex].imageAlt}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
