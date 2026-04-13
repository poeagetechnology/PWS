import { TrendingUp, Target, MousePointerClick, BarChart } from "lucide-react";

const conversionData = {

badge:"Conversion",

title:"Conversion Optimization",

subtitle:"Turn visitors into paying customers",

overview1:"Conversion optimization focuses on improving user journeys.",

overview2:"We design funnels that maximize engagement and revenue.",

features:[
{icon:Target,title:"Funnel Design",desc:"Optimized sales funnels",color:"text-purple-600"},
{icon:MousePointerClick,title:"UX Optimization",desc:"Improve usability",color:"text-blue-600"},
{icon:BarChart,title:"Analytics Tracking",desc:"Data driven decisions",color:"text-green-600"},
{icon:TrendingUp,title:"A/B Testing",desc:"Test variations",color:"text-red-500"}
],

process:[
{icon:Target,title:"Audit",desc:"Analyze user behavior"},
{icon:MousePointerClick,title:"Design",desc:"Improve UX"},
{icon:BarChart,title:"Testing",desc:"Run A/B tests"},
{icon:TrendingUp,title:"Optimization",desc:"Implement winners"},
{icon:Target,title:"Scaling",desc:"Scale results"}
],

benefits:[
{icon:TrendingUp,title:"Higher Revenue",desc:"More conversions",metric:"+35% revenue"},
{icon:Target,title:"Better UX",desc:"Improved engagement",metric:"+40% retention"},
{icon:MousePointerClick,title:"Better CTR",desc:"Improve click rates",metric:"+25% CTR"},
{icon:BarChart,title:"Data Driven",desc:"Better insights",metric:"100% data backed"}
],

metrics:[
{value:"35%",label:"Revenue Growth"},
{value:"40%",label:"Retention"},
{value:"25%",label:"CTR Increase"},
{value:"5x",label:"ROI"}
],

faq:[
{q:"Do you run A/B tests?",a:"Yes."},
{q:"How long to see results?",a:"Usually 2-4 weeks."}
]

};

export default conversionData;