import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Server,
  Zap,
  Cpu,
  TrendingUp,
  Shield,
  Building,
  Award,
  Headphones,
  CheckCircle,
  Star
} from "lucide-react";

import Button from "../Component/Ui/Button";
import Card from "../Component/Ui/Card";
import Badge from "../Component/Ui/Badge";
import homevideo from "../Asset/Homevideo.mp4";

/* ---------------- ANIMATIONS ---------------- */

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

/* ---------------- DATA ---------------- */

const services = [
  {
    icon: <Server className="text-purple-600" />,
    title: "Website Infrastructure",
    desc: "Scalable hosting solutions.",
    details: "Cloud hosting, scaling architecture and infrastructure automation."
  },
  {
    icon: <Zap className="text-yellow-500" />,
    title: "Performance Engineering",
    desc: "Speed optimization.",
    details: "Improve Core Web Vitals and performance."
  },
  {
    icon: <Cpu className="text-indigo-600" />,
    title: "Web Automation",
    desc: "Automated workflows.",
    details: "Automation systems connecting APIs."
  },
  {
    icon: <TrendingUp className="text-green-600" />,
    title: "Conversion Optimization",
    desc: "Turn visitors into customers.",
    details: "Landing page optimization and CRO."
  },
  {
    icon: <Shield className="text-red-500" />,
    title: "Web Security",
    desc: "Enterprise-grade protection.",
    details: "Monitoring and advanced security."
  },
  {
    icon: <Building className="text-blue-600" />,
    title: "Enterprise Solutions",
    desc: "Custom business platforms.",
    details: "Enterprise-scale web systems."
  }
];

const features = [
  {
    icon: <Award className="text-purple-600" />,
    title: "Technical Expertise",
    desc: "Elite engineers building scalable systems."
  },
  {
    icon: <Cpu className="text-indigo-600" />,
    title: "Custom Solutions",
    desc: "Everything built specifically for your business."
  },
  {
    icon: <TrendingUp className="text-green-600" />,
    title: "Results Driven",
    desc: "Focused on ROI and measurable growth."
  },
  {
    icon: <Headphones className="text-blue-600" />,
    title: "24/7 Support",
    desc: "Dedicated support whenever needed."
  },
  {
    icon: <CheckCircle className="text-teal-600" />,
    title: "Proven Track Record",
    desc: "Trusted by businesses worldwide."
  },
  {
    icon: <Shield className="text-red-600" />,
    title: "Transparent Pricing",
    desc: "Clear pricing without hidden costs."
  }
];

const testimonials = [
  {
    quote: "Our website performance doubled.",
    name: "John Smith",
    role: "CEO, TechCorp"
  },
  {
    quote: "Professional team with strong expertise.",
    name: "Sarah Johnson",
    role: "Marketing Director"
  },
  {
    quote: "Best optimization partner we've worked with.",
    name: "Michael Brown",
    role: "Founder"
  }
];

const stats = [
  { number: 8, label: "Years Experience" },
  { number: 120, label: "Projects Completed" },
  { number: 50, label: "Clients Served" },
  { number: 15, label: "Awards Won" }
];

const logos = ["Google", "Stripe", "Notion", "Shopify", "HubSpot", "Slack"];

/* ---------------- PAGE ---------------- */

export default function Home() {

  const [openService, setOpenService] = useState(null);

  return (

    <div className="bg-gradient-to-b from-white via-purple-50 to-white text-gray-900">

      {/* HERO */}

      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center text-center overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={homevideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl px-6 text-white">

          <Badge>Premium Web Services</Badge>

          <h1 className="text-xl  lg:text-4xl font-bold mt-6 leading-tight">
            Premium Web Services That Drive
            <span className="text-purple-400"> Real Business Growth</span>
          </h1>

          <p className="mt-5 text-gray-200 text-base md:text-lg max-w-xl mx-auto">
            We build and optimize websites that convert visitors into customers.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg">Start Free Consultation</Button>
          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="py-16 md:py-24">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 text-center">

          {stats.map((stat, i) => (

            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow"
            >

              <h3 className="text-xl lg:text-3xl font-bold text-purple-600">
                <CountUp end={stat.number} duration={2} />+
              </h3>

              <p className="text-gray-600 mt-2 text-sm md:text-base">
                {stat.label}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* SERVICES */}

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">

        <h2 className="text-xl lg:text-3xl font-bold text-center mb-14">
          Our Services
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >

          {services.map((service, i) => (

            <motion.div key={i} variants={fadeUp}>

              <Card hover>

                <div className="mb-4">{service.icon}</div>

                <h3 className="text-md font-semibold">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  {service.desc}
                </p>

                <Button
                  className="mt-4"
                  onClick={() =>
                    setOpenService(openService === i ? null : i)
                  }
                >
                  Learn More
                </Button>

                {openService === i && (
                  <p className="mt-3 text-gray-600 text-sm">
                    {service.details}
                  </p>
                )}

              </Card>

            </motion.div>

          ))}

        </motion.div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="py-16 md:py-24 bg-purple-50">

        <h2 className="text-xl lg:text-3xl font-bold text-center mb-14">
          Why Choose Poeage Web Services?
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">

          {features.map((feature, i) => (

            <Card key={i} hover>

              <div className="mb-4">{feature.icon}</div>

              <h3 className="font-semibold text-lg">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                {feature.desc}
              </p>

            </Card>

          ))}

        </div>

      </section>

      {/* SOCIAL PROOF */}

      <section className="py-16 md:py-24 text-center">

        <h2 className="text-xl lg:text-3xl font-bold text-center mb-14">
          Trusted by leading companies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto text-gray-500 font-medium">

          {logos.map((logo, i) => (
            <div key={i}>{logo}</div>
          ))}

        </div>

        <p className="mt-6 text-gray-600">
          50+ businesses trust us
        </p>

      </section>

      {/* TESTIMONIALS */}

      <section className="py-16 md:py-24 bg-purple-50">

        <h2 className="text-xl lg:text-3xl font-bold text-center mb-14">
          What Our Clients Say
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">

          {testimonials.map((t, i) => (

            <Card key={i} hover>

              <div className="flex mb-3">

                {[...Array(5)].map((_, s) => (
                  <Star
                    key={s}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}

              </div>

              <p className="italic text-gray-600">
                "{t.quote}"
              </p>

              <h4 className="mt-4 font-semibold">
                {t.name}
              </h4>

              <p className="text-sm text-gray-500">
                {t.role}
              </p>

            </Card>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="py-16 md:py-24 text-center bg-gradient-to-r from-purple-700 to-indigo-700 text-white px-6">

        <h2 className="text-xl lg:text-3xl font-bold">
          Ready to Transform Your Web Presence?
        </h2>

        <p className="text-purple-200 mt-4 max-w-xl mx-auto">
          Let's discuss how we can help your business grow.
        </p>

        <div className="mt-8 flex justify-center">
          <Button size="lg">
            Schedule Free Consultation
          </Button>
        </div>

      </section>

    </div>

  );
}