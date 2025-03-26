import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const ContactUs = () => {
  return (
    <div className="w-full bg-gray-900 relative overflow-hidden">
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
            d="M1740 200C1290 250 990 600 -360 400"
            stroke="#293B62"
            strokeWidth="300"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-4">
            Kontaktirajte Nas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Naš stručni tim je spreman da odgovori na sva vaša pitanja i pruži
            vam podršku.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/3">
            <div className="bg-blue-900 bg-opacity-50 rounded-3xl p-8">
              <h3 className="text-3xl font-light text-white mb-6">
                Pošaljite nam poruku
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Ime i prezime
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-blue-800 bg-opacity-50 border border-blue-700 rounded-lg p-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-300"
                      placeholder="Vaše ime i prezime"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email adresa
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-blue-800 bg-opacity-50 border border-blue-700 rounded-lg p-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-300"
                      placeholder="email@primer.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full bg-blue-800 bg-opacity-50 border border-blue-700 rounded-lg p-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-300"
                      placeholder="Vaš broj telefona"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-300 mb-2"
                    >
                      Tema
                    </label>
                    <select
                      id="subject"
                      className="w-full bg-blue-800 bg-opacity-50 border border-blue-700 rounded-lg p-3 text-white outline-none focus:ring-2 focus:ring-teal-300"
                    >
                      <option value="" className="bg-blue-900">
                        Izaberite temu
                      </option>
                      <option value="claim" className="bg-blue-900">
                        Odšteta za saobraćajnu nezgodu
                      </option>
                      <option value="insurance" className="bg-blue-900">
                        Osiguranje
                      </option>
                      <option value="consultation" className="bg-blue-900">
                        Besplatna konsultacija
                      </option>
                      <option value="other" className="bg-blue-900">
                        Ostalo
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Poruka
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="w-full bg-blue-800 bg-opacity-50 border border-blue-700 rounded-lg p-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-300 resize-none"
                    placeholder="Opišite vaš slučaj ili postavite pitanje..."
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="py-3 px-10 bg-teal-300 hover:bg-teal-400 text-gray-900 font-medium rounded-full transition duration-300"
                  >
                    Pošaljite Poruku
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-blue-900 bg-opacity-50 rounded-3xl p-8 h-full">
              <h3 className="text-3xl font-light text-white mb-6">
                Kontakt Informacije
              </h3>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 text-teal-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Telefon</h4>
                    <p className="text-gray-300">+381 60 318 9200</p>
                    <p className="text-gray-300">+381 11 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-teal-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-gray-300">info@osiguranje.rs</p>
                    <p className="text-gray-300">podrska@osiguranje.rs</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-teal-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Adresa</h4>
                    <p className="text-gray-300">
                      Bulevar Kralja Aleksandra 12
                      <br />
                      11000 Beograd, Srbija
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-5 h-5 text-teal-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Radno Vreme</h4>
                    <p className="text-gray-300">
                      Ponedeljak - Petak: 9:00 - 17:00
                      <br />
                      Subota: 9:00 - 13:00
                      <br />
                      Nedelja: Zatvoreno
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-blue-800">
                <h4 className="text-white font-medium mb-3">Pratite Nas</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-teal-300 transition duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-teal-300 transition duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-teal-300 transition duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-teal-300 transition duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
