import portrait from "/images/jean-23.jpeg";
import { motion } from "framer-motion";
import { fadeIn, fadeZoom } from "../animations/variants";

const Obituary = () => {
  return (
    <div className="bg-slate-900 min-h-screen pt-16">
      {/* Header Section */}
      <header className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-orange-300 tracking-tight">
              Obituary
            </h1>
            <div className="w-16 h-1 bg-orange-300 mt-3 mb-4 rounded-full mx-auto"></div>
            <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-7">
              Celebrating the Life of Jean-Carol Muganda
            </p>
          </div>

          <nav className="mt-8 flex flex-wrap justify-center gap-6">
            <a
              href="/memorial"
              className="text-orange-300 hover:text-orange-100 font-medium transition-colors focus:ring-offset-slate-900"
            >
              Memorial Wall
            </a>
            <a
              href="/tributes"
              className="text-orange-300 hover:text-orange-100 font-medium transition-colors focus:ring-offset-slate-900"
            >
              Tributes
            </a>
            <a
              href="/gallery"
              className="text-orange-300 hover:text-orange-100 font-medium transition-colors focus:ring-offset-slate-900"
            >
              Gallery
            </a>
          </nav>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-slate-800 rounded-lg shadow-lg p-6 md:p-8 border-2 border-slate-700 transition-all duration-200 hover:shadow-xl">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Portrait */}
            <div className="md:w-1/3 flex-shrink-0">
              <div className="relative rounded-lg overflow-hidden shadow-lg border-2 border-slate-700">
                <img
                  src={portrait}
                  alt="Portrait of Jean-Carol Muganda"
                  className="w-full h-64 md:h-80 object-contain"
                  onError={(e) => (e.target.src = "/fallback-image.jpg")}
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="md:w-2/3">
              <p className="text-base md:text-lg leading-7 text-slate-200">
                Born on a Sunday, June 3, 1979, Jean was a radiant soul from the
                beginning, bubbly, gentle yet strong, humble yet wise beyond her
                years. She carried herself with an overt confidence and deep
                compassion, drawing people in with her larger-than-life demeanor
                and infectious warmth. From childhood, Jean known for her
                resilience, independence, and thoughtful spirit-traits that
                would remain ther hallmark throughout life. Jean grew up in
                nurturing environment that cultivated her love for learning,
                service, and excellence. Her early years were filled with
                dreams, laughter, and the beginning signs of a life that would
                be both impactful and inspiring.
              </p>
              <p className="text-base md:text-lg leading-7 text-slate-200 mt-4">
                Jean was the beloved daughter of Mrs. Margaret Akinyi Ogonda and
                the Late Prof. Richard Timothy Ogonda Nyapuoch. God-daughter to
                Mary. Niece to Felix, George, Norbert, Fred, Prisca, Pamela,
                Everlyn. Anne, Bernadette, Collete, Vero, Maurice, Mary, Lucy,
                Celine, Sam Owino among others. She was a devoted mother to her
                young daughter, Maya Kinda, who was the light of her life and
                will carry her legacy to eternity. She was a cherished sister to
              </p>
              <p className="text-base md:text-lg leading-7 text-slate-200 mt-4"></p>
              <p className="text-base md:text-lg leading-7 text-slate-200  mt-4">
                Frank D. Ochieng, Mercy James, Deogratias Ogonda, the Late
                Bertha Diero, Molly Ogonda, Dolly Ogonda, and Mercy Ogonda.
                Sister in law to Prof. Lameck Diero, Dr. Dan Masiga, Dr. Laura
                Naliaka Ochieng, Justice Hellen Omondi, Pastor Mary Ogola, Mrs.
                Consolata Omondi, Mrs. Janet Mosi among others. Cousin to Dr.
                Omondi Ogada, Soldier Joshua Orayo, Pastor Shadrack Mosi, Nick,
                Erick, Beatrice, Christine, Quinter, George, Lilian, Jim, Dr.
                Rose Okello, Olgah, Marie, Anne Francisca, Ricky, Sam Ochieng,
                Steve, Lily, Isaac, Tom, Kelvin, Grace, Claire, Jeff, John,
                Francis, Regina, Immaculate, Paul, Sylvia, Prince, Kevin,
                Celine-Dion, among others. Jean’s deep love for her family was
                evident in everything she did, and her presence will be
                profoundly missed by all who knew and loved her.
              </p>
              <p className="text-base md:text-lg leading-7 text-slate-200  mt-4 italic">
                Jean’s passion for excellence and service was evident early in
                her academic journey. She started at Jack and Jill Kindergarten
                and went to boarding school as early as Class one at Lwak Girls
                Primary; something that led her to grow as an independent and
                dependable person. She moved from boarding and joined various
                primary schools viz Moi University in Eldoret; Maseno Girls
                Boarding and Maseno Mixed all which formed her academic
                foundation and discipline. Her secondary education took her to
                St Barnabas Girls High and Nangina Girls High Schools where she
                sat for her Kenya Certificate of Secondary Education. Both her
                primary and secondary life made her to grow not only
                intellectually, but also as a compassionate leader among her
                peers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-800 text-slate-200 text-center text-sm border-t border-slate-700">
        <p>In Loving Memory of Jean-Carol Muganda.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a
            href="/privacy"
            className="text-orange-300 hover:text-orange-100 font-medium transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/contact"
            className="text-orange-300 hover:text-orange-100 font-medium transition-colors"
          >
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Obituary;
