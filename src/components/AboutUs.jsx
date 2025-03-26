import { Award, Users, Shield, Calendar } from "lucide-react";

export const AboutUs = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 relative overflow-hidden">
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
            d="M1740 400C1290 350 990 0 -360 200"
            stroke="#293B62"
            strokeWidth="300"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-4">
            About Our Company
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're dedicated to providing the best insurance solutions with a
            client-first approach and a commitment to excellence in every
            interaction.
          </p>
        </div>

        {/* About content */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          {/* Left side company image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 md:-inset-6 rounded-3xl bg-blue-800 opacity-50"></div>
              <div className="rounded-3xl overflow-hidden relative z-10 aspect-video">
                <img
                  src="/Car-Crash-18.jpg"
                  alt="Our insurance team in the office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="w-full lg:w-1/2 text-white">
            <h3 className="text-3xl font-light mb-6">Our Story</h3>
            <p className="text-gray-300 mb-6">
              Founded in 1998, our company began with a simple mission: to
              provide honest, transparent insurance solutions tailored to each
              client's unique needs. Over the years, we've grown from a small
              local agency to a respected name in the industry, but our core
              values remain unchanged.
            </p>
            <p className="text-gray-300 mb-6">
              We believe in building long-term relationships with our clients,
              understanding their needs, and providing personalized service that
              goes beyond expectations. Our team of experienced professionals is
              committed to finding the right coverage at the right price.
            </p>
            <p className="text-gray-300 mb-8">
              Whether you're looking to protect your family, home, business, or
              investments, we're here to guide you through the process and
              ensure you have the coverage that gives you peace of mind.
            </p>
          </div>
        </div>

        {/* Values section */}
        <div className="mt-20 bg-blue-900 bg-opacity-40 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-light text-white mb-8 text-center">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 text-2xl font-bold">01</span>
              </div>
              <h4 className="text-xl font-medium text-white mb-3">Integrity</h4>
              <p className="text-gray-300">
                We believe in complete transparency and honesty in every
                interaction with our clients.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 text-2xl font-bold">02</span>
              </div>
              <h4 className="text-xl font-medium text-white mb-3">Expertise</h4>
              <p className="text-gray-300">
                Our team stays updated with industry knowledge to provide the
                best guidance and solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 text-2xl font-bold">03</span>
              </div>
              <h4 className="text-xl font-medium text-white mb-3">
                Client-First
              </h4>
              <p className="text-gray-300">
                We prioritize understanding each client's unique needs and
                delivering personalized service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
