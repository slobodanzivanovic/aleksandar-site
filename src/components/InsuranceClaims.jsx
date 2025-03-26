import { FileCheck, Truck, Wrench, Car } from "lucide-react";

export const InsuranceClaims = () => {
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
            d="M-450 400C0 350 300 0 1650 200"
            stroke="#293B62"
            strokeWidth="300"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-4">
            Stručni Tim za Maksimalnu Naknadu
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Naš tim advokata, pravnika, veštaka i procenitelja pruža kompletnu
            podršku u procesu naknade štete, od procene do isplate.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 md:-inset-6 rounded-3xl bg-orange-500 opacity-50"></div>
              <div className="rounded-3xl overflow-hidden relative z-10">
                <img
                  src="/21027867_web1_200325-SAA-historical-photo-crash-uncropped.jpg"
                  alt="Car accident scene"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-white">
            <div className="bg-orange-500 rounded-3xl p-8">
              <h3 className="text-3xl font-light mb-6 text-center">
                Želite Maksimalnu naplatu štete?
              </h3>
              <p className="text-white mb-6 text-center">
                Naša svrha je da Vam pružimo kompletnu podršku u što kraćem
                roku.
              </p>

              <p className="mb-4">
                Ako ste vi ili neko koga poznajete doživeli saobraćajnu nezgodu,
                imali štetu na vozilu ili objektu, pretrpeli povredu na radnom
                mestu, ili bilo koju drugu vrstu štete, mi smo tu da vam
                pomognemo.
              </p>

              <p className="mb-8">
                Naš stručni tim advokata, pravnika, veštaka i procenitelja je
                spreman da obezbedi maksimalnu naknadu za vašu štetu kroz sve
                faze postupka.
              </p>

              <div className="flex justify-center">
                <button className="py-3 px-10 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition duration-300">
                  Pozovite
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-12 mb-20">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 md:-inset-6 rounded-3xl bg-red-600 opacity-50"></div>
              <div className="rounded-3xl overflow-hidden relative z-10">
                <img
                  src="/21027867_web1_200325-SAA-historical-photo-crash-uncropped.jpg"
                  alt="Financial planning and compensation"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-white">
            <div className="bg-red-600 rounded-3xl p-8">
              <h3 className="text-3xl font-light mb-6 text-center">
                Šta treba da znate:
              </h3>

              <p className="mb-4 text-center">
                Počinjemo raditi sa vama bez početnih troškova.
              </p>

              <p className="mb-8 text-center">
                Naša naknada se plaća tek nakon što šteta bude isplaćena na vaš
                tekući račun, pružajući vam dodatnu sigurnost tokom celog
                procesa. Vaše zadovoljstvo i uspešna isplata su naši glavni
                ciljevi.
              </p>

              <div className="flex justify-center">
                <button className="py-3 px-10 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition duration-300">
                  Pozovite
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-light mb-12 text-center text-white">
            Naše dodatne usluge
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-900 bg-opacity-60 rounded-3xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-6 h-6 text-teal-300" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">
                Transport Vozila
              </h3>
              <p className="text-gray-300">
                Usluge šlep službe za oštećena i neispravna vozila na celoj
                teritoriji Srbije, sa brzim izlaskom na teren.
              </p>
            </div>

            <div className="bg-blue-900 bg-opacity-60 rounded-3xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-6 h-6 text-teal-300" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">
                Servis Vozila
              </h3>
              <p className="text-gray-300">
                Profesionalna popravka oštećenih vozila u našem servisu sa
                iskusnim majstorima i garantovanim delovima.
              </p>
            </div>

            <div className="bg-blue-900 bg-opacity-60 rounded-3xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-6 h-6 text-teal-300" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">
                Rent-a-Car
              </h3>
              <p className="text-gray-300">
                Usluge iznajmljivanja vozila tokom perioda popravke vašeg
                automobila, po povoljnim uslovima.
              </p>
            </div>

            <div className="bg-blue-900 bg-opacity-60 rounded-3xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-6 h-6 text-teal-300" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">
                Otkup Vozila
              </h3>
              <p className="text-gray-300">
                Otkup vozila koja nisu u voznom stanju po fer cenama, uz
                kompletan transport i potrebnu dokumentaciju.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-900 bg-opacity-40 rounded-3xl p-8 text-white text-center">
          <h2 className="text-3xl font-light mb-4">
            Ostvarite svoja prava na naknadu štete
          </h2>
          <p className="mb-8 max-w-3xl mx-auto text-gray-300">
            Nemojte da čekate. Što pre počnemo sa radom na vašem slučaju, to su
            veće šanse za maksimalnu naknadu. Naš tim je tu da vam pomogne kroz
            ceo proces, bez ikakvih početnih troškova.
          </p>
          <button className="py-3 px-10 bg-teal-300 hover:bg-teal-400 text-gray-900 font-medium rounded-full transition duration-300">
            Besplatna konsultacija
          </button>
        </div>
      </div>
    </div>
  );
};
