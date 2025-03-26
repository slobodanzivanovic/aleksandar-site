export const GoogleMap = () => {
  return (
    <div className="w-full bg-gray-900 relative overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H1440V300H0V0Z" fill="#1E2A3B" />
          <path
            d="M-300 100C150 150 450 300 1800 200"
            stroke="#293B62"
            strokeWidth="300"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-light text-white mb-2">Posetite Nas</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nalazimo se u centru Beograda, na Bulevaru Kralja Aleksandra
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute -inset-2 bg-blue-800 opacity-50 rounded-3xl"></div>
          <div className="relative z-10 rounded-3xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.9359968385793!2d20.471618776346654!3d44.802362978999694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a9f5c429205%3A0xf3e17a0f4b46feb0!2z0JHRg9C70LXQstCw0YAg0LrRgNCw0ZnQsCDQkNC70LXQutGB0LDQvdC00YDQsCwg0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1711481649826!5m2!1ssr!2srs"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map showing our office location"
            ></iframe>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">
            Ne možete nas pronaći? Pozovite nas i rado ćemo vam dati detaljnija
            uputstva.
          </p>
          <a
            href="tel:+38160318920"
            className="inline-block py-3 px-10 bg-teal-300 hover:bg-teal-400 text-gray-900 font-medium rounded-full transition duration-300"
          >
            Pozovite za uputstva
          </a>
        </div>
      </div>
    </div>
  );
};
