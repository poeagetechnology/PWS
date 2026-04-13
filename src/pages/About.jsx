import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import Button from "../Component/Ui/Button";
import Card from "../Component/Ui/Card";
import Badge from "../Component/Ui/Badge";

import { values, team, stats, process } from "../data/AboutData";

/* ---------------- ANIMATION ---------------- */

const page = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const section = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function About() {

  return (

<motion.div
variants={page}
initial="hidden"
animate="show"
className="bg-gradient-to-b from-white via-purple-50 to-white text-gray-900"
>

{/* HEADER */}

<motion.section
variants={section}
className="py-28 text-center max-w-5xl mx-auto px-6"
>

<Badge>About Poeage</Badge>

<h1 className="text-xl lg:text-3xl font-bold mt-6">
About Poeage Web Services
</h1>

<p className="text-gray-600 mt-6 text-lg">
Empowering businesses through premium web solutions
</p>

</motion.section>


{/* STORY */}

<motion.section
variants={section}
className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
>

<div>

<h2 className="text-xl lg:text-2xl font-bold mb-6">
Who We Are
</h2>

<p className="text-gray-600 mb-4 leading-relaxed">
Poeage Web Services helps businesses build modern digital
infrastructure with high performance and automation systems.
</p>

<p className="text-gray-600 leading-relaxed">
Our engineering-driven approach ensures your digital platforms
generate measurable business growth and long-term scalability.
</p>

</div>

<motion.div whileHover={{ scale: 1.03 }}>
<Card className="h-72 flex items-center justify-center text-gray-400">
Company Image
</Card>
</motion.div>

</motion.section>


{/* CORE VALUES */}

<motion.section
variants={section}
className="py-24 max-w-7xl mx-auto px-6"
>

<h2 className="text-xl lg:text-3xl font-bold text-center mb-16">
Our Core Values
</h2>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

{values.map((value,i)=>{

const Icon=value.icon

return(

<motion.div
key={i}
whileHover={{ y:-8 }}
transition={{ duration:0.3 }}
>

<Card hover>

<div className={`p-3 rounded-lg w-fit ${value.bg}`}>
<Icon className={value.color} size={26}/>
</div>

<h3 className="font-semibold text-lg mt-4">
{value.title}
</h3>

<p className="text-gray-600 mt-2">
{value.desc}
</p>

</Card>

</motion.div>

)

})}

</div>

</motion.section>


{/* TEAM */}

<motion.section
variants={section}
className="py-24 bg-purple-50"
>

<h2 className="text-xl lg:text-3xl font-bold text-center mb-16">
Meet The Team
</h2>

<div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

{team.map((member,i)=>(
<motion.div key={i} whileHover={{scale:1.05}}>

<Card className="text-center">

<div className="h-32 bg-gray-200 rounded-lg mb-4"/>

<h3 className="font-semibold">
{member.name}
</h3>

<p className="text-purple-600 text-sm">
{member.role}
</p>

<p className="text-gray-600 text-sm mt-2">
{member.bio}
</p>

</Card>

</motion.div>
))}

</div>

</motion.section>


{/* STATS */}

<motion.section
variants={section}
className="py-24"
>

<div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">

{stats.map((stat,i)=>(
<motion.div key={i} whileHover={{scale:1.05}}>

<Card>

<h3 className="text-3xl font-bold text-purple-600">
<CountUp end={stat.number} duration={2}/>+
</h3>

<p className="text-gray-600 mt-2 text-sm">
{stat.label}
</p>

</Card>

</motion.div>
))}

</div>

</motion.section>


{/* PROCESS */}

<motion.section
variants={section}
className="py-24 max-w-6xl mx-auto px-6"
>

<h2 className="text-xl lg:text-3xl font-bold text-center mb-16">
Our Process
</h2>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

{process.map((step,i)=>{

const Icon=step.icon

return(

<motion.div
key={i}
whileHover={{scale:1.04}}
transition={{duration:0.3}}
>

<Card>

<div className="flex items-center gap-4 mb-4">

<div className={`p-3 rounded-lg ${step.bg}`}>
<Icon className={step.color} size={22}/>
</div>

<h3 className="font-semibold">
{i+1}. {step.title}
</h3>

</div>

<p className="text-gray-600 text-sm">
{step.desc}
</p>

</Card>

</motion.div>

)

})}

</div>

</motion.section>


{/* CTA */}

<motion.section
variants={section}
className="py-28 text-center bg-gradient-to-r from-purple-700 to-indigo-700 text-white"
>

<h2 className="text-xl lg:text-3xl font-bold">
Want to Work Together?
</h2>

<p className="text-purple-200 mt-4">
Let's build something powerful for your business
</p>

<div className="mt-8">
<Button size="lg">
Start Your Project
</Button>
</div>

</motion.section>

</motion.div>

  );
}