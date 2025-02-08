import { useEffect, useState } from "react";
import { API_BASE } from "../../../global_data/globalData";

function useTestimonialsData() {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = `${API_BASE}/testimonials/?_fields=acf`;

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
