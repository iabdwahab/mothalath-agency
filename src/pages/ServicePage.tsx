import { useEffect, useState } from "react";
import ServiceLanding from "../components/service_landing/Index";
import { useParams } from "react-router-dom";
import { ServicePageContext } from "../context/pages/ServicePageContext";
import {
  servicePageDataType,
  servicesPageDefaultData,
} from "./types/servicesPagesDataTypes";
import ErrorPage from "./ErrorPage";
import { ErrorBoundary } from "react-error-boundary";

function ServicePage() {
  const [pageData, setPageData] = useState<servicePageDataType>(
    servicesPageDefaultData,
  );
  const [isError, setIsError] = useState(false);

  const { service_slug } = useParams<{ service_slug: string }>();

  useEffect(() => {
    fetch(
      `http://localhost/wordpress/wp-json/wp/v2/services_page?slug=${service_slug}&_fields=acf`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          const { acf } = data[0];

          setPageData(acf);
        } else {
          setIsError(true);
        }
      });
  }, []);

  return (
    <ServicePageContext.Provider value={pageData}>
      {!isError ? <ServiceLanding /> : <ErrorPage />}
    </ServicePageContext.Provider>
  );
}
export default ServicePage;
