import { Zap, Gauge, Rocket, TrendingUp } from "lucide-react";

const perfomanceData = {

badge:"Performance",

title:"Performance Engineering",

subtitle:"Optimize your website for lightning fast performance",

overview1:"Website performance directly impacts SEO, conversions and user experience.",

overview2:"Our engineering team optimizes your digital infrastructure to maximize speed and reliability.",

features:[
{icon:Zap,title:"Speed Optimization",desc:"Advanced optimization",color:"text-yellow-500"},
{icon:Gauge,title:"Core Web Vitals",desc:"Improve Google metrics",color:"text-blue-600"},
{icon:Rocket,title:"Code Optimization",desc:"Reduce resource load",color:"text-purple-600"},
{icon:TrendingUp,title:"Conversion Boost",desc:"Improve engagement",color:"text-green-600"}
],

process:[
{icon:Zap,title:"Audit",desc:"Analyze speed metrics"},
{icon:Gauge,title:"Optimization",desc:"Fix bottlenecks"},
{icon:Rocket,title:"Testing",desc:"Measure improvements"},
{icon:TrendingUp,title:"Deployment",desc:"Release improvements"},
{icon:Zap,title:"Monitoring",desc:"Track results"}
],

benefits:[
{icon:Zap,title:"Fast Websites",desc:"Better UX",metric:"2x faster"},
{icon:Gauge,title:"SEO Boost",desc:"Improved rankings",metric:"+30% SEO"},
{icon:Rocket,title:"Better UX",desc:"Higher engagement",metric:"+40% retention"},
{icon:TrendingUp,title:"Conversions",desc:"More sales",metric:"+20% conversions"}
],

metrics:[
{value:"50%",label:"Speed Gain"},
{value:"30%",label:"SEO Growth"},
{value:"20%",label:"Conversion Increase"},
{value:"90+",label:"Lighthouse Score"}
],

faq:[
{q:"How long does optimization take?",a:"1-2 weeks depending on site size"},
{q:"Does it affect SEO?",a:"Yes positively"}
]

};
export default perfomanceData;