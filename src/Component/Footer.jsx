import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

import logo from "../Asset/Company_Logo.png";

/* -------- QUICK LINKS -------- */

const quickLinks = [
  { label: "Services", path: "/service" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/insights" },
  { label: "Contact", path: "/contact" }
];

/* -------- SERVICES -------- */

const services = [
  "Website Infrastructure",
  "Performance Engineering",
  "Web Automation Systems",
  "Conversion Optimization",
  "Web Security",
  "Enterprise Web Solutions"
];

/* -------- ANIMATION -------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export default function Footer() {

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    console.log("Newsletter:", email);
    setEmail("");
  };

  return (

    <footer className="relative bg-gradient-to-b from-[#0a0a1a] via-[#0f0f23] to-[#070711] text-gray-300 pt-20 pb-10">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-transparent to-blue-500/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ================= GRID ================= */}

        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >

          {/* BRAND */}

          <motion.div variants={fadeUp}>

            <img src={logo} alt="Poeage Logo" className="h-10 mb-4" />

            <p className="text-sm text-gray-400 leading-relaxed">
              Poeage Web Services delivers high-performance web
              infrastructure, automation systems, and enterprise-grade
              digital solutions that help businesses scale online.
            </p>

            {/* SOCIAL */}

            <div className="flex gap-4 mt-6">

              {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (

                <Link
                  key={i}
                  to="#"
                  className="p-2 rounded-md bg-white/5 border border-white/10 hover:bg-purple-600 transition"
                >
                  <Icon size={18} />
                </Link>

              ))}

            </div>

          </motion.div>

          {/* QUICK LINKS */}

          <motion.div variants={fadeUp}>

            <h3 className="text-white font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">

              {quickLinks.map((link) => (

                <li key={link.path}>

                  <Link
                    to={link.path}
                    className="hover:text-purple-400 transition"
                  >
                    {link.label}
                  </Link>

                </li>

              ))}

            </ul>

          </motion.div>

          {/* SERVICES */}

          <motion.div variants={fadeUp}>

            <h3 className="text-white font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">

              {services.map((service, i) => (
                <li key={i} className="hover:text-purple-400 transition">
                  {service}
                </li>
              ))}

            </ul>

          </motion.div>

          {/* CONTACT + NEWSLETTER */}

          <motion.div variants={fadeUp}>

            <h3 className="text-white font-semibold mb-5">
              Contact
            </h3>

            <ul className="space-y-4 text-sm text-gray-400 mb-6">

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-purple-400" />
                +91 98765 43210
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-purple-400" />
                contact@poeage.com
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-purple-400 mt-0.5" />
                Tamil Nadu, India
              </li>

            </ul>

            {/* NEWSLETTER */}

            <h4 className="text-white font-semibold mb-3">
              Newsletter
            </h4>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-[#05050c] border border-white/10 text-sm focus:outline-none focus:border-purple-500"
              />

              <button
                type="submit"
                className="w-full py-2 rounded-md text-white text-sm font-medium
                bg-gradient-to-r from-purple-600 to-indigo-600
                hover:from-purple-500 hover:to-indigo-500 transition"
              >
                Subscribe
              </button>

              <p className="text-xs text-gray-500">
                We respect your privacy. No spam.
              </p>

            </form>

          </motion.div>

        </motion.div>

        {/* DIVIDER */}

        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Poeage Web Services. All rights reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0">

            <Link to="/privacy" className="hover:text-purple-400">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-purple-400">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>

  );
}