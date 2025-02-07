import { useEffect, useState } from "react";

function useArticlesData() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = `https://mothalthagency.com/wp-json/wp/v2/articles?_fields=slug,acf,date_gmt`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      });
  }, []);

  return { articles, isLoading };
}
export default useArticlesData;
