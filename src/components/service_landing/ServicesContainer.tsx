import { useContext } from "react";
import PlaceServiceCard from "./PlaceServiceCard";
import ServiceCard from "./ServiceCard";
import { ServicePageContext } from "../../context/pages/ServicePageContext";

function ServicesContainer() {
  const { features } = useContext(ServicePageContext);

  //Run this to know why I did this.
  console.log(features);
  const featuresList = [...Object.values(features)];

  return (
    <div>
      <h4 className="mb-5 text-background">لماذا تختارنا؟</h4>

      <div className="grid-cards-cols gap-6">
        {featuresList.map((feature, index) => {
          return (
            <ServiceCard
              key={index}
              title={feature.feature_title.ar}
              description={feature.feature_description.ar}
            />
          );
        })}
        <PlaceServiceCard />
      </div>
    </div>
  );
}
export default ServicesContainer;
