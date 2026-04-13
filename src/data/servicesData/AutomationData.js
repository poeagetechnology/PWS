import { Bot, Workflow, Cpu, Zap } from "lucide-react";

const automationData = {

badge:"Automation",

title:"Web Automation",

subtitle:"Automate workflows and eliminate repetitive tasks",

overview1:"Automation helps businesses operate faster and more efficiently.",

overview2:"We build custom automation systems that connect tools and processes.",

features:[
{icon:Bot,title:"Task Automation",desc:"Automate repetitive tasks",color:"text-purple-600"},
{icon:Workflow,title:"Workflow Systems",desc:"Automated business flows",color:"text-blue-600"},
{icon:Cpu,title:"API Integrations",desc:"Connect multiple tools",color:"text-green-600"},
{icon:Zap,title:"Real-Time Automation",desc:"Trigger actions instantly",color:"text-yellow-500"}
],

process:[
{icon:Bot,title:"Audit",desc:"Identify automation opportunities"},
{icon:Workflow,title:"Design",desc:"Build workflow logic"},
{icon:Cpu,title:"Integration",desc:"Connect APIs"},
{icon:Zap,title:"Deployment",desc:"Launch automation"},
{icon:Bot,title:"Monitoring",desc:"Ensure reliability"}
],

benefits:[
{icon:Bot,title:"Save Time",desc:"Reduce manual work",metric:"80% time saved"},
{icon:Workflow,title:"Efficiency",desc:"Streamline operations",metric:"3x faster"},
{icon:Cpu,title:"Scalability",desc:"Automate growth",metric:"Unlimited scaling"},
{icon:Zap,title:"Accuracy",desc:"Reduce human error",metric:"99% accuracy"}
],

metrics:[
{value:"80%",label:"Time Saved"},
{value:"3x",label:"Efficiency"},
{value:"50+",label:"Automations"},
{value:"99%",label:"Accuracy"}
],

faq:[
{q:"Can automation integrate with existing systems?",a:"Yes."},
{q:"How long does setup take?",a:"1-3 weeks."}
]

};
export default automationData;