export const AboutUs = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 relative overflow-hidden">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-4">
            O našoj kompaniji
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Posvećeni smo pružanju najboljih rešenja osiguranja sa pristupom na
            prvom mestu klijenta i posvećenošću izvrsnosti u svakoj interakciji.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 md:-inset-6 rounded-3xl bg-blue-800 opacity-50"></div>
              <div className="rounded-3xl overflow-hidden relative z-10 aspect-video">
                <img
                  src="/Car-Crash-18.jpg"
                  alt="TODO"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-white">
            <h3 className="text-3xl font-light mb-6">Naša priča</h3>
            <p className="text-gray-300 mb-6">
              Osnovana 1998. godine, naša kompanija je započela sa jednostavnom
              misijom: da obezbedi poštena, transparentna rešenja osiguranja
              prilagođena jedinstvenim potrebama svakog klijenta. Tokom godina
              smo od male lokalne agencije prerasli u ugledno ime u industriji,
              ali naše osnovne vrednosti ostaju nepromenjene.
            </p>
            <p className="text-gray-300 mb-6">
              Verujemo u izgradnju dugoročnih odnosa sa našim klijentima,
              razumevanje njihovih potreba i pružanje personalizovane usluge
              koja prevazilazi očekivanja. Naš tim iskusnih profesionalaca
              posvećen je pronalaženju pravog pokrića po pravoj ceni.
            </p>
            <p className="text-gray-300 mb-8">
              Bez obzira da li želite da zaštitite svoju porodicu, dom, posao
              ili investicije, mi smo tu da vas vodimo kroz proces i osiguramo
              da imate pokrivenost koja vam daje mir.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-blue-900 bg-opacity-40 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-light text-white mb-8 text-center">
            Naše osnovne vrednosti
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 text-2xl font-bold">01</span>
              </div>
              <h4 className="text-xl font-medium text-white mb-3">
                Integritet
              </h4>
              <p className="text-gray-300">
                Verujemo u potpunu transparentnost i poštenje u svakoj
                interakciji sa našim klijentima.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 text-2xl font-bold">02</span>
              </div>
              <h4 className="text-xl font-medium text-white mb-3">Stručnost</h4>
              <p className="text-gray-300">
                Naš tim ostaje u toku sa znanjem o industriji kako bi pružio
                najbolja uputstva i rešenja.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 text-2xl font-bold">03</span>
              </div>
              <h4 className="text-xl font-medium text-white mb-3">
                Prvo klijent
              </h4>
              <p className="text-gray-300">
                Dajemo prioritet razumevanju jedinstvenih potreba svakog
                klijenta i pružanju personalizovane usluge.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 bg-blue-900 bg-opacity-40 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-light text-white mb-8 text-center">
            Naš Stručni Tim
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 text-2xl font-bold">01</span>
              </div>
              <h4 className="text-xl font-medium text-white mb-3">Advokati</h4>
              <p className="text-gray-300">
                Pružaju pravnu podršku i zastupanje tokom celog procesa naknade
                štete.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 text-2xl font-bold">02</span>
              </div>
              <h4 className="text-xl font-medium text-white mb-3">Pravnici</h4>
              <p className="text-gray-300">
                Obezbeđuju pravnu dokumentaciju i savete za efikasno
                ostvarivanje prava.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 text-2xl font-bold">03</span>
              </div>
              <h4 className="text-xl font-medium text-white mb-3">Veštaci</h4>
              <p className="text-gray-300">
                Stručno procenjuju štetu i izrađuju nalaze za sudske i vansudske
                postupke.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 text-2xl font-bold">04</span>
              </div>
              <h4 className="text-xl font-medium text-white mb-3">
                Procenitelji
              </h4>
              <p className="text-gray-300">
                Vrše detaljnu procenu štete na vozilima i objektima za
                maksimalnu naknadu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
