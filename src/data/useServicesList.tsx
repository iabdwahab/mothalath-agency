import { useEffect, useState } from "react";
import { ServicesListType } from "../types/servicesListTypes";

function useServicesList() {
  const [list, setList] = useState<ServicesListType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost/wordpress/wp-json/wp/v2/services_page?_fields=slug,acf.name")
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  }, []);

  return { list, isLoading };
}
export default useServicesList;
