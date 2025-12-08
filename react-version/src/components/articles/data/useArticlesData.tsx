import { useEffect, useState } from "react";
import { API_BASE } from "../../../global_data/globalData";

function useArticlesData() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = `${API_BASE}/articles?_fields=slug,acf,date_gmt`;

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
