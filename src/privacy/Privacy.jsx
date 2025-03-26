import { Shield, Lock, Eye, FileText, Server, UserCheck } from "lucide-react";

export const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-gray-900 relative overflow-hidden">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        {/* Header section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light text-white mb-6">
            Politika Privatnosti
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Vaša privatnost nam je važna. Ova politika privatnosti objašnjava
            kako prikupljamo, koristimo, otkrivamo, čuvamo i štitimo vaše
            podatke.
          </p>
        </div>

        {/* Last updated */}
        <div className="bg-blue-900 bg-opacity-50 rounded-3xl p-6 mb-12 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-300">Poslednje ažuriranje: 26.03.2025.</p>
            <p className="text-gray-300 mt-2">
              Ukoliko imate pitanja u vezi sa našom politikom privatnosti,
              molimo vas da nas kontaktirate na{" "}
              <a
                href="mailto:privacy@osiguranje.rs"
                className="text-teal-300 hover:underline"
              >
                privacy@osiguranje.rs
              </a>
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="bg-blue-900 bg-opacity-40 rounded-3xl p-8 mb-12">
          <div className="prose prose-lg max-w-none text-gray-300">
            <h2 className="text-3xl font-light text-white mb-6">
              1. Prikupljanje Informacija
            </h2>

            <div className="flex items-start mb-6">
              <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <UserCheck className="w-5 h-5 text-teal-300" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">
                  Lični Podaci
                </h3>
                <p>Možemo prikupljati sledeće lične podatke:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Ime i prezime</li>
                  <li>Email adresa</li>
                  <li>Broj telefona</li>
                  <li>Adresa stanovanja</li>
                  <li>Datum rođenja</li>
                  <li>Jedinstveni matični broj građana (JMBG)</li>
                  <li>Podaci o vozilu i osiguranju</li>
                  <li>Podaci o šteti i odštetnim zahtevima</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Eye className="w-5 h-5 text-teal-300" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">
                  Podaci o Korišćenju
                </h3>
                <p>
                  Automatski prikupljamo određene informacije kada posetite naš
                  website, uključujući:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>IP adresa</li>
                  <li>Tip pretraživača</li>
                  <li>Operativni sistem</li>
                  <li>Vreme i datum posete</li>
                  <li>Stranice koje ste posetili</li>
                  <li>Trajanje posete</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-light text-white mb-6 mt-12">
              2. Kako Koristimo Vaše Informacije
            </h2>

            <p className="mb-6">
              Informacije koje prikupljamo koristimo za sledeće svrhe:
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                Pružanje i poboljšanje naših usluga osiguranja i naknade štete
              </li>
              <li>Obrada vaših zahteva za naknadu štete</li>
              <li>
                Komunikacija sa vama o vašem osiguranju ili odštetnim zahtevima
              </li>
              <li>Slanje obaveštenja o izmenama naših usluga</li>
              <li>
                Slanje promotivnih materijala i informacija o novim uslugama
                (samo uz vašu saglasnost)
              </li>
              <li>Ispunjavanje zakonskih obaveza</li>
              <li>Sprečavanje prevara i zloupotreba</li>
            </ul>

            <h2 className="text-3xl font-light text-white mb-6 mt-12">
              3. Čuvanje i Zaštita Podataka
            </h2>

            <div className="flex items-start mb-6">
              <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Lock className="w-5 h-5 text-teal-300" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">
                  Sigurnosne Mere
                </h3>
                <p>
                  Primenjujemo odgovarajuće tehničke i organizacione mere za
                  zaštitu vaših ličnih podataka od slučajnog ili nezakonitog
                  uništenja, gubitka, izmene, neovlašćenog otkrivanja ili
                  pristupa. Ovo uključuje enkripciju podataka, kontrolu pristupa
                  i redovne sigurnosne provere.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Server className="w-5 h-5 text-teal-300" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">
                  Period Čuvanja
                </h3>
                <p>
                  Vaše lične podatke čuvamo samo onoliko dugo koliko je potrebno
                  za svrhe navedene u ovoj politici privatnosti ili koliko je
                  potrebno za ispunjavanje naših zakonskih obaveza. Nakon isteka
                  ovog perioda, vaši podaci će biti bezbedno izbrisani ili
                  anonimizirani.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-light text-white mb-6 mt-12">
              4. Deljenje Informacija
            </h2>

            <p className="mb-6">
              Ne prodajemo, ne iznajmljujemo i ne trgovamo vašim ličnim podacima
              trećim stranama. Međutim, možemo deliti vaše informacije sa:
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                Osiguravajućim društvima i reosiguravačima radi procene rizika i
                obrade odštetnih zahteva
              </li>
              <li>
                Pružaocima usluga koji nam pomažu u poslovanju (IT podrška,
                administracija, pravne usluge)
              </li>
              <li>Nadležnim organima kada je to zakonski obavezno</li>
              <li>Poslovnim partnerima uz vašu prethodnu saglasnost</li>
            </ul>

            <p className="mt-6">
              Svi naši partneri i pružaoci usluga su obavezni da poštuju
              poverljivost i sigurnost vaših podataka.
            </p>

            <h2 className="text-3xl font-light text-white mb-6 mt-12">
              5. Vaša Prava
            </h2>

            <div className="flex items-start mb-6">
              <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Shield className="w-5 h-5 text-teal-300" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">
                  Prava u vezi sa ličnim podacima
                </h3>
                <p className="mb-4">
                  U skladu sa važećim zakonima o zaštiti podataka, imate sledeća
                  prava:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pravo na pristup vašim ličnim podacima</li>
                  <li>Pravo na ispravku netačnih podataka</li>
                  <li>Pravo na brisanje podataka ("pravo na zaborav")</li>
                  <li>Pravo na ograničenje obrade</li>
                  <li>Pravo na prenosivost podataka</li>
                  <li>Pravo na prigovor na obradu</li>
                  <li>Pravo na povlačenje saglasnosti</li>
                </ul>
              </div>
            </div>

            <p className="mb-6">
              Za ostvarivanje ovih prava, molimo vas da nas kontaktirate putem
              podataka navedenih u odeljku "Kontaktirajte Nas".
            </p>

            <h2 className="text-3xl font-light text-white mb-6 mt-12">
              6. Kolačići
            </h2>

            <div className="flex items-start mb-6">
              <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <FileText className="w-5 h-5 text-teal-300" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">
                  Upotreba Kolačića
                </h3>
                <p>
                  Naš website koristi kolačiće kako bi poboljšao vaše iskustvo
                  pretraživanja. Kolačići su male tekstualne datoteke koje se
                  čuvaju na vašem uređaju i pomažu nam da analiziramo kako
                  koristite naš website.
                </p>
                <p className="mt-4">
                  Možete postaviti svoj pretraživač da odbije sve ili neke
                  kolačiće, ili da vas obavesti kada website postavlja kolačiće.
                  Ako onemogućite kolačiće, neki delovi našeg website-a možda
                  neće funkcionisati pravilno.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-light text-white mb-6 mt-12">
              7. Izmene Politike Privatnosti
            </h2>

            <p className="mb-6">
              Možemo povremeno ažurirati našu politiku privatnosti. Sve izmene
              će biti objavljene na ovoj stranici sa novim datumom ažuriranja.
              Preporučujemo da povremeno pregledate ovu politiku privatnosti
              kako biste bili informisani o tome kako štitimo vaše podatke.
            </p>

            <h2 className="text-3xl font-light text-white mb-6 mt-12">
              8. Kontaktirajte Nas
            </h2>

            <p className="mb-6">
              Ako imate pitanja ili nedoumice u vezi sa našom politikom
              privatnosti ili načinom na koji obrađujemo vaše podatke, molimo
              vas da nas kontaktirate:
            </p>

            <div className="bg-blue-900 bg-opacity-70 p-6 rounded-xl mt-4">
              <p className="mb-2">
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:privacy@osiguranje.rs"
                  className="text-teal-300 hover:underline"
                >
                  privacy@osiguranje.rs
                </a>
              </p>
              <p className="mb-2">
                <strong className="text-white">Telefon:</strong>{" "}
                <a
                  href="tel:+38160318920"
                  className="text-teal-300 hover:underline"
                >
                  +381 60 318 9200
                </a>
              </p>
              <p>
                <strong className="text-white">Adresa:</strong>{" "}
                <span className="text-gray-300">
                  Bulevar Kralja Aleksandra 12, 11000 Beograd, Srbija
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <a
            href="#"
            className="inline-block py-3 px-10 bg-teal-300 hover:bg-teal-400 text-gray-900 font-medium rounded-full transition duration-300"
          >
            Nazad na Početnu
          </a>
        </div>
      </div>
    </div>
  );
};
