import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import PricingCard from "../Component/Ui/PricingCard";
import Card from "../Component/Ui/Card";
import Button from "../Component/Ui/Button";
import Badge from "../Component/Ui/Badge";

import { plans, pricingFaq } from "../data/PricingData";

/* ---------- ANIMATION ---------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.12 }
  }
};

export default function Pricing() {

  const [billing, setBilling] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(null);

  return (

<div className="bg-gradient-to-b from-white via-purple-50 to-white py-28">

<div className="max-w-7xl mx-auto px-6">

{/* HEADER */}

<motion.div
variants={fadeUp}
initial="hidden"
animate="show"
className="text-center mb-16"
>
<Badge>Pricing</Badge>

<h1 className="text-xl lg:text-3xl mt-4 font-bold mb-4">
Transparent, Flexible Pricing
</h1>

<p className="text-gray-600 max-w-xl mx-auto">
Choose a plan designed for your business stage. 
Scale your infrastructure, performance, and automation systems.
</p>

</motion.div>


{/* BILLING TOGGLE */}

<div className="flex justify-center mb-16">

<div className="flex items-center bg-white shadow-sm border rounded-full p-1">

<button
onClick={() => setBilling("monthly")}
className={`px-6 py-2 rounded-full text-sm transition ${
billing === "monthly"
? "bg-purple-600 text-white shadow"
: "text-gray-600"
}`}
>
Monthly
</button>

<button
onClick={() => setBilling("yearly")}
className={`px-6 py-2 rounded-full text-sm transition ${
billing === "yearly"
? "bg-purple-600 text-white shadow"
: "text-gray-600"
}`}
>
Yearly
</button>

</div>

</div>


{/* PRICING CARDS */}

<motion.div
variants={stagger}
initial="hidden"
animate="show"
className="grid md:grid-cols-3 gap-10 mb-24"
>

{plans.map((plan) => (

<motion.div
key={plan.name}
variants={fadeUp}
whileHover={{ y: -8 }}
transition={{ duration: 0.2 }}
>

<PricingCard
plan={plan}
billing={billing}
/>

</motion.div>

))}

</motion.div>


{/* ENTERPRISE SECTION */}

<motion.div
variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{ once: true }}
>

<Card className="text-center mb-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">

<h2 className="text-2xl font-semibold mb-4">
Need Something Custom?
</h2>

<p className="opacity-90 mb-6 max-w-xl mx-auto">
We design enterprise-grade infrastructure, automation
systems and high-performance platforms tailored for your business.
</p>

<Button variant="secondary">
Contact Our Sales Team
</Button>

</Card>

</motion.div>


{/* GUARANTEE */}

<motion.div
variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{ once: true }}
>

<Card className="text-center mb-24">

<h2 className="text-xl font-semibold mb-2">
30-Day Money Back Guarantee
</h2>

<p className="text-gray-600">
If you're not satisfied within 30 days,
we’ll refund your payment. No questions asked.
</p>

</Card>

</motion.div>


{/* FAQ */}

<motion.div
variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{ once: true }}
className="max-w-3xl mx-auto"
>

<h2 className="text-xl lg:text-3xl font-semibold text-center mb-10">
Pricing FAQ
</h2>

{pricingFaq.map((faq, i) => {

const isOpen = openFaq === i;

return (

<Card key={i} className="mb-4">

<button
onClick={() => setOpenFaq(isOpen ? null : i)}
className="w-full flex justify-between items-center text-left font-medium"
>

{faq.q}

<span className="text-purple-600">
{isOpen ? "-" : "+"}
</span>

</button>

<AnimatePresence>

{isOpen && (

<motion.div
initial={{ height: 0, opacity: 0 }}
animate={{ height: "auto", opacity: 1 }}
exit={{ height: 0, opacity: 0 }}
className="overflow-hidden"
>

<p className="text-gray-600 mt-3">
{faq.a}
</p>

</motion.div>

)}

</AnimatePresence>

</Card>

);

})}

</motion.div>


{/* FINAL CTA */}

<motion.div
variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{ once: true }}
className="text-center mt-24"
>

<h2 className="text-xl lg:text-3xl font-bold mb-6">
Start Your Success Story Today
</h2>

<p className="text-gray-600 mb-8">
Choose a plan and start building high-performance web systems.
</p>

<Button size="lg">
Choose Your Plan
</Button>

</motion.div>

</div>

</div>

  );
}