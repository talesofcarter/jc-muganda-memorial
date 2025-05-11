import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/variants";

const Footer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setFormData({ fullName: "", email: "", message: "" });
    setSubmitSuccess(true);
    setIsSubmitting(false);

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-700 pt-16 min-h-screen pt-navbar">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <header className="pb-12 px-4  border-b border-slate-700">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col gap-3 md:text-left md:flex md:items-center md:justify-center">
              <div className="flex flex-col items-center">
                <h1 className="text-center text-4xl md:text-5xl font-bold text-orange-300 tracking-tight">
                  Let's Connect
                </h1>
                <div className="w-16 h-1 bg-orange-300 mt-3 mb-4 rounded-full md:mb-0 mx-auto md:mx-0"></div>
              </div>
              <p className="text-base text-center md:text-lg text-slate-300 max-w-xl mt-4 md:mt-0">
                We create meaningful digital memorials to honor your loved ones.
                Reach out to learn how we can preserve their legacy.
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-orange-200">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-orange-200 mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-slate-200">kelvinjuma99@gmail.com</span>
              </div>
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-orange-200 mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-slate-200">+254-721869757</span>
              </div>
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-orange-200 mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-slate-200">
                  Boya Nursing Home
                  <br />
                  Kisumu County, Ahero, Kenya
                </span>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-medium text-orange-200 mb-3">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {[
                  {
                    name: "Facebook",
                    icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                    href: "#",
                  },
                  {
                    name: "Twitter",
                    icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
                    href: "#",
                  },
                  {
                    name: "Instagram",
                    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
                    href: "#",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-slate-200 hover:text-orange-200 transition-colors duration-200 focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-slate-800"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-orange-200">
              Quick Links
            </h3>
            <nav className="grid grid-cols-1 gap-3">
              {[
                { name: "Obituary", path: "/obituary" },
                { name: "Tributes", path: "/tributes" },
                { name: "Gallery", path: "/gallery" },
                { name: "Memorial Wall", path: "/memorial" },
              ].map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-slate-200 hover:text-orange-200 transition-colors duration-200 ${
                      isActive ? "text-orange-500 underline" : ""
                    }`
                  }
                  aria-label={link.name}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-orange-200">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-slate-700 text-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-slate-800 placeholder-slate-400"
                  required
                  aria-label="Full Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-2 bg-slate-700 text-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-slate-800 placeholder-slate-400"
                  required
                  aria-label="Email Address"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 bg-slate-700 text-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-slate-800 placeholder-slate-400"
                  required
                  aria-label="Message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-slate-800 ${
                    isSubmitting
                      ? "bg-orange-300 text-slate-900 cursor-not-allowed"
                      : "bg-orange-200 text-slate-900 hover:bg-orange-100"
                  }`}
                  aria-label="Send Message"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
              {submitSuccess && (
                <div className="p-3 bg-green-500/20 text-green-300 rounded-lg text-center">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-slate-700 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-200 text-sm">
              © {new Date().getFullYear()} Memorial Tributes. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <NavLink
                to="/privacy"
                className="text-slate-200 text-sm hover:text-orange-200 transition-colors duration-200 focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-slate-800"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </NavLink>
              <NavLink
                to="/terms"
                className="text-slate-200 text-sm hover:text-orange-200 transition-colors duration-200 focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-slate-800"
                aria-label="Terms of Service"
              >
                Terms of Service
              </NavLink>
              <NavLink
                to="/sitemap"
                className="text-slate-200 text-sm hover:text-orange-200 transition-colors duration-200 focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-slate-800"
                aria-label="Sitemap"
              >
                Sitemap
              </NavLink>
            </div>
          </div>
          <p className="text-sm text-slate-200 mt-4">
            Coded and designed by{" "}
            <a
              href="https://kelvinjuma.com"
              className="text-orange-200 hover:text-orange-100 transition-colors duration-200 focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-slate-800"
              aria-label="Kelvin Juma's website"
            >
              Kelvin Juma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
