import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

import Card from "../../Component/Ui/Card";
import Button from "../../Component/Ui/Button";
import Badge from "../../Component/Ui/Badge";

/* ---------------- Animation Variants ---------------- */

const section = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

/* ---------------- CountUp ---------------- */

function CountUp({ value }) {

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {

    if (!inView) return;

    let start = 0;
    const end = parseInt(value);

    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {

      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));

    }, 16);

    return () => clearInterval(timer);

  }, [inView, value]);

  return <span ref={ref}>{count}</span>;
}

/* ---------------- Page ---------------- */

export default function ServicePage({ data }) {

  return (

    <div className="bg-gradient-to-b from-white via-purple-50 to-white">

      {/* HERO */}

      <motion.section
        variants={section}
        initial="hidden"
        animate="visible"
        className="py-28 text-center px-6"
      >

        <Badge>{data.badge}</Badge>

        <h1 className="text-4xl md:text-5xl font-bold mt-6">
          {data.title}
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          {data.subtitle}
        </p>

        <div className="flex justify-center gap-4 mt-8">

          <Link to="/contact">
            <Button>Schedule Consultation</Button>
          </Link>

          <Link to="/pricing">
            <Button variant="secondary">View Pricing</Button>
          </Link>

        </div>

      </motion.section>

      {/* OVERVIEW */}

      <motion.section
        variants={section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-20"
      >

        <h2 className="text-3xl font-bold mb-6">
          What is {data.title}?
        </h2>

        <p className="text-gray-600 mb-4">
          {data.overview1}
        </p>

        <p className="text-gray-600">
          {data.overview2}
        </p>

      </motion.section>

      {/* FEATURES */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold text-center mb-16">
          What's Included
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >

          {data.features.map((feature, i) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -6 }}
              >

                <Card>

                  <Icon className={feature.color} size={28} />

                  <h3 className="font-semibold mt-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 mt-2 text-sm">
                    {feature.desc}
                  </p>

                </Card>

              </motion.div>

            );

          })}

        </motion.div>

      </section>

      {/* PROCESS */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold text-center mb-16">
          How It Works
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-8"
        >

          {data.process.map((step, i) => {

            const Icon = step.icon;

            return (

              <motion.div key={i} variants={item}>

                <Card className="text-center">

                  <Icon className="text-purple-600 mx-auto mb-3" />

                  <h3 className="font-semibold">
                    {i + 1}. {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-2">
                    {step.desc}
                  </p>

                </Card>

              </motion.div>

            );

          })}

        </motion.div>

      </section>

      {/* BENEFITS */}

      <section className="bg-purple-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16">
            Why This Service Matters
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >

            {data.benefits.map((b, i) => {

              const Icon = b.icon;

              return (

                <motion.div key={i} variants={item}>

                  <Card>

                    <Icon className="text-indigo-600 mb-4" />

                    <h3 className="font-semibold">
                      {b.title}
                    </h3>

                    <p className="text-gray-600 text-sm mt-2">
                      {b.desc}
                    </p>

                    <p className="text-purple-600 font-semibold mt-2">
                      {b.metric}
                    </p>

                  </Card>

                </motion.div>

              );

            })}

          </motion.div>

        </div>

      </section>

      {/* RESULTS */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold text-center mb-16">
          Client Results
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >

          {data.metrics.map((m, i) => (

            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.05 }}
            >

              <Card className="text-center">

                <h3 className="text-3xl font-bold text-purple-600">

                  <CountUp value={m.value.replace(/\D/g, "")} />

                  {m.value.includes("%") && "%"}
                  {m.value.includes("x") && "x"}

                </h3>

                <p className="text-gray-600 mt-2">
                  {m.label}
                </p>

              </Card>

            </motion.div>

          ))}

        </motion.div>

      </section>

      {/* FAQ */}

      <section className="max-w-3xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold text-center mb-12">
          FAQ
        </h2>

        {data.faq.map((f, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <Card className="mb-4">

              <h3 className="font-semibold">
                {f.q}
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                {f.a}
              </p>

            </Card>

          </motion.div>

        ))}

      </section>

      {/* CTA */}

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-28 text-center bg-gradient-to-r from-purple-700 to-indigo-700 text-white"
      >

        <h2 className="text-4xl font-bold">
          Ready to Improve Your Website?
        </h2>

        <p className="text-purple-200 mt-4">
          Let's build a high performance system for your business
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <Link to="/contact">
            <Button size="lg">Schedule Consultation</Button>
          </Link>

          <Link to="/pricing">
            <Button variant="secondary">See Pricing</Button>
          </Link>

        </div>

      </motion.section>

    </div>

  );

}