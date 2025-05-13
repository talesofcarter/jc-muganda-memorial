import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/variants";
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_omtt9wa", "template_1wmy8er", form.current, {
        publicKey: "rlTmfhjKIcCRncuhH",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setIsSuccess(true);
          setIsSubmitting(false);
          setTimeout(() => setIsSuccess(false), 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

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
            <h3 className="text-xl font-semibold text-orange-300">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-orange-300 mt-1 mr-3 flex-shrink-0"
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
                  className="h-5 w-5 text-orange-300 mt-1 mr-3 flex-shrink-0"
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
                  className="h-5 w-5 text-orange-300 mt-1 mr-3 flex-shrink-0"
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
              <h4 className="text-lg font-medium text-orange-300 mb-3">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {[
                  {
                    name: "Facebook",
                    icon: FaFacebook,
                    href: "https://web.facebook.com/talezofcarter/",
                  },
                  {
                    name: "Github",
                    icon: FaGithub,
                    href: "https://github.com/talesofcarter",
                  },
                  {
                    name: "Instagram",
                    icon: FaInstagram,
                    href: "https://www.instagram.com/talesofcarter/",
                  },
                  {
                    name: "Whatsapp",
                    icon: FaWhatsapp,
                    href: "https://wa.me/254721869757",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-orange-200 transition-colors duration-200"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <div>
                      <social.icon className="w-5 h-5" />
                    </div>
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
            <h3 className="text-xl font-semibold text-orange-300">
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
            <h3 className="text-xl font-semibold text-orange-300">
              Send a Message
            </h3>
            <form onSubmit={sendEmail} ref={form} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="from_name"
                  value={name}
                  onChange={handleName}
                  placeholder="Full Name"
                  className="w-full px-4 py-2 bg-slate-700 text-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-slate-800 placeholder-slate-400"
                  required
                  aria-label="Full Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                  placeholder="Email Address"
                  className="w-full px-4 py-2 bg-slate-700 text-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-slate-800 placeholder-slate-400"
                  required
                  aria-label="Email Address"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={message}
                  onChange={handleMessage}
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
                      : "bg-orange-300 text-slate-900 hover:bg-orange-100"
                  }`}
                  aria-label="Send Message"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
              {isSuccess && (
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
              © {new Date().getFullYear()} Jean-Carol Muganda. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://kelvin-site.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 text-sm hover:text-orange-200 transition-colors duration-200"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </a>
              <a
                href="https://kelvin-site.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 text-sm hover:text-orange-200 transition-colors duration-200"
                aria-label="Terms of Service"
              >
                Terms of Service
              </a>
              <a
                href="https://kelvin-site.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 text-sm hover:text-orange-200 transition-colors duration-200"
                aria-label="Sitemap"
              >
                Sitemap
              </a>
            </div>
          </div>
          <p className="text-sm text-slate-200 mt-4">
            Coded and designed by{" "}
            <a
              href="https://kelvin-site.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-200 hover:text-orange-100 transition-colors duration-200"
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
