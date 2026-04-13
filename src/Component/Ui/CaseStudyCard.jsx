import React from "react";
import { Link } from "react-router-dom";

import Card from "../Ui/Card";
import Button from "../Ui/Button";

export default function CaseStudyCard({ study }) {

  return (

<Card hover>

<div className="h-40 bg-gray-200 rounded-lg mb-4" />

<p className="text-sm text-purple-600 font-medium">
{study.industry}
</p>

<h3 className="font-semibold text-lg mt-1">
{study.client}
</h3>

<p className="text-gray-600 text-sm mt-2">
Service: {study.service}
</p>

<p className="text-green-600 font-medium mt-2">
{study.result}
</p>

<Link to={`/case-study/${study.id}`}>
<Button size="sm" className="mt-4">
View Case Study
</Button>
</Link>

</Card>

  );
}