import { useEffect } from "react";
import Articles from "./components/articles/Index";
// import Container from "./components/Container";
import Footer from "./components/footer/Index";
import BlurryCircle from "./components/global/BlurryCircle";
// import BlurryCircle from './components/global/BlurryCircle';
import Header from "./components/header/Index";
import HomeLanding from "./components/home_landing/Index";
import Questions from "./components/questions/Index";
import ServiceLanding from "./components/service_landing/Index";
// import ServiceCard from "./components/service_landing/ServiceCard";
// import ServicesContainer from "./components/service_landing/ServicesContainer";
import SliderSection from "./components/slider/Index";
import Testimonials from "./components/testimonials/Index";

import heroImage from "/imgs/hero.png";
import HomeFeatures from "./components/home_features/Index";

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
      <Testimonials />
      {/* <BlurryCircle direction="left" />
      <BlurryCircle direction="right" /> */}

      {/* <ServiceLanding /> */}
      {/* <BlurryCircle direction="right" /> */}

      <div className="relative">
        <BlurryCircle direction="right" />
        <SliderSection />
      </div>
      <Articles />
      <Questions />
      <Footer />
    </div>
  );
}
export default App;
