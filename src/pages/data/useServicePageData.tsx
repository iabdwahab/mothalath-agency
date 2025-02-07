import { useEffect, useState } from "react";
import { servicePageDataType, servicesPageDefaultData } from "../types/servicesPagesDataTypes";
import { useLocation } from "react-router-dom";

function useServicePageData(service_slug: string) {
  const { pathname } = useLocation();

  const [pageData, setPageData] = useState<servicePageDataType>(servicesPageDefaultData);
  const [isLoading, setIsLoading] = useState(true);
  const [isFounded, setIsFounded] = useState(true);

  useEffect(() => {
    fetch(`https://mothalthagency.com/wp-json/wp/v2/services_page?slug=${service_slug}&_fields=acf`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          const { acf } = data[0];

          setPageData(acf);
          setIsLoading(false);
        } else {
          setIsFounded(false);
        }
      });
  }, [pathname]);

  return { pageData, isLoading, isFounded };
}

export default useServicePageData;
