import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import "./App.css";

import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Loader from "./Component/Ui/Loader";

/* ---------- Lazy Pages ---------- */

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Pricing = lazy(() => import("./pages/Pricing"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Blogs = lazy(() => import("./pages/Blogs"));

function App() {
  return (
    <div className="App">

      <Header />

      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <Loader />
          </div>
        }
      >

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />

        </Routes>

      </Suspense>

      <Footer />

    </div>
  );
}

export default App;