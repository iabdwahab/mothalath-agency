import Articles from "./components/articles/Index";
import Footer from "./components/footer/Index";
import Header from "./components/header/Index";
import HomeLanding from "./components/home_landing/Index";
import Questions from "./components/questions/Index";
import SliderSection from "./components/slider/Index";

import heroImage from "/imgs/hero.png";
import HomeFeatures from "./components/home_features/Index";
import StepsSection from "./components/steps/Index";
import Testimonials from "./components/testimonials/Index";
import MarketingSolutions from "./components/marketing_solution_section/Index";

function App() {
  return (
    <div className="relative overflow-x-hidden bg-contain bg-top text-white">
      <Header />

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
      <Testimonials />
      <Articles />
      <Questions />
      <Footer />
    </div>
  );
}
export default App;
