import { useParams } from "react-router-dom";
import Container from "../Container";
import MainHeading from "../global/MainHeading";
import ServicesContainer from "./ServicesContainer";
import { servicesData } from "./data";
import { useContext } from "react";
import { ServicePageContext } from "../../context/pages/ServicePageContext";

function ServiceLanding() {
  const { service_slug } = useParams<{ service_slug: string }>();
  const { heading, description } = useContext(ServicePageContext);

  let serviceBGImage;

  if (service_slug) {
    const { bgImage } = servicesData[service_slug];
    serviceBGImage = bgImage;
  }

  return (
    <main
      className="relative z-0 bg-contain bg-top bg-no-repeat pb-12"
      style={{
        backgroundImage: `url('${serviceBGImage}')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute -z-10 h-full w-full bg-[#000000BD]"></div>
      <Container className="flex flex-col justify-center gap-11">
        <div className="grid items-center pt-[30vh] max-md:text-center md:grid-cols-2 md:pt-[35vh]">
          <div className="text-l flex flex-col gap-4 font-bold">
            <MainHeading>{heading.ar}</MainHeading>
            <p className="bg-gradient-to-l from-[#999999] to-[#ffffff] bg-clip-text text-transparent">
              {description.ar}
            </p>
          </div>
        </div>
        <ServicesContainer />
      </Container>
    </main>
  );
}
export default ServiceLanding;
