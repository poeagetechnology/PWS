import { Server, Cloud, Globe, Shield } from "lucide-react";

const infrastructureData = {

badge:"Infrastructure",

title:"Website Infrastructure",

subtitle:"Scalable high-performance infrastructure for modern websites",

overview1:"Website infrastructure forms the backbone of any digital product.",

overview2:"We design scalable hosting systems, cloud deployments and performance optimized architectures.",

features:[
{
icon:Server,
title:"Domain Architecture",
desc:"Structured domain planning",
color:"text-blue-600"
},
{
icon:Cloud,
title:"Cloud Hosting",
desc:"Deploy scalable cloud hosting",
color:"text-purple-600"
},
{
icon:Globe,
title:"CDN Optimization",
desc:"Global content delivery optimization",
color:"text-green-600"
},
{
icon:Shield,
title:"Security Hardening",
desc:"Advanced server security",
color:"text-red-600"
}
],

process:[
{icon:Server,title:"Audit",desc:"Analyze existing system"},
{icon:Cloud,title:"Architecture",desc:"Design infrastructure"},
{icon:Globe,title:"Deployment",desc:"Cloud deployment"},
{icon:Shield,title:"Security",desc:"Security configuration"},
{icon:Server,title:"Monitoring",desc:"Continuous monitoring"}
],

benefits:[
{icon:Server,title:"Scalability",desc:"Scale systems easily",metric:"10x scalability"},
{icon:Cloud,title:"Reliability",desc:"Stable infrastructure",metric:"99.9% uptime"},
{icon:Globe,title:"Global Speed",desc:"Fast global delivery",metric:"50% faster"},
{icon:Shield,title:"Security",desc:"Strong protection",metric:"Zero breaches"}
],

metrics:[
{value:"99.9%",label:"Uptime"},
{value:"50%",label:"Speed Increase"},
{value:"24/7",label:"Monitoring"},
{value:"100+",label:"Deployments"}
],

faq:[
{q:"How long does setup take?",a:"Typically 3-7 days."},
{q:"Can you migrate existing infrastructure?",a:"Yes, we support migrations."}
]

};

export default infrastructureData;