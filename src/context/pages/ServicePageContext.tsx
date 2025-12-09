import { createContext } from "react";
import {
  servicePageDataType,
  servicesPageDefaultData,
} from "../../pages/types/servicesPagesDataTypes";

export const ServicePageContext = createContext<servicePageDataType>(
  servicesPageDefaultData,
);
