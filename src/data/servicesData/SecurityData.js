import { Shield, Lock, Eye, AlertTriangle } from "lucide-react";

const securityData = {

badge:"Security",

title:"Web Security",

subtitle:"Protect your digital infrastructure",

overview1:"Cyber threats continue to evolve.",

overview2:"Our security systems protect websites from attacks.",

features:[
{icon:Shield,title:"Firewall Protection",desc:"Advanced protection",color:"text-red-500"},
{icon:Lock,title:"Encryption",desc:"Secure communications",color:"text-purple-600"},
{icon:Eye,title:"Monitoring",desc:"24/7 monitoring",color:"text-blue-600"},
{icon:AlertTriangle,title:"Threat Detection",desc:"Identify vulnerabilities",color:"text-yellow-500"}
],

process:[
{icon:Shield,title:"Audit",desc:"Security assessment"},
{icon:Lock,title:"Hardening",desc:"Fix vulnerabilities"},
{icon:Eye,title:"Monitoring",desc:"Track threats"},
{icon:AlertTriangle,title:"Alerts",desc:"Real-time alerts"},
{icon:Shield,title:"Maintenance",desc:"Continuous updates"}
],

benefits:[
{icon:Shield,title:"Protection",desc:"Prevent attacks",metric:"99% blocked"},
{icon:Lock,title:"Secure Data",desc:"Protect information",metric:"AES encryption"},
{icon:Eye,title:"Monitoring",desc:"Continuous watch",metric:"24/7"},
{icon:AlertTriangle,title:"Risk Reduction",desc:"Minimize threats",metric:"90% safer"}
],

metrics:[
{value:"99%",label:"Threats Blocked"},
{value:"24/7",label:"Monitoring"},
{value:"0",label:"Breaches"},
{value:"90%",label:"Risk Reduction"}
],

faq:[
{q:"Do you secure existing websites?",a:"Yes."},
{q:"Do you provide monitoring?",a:"24/7 monitoring."}
]

};
export default securityData;