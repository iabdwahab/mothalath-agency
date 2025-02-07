import { useEffect, useState } from "react";
import { defaultHomePageContent } from "../../types/homepageTypesDefaultValues";
import { homePageContentType } from "../../types/homepageTypes";

function useHomePageData() {
  const [pageData, setPageData] = useState<homePageContentType>(defaultHomePageContent);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "https://mothalthagency.com/wp-json/wp/v2/pages?slug=home&_fields=acf";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          const { acf } = data[0];

          setPageData(acf);
          setIsLoading(false);
        }
      });
  }, []);

  return { pageData, isLoading };
}
export default useHomePageData;
