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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vehicula, nisl eu fermentum tincidunt, metus justo
                eleifend lorem, ut fringilla massa lorem in nulla. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Sed vitae justo at urna facilisis commodo.
                Integer ac nulla ac lorem dignissim malesuada. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Fusce non metus nec lorem tempus hendrerit.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-200 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vehicula, nisl eu fermentum tincidunt, metus justo
                eleifend lorem, ut fringilla massa lorem in nulla. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Sed vitae justo at urna facilisis commodo.
                Integer ac nulla ac lorem dignissim malesuada. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Fusce non metus nec lorem tempus hendrerit.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-200 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vehicula, nisl eu fermentum tincidunt, metus justo
                eleifend lorem, ut fringilla massa lorem in nulla. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Sed vitae justo at urna facilisis commodo.
                Integer ac nulla ac lorem dignissim malesuada. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Fusce non metus nec lorem tempus hendrerit.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-200 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vehicula, nisl eu fermentum tincidunt, metus justo
                eleifend lorem, ut fringilla massa lorem in nulla. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Sed vitae justo at urna facilisis commodo.
                Integer ac nulla ac lorem dignissim malesuada. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Fusce non metus nec lorem tempus hendrerit.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-200 mt-4 italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vehicula, nisl eu fermentum tincidunt, metus justo
                eleifend lorem, ut fringilla massa lorem in nulla. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Sed vitae justo at urna facilisis commodo.
                Integer ac nulla ac lorem dignissim malesuada. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Fusce non metus nec lorem tempus hendrerit.
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
