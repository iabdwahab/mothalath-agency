import { WebsiteLangContext } from "../../App";
import { ServicePageContext } from "../../context/pages/ServicePageContext";
import Container from "../Container";
import MainHeading from "../global/MainHeading";
import ServicesContainer from "./ServicesContainer";
import { useContext } from "react";

function ServiceLanding() {
  const { websiteLang } = useContext(WebsiteLangContext);

  const {
    landing: { landing_heading, landing_description, landing_background_image },
  } = useContext(ServicePageContext);

  return (
    <main
      className="relative z-0 bg-contain bg-top bg-no-repeat pb-12"
      style={{
        backgroundImage: `url('${landing_background_image}')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute -z-10 h-full w-full bg-[#000000BD]"></div>
      <Container className="flex flex-col justify-center gap-11">
        <div className="grid items-center pt-[30vh] max-md:text-center md:grid-cols-2 md:pt-[35vh]">
          <div className="text-l flex flex-col gap-4 font-bold">
            <MainHeading>{landing_heading[websiteLang]}</MainHeading>
            <p className="bg-gradient-to-l from-[#999999] to-[#ffffff] bg-clip-text text-transparent">
              {landing_description[websiteLang]}
            </p>
          </div>
        </div>
        <ServicesContainer />
      </Container>
    </main>
  );
}
export default ServiceLanding;
