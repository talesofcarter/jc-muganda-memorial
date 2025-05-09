import React from "react";
import portrait from "/images/jean-23.jpeg";

const Obituary = () => {
  return (
    <section
      id="obituary"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-slate-800 text-slate-100 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-orange-300 tracking-tight">
            Obituary
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Celebrating the Life of Jean-Carol Muganda
          </p>
          <div className="w-24 h-1 bg-orange-300 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Obituary Content */}
        <div className="bg-slate-800/70 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700/30 transition-all">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Portrait */}
            <div className="md:w-1/3 flex-shrink-0">
              <img
                src={portrait}
                alt="Portrait of Jean-Carol Muganda"
                className="w-full h-64 md:h-80 object-cover rounded-xl border border-slate-700/50 transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* Text Content */}
            <div className="md:w-2/3">
              <p className="text-base md:text-lg leading-relaxed text-slate-200">
                <span className="font-semibold">Jean-Carol Muganda</span>, a
                cherished wife, mother, grandmother, and pillar of her
                community, passed away peacefully on March 25, 2023, at the age
                of 73. Born on March 10, 1950, Jean was raised with a deep
                commitment to family and community, excelling in academics and
                athletics during her high school years. She went on to earn a
                Bachelor's degree in Business Administration, laying the
                foundation for a remarkable career.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-200 mt-4">
                In 1975, Jean married her beloved partner, George, embarking on
                a 48-year journey of love and devotion. Together, they raised
                two children, Emily and Michael, and delighted in their roles as
                grandparents to Grace, Ethan, and Lily. Jean's warmth and wisdom
                touched every aspect of her family life.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-200 mt-4">
                Jean's professional career in finance was distinguished by her
                integrity and dedication to mentoring young professionals.
                Beyond her career, she poured her heart into charitable causes,
                leaving an indelible mark on her community. An avid lover of the
                outdoors, Jean cherished weekends spent camping, fishing, and
                hiking, passing her passion for nature to her family.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-200 mt-4">
                Jean is survived by her loving spouse, George, her children,
                Emily and Michael, her grandchildren, Grace, Ethan, and Lily,
                and her siblings, Robert Jr. and Susan. A memorial service will
                be held on October 2, 2023, at 2:00 PM at St. Mary's Community
                Church. In lieu of flowers, the family kindly requests donations
                to the{" "}
                <a href="#" className="text-orange-300 hover:underline">
                  Jean-Carol Muganda Memorial Scholarship Fund
                </a>
                , which supports educational opportunities for underprivileged
                youth.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-200 mt-4 italic">
                Jean's legacy endures through the lives she touched, the values
                she championed, and the love she so generously shared. She will
                be profoundly missed but forever remembered.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-orange-400/20 filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-56 h-56 rounded-full bg-blue-400/20 filter blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Obituary;
