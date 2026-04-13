import React from "react";
import { motion } from "framer-motion";

import CaseStudyCard from "../Component/Ui/CaseStudyCard";
import { caseStudies } from "../data/CaseStudiesData";
import Badge from "../Component/Ui/Badge";

export default function Portfolio() {

return (

<div className="bg-gradient-to-b from-white via-purple-50 to-white">

{/* HEADER */}

<section className="py-28 text-center">

<Badge>Portfolio</Badge>

<h1 className="text-xl lg:text-3xl font-bold mt-4">
Our Work Speaks For Itself
</h1>

<p className="text-gray-600 mt-6">
Real results from real clients
</p>

</section>

{/* CASE STUDY GRID */}

<section className="max-w-7xl mx-auto px-6 pb-24">

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

{caseStudies.map((study) => (

<motion.div
key={study.id}
whileHover={{ y: -6 }}
>

<CaseStudyCard study={study} />

</motion.div>

))}

</div>

</section>

</div>

);
}