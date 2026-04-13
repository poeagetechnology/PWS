import React from "react";
import { motion } from "framer-motion";

import Card from "../Component/Ui/Card";
import Button from "../Component/Ui/Button";
import Badge from "../Component/Ui/Badge";

/* ---------------- DATA ---------------- */
const lastUpdated = "February 13, 2026";

const sections = [
{
id: "introduction",
title: "Introduction",
content: `Poeage Web Services ("we", "our", "us") respects your privacy and is committed to protecting your personal information.

This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our web services.

By accessing our website or submitting your information, you agree to the practices described in this Privacy Policy.`
},

{
id: "information-collected",
title: "Information We Collect",
list: [
"Full name and contact information (email address, phone number)",
"Company name and project details submitted via forms",
"Technical data such as IP address, browser type, and device information",
"Website usage information including pages visited and time spent",
"Communication records when you contact our team"
]
},

{
id: "how-we-collect",
title: "How We Collect Information",
list: [
"Contact forms and consultation requests",
"Newsletter subscription forms",
"Email or phone communication",
"Website analytics and cookies",
"Client onboarding or service agreements"
]
},

{
id: "data-usage",
title: "How We Use Your Information",
list: [
"Provide and improve our web services",
"Respond to inquiries or support requests",
"Send important service updates",
"Improve website functionality and user experience",
"Analyze website traffic and performance"
]
},

{
id: "cookies",
title: "Cookies and Tracking Technologies",
content: `We use cookies and similar technologies to improve user experience and analyze website performance.

Cookies help us understand how visitors interact with our website so we can improve usability and optimize performance.

You may disable cookies through your browser settings, although some parts of the website may not function correctly without them.`
},

{
id: "data-sharing",
title: "Sharing of Information",
content: `We do not sell or rent your personal information.

However, we may share limited data with trusted service providers such as hosting platforms, analytics providers, and communication tools in order to operate our website and deliver services.

All third-party providers are required to maintain strict data protection standards.`
},

{
id: "data-security",
title: "Data Security",
content: `We implement appropriate technical and organizational security measures to protect your personal data.

These include secure servers, encrypted communications, restricted data access, and monitoring systems designed to prevent unauthorized access or misuse of your information.`
},

{
id: "data-retention",
title: "Data Retention",
content: `We retain personal data only as long as necessary to fulfill legal, operational, and contractual obligations.

When data is no longer required, it will be securely deleted or anonymized.`
},

{
id: "user-rights",
title: "Your Privacy Rights",
list: [
"Request access to your personal data",
"Request corrections to inaccurate information",
"Request deletion of your personal data",
"Withdraw consent for communications",
"Request information about how your data is used"
]
},

{
id: "third-party-links",
title: "Third-Party Links",
content: `Our website may contain links to external websites.

We are not responsible for the privacy practices or content of those third-party websites and recommend reviewing their privacy policies separately.`
},

{
id: "policy-updates",
title: "Updates to This Policy",
content: `We may update this Privacy Policy from time to time.

When updates occur, the "Last Updated" date will be revised to reflect the latest changes.`
},

{
id: "contact",
title: "Contact Information",
content: `If you have questions regarding this Privacy Policy or your personal data, please contact us:

Email: privacy@poeage.com
Phone: +91 80568 89616
Location: Tamil Nadu, India`
}
];

/* ---------------- ANIMATION ---------------- */

const fadeUp = {
hidden: { opacity: 0, y: 25 },
show: { opacity: 1, y: 0 }
};

export default function Privacy() {

return (

<section className="bg-gradient-to-b from-white via-purple-50 to-white py-24 px-6">

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

<h1 className="text-xl lg:text-3xl mt-4 font-bold">
Privacy Policy
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
Policy
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


{/* POLICY SECTIONS */}

<div className="flex flex-col gap-10">

{sections.map(section => (

<motion.div
key={section.id}
variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{ once:true }}
>

<Card id={section.id} padding="lg" className="scroll-mt-24">

<div className="flex justify-between items-center mb-4">

<h2 className="text-xl lg:text-2xl font-semibold">
{section.title}
</h2>

<Badge variant="outline">
Policy
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

Print Privacy Policy

</Button>

</div>

</div>

</section>

);
}