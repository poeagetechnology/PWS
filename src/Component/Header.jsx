import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "../Asset/Company_Logo.png";
import Button from "../Component/Ui/Button";

/* ---------------- MENU ---------------- */

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blogs", path: "/blogs" },
  { name: "Pricing", path: "/pricing" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" }
];

const servicesMenu = [
  { name: "Website Infrastructure", path: "/services/infrastructure" },
  { name: "Performance Engineering", path: "/services/performance" },
  { name: "Web Automation", path: "/services/automation" },
  { name: "Conversion Optimization", path: "/services/conversion" },
  { name: "Web Security", path: "/services/security" },
  { name: "Enterprise Solutions", path: "/services/enterprise" }
];

/* ---------------- NAV LINK ---------------- */

function NavLinkItem({ item, active }) {

  return (
    <Link
      to={item.path}
      className={`relative group transition ${
        active ? "text-purple-600" : "text-gray-700"
      }`}
    >
      {item.name}

      <span
        className={`absolute left-0 -bottom-2 h-0.5 bg-purple-600 transition-all ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

/* ---------------- SERVICES DROPDOWN ---------------- */

function ServicesDropdown() {

  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >

      <span className="cursor-pointer text-gray-700 hover:text-purple-600">
        Services
      </span>

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="absolute top-8 left-0 w-64 bg-white border border-gray-200 shadow-xl rounded-lg p-4 space-y-3"
          >

            {servicesMenu.map((item) => (

              <Link
                key={item.name}
                to={item.path}
                className="block text-gray-700 hover:text-purple-600"
              >
                {item.name}
              </Link>

            ))}

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}

/* ---------------- MOBILE DRAWER ---------------- */

function MobileDrawer({ open, setOpen }) {

  return (

    <AnimatePresence>

      {open && (

        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 md:hidden"
            onClick={() => setOpen(false)}
          />

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className="fixed top-0 left-0 h-full w-72 bg-white z-50 border-r flex flex-col"
          >

            <div className="flex justify-between items-center px-6 py-4 border-b">

              <img src={Logo} alt="Poeage Logo" className="h-10" />

              <button onClick={() => setOpen(false)}>✕</button>

            </div>

            <nav className="flex flex-col px-6 py-6 space-y-5 text-gray-800">

              {menuItems.map((item) => (

                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="text-lg"
                >
                  {item.name}
                </Link>

              ))}

              <Button fullWidth>
                Get Proposal
              </Button>

            </nav>

          </motion.div>
        </>
      )}

    </AnimatePresence>

  );
}

/* ---------------- HEADER ---------------- */

export default function Header() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <header
      className={`fixed top-0 w-full z-50 transition ${
        scrolled
          ? "bg-white shadow-md border-b"
          : "bg-white"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}

        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Poeage Logo" className="h-11" />
        </Link>

        {/* DESKTOP MENU */}

        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">

          {menuItems.map((item) => {

            if (item.name === "Services") {
              return <ServicesDropdown key={item.name} />;
            }

            return (
              <NavLinkItem
                key={item.name}
                item={item}
                active={location.pathname === item.path}
              />
            );

          })}

        </nav>

        {/* CTA */}

        <div className="hidden md:flex items-center gap-4">

          <Link
            to="/contact"
            className="text-gray-600 hover:text-purple-600"
          >
            Talk to Sales
          </Link>

         <div className="hidden md:flex items-center gap-4">

  <Link
    to="/contact"
    className="text-gray-600 hover:text-purple-600"
  >
    Talk to Sales
  </Link>

  <Link to="/contact">
    <Button size="sm">
      Get Proposal
    </Button>
  </Link>

</div>
        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >

          <motion.div
            animate={open ? "open" : "closed"}
            className="space-y-1"
          >

            <motion.span
              className="block w-6 h-0.5 bg-gray-800"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 }
              }}
            />

            <motion.span
              className="block w-6 h-0.5 bg-gray-800"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
            />

            <motion.span
              className="block w-6 h-0.5 bg-gray-800"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 }
              }}
            />

          </motion.div>

        </button>

      </div>

      <MobileDrawer open={open} setOpen={setOpen} />

    </header>

  );
}