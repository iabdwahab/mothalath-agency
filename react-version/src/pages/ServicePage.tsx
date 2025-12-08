import ServiceLanding from "../components/service_landing/Index";
import { useParams } from "react-router-dom";
import { ServicePageContext } from "../context/pages/ServicePageContext";
import ErrorPage from "./ErrorPage";
import useServicePageData from "./data/useServicePageData";
import PageLoader from "../components/global/PageLoader";

function ServicePage() {
  const { service_slug } = useParams<{ service_slug: string }>();

  const { pageData, isLoading, isFounded } = useServicePageData(service_slug || "");

  if (!isFounded) {
    return <ErrorPage />;
  }

  if (isLoading) {
    document.body.style.overflow = "hidden";
    return <PageLoader />;
  } else {
    document.body.style.overflow = "";
  }

  return (
    <ServicePageContext.Provider value={pageData}>
      <ServiceLanding />
    </ServicePageContext.Provider>
  );
}
export default ServicePage;
