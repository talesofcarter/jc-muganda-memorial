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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vehicula, nisl eu fermentum tincidunt, metus justo
                eleifend lorem, ut fringilla massa lorem in nulla. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Sed vitae justo at urna facilisis commodo.
                Integer ac nulla ac lorem dignissim malesuada. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Fusce non metus nec lorem tempus hendrerit.
              </p>
              <p className="text-base md:text-lg leading-7 text-slate-200 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vehicula, nisl eu fermentum tincidunt, metus justo
                eleifend lorem, ut fringilla massa lorem in nulla. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Sed vitae justo at urna facilisis commodo.
                Integer ac nulla ac lorem dignissim malesuada. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Fusce non metus nec lorem tempus hendrerit.
              </p>
              <p className="text-base md:text-lg leading-7 text-slate-200 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vehicula, nisl eu fermentum tincidunt, metus justo
                eleifend lorem, ut fringilla massa lorem in nulla. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Sed vitae justo at urna facilisis commodo.
                Integer ac nulla ac lorem dignissim malesuada. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Fusce non metus nec lorem tempus hendrerit.
              </p>
              <p className="text-base md:text-lg leading-7 text-slate-200  mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vehicula, nisl eu fermentum tincidunt, metus justo
                eleifend lorem, ut fringilla massa lorem in nulla. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Sed vitae justo at urna facilisis commodo.
                Integer ac nulla ac lorem dignissim malesuada. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Fusce non metus nec lorem tempus hendrerit.
              </p>
              <p className="text-base md:text-lg leading-7 text-slate-200  mt-4 italic">
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
