import { Building, Layers, Network, BarChart } from "lucide-react";

const enterpriseData = {

badge:"Enterprise",

title:"Enterprise Solutions",

subtitle:"Custom digital systems for large organizations",

overview1:"Enterprise businesses require scalable and secure systems.",

overview2:"We design enterprise grade platforms supporting complex operations.",

features:[
{icon:Building,title:"Custom Platforms",desc:"Tailored systems",color:"text-purple-600"},
{icon:Layers,title:"System Architecture",desc:"Enterprise design",color:"text-blue-600"},
{icon:Network,title:"Integration",desc:"Connect systems",color:"text-green-600"},
{icon:BarChart,title:"Analytics",desc:"Enterprise dashboards",color:"text-yellow-500"}
],

process:[
{icon:Building,title:"Consulting",desc:"Understand requirements"},
{icon:Layers,title:"Architecture",desc:"Design system"},
{icon:Network,title:"Integration",desc:"Connect tools"},
{icon:BarChart,title:"Deployment",desc:"Launch platform"},
{icon:Building,title:"Scaling",desc:"Support growth"}
],

benefits:[
{icon:Building,title:"Scalability",desc:"Enterprise scale",metric:"10M+ users"},
{icon:Layers,title:"Reliability",desc:"Stable systems",metric:"99.9% uptime"},
{icon:Network,title:"Integration",desc:"Connect platforms",metric:"100+ APIs"},
{icon:BarChart,title:"Insights",desc:"Better decisions",metric:"Advanced analytics"}
],

metrics:[
{value:"10M+",label:"Users"},
{value:"99.9%",label:"Uptime"},
{value:"100+",label:"Integrations"},
{value:"5x",label:"Scalability"}
],

faq:[
{q:"Do you support enterprise scale?",a:"Yes."},
{q:"Can you integrate with existing systems?",a:"Yes."}
]

};
export default enterpriseData;