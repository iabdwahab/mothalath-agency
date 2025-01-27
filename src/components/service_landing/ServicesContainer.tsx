import ServiceCard from "./ServiceCard";

function ServicesContainer() {
  return (
    <div>
      <h4 className="mb-5 text-background">لماذا تختارنا؟</h4>

      <div className="grid-cards-cols gap-4">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}
export default ServicesContainer;
