import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import "./App.css";

import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Loader from "./Component/Ui/Loader";

/* ---------- Lazy Pages ---------- */

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const Blogs = lazy(() => import("./pages/Blogs"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

const Portfolio = lazy(() => import("./pages/Portfolio"));
const Pricing = lazy(() => import("./pages/Pricing"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

const CaseStudies = lazy(() => import("./pages/CaseStudies"));

const Privacy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));

/* ---------- Lazy Service Pages ---------- */

const ConversionOptimization = lazy(() =>
  import("./pages/services/ConversionOptimization")
);

const EnterpriseSolutions = lazy(() =>
  import("./pages/services/EnterpriseSolution")
);

const PerformanceEngineering = lazy(() =>
  import("./pages/services/PerformanceEngineering")
);

const WebAutomation = lazy(() =>
  import("./pages/services/WebAutomation")
);

const WebSecurity = lazy(() =>
  import("./pages/services/WebSecurity")
);

const WebsiteInfrastructure = lazy(() =>
  import("./pages/services/WebsiteInfrastructure")
);

function App() {
  return (
    <div className="App">

      <Header />

      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <Loader />
          </div>
        }
      >

        <Routes>

          {/* Main Pages */}

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogPost />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route path="/case-study/:id" element={<CaseStudies />} />

          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<TermsAndConditions />} />

          {/* Service Pages */}

          <Route path="/services/conversion" element={<ConversionOptimization />} />
          <Route path="/services/enterprise" element={<EnterpriseSolutions />} />
          <Route path="/services/performance" element={<PerformanceEngineering />} />
          <Route path="/services/automation" element={<WebAutomation />} />
          <Route path="/services/security" element={<WebSecurity />} />
          <Route path="/services/infrastructure" element={<WebsiteInfrastructure />} />

        </Routes>

      </Suspense>

      <Footer />

    </div>
  );
}

export default App;