import ServicePage from "../services/ServiceComponent";
import automationData from "../../data/servicesData/AutomationData";

export default function WebAutomation() {
  return <ServicePage data={automationData} />;
}