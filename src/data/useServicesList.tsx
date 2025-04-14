import { useEffect, useState } from "react";
import { ServicesListType } from "../types/servicesListTypes";
import { API_BASE } from "../global_data/globalData";

function useServicesList() {
  const [list, setList] = useState<ServicesListType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/services_page?_fields=slug,acf.name`)
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        setIsLoading(false);
      });
  }, []);

  return { list, isLoading };
}
export default useServicesList;
