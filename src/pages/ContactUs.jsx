import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

import Input from "../Component/Ui/Input";
import Textarea from "../Component/Ui/TextArea";
import Button from "../Component/Ui/Button";
import Card from "../Component/Ui/Card";

/* ---------------- FAQ DATA ---------------- */

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most projects take between 3-8 weeks depending on complexity."
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. We provide maintenance, optimization, and long-term support."
  },
  {
    q: "Can you improve my existing website?",
    a: "Absolutely. Performance optimization and conversion improvements are common projects."
  }
];

/* ---------------- PAGE ---------------- */

export default function Contact() {

  const [loading, setLoading] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleSubmit = async (e) => {

    e.preventDefault();
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1200));

    toast.success("Message sent successfully");

    setLoading(false);
  };

  return (

    <section className="bg-gradient-to-b from-white via-purple-100 to-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >

          <h1 className="text-xl lg:text-3xl font-bold mb-4">
            Contact Poeage Web Services
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto">
            Tell us about your project and our team will help you build a
            high-performance web presence.
          </p>

        </motion.div>

        {/* GRID */}

        <div className="grid lg:grid-cols-2 gap-16">

          {/* ---------------- CONTACT FORM ---------------- */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <Card padding="lg">

              <form onSubmit={handleSubmit} className="space-y-6">

                <Input
                  label="Full Name *"
                  placeholder="John Doe"
                  required
                />

                <Input
                  label="Email *"
                  type="email"
                  placeholder="john@example.com"
                  required
                />

                <Input
                  label="Phone Number"
                  placeholder="+91 98765 43210"
                />

                <Input
                  label="Company Name"
                  placeholder="Your company"
                />

                {/* PROJECT TYPE */}

                <div>

                  <label className="text-sm font-medium">
                    Project Type *
                  </label>

                  <select className="w-full border rounded-md p-3 mt-1">

                    <option>Select Project Type</option>

                    <option>Website Infrastructure</option>
                    <option>Performance Engineering</option>
                    <option>Web Automation</option>
                    <option>Conversion Optimization</option>
                    <option>Web Security</option>
                    <option>Enterprise Solutions</option>
                    <option>Other</option>

                  </select>

                </div>

                {/* BUDGET */}

                <div>

                  <label className="text-sm font-medium">
                    Budget Range
                  </label>

                  <select className="w-full border rounded-md p-3 mt-1">

                    <option>Select Budget</option>

                    <option>Under $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000 - $50,000</option>
                    <option>$50,000+</option>

                  </select>

                </div>

                <Textarea
                  label="Project Description *"
                  placeholder="Tell us about your project goals..."
                  required
                />

                {/* CONTACT METHOD */}

                <div>

                  <p className="text-sm font-medium mb-2">
                    Preferred Contact Method
                  </p>

                  <div className="flex gap-6">

                    <label className="flex items-center gap-2">
                      <input type="radio" name="contact" />
                      Email
                    </label>

                    <label className="flex items-center gap-2">
                      <input type="radio" name="contact" />
                      Phone
                    </label>

                  </div>

                </div>

                <Input
                  label="Best Time to Contact"
                  placeholder="Morning / Afternoon / Evening"
                />

                {/* PRIVACY NOTE */}

                <p className="text-xs text-gray-500">
                  We respect your privacy. Your information will never be shared.
                </p>

                <Button fullWidth loading={loading}>
                  Send Message
                </Button>

              </form>

            </Card>

          </motion.div>

          {/* ---------------- RIGHT SIDE INFO ---------------- */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <Card>

              <h3 className="font-semibold mb-2">
                Business Address
              </h3>

              <p className="text-gray-600">
                Kavandapadi, Tamil Nadu, India
              </p>

            </Card>

            <Card>

              <h3 className="font-semibold mb-2">
                Phone
              </h3>

              <p className="text-gray-600">
                +91 98765 43210
              </p>

            </Card>

            <Card>

              <h3 className="font-semibold mb-2">
                Email
              </h3>

              <p className="text-gray-600">
                sales@poeage.com
              </p>

            </Card>

            {/* OFFICE HOURS */}

            <Card>

              <h3 className="font-semibold mb-2">
                Office Hours
              </h3>

              <p className="text-gray-600 text-sm">
                Monday – Friday: 9 AM – 6 PM
                <br />
                Saturday: 10 AM – 2 PM
                <br />
                Sunday: Closed
              </p>

            </Card>

            {/* RESPONSE TIME */}

            <Card className="bg-purple-50 border-purple-200">

              <h3 className="font-semibold mb-2 text-purple-700">
                Response Time
              </h3>

              <p className="text-gray-700 text-sm">
                We typically respond to inquiries within **24 hours**.
              </p>

            </Card>

            {/* CALENDAR */}

            <Card className="text-center">

  <h3 className="font-semibold mb-2">
    Schedule a Call
  </h3>

  <p className="text-gray-600 text-sm mb-4">
    Book a free consultation with our team.
  </p>

  <a
    href="https://calendly.com/your-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button>
      Schedule Call
    </Button>
  </a>

</Card>
          </motion.div>

        </div>

        {/* MAP */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 rounded-xl overflow-hidden shadow"
        >

          <iframe
            src="https://www.google.com/maps?q=Kavandapadi&output=embed"
            className="w-full h-[400px]"
            loading="lazy"
            title="map"
          />

        </motion.div>

        {/* FAQ */}

        <div className="mt-24 max-w-3xl mx-auto">

          <h2 className="text-xl lg:text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">

            {faqs.map((faq, i) => (

              <Card key={i}>

                <button
                  onClick={() =>
                    setOpenFAQ(openFAQ === i ? null : i)
                  }
                  className="w-full text-left font-medium"
                >
                  {faq.q}
                </button>

                <AnimatePresence>

                  {openFAQ === i && (

                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="text-gray-600 mt-3"
                    >
                      {faq.a}
                    </motion.p>

                  )}

                </AnimatePresence>

              </Card>

            ))}

          </div>

        </div>

      </div>

    </section>

  );
}