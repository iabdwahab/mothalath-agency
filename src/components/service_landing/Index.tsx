import { useParams } from "react-router-dom";
import Container from "../Container";
import MainHeading from "../global/MainHeading";
import ServicesContainer from "./ServicesContainer";
import { servicesData } from "./data";

function ServiceLanding() {
  const { service } = useParams<{ service: string }>();

  let serviceHeading, serviceDescription, serviceBGImage;

  if (service) {
    const { heading, description, bgImage } = servicesData[service];
    serviceHeading = heading;
    serviceDescription = description;
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
            <MainHeading>{serviceHeading}</MainHeading>
            <p className="bg-gradient-to-l from-[#999999] to-[#ffffff] bg-clip-text text-transparent">
              {serviceDescription}
            </p>
          </div>
        </div>
        <ServicesContainer />
      </Container>
    </main>
  );
}
export default ServiceLanding;
