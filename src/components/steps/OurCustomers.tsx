import { useContext } from "react";
import Container from "../Container";
import { HomePageDataContext } from "../../pages/HomePage";

function OurCustomers() {
  const { our_customers } = useContext(HomePageDataContext);

  // Convert to an array, then filter founded logo.
  // console.log(our_customers); // Uncomment this to show the data from API.
  // Doing this because structure of the API.
  const customersLogosList = Object.values(our_customers).filter(
    (item) => item,
  );

  const customersLogosElements = customersLogosList.map((logo, index) => {
    return (
      <div key={index} className="flex items-center justify-center">
        <img
          src={logo.url}
          alt={logo.alt}
          className="h-10 w-24 object-contain"
        />
      </div>
    );
  });

  if (customersLogosElements.length) {
    return (
      <section className="py-6">
        <Container className="flex flex-wrap items-center justify-center gap-8">
          {customersLogosElements}
        </Container>
      </section>
    );
  }

  return null;
}
export default OurCustomers;
