import ServicePage from "../services/ServiceComponent";
import enterpriseData from "../../data/servicesData/EnterpriseData";

export default function EnterpriseSolutions() {
  return <ServicePage data={enterpriseData} />;
}