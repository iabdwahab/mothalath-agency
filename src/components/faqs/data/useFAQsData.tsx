import { useEffect, useState } from "react";

function useFAQsData() {
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = `http://localhost/wordpress/wp-json/wp/v2/faqs?_fields=acf`;

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
