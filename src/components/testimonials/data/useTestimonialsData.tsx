import { useEffect, useState } from "react";

function useTestimonialsData() {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "http://localhost/wordpress/wp-json/wp/v2/testimonials/?_fields=acf";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data);
        setIsLoading(false);
      });
  }, []);

  return { testimonials, isLoading };
}
export default useTestimonialsData;
