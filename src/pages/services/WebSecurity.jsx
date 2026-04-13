import ServicePage from "../services/ServiceComponent";
import securityData from "../../data/servicesData/SecurityData";

export default function WebSecurity() {
  return <ServicePage data={securityData} />;
}