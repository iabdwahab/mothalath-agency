import { createContext, useEffect, useState } from "react";
import HomeFeatures from "../components/home_features/Index";
import HomeLanding from "../components/home_landing/Index";
import MarketingSolutions from "../components/marketing_solution_section/Index";
import SliderSection from "../components/slider/Index";
import StepsSection from "../components/steps/Index";

import heroImage from "/imgs/hero.png";
import { homePageContentType } from "../types/homepageTypes";
import { defaultHomePageContent } from "../types/homepageTypesDefaultValues";

export const HomePageContext = createContext<homePageContentType>(
  defaultHomePageContent,
);

function HomePage() {
  const [pageData, setPageData] = useState<homePageContentType>(
    defaultHomePageContent,
  );
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(
      `http://localhost/wordpress/wp-json/wp/v2/pages?slug=home&_fields=acf`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          const { acf } = data[0];

          setPageData(acf);
        } else {
          setIsError(true);
        }
      });
  }, []);

  return (
    <HomePageContext.Provider value={pageData}>
      <div
        className="bg-no-repeat md:bg-[100%,100%]"
        style={{ backgroundImage: `url("${heroImage}")` }}
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
    </HomePageContext.Provider>
  );
}
export default HomePage;
