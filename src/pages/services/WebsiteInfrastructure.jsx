import ServicePage from "../services/ServiceComponent";
import infrastructureData from "../../data/servicesData/InfrastructureData";

export default function WebsiteInfrastructure() {
  return <ServicePage data={infrastructureData} />;
}