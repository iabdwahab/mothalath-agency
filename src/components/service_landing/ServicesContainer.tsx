import PlaceServiceCard from "./PlaceServiceCard";
import ServiceCard from "./ServiceCard";

function ServicesContainer() {
  return (
    <div>
      <h4 className="mb-5 text-background">لماذا تختارنا؟</h4>

      <div className="grid-cards-cols gap-6">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <PlaceServiceCard />
      </div>
    </div>
  );
}
export default ServicesContainer;
