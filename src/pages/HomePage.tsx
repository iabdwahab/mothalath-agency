import { createContext } from "react";
import HomeFeatures from "../components/home_features/Index";
import HomeLanding from "../components/home_landing/Index";
import MarketingSolutions from "../components/marketing_solution_section/Index";
import SliderSection from "../components/slider/Index";
import StepsSection from "../components/steps/Index";

import heroImageRTL from "/imgs/hero-rtl.png";
import heroImageLTR from "/imgs/hero-ltr.png";
import { homePageContentType } from "../types/homepageTypes";
import { defaultHomePageContent } from "../types/homepageTypesDefaultValues";
import PageLoader from "../components/global/PageLoader";
import useHomePageData from "./data/useHomePageData";

export const HomePageDataContext = createContext<homePageContentType>(defaultHomePageContent);

function HomePage() {
  const { pageData, isLoading } = useHomePageData();

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <HomePageDataContext.Provider value={pageData}>
      <div
        className="bg-no-repeat md:bg-[100%,100%]"
        style={{
          backgroundImage: `url("${document.dir === "rtl" ? heroImageRTL : heroImageLTR}")`,
        }}
      >
        <HomeLanding />
        <HomeFeatures />
      </div>
      <MarketingSolutions />
      <StepsSection />
      <div className="relative">
        <span className="absolute left-0 top-1/2 -z-10 h-[334px] max-h-[50vh] w-[334px] max-w-[35vw] -translate-y-1/2 bg-background blur-[334px]"></span>
        <span className="absolute right-0 top-1/2 -z-10 h-[334px] max-h-[50vh] w-[334px] max-w-[35vw] -translate-y-1/2 bg-background blur-[334px]"></span>
        <SliderSection />
      </div>
    </HomePageDataContext.Provider>
  );
}
export default HomePage;
