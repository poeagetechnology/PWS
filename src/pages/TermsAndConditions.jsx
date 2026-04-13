import React from "react";
import { motion } from "framer-motion";

import Card from "../Component/Ui/Card";
import Button from "../Component/Ui/Button";
import Badge from "../Component/Ui/Badge";

/* ---------------- DATA ---------------- */

const lastUpdated = "February 13, 2026";

const sections = [
{
id: "service-description",
title: "Service Description",
content: `Poeage Web Services provides web development, performance engineering,
automation systems, and enterprise digital solutions designed to help
businesses grow through modern technology.

Our services may include system architecture, UI/UX design, cloud
infrastructure, website optimization, automation workflows, and
ongoing support services depending on project agreements.`
},

{
id: "user-obligations",
title: "User Obligations",
list: [
"Provide accurate information when requesting services",
"Use our services only for lawful purposes",
"Not attempt to hack, exploit, or disrupt systems",
"Respect intellectual property rights",
"Comply with applicable laws and regulations"
]
},

{
id: "intellectual-property",
title: "Intellectual Property",
content: `All frameworks, systems, and development methodologies created
by Poeage Web Services remain our intellectual property unless
otherwise agreed in writing.

Clients receive rights to use delivered systems according to
their service agreement. Unauthorized resale or distribution
is strictly prohibited.`
},

{
id: "payment-terms",
title: "Payment Terms",
content: `Payment terms are defined in project agreements or invoices.

Unless otherwise stated:

• Payments must be made according to the agreed schedule  
• Late payments may incur additional fees  
• Work may be paused if payments are overdue`
},

{
id: "warranty",
title: "Warranty Disclaimer",
content: `Services are provided "as is". While we strive to provide high
quality and reliable systems, we do not guarantee uninterrupted
operation, specific business outcomes, or error-free services.`
},

{
id: "liability",
title: "Limitation of Liability",
content: `Poeage Web Services shall not be liable for indirect,
incidental, or consequential damages including loss of revenue,
data, or business opportunities resulting from service usage.`
},

{
id: "termination",
title: "Termination",
content: `Services may be suspended or terminated if:

• Terms are violated  
• Payments remain overdue  
• Illegal activity is detected  

Clients may terminate services according to their service agreement.`
},

{
id: "changes",
title: "Changes to Terms",
content: `We may update these Terms from time to time. Continued use
of our services after changes means you accept the updated Terms.`
},

{
id: "contact",
title: "Contact Information",
content: `Email: legal@poeage.com
Phone: +91 80568 89616
Location: Tamil Nadu, India`
}
];

/* ---------------- ANIMATION ---------------- */

const fadeUp = {
hidden: { opacity: 0, y: 25 },
show: { opacity: 1, y: 0 }
};

export default function TermsAndConditions() {

return (

<section className="bg-gradient-to-b from-white via-purple-100 to-white py-24 px-6">

<div className="max-w-5xl mx-auto">

{/* HEADER */}

<motion.div
initial="hidden"
animate="show"
variants={fadeUp}
className="text-center mb-16"
>

<Badge className="mb-4">
Legal
</Badge>

<h1 className="text-xl lg:text-3xl font-bold mt-4">
Terms & Conditions
</h1>

<p className="text-gray-600 mt-4">
Last Updated: <strong>{lastUpdated}</strong>
</p>

</motion.div>


{/* TABLE OF CONTENTS */}

<Card padding="lg" className="mb-14">

<div className="flex justify-between items-center mb-6">

<h2 className="text-lg font-semibold">
Table of Contents
</h2>

<Badge variant="info">
Legal
</Badge>

</div>

<ul className="grid sm:grid-cols-2 gap-2 text-sm">

{sections.map(sec => (

<li key={sec.id}>

<a
href={`#${sec.id}`}
className="text-purple-600 hover:underline"
>

{sec.title}

</a>

</li>

))}

</ul>

</Card>


{/* TERMS SECTIONS */}

<div className="flex flex-col gap-10">

{sections.map(section => (

<motion.div
key={section.id}
variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{ once:true }}
>

<Card
id={section.id}
padding="lg"
className="scroll-mt-24"
>

<div className="flex justify-between items-center mb-4">

<h2 className="text-xl font-semibold">
{section.title}
</h2>

<Badge variant="outline">
Legal
</Badge>

</div>

{section.content && (

<p className="text-gray-700 leading-relaxed whitespace-pre-line">

{section.content}

</p>

)}

{section.list && (

<ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">

{section.list.map((item,i)=>(

<li key={i}>{item}</li>

))}

</ul>

)}

</Card>

</motion.div>

))}

</div>


{/* PRINT */}

<div className="mt-16 text-center">

<Button
size="lg"
onClick={() => window.print()}
>

Print Terms

</Button>

</div>

</div>

</section>

);
}