import Container from "../Container";
import MainHeading from "../global/MainHeading";
import ServicesContainer from "./ServicesContainer";

function ServiceLanding() {
  return (
    <main
      className="relative z-0 bg-contain bg-top bg-no-repeat"
      style={{
        backgroundImage: `url('/mothalath-agency/imgs/services/web-dev.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute -z-10 h-full w-full bg-[#000000BD]"></div>
      <Container className="flex flex-col justify-center gap-11">
        <div className="grid items-center pt-[35vh] max-md:text-center md:grid-cols-2">
          <div className="text-l flex flex-col gap-4 font-bold">
            <MainHeading>صمم موقعك الإلكتروني واحترف عالم الإنترنت</MainHeading>
            <p className="bg-gradient-to-l from-[#999999] to-[#ffffff] bg-clip-text text-transparent">
              نحن نساعدك في تحقيق ذلك! فريقنا من المصممين المهرة والمبرمجين
              المتخصصين يقدم لك حلول تصميم مواقع إلكترونية مبتكرة تلبي احتياجاتك
              وتتجاوز توقعاتك.
            </p>
          </div>
        </div>
        <ServicesContainer />
      </Container>
    </main>
  );
}
export default ServiceLanding;
