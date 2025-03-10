import { useContext } from "react";
import Container from "../Container";
import ContactConsultationButtons from "../global/ContactConsultationButtons";
import MainHeading from "../global/MainHeading";
import logo from "/logo-right.png";
import { HomePageDataContext } from "../../pages/HomePage";
import { WebsiteLangContext } from "../../App";

function HomeLanding() {
  const { websiteLang } = useContext(WebsiteLangContext);
  const { landing } = useContext(HomePageDataContext);
  const { slogan, heading, description } = landing;

  return (
    <main>
      <Container className="grid min-h-screen items-center lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 max-lg:text-center md:mt-20">
          <div
            data-aos="fade-up"
            className="w-full overflow-hidden rounded-full bg-gradient-to-bl from-[#A7FFBC50] to-[#1E1E1E] p-[1px] max-lg:mx-auto md:w-fit"
          >
            <div className="flex items-center justify-center gap-4 rounded-full bg-black py-3 md:px-12 lg:px-6 ltr:lg:pr-20 rtl:lg:pl-20">
              <img src={logo} alt="Logo" className="w-6 ltr:scale-x-[-1]" />
              <p
                className="text-sm font-medium"
                dangerouslySetInnerHTML={{ __html: slogan[websiteLang] }}
              >
                {/*                 
                منصة <span className="font-semibold text-background">مثلث</span>{" "}
                شريك نجاحك الأول */}
              </p>
            </div>
          </div>

          <MainHeading>{heading[websiteLang]}</MainHeading>

          <p
            className="bg-gradient-to-l from-[#999999] to-[#ffffff] bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            {description[websiteLang]}
          </p>

          <ContactConsultationButtons className="w-full md:justify-center lg:justify-start" />
        </div>
      </Container>
    </main>
  );
}
export default HomeLanding;
