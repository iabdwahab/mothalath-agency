import { useEffect, useState } from "react";
import { API_BASE } from "../../../global_data/globalData";

function useFAQsData() {
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = `${API_BASE}/faqs?_fields=acf`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setFaqs(data);
        setIsLoading(false);
      });
  }, []);

  return { faqs, isLoading };
}
export default useFAQsData;
