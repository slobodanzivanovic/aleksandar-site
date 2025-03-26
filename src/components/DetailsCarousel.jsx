import { Car, Shield, Truck, ChevronRight } from "lucide-react";
import { useState } from "react";

export const DetailsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const jobDetails = [
    {
      title: "Naknada Štete na Vozilima",
      icon: <Car className="w-8 h-8 text-white" />,
      description:
        "Kompletan postupak naknade štete od osiguravajućih društava u Srbiji i inostranstvu, kao i od fizičkih lica u slučaju kada nisu osigurani.",
      additionalInfo: "Brza i efikasna procena sa maksimalnom naknadom.",
      image: "/v303_461.png",
      imageAlt: "Oštećeno vozilo",
    },
    {
      title: "Nematerjalna Šteta",
      icon: <Shield className="w-8 h-8 text-white" />,
      description:
        "Stručna naknada nematerjalne štete za povrede nastale u saobraćajnim nezgodama, po polisi životnog osiguranja ili povrede na radu.",
      additionalInfo: "Maksimalno ostvarivanje vaših prava na naknadu.",
      image: "/v303_461.png",
      imageAlt: "Zastupanje klijenata",
    },
    {
      title: "Servis i Transport",
      icon: <Truck className="w-8 h-8 text-white" />,
      description:
        "Vršimo procenu i popravku vozila u našem servisu, kao i transport (šlep) vozila koja nisu u voznom stanju po celoj Srbiji.",
      additionalInfo: "Dostupne usluge rente vozila tokom popravke.",
      image: "/v303_461.png",
      imageAlt: "Transport vozila",
    },
    {
      title: "Osiguranje i Otkup",
      icon: <Shield className="w-8 h-8 text-white" />,
      description:
        "Posredujemo u osiguranju vozila sa kasko polisom kod svih osiguravača, kao i otkup vozila koja nisu u voznom stanju.",
      additionalInfo: "Stručni saveti za najbolju zaštitu.",
      image: "/v303_461.png",
      imageAlt: "Osiguranje vozila",
    },
  ];

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % jobDetails.length);
  };

  return (
    <div className="min-home-screen w-full bg-gray-900 relative overflow-hidden">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex flex-col items-center justify-center relative z-10">
        <div className="flex flex-col lg:flex-row w-full items-center lg:items-start justify-center">
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

          <div className="flex flex-col md:flex-row w-full items-center justify-between">
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
