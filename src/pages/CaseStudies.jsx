import React from "react";
import { useParams } from "react-router-dom";

import { caseStudies } from "../data/CaseStudiesData";
import Button from "../Component/Ui/Button";
import Card from "../Component/Ui/Card";

export default function CaseStudy() {

const { id } = useParams();

const study = caseStudies.find(s => s.id === id);

if (!study) return <p>Case study not found</p>;

return (

<div className="bg-white py-24">

<div className="max-w-4xl mx-auto px-6">


<h1 className="text-xl lg:text-3xl font-bold mb-2">
{study.client}
</h1>

<p className="text-gray-500 mb-10">
Industry: {study.industry}
</p>

{/* CHALLENGE */}

<Card className="mb-8">

<h2 className="font-semibold text-xl mb-3">
Challenge
</h2>

<p className="text-gray-600">
{study.challenge}
</p>

</Card>

{/* SOLUTION */}

<Card className="mb-8">

<h2 className="font-semibold text-xl mb-3">
Solution
</h2>

<p className="text-gray-600">
{study.solution}
</p>

</Card>

{/* RESULTS */}

<Card className="mb-8">

<h2 className="font-semibold text-xl mb-4">
Results
</h2>

<ul className="space-y-2">

{study.results.map((r,i)=>(
<li key={i} className="text-green-600 font-medium">
✓ {r}
</li>
))}

</ul>

</Card>

{/* TESTIMONIAL */}

<Card className="mb-12">

<p className="italic text-gray-600">
"{study.testimonial.quote}"
</p>

<p className="mt-4 font-semibold">
{study.testimonial.author}
</p>

<p className="text-gray-500 text-sm">
{study.testimonial.role}
</p>

</Card>

{/* CTA */}

<div className="text-center">

<h2 className="text-2xl font-bold mb-4">
Let's achieve similar results for you
</h2>

<Button size="lg">
Start Your Project
</Button>

</div>

</div>

</div>

);
}